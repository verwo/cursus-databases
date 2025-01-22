<template><div><h1 id="calculated-fields" tabindex="-1"><a class="header-anchor" href="#calculated-fields"><span>Calculated fields</span></a></h1>
<p>Cases:</p>
<ul>
<li>Merging multiple columns into a single column</li>
<li>Calculating new data based on existing data
<ul>
<li>eg: quantity * price = total price</li>
</ul>
</li>
</ul>
<h2 id="concatinating-fields" tabindex="-1"><a class="header-anchor" href="#concatinating-fields"><span>Concatinating fields</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> Concat<span class="token punctuation">(</span>vend_name<span class="token punctuation">,</span> <span class="token string">' ('</span><span class="token punctuation">,</span> vend_country<span class="token punctuation">,</span> <span class="token string">')'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">FROM</span> vendors</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using the function <strong>Concat()</strong> in this example results in: Concat(arg1 , 'String1' , arg2 , 'String2') with arg1 = vend_name , String1 = '(' , arg2 = vend_country , String2 = ')'</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+--------------------------------------------+</span>
<span class="line">| Concat(vend_name, ' (', vend_country, ')') |</span>
<span class="line">+--------------------------------------------+</span>
<span class="line">| ACME (USA)                                 |</span>
<span class="line">| Anvils R Us (USA)                          |</span>
<span class="line">| Furball Inc. (USA)                         |</span>
<span class="line">| Jet Set (England)                          |</span>
<span class="line">| Jouets Et Ours (France)                    |</span>
<span class="line">| LT Supplies (USA)                          |</span>
<span class="line">+--------------------------------------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases"><span>Aliases</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> Concat<span class="token punctuation">(</span>RTrim<span class="token punctuation">(</span>vend_name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">' ('</span><span class="token punctuation">,</span> RTrim<span class="token punctuation">(</span>vend_country<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">')'</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> vend_title</span>
<span class="line"><span class="token keyword">FROM</span> vendors</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using the <strong>AS 'someName'</strong> statement, you can display a sort of 'virtual column' with the name you've given within the statement</p>
<p>RTRIM() removes the trailing spaces of a string. (empty spaces)</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+-------------------------+</span>
<span class="line">| vend_title              |</span>
<span class="line">+-------------------------+</span>
<span class="line">| ACME (USA)              |</span>
<span class="line">| Anvils R Us (USA)       |</span>
<span class="line">| Furball Inc. (USA)      |</span>
<span class="line">| Jet Set (England)       |</span>
<span class="line">| Jouets Et Ours (France) |</span>
<span class="line">| LT Supplies (USA)       |</span>
<span class="line">+-------------------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mathematical-calculations" tabindex="-1"><a class="header-anchor" href="#mathematical-calculations"><span>Mathematical calculations</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> prod_id<span class="token punctuation">,</span> quantity<span class="token punctuation">,</span> item_price</span>
<span class="line"><span class="token keyword">FROM</span> orderitems</span>
<span class="line"><span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20005</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+----------+------------+</span>
<span class="line">| prod_id | quantity | item_price |</span>
<span class="line">+---------+----------+------------+</span>
<span class="line">| ANV01   |       10 |       5.99 |</span>
<span class="line">| ANV02   |        3 |       9.99 |</span>
<span class="line">| TNT2    |        5 |      10.00 |</span>
<span class="line">| FB      |        1 |      10.00 |</span>
<span class="line">+---------+----------+------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span>  prod_id<span class="token punctuation">,</span> quantity<span class="token punctuation">,</span> item_price<span class="token punctuation">,</span></span>
<span class="line">        quantity <span class="token operator">*</span> item_price <span class="token keyword">AS</span> expanded_price</span>
<span class="line"><span class="token keyword">FROM</span> orderitems</span>
<span class="line"><span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20005</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+----------+------------+----------------+</span>
<span class="line">| prod_id | quantity | item_price | expanded_price |</span>
<span class="line">+---------+----------+------------+----------------+</span>
<span class="line">| ANV01   |       10 |       5.99 |          59.90 |</span>
<span class="line">| ANV02   |        3 |       9.99 |          29.97 |</span>
<span class="line">| TNT2    |        5 |      10.00 |          50.00 |</span>
<span class="line">| FB      |        1 |      10.00 |          10.00 |</span>
<span class="line">+---------+----------+------------+----------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">Operator</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">+</td>
<td>Addition</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td>Subtraction</td>
</tr>
<tr>
<td style="text-align:center">*</td>
<td>Multiplication</td>
</tr>
<tr>
<td style="text-align:center">/</td>
<td>Division</td>
</tr>
</tbody>
</table>
<h2 id="filtering-on-calculated-fields" tabindex="-1"><a class="header-anchor" href="#filtering-on-calculated-fields"><span>Filtering on calculated fields</span></a></h2>
<p>It is not possible to filter on aliased fields using the <code v-pre>WHERE</code> clause. This is caused by the way SQL queries are executed. At the moment of evaluating the <code v-pre>WHERE</code> the column value may not be determined yet.</p>
<p>The following statement is illegal and will result in an error.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span>  quantity <span class="token operator">*</span> item_price <span class="token keyword">AS</span> expanded_price</span>
<span class="line"><span class="token keyword">FROM</span> orderitems</span>
<span class="line"><span class="token keyword">WHERE</span> expanded_price <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">ERROR 1054 (42S22): Unknown column 'expanded_price' in 'where clause'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>To solve this problem, the <code v-pre>HAVING</code> clause can be used. The <code v-pre>HAVING</code> clause will be discussed later, but makes it possible to filter on groups of data. Because groups are calculated after the <code v-pre>WHERE</code> conditions, all the information to filter is available when the <code v-pre>HAVING</code> clause is executed.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span>  quantity <span class="token operator">*</span> item_price <span class="token keyword">AS</span> expanded_price</span>
<span class="line"><span class="token keyword">FROM</span> orderitems</span>
<span class="line"><span class="token keyword">HAVING</span> expanded_price <span class="token operator">&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


