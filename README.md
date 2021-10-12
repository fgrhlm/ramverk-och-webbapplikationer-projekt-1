# Hinn med spåran!

## Backend (NodeJS+Express)
Körs lokalt med ```cd web && npm install && npm run dev```

Backenden finns här bara för att hämta data från [Digitransits API](https://digitransit.fi/en/developers/) och paketera om datan till ett
för frontenden smidigare format.

[Digitransits API](https://digitransit.fi/en/developers/) konsumerar graphql queries och spottar tillbaka JSON.
För denna applikation hämtas från APIn:
- Namnet på station med ID: **HSL:1240418**, detta är Kumpulan Kampus hållplatsen nära Arcada
- Alla kommande spårvagnar inklusive deras namn, uppskattad avgångstid från kumpulan kampus samt linjens nummer

### Flöde:
1. Användare vill ha data
2. Backenden hämtar datan från Digitransit
3. Alla timestamps från digitransit kommer i formatet "sekunder efter midnatt". Konvertera dessa till vettiga strängar för presentation
4. Paketera snyggt ihop alla datapunkter
5. Användaren tar emot objektet i JSON format

---

## Frontend (VueJS)
Körs lokalt med ```cd web && npm install && npm run dev```

Frontenden är scaffoldad med Vite istället för vue-cli.

Appen består av 3 komponenter:
- App
- Feed
- Departure

## Departure

Departure komponenten är den minsta beståndsdelen och är en presentationskomponent. Den tar in data genom props och presenterar
den i komponentens templatesektion.

### Feed

Feeden håller flera **Departure** komponenter.

Komponenten upprepar samma procedur var tredje sekund. (implementerat genom en setInterval i komponentens mounted() metod).

Flöde:
- Hämtar data från backenden genom ett GET request (använder [axios](https://github.com/axios/axios) i detta projekt)
- Presenterar tidpunkt när man senast måste börja gå från arcada för att hinna med nästa spårvagn
- Presenterar kommande spårvagnars tidpunkter samt namn osv.

### App

Agerar mest bara som container för komponenten Feed. Enda intressanta är kanske att fonten som jag använde för projektet, [Concert One](https://fonts.google.com/specimen/Concert+One?query=Concert+One#standard-styles) importeras i App komponentens style sektion.