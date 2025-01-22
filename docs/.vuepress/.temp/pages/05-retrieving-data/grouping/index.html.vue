<template><div><h1 id="grouping-data" tabindex="-1"><a class="header-anchor" href="#grouping-data"><span>Grouping data</span></a></h1>
<h2 id="creating-groups" tabindex="-1"><a class="header-anchor" href="#creating-groups"><span>Creating groups</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+-----------+</span>
<span class="line">| vend_id | num_prods |</span>
<span class="line">+---------+-----------+</span>
<span class="line">|    1001 |         3 |</span>
<span class="line">|    1002 |         2 |</span>
<span class="line">|    1003 |         7 |</span>
<span class="line">|    1005 |         2 |</span>
<span class="line">+---------+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filtering-groups-with-having" tabindex="-1"><a class="header-anchor" href="#filtering-groups-with-having"><span>Filtering groups with <code v-pre>HAVING</code></span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> orders</span>
<span class="line"><span class="token keyword">FROM</span> orders</span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> cust_id</span>
<span class="line"><span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+--------+</span>
<span class="line">| cust_id | orders |</span>
<span class="line">+---------+--------+</span>
<span class="line">|   10001 |      2 |</span>
<span class="line">+---------+--------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num_prods</span>
<span class="line"><span class="token keyword">FROM</span> products</span>
<span class="line"><span class="token keyword">WHERE</span> prod_price <span class="token operator">>=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id</span>
<span class="line"><span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+-----------+</span>
<span class="line">| vend_id | num_prods |</span>
<span class="line">+---------+-----------+</span>
<span class="line">|    1003 |         4 |</span>
<span class="line">|    1005 |         2 |</span>
<span class="line">+---------+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


