<template><div><h1 id="filtering-data" tabindex="-1"><a class="header-anchor" href="#filtering-data"><span>Filtering data</span></a></h1>
<p>In this chapter you can see examples that show you the different ways to filter data.</p>
<p>The following query will display <code v-pre>prod_name</code> (product names) from the <code v-pre>product</code> database, with a <code v-pre>LIMIT</code> of five. The word <code v-pre>LIMIT</code> ensures that only the first five elements are displayed.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+--------------+</span>
<span class="line">| prod_name    |</span>
<span class="line">+--------------+</span>
<span class="line">| .5 ton anvil |</span>
<span class="line">| 1 ton anvil  |</span>
<span class="line">| 2 ton anvil  |</span>
<span class="line">| Detonator    |</span>
<span class="line">| Bird seed    |</span>
<span class="line">+--------------+</span>
<span class="line">5 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This query doesn't differ much from the previous. The only difference can be found by the <code v-pre>LIMIT</code> part. This time the <code v-pre>LIMIT</code> displays only five elements, starting from the fifth element in the table.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">LIMIT</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+--------------+</span>
<span class="line">| prod_name    |</span>
<span class="line">+--------------+</span>
<span class="line">| Carrots      |</span>
<span class="line">| Fuses        |</span>
<span class="line">| JetPack 1000 |</span>
<span class="line">| JetPack 2000 |</span>
<span class="line">| Oil can      |</span>
<span class="line">+--------------+</span>
<span class="line">5 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maybe this will help you to understand LIMIT better:</p>
<p>LIMIT offset , count;</p>
<p>-&gt; The <code v-pre>offset</code> specifies the offset of the first row to return (rows start from 1, not 0).</p>
<p>-&gt; The <code v-pre>count</code> specifies the maximum number of rows to return.</p>
<p>Source: <a href="http://www.mysqltutorial.org/mysql-limit.aspx" target="_blank" rel="noopener noreferrer">http://www.mysqltutorial.org/mysql-limit.aspx</a></p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> products<span class="token punctuation">.</span>prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------------+</span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------------+</span>
<span class="line">| prod_name      |</span>
<span class="line">+----------------+</span>
<span class="line">| .5 ton anvil   |</span>
<span class="line">| 1 ton anvil    |</span>
<span class="line">| 2 ton anvil    |</span>
<span class="line">| Bird seed      |</span>
<span class="line">| Carrots        |</span>
<span class="line">| Detonator      |</span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_price<span class="token punctuation">,</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price<span class="token punctuation">,</span> prod_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+------------+----------------+</span>
<span class="line">| prod_id | prod_price | prod_name      |</span>
<span class="line">+---------+------------+----------------+</span>
<span class="line">| FC      |       2.50 | Carrots        |</span>
<span class="line">| TNT1    |       2.50 | TNT (1 stick)  |</span>
<span class="line">| FU1     |       3.42 | Fuses          |</span>
<span class="line">| SLING   |       4.49 | Sling          |</span>
<span class="line">| ANV01   |       5.99 | .5 ton anvil   |</span>
<span class="line">| OL1     |       8.99 | Oil can        |</span>
<span class="line">| ANV02   |       9.99 | 1 ton anvil    |</span>
<span class="line">| FB      |      10.00 | Bird seed      |</span>
<span class="line">| TNT2    |      10.00 | TNT (5 sticks) |</span>
<span class="line">| DTNTR   |      13.00 | Detonator      |</span>
<span class="line">| ANV03   |      14.99 | 2 ton anvil    |</span>
<span class="line">| JP1000  |      35.00 | JetPack 1000   |</span>
<span class="line">| SAFE    |      50.00 | Safe           |</span>
<span class="line">| JP2000  |      55.00 | JetPack 2000   |</span>
<span class="line">+---------+------------+----------------+</span>
<span class="line">14 rows in set (0.03 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_price<span class="token punctuation">,</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price <span class="token keyword">DESC</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+------------+----------------+</span>
<span class="line">| prod_id | prod_price | prod_name      |</span>
<span class="line">+---------+------------+----------------+</span>
<span class="line">| JP2000  |      55.00 | JetPack 2000   |</span>
<span class="line">| SAFE    |      50.00 | Safe           |</span>
<span class="line">| JP1000  |      35.00 | JetPack 1000   |</span>
<span class="line">| ANV03   |      14.99 | 2 ton anvil    |</span>
<span class="line">| DTNTR   |      13.00 | Detonator      |</span>
<span class="line">| TNT2    |      10.00 | TNT (5 sticks) |</span>
<span class="line">| FB      |      10.00 | Bird seed      |</span>
<span class="line">| ANV02   |       9.99 | 1 ton anvil    |</span>
<span class="line">| OL1     |       8.99 | Oil can        |</span>
<span class="line">| ANV01   |       5.99 | .5 ton anvil   |</span>
<span class="line">| SLING   |       4.49 | Sling          |</span>
<span class="line">| FU1     |       3.42 | Fuses          |</span>
<span class="line">| FC      |       2.50 | Carrots        |</span>
<span class="line">| TNT1    |       2.50 | TNT (1 stick)  |</span>
<span class="line">+---------+------------+----------------+</span>
<span class="line">14 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> prod_price<span class="token punctuation">,</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price <span class="token keyword">DESC</span><span class="token punctuation">,</span> prod_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+------------+----------------+</span>
<span class="line">| prod_id | prod_price | prod_name      |</span>
<span class="line">+---------+------------+----------------+</span>
<span class="line">| JP2000  |      55.00 | JetPack 2000   |</span>
<span class="line">| SAFE    |      50.00 | Safe           |</span>
<span class="line">| JP1000  |      35.00 | JetPack 1000   |</span>
<span class="line">| ANV03   |      14.99 | 2 ton anvil    |</span>
<span class="line">| DTNTR   |      13.00 | Detonator      |</span>
<span class="line">| FB      |      10.00 | Bird seed      |</span>
<span class="line">| TNT2    |      10.00 | TNT (5 sticks) |</span>
<span class="line">| ANV02   |       9.99 | 1 ton anvil    |</span>
<span class="line">| OL1     |       8.99 | Oil can        |</span>
<span class="line">| ANV01   |       5.99 | .5 ton anvil   |</span>
<span class="line">| SLING   |       4.49 | Sling          |</span>
<span class="line">| FU1     |       3.42 | Fuses          |</span>
<span class="line">| FC      |       2.50 | Carrots        |</span>
<span class="line">| TNT1    |       2.50 | TNT (1 stick)  |</span>
<span class="line">+---------+------------+----------------+</span>
<span class="line">14 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> prod_price <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+------------+</span>
<span class="line">| prod_price |</span>
<span class="line">+------------+</span>
<span class="line">|      55.00 |</span>
<span class="line">+------------+</span>
<span class="line">1 row in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">=</span> <span class="token number">2.50</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------------+------------+</span>
<span class="line">| prod_name     | prod_price |</span>
<span class="line">+---------------+------------+</span>
<span class="line">| Carrots       |       2.50 |</span>
<span class="line">| TNT (1 stick) |       2.50 |</span>
<span class="line">+---------------+------------+</span>
<span class="line">2 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_name <span class="token operator">=</span> <span class="token string">'fuses'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-----------+------------+</span>
<span class="line">| prod_name | prod_price |</span>
<span class="line">+-----------+------------+</span>
<span class="line">| Fuses     |       3.42 |</span>
<span class="line">+-----------+------------+</span>
<span class="line">1 row in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------------+------------+</span>
<span class="line">| prod_name      | prod_price |</span>
<span class="line">+----------------+------------+</span>
<span class="line">| .5 ton anvil   |       5.99 |</span>
<span class="line">| 1 ton anvil    |       9.99 |</span>
<span class="line">| Bird seed      |      10.00 |</span>
<span class="line">| Carrots        |       2.50 |</span>
<span class="line">| Fuses          |       3.42 |</span>
<span class="line">| Oil can        |       8.99 |</span>
<span class="line">| Sling          |       4.49 |</span>
<span class="line">| TNT (1 stick)  |       2.50 |</span>
<span class="line">| TNT (5 sticks) |      10.00 |</span>
<span class="line">+----------------+------------+</span>
<span class="line">9 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">&lt;></span> <span class="token number">1003</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+--------------+</span>
<span class="line">| vend_id | prod_name    |</span>
<span class="line">+---------+--------------+</span>
<span class="line">|    1001 | .5 ton anvil |</span>
<span class="line">|    1001 | 1 ton anvil  |</span>
<span class="line">|    1001 | 2 ton anvil  |</span>
<span class="line">|    1002 | Fuses        |</span>
<span class="line">|    1005 | JetPack 1000 |</span>
<span class="line">|    1005 | JetPack 2000 |</span>
<span class="line">|    1002 | Oil can      |</span>
<span class="line">+---------+--------------+</span>
<span class="line">7 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">!=</span> <span class="token number">1003</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+--------------+</span>
<span class="line">| vend_id | prod_name    |</span>
<span class="line">+---------+--------------+</span>
<span class="line">|    1001 | .5 ton anvil |</span>
<span class="line">|    1001 | 1 ton anvil  |</span>
<span class="line">|    1001 | 2 ton anvil  |</span>
<span class="line">|    1002 | Fuses        |</span>
<span class="line">|    1005 | JetPack 1000 |</span>
<span class="line">|    1005 | JetPack 2000 |</span>
<span class="line">|    1002 | Oil can      |</span>
<span class="line">+---------+--------------+</span>
<span class="line">7 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name<span class="token punctuation">,</span> prod_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">BETWEEN</span> <span class="token number">5</span> <span class="token operator">and</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------------+------------+</span>
<span class="line">| prod_name      | prod_price |</span>
<span class="line">+----------------+------------+</span>
<span class="line">| .5 ton anvil   |       5.99 |</span>
<span class="line">| 1 ton anvil    |       9.99 |</span>
<span class="line">| Bird seed      |      10.00 |</span>
<span class="line">| Oil can        |       8.99 |</span>
<span class="line">| TNT (5 sticks) |      10.00 |</span>
<span class="line">+----------------+------------+</span>
<span class="line">5 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_name</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Empty set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> cust_id</span>
<span class="line"><span class="token keyword">FROM</span> customers</span>
<span class="line"><span class="token keyword">WHERE</span> cust_email <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+</span>
<span class="line">| cust_id |</span>
<span class="line">+---------+</span>
<span class="line">|   10002 |</span>
<span class="line">|   10005 |</span>
<span class="line">+---------+</span>
<span class="line">2 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-data-filtering" tabindex="-1"><a class="header-anchor" href="#advanced-data-filtering"><span>Advanced Data Filtering</span></a></h2>
<ul>
<li><code v-pre>AND</code> operator</li>
<li><code v-pre>OR</code> operator</li>
<li><code v-pre>IN</code> operator</li>
<li><code v-pre>NOT</code> operator</li>
</ul>
<h2 id="wildcard-filtering" tabindex="-1"><a class="header-anchor" href="#wildcard-filtering"><span>Wildcard filtering</span></a></h2>
<p>When using a wildcard, you'll no longer be able to use <code v-pre>WHERE ... = ...</code>, instead of <code v-pre>=</code> use <code v-pre>LIKE</code>.</p>
<p>There are two types of wildcard:</p>
<ul>
<li><code v-pre>%</code> wildcard: represents zero, one, or multiple characters.</li>
<li><code v-pre>_</code> wildcard: represents a single character.</li>
</ul>
</div></template>


