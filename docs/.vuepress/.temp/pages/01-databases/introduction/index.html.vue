<template><div><h1 id="databases-introduction" tabindex="-1"><a class="header-anchor" href="#databases-introduction"><span>Databases Introduction</span></a></h1>
<h2 id="what-is-a-database" tabindex="-1"><a class="header-anchor" href="#what-is-a-database"><span>What is a database?</span></a></h2>
<p>The word database is used in many ways. For our purpose we will use the following definition:</p>
<blockquote>
<p>A database is a collection of data stored in some organized fashion.</p>
</blockquote>
<p>You can think of a database as some kind of cabinet. It is simply a physical location to store data, regardless of what data is or how it is stored.</p>
<h3 id="database-management-system-dbms" tabindex="-1"><a class="header-anchor" href="#database-management-system-dbms"><span>DataBase Management System - DBMS</span></a></h3>
<p>The term <code v-pre>database</code> does not refer to the database software that is used. This might create much confusion if not used correctly. The <em>database software</em> is called the Database Management System or DBMS.</p>
<p>The database is the container that is created and can be manipulated using the DBMS. MySQL in this case is a DBMS system, not the physical database.</p>
<p>A database might be a file on a hard drive, but it could also be stored completely in memory. It is not even significant as you never access a database directly anyway. You always use the DBMS that accesses the database for you.</p>
<p><img src="@source/01-databases/introduction/img/dbms.png" alt="Database vs DBMS"></p>
<p>Figure 1: Database and DBMS</p>
<h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables"><span>Tables</span></a></h2>
<p>When storing information in a filing cabinet, you don’t just toss it in a drawer. You create files within the cabinet. You file related data in specific files.</p>
<p>In the database world, the file is called a table. A table is a <em>structured file</em> that can store data of a specific type. A table may contain a list of customers, a product catalog or any other list of information.</p>
<p><img src="@source/01-databases/introduction/img/ficherosclasicoscatalogo.jpg" alt="Filing cabinet"></p>
<p>Figure 2: Filing cabinet</p>
<p>When using tables in a database, there are some rules that the tables need to apply to. Tables that do not fit the following description cannot be stored inside a database, and need to be reorganized.</p>
<ul>
<li>Rows contain data about an entity</li>
<li>Columns contain data about the attributes of that entity</li>
<li>All entries in a column are of the same kind</li>
<li>Each column has a unique name</li>
<li>Cells of a table hold a single value</li>
<li>Order of columns is not important</li>
<li>Order of rows is not important</li>
<li>No two rows may be identical</li>
</ul>
<p>The key is that data stored in a table is of <em>one type</em> of data or a list. You should never store a list of customers and a list of orders in the same database table. Technically it is possible, but it would make retrieving information and access very difficult. A better solution is to create two tables for each list.</p>
<p>Every table in a database has a name that identifies it. The name is always unique for a given database.</p>
<p><strong>Customers table</strong>:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Address</th>
<th>City</th>
<th>State</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Table 1: An example Customers table</p>
<h3 id="schema-s" tabindex="-1"><a class="header-anchor" href="#schema-s"><span>Schema's</span></a></h3>
<blockquote>
<p>Rows contain data about an entity
Columns contain data about the attributes of that entity</p>
</blockquote>
<p>Tables have characteristics and properties that define how data is stored in them. This includes information about what data may be stored, how it is broken up, how individual pieces of information are named and much more… The set of information that describes a table is known as a schema. Schemas are used to describe specific tables within a database, as well as entire relationships between tables in them.</p>
<h3 id="columns-and-datatypes" tabindex="-1"><a class="header-anchor" href="#columns-and-datatypes"><span>Columns and datatypes</span></a></h3>
<blockquote>
<p>All entries in a column are of the same kind</p>
</blockquote>
<p>Tables are made up of columns. Columns contain a particular piece of information within the table. You can envision database tables as grids (like spreadsheets). Each column on the grid contains a particular piece of information.</p>
<p>Each column in a database has an associated <strong>datatype</strong>. It defines what the type the data the column can contain.</p>
<p>Eg: Numeric, date, text, currency,…</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Datatypes are very important for a database. They restrict the type of data that can be stored in the column, preventing wrong information to be stored. It can also help sorting the data correctly and efficiently. They play an important role in optimizing disk usage.</p>
</div>
<h3 id="rows" tabindex="-1"><a class="header-anchor" href="#rows"><span>Rows</span></a></h3>
<p>Data in a table is stored in rows. Each record saved is stored in its own row.</p>
<p>Eg: A customer table might store one customer per row</p>
<p>The number of rows in the table is the number of records in it. <em>Record</em> and <em>row</em> are used interchangeably but row is technically the correct term.</p>
<h3 id="primary-keys" tabindex="-1"><a class="header-anchor" href="#primary-keys"><span>Primary keys</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">Rule</p>
<p>Rows may not be identical to eachother.</p>
</div>
<p>Every row in a table must have a column (or set of columns) that uniquely identifies it. These column or set of columns are called the primary key. The primary key is used to refer to a specific row.</p>
<p>Without a primary key updating or deleting specific rows in a table becomes extremely difficult. There is no guaranteed safe way to refer to just the rows to be affected.</p>
<div class="hint-container warning">
<p class="hint-container-title">Great advice</p>
<p>Always define primary keys!</p>
</div>
<p>Primary keys are not required, but defining them makes future data manipulation is possible and manageable.</p>
<p>Any column can be selected as the primary key as long as it meets the following conditions:</p>
<ol>
<li>No two rows can have the same primary key value (unique)</li>
<li>Every row must have a primary key value (NULL is not allowed)</li>
</ol>
<p>These rules are enforced by MySQL.</p>
<p>A primary key might consist of multiple columns. Then it is also called a composite key. When multiple columns are used, the same rules apply to all columns that make up the primary key. Individual columns do need not to have unique values, but the whole key combined must be unique.</p>
<h4 id="primary-key-best-practices" tabindex="-1"><a class="header-anchor" href="#primary-key-best-practices"><span>Primary key best practices</span></a></h4>
<p>In addition to the rules that MySQL enforces, there are some best practices when choosing a primary key</p>
<ul>
<li>Don't update values in primary key columns</li>
<li>Don't reuse values in primary key columns</li>
<li>Don't use values that might change in primary key columns</li>
</ul>
</div></template>


