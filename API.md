# endpointy API dla łatwiejszego dostępu 


# API - Endpointy

# Unifikacja API

Ogólne zasady komunikacji z API i zarządzania treściami w  bazie danych. Tworząc bądź edytując jakikolwiek element w jego obiekcie nie dawaj pola `_id` , bo jest ono zarezerwowane dla backendu, który każdorazowo stworzy go jako uuid albo timestamp. MongoDB z którego korzystamy jest elastyczne, więc obiekty tworzone w bazie mogą wyglądać jakkolwiek.

| METHOD | URL         | BODY                                       | RESPONSE                       | Opis                                                            |
|--------|-------------|--------------------------------------------|--------------------------------|-----------------------------------------------------------------|
| GET    | <nazwa>/    | -                                          | Array of elements/null/401     | Pobranie wszystkich elementów danej treści z bazy danych.       |
| GET    | <nazwa>/:id | -                                          | Single element object/null/401 | Pobranie pojedynczego elementu o _id takim jak :id              |
| POST   | <nazwa>/    | Single element body object (bez _id)       | 201/401/Error message          | Tworzy pojedynczy element, dodaje _id, zapisuje w bazie danych. |
| PATCH  | <nazwa>/:id | Single element body object (zmodyfikowany) | 200/401/404/Error message      | Pobranie pojedynczego elementu o _id takim jak :id              |
| DELETE | <nazwa>/:id | -                                          | 200/401/404/Error message      | Pobranie pojedynczego elementu o _id takim jak :id              |

### Odpowiedzi API (RESPONSES):

- `201` - Element pomyślnie utworzony
- `401` - Brak uprawnień do zarządzania/dostępu do tej treści
- `404` - brak takiego elementu w bazie danych
- `200` - OK - operacja wykonana pomyślnie
- `null`
- `Array` (lista elementów)
- `Element` (obiekt elementu)

## Auth && sesja, dane użytkownika

Użytkownik logując się przechodzi na stronę Discorda, gdzie potwierdza uwierzytelnienie, Discord zwraca token, który, za pomocą `passport-strategy` jest dodawany do cookies użytkownika , sprawiając, że jest on zalogowany.

| METHOD | URL              | BODY | RESPONSE            | AUTH (rola?) | Opis                                                                                      |
|--------|------------------|------|---------------------|--------------|-------------------------------------------------------------------------------------------|
| GET    | /auth/discord    | --   | Redirect to Discord | --           | Przekierowuje na stronę Discorda gdzie użytkownik musi potwierdzić autoryzację strony UKI |
| GET    | /auth/me         | --   | User session object | true         | Aktualizuje informacje o zalogowanym użytkowniku i zwraca jego sesję (wolniejsze)         |
| GET    | /auth/my-session | --   | User session object | true         | Zwraca obecną sesję użytkownika, bez jej odświeżania (szybsze)                            |
| GET    | /auth/logout     | --   | Redirect to /       | true         | Wylogowuje użytkownika, usuwa sesję                                                       |

## Użytkownicy

| METHOD | URL        | BODY        | RESPONSE    | AUTH (rola?) | Opis                                                                                                                             |
|--------|------------|-------------|-------------|--------------|----------------------------------------------------------------------------------------------------------------------------------|
| GET    | /users     | --          | Users array | `admin`      | Zwraca wszystkich użytkowników                                                                                                   |
| GET    | /users/:id | --          | User object | `admin`      | Zwraca użytkownika o podanym   :id                                                                                               |
| PATCH  | /users/:id | User object | 200/Error   | `admin`      | Edytuje konkretnego użytkownika - edytować można tak na prawdę tylko jego role na stronie, bo cała reszta się i tak aktualizuje. |
| DELETE | /users/:id | --          | DB response | `admin`      | Usówa użytkownika o podanym ID                                                                                                   |

Użytkownicy posiadają role z Discorda oraz role respektowane na stronie (np. `admin`, `writer`) 

## Artukuły

