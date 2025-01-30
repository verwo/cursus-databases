---
title: SQL
---

# Inleiding tot SQL

## Wat is SQL?

SQL kan op de volgende manieren worden uitgesproken:

* Als losse letters: S-Q-L
* Of als `sequel`

SQL staat voor Structured Query Language. Het is een domeinspecifieke taal die speciaal is ontworpen voor communicatie met databanken. Een domeinspecifieke taal zoals SQL is ontworpen om één taak goed uit te voeren binnen een specifieke context. SQL biedt een eenvoudige en efficiënte manier om gegevens in een databank te lezen en te schrijven.

## Relationeel datamodel

SQL gebruikt een relationeel datamodel. Een relationele databank organiseert gegevens in relatie tot elkaar. Dit heeft enkele voordelen:

- De relaties verminderen de opslagruimte en verbeteren de prestaties.
- Er is sterke gegevensintegriteit dankzij ACID (**A**tomiciteit, **C**onsistentie, **I**solatie en **D**uurzaamheid).
- SQL biedt een abstractie van hoe de gegevens fysiek worden opgeslagen.

Toch heeft SQL ook enkele beperkingen:

- Het datamodel moet vooraf goed worden ontworpen. Wijzigingen in een schema kunnen downtime veroorzaken.
- SQL-databanken zijn oorspronkelijk ontwikkeld voordat gedistribueerd rekenen gebruikelijk was. Standaard werken ze niet direct op meerdere systemen, al zijn er uitzonderingen zoals Facebook's MySQL-oplossingen.

## Standaard querytaal

SQL is geen eigendom van een specifiek bedrijf en wordt door bijna alle grote DBMS-systemen ondersteund. Dit maakt het mogelijk om met bijna elke databank te communiceren.

SQL is eenvoudig te leren. De opdrachten bestaan uit beschrijvende Engelse woorden, waardoor het intuïtief te lezen is. Ondanks de eenvoud is SQL zeer krachtig en kunnen complexe bewerkingen efficiënt worden uitgevoerd.

:::tip
Als je een SQL-query kunt bouwen, verdient dit de voorkeur boven het ophalen van alle gegevens en filteren in een applicatie.
:::

## MariaDB en MySQL

::: tip ℹ️ MySQL vs MariaDB
MySQL wordt beheerd door Oracle en is deels gesloten source. De oorspronkelijke ontwikkelaars vonden dit niet in lijn met hun visie en creëerden een open source fork: **MariaDB**.

MariaDB is volledig open source en compatibel met MySQL, wat betekent dat alle MySQL-opdrachten ook in MariaDB werken.
:::

![MariaDB en MySQL logo](./img/mariadb_vs_mysql.jpg)

Figuur 1: MariaDB en MySQL logo's.

MySQL en MariaDB zijn populaire DBMS-systemen. Ze worden gebruikt voor zowel kleine projecten als grote toepassingen. Door hun betrouwbaarheid en snelheid zijn ze breed geaccepteerd in webontwikkeling, vaak als onderdeel van een **LAMP**-stack (**L**inux, **A**pache, **M**ariaDB, **P**HP).

Andere veelgebruikte SQL-databanken zijn onder andere:

- PostgreSQL
- Oracle Database
- Microsoft SQL Server

## NoSQL

Sinds de jaren ‘70 is SQL de standaard, maar in gedistribueerde systemen is SQL’s **consistentie** vervangen door **eventuele consistentie** om snelheid en beschikbaarheid te verbeteren. **NoSQL** verwijst naar databanken die geen relationeel model hanteren, zoals:

- **Key-Value Stores**: DynamoDB
- **Wide Column Stores**: Cassandra
- **Graph Databases**: Neo4J
- **Document Databases**: MongoDB
- **Time Series Databases**: InfluxDB

::: tip ℹ️ Populaire databanken
Een overzicht van de [meest populaire databanken](https://db-engines.com/en/ranking).
:::

In deze cursus behandelen we enkel SQL-databanken en specifiek MariaDB.

## DDL vs DML

SQL-opdrachten vallen in twee categorieën:

- **Data Definition Language (DDL)**: Creëert tabellen, relaties en andere structuren (schema-definitie).
- **Data Manipulation Language (DML)**: Queries en bewerkingen op gegevens, zoals filteren, bijwerken en verwijderen.

## CRUD-principes

CRUD staat voor **Create, Read, Update, Delete**, de vier basisbewerkingen voor gegevensopslag.

| Actie | DDL | DML |
|---|---|---|
| C | `CREATE TABLE` | `INSERT INTO` |
| R | `SHOW COLUMNS` | `SELECT` |
| U | `ALTER TABLE` | `UPDATE` |
| D | `DROP TABLE` | `DELETE FROM` |

Tabel 1: CRUD in relatie tot DDL en DML.

In de volgende hoofdstukken gaan we dieper in op deze SQL-opdrachten.

:::tip Hoofdlettergebruik
SQL is standaard **niet hoofdlettergevoelig**, maar in deze cursus worden **SQL-trefwoorden in hoofdletters** weergegeven en variabelen in kleine letters.
:::

