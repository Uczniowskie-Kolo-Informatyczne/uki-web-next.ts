# UKI WEB - Zasady Kontrybucji

## Issues

Do zgłaszania bugów, sugestii lub ewentualnych poprawek korzystamy z GitHub Issues.

## Stack technologiczny

- TypeScript
- Next.js
- React Query
- Formik
- Tailwind

## Praca lokalna

Przed przystąpieniem do pracy należy skopiować plik `.env-sample` do `.env`.
Projekt uruchamiamy jednym poleceniem `npm run dev`. Spowoduje ono instalację wszystkich potrzebnych zależności oraz uruchomienie naszej aplikacji.
Po chwili powinna być gotowa pod adresem http://localhost:3000/

## Testy

W projekcie piszemy testy. Testujemy jedynie sensowne ficzery i zachowania komponentów. Pull requesty bez testów nie mogą być mergowane.

## Konwencje

Większość konwencji w projekcie jest wymuszona przez `prettier` i/lub `eslint` oraz TypeScripta.

Ważna uwaga odnośnie tworzenia Pull Requestów: korzystamy z "Conventional Commits". **Nazwy commitów mogą być dowolne**, ale **tytuł samego PR-a musi spełniać określone wymagania**! Więcej informacji oraz przykłady można znaleźć tutaj: https://highlab.pl/conventional-commits/

**Tytuły i opisy PR-ów piszemy w języku angielskim!**
