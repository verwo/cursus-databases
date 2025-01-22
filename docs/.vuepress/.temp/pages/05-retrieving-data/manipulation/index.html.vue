<template><div><h1 id="data-manipulation" tabindex="-1"><a class="header-anchor" href="#data-manipulation"><span>Data manipulation</span></a></h1>
<h2 id="text-manipulation-functions" tabindex="-1"><a class="header-anchor" href="#text-manipulation-functions"><span>Text manipulation functions</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> vend_name<span class="token punctuation">,</span> UPPER<span class="token punctuation">(</span>vend_name<span class="token punctuation">)</span> <span class="token keyword">AS</span> vend_name_upcase</span>
<span class="line"><span class="token keyword">FROM</span> vendors</span>
<span class="line"><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> vend_name<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+----------------+------------------+</span>
<span class="line">| vend_name      | vend_name_upcase |</span>
<span class="line">+----------------+------------------+</span>
<span class="line">| ACME           | ACME             |</span>
<span class="line">| Anvils R Us    | ANVILS R US      |</span>
<span class="line">| Furball Inc.   | FURBALL INC.     |</span>
<span class="line">| Jet Set        | JET SET          |</span>
<span class="line">| Jouets Et Ours | JOUETS ET OURS   |</span>
<span class="line">| LT Supplies    | LT SUPPLIES      |</span>
<span class="line">+----------------+------------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">Function</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Left()</td>
<td style="text-align:left">Returns characters from left of string.  <strong>Left('String' , int)</strong> with <strong>int</strong> the amount of left characters</td>
</tr>
<tr>
<td style="text-align:left">Length()</td>
<td style="text-align:left">Returns the length of a string</td>
</tr>
<tr>
<td style="text-align:left">Locate()</td>
<td style="text-align:left">Finds a substring within a string.    <strong>Locate('SubString', 'String')</strong> with SubString = the string you are searching for</td>
</tr>
<tr>
<td style="text-align:left">Lower()</td>
<td style="text-align:left">Converts string to lowercase</td>
</tr>
<tr>
<td style="text-align:left">LTrim()</td>
<td style="text-align:left">Trims white space from left of string</td>
</tr>
<tr>
<td style="text-align:left">Right()</td>
<td style="text-align:left">Returns chraracters from right of string. <strong>Right('String' , int)</strong> with <strong>int</strong> the amount of right characters</td>
</tr>
<tr>
<td style="text-align:left">RTrim()</td>
<td style="text-align:left">Trims white space from right of string</td>
</tr>
<tr>
<td style="text-align:left">Soundex()</td>
<td style="text-align:left">Returns a string's SOUNDEX value</td>
</tr>
<tr>
<td style="text-align:left">SubString()</td>
<td style="text-align:left">Returns characters from within a string. <strong>SubString('String', intStart, intLength)</strong> example: SubString('w3resource',4,3') returns 'eso'</td>
</tr>
<tr>
<td style="text-align:left">Upper</td>
<td style="text-align:left">Converts string to uppercase</td>
</tr>
</tbody>
</table>
<h2 id="date-and-time-manipulation-functions" tabindex="-1"><a class="header-anchor" href="#date-and-time-manipulation-functions"><span>Date and time manipulation functions</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">Function</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">AddDate()</td>
<td style="text-align:left">Add to a date (days, weeks, and so on)</td>
</tr>
<tr>
<td style="text-align:left">AddTime()</td>
<td style="text-align:left">Add to a time (hours, minutes, and so on)</td>
</tr>
<tr>
<td style="text-align:left">CurDate()</td>
<td style="text-align:left">Returns the current date</td>
</tr>
<tr>
<td style="text-align:left">CurTime()</td>
<td style="text-align:left">Returns the current time</td>
</tr>
<tr>
<td style="text-align:left">Date()</td>
<td style="text-align:left">Returns the date portion of a date time</td>
</tr>
<tr>
<td style="text-align:left">DateDiff()</td>
<td style="text-align:left">Calculates the difference between two dates</td>
</tr>
<tr>
<td style="text-align:left">Date_Add()</td>
<td style="text-align:left">Highly flexible date arithmetic function</td>
</tr>
<tr>
<td style="text-align:left">Date_Format()</td>
<td style="text-align:left">Returns a formatted date or time string</td>
</tr>
<tr>
<td style="text-align:left">Day()</td>
<td style="text-align:left">Returns the day portion of a date</td>
</tr>
<tr>
<td style="text-align:left">DayOfWeek()</td>
<td style="text-align:left">Returns the day of the week for a date</td>
</tr>
<tr>
<td style="text-align:left">Hour()</td>
<td style="text-align:left">Returns the hour portion of a time</td>
</tr>
<tr>
<td style="text-align:left">Minute()</td>
<td style="text-align:left">Returns the minute portion of a time</td>
</tr>
<tr>
<td style="text-align:left">Month()</td>
<td style="text-align:left">Returns the month portion of a date</td>
</tr>
<tr>
<td style="text-align:left">Now()</td>
<td style="text-align:left">Returns the current date and time</td>
</tr>
<tr>
<td style="text-align:left">Second()</td>
<td style="text-align:left">Returns the second portion of a time</td>
</tr>
<tr>
<td style="text-align:left">Time()</td>
<td style="text-align:left">Returns the time portion of a date time</td>
</tr>
<tr>
<td style="text-align:left">Year()</td>
<td style="text-align:left">Returns the year portion</td>
</tr>
</tbody>
</table>
<h3 id="select-by-date-example" tabindex="-1"><a class="header-anchor" href="#select-by-date-example"><span>Select by date example</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> order_num</span>
<span class="line"><span class="token keyword">FROM</span> orders</span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token keyword">Date</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">'2005-09-01'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+-----------+</span>
<span class="line">| cust_id | order_num |</span>
<span class="line">+---------+-----------+</span>
<span class="line">|   10001 |     20005 |</span>
<span class="line">+---------+-----------+</span>
<span class="line">1 row in set (0.01 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-between-two-dates-example" tabindex="-1"><a class="header-anchor" href="#select-between-two-dates-example"><span>Select between two dates example</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> order_num</span>
<span class="line"><span class="token keyword">FROM</span> orders</span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token keyword">Date</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">BETWEEN</span> <span class="token string">'2005-09-01'</span> <span class="token operator">AND</span> <span class="token string">'2005-09-30'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+-----------+</span>
<span class="line">| cust_id | order_num |</span>
<span class="line">+---------+-----------+</span>
<span class="line">|   10001 |     20005 |</span>
<span class="line">|   10003 |     20006 |</span>
<span class="line">|   10004 |     20007 |</span>
<span class="line">+---------+-----------+</span>
<span class="line">3 rows in set (0.00 sec)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternative, but better way to select for years or months.</p>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre><code><span class="line"><span class="token keyword">SELECT</span> cust_id<span class="token punctuation">,</span> order_num</span>
<span class="line"><span class="token keyword">FROM</span> orders</span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token keyword">Year</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2005</span> <span class="token operator">AND</span> <span class="token keyword">Month</span><span class="token punctuation">(</span>order_date<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">+---------+-----------+</span>
<span class="line">| cust_id | order_num |</span>
<span class="line">+---------+-----------+</span>
<span class="line">|   10001 |     20005 |</span>
<span class="line">|   10003 |     20006 |</span>
<span class="line">|   10004 |     20007 |</span>
<span class="line">+---------+-----------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="numeric-manipulation-functions" tabindex="-1"><a class="header-anchor" href="#numeric-manipulation-functions"><span>Numeric manipulation functions</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">Function</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Abs()</td>
<td style="text-align:left">Returns a nuber's absolute value</td>
</tr>
<tr>
<td style="text-align:left">Cos()</td>
<td style="text-align:left">Returns the trigonometric cosine of a specified angle</td>
</tr>
<tr>
<td style="text-align:left">Exp()</td>
<td style="text-align:left">Returns the exponential value of a specific number</td>
</tr>
<tr>
<td style="text-align:left">Mod()</td>
<td style="text-align:left">Returns the remainder of a division operation</td>
</tr>
<tr>
<td style="text-align:left">Pi()</td>
<td style="text-align:left">Returns the value of pi</td>
</tr>
<tr>
<td style="text-align:left">Rand()</td>
<td style="text-align:left">Returns a random number</td>
</tr>
<tr>
<td style="text-align:left">Sin()</td>
<td style="text-align:left">Retunrs the trigonometric sine of a specified angle</td>
</tr>
<tr>
<td style="text-align:left">Sqrt()</td>
<td style="text-align:left">Returns the square root of a specied number</td>
</tr>
<tr>
<td style="text-align:left">Tan()</td>
<td style="text-align:left">Returns the trigonometric tangent of a specified angle</td>
</tr>
</tbody>
</table>
</div></template>


