# MySQL datatypes

Datatypes define 'what' can be stored in a column. It also defines 'how' that data is stored.

Datatypes exist for several reasons:

* **Restriction**: Make sure you can only save data of a wanted typed in your database. This keeps your data valid and prevents mistakes.
* **Efficiency**: Different datatypes prioritize speed or storage, it depends on the requirements what type you should use for the best results.
* **Sorting orders**: numeric and text ordering uses different rules. Choosing the right datatype give you control of how to sort your data.

It is very important to choose the right type for your data. Bad decisions can cause really slow queries, or inefficient storage. Changing datatypes of existing populated columns is not a trivial task and should be avoided as much as possible.

MySQL makes use of three different types of datatypes:

* Text types
* Numeric types
* Date types

## Text types

| Type | Description | Maximum Length |
| --- | --- | --- |
| CHAR\(\) | Stores a string with a fixed length that is typed between the brackets | 255 characters |
| VARCHAR\(\) | Stores a string with a variable length, where the maximum length is given between the brackets | 255 characters |
| TINYTEXT | Stores a string, like a varchar\(255\) | 255 characters |
| TEXT | Stores a larger string | 65,535 characters |
| MEDIUMTEXT | Stores an even larger string | 16,777,215 characters |
| MEDIUMBLOB | Stores a BLOB \(Binary Large OBjects, can be a picture for example\) | 16,777,215 bytes |
| LONGTEXT | Stores a huge string | 4,294,967,295 characters |
| LONGBLOB | Stores a huge BLOB | 4,294,967,295 bytes |
| ENUM\(x,y,z,...\) | With this, you can make a list of the possible values | 65535 values |
| SET | Same as an ENUM but holds a lot less items, but you can store more than one choice | 64 values |

## Numeric Types

`size` represents the total number of digits displayed and `dec` represents the number of digits to the right of the decimal point.

| Type | Description | Signed Range | Unsigned Range |
| --- | --- | --- | --- |
| TINYINT\(size\) | Very small integer | -128 to 127 | 0 to 255 |
| SMALLINT\(size\) | Small integer | -32,768 to 32,767 | 0 to 65,535 |
| MEDIUMINT\(size\) | Medium integer | -8,388,608 to 8,388,607 | 0 to 16,777,215 |
| INT\(size\) | Normal integer | -2,147,483,648 to 2,147,483,647 | 0 to 4,294,967,295 |
| BIGINT\(size\) | Extremely big integer | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | 0 to 18,446,744,073,709,551,615 |
| FLOAT\(size,dec\) | A small number with a floating decimal point. |  |  |
| DOUBLE\(size,dec\) | A large number with a floating decimal point. |  |  |
| DECIMAL\(size,d\) | A DOUBLE stored as a string, allowing for a fixed decimal point. |  |  |

## Date Types

| Type | Description | Format | Range |
| --- | --- | --- | --- |
| DATE | A date | YYYY-MM-DD | '1000-01-01' to '9999-12-31' |
| DATETIME | A date and time | YYYY-MM-DD HH:MI:SS | '1000-01-01 00:00:00' to '9999-12-31 23:59:59' |
| TIMESTAMP | A date and time that is stored as the number of seconds since the Unix epoch. This value also automatically updates to the current time when doing an INSERT or UPDATE | YYYY-MM-DD HH:MI:SS | '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC |
| TIME | A time | HH:MI:SS | '-838:59:59' to '838:59:59' |
| YEAR | A year | YYYY | '1901' to '2155' |

## Examples

This is an example for an ENUM and SET:

```sql
CREATE TABLE dogs(
   id int(5) NOT NULL AUTO_INCREMENT,
   name varchar(255) NOT NULL,
   chip_id int(5),
   gender enum('male', 'female'),
   coat_color set('black', 'white', 'brown', 'beige'),
   primary key(id)
);

INSERT INTO dogs(name, chip_id, gender, coat_color)
VALUES
('Toby', 7865, 'male', 'brown,beige'),
('Medoc', 8776, 'male', 'brown'),
('Luna', 7654, 'female', 'black,white'),
('Alien', 666, 'alien', 'green');
```

We just made a new table using an ENUM for the gender, and a SET for coat color. We use a set for that because a dog can have multiple colors. We also added a weird row with values that do not exist in the ENUM or SET.

```text
+----+------------+---------+--------+-------------+
| id | name       | chip_id | gender | coat_color  |
+----+------------+---------+--------+-------------+
|  1 | Beethoven  |    7865 | male   | brown,beige |
|  2 | Laika      |    8776 | female | brown       |
|  3 | Droopy     |    7654 | male   | black,white |
|  4 | Swami Bami |     666 |        |             |
+----+------------+---------+--------+-------------+
```

Here we see the result after doing a SELECT all on the table. You can see that there are multiple values for coat\_color. Also the gender and coat\_color for the 'Alien' dog are blank, the database defaults the value to '' when an non-existent value is inserted, a blank value will take its place.

## Storage Space vs Speed

There are two relevant metrics when dealing with data. Storage as measured in the number of bytes required to store the data and speed as measured in seconds required to retrieve data and perform calculations on that data. This becomes especially relevant on large data sets. Selecting the datatype will influence whether the data is optimized for reducing the storage needed, how fast the data can be retrieved or reduce the needed computation time.

### TINYINT vs BIGINT

The only difference between TINYINT and BIGINT is the number of bytes used to represent the values. A TINYINT only uses a single byte, while the BIGINT uses 8. If data can be represented in a single byte and BIGINT is used as data type this will lead to a colum which requires 8 times more storage than actually needed.

### CHAR vs VARCHAR

CHAR sets a fixed size for each value in the column, smaller values will be padded with trailing spaces. VARCHAR only stores the bits required to represent the value in the column. Therefore the required storage for VARCHAR is less than CHAR. However, retrieving a specific value in a CHAR column will be faster.

### Floating point vs DECIMAL

There are two representations of decimal numbers in computing. 

Fixed point or DECIMAL, which represents the digits and decimal point as a character. This requires a storage of 4 bits for each digit. Also, when performing calculations multiple rounds are needed to add, substract, multiply or divide these numbers.

Floating point representation, such as FLOAT and DOUBLE, has a fixed storage requirement of 32-bit and 64-bit respectively. Also floating point arithmetic can use specialized hardware, a Floating-Point Unit (FPU), which performs the common arithmetic operations very efficiently. The downside of floating point numbers is that it represents decimal numbers within a margin of error. DOUBLE as it uses more bits, reduces this accuracy error.

:::tip

There are two exceptions of floating point numbers which do not have an accuracy error. An integer represented in a floating number and a decimal number which is an addition of powers of two. For instance 0.5 is 2^-1 or 0.75 which is 2^-1 + 2^-2 can both be represented with their exact value in a floating point number.

:::

As a rule of thumb, floating point values are good for scientific calculations, but should not be used for financial/monetary values. For business oriented math, always use DECIMAL.

## More information

* [https://dev.mysql.com/doc/refman/5.7/en/data-types.html](https://dev.mysql.com/doc/refman/5.7/en/data-types.html)
* [http://www.brandonsavage.net/designing-databases-picking-the-right-data-types/](http://www.brandonsavage.net/designing-databases-picking-the-right-data-types/)
