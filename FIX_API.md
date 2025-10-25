# Fix: MockAPI Resource Ontbreekt

De API endpoint is bijna goed, maar de resource `quiz_progress` bestaat nog niet.

## Snelle Fix:

### Optie 1: Resource aanmaken in MockAPI (aanbevolen)

1. Ga naar https://mockapi.io
2. Login met je account
3. Open je project (ID: 68fd3e1d96f6ff19b9f78630)
4. Klik "New Resource"
5. Resource naam: `quiz_progress` (zonder quotes)
6. Klik "Create"
7. Klaar! ✅

### Optie 2: Andere resource naam gebruiken

Als je al een andere resource hebt aangemaakt (bijv. `users`, `progress`, etc.):
- Open `firebase-config.js`
- Vervang `quiz_progress` met je eigen resource naam
- Bijv: `...mockapi.io/users` of `...mockapi.io/progress`

### Testen:

Open de browser console (F12) bij je quiz:
- Zie je "Cloud storage actief"? Dan werkt het! ✅
- Zie je "Cloud storage niet geconfigureerd"? Dan moet je de resource nog aanmaken

### Nog steeds niet?

Gebruik gewoon localStorage - werkt ook prima! Laat de configuratie leeg en de app werkt lokaal.

