<template><div><h1 id="voorbeeld-databases-instellen" tabindex="-1"><a class="header-anchor" href="#voorbeeld-databases-instellen"><span>Voorbeeld Databases Instellen</span></a></h1>
<p>In deze cursus gebruiken we de <strong>forta</strong>-database. Deze database is gemaakt door Ben Forta (<a href="http://forta.com/" target="_blank" rel="noopener noreferrer">http://forta.com/</a>). Op deze pagina doorlopen we stap voor stap hoe je deze database kunt aanmaken.</p>
<p>Je hebt een MySQL-server nodig (bijvoorbeeld XAMPP) en een MySQL-client (Command Prompt, Bash of PowerShell volstaat).</p>
<p>Je moet ook de bestanden downloaden van <a href="https://forta.com/wp-content/uploads/books/0672327120/mysql_scripts.zip" target="_blank" rel="noopener noreferrer">https://forta.com/wp-content/uploads/books/0672327120/mysql_scripts.zip</a> en uitpakken.</p>
<blockquote>
<p>💡 <strong>Tip:</strong> SQL-sleutelwoorden in hoofdletters<br>
In deze cursus schrijven we alle SQL-code in hoofdletters. Dit is niet verplicht, maar helpt bij het onderscheiden van vaste SQL-code en namen die je kunt wijzigen.</p>
</blockquote>
<h2 id="verbinden-met-de-database" tabindex="-1"><a class="header-anchor" href="#verbinden-met-de-database"><span>Verbinden met de database</span></a></h2>
<p>Start eerst je databaseserver zoals geleerd in het vorige hoofdstuk. Open vervolgens je MySQL-client in de map waar je de bestanden hebt uitgepakt. Je kunt de client openen door <code v-pre>PowerShell</code> in de adresbalk van Windows Verkenner te typen en vervolgens het volgende commando in te voeren:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">mysql <span class="token parameter variable">-u</span> root</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Verklaring van de parameters:</p>
<ul>
<li><code v-pre>mysql</code>: start de MySQL-client.</li>
<li><code v-pre>-u root</code>: log in als gebruiker <code v-pre>root</code>.</li>
<li><code v-pre>-p</code>: vraagt om een wachtwoord na het indrukken van Enter.</li>
<li><code v-pre>-h 127.0.0.1</code>: specificeert het IP-adres van de server (gebruik <code v-pre>localhost</code> indien niet opgegeven).</li>
</ul>
<p>Na verbinding zie je de prompt:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">MariaDB [(none)]></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Dit betekent dat je bent verbonden met de server, maar nog geen database hebt geselecteerd.</p>
<h2 id="bestaande-databases-bekijken" tabindex="-1"><a class="header-anchor" href="#bestaande-databases-bekijken"><span>Bestaande databases bekijken</span></a></h2>
<p>Voordat we een nieuwe database aanmaken, bekijken we eerst welke databases al bestaan:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Dit toont een lijst van beschikbare databases, inclusief systeemtaken zoals <code v-pre>mysql</code>, <code v-pre>information_schema</code> en <code v-pre>performance_schema</code>. Deze databases bevatten interne configuratiegegevens en mogen niet gewijzigd worden.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">--------------------+</span></span>
<span class="line"><span class="token operator">|</span> <span class="token keyword">Database</span>           <span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">--------------------+</span></span>
<span class="line"><span class="token operator">|</span> information_schema <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> mysql              <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> performance_schema <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> phpmyadmin         <span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span> test               <span class="token operator">|</span></span>
<span class="line"><span class="token operator">+</span><span class="token comment">--------------------+</span></span>
<span class="line"><span class="token number">5</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.001</span> sec<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="de-database-aanmaken-en-importeren" tabindex="-1"><a class="header-anchor" href="#de-database-aanmaken-en-importeren"><span>De database aanmaken en importeren</span></a></h2>
<h3 id="database-aanmaken" tabindex="-1"><a class="header-anchor" href="#database-aanmaken"><span>Database aanmaken</span></a></h3>
<p>Maak een lege database aan met:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> forta<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">USE</span> forta<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="importeren-van-database-structuur" tabindex="-1"><a class="header-anchor" href="#importeren-van-database-structuur"><span>Importeren van database structuur</span></a></h3>
<p>Om de database-structuur aan te maken, voer het volgende commando uit:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">SOURCE C:<span class="token operator">/</span>Users<span class="token operator">/</span>Username<span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span><span class="token keyword">create</span><span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Zorg dat het bestand <code v-pre>create.sql</code> zich in de juiste map bevindt.</p>
<h3 id="controleren-van-aangemaakte-tabellen" tabindex="-1"><a class="header-anchor" href="#controleren-van-aangemaakte-tabellen"><span>Controleren van aangemaakte tabellen</span></a></h3>
<p>Om te controleren of de database correct is aangemaakt en welke tabellen erin zitten, gebruik je:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Dit toont informatie over kolommen, types en sleutels.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">MariaDB [forta]> SHOW TABLES;</span>
<span class="line">+-----------------+</span>
<span class="line">| Tables_in_forta |</span>
<span class="line">+-----------------+</span>
<span class="line">| customers       |</span>
<span class="line">| orderitems      |</span>
<span class="line">| orders          |</span>
<span class="line">| productnotes    |</span>
<span class="line">| products        |</span>
<span class="line">| vendors         |</span>
<span class="line">+-----------------+</span>
<span class="line">6 rows in set (0.000 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="de-database-vullen" tabindex="-1"><a class="header-anchor" href="#de-database-vullen"><span>De database vullen</span></a></h2>
<p>Gebruik het volgende commando om gegevens in de database te laden:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">SOURCE C:<span class="token operator">/</span>Users<span class="token operator">/</span>Username<span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>populate<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Controleer vervolgens of de gegevens correct zijn geladen:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Als alles correct is geïmporteerd, zie je een lijst met producten.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">MariaDB [forta]> SELECT * FROM products;</span>
<span class="line">+---------+---------+----------------+------------+----------------------------------------------------------------+</span>
<span class="line">| prod_id | vend_id | prod_name      | prod_price | prod_desc                                                      |</span>
<span class="line">+---------+---------+----------------+------------+----------------------------------------------------------------+</span>
<span class="line">| ANV01   |    1001 | .5 ton anvil   |       5.99 | .5 ton anvil, black, complete with handy hook                  |</span>
<span class="line">| ANV02   |    1001 | 1 ton anvil    |       9.99 | 1 ton anvil, black, complete with handy hook and carrying case |</span>
<span class="line">| ANV03   |    1001 | 2 ton anvil    |      14.99 | 2 ton anvil, black, complete with handy hook and carrying case |</span>
<span class="line">| DTNTR   |    1003 | Detonator      |      13.00 | Detonator (plunger powered), fuses not included                |</span>
<span class="line">| FB      |    1003 | Bird seed      |      10.00 | Large bag (suitable for road runners)                          |</span>
<span class="line">| FC      |    1003 | Carrots        |       2.50 | Carrots (rabbit hunting season only)                           |</span>
<span class="line">| FU1     |    1002 | Fuses          |       3.42 | 1 dozen, extra long                                            |</span>
<span class="line">| JP1000  |    1005 | JetPack 1000   |      35.00 | JetPack 1000, intended for single use                          |</span>
<span class="line">| JP2000  |    1005 | JetPack 2000   |      55.00 | JetPack 2000, multi-use                                        |</span>
<span class="line">| OL1     |    1002 | Oil can        |       8.99 | Oil can, red                                                   |</span>
<span class="line">| SAFE    |    1003 | Safe           |      50.00 | Safe with combination lock                                     |</span>
<span class="line">| SLING   |    1003 | Sling          |       4.49 | Sling, one size fits all                                       |</span>
<span class="line">| TNT1    |    1003 | TNT (1 stick)  |       2.50 | TNT, red, single stick                                         |</span>
<span class="line">| TNT2    |    1003 | TNT (5 sticks) |      10.00 | TNT, red, pack of 10 sticks                                    |</span>
<span class="line">+---------+---------+----------------+------------+----------------------------------------------------------------+</span>
<span class="line">14 rows in set (0.001 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extra-databases" tabindex="-1"><a class="header-anchor" href="#extra-databases"><span>Extra databases</span></a></h2>
<h3 id="game-reviews-database" tabindex="-1"><a class="header-anchor" href="#game-reviews-database"><span>Game Reviews database</span></a></h3>
<p>Download het bestand <a href="../../files/gamereviews_example.zip">gamereviews_example.zip</a> en importeer <code v-pre>gamereviews_example.sql</code> met:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">SOURCE C:<span class="token operator">/</span>Users<span class="token operator">/</span>Username<span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>gamereviews_example<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="spacex-database" tabindex="-1"><a class="header-anchor" href="#spacex-database"><span>SpaceX database</span></a></h3>
<p>Download het bestand <a href="../../files/spacex.zip">spacex.zip</a> en importeer <code v-pre>spacex.sql</code> met:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">SOURCE C:<span class="token operator">/</span>Users<span class="token operator">/</span>Username<span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>spacex<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="grotere-testdatabase" tabindex="-1"><a class="header-anchor" href="#grotere-testdatabase"><span>Grotere testdatabase</span></a></h3>
<p>Sommige voorbeelden gebruiken een grotere testdatabase met werknemersgegevens. Download deze van <a href="https://github.com/datacharmer/test_db" target="_blank" rel="noopener noreferrer">datacharmer/test_db</a> op GitHub.</p>
<p>Navigeer naar de map waarin je het bestand hebt opgeslagen en start de MySQL-client. Gebruik vervolgens:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line">SOURCE C:<span class="token operator">/</span>Users<span class="token operator">/</span>Username<span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>employees<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Dit proces duurt langer omdat het een grotere database betreft. Je kunt een tweede client openen om verder te werken terwijl deze wordt geïmporteerd.</p>
<h2 id="sql-optimalisaties" tabindex="-1"><a class="header-anchor" href="#sql-optimalisaties"><span>SQL Optimalisaties</span></a></h2>
<ul>
<li><strong>Gebruik indexen</strong>: Voorkom trage queries door indexen toe te voegen aan kolommen die vaak worden gebruikt in <code v-pre>WHERE</code>-clausules.</li>
<li>**Vermijd SELECT ***: Haal alleen de benodigde kolommen op om prestaties te verbeteren.</li>
<li><strong>Gebruik juiste datatypes</strong>: Gebruik <code v-pre>VARCHAR</code> in plaats van <code v-pre>TEXT</code> als kolomwaarden klein zijn.</li>
</ul>
<p>Je hebt nu databases om mee te oefenen. Ga verder naar het volgende hoofdstuk: <strong>Gegevens opvragen (Retrieving Data).</strong></p>
</div></template>


