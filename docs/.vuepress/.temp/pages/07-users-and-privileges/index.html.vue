<template><div><h1 id="users-privileges" tabindex="-1"><a class="header-anchor" href="#users-privileges"><span>Users &amp; Privileges</span></a></h1>
<p>When connecting to a database a user and password is needed. The default user
is called <code v-pre>root</code> and currently has no password.</p>
<p>The <code v-pre>root</code> user is the administrative user. It has all privileges, can access
all the data and can execute any query. For local development this might be just
ok. But on a production server, this is actually a really bad idea. Someone with
bad intentions can easily guess this combination of username and password and
can just do whatever he wants. He can steal all data, change data or even delete
it.</p>
<p>MySQL enables you to define multiple users for a single server instance. This means
that you can create as many users, with their own username and password, as you want.
On top of that each user can have its own set or privileges, telling what it can
and cant do. For example you can create users that only need read privileges on
a single table where as another user can only create rows (without the ability to
read them.)</p>
<h2 id="hosts" tabindex="-1"><a class="header-anchor" href="#hosts"><span>Hosts</span></a></h2>
<p>MySQL makes a difference for users depending from what machine they connect to the
database. This means that someone that connects with the username <code v-pre>root</code> from the
same machine as where the database server is running on <code v-pre>localhost</code>,
is not the same user that connects with username <code v-pre>root</code> from another computer on the
network or the internet.</p>
<p>Each username is tied to an interface it connects on. This is called the 'host'
part of the username.</p>
<p>If a server has 1 network interface with the ip <code v-pre>192.168.1.10</code>, then users can use
this connect interface to connect to the database. Every server/computer has also
a loopback interface that has the ip <code v-pre>127.0.0.1</code> also known as <code v-pre>localhost</code>.
MySQL/MariaDB can thus make a distinction between connections coming from each of
the two interfaces. This enables the database to control which machines are allowed
to make connections together with the corresponding username.</p>
<p>It is also possible to allow connections from any host. In this case a <code v-pre>%</code> wildcard
can be used.</p>
<p>By default MySQL and MariaDB are configured to listen only to connections on <code v-pre>localhost</code>.
This means that if you want to connect from a remote machine, you need to configure
this first.</p>
<h2 id="users" tabindex="-1"><a class="header-anchor" href="#users"><span>Users</span></a></h2>
<p>To connect to the database with the <code v-pre>root</code> user you can use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>If the <code v-pre>root</code> user has no password, the <code v-pre>-p</code> can be omitted.</p>
<h3 id="the-root-user" tabindex="-1"><a class="header-anchor" href="#the-root-user"><span>The <code v-pre>root</code> user</span></a></h3>
<p>Don't be alarmed if your <code v-pre>root</code> user has no password. Keep in mind that the database
server will also take the machine from where the connection is initiated
from into account. By default <code v-pre>root</code> is only allowed to connect from <code v-pre>localhost</code>.
This means that nobody can get access to your database, unless they have access to
your computer. Remote connections are not allowed.</p>
<p>In development situations this might be tolerated. On production environments this
is a real security problem. It's best to create a different user for each application
that needs to connect to the database.</p>
<h3 id="changing-passwords" tabindex="-1"><a class="header-anchor" href="#changing-passwords"><span>Changing passwords</span></a></h3>
<p>It might be an good idea to change the root password in order to prevent unwanted
access to your database. This can be done once logged in, with the following command:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">'root'</span><span class="token variable">@'localhost'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'password'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Note that the full username consist out of the username <code v-pre>root</code> and hostname <code v-pre>localhost</code>,
separated with an <code v-pre>@</code> sign.</p>
<p>The <code v-pre>ALTER USER</code> query expects a password that is designated by the <code v-pre>IDENTIFIED BY</code>
clause. You can place your new password there in order to change the current password.</p>
<p>Note that if you change the <code v-pre>root</code> password, make sure you remember the password.
If it's the only user with adequate permissions, you might block yourself out of
your own database. If you ever get in this situation, remember that you can get
access again with a specific set of commands when starting the server service.</p>
<h3 id="creating-users" tabindex="-1"><a class="header-anchor" href="#creating-users"><span>Creating users</span></a></h3>
<p>Creating users is done in a similar way. This can be done using a <code v-pre>CREATE USER</code>
query:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'thomas'</span><span class="token variable">@'localhost'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'my_secret_password'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The query above will create a user named <code v-pre>thomas</code> that is only allowed to connect
from <code v-pre>localhost</code>. His password is <code v-pre>my_secret_password</code>.</p>
<p>The same username can be used multiple times if you change the host part. Each user
can have a different password for each allowed host.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">'thomas'</span><span class="token variable">@'%'</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">'anotherpassword'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Different privileges can be assigned to the different users allowing them to do
different things depending on where they make a connection from. For example if
'thomas' connects from a remote machine, the privileges can be more restricted
in order to prevent security issues.</p>
<h3 id="deleting-users" tabindex="-1"><a class="header-anchor" href="#deleting-users"><span>Deleting users</span></a></h3>
<p>When users are no longer needed, they can be delete with the <code v-pre>DROP USER</code> query.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">USER</span> <span class="token string">'thomas'</span><span class="token variable">@'localhost'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="privileges" tabindex="-1"><a class="header-anchor" href="#privileges"><span>Privileges</span></a></h2>
<p>Each user can have its own set of privileges. The privileges allow users to give
permissions to some actions and deny others. This enables fine grained control
over who can do what.</p>
<p>For example in a company, sales people might need to only insert invoices into the
database, but might not be allowed to read them. On the other hand, accountants
might only be able to read invoiced, but not create them.</p>
<h3 id="multiple-isolated-databases" tabindex="-1"><a class="header-anchor" href="#multiple-isolated-databases"><span>Multiple isolated databases</span></a></h3>
<p>An other way in which privileges are used is to allow certain users only to have
access to a single database. This principle is used by many shared hosting services.</p>
<p>This allows a single database server to host many databases for multiple users that
should not get access to each others databases.</p>
<h3 id="adding-permissions" tabindex="-1"><a class="header-anchor" href="#adding-permissions"><span>Adding Permissions</span></a></h3>
<p>If you create a new user, the user does not have any privileges. This means the user
can only log in and do nothing. In order to give access to some tasks and resources
permissions must be created (granted) to that user.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> forta<span class="token punctuation">.</span>products</span>
<span class="line"><span class="token keyword">TO</span> <span class="token string">'thomas'</span><span class="token variable">@'localhost'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the user <code v-pre>thomas</code> that connects from <code v-pre>localhost</code> is granted all
privileges for the <code v-pre>products</code> table in the <code v-pre>forta</code> database.</p>
<p>Thomas can do anything only within this database. Thomas has no access nor is he
able to see any other table in the <code v-pre>forta</code> database or any other database.</p>
<p>Wildcards can be used for tables and databases in order to grant access to multiple
tables or databases as well.</p>
<p>The following query will give thomas permissions to all the tables in the forta database:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> forta<span class="token punctuation">.</span><span class="token operator">*</span></span>
<span class="line"><span class="token keyword">TO</span> <span class="token string">'thomas'</span><span class="token variable">@'localhost'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The following query will give thomas permissions to all databases and all tables
(just like the root user):</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span></span>
<span class="line"><span class="token keyword">TO</span> <span class="token string">'thomas'</span><span class="token variable">@'localhost'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Instead of granting <code v-pre>ALL PRIVILEGES</code>, which just allows anything, it is also possible
to grant specific privileges.</p>
<p>Here is a list of privileges that can be used to <code v-pre>GRANT</code>.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ALL PRIVILEGES</td>
<td>You can do anything the database allows</td>
</tr>
<tr>
<td>CREATE</td>
<td>Allows the user to create new tables or databases</td>
</tr>
<tr>
<td>DROP</td>
<td>Allows the user to delete tables or databases</td>
</tr>
<tr>
<td>DELETE</td>
<td>Allows the user to delete rows from tables</td>
</tr>
<tr>
<td>INSERT</td>
<td>Allows them to insert rows into tables</td>
</tr>
<tr>
<td>SELECT</td>
<td>Allows them to use select queries to read data from tables</td>
</tr>
<tr>
<td>UPDATE</td>
<td>Allows them to update table rows</td>
</tr>
<tr>
<td>GRANT OPTION</td>
<td>Allows them to grant and remove other users' privileges</td>
</tr>
</tbody>
</table>
<p>Note: this is just a summary of the most important grants. Many others exist.</p>
<p>In the following example, Thomas can only read and insert rows into any table of
the forta database. He is not allowed to delete or update them.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span><span class="token punctuation">,</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> forta<span class="token punctuation">.</span><span class="token operator">*</span></span>
<span class="line"><span class="token keyword">TO</span> <span class="token string">'thomas'</span><span class="token variable">@'localhost'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="showing-users-grants" tabindex="-1"><a class="header-anchor" href="#showing-users-grants"><span>Showing users grants</span></a></h3>
<p>In order to view your privileges you can run the following query:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> grants<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You can also request the grants of any other user (if you have the permission to
do this).</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token string">'root'</span><span class="token variable">@'localhost'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="revoking-rights-of-a-user" tabindex="-1"><a class="header-anchor" href="#revoking-rights-of-a-user"><span>Revoking rights of a user</span></a></h2>
<p>When needed you can also remove permissions from user by revoking grants.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">REVOKE</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> forta<span class="token punctuation">.</span>products</span>
<span class="line"><span class="token keyword">FROM</span> <span class="token string">'thomas'</span><span class="token variable">@'localhost'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This will remove the <code v-pre>UPDATE</code> grant for thomas connecting from localhost.</p>
<h2 id="logging-in" tabindex="-1"><a class="header-anchor" href="#logging-in"><span>Logging in</span></a></h2>
<p>We can now connect to the database using the credentials of the new user</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">mysql -u username -p -h 10.177.33.192;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>-p</code> specifies that the user requires a password to be filled in</li>
<li><code v-pre>-h</code> specifies that the user wants to access a database on another host</li>
<li><code v-pre>10.177.33.192</code> is the IP address of the machine with the database</li>
</ul>
</div></template>


