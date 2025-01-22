import{_ as n,c as a,f as e,o as i}from"./app-B9lZb-up.js";const l={};function t(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="databases-data" tabindex="-1"><a class="header-anchor" href="#databases-data"><span>Databases Data</span></a></h1><p>Managing data follows the CRUD principles. The SQL languages provides keywords to implement these CRUD principles.</p><table><thead><tr><th>CRUD</th><th>Action</th><th>SQL statement</th></tr></thead><tbody><tr><td>C</td><td>Create</td><td><code>INSERT</code></td></tr><tr><td>R</td><td>Read</td><td><code>SELECT</code></td></tr><tr><td>U</td><td>Update</td><td><code>UPDATE</code></td></tr><tr><td>D</td><td>Delete</td><td><code>DELETE</code></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">ℹ️ Examples</p><p>The examples in this chapter are applied on the <code>forta</code> example database.</p></div><h2 id="reading-data" tabindex="-1"><a class="header-anchor" href="#reading-data"><span>Reading Data</span></a></h2><p>Reading or <em>selecting</em> data can be done using an <code>SELECT</code> statement. The <code>SELECT</code> statement is a very versatile statement, but only the basics are discussed here. The more advanced features will be discussed later.</p><p>The most simple <code>SELECT</code> statement looks like follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table_name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The <code>*</code> means that we want te select all columns from the table In the <code>FROM</code> clause we add the name of the table we want the data to be selected from.</p><p>An example:</p><p>The following query will produce the following result.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+---------+---------+----------------+------------+----------------------------------------------------------------+</span>
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
<span class="line">14 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-data" tabindex="-1"><a class="header-anchor" href="#creating-data"><span>Creating Data</span></a></h2><h3 id="inserting-a-single-complete-row" tabindex="-1"><a class="header-anchor" href="#inserting-a-single-complete-row"><span>Inserting a single complete row</span></a></h3><p>When inserting a complete row into the table, all fields must be specified in the order in which they appear in the table definition. All columns must be specified. If no value is available for a particular column, the <code>NULL</code> value can be used (If <code>NULL</code> is allowed by the table definition).</p><p>Notice that the first value for the <code>cust_id</code> is <code>NULL</code>. This is possible by the <code>AUTO_INCREMENT</code> attribute that is defined for this field.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> customers</span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token boolean">NULL</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;Pep E. LaPew&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;100 Main Street&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token string">&#39;Los Angeles&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;LA&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;90046&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;USA&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token boolean">NULL</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token boolean">NULL</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>No output is generated for these kind of queries. The client will tell the amount of affected rows. In this case it is only 1.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Query OK, 1 row affected (0.01 sec)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This way of inserting rows is not recommended. A clear knowledge of the table structure is required.</p><h3 id="inserting-a-single-partial-row" tabindex="-1"><a class="header-anchor" href="#inserting-a-single-partial-row"><span>Inserting a single partial row</span></a></h3><p>To insert a partial row, the column names must be stated explicitly. Columns that are not specified will get the <em>default</em> value. The default value is specified in the table definition.</p><p>Notice that <code>cust_id</code> is not specified. It won&#39;t receive a <code>NULL</code> value, because the <code>AUTO_INCREMENT</code>attribute is set for this field. It will use an value that is 1 larger than the last used <code>cust_id</code>.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> customers <span class="token punctuation">(</span></span>
<span class="line">    cust_name<span class="token punctuation">,</span></span>
<span class="line">    cust_address<span class="token punctuation">,</span></span>
<span class="line">    cust_city<span class="token punctuation">,</span></span>
<span class="line">    cust_state<span class="token punctuation">,</span></span>
<span class="line">    cust_zip<span class="token punctuation">,</span></span>
<span class="line">    cust_country</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&#39;Pep E. LaPew&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;100 Main Street&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token string">&#39;Los Angeles&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;LA&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;90046&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;USA&#39;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a safer way to insert data into an table. It is more verbose, but not all structure of the table must be known to safely insert any data. It is possible to change the order of fields (columns) independently from the table structure.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> customers <span class="token punctuation">(</span></span>
<span class="line">    cust_country<span class="token punctuation">,</span></span>
<span class="line">    cust_state<span class="token punctuation">,</span></span>
<span class="line">    cust_address<span class="token punctuation">,</span></span>
<span class="line">    cust_name<span class="token punctuation">,</span></span>
<span class="line">    cust_city<span class="token punctuation">,</span></span>
<span class="line">    cust_zip</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&#39;USA&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;LA&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;100 Main Street&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token string">&#39;Pep E. LaPew&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;Los Angeles&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;90046&#39;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inserting-multiple-rows" tabindex="-1"><a class="header-anchor" href="#inserting-multiple-rows"><span>Inserting multiple rows</span></a></h3><p>Multiple columns can be inserted at once by adding sets of values, each enclosed within parentheses and separated by commas.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> customers <span class="token punctuation">(</span></span>
<span class="line">    cust_name<span class="token punctuation">,</span></span>
<span class="line">    cust_address<span class="token punctuation">,</span></span>
<span class="line">    cust_city<span class="token punctuation">,</span></span>
<span class="line">    cust_state<span class="token punctuation">,</span></span>
<span class="line">    cust_zip<span class="token punctuation">,</span></span>
<span class="line">    cust_country</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&#39;Pep E. LaPew&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;100 Main Street&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token string">&#39;Los Angeles&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;LA&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;90046&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;USA&#39;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&#39;M. Martian&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;42 Galaxy Way&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token string">&#39;New York&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;NY&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;11213&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;USA&#39;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This way of inserting multiple rows improves the performance of the database. It is more efficient than separate INSERT statements.</p><h3 id="insert-the-result-of-a-query" tabindex="-1"><a class="header-anchor" href="#insert-the-result-of-a-query"><span>Insert the result of a query</span></a></h3><p>Instead of a <code>VALUES</code> clause, a <code>SELECT</code> clause can be used to insert data from existing data in other tables.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> customers <span class="token punctuation">(</span></span>
<span class="line">    cust_name<span class="token punctuation">,</span></span>
<span class="line">    cust_address<span class="token punctuation">,</span></span>
<span class="line">    cust_city<span class="token punctuation">,</span></span>
<span class="line">    cust_state<span class="token punctuation">,</span></span>
<span class="line">    cust_zip<span class="token punctuation">,</span></span>
<span class="line">    cust_country</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">SELECT</span> </span>
<span class="line">    cust_name<span class="token punctuation">,</span></span>
<span class="line">    cust_address<span class="token punctuation">,</span></span>
<span class="line">    cust_city<span class="token punctuation">,</span></span>
<span class="line">    cust_state<span class="token punctuation">,</span></span>
<span class="line">    cust_zip<span class="token punctuation">,</span></span>
<span class="line">    cust_country</span>
<span class="line"><span class="token keyword">FROM</span> custnew<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-data" tabindex="-1"><a class="header-anchor" href="#updating-data"><span>Updating data</span></a></h2><h3 id="updating-a-single-field" tabindex="-1"><a class="header-anchor" href="#updating-a-single-field"><span>Updating a single field</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">UPDATE</span> customers</span>
<span class="line"><span class="token keyword">SET</span> cust_email <span class="token operator">=</span> <span class="token string">&#39;elmer@fudd.com&#39;</span></span>
<span class="line"><span class="token keyword">WHERE</span> cust_id <span class="token operator">=</span> <span class="token number">10005</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">⚠️ Don&#39;t forget the <code>WHERE</code> clause !</p><p>If you omit the <code>WHERE</code> clause, all rows in the table will be updated. In most cases, this is not what you want to do.</p></div><h3 id="updating-multiple-fields" tabindex="-1"><a class="header-anchor" href="#updating-multiple-fields"><span>Updating multiple fields</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">UPDATE</span> customers</span>
<span class="line"><span class="token keyword">SET</span> cust_name <span class="token operator">=</span> <span class="token string">&#39;The Fudds&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    cust_email <span class="token operator">=</span> <span class="token string">&#39;elmer@fudd.com&#39;</span></span>
<span class="line"><span class="token keyword">WHERE</span> cust_id <span class="token operator">=</span> <span class="token number">10005</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deleting-a-value-from-a-row" tabindex="-1"><a class="header-anchor" href="#deleting-a-value-from-a-row"><span>Deleting a value from a row</span></a></h3><p>To delete an existing value, you can update it with the <code>NULL</code> value.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">UPDATE</span> customers</span>
<span class="line"><span class="token keyword">SET</span> cust_email <span class="token operator">=</span> <span class="token boolean">NULL</span></span>
<span class="line"><span class="token keyword">WHERE</span> cust_id <span class="token operator">=</span> <span class="token number">10005</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deleting-data" tabindex="-1"><a class="header-anchor" href="#deleting-data"><span>Deleting data</span></a></h2><p>To delete a row from a table the <code>DELETE</code> clause can be used. It can also be used to delete <em>all</em> rows by omitting the <code>WHERE</code> clause.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> customers</span>
<span class="line"><span class="token keyword">WHERE</span> cust_id <span class="token operator">=</span> <span class="token number">10006</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">⚠️ Don&#39;t forget the <code>WHERE</code> clause !</p><p>If you omit the <code>WHERE</code> clause, all rows in the table will be deleted. In most cases, this is not what you want to do.</p></div>`,47)]))}const d=n(l,[["render",t],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/03-data/","title":"Data","lang":"nl-BE","frontmatter":{"title":"Data"},"headers":[{"level":2,"title":"Reading Data","slug":"reading-data","link":"#reading-data","children":[]},{"level":2,"title":"Creating Data","slug":"creating-data","link":"#creating-data","children":[{"level":3,"title":"Inserting a single complete row","slug":"inserting-a-single-complete-row","link":"#inserting-a-single-complete-row","children":[]},{"level":3,"title":"Inserting a single partial row","slug":"inserting-a-single-partial-row","link":"#inserting-a-single-partial-row","children":[]},{"level":3,"title":"Inserting multiple rows","slug":"inserting-multiple-rows","link":"#inserting-multiple-rows","children":[]},{"level":3,"title":"Insert the result of a query","slug":"insert-the-result-of-a-query","link":"#insert-the-result-of-a-query","children":[]}]},{"level":2,"title":"Updating data","slug":"updating-data","link":"#updating-data","children":[{"level":3,"title":"Updating a single field","slug":"updating-a-single-field","link":"#updating-a-single-field","children":[]},{"level":3,"title":"Updating multiple fields","slug":"updating-multiple-fields","link":"#updating-multiple-fields","children":[]},{"level":3,"title":"Deleting a value from a row","slug":"deleting-a-value-from-a-row","link":"#deleting-a-value-from-a-row","children":[]}]},{"level":2,"title":"Deleting data","slug":"deleting-data","link":"#deleting-data","children":[]}],"git":{"updatedTime":1737539116000,"contributors":[{"name":"verwo","username":"verwo","email":"wouter_verstraete@hotmail.com","commits":1,"url":"https://github.com/verwo"}]},"filePathRelative":"03-data/index.md"}');export{d as comp,o as data};
