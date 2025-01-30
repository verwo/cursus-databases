<template><div><h1 id="inleiding-tot-mysql-datatypes" tabindex="-1"><a class="header-anchor" href="#inleiding-tot-mysql-datatypes"><span>Inleiding tot MySQL Datatypes</span></a></h1>
<p>Datatypes bepalen <strong>wat</strong> er in een kolom kan worden opgeslagen en <strong>hoe</strong> deze gegevens worden opgeslagen.</p>
<h2 id="waarom-datatypes-belangrijk-zijn" tabindex="-1"><a class="header-anchor" href="#waarom-datatypes-belangrijk-zijn"><span>Waarom datatypes belangrijk zijn</span></a></h2>
<p>Datatypes bestaan om verschillende redenen:</p>
<ul>
<li><strong>Restrictie</strong>: Zorgt ervoor dat alleen gegevens van het juiste type kunnen worden opgeslagen. Dit helpt bij het voorkomen van fouten.</li>
<li><strong>Efficiëntie</strong>: Verschillende datatypes optimaliseren snelheid of opslagruimte, afhankelijk van de vereisten.</li>
<li><strong>Sorteerorde</strong>: Numerieke en tekstuele sortering volgen verschillende regels. Het juiste datatype kiezen bepaalt hoe gegevens worden gesorteerd.</li>
</ul>
<p>Het kiezen van het juiste datatype is cruciaal. Foute keuzes kunnen resulteren in langzame queries of inefficiënt gebruik van opslagruimte. Het wijzigen van datatypes in bestaande kolommen is een complexe taak en moet zoveel mogelijk worden vermeden.</p>
<h2 id="soorten-datatypes-in-mysql" tabindex="-1"><a class="header-anchor" href="#soorten-datatypes-in-mysql"><span>Soorten datatypes in MySQL</span></a></h2>
<p>MySQL maakt gebruik van drie hoofdtypen datatypes:</p>
<ul>
<li><strong>Teksttypen</strong></li>
<li><strong>Numerieke typen</strong></li>
<li><strong>Datumtypen</strong></li>
</ul>
<h2 id="teksttypen" tabindex="-1"><a class="header-anchor" href="#teksttypen"><span>Teksttypen</span></a></h2>
<table>
<thead>
<tr>
<th>Type</th>
<th>Beschrijving</th>
<th>Maximale lengte</th>
</tr>
</thead>
<tbody>
<tr>
<td>CHAR(n)</td>
<td>String met een vaste lengte</td>
<td>255 tekens</td>
</tr>
<tr>
<td>VARCHAR(n)</td>
<td>String met een variabele lengte</td>
<td>255 tekens</td>
</tr>
<tr>
<td>TINYTEXT</td>
<td>Kleine tekstwaarde</td>
<td>255 tekens</td>
</tr>
<tr>
<td>TEXT</td>
<td>Grotere tekstwaarde</td>
<td>65.535 tekens</td>
</tr>
<tr>
<td>MEDIUMTEXT</td>
<td>Zeer grote tekstwaarde</td>
<td>16.777.215 tekens</td>
</tr>
<tr>
<td>LONGTEXT</td>
<td>Enorme tekstwaarde</td>
<td>4.294.967.295 tekens</td>
</tr>
<tr>
<td>ENUM(x,y,z,...)</td>
<td>Lijst met vooraf gedefinieerde waarden</td>
<td>65.535 waarden</td>
</tr>
<tr>
<td>SET</td>
<td>Meerdere geselecteerde waarden uit een lijst</td>
<td>64 waarden</td>
</tr>
</tbody>
</table>
<h2 id="numerieke-typen" tabindex="-1"><a class="header-anchor" href="#numerieke-typen"><span>Numerieke typen</span></a></h2>
<table>
<thead>
<tr>
<th>Type</th>
<th>Beschrijving</th>
<th>Bereik (Signed)</th>
<th>Bereik (Unsigned)</th>
</tr>
</thead>
<tbody>
<tr>
<td>TINYINT</td>
<td>Zeer kleine integer</td>
<td>-128 tot 127</td>
<td>0 tot 255</td>
</tr>
<tr>
<td>SMALLINT</td>
<td>Kleine integer</td>
<td>-32.768 tot 32.767</td>
<td>0 tot 65.535</td>
</tr>
<tr>
<td>MEDIUMINT</td>
<td>Middelgrote integer</td>
<td>-8.388.608 tot 8.388.607</td>
<td>0 tot 16.777.215</td>
</tr>
<tr>
<td>INT</td>
<td>Standaard integer</td>
<td>-2.147.483.648 tot 2.147.483.647</td>
<td>0 tot 4.294.967.295</td>
</tr>
<tr>
<td>BIGINT</td>
<td>Zeer grote integer</td>
<td>-9.223.372.036.854.775.808 tot 9.223.372.036.854.775.807</td>
<td>0 tot 18.446.744.073.709.551.615</td>
</tr>
<tr>
<td>FLOAT</td>
<td>Kleine drijvende-kommagetal</td>
<td></td>
<td></td>
</tr>
<tr>
<td>DOUBLE</td>
<td>Grote drijvende-kommagetal</td>
<td></td>
<td></td>
</tr>
<tr>
<td>DECIMAL</td>
<td>Precisiegetal, opgeslagen als string</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="datumtypen" tabindex="-1"><a class="header-anchor" href="#datumtypen"><span>Datumtypen</span></a></h2>
<table>
<thead>
<tr>
<th>Type</th>
<th>Beschrijving</th>
<th>Formaat</th>
<th>Bereik</th>
</tr>
</thead>
<tbody>
<tr>
<td>DATE</td>
<td>Datum</td>
<td>YYYY-MM-DD</td>
<td>1000-01-01 tot 9999-12-31</td>
</tr>
<tr>
<td>DATETIME</td>
<td>Datum en tijd</td>
<td>YYYY-MM-DD HH:MI:SS</td>
<td>1000-01-01 00:00:00 tot 9999-12-31 23:59:59</td>
</tr>
<tr>
<td>TIMESTAMP</td>
<td>Unix timestamp</td>
<td>YYYY-MM-DD HH:MI:SS</td>
<td>1970-01-01 00:00:01 UTC tot 2038-01-09 03:14:07 UTC</td>
</tr>
<tr>
<td>TIME</td>
<td>Tijd</td>
<td>HH:MI:SS</td>
<td>-838:59:59 tot 838:59:59</td>
</tr>
<tr>
<td>YEAR</td>
<td>Jaar</td>
<td>YYYY</td>
<td>1901 tot 2155</td>
</tr>
</tbody>
</table>
<h2 id="voorbeeld-enum-en-set" tabindex="-1"><a class="header-anchor" href="#voorbeeld-enum-en-set"><span>Voorbeeld: ENUM en SET</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> honden<span class="token punctuation">(</span></span>
<span class="line">   id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span></span>
<span class="line">   naam <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span></span>
<span class="line">   chip_id <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">   geslacht <span class="token keyword">enum</span><span class="token punctuation">(</span><span class="token string">'mannelijk'</span><span class="token punctuation">,</span> <span class="token string">'vrouwelijk'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">   vachtkleur <span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string">'zwart'</span><span class="token punctuation">,</span> <span class="token string">'wit'</span><span class="token punctuation">,</span> <span class="token string">'bruin'</span><span class="token punctuation">,</span> <span class="token string">'beige'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> honden<span class="token punctuation">(</span>naam<span class="token punctuation">,</span> chip_id<span class="token punctuation">,</span> geslacht<span class="token punctuation">,</span> vachtkleur<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token string">'Toby'</span><span class="token punctuation">,</span> <span class="token number">7865</span><span class="token punctuation">,</span> <span class="token string">'mannelijk'</span><span class="token punctuation">,</span> <span class="token string">'bruin,beige'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token string">'Medoc'</span><span class="token punctuation">,</span> <span class="token number">8776</span><span class="token punctuation">,</span> <span class="token string">'mannelijk'</span><span class="token punctuation">,</span> <span class="token string">'bruin'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token string">'Luna'</span><span class="token punctuation">,</span> <span class="token number">7654</span><span class="token punctuation">,</span> <span class="token string">'vrouwelijk'</span><span class="token punctuation">,</span> <span class="token string">'zwart,wit'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token string">'Alien'</span><span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">,</span> <span class="token string">'alien'</span><span class="token punctuation">,</span> <span class="token string">'groen'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hieronder het resultaat van een <code v-pre>SELECT *</code> op de tabel:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----+------------+---------+--------+-------------+</span>
<span class="line">| id | naam       | chip_id | geslacht | vachtkleur  |</span>
<span class="line">+----+------------+---------+--------+-------------+</span>
<span class="line">|  1 | Beethoven  |    7865 | mannelijk | bruin,beige |</span>
<span class="line">|  2 | Laika      |    8776 | vrouwelijk | bruin       |</span>
<span class="line">|  3 | Droopy     |    7654 | mannelijk | zwart,wit   |</span>
<span class="line">|  4 | Swami Bami |     666 |        |             |</span>
<span class="line">+----+------------+---------+--------+-------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="opslagruimte-versus-snelheid" tabindex="-1"><a class="header-anchor" href="#opslagruimte-versus-snelheid"><span>Opslagruimte versus snelheid</span></a></h2>
<h3 id="tinyint-vs-bigint" tabindex="-1"><a class="header-anchor" href="#tinyint-vs-bigint"><span>TINYINT vs BIGINT</span></a></h3>
<p>Een TINYINT gebruikt slechts 1 byte, terwijl een BIGINT 8 bytes gebruikt. Kies de kleinste datatype die past bij de behoeften van je gegevens.</p>
<h3 id="char-vs-varchar" tabindex="-1"><a class="header-anchor" href="#char-vs-varchar"><span>CHAR vs VARCHAR</span></a></h3>
<p>CHAR gebruikt een vaste lengte en wordt opgevuld met spaties, terwijl VARCHAR alleen de werkelijke tekens opslaat. CHAR is sneller voor vaste lengtes, terwijl VARCHAR opslagruimte bespaart.</p>
<h3 id="float-vs-decimal" tabindex="-1"><a class="header-anchor" href="#float-vs-decimal"><span>FLOAT vs DECIMAL</span></a></h3>
<p>FLOAT en DOUBLE zijn sneller en gebruiken minder opslagruimte, maar hebben een nauwkeurigheidsmarge. DECIMAL is preciezer en wordt aanbevolen voor financiële gegevens.</p>
<h2 id="meer-informatie" tabindex="-1"><a class="header-anchor" href="#meer-informatie"><span>Meer informatie</span></a></h2>
<ul>
<li><a href="https://dev.mysql.com/doc/refman/5.7/en/data-types.html" target="_blank" rel="noopener noreferrer">MySQL Data Types documentatie</a></li>
<li><a href="http://www.brandonsavage.net/designing-databases-picking-the-right-data-types/" target="_blank" rel="noopener noreferrer">Database ontwerp en datatypes</a></li>
</ul>
</div></template>


