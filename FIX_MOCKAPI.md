# Fix MockAPI 400 Error

Het probleem is dat MockAPI een resource schema nodig heeft voordat je data kunt opslaan.

## Oplossing:

### Optie 1: Schema aanmaken in MockAPI (aanbevolen)

1. Ga naar https://mockapi.io/projects/68fd3e1d96f6ff19b9f78630
2. Klik op je resource `quiz_progress`
3. Ga naar "Schema" tab
4. Voeg deze velden toe:
   - `user` (type: string)
   - `currentQuestionIndex` (type: number)
   - `score` (type: number)
   - `userAnswers` (type: array)
   - `categoryScores` (type: object)
   - `shuffledQuizData` (type: array)
   - `timestamp` (type: number)

### Optie 2: Laat de app localStorage gebruiken

Als MockAPI te veel gedoe is, werkt de app perfect met localStorage! 

Open `firebase-config.js` en verander:
```javascript
const API_ENDPOINT = "https://68fd3e1d96f6ff19b9f78630.mockapi.io/:endpoint";
```

Met `:endpoint` erin gebruikt de app automatisch localStorage.

## Testen:

1. Refresh je browser
2. Start quiz als "Lenny"
3. Beantwoord een vraag
4. Check browser console - zou "Voortgang opgeslagen" moeten zeggen

Als je de 400 error blijft zien, gebruik dan Optie 2 (localStorage) - werkt ook prima!

