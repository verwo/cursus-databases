# Voorbeeld Databases Instellen

In deze cursus gebruiken we de **forta**-database. Deze database is gemaakt door Ben Forta ([http://forta.com/](http://forta.com/)). Op deze pagina doorlopen we stap voor stap hoe je deze database kunt aanmaken.

Je hebt een MySQL-server nodig (bijvoorbeeld XAMPP) en een MySQL-client (Command Prompt, Bash of PowerShell volstaat).

Je moet ook de bestanden downloaden van [https://forta.com/wp-content/uploads/books/0672327120/mysql\_scripts.zip](https://forta.com/wp-content/uploads/books/0672327120/mysql_scripts.zip) en uitpakken.

\::: tip SQL-sleutelwoorden in hoofdletters
In deze cursus schrijven we alle SQL-code in hoofdletters. Dit is niet verplicht, maar helpt bij het onderscheiden van vaste SQL-code en namen die je kunt wijzigen.
\:::

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

## De database aanmaken en importeren
### Database aanmaken

Maak een lege database aan met:

```sql
CREATE DATABASE forta;
USE forta;
```

### Importeren van database structuur

Om de database-structuur aan te maken, voer het volgende commando uit:

```sql
SOURCE C:/Users/Username/path/to/create.sql;
```

Zorg dat het bestand `create.sql` zich in de juiste map bevindt.


### Controleren van aangemaakte tabellen

Om te controleren of de database correct is aangemaakt en welke tabellen erin zitten, gebruik je:

```sql
SHOW TABLES;
```

```text
MariaDB [forta]> SHOW TABLES;
+-----------------+
| Tables_in_forta |
+-----------------+
| customers       |
| orderitems      |
| orders          |
| productnotes    |
| products        |
| vendors         |
+-----------------+
6 rows in set (0.000 sec)
```

Dit toont informatie over kolommen, types en sleutels.

## De database vullen

Gebruik het volgende commando om gegevens in de database te laden:

```sql
SOURCE C:/Users/Username/path/to/populate.sql;
```

Controleer vervolgens of de gegevens correct zijn geladen:

```sql
SELECT * FROM products;
```

```text
MariaDB [forta]> SELECT * FROM products;
+---------+---------+----------------+------------+----------------------------------------------------------------+
| prod_id | vend_id | prod_name      | prod_price | prod_desc                                                      |
+---------+---------+----------------+------------+----------------------------------------------------------------+
| ANV01   |    1001 | .5 ton anvil   |       5.99 | .5 ton anvil, black, complete with handy hook                  |
| ANV02   |    1001 | 1 ton anvil    |       9.99 | 1 ton anvil, black, complete with handy hook and carrying case |
| ANV03   |    1001 | 2 ton anvil    |      14.99 | 2 ton anvil, black, complete with handy hook and carrying case |
| DTNTR   |    1003 | Detonator      |      13.00 | Detonator (plunger powered), fuses not included                |
| FB      |    1003 | Bird seed      |      10.00 | Large bag (suitable for road runners)                          |
| FC      |    1003 | Carrots        |       2.50 | Carrots (rabbit hunting season only)                           |
| FU1     |    1002 | Fuses          |       3.42 | 1 dozen, extra long                                            |
| JP1000  |    1005 | JetPack 1000   |      35.00 | JetPack 1000, intended for single use                          |
| JP2000  |    1005 | JetPack 2000   |      55.00 | JetPack 2000, multi-use                                        |
| OL1     |    1002 | Oil can        |       8.99 | Oil can, red                                                   |
| SAFE    |    1003 | Safe           |      50.00 | Safe with combination lock                                     |
| SLING   |    1003 | Sling          |       4.49 | Sling, one size fits all                                       |
| TNT1    |    1003 | TNT (1 stick)  |       2.50 | TNT, red, single stick                                         |
| TNT2    |    1003 | TNT (5 sticks) |      10.00 | TNT, red, pack of 10 sticks                                    |
+---------+---------+----------------+------------+----------------------------------------------------------------+
14 rows in set (0.001 sec)
```

Als alles correct is geïmporteerd, zie je een lijst met producten.

## Extra databases

### Game Reviews database

Download het bestand [gamereviews\_example.zip](/files/gamereviews_example.zip) en importeer `gamereviews_example.sql` met:

```sql
SOURCE gamereviews_example.sql;
```

### SpaceX database

Download het bestand [spacex.zip](/files/spacex.zip) en importeer `spacex.sql` met:

```sql
SOURCE spacex.sql;
```

### Grotere testdatabase

Sommige voorbeelden gebruiken een grotere testdatabase met werknemersgegevens. Download deze van [datacharmer/test\_db](https://github.com/datacharmer/test_db) op GitHub.

Navigeer naar de map waarin je het bestand hebt opgeslagen en start de MySQL-client. Gebruik vervolgens:

```sql
SOURCE employees.sql;
```

Dit proces duurt langer omdat het een grotere database betreft. Je kunt een tweede client openen om verder te werken terwijl deze wordt geïmporteerd.

## SQL Optimalisaties

- **Gebruik indexen**: Voorkom trage queries door indexen toe te voegen aan kolommen die vaak worden gebruikt in `WHERE`-clausules.
- \*\*Vermijd SELECT \*\*\*: Haal alleen de benodigde kolommen op om prestaties te verbeteren.
- **Gebruik juiste datatypes**: Gebruik `VARCHAR` in plaats van `TEXT` als kolomwaarden klein zijn.

Je hebt nu databases om mee te oefenen. Ga verder naar het volgende hoofdstuk: **Gegevens opvragen (Retrieving Data).**

