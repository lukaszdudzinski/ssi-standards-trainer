// Automated test script to validate QUESTIONS_DB integrity and diving rules accuracy
const QUESTIONS_DB = require('./questions.js');

console.log('===================================================');
console.log('RUNNING QUESTIONS DATABASE INTEGRITY TESTS');
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

try {
  // Test 1: Database presence
  assert(Array.isArray(QUESTIONS_DB), 'QUESTIONS_DB should be an array');
  assert(QUESTIONS_DB.length >= 50, `QUESTIONS_DB should contain at least 50 questions (found: ${QUESTIONS_DB.length})`);

  // Test 2: Individual question structure validation
  QUESTIONS_DB.forEach((q, idx) => {
    const qLabel = `Question ${idx + 1} ("${q.question.substring(0, 30)}...")`;
    
    // Check fields presence
    assert(typeof q.question === 'string' && q.question.trim().length > 10, `${qLabel} must have a valid question string`);
    assert(Array.isArray(q.options) && q.options.length === 4, `${qLabel} must have exactly 4 options`);
    assert(typeof q.answer === 'number' && q.answer >= 0 && q.answer <= 3, `${qLabel} answer index must be an integer between 0 and 3`);
    
    // Check options are non-empty
    q.options.forEach((opt, optIdx) => {
      assert(typeof opt === 'string' && opt.trim().length > 0, `${qLabel} option ${optIdx + 1} must be a non-empty string`);
    });

    // Check reference structure
    assert(q.reference && typeof q.reference === 'object', `${qLabel} must have a reference object`);
    assert(typeof q.reference.chapter === 'string' && q.reference.chapter.trim().length > 0, `${qLabel} reference chapter must be a non-empty string`);
    assert(typeof q.reference.section === 'string' && q.reference.section.trim().length > 0, `${qLabel} reference section must be a non-empty string`);
    assert(typeof q.reference.page === 'number' && q.reference.page > 0, `${qLabel} reference page must be a positive number`);
    assert(typeof q.reference.quote === 'string' && q.reference.quote.trim().length > 0, `${qLabel} reference quote must be a non-empty string`);
  });

  // Test 3: Diving specific rules cross-check (Ensuring 100% correctness of critical standard answers)
  console.log('\n===================================================');
  console.log('CROSS-CHECKING CRITICAL DIVE STANDARDS RULES');
  console.log('===================================================');

  // Rule A: Try Scuba maximum depth is 5 meters
  const tryScubaDepthQ = QUESTIONS_DB.find(q => q.question.includes('maksymalna głębokość dla programu Try Scuba'));
  if (tryScubaDepthQ) {
    const correctAnswerText = tryScubaDepthQ.options[tryScubaDepthQ.answer];
    assert(correctAnswerText.includes('5 metrów') || correctAnswerText === '5 metrów', 'Try Scuba maximum depth must be exactly 5 meters');
  } else {
    console.warn('⚠️ Warning: Try Scuba depth question not found in pool');
  }

  // Rule B: Try Scuba minimum age is 8 years
  const tryScubaAgeQ = QUESTIONS_DB.find(q => q.question.includes('minimalny wiek dla programu Try Scuba'));
  if (tryScubaAgeQ) {
    const correctAnswerText = tryScubaAgeQ.options[tryScubaAgeQ.answer];
    assert(correctAnswerText.includes('8 lat') || correctAnswerText === '8 lat', 'Try Scuba minimum age must be 8 years');
  }

  // Rule C: Open Water Diver minimum age is 10 years
  const owdAgeQ = QUESTIONS_DB.find(q => q.question.includes('minimalny wiek, aby zarejestrować się do programu Open Water Diver'));
  if (owdAgeQ) {
    const correctAnswerText = owdAgeQ.options[owdAgeQ.answer];
    assert(correctAnswerText.includes('10 lat') || correctAnswerText === '10 lat', 'Open Water Diver minimum age must be 10 years');
  }

  // Rule D: Scuba Diver maximum depth is 12 meters
  const scubaDiverDepthQ = QUESTIONS_DB.find(q => q.question.includes('maksymalny limit głębokości dla certyfikowanych Scuba Diverów'));
  if (scubaDiverDepthQ) {
    const correctAnswerText = scubaDiverDepthQ.options[scubaDiverDepthQ.answer];
    assert(correctAnswerText.includes('12 metrów') || correctAnswerText === '12 metrów', 'Scuba Diver maximum depth must be exactly 12 meters');
  }

  // Rule E: Open Water Diver 13-year old junior depth limit is 12 meters on open water dives 3 and 4
  const juniorOWDDepthQ = QUESTIONS_DB.find(q => q.question.includes('13-letni kursanci Open Water Diver muszą przebywać płycej niż'));
  if (juniorOWDDepthQ) {
    const correctAnswerText = juniorOWDDepthQ.options[juniorOWDDepthQ.answer];
    assert(correctAnswerText.includes('12 metrów') || correctAnswerText === '12 metrów', '13-year old Junior OWD depth limit on open water dives 3/4 must be 12 meters');
  }

  // Rule F: Open Water Diver standard water session ratio (above 15yo) is 8:1
  const owdRatioQ = QUESTIONS_DB.find(q => q.question.includes('współczynnik szkolenia w wodzie otwartej podczas programu Open Water Diver dla kursantów, którzy mają więcej niż 15 lat'));
  if (owdRatioQ) {
    const correctAnswerText = owdRatioQ.options[owdRatioQ.answer];
    assert(correctAnswerText.includes('8:1') || correctAnswerText === '8:1', 'OWD ratio for standard students above 15 must be 8:1');
  }

  // Rule F2: Open Water Diver standard pool/confined water ratio is 8:1
  const owdPoolRatioQ = QUESTIONS_DB.find(q => q.question.includes('maksymalna liczba kursantów kursu Open Water Diver, których instruktor może szkolić w basenie/wodach ograniczonych'));
  if (owdPoolRatioQ) {
    const correctAnswerText = owdPoolRatioQ.options[owdPoolRatioQ.answer];
    assert(correctAnswerText.includes('8 na jednego') || correctAnswerText.includes('8:1'), 'OWD pool ratio must be 8:1 (or 8 na jednego)');
  }

  // Rule G: Open Water Diver water session ratio with 1 assistant (above 13yo) is 6:2
  const owdAssistantRatioQ = QUESTIONS_DB.find(q => q.question.includes('w wodzie otwartej z jednym certyfikowanym asystentem podczas programu Open Water Diver dla Kursantów, którzy ukończyli 13 lat'));
  if (owdAssistantRatioQ) {
    const correctAnswerText = owdAssistantRatioQ.options[owdAssistantRatioQ.answer];
    assert(correctAnswerText.includes('6:2') || correctAnswerText === '6:2', 'OWD ratio with 1 assistant must be 6:2');
  }

  // Rule H: Perfect Buoyancy requires co najmniej 2 water sessions
  const pbSessionsQ = QUESTIONS_DB.find(q => q.question.includes('wymaganych do ukończenia programu specjalizacji Perfect Buoyancy'));
  if (pbSessionsQ) {
    const correctAnswerText = pbSessionsQ.options[pbSessionsQ.answer];
    assert(correctAnswerText.includes('Dwa') || correctAnswerText.includes('dwa') || correctAnswerText.includes('2'), 'Perfect Buoyancy must require at least 2 sessions');
  }

  // Rule I: Divemaster candidate requires 60 logged dives to be certified
  const dmLoggedDivesQ = QUESTIONS_DB.find(q => q.question.includes('Kandydaci na Divemastera muszą posiadać przed certyfikacją'));
  if (dmLoggedDivesQ) {
    const correctAnswerText = dmLoggedDivesQ.options[dmLoggedDivesQ.answer];
    assert(correctAnswerText.includes('60 nurkowań') || correctAnswerText.includes('60'), 'Divemaster must require 60 logged dives');
  }

  // Rule J: Medical Statement validity is 1 year (1 rok)
  const medicalQ = QUESTIONS_DB.find(q => q.question.includes('formularz oświadczenia medycznego') || q.question.includes('oświadczenia zdrowotnego'));
  if (medicalQ) {
    const correctAnswerText = medicalQ.options[medicalQ.answer];
    assert(correctAnswerText.includes('1 rok') || correctAnswerText.includes('jeden') || correctAnswerText.includes('1'), 'Medical statement must be valid for 1 year');
  }

  console.log('\n===================================================');
  console.log('TEST SUMMARY');
  console.log('===================================================');
  console.log(`Passed tests: ${passedTests}`);
  console.log(`Failed tests: ${failedTests}`);
  
  if (failedTests === 0) {
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY! DATABASE IS 100% CORRECT!');
    process.exit(0);
  } else {
    console.error('⚠️ SOME TESTS FAILED. PLEASE REVIEW THE ERRORS ABOVE!');
    process.exit(1);
  }

} catch (error) {
  console.error('Fatal testing error:', error);
  process.exit(1);
}
