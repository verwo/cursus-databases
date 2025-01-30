import{_ as n,c as t,f as a,o as i}from"./app-BeVd8IBc.js";const r="/assets/mariadb_vs_mysql-CHooQ4wQ.jpg",o={};function s(l,e){return i(),t("div",null,e[0]||(e[0]=[a('<h1 id="inleiding-tot-sql" tabindex="-1"><a class="header-anchor" href="#inleiding-tot-sql"><span>Inleiding tot SQL</span></a></h1><h2 id="wat-is-sql" tabindex="-1"><a class="header-anchor" href="#wat-is-sql"><span>Wat is SQL?</span></a></h2><p>SQL kan op de volgende manieren worden uitgesproken:</p><ul><li>Als losse letters: S-Q-L</li><li>Of als <code>sequel</code></li></ul><p>SQL staat voor Structured Query Language. Het is een domeinspecifieke taal die speciaal is ontworpen voor communicatie met databanken. Een domeinspecifieke taal zoals SQL is ontworpen om één taak goed uit te voeren binnen een specifieke context. SQL biedt een eenvoudige en efficiënte manier om gegevens in een databank te lezen en te schrijven.</p><h2 id="relationeel-datamodel" tabindex="-1"><a class="header-anchor" href="#relationeel-datamodel"><span>Relationeel datamodel</span></a></h2><p>SQL gebruikt een relationeel datamodel. Een relationele databank organiseert gegevens in relatie tot elkaar. Dit heeft enkele voordelen:</p><ul><li>De relaties verminderen de opslagruimte en verbeteren de prestaties.</li><li>Er is sterke gegevensintegriteit dankzij ACID (<strong>A</strong>tomiciteit, <strong>C</strong>onsistentie, <strong>I</strong>solatie en <strong>D</strong>uurzaamheid).</li><li>SQL biedt een abstractie van hoe de gegevens fysiek worden opgeslagen.</li></ul><p>Toch heeft SQL ook enkele beperkingen:</p><ul><li>Het datamodel moet vooraf goed worden ontworpen. Wijzigingen in een schema kunnen downtime veroorzaken.</li><li>SQL-databanken zijn oorspronkelijk ontwikkeld voordat gedistribueerd rekenen gebruikelijk was. Standaard werken ze niet direct op meerdere systemen, al zijn er uitzonderingen zoals Facebook&#39;s MySQL-oplossingen.</li></ul><h2 id="standaard-querytaal" tabindex="-1"><a class="header-anchor" href="#standaard-querytaal"><span>Standaard querytaal</span></a></h2><p>SQL is geen eigendom van een specifiek bedrijf en wordt door bijna alle grote DBMS-systemen ondersteund. Dit maakt het mogelijk om met bijna elke databank te communiceren.</p><p>SQL is eenvoudig te leren. De opdrachten bestaan uit beschrijvende Engelse woorden, waardoor het intuïtief te lezen is. Ondanks de eenvoud is SQL zeer krachtig en kunnen complexe bewerkingen efficiënt worden uitgevoerd.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Als je een SQL-query kunt bouwen, verdient dit de voorkeur boven het ophalen van alle gegevens en filteren in een applicatie.</p></div><h2 id="mariadb-en-mysql" tabindex="-1"><a class="header-anchor" href="#mariadb-en-mysql"><span>MariaDB en MySQL</span></a></h2><div class="hint-container tip"><p class="hint-container-title">ℹ️ MySQL vs MariaDB</p><p>MySQL wordt beheerd door Oracle en is deels gesloten source. De oorspronkelijke ontwikkelaars vonden dit niet in lijn met hun visie en creëerden een open source fork: <strong>MariaDB</strong>.</p><p>MariaDB is volledig open source en compatibel met MySQL, wat betekent dat alle MySQL-opdrachten ook in MariaDB werken.</p></div><p><img src="'+r+'" alt="MariaDB en MySQL logo"></p><p>Figuur 1: MariaDB en MySQL logo&#39;s.</p><p>MySQL en MariaDB zijn populaire DBMS-systemen. Ze worden gebruikt voor zowel kleine projecten als grote toepassingen. Door hun betrouwbaarheid en snelheid zijn ze breed geaccepteerd in webontwikkeling, vaak als onderdeel van een <strong>LAMP</strong>-stack (<strong>L</strong>inux, <strong>A</strong>pache, <strong>M</strong>ariaDB, <strong>P</strong>HP).</p><p>Andere veelgebruikte SQL-databanken zijn onder andere:</p><ul><li>PostgreSQL</li><li>Oracle Database</li><li>Microsoft SQL Server</li></ul><h2 id="nosql" tabindex="-1"><a class="header-anchor" href="#nosql"><span>NoSQL</span></a></h2><p>Sinds de jaren ‘70 is SQL de standaard, maar in gedistribueerde systemen is SQL’s <strong>consistentie</strong> vervangen door <strong>eventuele consistentie</strong> om snelheid en beschikbaarheid te verbeteren. <strong>NoSQL</strong> verwijst naar databanken die geen relationeel model hanteren, zoals:</p><ul><li><strong>Key-Value Stores</strong>: DynamoDB</li><li><strong>Wide Column Stores</strong>: Cassandra</li><li><strong>Graph Databases</strong>: Neo4J</li><li><strong>Document Databases</strong>: MongoDB</li><li><strong>Time Series Databases</strong>: InfluxDB</li></ul><div class="hint-container tip"><p class="hint-container-title">ℹ️ Populaire databanken</p><p>Een overzicht van de <a href="https://db-engines.com/en/ranking" target="_blank" rel="noopener noreferrer">meest populaire databanken</a>.</p></div><p>In deze cursus behandelen we enkel SQL-databanken en specifiek MariaDB.</p><h2 id="ddl-vs-dml" tabindex="-1"><a class="header-anchor" href="#ddl-vs-dml"><span>DDL vs DML</span></a></h2><p>SQL-opdrachten vallen in twee categorieën:</p><ul><li><strong>Data Definition Language (DDL)</strong>: Creëert tabellen, relaties en andere structuren (schema-definitie).</li><li><strong>Data Manipulation Language (DML)</strong>: Queries en bewerkingen op gegevens, zoals filteren, bijwerken en verwijderen.</li></ul><h2 id="crud-principes" tabindex="-1"><a class="header-anchor" href="#crud-principes"><span>CRUD-principes</span></a></h2><p>CRUD staat voor <strong>Create, Read, Update, Delete</strong>, de vier basisbewerkingen voor gegevensopslag.</p><table><thead><tr><th>Actie</th><th>DDL</th><th>DML</th></tr></thead><tbody><tr><td>C</td><td><code>CREATE TABLE</code></td><td><code>INSERT INTO</code></td></tr><tr><td>R</td><td><code>SHOW COLUMNS</code></td><td><code>SELECT</code></td></tr><tr><td>U</td><td><code>ALTER TABLE</code></td><td><code>UPDATE</code></td></tr><tr><td>D</td><td><code>DROP TABLE</code></td><td><code>DELETE FROM</code></td></tr></tbody></table><p>Tabel 1: CRUD in relatie tot DDL en DML.</p><p>In de volgende hoofdstukken gaan we dieper in op deze SQL-opdrachten.</p><div class="hint-container tip"><p class="hint-container-title">Hoofdlettergebruik</p><p>SQL is standaard <strong>niet hoofdlettergevoelig</strong>, maar in deze cursus worden <strong>SQL-trefwoorden in hoofdletters</strong> weergegeven en variabelen in kleine letters.</p></div>',35)]))}const g=n(o,[["render",s],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/01-databases/sql-language/","title":"SQL","lang":"nl-BE","frontmatter":{"title":"SQL"},"headers":[{"level":2,"title":"Wat is SQL?","slug":"wat-is-sql","link":"#wat-is-sql","children":[]},{"level":2,"title":"Relationeel datamodel","slug":"relationeel-datamodel","link":"#relationeel-datamodel","children":[]},{"level":2,"title":"Standaard querytaal","slug":"standaard-querytaal","link":"#standaard-querytaal","children":[]},{"level":2,"title":"MariaDB en MySQL","slug":"mariadb-en-mysql","link":"#mariadb-en-mysql","children":[]},{"level":2,"title":"NoSQL","slug":"nosql","link":"#nosql","children":[]},{"level":2,"title":"DDL vs DML","slug":"ddl-vs-dml","link":"#ddl-vs-dml","children":[]},{"level":2,"title":"CRUD-principes","slug":"crud-principes","link":"#crud-principes","children":[]}],"git":{"updatedTime":1738232403000,"contributors":[{"name":"verwo","username":"verwo","email":"wouter_verstraete@hotmail.com","commits":2,"url":"https://github.com/verwo"}]},"filePathRelative":"01-databases/sql-language/index.md"}');export{g as comp,p as data};
