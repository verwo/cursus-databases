<template><div><h1 id="mysql-client" tabindex="-1"><a class="header-anchor" href="#mysql-client"><span>MySQL Client</span></a></h1>
<h2 id="connecting-to-the-database" tabindex="-1"><a class="header-anchor" href="#connecting-to-the-database"><span>Connecting to the database</span></a></h2>
<p>Before we can start and connect to the DBMS, we need to start it. This can be done by starting MySQL or MariaDB using the XAMPP control panel.</p>
<p>One way to communicate with a DBMS is by using the <em>command line</em>. On Windows you can use <code v-pre>powershell</code>. The <code v-pre>mysql</code> command is not context or location aware, so it does not matter what the current directory is.</p>
<p>As we will see later on, MySQL makes use of users. By default a user <code v-pre>root</code> without password is available to use. To tell the <code v-pre>mysql</code> command that we want to log in as the user <code v-pre>root</code> we need to pass the <code v-pre>-u</code>option followed by the username.</p>
<p>To connect to the database you can use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">mysql <span class="token parameter variable">-u</span> root</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>mysql</code>: this tells your commandpromp or powerschell to start the mysql client.</li>
<li><code v-pre>-u root</code>: the -u tells the client to log with the given name, in this case 'root'.</li>
<li><code v-pre>-p</code>: the -p tells the client to ask for a password after you pressed enter.</li>
<li><code v-pre>-h 127.0.0.1</code>: this tells the client to connect on ip-adress 127.0.0.1, can be used for connection on remote servers, when not specified it will use the default of localhost.</li>
</ul>
<p>Running the command should show you something like this:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Welcome to the MariaDB monitor.  Commands end with ; or \g.</span>
<span class="line">Your MariaDB connection id is 3</span>
<span class="line">Server version: 10.1.9-MariaDB mariadb.org binary distribution</span>
<span class="line"></span>
<span class="line">Copyright (c) 2000, 2015, Oracle, MariaDB Corporation Ab and others.</span>
<span class="line"></span>
<span class="line">Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.</span>
<span class="line"></span>
<span class="line">MariaDB [(none)]></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Take a look at the last line. MariaDB is the name of the database server that is installed and used by XAMPP. Between the <code v-pre>[ ]</code>is the name of the selected database, for the moment we don't have a database selected so it says <code v-pre>(none)</code>.</p>
</div></template>


