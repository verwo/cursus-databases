<template><div><h1 id="summarizing-data" tabindex="-1"><a class="header-anchor" href="#summarizing-data"><span>Summarizing data</span></a></h1>
<h2 id="using-aggregate-functions" tabindex="-1"><a class="header-anchor" href="#using-aggregate-functions"><span>Using aggregate functions</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">Function</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">AVG()</td>
<td style="text-align:left">Returns a column's average value</td>
</tr>
<tr>
<td style="text-align:left">COUNT()</td>
<td style="text-align:left">Returns the number of rows in a column</td>
</tr>
<tr>
<td style="text-align:left">MAX()</td>
<td style="text-align:left">Returns a column's highest value</td>
</tr>
<tr>
<td style="text-align:left">MIN()</td>
<td style="text-align:left">Returns a column's lowest value</td>
</tr>
<tr>
<td style="text-align:left">SUM()</td>
<td style="text-align:left">Returns the sum of a column's value</td>
</tr>
</tbody>
</table>
<h3 id="the-avg-function" tabindex="-1"><a class="header-anchor" href="#the-avg-function"><span>The AVG() function</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_price</span>
<span class="line"><span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-----------+</span>
<span class="line">| avg_price |</span>
<span class="line">+-----------+</span>
<span class="line">| 16.133571 |</span>
<span class="line">+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">=</span> <span class="token number">1003</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-----------+</span>
<span class="line">| avg_price |</span>
<span class="line">+-----------+</span>
<span class="line">| 13.212857 |</span>
<span class="line">+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-count-function" tabindex="-1"><a class="header-anchor" href="#the-count-function"><span>The COUNT() function</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_cust</span>
<span class="line"><span class="token keyword">FROM</span> customers<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------+</span>
<span class="line">| num_cust |</span>
<span class="line">+----------+</span>
<span class="line">|        5 |</span>
<span class="line">+----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>cust_email<span class="token punctuation">)</span> <span class="token keyword">AS</span> num_cust</span>
<span class="line"><span class="token keyword">FROM</span> customers<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------+</span>
<span class="line">| num_cust |</span>
<span class="line">+----------+</span>
<span class="line">|        3 |</span>
<span class="line">+----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-max-function" tabindex="-1"><a class="header-anchor" href="#the-max-function"><span>The MAX() function</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> max_price</span>
<span class="line"><span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-----------+</span>
<span class="line">| max_price |</span>
<span class="line">+-----------+</span>
<span class="line">|     55.00 |</span>
<span class="line">+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-min-function" tabindex="-1"><a class="header-anchor" href="#the-min-function"><span>The MIN() function</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> min_price</span>
<span class="line"><span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-----------+</span>
<span class="line">| min_price |</span>
<span class="line">+-----------+</span>
<span class="line">|      2.50 |</span>
<span class="line">+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-sum-function" tabindex="-1"><a class="header-anchor" href="#the-sum-function"><span>The SUM() function</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> items_ordered</span>
<span class="line"><span class="token keyword">FROM</span> orderitems</span>
<span class="line"><span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20005</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------------+</span>
<span class="line">| items_ordered |</span>
<span class="line">+---------------+</span>
<span class="line">|            19 |</span>
<span class="line">+---------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>item_price <span class="token operator">*</span> quantity<span class="token punctuation">)</span> <span class="token keyword">AS</span> total_price</span>
<span class="line"><span class="token keyword">FROM</span> orderitems</span>
<span class="line"><span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20005</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-------------+</span>
<span class="line">| total_price |</span>
<span class="line">+-------------+</span>
<span class="line">|      149.87 |</span>
<span class="line">+-------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aggregates-on-distinct-values" tabindex="-1"><a class="header-anchor" href="#aggregates-on-distinct-values"><span>Aggregates on distinct values</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> avg_price</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> vend_id <span class="token operator">=</span> <span class="token number">1003</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-----------+</span>
<span class="line">| avg_price |</span>
<span class="line">+-----------+</span>
<span class="line">| 15.998000 |</span>
<span class="line">+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="combining-aggregate-functions" tabindex="-1"><a class="header-anchor" href="#combining-aggregate-functions"><span>Combining aggregate functions</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_items<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">MIN</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> price_min<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">MAX</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> price_max<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">AVG</span><span class="token punctuation">(</span>prod_price<span class="token punctuation">)</span> <span class="token keyword">AS</span> price_avg</span>
<span class="line"><span class="token keyword">FROM</span> products<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-----------+-----------+-----------+-----------+</span>
<span class="line">| num_items | price_min | price_max | price_avg |</span>
<span class="line">+-----------+-----------+-----------+-----------+</span>
<span class="line">|        14 |      2.50 |     55.00 | 16.133571 |</span>
<span class="line">+-----------+-----------+-----------+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


