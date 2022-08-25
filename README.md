# intervue-app

Cílem je vytvořit formulářovou aplikaci pro pravidelné investování. Uživatelem je potenciální investor, který musí zadat své osobní údaje pro ověření identity (vše povinné z legislativních důvodů) a zároveň parametry pravidelné investice (kolik Kč chce investovat měsíčně).

Součástí formuláře bude vyplnění nasledujícich polí:
- Pravidelná výše investice (Kč)
- Jméno, Příjmení
- Telefon
- Email
- Rodné číslo
- Číslo občanského průkazu
- Adresa trvalého pobytu
- Číslo bankovního účtu (pro výplatu výnosů z investice)
- Souhlas se zpracováním osobních údajů (žádné OÚ nesmí být uloženy bez souhlasu)

### UX/UI požadavky
- krokovost
  - pro lepší orientaci a "nezahlcení" uživatele množstvím polí hned na začátku je lepší rozdělit formulář do kroků s vysvětlením o co v daném kroku jde
- responzivita
  - více než polovina uživatelů vyplňuje formuláŕe v mobilních zařízeních
- základní validace a sanitizace polí
  - aby nedocházelo k propsání nezmyselných dat na backend, resp. aby byl uživatel rozumne informován o nevalidném vstupu a opravil ho

### Technické požadavky
- čistota kódu
- rozumná struktura component
- použití TypeScriptu
- Vue verze 2 nebo 3
- backendové napojení pro odeslání formuláře - např. přes [https://webhook.site/](https://webhook.site/)
- jako jedna ze stránek bude souhrn objednávky, kde se použije GET na [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1) a data se rozparsují a zobrazí
