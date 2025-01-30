---
title: MySQL Client
---

# Inleiding tot de MySQL Client

## Verbinden met de databank

Voordat we verbinding kunnen maken met het DBMS, moeten we het starten. Dit kan worden gedaan door MySQL of MariaDB te starten via het XAMPP-configuratiescherm.

Een manier om met een DBMS te communiceren is via de _command line_. Op Windows kun je hiervoor `powershell` gebruiken. Het `mysql`-commando is niet afhankelijk van de huidige map waarin je je bevindt.

MySQL maakt gebruik van gebruikers. Standaard is er een `root`-gebruiker zonder wachtwoord beschikbaar. Om in te loggen als de `root`-gebruiker moet de `-u`-optie gevolgd door de gebruikersnaam worden meegegeven.

De opdracht om verbinding te maken met de databank is:

```bash
mysql -u root
```

### Uitleg van de commando-opties

- `mysql`: start de MySQL-client.
- `-u root`: geeft aan dat je inlogt als gebruiker `root`.
- `-p`: zorgt ervoor dat de client om een wachtwoord vraagt na het indrukken van Enter.
- `-h 127.0.0.1`: specificeert het IP-adres van de server. Dit is handig voor externe verbindingen; als het niet wordt opgegeven, wordt standaard `localhost` gebruikt.

### Verwachte uitvoer

Wanneer je de opdracht uitvoert, krijg je een output zoals deze:

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 10.1.9-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2015, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' voor hulp. Type '\c' om de huidige invoer te wissen.

MariaDB [(none)]>
```

Kijk naar de laatste regel. `MariaDB` is de naam van de database-server die door XAMPP wordt geïnstalleerd en gebruikt. Tussen de `[ ]` staat de naam van de geselecteerde databank. Omdat we op dit moment nog geen databank hebben geselecteerd, staat er `(none)`. 

