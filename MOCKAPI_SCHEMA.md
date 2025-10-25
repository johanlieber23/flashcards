# MockAPI Schema Setup voor quiz_progress

## Stap-voor-stap:

### 1. Resource Name:
```
quiz_progress
```

### 2. Schema (voeg deze velden toe):

Klik op "Add field" voor elk veld:

1. **user** 
   - Type: `string`
   - Faker.js: (laat leeg of gebruik `$name.firstName`)

2. **currentQuestionIndex**
   - Type: `number`
   - Faker.js: (laat leeg)

3. **score**
   - Type: `number`
   - Faker.js: (laat leeg)

4. **userAnswers**
   - Type: `array`
   - Faker.js: (laat leeg)

5. **categoryScores**
   - Type: `object`
   - Faker.js: (laat leeg)

6. **shuffledQuizData**
   - Type: `array`
   - Faker.js: (laat leeg)

7. **timestamp**
   - Type: `number`
   - Faker.js: (laat leeg)

### 3. Simpelste optie (aanbevolen):

Laat het Schema GEWOON LEEG! MockAPI accepteert dan elke data structuur die je stuurt.

- Klik gewoon "Create Resource" zonder velden toe te voegen
- MockAPI accepteert dan alle JSON data die je stuurt
- Werkt perfect voor onze use case!

### 4. Endpoints:

Laat alles zoals het is (default instellingen zijn goed).

### 5. Klik "Create Resource"

Klaar! 🎉

## Test:

Na het aanmaken, refresh je quiz app en probeer opnieuw. De 400 errors zouden nu weg moeten zijn!

