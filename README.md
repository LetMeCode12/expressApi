# O aplikacji:
Aplikacja pozwala na zakodowanie danej wiadomości oraz jej rozkodowanie.
Aplikacja posiada wymaga zalogowania, logowanie oparte jest o zabespieczenia JWT.
W aplikacji do szyfrowanie danych wykorzystano algorytm SHA-256.

## Sposób działania:
Aby uruchomić aplikacje należy w terminalu wpisać polecenie - docker-compose up --build.
Następnie aplikacja uruchomi się pod adresem http://localhost:3000.
Aplikacja wymaga podania hasła oraz nazwy użytkownika. Hasło do aplikacji to: 1qaz@WSX.
Nazwa użytkownika dowolna.

## Testy:
Testy aplikacji web oraz server uruchamiamy poleceniem - npm test, po przejściu do folderu głównego aplikacji serwerowej lub web.
