---

## title: MySQL Datatypes

# Inleiding tot MySQL Datatypes

Datatypes bepalen **wat** er in een kolom kan worden opgeslagen en **hoe** deze gegevens worden opgeslagen.

## Waarom datatypes belangrijk zijn

Datatypes bestaan om verschillende redenen:

- **Restrictie**: Zorgt ervoor dat alleen gegevens van het juiste type kunnen worden opgeslagen. Dit helpt bij het voorkomen van fouten.
- **Efficiëntie**: Verschillende datatypes optimaliseren snelheid of opslagruimte, afhankelijk van de vereisten.
- **Sorteerorde**: Numerieke en tekstuele sortering volgen verschillende regels. Het juiste datatype kiezen bepaalt hoe gegevens worden gesorteerd.

Het kiezen van het juiste datatype is cruciaal. Foute keuzes kunnen resulteren in langzame queries of inefficiënt gebruik van opslagruimte. Het wijzigen van datatypes in bestaande kolommen is een complexe taak en moet zoveel mogelijk worden vermeden.

## Soorten datatypes in MySQL

MySQL maakt gebruik van drie hoofdtypen datatypes:

- **Teksttypen**
- **Numerieke typen**
- **Datumtypen**

## Teksttypen

| Type            | Beschrijving                                 | Maximale lengte      |
| --------------- | -------------------------------------------- | -------------------- |
| CHAR(n)         | String met een vaste lengte                  | 255 tekens           |
| VARCHAR(n)      | String met een variabele lengte              | 255 tekens           |
| TINYTEXT        | Kleine tekstwaarde                           | 255 tekens           |
| TEXT            | Grotere tekstwaarde                          | 65.535 tekens        |
| MEDIUMTEXT      | Zeer grote tekstwaarde                       | 16.777.215 tekens    |
| LONGTEXT        | Enorme tekstwaarde                           | 4.294.967.295 tekens |
| ENUM(x,y,z,...) | Lijst met vooraf gedefinieerde waarden       | 65.535 waarden       |
| SET             | Meerdere geselecteerde waarden uit een lijst | 64 waarden           |

## Numerieke typen

| Type      | Beschrijving                         | Bereik (Signed)                                          | Bereik (Unsigned)                |
| --------- | ------------------------------------ | -------------------------------------------------------- | -------------------------------- |
| TINYINT   | Zeer kleine integer                  | -128 tot 127                                             | 0 tot 255                        |
| SMALLINT  | Kleine integer                       | -32.768 tot 32.767                                       | 0 tot 65.535                     |
| MEDIUMINT | Middelgrote integer                  | -8.388.608 tot 8.388.607                                 | 0 tot 16.777.215                 |
| INT       | Standaard integer                    | -2.147.483.648 tot 2.147.483.647                         | 0 tot 4.294.967.295              |
| BIGINT    | Zeer grote integer                   | -9.223.372.036.854.775.808 tot 9.223.372.036.854.775.807 | 0 tot 18.446.744.073.709.551.615 |
| FLOAT     | Kleine drijvende-kommagetal          |                                                          |                                  |
| DOUBLE    | Grote drijvende-kommagetal           |                                                          |                                  |
| DECIMAL   | Precisiegetal, opgeslagen als string |                                                          |                                  |

## Datumtypen

| Type      | Beschrijving   | Formaat               | Bereik                                              |
| --------- | -------------- | --------------------- | --------------------------------------------------- |
| DATE      | Datum          | YYYY-MM-DD            | 1000-01-01 tot 9999-12-31                           |
| DATETIME  | Datum en tijd  | YYYY-MM-DD HH:MI:SS | 1000-01-01 00:00:00 tot 9999-12-31 23:59:59         |
| TIMESTAMP | Unix timestamp | YYYY-MM-DD HH:MI:SS | 1970-01-01 00:00:01 UTC tot 2038-01-09 03:14:07 UTC |
| TIME      | Tijd           | HH:MI:SS            | -838:59:59 tot 838:59:59                            |
| YEAR      | Jaar           | YYYY                  | 1901 tot 2155                                       |

## Voorbeeld: ENUM en SET

```sql
CREATE TABLE honden(
   id int(5) NOT NULL AUTO_INCREMENT,
   naam varchar(255) NOT NULL,
   chip_id int(5),
   geslacht enum('mannelijk', 'vrouwelijk'),
   vachtkleur set('zwart', 'wit', 'bruin', 'beige'),
   primary key(id)
);

INSERT INTO honden(naam, chip_id, geslacht, vachtkleur)
VALUES
('Toby', 7865, 'mannelijk', 'bruin,beige'),
('Medoc', 8776, 'mannelijk', 'bruin'),
('Luna', 7654, 'vrouwelijk', 'zwart,wit'),
('Alien', 666, 'alien', 'groen');
```

Hieronder het resultaat van een `SELECT *` op de tabel:

```text
+----+------------+---------+--------+-------------+
| id | naam       | chip_id | geslacht | vachtkleur  |
+----+------------+---------+--------+-------------+
|  1 | Beethoven  |    7865 | mannelijk | bruin,beige |
|  2 | Laika      |    8776 | vrouwelijk | bruin       |
|  3 | Droopy     |    7654 | mannelijk | zwart,wit   |
|  4 | Swami Bami |     666 |        |             |
+----+------------+---------+--------+-------------+
```

## Opslagruimte versus snelheid

### TINYINT vs BIGINT

Een TINYINT gebruikt slechts 1 byte, terwijl een BIGINT 8 bytes gebruikt. Kies de kleinste datatype die past bij de behoeften van je gegevens.

### CHAR vs VARCHAR

CHAR gebruikt een vaste lengte en wordt opgevuld met spaties, terwijl VARCHAR alleen de werkelijke tekens opslaat. CHAR is sneller voor vaste lengtes, terwijl VARCHAR opslagruimte bespaart.

### FLOAT vs DECIMAL

FLOAT en DOUBLE zijn sneller en gebruiken minder opslagruimte, maar hebben een nauwkeurigheidsmarge. DECIMAL is preciezer en wordt aanbevolen voor financiële gegevens.

## Meer informatie

- [MySQL Data Types documentatie](https://dev.mysql.com/doc/refman/5.7/en/data-types.html)
- [Database ontwerp en datatypes](http://www.brandonsavage.net/designing-databases-picking-the-right-data-types/)

