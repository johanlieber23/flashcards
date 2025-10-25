// Simpele Cloud Storage Configuratie
// Gebruikt een gratis JSON storage API - geen database setup nodig!

// OPTIE 1: MockAPI.io (AANBEVOLEN - gratis en makkelijk)
// 1. Ga naar https://mockapi.io en maak gratis account
// 2. Maak een nieuw project
// 3. Maak een resource aan genaamd "quiz_progress"
// 4. Kopieer je API endpoint hieronder

// BELANGRIJK: Vervang :endpoint met je resource naam!
// Stap 1: Ga naar https://mockapi.io/projects/68fd3e1d96f6ff19b9f78630
// Stap 2: Klik "New Resource" 
// Stap 3: Geef het de naam "quiz_progress" (of iets anders)
// Stap 4: Vervang hieronder ":endpoint" met je resource naam

const API_ENDPOINT = "https://68fd3e1d96f6ff19b9f78630.mockapi.io/quiz_progress";

// OPTIE 2: JSONBin.io (ook gratis)
// 1. Ga naar https://jsonbin.io en maak gratis account  
// 2. Maak een nieuwe Bin
// 3. Kopieer je Bin ID hieronder
// const API_ENDPOINT = "https://api.jsonbin.io/v3/b/JE_BIN_ID";
// const API_KEY = "JE_API_KEY"; // Optioneel voor beveiliging

// Check of API endpoint is geconfigureerd
let useCloudStorage = false;

if (API_ENDPOINT && !API_ENDPOINT.includes("JE_") && !API_ENDPOINT.includes(":endpoint")) {
    useCloudStorage = true;
    console.log('Cloud storage actief:', API_ENDPOINT);
} else {
    console.log('Cloud storage niet geconfigureerd, gebruikt localStorage');
}
