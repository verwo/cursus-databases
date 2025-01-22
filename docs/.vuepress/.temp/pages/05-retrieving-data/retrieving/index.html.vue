<template><div><h1 id="retrieving-data" tabindex="-1"><a class="header-anchor" href="#retrieving-data"><span>Retrieving data</span></a></h1>
<h2 id="selecting-a-column-from-a-table" tabindex="-1"><a class="header-anchor" href="#selecting-a-column-from-a-table"><span>Selecting a column from a table</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------------+</span>
<span class="line">| prod_name      |</span>
<span class="line">+----------------+</span>
<span class="line">| .5 ton anvil   |</span>
<span class="line">| 1 ton anvil    |</span>
<span class="line">| 2 ton anvil    |</span>
<span class="line">| Detonator      |</span>
<span class="line">| Bird seed      |</span>
<span class="line">| Carrots        |</span>
<span class="line">| Fuses          |</span>
<span class="line">| JetPack 1000   |</span>
<span class="line">| JetPack 2000   |</span>
<span class="line">| Oil can        |</span>
<span class="line">| Safe           |</span>
<span class="line">| Sling          |</span>
<span class="line">| TNT (1 stick)  |</span>
<span class="line">| TNT (5 sticks) |</span>
<span class="line">+----------------+</span>
<span class="line">14 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="selecting-multiple-columns-form-a-table" tabindex="-1"><a class="header-anchor" href="#selecting-multiple-columns-form-a-table"><span>Selecting multiple columns form a table</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_name<span class="token punctuation">,</span> prod_price <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+----------------+------------+</span>
<span class="line">| prod_id | prod_name      | prod_price |</span>
<span class="line">+---------+----------------+------------+</span>
<span class="line">| ANV01   | .5 ton anvil   |       5.99 |</span>
<span class="line">| ANV02   | 1 ton anvil    |       9.99 |</span>
<span class="line">| ANV03   | 2 ton anvil    |      14.99 |</span>
<span class="line">| DTNTR   | Detonator      |      13.00 |</span>
<span class="line">| FB      | Bird seed      |      10.00 |</span>
<span class="line">| FC      | Carrots        |       2.50 |</span>
<span class="line">| FU1     | Fuses          |       3.42 |</span>
<span class="line">| JP1000  | JetPack 1000   |      35.00 |</span>
<span class="line">| JP2000  | JetPack 2000   |      55.00 |</span>
<span class="line">| OL1     | Oil can        |       8.99 |</span>
<span class="line">| SAFE    | Safe           |      50.00 |</span>
<span class="line">| SLING   | Sling          |       4.49 |</span>
<span class="line">| TNT1    | TNT (1 stick)  |       2.50 |</span>
<span class="line">| TNT2    | TNT (5 sticks) |      10.00 |</span>
<span class="line">+---------+----------------+------------+</span>
<span class="line">14 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="selecting-all-columns-from-a-table" tabindex="-1"><a class="header-anchor" href="#selecting-all-columns-from-a-table"><span>Selecting all columns from a table</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+---------+----------------+------------+----------------------------------------------------------------+</span>
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
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filtering-duplicate-values" tabindex="-1"><a class="header-anchor" href="#filtering-duplicate-values"><span>Filtering duplicate values</span></a></h2>
<p>For example take the following query. The result is a single columns with the <code v-pre>vend_id</code>'s. Some id's are defined in multiple rows.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> vend_id <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+</span>
<span class="line">| vend_id |</span>
<span class="line">+---------+</span>
<span class="line">|    1001 |</span>
<span class="line">|    1001 |</span>
<span class="line">|    1001 |</span>
<span class="line">|    1002 |</span>
<span class="line">|    1002 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1005 |</span>
<span class="line">|    1005 |</span>
<span class="line">+---------+</span>
<span class="line">14 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you would like to have a list of all available id's, you are not interested in the duplicate values. With SQL, you can use the <code v-pre>DISTINCT</code> keyword to filter out the duplicate results.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> vend_id <span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+</span>
<span class="line">| vend_id |</span>
<span class="line">+---------+</span>
<span class="line">|    1001 |</span>
<span class="line">|    1002 |</span>
<span class="line">|    1003 |</span>
<span class="line">|    1005 |</span>
<span class="line">+---------+</span>
<span class="line">4 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