| METHOD | URL                      | BODY           | RESPONSE            | AUTH (rola?) | Opis                                       |
|--------|--------------------------|----------------|---------------------|--------------|--------------------------------------------|
| GET    | /articles                | --             | Articles array/null | --           | Zwraca wszystkie artykuły                  |
| GET    | /articles/last/:number   | --             | Articles array/null | --           | Zwraca ostatnie :number artykułów          |
| GET    | /articles/:id            | --             | Article object/null | --           | Zwraca artykuł o podanym id                |
| GET    | /articles/search/:phrase | --             | Articles array/null | --           | Zwraca artykuł wyszukany za pomocą :phrase |
| POST   | /articles                | Article object | 201/Error           | `writer`     | Tworzy nowy artykuł                        |
| PATCH  | /articles/:id            | Article object | 200/Error           | `writer`     | Edytuje istniejący artykuł                 |
| DELETE | /articles/:id            | --             | 200/Error           | `writer`     | Usuwa artykuł o :id                        |

## Przekierowania

| METHOD | URL            | BODY           | RESPONSE             | AUTH (rola?) | Opis                               |
|--------|----------------|----------------|----------------------|--------------|------------------------------------|
| GET    | /redirects     | --             | Redirect array/null  | --           | Zwraca wszystkie przekierowania    |
| GET    | /redirects/:id | --             | Redirect object/null | --           | Zwraca przekierowanie o podanym id |
| POST   | /redirects     | Redirect object| 201/Error            | writer       | Tworzy nowe przekierowanie         |
| DELETE | /redirects/:id | --             | 200/Error            | writer       | Usuwa przekierowanie o :id         |

## Pytania

| METHOD | URL            | BODY           | RESPONSE             | AUTH (rola?) | Opis                               |
|--------|----------------|----------------|----------------------|--------------|------------------------------------|
| GET    | /questions     | --             | Question array/null  | --           | Zwraca wszystkie pytania           |
| GET    | /questions/:id | --             | Question object/null | --           | Zwraca pytanie o podanym id        |
| POST   | /questions     | Question object| 201/Error            | admin        | Tworzy nowe pytanie                |
| DELETE | /questions/:id | --             | 200/Error            | admin        | Usuwa pytanie o :id                |

## Pytania

| METHOD | URL            | BODY           | RESPONSE             | AUTH (rola?) | Opis                               |
|--------|----------------|----------------|----------------------|--------------|------------------------------------|
| GET    | /questions     | --             | Question array/null  | --           | Zwraca wszystkie pytania           |
| GET    | /questions/:id | --             | Question object/null | --           | Zwraca pytanie o podanym id        |
| POST   | /questions     | Question object| 201/Error            | admin        | Tworzy nowe pytanie                |
| DELETE | /questions/:id | --             | 200/Error            | admin        | Usuwa pytanie o :id                |

## Partnerzy

| METHOD | URL            | BODY           | RESPONSE             | AUTH (rola?) | Opis                               |
|--------|----------------|----------------|----------------------|--------------|------------------------------------|
| GET    | /partners      | --             | Partner array/null   | --           | Zwraca wszystkich partnerów        |
| GET    | /partners/:id  | --             | Partner object/null  | --           | Zwraca partnera o podanym id       |
| POST   | /partners      | Partner object | 201/Error            | admin        | Tworzy nowego partnera             |
| DELETE | /partners/:id  | --             | 200/Error            | admin        | Usuwa partnera o :id               |

## Pliki

| METHOD | URL            | BODY           | RESPONSE            | AUTH (rola?) | Opis                               |
|--------|----------------|----------------|---------------------|--------------|------------------------------------|
| GET    | /files/:nazwa  | --             | 200/error           | --           | Zwraca wszystkie dany plik         |
| POST   | /files         | File           | 201/error           | writer       | Wysyła nowy plik na serwer         |

## Static data

Static data to elementy statyczne, takie jak opisy about na stronie, czy dane kontaktowe. Zapisane są w bazie danych jako lista obiektów, gdzie każdy ma swój identyfikator jako `name` i treść w `content` .

