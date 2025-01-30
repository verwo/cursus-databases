<template><div><h1 id="inleiding-tot-de-mysql-client" tabindex="-1"><a class="header-anchor" href="#inleiding-tot-de-mysql-client"><span>Inleiding tot de MySQL Client</span></a></h1>
<h2 id="verbinden-met-de-databank" tabindex="-1"><a class="header-anchor" href="#verbinden-met-de-databank"><span>Verbinden met de databank</span></a></h2>
<p>Voordat we verbinding kunnen maken met het DBMS, moeten we het starten. Dit kan worden gedaan door MySQL of MariaDB te starten via het XAMPP-configuratiescherm.</p>
<p>Een manier om met een DBMS te communiceren is via de <em>command line</em>. Op Windows kun je hiervoor <code v-pre>powershell</code> gebruiken. Het <code v-pre>mysql</code>-commando is niet afhankelijk van de huidige map waarin je je bevindt.</p>
<p>MySQL maakt gebruik van gebruikers. Standaard is er een <code v-pre>root</code>-gebruiker zonder wachtwoord beschikbaar. Om in te loggen als de <code v-pre>root</code>-gebruiker moet de <code v-pre>-u</code>-optie gevolgd door de gebruikersnaam worden meegegeven.</p>
<p>De opdracht om verbinding te maken met de databank is:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">mysql <span class="token parameter variable">-u</span> root</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="uitleg-van-de-commando-opties" tabindex="-1"><a class="header-anchor" href="#uitleg-van-de-commando-opties"><span>Uitleg van de commando-opties</span></a></h3>
<ul>
<li><code v-pre>mysql</code>: start de MySQL-client.</li>
<li><code v-pre>-u root</code>: geeft aan dat je inlogt als gebruiker <code v-pre>root</code>.</li>
<li><code v-pre>-p</code>: zorgt ervoor dat de client om een wachtwoord vraagt na het indrukken van Enter.</li>
<li><code v-pre>-h 127.0.0.1</code>: specificeert het IP-adres van de server. Dit is handig voor externe verbindingen; als het niet wordt opgegeven, wordt standaard <code v-pre>localhost</code> gebruikt.</li>
</ul>
<h3 id="verwachte-uitvoer" tabindex="-1"><a class="header-anchor" href="#verwachte-uitvoer"><span>Verwachte uitvoer</span></a></h3>
<p>Wanneer je de opdracht uitvoert, krijg je een output zoals deze:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Welcome to the MariaDB monitor.  Commands end with ; or \g.</span>
<span class="line">Your MariaDB connection id is 3</span>
<span class="line">Server version: 10.1.9-MariaDB mariadb.org binary distribution</span>
<span class="line"></span>
<span class="line">Copyright (c) 2000, 2015, Oracle, MariaDB Corporation Ab and others.</span>
<span class="line"></span>
<span class="line">Type 'help;' or '\h' voor hulp. Type '\c' om de huidige invoer te wissen.</span>
<span class="line"></span>
<span class="line">MariaDB [(none)]></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kijk naar de laatste regel. <code v-pre>MariaDB</code> is de naam van de database-server die door XAMPP wordt geïnstalleerd en gebruikt. Tussen de <code v-pre>[ ]</code> staat de naam van de geselecteerde databank. Omdat we op dit moment nog geen databank hebben geselecteerd, staat er <code v-pre>(none)</code>.</p>
</div></template>


