# Relationele Database en ER Diagrammen

## 1.1 Relationele Database

Een **relationele database** is een database waarin gegevens digitaal worden bijgehouden in gestructureerde tabellen. De software die het beheren van een database mogelijk maakt, wordt een **Database Management Systeem (DBMS)** genoemd. Samen vormen de database en het DBMS een **databasesysteem (DBS)**.

Relationele databases zijn het meest gebruikte systeem voor het beheer van **persistente gegevens** (gegevens die bewaard moeten blijven). In een **Relationeel Database Management Systeem (RDBMS)** worden gegevens typisch opgeslagen in **tabellen (relations)** met onderlinge **relaties (relationships)**. Tabellen bestaan uit **rijen (records)** en **kolommen (velden)**, waarbij elke rij een uniek item bevat (bijvoorbeeld een product) en elke kolom een specifiek kenmerk vertegenwoordigt (zoals productnaam of prijs).

### Tabellen

Gegevens worden gegroepeerd in **objecttypes**, die geïmplementeerd worden als **tabellen** met rijen en kolommen:

- Elke rij vertegenwoordigt een **object** (bijv. een klant of product).
- Elke kolom bevat een **attribuut** van dat object (bijv. naam, prijs, e-mail).

**Voorwaarden voor een tabel in een relationele database:**

- **Uniciteit:** Twee rijen mogen nooit volledig identiek zijn.
- **Geen vaste volgorde:** De volgorde van rijen en kolommen heeft geen invloed op de betekenis van de gegevens.
- **Atomair:** Elke cel bevat slechts één waarde per attribuut.
- **Consistentie:** Geen tegenstrijdige of dubbele gegevens.

### Sleutels

#### **Primaire Sleutel (Primary Key - PK)**
Een **primaire sleutel** identificeert uniek een rij in een tabel. Dit kan een enkele kolom zijn of een combinatie van kolommen (samengestelde sleutel). 

- Een primaire sleutel mag **nooit null** zijn.
- Een tabel moet altijd een primaire sleutel hebben.

#### **Refererende Sleutel (Foreign Key - FK)**
Een **refererende sleutel** verwijst naar de **primaire sleutel** van een andere tabel om relaties tussen tabellen te leggen.

#### **Surrogaatsleutel**
Een surrogaatsleutel is een **kunstmatige sleutel** (zoals een ID-kolom) die wordt gebruikt om een rij uniek te identificeren, in plaats van een bestaand attribuut dat kan veranderen.

### Relaties

Tabellen kunnen met elkaar verbonden zijn via **relaties**, bijvoorbeeld:

- **1:1 Relatie:** Eén werknemer heeft één kantoorruimte.
- **1:N Relatie:** Een klant kan meerdere bestellingen plaatsen.
- **M:N Relatie:** Een bestelling bevat meerdere producten, en een product kan in meerdere bestellingen voorkomen.

Relaties worden gemodelleerd door **vreemde sleutels (Foreign Keys)**, die verwijzen naar primaire sleutels in andere tabellen.

## 1.2 Stappen bij het ontwerpen van een database

1. **Analyse van informatiebehoefte**: Bepaal welke gegevens moeten worden opgeslagen en hoe deze met elkaar in verband staan.
2. **Opstellen van een datamodel (bv. ERD-model)**: Ontwerp de entiteiten, attributen en relaties.
3. **Bepalen van de datastructuur**: Vertaal het model naar tabellen en kolommen.
4. **Keuze van het DBMS**: Bepaal in welk databasebeheerprogramma de database wordt geïmplementeerd.
5. **Vertaling naar een dataontwerp (dataschema)**: Definieer de fysieke database-indeling.
6. **Implementatie en invoer van data**: Zet het ontwerp om in een werkende database en voeg gegevens toe.