| METHOD | URL                 | BODY                                | RESPONSE          | AUTH (rola?) | Opis                                                                                                                                        |
|--------|---------------------|-------------------------------------|-------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| GET    | /static-data        | --                                  | Static data array | --           | Zwraca listę wszystkich danych statycznych                                                                                                  |
| GET    | /static-data/:names | --                                  | Static data array | --           | Zwraca listę danych statycznych których nazwy zostały zapisane jako :names i rozdzielone przecinkiem (np. /static-data/about,contact,rules) |
| PATCH  | /static-data/:name  | String (sama nowa treść jako tekst) | 200/Error         | `admin`      | Edycja treści danego elementu statycznego                                                                                                   |

## Zgłoszenia (Projekty, Programiści, Mentorzy, Konkursy)

Treści, które są tworzone przez zgłoszenie ich, trafiają najpierw do bazy zgłoszeń, gdzie oczekują na akceptację, mogą z tamtąd zostać usunięte, albo zaakceptowane - czyli przeniesione do właściwej bazy danych danej treści np. do bazy projektów. W przypadku mentorów , po akceptacji, jest im dodawana po prostu rola `MENTOR`.

### Zgłoszenia [projektu](#projekty)

| METHOD | URL                              | BODY           | RESPONSE            | AUTH (rola?) | Opis                                                                             |
|--------|----------------------------------|----------------|---------------------|--------------|----------------------------------------------------------------------------------|
| GET    | /submissions/projects            | --             | Projects array/null | `admin`      | Zwraca wszystkie niezaakceptowane i nie usunięte zgłoszenia na projekt           |
| POST   | /submissions/projects            | Project object | 201/Error           | `user`       | Dodaje nowe zgłoszenie na projekt                                                |
| DELETE | /submissions/projects/:id        | --             | 200/Error           | `admin`      | Usunięcie zgłoszenia z bazy zgłoszeń (odrzucenie)                                |
| PUT    | /submissions/projects/accept/:id | --             | 200/Error           | `admin`      | Akceptacja zgłoszenia; usunięcie go z bazy zgłoszeń projektów do bazy projektów. |

### Zgłoszenia na programistę

| METHOD | URL                                 | BODY              | RESPONSE          | AUTH (rola?) | Opis                                                        |
|--------|-------------------------------------|-------------------|-------------------|--------------|-------------------------------------------------------------|
| GET    | /submissions/programmers            | --                | Programmers array | `admin`      | Zwraca wszystkie niezaakceptowane zgłoszenia na programistę |
| POST   | /submissions/programmers            | Programmer object | 201/Error         | `user`       | Dodaje nowe zgłoszenie na programistę                       |
| DELETE | /submissions/programmers/:id        | -                 | 200/Error         | `admin`      | Usuwa zgłoszenie (odrzuca)                                  |
| PUT    | /submissions/programmers/accept/:id | --                | 200/Error         | `admin`      | Akceptacja zgłoszenia; stworzenie nowego programisty        |

### Zgłoszenie na mentora

| METHOD | URL                             | BODY          | RESPONSE      | AUTH (rola?) | Opis                                                            |
|--------|---------------------------------|---------------|---------------|--------------|-----------------------------------------------------------------|
| GET    | /submissions/mentors            | --            | Mentors array | `admin`      | Zwraca wszystkie niezaakceptowane zgłoszenia na mentora         |
| POST   | /submissions/mentors            | Mentor object | 201/Error     | `user`       | Dodaje nowe zgłoszenie na mentora                               |
| DELETE | /submissions/mentors/:id        | --            | 200/Error     | `admin`      | Odrzucenie zgłoszenia na mentora.                               |
| PUT    | /submissions/mentors/accept/:id | --            | 200/Error     | `admin`      | Akceptacja zgłoszenia; dodanie danemu użytkownikowi roli MENTOR |

### Zgłoszenia [konkursu](#konkursy)

| METHOD | URL                                  | BODY               | RESPONSE           | AUTH (rola?) | Opis                                                    |
|--------|--------------------------------------|--------------------|--------------------|--------------|---------------------------------------------------------|
| GET    | /submissions/competitions            | --                 | Competitions array | `admin`      | Zwraca wszystkie niezaakceptowane zgłoszenia na konkurs |
| POST   | /submissions/competitions            | Competition object | 201/Error          | `user`       | Dodaje nowe zgłoszenie na konkurs                       |
| DELETE | /submissions/competitions/:id        | --                 | 200/Error          | `admin`      | Odrzucenie zgłoszenia                                   |
| PUT    | /submissions/competitions/accept/:id | --                 | 200/Error          | `admin`      | Akceptacja zgłoszenia; stworzenie nowego konkursu       |

