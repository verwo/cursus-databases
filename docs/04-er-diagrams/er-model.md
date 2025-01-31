# Het Entiteit-Relatie Model

## Inleiding

Een datamodel dat zeer geschikt is voor het ontwerpen van een database is het **Entiteit-Relatie Model (Entity Relationship Model, ER-model)**.

In het Entiteit-Relatie model wordt gebruik gemaakt van:

- **Entiteiten**
- **Attributen**
- **Relaties (relationships)**

## Voorbeeld

Een bedrijf ontwerpt een informatiesysteem ter ondersteuning van de functie "Personeel". Van de werknemers wordt volgende informatie bijgehouden:

- **Werknemersnummer**
- **Naam**
- **Geboortedatum**
- **Adresgegevens**
- **De kantoorruimte waar hij/zij werkt**
- **De gevolgde cursussen en de datum**

Niet elke werknemer volgt een cursus. De afdeling waartoe de kantoorruimte behoort, wordt ook vastgelegd. Meerdere werknemers kunnen samen één kantoorruimte delen. De cursussen hebben een cursusnummer en een -naam.

## **ER Diagram**

```text
+------------+        +-------------+        +---------+
| Werknemer  |        | Afdeling    |        | Cursus  |
|------------|        |-------------|        |---------|
| werknemer_id (PK) | | afdeling_id (PK) | | cursus_id (PK) |
| naam       |        | naam        |        | naam    |
| geboortedatum |     | locatie     |        | datum   |
| adres      |        +-------------+        +---------+
+------------+
      |                         |
      |                         |
      |                         +----------------+
      |                                              |
      +------------------------->+ kantoorruimte |
                                  | kamer_id (PK) |
                                  | locatie      |
                                  +-------------+
```

In dit diagram:

- **Werknemer** is gekoppeld aan **Afdeling** met een **1**\*\*:N\*\*\*\* relatie\*\*.
- **Werknemer** kan meerdere **Cursussen** volgen (**M**\*\*:N\*\*\*\* relatie\*\*).
- **Werknemer** werkt in een **Kantoorruimte** (**1**Een bedrijf ontwerpt een informatiesysteem ter ondersteuning van de functie "Personeel". Van de werknemers wordt volgende informatie bijgehouden:

## Entiteiten

Een entiteit is een object (een tastbaar iets), een concept, iets dat je kunt identificeren en waarvan je gegevens wilt bijhouden, zoals een **auto, persoon, magazijn, bankrekening of computer**.

Een entiteit bestaat uit:

- Een **unieke naam**
- Een **lijst van attributen**

**Voorstelling - Voorbeeld**
Een entiteit wordt voorgesteld door een **rechthoek**.

**Voorbeelden van entiteiten in het informatiesysteem:**

- **Afdeling**
- **Kamer**
- **Werknemer**
- **Cursus**

## Relaties

Een **relatie** is een verband tussen twee of meer entiteiten.

Een relatie bestaat uit:

- Een **unieke naam** binnen het diagram
- Een **lijst van betrokken entiteiten**
- Een **lijst van attributen** (indien van toepassing)

**Voorstelling - Voorbeeld**
Een **relatie** wordt voorgesteld als een **verbindingslijn** tussen de betrokken entiteiten.

**Leesrichting:**

- **Werknemer volgt cursus**
- **Kamer behoort tot afdeling**

## Cardinaliteit

De **cardinaliteit** van een relatie geeft aan hoeveel instanties van een entiteit maximaal in relatie kunnen staan met één instantie van de andere entiteit.

**Voorbeelden van cardinaliteit:**

- **1:1** → Eén-op-één
- **1**\*\*:N\*\* → Eén-op-veel
- **M**\*\*:N\*\* → Veel-op-veel

## Voorstelling - Voorbeeld

- "Iedere kamer behoort hoogstens tot één afdeling" (**1:1 cardinaliteit** → verticale streep tegen de entiteit)
- "Iedere werknemer kan veel cursussen volgen" (**1**\*\*:N\*\*\*\* cardinaliteit\*\* → kraaienpoot tegen de entiteit)

## Optionaliteit

De **optionaliteit** van een relatie geeft aan hoeveel instanties van een entiteit **minimaal** in relatie moeten staan met een andere entiteit.

**Voorbeelden van optionaliteit:**

- "Iedere kamer behoort **minstens** tot één afdeling" (**1-optionaliteit** → verticale streep)
- "Een werknemer **hoeft niet** noodzakelijk een cursus te volgen" (**0-optionaliteit** → cirkeltje)

## Attributen

Een **attribuut** is een eigenschap die met de instanties van een entiteit of een relatie geassocieerd wordt.

**Attributen kunnen zijn:**

- **Voornaam, familienaam, geslacht** (bijvoorbeeld voor een **werknemer**)
- **Cursusnummer, cursusnaam** (bijvoorbeeld voor een **cursus**)

## **Samengestelde Attributen**

Een **naam** kan bijvoorbeeld opgesplitst worden in **Voornaam** en **Familienaam**.

In sommige gevallen heeft het **geen zin** om samengestelde attributen op te splitsen (zoals **Straat + Huisnummer**), maar in andere gevallen is dit wel nuttig.

## **Procesgegevens**

Een **procesgegeven** of **berekend gegeven** is een attribuut waarvan de waarde bepaald wordt door andere attributen.

Bijvoorbeeld:

- **Leeftijd** kan worden berekend uit **geboortedatum** → daarom wordt alleen **geboortedatum** opgeslagen, niet **leeftijd**.

## Relaties met Attributen

De moeilijkste stap bij het opstellen van een **ERD** is het identificeren van **de attributen die bij de relaties horen**.

Bijvoorbeeld:

- "Van elke werknemer wordt bijgehouden **welke cursus hij wanneer volgde**"
- Hier hoort **"jaartal"** bij de relatie **"volgt"** en **niet** bij de entiteiten **"Werknemer"** of **"Cursus"**.

Met dit model kunnen **relationele databases** correct gestructureerd en beheerd worden.

