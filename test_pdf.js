const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('STANDARDS-SCUBA_Polish_IM.pdf');

pdf(dataBuffer).then(function(data) {
    console.log("Pages:", data.numpages);
    console.log("Info:", data.info);
    console.log("First 200 chars:", data.text.substring(0, 200));
}).catch(err => console.log("ERROR:", err));