## Projekty

Dotyczy zaakceptowanych już projektów (projekt może być stworzony tylko przez [zgłoszenie](#zgłoszenia-projektu) ) dopiero kiedy jest już zgłoszony, może być edytowany/usunięty przez jego właściciela.

| METHOD | URL           | BODY           | RESPONSE       | AUTH (rola?) | Opis                                    |
|--------|---------------|----------------|----------------|--------------|-----------------------------------------|
| GET    | /projects     | --             | Projects array | --           | Zwraca wszystkie zaakceptowane projekty |
| GET    | /projects/:id | --             | Project array  | --           | Zwraca konkretny projekt                |
| PATCH  | /projects/:id | Project object | 200/Error      | `user`       | Edycja projektu                         |
| DELETE | /projects/:id | --             | 200/Error      | `user`       | Usuwanie projektu                       |

W przyszłości powinna być zapoewniona możliwość edycji i usówania takiego projektu tylko przez jego właściciela, czyli cutom role.

## Konkursy

Dotyczy zaakceptowanych już konkursów (można je tworzyć tylko przez [zgłoszenie](#zgłoszenia-konkursu))

**UWAGA - myślę, że w przyszłości usunę zgłoszenia jako osobny endpoint i po prostu w api każdego z tych elementów ustawię by dodawał się do przedsionkowej bazy zgłoszeń, to osobne API zgłoszeń jest  niepotrzebne**

| METHOD | URL               | BODY               | RESPONSE           | AUTH (rola?) | Opis                                             |
|--------|-------------------|--------------------|--------------------|--------------|--------------------------------------------------|
| GET    | /competitions     | --                 | Competitions array | --           | Zwraca wszystkie konkursy (zaakceptowane)        |
| GET    | /competitions/:id | --                 | Competition object | --           | Zwraca dany konkurs                              |
| PATCH  | /competitions/:id | Competition object | 200/Error          | `user`       | Edycja istniejącego, zaakceptowanego konkursu    |
| DELETE | /competitions/:id | -                  | 200/Error          | `user`       | Usunięcie istniejącego, zaakceptowanego konkursu |

## Role (respektowane na stronie)

Uważam, że obecna forma nadawania uprawnień różnym użytkownikom strony jest niezoptymalizowana i błędna. Uważam, że powinno to być nierozdzielone z [rolami na discordzie](#role-z-serwera-discord), wprowadza dużo zamieszania.

| METHOD | URL        | BODY | RESPONSE    | AUTH (rola?) | Opis                                              |
|--------|------------|------|-------------|--------------|---------------------------------------------------|
| GET    | /roles     | --   | Roles array | --           | Zwraca wszystkie role respektowane na stronie uki |
| GET    | /roles/:id | --   | Role object | --           | Zwraca obiekt konkretnej roli                     |

## Role z serwera Discord

| METHOD | URL                              | BODY                      | RESPONSE          | AUTH (rola?) | Opis                                                |
|--------|----------------------------------|---------------------------|-------------------|--------------|-----------------------------------------------------|
| GET    | /discord-roles                   | --                        | Guild roles array | --           | Zwraca wszystkie role z serwera na Discordzie       |
| GET    | /discord-roles/:id               | --                        | Guild role object | --           | Zwraca konkretną rolę z serwera DC                  |
| PUT    | /discord-roles/set-roles/:userId | DC Guild roles id's array | 200/Error         | --           | Zmienia role danego użytkownika na te podane w body |

## Contact
| METHOD | URL      | BODY                     | RESPONSE | AUTH (rola?) | Opis                             |
|--------|----------|--------------------------|----------|--------------|----------------------------------|
| POST   | /contact | `{name, email, content}` | 200      | --           | Wysyła wiadomość na skrzynkę UKI |

