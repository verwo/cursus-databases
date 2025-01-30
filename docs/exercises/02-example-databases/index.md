---
title: Voorbeeld Databases Instellen
---

# Voorbeeld Databases Instellen

In deze cursus gebruiken we de **forta**-database. Deze database is gemaakt door Ben Forta ([http://forta.com/](http://forta.com/)). Op deze pagina doorlopen we stap voor stap hoe je deze database kunt aanmaken.

Je hebt een MySQL-server nodig (bijvoorbeeld XAMPP) en een MySQL-client (Command Prompt, Bash of PowerShell volstaat).

Je moet ook de bestanden downloaden van [https://forta.com/wp-content/uploads/books/0672327120/mysql_scripts.zip](https://forta.com/wp-content/uploads/books/0672327120/mysql_scripts.zip) en uitpakken.

::: tip SQL-sleutelwoorden in hoofdletters
In deze cursus schrijven we alle SQL-code in hoofdletters. Dit is niet verplicht, maar helpt bij het onderscheiden van vaste SQL-code en namen die je kunt wijzigen.
:::

## Verbinden met de database

Start eerst je databaseserver zoals geleerd in het vorige hoofdstuk. Open vervolgens je MySQL-client in de map waar je de bestanden hebt uitgepakt. Je kunt de client openen door `PowerShell` in de adresbalk van Windows Verkenner te typen en vervolgens het volgende commando in te voeren:

```bash
mysql -u root
```

Verklaring van de parameters:

- `mysql`: start de MySQL-client.
- `-u root`: log in als gebruiker `root`.
- `-p`: vraagt om een wachtwoord na het indrukken van Enter.
- `-h 127.0.0.1`: specificeert het IP-adres van de server (gebruik `localhost` indien niet opgegeven).

Na verbinding zie je de prompt:

```text
MariaDB [(none)]>
```

Dit betekent dat je bent verbonden met de server, maar nog geen database hebt geselecteerd.

## Bestaande databases bekijken

Voordat we een nieuwe database aanmaken, bekijken we eerst welke databases al bestaan:

```sql
SHOW DATABASES;
```

Dit toont een lijst van beschikbare databases, inclusief systeemtaken zoals `mysql`, `information_schema` en `performance_schema`. Deze databases bevatten interne configuratiegegevens en mogen niet gewijzigd worden.

## Problemen bij het aanmaken van de database

Als je een foutmelding zoals deze krijgt:

```text
ERROR: Failed to open file 'create.sql', error: 2
```

Controleer dan of het bestand `create.sql` zich bevindt in de juiste map. Gebruik indien nodig de volledige padnaam:

```sql
SOURCE C:/Users/Username/path/to/create.sql;
```

## De database aanmaken

Maak een lege database aan met:

```sql
CREATE DATABASE forta;
USE forta;
```

Controleer of de tabellen correct zijn aangemaakt met:

```sql
SHOW TABLES;
```

Als je wilt controleren hoe een tabel is opgebouwd, gebruik dan:

```sql
DESC products;
```

Dit toont informatie over kolommen, types en sleutels.

## De database vullen

Gebruik het volgende commando om gegevens in de database te laden:

```sql
SOURCE populate.sql;
```

Controleer vervolgens of de gegevens correct zijn geladen:

```sql
SELECT * FROM products;
```

Als alles correct is geïmporteerd, zie je een lijst met producten.

## Extra databases

### Game Reviews database

Download het bestand [gamereviews_example.zip](/files/gamereviews_example.zip) en importeer `gamereviews_example.sql` met:

```sql
SOURCE gamereviews_example.sql;
```

### SpaceX database

Download het bestand [spacex.zip](/files/spacex.zip) en importeer `spacex.sql` met:

```sql
SOURCE spacex.sql;
```

### Grotere testdatabase

Sommige voorbeelden gebruiken een grotere testdatabase met werknemersgegevens. Download deze van [datacharmer/test_db](https://github.com/datacharmer/test_db) op GitHub.

Navigeer naar de map waarin je het bestand hebt opgeslagen en start de MySQL-client. Gebruik vervolgens:

```sql
SOURCE employees.sql;
```

Dit proces duurt langer omdat het een grotere database betreft. Je kunt een tweede client openen om verder te werken terwijl deze wordt geïmporteerd.

## SQL Optimalisaties

- **Gebruik indexen**: Voorkom trage queries door indexen toe te voegen aan kolommen die vaak worden gebruikt in `WHERE`-clausules.
- **Vermijd SELECT ***: Haal alleen de benodigde kolommen op om prestaties te verbeteren.
- **Gebruik juiste datatypes**: Gebruik `VARCHAR` in plaats van `TEXT` als kolomwaarden klein zijn.

Je hebt nu databases om mee te oefenen. Ga verder naar het volgende hoofdstuk: **Gegevens opvragen (Retrieving Data).**

