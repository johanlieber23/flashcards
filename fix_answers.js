// Script om alle quiz antwoorden even lang te maken
const fs = require('fs');

// Lees het script.js bestand
let content = fs.readFileSync('script.js', 'utf8');

// Vind alle antwoord arrays en maak ze even lang
const answerPattern = /answers:\s*\[([\s\S]*?)\]/g;
let match;

while ((match = answerPattern.exec(content)) !== null) {
    const answersText = match[1];
    const answers = answersText.split(',').map(a => a.trim().replace(/^"|"$/g, ''));
    
    // Check of antwoorden verschillende lengtes hebben
    const lengths = answers.map(a => a.length);
    const minLength = Math.min(...lengths);
    const maxLength = Math.max(...lengths);
    
    if (maxLength - minLength > 10) { // Als verschil > 10 karakters
        console.log('Problematische antwoorden gevonden:');
        console.log(answers);
        console.log('Lengtes:', lengths);
        console.log('---');
    }
}

console.log('Analyse voltooid. Check de output hierboven voor problematische vragen.');
