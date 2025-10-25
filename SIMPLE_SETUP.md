# Simpele Cloud Setup (Geen Database!)

Super simpel - je hebt geen database nodig! 

## Optie 1: MockAPI.io (AANBEVOLEN - 2 minuten)

1. Ga naar https://mockapi.io
2. Maak een gratis account (gewoon email + wachtwoord)
3. Klik "New Project"
4. Geef project een naam (bijv. "quiz-app")
5. Klik "Create"
6. Klik "New Resource"
7. Naam: `quiz_progress`
8. Klik "Create"
9. Kopieer je API endpoint (bijv. `https://abc123.mockapi.io/quiz_progress`)
10. Open `firebase-config.js`
11. Vervang `JE_PROJECT_ID` met je MockAPI URL
12. Klaar! 🎉

**Voordeel:** 
- Gratis
- Werkt meteen
- Simpel te gebruiken

---

## Optie 2: JSONBin.io (Met account)

1. Ga naar https://jsonbin.io en maak gratis account
2. Klik "Create Bin"
3. Plak dit JSON:
```json
[]
```
4. Kopieer je Bin ID
5. In `firebase-config.js`, vervang de URL met:
```javascript
const API_ENDPOINT = "https://api.jsonbin.io/v3/b/YOUR_BIN_ID";
```

---

## Geen zin om iets te setupen?

**Geen probleem!** Laat de configuratie leeg (met `JE_` erin) en de app werkt gewoon met localStorage. Voortgang wordt dan alleen lokaal opgeslagen per browser.

---

## Testen

1. Configureer MockAPI zoals hierboven
2. Start quiz als "Lenny" 
3. Beantwoord een paar vragen
4. Open zelfde pagina op telefoon/ander apparaat
5. Login als "Lenny" - voortgang zou moeten syncen! ✨

---

## Troubleshooting

- **"Cloud storage niet geconfigureerd"**: Je hebt de URL nog niet ingevuld in `firebase-config.js`
- **Voortgang synchroniseert niet**: Check of je de MockAPI URL correct hebt gekopieerd
- **Werkt niet**: App valt automatisch terug op localStorage (werkt dan alleen lokaal)
