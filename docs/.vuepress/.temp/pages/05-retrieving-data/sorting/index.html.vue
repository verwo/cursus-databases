<template><div><h1 id="sorting-retreived-data" tabindex="-1"><a class="header-anchor" href="#sorting-retreived-data"><span>Sorting retreived data</span></a></h1>
<p>When receiving a lot of data from the database, It can be hard to find what you need. For example, when you want a list of all employees with their name. You will get list of the names in a random order. Or so it seems, they are actually sorted by their primary key number. You can solve this with the <code v-pre>ORDER BY</code> statement.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> surname <span class="token keyword">FROM</span> employees <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Now the results will be returned in alphabetical order. (When placing <code v-pre>ORDER BY BINARY</code>, you can force the sorting to be case-sensitive)</p>
<h2 id="ascending-and-descending" tabindex="-1"><a class="header-anchor" href="#ascending-and-descending"><span>Ascending and Descending</span></a></h2>
<p>You can change if the results will be displayed from A to Z or the other way around. When choosing <code v-pre>ASC</code> it will go from A to Z for data with letters. And for numbers it will go from 0 to the highest number there is. <code v-pre>DESC</code> does the complete opposite. <strong>When you do not state any of these two, it will default to ascending.</strong></p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> email <span class="token keyword">FROM</span> employees <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> name <span class="token keyword">DESC</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="multiple-sorting-statements" tabindex="-1"><a class="header-anchor" href="#multiple-sorting-statements"><span>Multiple sorting statements</span></a></h2>
<p>When sorting data, the chances are high that you will have the same value for something. For example, you want to sort the names of your employees in alphabetical order but you also want to sort by gender (first Male, than Female).</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> gender <span class="token keyword">FROM</span> employees <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> gender <span class="token keyword">DESC</span><span class="token punctuation">,</span> name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The result should look something like this:</p>
<table>
<thead>
<tr>
<th>name</th>
<th>gender</th>
</tr>
</thead>
<tbody>
<tr>
<td>John</td>
<td>Male</td>
</tr>
<tr>
<td>Sam</td>
<td>Male</td>
</tr>
<tr>
<td>Steven</td>
<td>Male</td>
</tr>
<tr>
<td>Tom</td>
<td>Male</td>
</tr>
<tr>
<td>Anna</td>
<td>Female</td>
</tr>
<tr>
<td>Ellen</td>
<td>Female</td>
</tr>
<tr>
<td>Lucy</td>
<td>Female</td>
</tr>
<tr>
<td>Mary</td>
<td>Female</td>
</tr>
</tbody>
</table>
<p>As you can see, first the men and then women will be shown alphabetically. When you take a look at the query you can see I placed <code v-pre>DESC</code> behind gender. I did this because the 'F' from female comes earlier then the 'M' from male in the alphabet. This shows you that you can decide how to sort any table.</p>
</div></template>


