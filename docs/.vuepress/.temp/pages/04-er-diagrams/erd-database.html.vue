<template><div><h1 id="erd-model-omzetten-naar-databaseontwerp" tabindex="-1"><a class="header-anchor" href="#erd-model-omzetten-naar-databaseontwerp"><span>ERD-model omzetten naar databaseontwerp</span></a></h1>
<p>Het ERD-model moet nu omgezet worden naar een relationeel databaseontwerp. De omzetting verloopt vlot als je onderstaande regels toepast.</p>
<h2 id="entiteiten-en-hun-attributen" tabindex="-1"><a class="header-anchor" href="#entiteiten-en-hun-attributen"><span>Entiteiten en hun attributen</span></a></h2>
<p>In een opgemaakt ERD-model kan je de entiteiten vertalen in tabellen. De attributen van de entiteiten worden velden van de tabellen.</p>
<h2 id="relaties-zonder-attributen" tabindex="-1"><a class="header-anchor" href="#relaties-zonder-attributen"><span>Relaties zonder attributen</span></a></h2>
<h3 id="optionaliteit" tabindex="-1"><a class="header-anchor" href="#optionaliteit"><span>Optionaliteit</span></a></h3>
<p>De optionaliteit van een relatie wordt omgezet tot een eventuele beperking (constraint) van de tabel. Als de optionaliteit 1 is, is de entiteit vereist, wat meestal in de RDBMS zal leiden tot het vereist stellen van de refererende sleutel in de tabel corresponderend met de andere entiteit.</p>
<h3 id="een-op-een-relatie" tabindex="-1"><a class="header-anchor" href="#een-op-een-relatie"><span>Één-op-één relatie</span></a></h3>
<h4 id="voorbeeld" tabindex="-1"><a class="header-anchor" href="#voorbeeld"><span>Voorbeeld</span></a></h4>
<p>Administratieve werknemers krijgen een vaste bureautafel toegewezen op kantoor. Deze bureautafel moet met niemand gedeeld worden en iedereen krijgt slechts één bureautafel. Er kunnen werknemers zijn zonder bureautafel en bureautafels die niet gebruikt worden door werknemers.</p>
<Mermaid id="mermaid-30" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihZp8Xd38GgWn0qLUxNKSxLTUHAUrBaX01KSi0szsEiUuABoSEsw="></Mermaid><p><strong>Tabellen:</strong></p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">Bureautafel(BureautafelID, Locatie, Type ...)</span>
<span class="line">Werknemer(WerknemerID, Familienaam, Voornaam ...)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="regel" tabindex="-1"><a class="header-anchor" href="#regel"><span>Regel</span></a></h4>
<p>Van elke entiteit wordt een tabel gemaakt. Je neemt in één van beide tabellen de primaire sleutel op van de andere tabel.</p>
<h4 id="oplossing" tabindex="-1"><a class="header-anchor" href="#oplossing"><span>Oplossing</span></a></h4>
<p>Elke tabel heeft een primaire sleutel. In de eerste oplossing is WerknemerID de refererende sleutel, in de tweede oplossing is BureautafelID de refererende sleutel. De relatie is een één-op-één relatie.</p>
<Mermaid id="mermaid-47" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihWowH0XM00UhwBsu7JaYm5mTmZqXCNUKAmH5+UVwgVow6VRalJpYWpKYlpqDZCaSKKqpPvnJiSWZqXB+SGUBgoPsEjeIHoglCGfX1Ojq5teg2GqloJSRmppWosQFAMqrQN4="></Mermaid><h3 id="een-op-veel-relatie" tabindex="-1"><a class="header-anchor" href="#een-op-veel-relatie"><span>Één-op-veel relatie</span></a></h3>
<h4 id="voorbeeld-1" tabindex="-1"><a class="header-anchor" href="#voorbeeld-1"><span>Voorbeeld</span></a></h4>
<p>Beschouw dezelfde relatie als hierboven maar waarbij het mogelijk is dat een werknemer meerdere bureautafels toegewezen krijgt.</p>
<Mermaid id="mermaid-57" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihZoaXd38agWn0qLUxNKSxLTUHAUrBaX01KSi0szsEiUuABuKEtg="></Mermaid><p><strong>Tabellen:</strong></p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">Bureautafel(BureautafelID, Locatie, Type ...)</span>
<span class="line">Werknemer(WerknemerID, Familienaam, Voornaam ...)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="regel-1" tabindex="-1"><a class="header-anchor" href="#regel-1"><span>Regel</span></a></h4>
<p>Van elke entiteit wordt een tabel gemaakt. Je voegt de primaire sleutel van de tabel langs de één-kant toe als refererende sleutel aan de tabel van de veel-kant.</p>
<Mermaid id="mermaid-68" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihWowH0XM00UhwBsu7JaYm5mTmZqXCNUKAmH5+UVwgVow6VRalJpYWpKYlpqDZCaSKKqpPvnJiSWZqXB+SGUBgoPsEjeIHoglCGfX1Ojq5lej2GqloJSRmppWopCbmlqUklqUqsQFACe2REY="></Mermaid><h3 id="veel-op-veel-relatie" tabindex="-1"><a class="header-anchor" href="#veel-op-veel-relatie"><span>Veel-op-veel relatie</span></a></h3>
<h4 id="voorbeeld-2" tabindex="-1"><a class="header-anchor" href="#voorbeeld-2"><span>Voorbeeld</span></a></h4>
<p>Beschouw weer dezelfde relatie maar breid ze verder uit door toe te laten dat éénzelfde bureautafel gedeeld wordt door verschillende werknemers.</p>
<Mermaid id="mermaid-78" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihZoaXd38agX31KSi0szsEgUrBaWM1NS0EiWwOqfSotTE0pLEtNQcbCrL84tSShTSYSIp+flFSlwATRsjRg=="></Mermaid><p><strong>Tabellen:</strong></p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">Bureautafel(BureautafelID, Locatie, Type ...)</span>
<span class="line">Werknemer(WerknemerID, Familienaam, Voornaam ...)</span>
<span class="line">Gebruikt(WerknemerID FK, BureautafelID FK, Datum)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid id="mermaid-83" code="eJxLLXLJTEwvSszlUgCC8NSi7LzU3NQihWowHwQy80oQ4p4uCgHecKnikqLMvHQFt8TczJzM1LxEqClIUmH5+UVw8Vow6VRalJpYWpKYlpqDZguSDFZ7fPKTE0syU9GFQyoLEGLornWDmAKxGuG9mhpd3fxqFLdYKShlpKamlSjkpqYWpaQWpSpxAQD6cVNj"></Mermaid><h2 id="overzicht" tabindex="-1"><a class="header-anchor" href="#overzicht"><span>Overzicht</span></a></h2>
<ul>
<li>
<p><strong>Relatie zonder attributen</strong></p>
<ul>
<li>Één-op-één relatie: PS van ene tabel toevoegen als RS aan andere tabel.</li>
<li>Één-op-veel relatie: PS van de één-kant toevoegen als RS aan de veel-kant.</li>
<li>Veel-op-veel relatie: een extra tabel met beide PS.</li>
</ul>
</li>
<li>
<p><strong>Relaties met attributen</strong></p>
<ul>
<li>Altijd een extra tabel waarin beide PS en de attributen van de relatie worden opgenomen.</li>
</ul>
</li>
</ul>
</div></template>


