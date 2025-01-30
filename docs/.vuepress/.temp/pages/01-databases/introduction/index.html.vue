<template><div><h1 id="inleiding-tot-databanken" tabindex="-1"><a class="header-anchor" href="#inleiding-tot-databanken"><span>Inleiding tot Databanken</span></a></h1>
<h2 id="wat-is-een-databank" tabindex="-1"><a class="header-anchor" href="#wat-is-een-databank"><span>Wat is een databank?</span></a></h2>
<p>Het woord databank wordt op veel manieren gebruikt. Voor ons doel hanteren we de volgende definitie:</p>
<blockquote>
<p>Een databank is een verzameling gegevens die op een georganiseerde manier is opgeslagen.</p>
</blockquote>
<p>Je kunt een databank zien als een soort archiefkast. Het is simpelweg een fysieke locatie om gegevens op te slaan, ongeacht wat deze gegevens zijn of hoe ze zijn opgeslagen.</p>
<h3 id="database-management-system-dbms" tabindex="-1"><a class="header-anchor" href="#database-management-system-dbms"><span>DataBase Management System - DBMS</span></a></h3>
<p>De term <code v-pre>databank</code> verwijst niet naar de database-software die wordt gebruikt. Dit kan veel verwarring veroorzaken als het niet correct wordt gebruikt. De <em>database-software</em> wordt het Database Management System of DBMS genoemd.</p>
<p>De databank is de container die wordt aangemaakt en kan worden beheerd met behulp van het DBMS. MySQL is in dit geval een DBMS-systeem, niet de fysieke databank.</p>
<p>Een databank kan een bestand op een harde schijf zijn, maar kan ook volledig in het geheugen worden opgeslagen. Dit is niet van belang, omdat je een databank nooit direct benadert. Je gebruikt altijd het DBMS om toegang te krijgen tot de databank.</p>
<p><img src="@source/01-databases/introduction/img/dbms.png" alt="Database vs DBMS"></p>
<p>Figuur 1: Database en DBMS</p>
<h2 id="tabellen" tabindex="-1"><a class="header-anchor" href="#tabellen"><span>Tabellen</span></a></h2>
<p>Bij het opslaan van informatie in een archiefkast gooi je het niet zomaar in een lade. Je maakt bestanden binnen de kast. Gerelateerde gegevens worden in specifieke bestanden geplaatst.</p>
<p>In de databankwereld wordt een bestand een tabel genoemd. Een tabel is een <em>gestructureerd bestand</em> waarin gegevens van een specifiek type kunnen worden opgeslagen. Een tabel kan een lijst van klanten, een productcatalogus of een andere lijst met informatie bevatten.</p>
<p><img src="@source/01-databases/introduction/img/ficherosclasicoscatalogo.jpg" alt="Archiefkast"></p>
<p>Figuur 2: Archiefkast</p>
<p>Bij het gebruik van tabellen in een databank moeten deze aan bepaalde regels voldoen. Tabellen die niet aan de volgende beschrijving voldoen, kunnen niet in een databank worden opgeslagen en moeten worden gereorganiseerd:</p>
<ul>
<li>Rijen bevatten gegevens over een entiteit</li>
<li>Kolommen bevatten gegevens over de attributen van die entiteit</li>
<li>Alle invoer in een kolom is van hetzelfde type</li>
<li>Elke kolom heeft een unieke naam</li>
<li>Cellen van een tabel bevatten slechts één waarde</li>
<li>De volgorde van kolommen is niet belangrijk</li>
<li>De volgorde van rijen is niet belangrijk</li>
<li>Geen twee rijen mogen identiek zijn</li>
</ul>
<p>Het belangrijkste is dat gegevens die in een tabel worden opgeslagen van <em>één type</em> zijn of een lijst vormen. Je zou nooit een lijst met klanten en een lijst met bestellingen in dezelfde database-tabel moeten opslaan. Technisch gezien is dit mogelijk, maar het zou het opvragen en beheren van informatie erg moeilijk maken. Een betere oplossing is om twee tabellen te maken voor elke lijst.</p>
<p>Elke tabel in een databank heeft een naam die deze identificeert. De naam is altijd uniek binnen een bepaalde databank.</p>
<p><strong>Klantentabel</strong>:</p>
<table>
<thead>
<tr>
<th>Naam</th>
<th>E-mail</th>
<th>Adres</th>
<th>Stad</th>
<th>Provincie</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Tabel 1: Een voorbeeld van een klantentabel</p>
<h3 id="schema-s" tabindex="-1"><a class="header-anchor" href="#schema-s"><span>Schema's</span></a></h3>
<blockquote>
<p>Rijen bevatten gegevens over een entiteit
Kolommen bevatten gegevens over de attributen van die entiteit</p>
</blockquote>
<p>Tabellen hebben kenmerken en eigenschappen die bepalen hoe gegevens erin worden opgeslagen. Dit omvat informatie over welk type gegevens mogen worden opgeslagen, hoe deze worden gestructureerd, hoe individuele stukken informatie worden benoemd en meer. De verzameling informatie die een tabel beschrijft, wordt een schema genoemd. Schema’s worden gebruikt om specifieke tabellen binnen een databank te beschrijven, evenals de relaties tussen tabellen.</p>
<h3 id="kolommen-en-datatypes" tabindex="-1"><a class="header-anchor" href="#kolommen-en-datatypes"><span>Kolommen en datatypes</span></a></h3>
<blockquote>
<p>Alle invoer in een kolom is van hetzelfde type</p>
</blockquote>
<p>Tabellen bestaan uit kolommen. Kolommen bevatten een specifiek stukje informatie binnen de tabel. Je kunt database-tabellen zien als roosters (zoals spreadsheets). Elke kolom in het rooster bevat een specifiek stukje informatie.</p>
<p>Elke kolom in een databank heeft een bijbehorend <strong>datatype</strong>. Dit bepaalt welk type gegevens de kolom kan bevatten.</p>
<p>Bijvoorbeeld: numeriek, datum, tekst, valuta,…</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Datatypes zijn erg belangrijk voor een databank. Ze beperken het type gegevens dat in de kolom kan worden opgeslagen, waardoor wordt voorkomen dat verkeerde informatie wordt opgeslagen. Ze helpen ook bij het correct en efficiënt sorteren van gegevens en spelen een belangrijke rol bij het optimaliseren van schijfgebruik.</p>
</div>
<h3 id="rijen" tabindex="-1"><a class="header-anchor" href="#rijen"><span>Rijen</span></a></h3>
<p>Gegevens in een tabel worden opgeslagen in rijen. Elke opgeslagen record wordt in een aparte rij bewaard.</p>
<p>Bijvoorbeeld: Een klantentabel kan één klant per rij opslaan.</p>
<p>Het aantal rijen in de tabel is gelijk aan het aantal records. De termen <em>record</em> en <em>rij</em> worden vaak door elkaar gebruikt, maar <em>rij</em> is technisch gezien de correcte term.</p>
<h3 id="primaire-sleutels" tabindex="-1"><a class="header-anchor" href="#primaire-sleutels"><span>Primaire sleutels</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Regel</p>
<p>Rijen mogen niet identiek zijn.</p>
</div>
<p>Elke rij in een tabel moet een kolom (of set van kolommen) hebben die deze uniek identificeert. Deze kolom of set van kolommen wordt de primaire sleutel genoemd. De primaire sleutel wordt gebruikt om naar een specifieke rij te verwijzen.</p>
<p>Zonder een primaire sleutel wordt het bijwerken of verwijderen van specifieke rijen in een tabel erg moeilijk. Er is geen gegarandeerde veilige manier om alleen de betreffende rijen te selecteren.</p>
<div class="hint-container warning">
<p class="hint-container-title">Belangrijke tip</p>
<p>Definieer altijd primaire sleutels!</p>
</div>
<p>Primaire sleutels zijn niet verplicht, maar het definiëren ervan maakt toekomstige gegevensmanipulatie mogelijk en beheersbaar.</p>
<p>Elke kolom kan als primaire sleutel worden geselecteerd zolang deze aan de volgende voorwaarden voldoet:</p>
<ol>
<li>Geen twee rijen mogen dezelfde primaire sleutelwaarde hebben (uniekheid)</li>
<li>Elke rij moet een primaire sleutelwaarde hebben (NULL is niet toegestaan)</li>
</ol>
<p>Deze regels worden afgedwongen door MySQL.</p>
<p>Een primaire sleutel kan uit meerdere kolommen bestaan. In dat geval wordt deze een <em>samengestelde sleutel</em> genoemd. Wanneer meerdere kolommen worden gebruikt, gelden dezelfde regels voor alle kolommen die deel uitmaken van de primaire sleutel. Individuele kolommen hoeven niet uniek te zijn, maar de hele sleutel in combinatie moet uniek zijn.</p>
<h4 id="best-practices-voor-primaire-sleutels" tabindex="-1"><a class="header-anchor" href="#best-practices-voor-primaire-sleutels"><span>Best practices voor primaire sleutels</span></a></h4>
<p>Naast de regels die MySQL afdwingt, zijn er enkele best practices bij het kiezen van een primaire sleutel:</p>
<ul>
<li>Wijzig geen waarden in primaire sleutelkolommen</li>
<li>Hergebruik geen waarden in primaire sleutelkolommen</li>
<li>Gebruik geen waarden die kunnen veranderen in primaire sleutelkolommen</li>
</ul>
</div></template>


