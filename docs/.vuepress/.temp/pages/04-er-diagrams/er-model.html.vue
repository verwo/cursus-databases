<template><div><h1 id="het-entiteit-relatie-model" tabindex="-1"><a class="header-anchor" href="#het-entiteit-relatie-model"><span>Het Entiteit-Relatie Model</span></a></h1>
<h2 id="inleiding" tabindex="-1"><a class="header-anchor" href="#inleiding"><span>Inleiding</span></a></h2>
<p>Een datamodel dat zeer geschikt is voor het ontwerpen van een database is het <strong>Entiteit-Relatie Model (Entity Relationship Model, ER-model)</strong>.</p>
<p>In het Entiteit-Relatie model wordt gebruik gemaakt van:</p>
<ul>
<li><strong>Entiteiten</strong></li>
<li><strong>Attributen</strong></li>
<li><strong>Relaties (relationships)</strong></li>
</ul>
<h2 id="voorbeeld" tabindex="-1"><a class="header-anchor" href="#voorbeeld"><span>Voorbeeld</span></a></h2>
<p>Een bedrijf ontwerpt een informatiesysteem ter ondersteuning van de functie &quot;Personeel&quot;. Van de werknemers wordt volgende informatie bijgehouden:</p>
<ul>
<li><strong>Werknemersnummer</strong></li>
<li><strong>Naam</strong></li>
<li><strong>Geboortedatum</strong></li>
<li><strong>Adresgegevens</strong></li>
<li><strong>De kantoorruimte waar hij/zij werkt</strong></li>
<li><strong>De gevolgde cursussen en de datum</strong></li>
</ul>
<p>Niet elke werknemer volgt een cursus. De afdeling waartoe de kantoorruimte behoort, wordt ook vastgelegd. Meerdere werknemers kunnen samen één kantoorruimte delen. De cursussen hebben een cursusnummer en een -naam.</p>
<h2 id="er-diagram" tabindex="-1"><a class="header-anchor" href="#er-diagram"><span><strong>ER Diagram</strong></span></a></h2>
<Mermaid id="mermaid-73" code="eJxtUcFygjAQvfsVO979gd6Ygo6lggPSnldZMS1JZsJqD+C/NwEUEd8hk+y+vPc2IeMLLAzKGVh4Sz/4XEcraJrFoqkh9KJdHCdJtt7sAniD+Z5OWhsG1jwf36jbo0PFRqgCvGNOpd1UEfbqDsdSI0OoKya1JfOBaNretV3Hfn2I7yAJo2ATJC7AH5lfBqE69zF/EiFExTauOQvJdI/RWQ2qV2uja3jPkjRLrcdFlwU/cSbSS5SiFIPoQ+vLWqoX9ZQNIkfdvA5CMWztSxx0Ts/kFUkixUM9RyYWkmxn776AfOTz40B9/knSWFaHkxE/F3u40Wf/gpiONQ=="></Mermaid><p>In dit diagram:</p>
<ul>
<li><strong>Werknemer</strong> is gekoppeld aan <strong>Afdeling</strong> met een <strong>1</strong>**:N**** relatie**.</li>
<li><strong>Werknemer</strong> kan meerdere <strong>Cursussen</strong> volgen (<strong>M</strong>**:N**** relatie**).</li>
<li><strong>Werknemer</strong> werkt in een <strong>Kantoorruimte</strong> (<strong>1</strong>Een bedrijf ontwerpt een informatiesysteem ter ondersteuning van de functie &quot;Personeel&quot;. Van de werknemers wordt volgende informatie bijgehouden:</li>
</ul>
<h2 id="entiteiten" tabindex="-1"><a class="header-anchor" href="#entiteiten"><span>Entiteiten</span></a></h2>
<p>Een entiteit is een object (een tastbaar iets), een concept, iets dat je kunt identificeren en waarvan je gegevens wilt bijhouden, zoals een <strong>auto, persoon, magazijn, bankrekening of computer</strong>.</p>
<Mermaid id="mermaid-100" code="eJxLLXLJTEwvSszlUgACJ0c/7yBXb1c/Tz93hWqwEAgUlxRl5qUrBKVmp+YBGXmlubmpRXDZtJz8xBKF4MSclHywWC0XFwAsuxf3"></Mermaid><p>Een entiteit bestaat uit:</p>
<ul>
<li>Een <strong>unieke naam</strong></li>
<li>Een <strong>lijst van attributen</strong></li>
</ul>
<p><strong>Voorstelling - Voorbeeld</strong>
Een entiteit wordt voorgesteld door een <strong>rechthoek</strong>.</p>
<p><strong>Voorbeelden van entiteiten in het informatiesysteem:</strong></p>
<ul>
<li><strong>Afdeling</strong></li>
<li><strong>Kamer</strong></li>
<li><strong>Werknemer</strong></li>
<li><strong>Cursus</strong></li>
</ul>
<h2 id="relaties" tabindex="-1"><a class="header-anchor" href="#relaties"><span>Relaties</span></a></h2>
<p>Een <strong>relatie</strong> is een verband tussen twee of meer entiteiten.</p>
<p>Een relatie bestaat uit:</p>
<ul>
<li>Een <strong>unieke naam</strong> binnen het diagram</li>
<li>Een <strong>lijst van betrokken entiteiten</strong></li>
<li>Een <strong>lijst van attributen</strong> (indien van toepassing)</li>
</ul>
<p><strong>Voorstelling - Voorbeeld</strong>
Een <strong>relatie</strong> wordt voorgesteld als een <strong>verbindingslijn</strong> tussen de betrokken entiteiten.</p>
<p><strong>Leesrichting:</strong></p>
<ul>
<li><strong>Werknemer volgt cursus</strong></li>
<li><strong>Vergaderzaal behoort tot afdeling</strong></li>
</ul>
<Mermaid id="mermaid-188" code="eJwlysENgCAMQNF7p+gCDFWhgLHSpBRInF6Mt5/8l0VXrGQOiIvtanyzYQg4VYrvCBiH9dH3n2yFEttDJB85uKqao+sPKSeWsxUAeAEUEBx8"></Mermaid><h2 id="cardinaliteit-en-optionaliteit-in-databases" tabindex="-1"><a class="header-anchor" href="#cardinaliteit-en-optionaliteit-in-databases"><span>Cardinaliteit en Optionaliteit in Databases</span></a></h2>
<p>Cardinaliteit en optionaliteit bepalen hoe entiteiten binnen een relationele database met elkaar verbonden zijn. Cardinaliteit geeft aan <strong>hoeveel</strong> instanties van één entiteit gerelateerd kunnen zijn aan een andere entiteit. Optionaliteit geeft aan of een relatie <strong>verplicht</strong> of <strong>optioneel</strong> is.</p>
<h3 id="cardinaliteitstypes" tabindex="-1"><a class="header-anchor" href="#cardinaliteitstypes"><span>Cardinaliteitstypes</span></a></h3>
<h4 id="een-op-een-1-1" tabindex="-1"><a class="header-anchor" href="#een-op-een-1-1"><span>Één-op-één (1:1)</span></a></h4>
<p>Bij een <strong>één-op-één-relatie</strong> is één instantie van entiteit A gekoppeld aan maximaal één instantie van entiteit B.</p>
<p><strong>Voorbeeld:</strong></p>
<ul>
<li>Een persoon heeft precies <strong>één</strong> paspoort.</li>
<li>Een paspoort behoort precies <strong>tot één</strong> persoon.</li>
</ul>
<p><strong>Mermaid ER Diagram:</strong></p>
<Mermaid id="mermaid-222" code="eJxLLXLJTEwvSszlUgCCgNSi4vz8PIWaGl3dmhqFgMTigvz8ohIFKwUlQytDJS4AZbYOQw=="></Mermaid><h4 id="een-op-veel-1-n" tabindex="-1"><a class="header-anchor" href="#een-op-veel-1-n"><span>Één-op-veel (1:N)</span></a></h4>
<p>Bij een <strong>één-op-veel-relatie</strong> kan één instantie van entiteit A gerelateerd zijn aan <strong>meerdere</strong> instanties van entiteit B, maar een instantie van B hoort bij slechts <strong>één</strong> instantie van A.</p>
<p><strong>Voorbeeld:</strong></p>
<ul>
<li>Een auteur kan <strong>meerdere</strong> boeken schrijven.</li>
<li>Een boek heeft slechts <strong>één</strong> auteur.</li>
</ul>
<p><strong>Mermaid ER Diagram:</strong></p>
<Mermaid id="mermaid-247" code="eJxLLXLJTEwvSszlUgACx9KS1NIihZoaXd38agWn/NRsBSsFJUMrPyUuABNZDAs="></Mermaid><h4 id="veel-op-veel-m-n" tabindex="-1"><a class="header-anchor" href="#veel-op-veel-m-n"><span>Veel-op-veel (M:N)</span></a></h4>
<p>Bij een <strong>veel-op-veel-relatie</strong> kan een instantie van entiteit A gekoppeld zijn aan <strong>meerdere</strong> instanties van entiteit B, en vice versa.</p>
<p><strong>Voorbeeld:</strong></p>
<ul>
<li>Een student kan <strong>meerdere</strong> cursussen volgen.</li>
<li>Een cursus kan <strong>meerdere</strong> studenten hebben.</li>
</ul>
<p><strong>Mermaid ER Diagram:</strong></p>
<Mermaid id="mermaid-272" code="eJxLLXLJTEwvSszlUgCC4JLSlNS8EoXafF3d/GoF59Ki4tJiBSsFJV8rPyUuAERYDZA="></Mermaid><h3 id="optionaliteit" tabindex="-1"><a class="header-anchor" href="#optionaliteit"><span>Optionaliteit</span></a></h3>
<p>Optionaliteit bepaalt of een relatie verplicht of optioneel is. Dit wordt vaak aangegeven met een <strong>o</strong> (optioneel) of een <strong>|</strong> (verplicht).</p>
<h4 id="verplichte-relaties" tabindex="-1"><a class="header-anchor" href="#verplichte-relaties"><span>Verplichte relaties</span></a></h4>
<p>Een verplichte relatie betekent dat een instantie van een entiteit <strong>altijd</strong> een gekoppelde instantie in een andere entiteit moet hebben.</p>
<p><strong>Voorbeeld:</strong></p>
<ul>
<li>Een paspoort moet <strong>altijd</strong> aan een persoon gekoppeld zijn (<strong>1:1 verplicht</strong>).</li>
</ul>
<p><strong>Diagram:</strong></p>
<Mermaid id="mermaid-298" code="eJxLLXLJTEwvSszlUgCCgNSi4vz8PIWaGl3dmhqFgMTigvz8ohIFKwUlQytDhbLUooKczOSMEiUuAA8GEjQ="></Mermaid><h4 id="optionele-relaties" tabindex="-1"><a class="header-anchor" href="#optionele-relaties"><span>Optionele relaties</span></a></h4>
<p>Een optionele relatie betekent dat een instantie van een entiteit <strong>kan</strong> worden gekoppeld aan een andere entiteit, maar dit is niet vereist.</p>
<p><strong>Voorbeeld:</strong></p>
<ul>
<li>Een auteur kan meerdere boeken hebben, maar een auteur <strong>kan ook geen boeken hebben geschreven</strong> (<strong>1:N optioneel</strong>).</li>
</ul>
<p><strong>Diagram:</strong></p>
<Mermaid id="mermaid-318" code="eJxLLXLJTEwvSszlUgACx9KS1NIihZp8Xd38agWn/NRsBSsFJUMrP4X8gpLM/LzU1BwlLgClBQ/t"></Mermaid><h2 id="attributen" tabindex="-1"><a class="header-anchor" href="#attributen"><span>Attributen</span></a></h2>
<p>Een <strong>attribuut</strong> is een eigenschap die met de instanties van een entiteit of een relatie geassocieerd wordt.</p>
<p><strong>Attributen kunnen zijn:</strong></p>
<ul>
<li><strong>Voornaam, familienaam, geslacht</strong> (bijvoorbeeld voor een <strong>werknemer</strong>)</li>
</ul>
<Mermaid id="mermaid-335" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihWowHwSKS4oy89IVwvLzi/ISoeqQxN0SczNzMlOxSbmnFuckJmeUgMVruQDERx94"></Mermaid><ul>
<li><strong>Cursusnummer, cursusnaam</strong> (bijvoorbeeld voor een <strong>cursus</strong>)</li>
</ul>
<Mermaid id="mermaid-343" code="eJxLLXLJTEwvSszlUgAC59Ki4tJihWowBwQy80qggnmlubmpRXCJ4pKizLx0mFwiVH8tFwDJShe5"></Mermaid><h3 id="samengestelde-attributen" tabindex="-1"><a class="header-anchor" href="#samengestelde-attributen"><span>Samengestelde Attributen</span></a></h3>
<p>Een <strong>naam</strong> kan bijvoorbeeld opgesplitst worden in <strong>Voornaam</strong> en <strong>Familienaam</strong>.</p>
<p>In sommige gevallen heeft het <strong>geen zin</strong> om samengestelde attributen op te splitsen (zoals <strong>Straat + Huisnummer</strong>), maar in andere gevallen is dit wel nuttig.</p>
<h4 id="voorbeeld-1" tabindex="-1"><a class="header-anchor" href="#voorbeeld-1"><span>Voorbeeld:</span></a></h4>
<ul>
<li>Een adres kan bestaan uit <strong>straatnaam, huisnummer en postcode</strong>, wat soms als <strong>samengesteld attribuut</strong> wordt gezien.</li>
</ul>
<Mermaid id="mermaid-363" code="eJxLLXLJTEwvSszlUgACx5Si1GKFajAbBIpLijLz0hWCS4oSE0vyEqGqQCAzr0TBozSzOK80Nze1CF1DQH5xSXJ+SipYvJYLANm0HSM="></Mermaid><ul>
<li>Een volledige naam wordt vaak opgesplitst in <strong>voornaam en familienaam</strong>.</li>
</ul>
<h2 id="procesgegevens" tabindex="-1"><a class="header-anchor" href="#procesgegevens"><span>Procesgegevens</span></a></h2>
<p>Een <strong>procesgegeven</strong> of <strong>berekend gegeven</strong> is een attribuut waarvan de waarde bepaald wordt door andere attributen.</p>
<h3 id="voorbeeld-2" tabindex="-1"><a class="header-anchor" href="#voorbeeld-2"><span>Voorbeeld:</span></a></h3>
<ul>
<li><strong>Leeftijd</strong> kan worden berekend uit <strong>geboortedatum</strong> → daarom wordt alleen <strong>geboortedatum</strong> opgeslagen, niet <strong>leeftijd</strong>.</li>
</ul>
<Mermaid id="mermaid-387" code="eJxLLXLJTEwvSszlUgCCgNSi4vz8PIVqMA8EUhJLUhXcU5Py84tKUoGcUojCWi4A8bQQww=="></Mermaid><ul>
<li><strong>Totale prijs</strong> van een bestelling wordt berekend op basis van <strong>aantal producten en prijs per product</strong>.</li>
</ul>
<h2 id="relaties-met-attributen" tabindex="-1"><a class="header-anchor" href="#relaties-met-attributen"><span>Relaties met Attributen</span></a></h2>
<p>De moeilijkste stap bij het opstellen van een <strong>ERD</strong> is het identificeren van <strong>de attributen die bij de relaties horen</strong>.</p>
<h3 id="voorbeeld-3" tabindex="-1"><a class="header-anchor" href="#voorbeeld-3"><span>Voorbeeld:</span></a></h3>
<ul>
<li>&quot;Van elke werknemer wordt bijgehouden <strong>welke cursus hij wanneer volgde</strong>&quot;</li>
<li>Hier hoort <strong>&quot;jaartal&quot;</strong> bij de relatie <strong>&quot;volgt&quot;</strong> en <strong>niet</strong> bij de entiteiten <strong>&quot;Werknemer&quot;</strong> of <strong>&quot;Cursus&quot;</strong>.</li>
</ul>
<Mermaid id="mermaid-416" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihdoaXd38agXn0qLi0mIFKwWlsvyc9BIlsKowEFOhGswGgazExKKSxBwFT78QsFgtFwCTRxjp"></Mermaid><p>Met dit model kunnen <strong>relationele databases</strong> correct gestructureerd en beheerd worden.</p>
</div></template>


