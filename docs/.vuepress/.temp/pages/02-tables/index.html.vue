<template><div><h1 id="database-tables" tabindex="-1"><a class="header-anchor" href="#database-tables"><span>Database Tables</span></a></h1>
<!-- introduction -->
<ul>
<li>Listing Tables</li>
<li>Inspecting Tables</li>
<li>Managing Tables</li>
</ul>
<p>MySQL provides some commands to inspect the existing databases, tables, and there structure (columns and properties of those columns).</p>
<p>The following features are just some of the available:</p>
<ul>
<li>Listing the available databases</li>
<li>Listing the tables from a specific database</li>
<li>Listing the columns and there properties from a specific table</li>
<li>...</li>
</ul>
<p>This can be used to explore the existing databases and getting to know what is available.</p>
<!-- use statement -->
<h2 id="listing-databases" tabindex="-1"><a class="header-anchor" href="#listing-databases"><span>Listing Databases</span></a></h2>
<p>In order to display all available databases:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="setting-the-default-database" tabindex="-1"><a class="header-anchor" href="#setting-the-default-database"><span>Setting The Default Database</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">USE</span> <span class="token punctuation">[</span>database_name<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This query sets <em>database_name</em> as its default database.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>To refer to a table, you have two choices:</p>
<p>A <code v-pre>fully qualified table</code> name consists of a database identifier and a table identifier:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> db_name<span class="token punctuation">.</span>tbl_name<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> db_name<span class="token punctuation">.</span>tbl_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>A table identifier by itself refers to a table in the default (current) database. If sampledb is the default database (set using the <code v-pre>USE</code> statement), the following statements are equivalent:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> member<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> sampledb<span class="token punctuation">.</span>member<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="listing-tables" tabindex="-1"><a class="header-anchor" href="#listing-tables"><span>Listing Tables</span></a></h2>
<p>The following query lists all tables in a database.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="inspecting-table-structure" tabindex="-1"><a class="header-anchor" href="#inspecting-table-structure"><span>Inspecting Table Structure</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">DESCRIBE</span> <span class="token punctuation">[</span>table_name<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This query describes all columns in a given table.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>It is possible to use the following shorthand notation.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">DESC</span> <span class="token punctuation">[</span>table_name<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> <span class="token punctuation">[</span>table_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The difference between DESCRIBE and SHOW COLUMNS is that with SHOW COLUMNS, you have more options, like showing columns from a specific DB and using LIKE to display a list of columns using wildcards. This is especially useful if you have a table with a lot of columns that have similar names or names that contain prefixes/suffixes. For example,</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> products <span class="token operator">LIKE</span> <span class="token string">'%prod%'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="managing-tables" tabindex="-1"><a class="header-anchor" href="#managing-tables"><span>Managing Tables</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">There is no Undo</p>
<p>Be very careful with the features and commands explained below. There is no undo functionality in a database. If something went wrong, if did not result in expected behavior, there is no way to get your data back. Always make sure to backup your data before making changes that you are not confident with.</p>
</div>
<h3 id="creating-tables" tabindex="-1"><a class="header-anchor" href="#creating-tables"><span>Creating Tables</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span>table_name<span class="token punctuation">]</span> <span class="token punctuation">(</span></span>
<span class="line">  column_name datatype<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The CREATE TABLE creates a new table with a given table_name. All columns are desrcribed with their name, datatype and optional attributes.</p>
<h3 id="updating-tables" tabindex="-1"><a class="header-anchor" href="#updating-tables"><span>Updating Tables</span></a></h3>
<h4 id="renaming-a-table" tabindex="-1"><a class="header-anchor" href="#renaming-a-table"><span>Renaming a Table</span></a></h4>
<p>In order to rename a table:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> websites</span>
<span class="line">  <span class="token keyword">RENAME</span> <span class="token keyword">TO</span> sites<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="add-a-new-column" tabindex="-1"><a class="header-anchor" href="#add-a-new-column"><span>Add a New Column</span></a></h4>
<p>Adding a column to a table:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> games</span>
<span class="line">  <span class="token keyword">ADD</span> <span class="token keyword">release</span> <span class="token keyword">datetime</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can add multiple columns in a single statement by chaining them with a <code v-pre>,</code>;</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> games</span>
<span class="line">  <span class="token keyword">ADD</span> <span class="token keyword">release</span> <span class="token keyword">datetime</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">ADD</span> early_access <span class="token keyword">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="renaming-columns" tabindex="-1"><a class="header-anchor" href="#renaming-columns"><span>Renaming Columns</span></a></h4>
<p>Renaming a column, beware not to change the column datatype, as long as data is present in the table.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name</span>
<span class="line">    CHANGE <span class="token keyword">COLUMN</span> old_col_name new_col_name same_data_type<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="changing-a-datatype" tabindex="-1"><a class="header-anchor" href="#changing-a-datatype"><span>Changing a Datatype</span></a></h4>
<p>Changing datatypes of a column should only be done when the table is empty, or if the new datatype is less restrictive than the current datatype.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> games</span>
<span class="line">  <span class="token keyword">MODIFY</span> <span class="token keyword">COLUMN</span> name <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="remove-existing-column" tabindex="-1"><a class="header-anchor" href="#remove-existing-column"><span>Remove Existing Column</span></a></h4>
<p>Beware of deleting columns in a table which contains data.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> games</span>
<span class="line">  <span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> <span class="token keyword">release</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deleting-tables" tabindex="-1"><a class="header-anchor" href="#deleting-tables"><span>Deleting Tables</span></a></h3>
<div class="hint-container caution">
<p class="hint-container-title">Waarschuwing</p>
<p>You wouldn't be the first to drop the production database rather than the test database.</p>
</div>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span>table_name<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="indexing" tabindex="-1"><a class="header-anchor" href="#indexing"><span>Indexing</span></a></h2>
<p>Database indexes improve the speed to retrieve data from tables, and they are invisible to users.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Indexes improve the speed of SELECT queries, but will slow down INSERT and UPDATE queries.</p>
</div>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> <span class="token punctuation">[</span>index_name<span class="token punctuation">]</span> <span class="token keyword">ON</span> <span class="token punctuation">[</span>table_name<span class="token punctuation">]</span> <span class="token punctuation">(</span> <span class="token punctuation">[</span>column1<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>column2<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This statement creates an index with a name using the columns as indicated in the list.</p>
<p>To show all available indexes in a table use:</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">INDEX</span> <span class="token keyword">FROM</span> <span class="token punctuation">[</span>table_name<span class="token punctuation">]</span>\G</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The <strong>\G</strong> format specifier will put everything in a vertical format. This will improve readability.</p>
</div></template>


