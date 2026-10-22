// Unit test of the sw.js activate handler: it must delete only this app's caches.
// The domain lukaszdudzinski.github.io is shared by several UKIS apps.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('===================================================');
console.log('RUNNING SERVICE WORKER ACTIVATE TESTS');
console.log('===================================================');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`✅ PASSED: ${message}`);
  } else {
    failedTests++;
    console.error(`❌ FAILED: ${message}`);
  }
}

(async () => {
  try {
    const source = fs.readFileSync(path.join(__dirname, '..', '..', 'sw.js'), 'utf8');
    const CURRENT = source.match(/const CACHE_NAME = '([^']+)';/)[1];

    function loadSw(initialKeys) {
      const store = new Set(initialKeys);
      const deleted = [];
      const handlers = {};
      let claimed = false;
      const caches = {
        keys: async () => [...store],
        delete: async (name) => {
          deleted.push(name);
          return store.delete(name);
        },
        open: async () => ({ addAll: async () => {} }),
        match: async () => undefined,
      };
      const self = {
        addEventListener: (type, fn) => {
          handlers[type] = fn;
        },
        skipWaiting: () => Promise.resolve(),
        clients: {
          claim: async () => {
            claimed = true;
          },
        },
      };
      vm.runInNewContext(source, {
        self,
        caches,
        fetch: async () => ({}),
        console: { log() {}, error() {} },
      });
      return { store, deleted, handlers, wasClaimed: () => claimed };
    }

    async function activate(sw) {
      let pending;
      sw.handlers.activate({ waitUntil: (p) => { pending = p; } });
      await pending;
    }

    // Scenario A: own current + own legacy caches + neighbouring UKIS apps' caches
    const sw = loadSw([
      CURRENT,
      'ssi-standards-trainer-v1.1',
      'ssi-standards-trainer-v2026.6.06.03',
      'ukis-bodybuild-v1',
      'ukis-bikelog-v1',
      'ukis-dive-tools-v1',
      'ukis-bodybuild-v2026.10.15.01',
    ]);
    assert(typeof sw.handlers.activate === 'function', 'sw.js registers an activate handler');
    await activate(sw);
    assert(sw.store.has(CURRENT), `activate keeps the current cache ${CURRENT}`);
    assert(!sw.store.has('ssi-standards-trainer-v1.1'), 'activate deletes own legacy cache ssi-standards-trainer-v1.1');
    assert(!sw.store.has('ssi-standards-trainer-v2026.6.06.03'), 'activate deletes own old cache ssi-standards-trainer-v2026.6.06.03');
    for (const n of ['ukis-bodybuild-v1', 'ukis-bikelog-v1', 'ukis-dive-tools-v1', 'ukis-bodybuild-v2026.10.15.01']) {
      assert(sw.store.has(n), `activate keeps neighbour cache ${n}`);
    }
    assert(sw.wasClaimed(), 'activate calls clients.claim()');

    // Scenario B: fresh install, only the current cache exists
    const fresh = loadSw([CURRENT]);
    await activate(fresh);
    assert(fresh.deleted.length === 0, 'fresh install deletes nothing');
    assert(fresh.wasClaimed(), 'fresh install calls clients.claim()');
  } catch (err) {
    failedTests++;
    console.error('❌ FAILED: unexpected error', err);
  }

  console.log('===================================================');
  console.log(`Passed tests: ${passedTests}`);
  console.log(`Failed tests: ${failedTests}`);
  console.log('===================================================');
  process.exit(failedTests === 0 ? 0 : 1);
})();
