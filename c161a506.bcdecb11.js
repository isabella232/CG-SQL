(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(2),i=t(6),r=(t(0),t(148)),s=["components"],l={id:"ch13",title:"Chapter 13: JSON Output",sidebar_label:"Chapter 13: JSON Output"},o={unversionedId:"ch13",id:"ch13",isDocsHomePage:!1,title:"Chapter 13: JSON Output",description:"\x3c!---",source:"@site/../CQL_Guide/ch13.md",slug:"/ch13",permalink:"/cql-guide/ch13",version:"current",lastUpdatedBy:"Rico Mariani",lastUpdatedAt:1637796763,sidebar_label:"Chapter 13: JSON Output",sidebar:"someSidebar",previous:{title:"Chapter 12: Testability Features",permalink:"/cql-guide/ch12"},next:{title:"Chapter 14: CQL Query Fragments",permalink:"/cql-guide/ch14"}},u=[],c={rightToc:u};function d(e){var n=e.components,t=Object(i.a)(e,s);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,'To help facilitate additional tools that might want to depend on CQL input files further down the toolchain CQL includes a JSON output format for SQL DDL as well as stored procedure information, including special information for a single-statement DML.  "Single-statement DML" refers to those stored procedures that that consist of a single ',Object(r.b)("inlineCode",{parentName:"p"},"insert"),", ",Object(r.b)("inlineCode",{parentName:"p"},"select"),", ",Object(r.b)("inlineCode",{parentName:"p"},"update"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"delete"),".   Even though such procedures are just one statement, good argument binding can create very powerful DML fragments that are re-usable.  Many CQL stored procedures are of this form (in practice maybe 95% are just one statement)."),Object(r.b)("p",null,"To use cql in this fashion, the sequence will be something like the below.  See Appendix 1 for command line details."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cql --in input.sql --rt json_schema --cg out.json\n")),Object(r.b)("p",null,"Below are some examples of the JSON output taken from a CQL test file.  Note that the JSON has free text inserted into it as part of the test output, that obviously doesn't appear in the final output but it is especially illustrative here.  This example illustrates almost all the possible JSON fragments."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n  "tables" : [\n\n')),Object(r.b)("p",null,"Each table appears fully formed in its own JSON hunk as below.  ",Object(r.b)("inlineCode",{parentName:"p"},"isAdded")," and ",Object(r.b)("inlineCode",{parentName:"p"},"isDeleted")," correspond to the presence of an ",Object(r.b)("inlineCode",{parentName:"p"},"@create")," or ",Object(r.b)("inlineCode",{parentName:"p"},"@delete")," annotation respectively."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n    CREATE TABLE Foo(\n      id INTEGER NOT NULL,\n      name TEXT\n    )\n\n    {\n      "name" : "Foo",\n      "temp" : 0,\n      "ifNotExists" : 0,\n      "withoutRowid" : 0,\n      "isAdded" : 0,\n      "isDeleted" : 0,\n      "columns" : [\n        {\n          "name" : "id",\n          "type" : "integer",\n          "isNotNull" : 1,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 0,\n          "isAutoIncrement" : 0\n        },\n        {\n          "name" : "name",\n          "type" : "text",\n          "isNotNull" : 0,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 0,\n          "isAutoIncrement" : 0\n        }\n      ],\n      "primaryKey" : [  ],\n      "foreignKeys" : [\n      ],\n      "uniqueKeys" : [\n      ],\n      "indices" : [ "region_0_index", "MyIndex", "MyOtherIndex" ]\n    },\n\n')),Object(r.b)("p",null,"Here we introduce a primary key and its JSON."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n    CREATE TABLE T2(\n      id INTEGER PRIMARY KEY\n    )\n\n    {\n      "name" : "T2",\n      "temp" : 0,\n      "ifNotExists" : 0,\n      "withoutRowid" : 0,\n      "isAdded" : 0,\n      "isDeleted" : 0,\n      "columns" : [\n        {\n         ...\n        }\n      ],\n      "primaryKey" : [ "id" ],\n      ...\n    },\n\n')),Object(r.b)("p",null,"General purpose column information is also present.  Again a fragment for brevity."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n    CREATE TABLE T3(\n      id INTEGER UNIQUE AUTOINCREMENT\n    )\n\n    {\n      "name" : "T3",\n       ...\n      "columns" : [\n        {\n          "name" : "id",\n          "type" : "integer",\n          "isNotNull" : 1,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 1,\n          "isAutoIncrement" : 1\n        }\n      ],\n     ...\n    },\n\n')),Object(r.b)("p",null,"Columns and tables can have flexible attributes which are used downstream."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n    @ATTRIBUTE(foo=bar)\n    CREATE TABLE T4(\n      @ATTRIBUTE(cool)\n      id INTEGER\n    )\n\n    {\n      "name" : "T4",\n      ...\n      "columns" : [\n        {\n          "name" : "id",\n          "attributes" : [\n            {\n              "name" : "cool",\n              "value" : 1\n            }\n          ],\n          "type" : "integer",\n           ...\n        }\n      ],\n      ...\n      "attributes" : [\n        {\n          "name" : "foo",\n          "value" : "bar"\n        }\n      ]\n    },\n\n\n')),Object(r.b)("p",null,"Here's an example with revision marks"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'    CREATE TABLE T8(\n      id INTEGER\n    ) @CREATE(1) @DELETE(3)\n\n    {\n      "name" : "T8",\n      "temp" : 0,\n      "ifNotExists" : 0,\n      "withoutRowid" : 0,\n      "isAdded" : 1,\n      "isDeleted" : 1,\n      "columns" : [\n        {\n          "name" : "id",\n          "type" : "integer",\n          ...\n        }\n      ],\n      ...\n    },\n\n')),Object(r.b)("p",null,"The usual constraints are also recorded.   This example has a unqiue key on a column and foreign keys.  Note that the unique key is reported the same as if it had been declared in a standalone fashion.  There is a lot of stuff in this table..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'    CREATE TABLE T10(\n      id1 INTEGER UNIQUE,\n      id2 INTEGER,\n      id3 INTEGER,\n      id4 INTEGER UNIQUE,\n      PRIMARY KEY (id1, id2),\n      FOREIGN KEY (id1, id2) REFERENCES T9 (id2, id1),\n      CONSTRAINT uk1 UNIQUE (id2, id3),\n      CONSTRAINT uk2 UNIQUE (id3, id4)\n    )\n\n    {\n      "name" : "T10",\n      ...\n      "columns" : [\n        {\n          "name" : "id1",\n          "type" : "integer",\n          "isNotNull" : 0,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 1,\n          "isAutoIncrement" : 0\n        },\n        {\n          "name" : "id2",\n          "type" : "integer",\n          "isNotNull" : 0,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 0,\n          "isAutoIncrement" : 0\n        },\n        {\n          "name" : "id3",\n          "type" : "integer",\n          "isNotNull" : 0,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 0,\n          "isAutoIncrement" : 0\n        },\n        {\n          "name" : "id4",\n          "type" : "integer",\n          "isNotNull" : 0,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 1,\n          "isAutoIncrement" : 0\n        }\n      ],\n      "primaryKey" : [ "id1", "id2" ],\n      "foreignKeys" : [\n        {\n          "columns" : [ "id1", "id2" ],\n          "referenceTable" : "T9",\n          "referenceColumns" : [ "id2", "id1" ],\n          "onUpdate" : "NO ACTION",\n          "onDelete" : "NO ACTION",\n          "isDeferred" : 0\n        }\n      ],\n      "uniqueKeys" : [\n        {\n          "name" : "id1_uk",\n          "columns" : [ "id1" ]\n        },\n        {\n          "name" : "id4_uk",\n          "columns" : [ "id4" ]\n        },\n        {\n          "name" : "uk1",\n          "columns" : [ "id2", "id3" ]\n        },\n        {\n          "name" : "uk2",\n          "columns" : [ "id3", "id4" ]\n        }\n      ]\n    },\n\n')),Object(r.b)("p",null,"Foreign keys can include the full set of actions.  Here are a couple of examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n    CREATE TABLE T11(\n      id1 INTEGER,\n      id2 INTEGER,\n      id3 INTEGER,\n      FOREIGN KEY (id1) REFERENCES T9 (id1) ON DELETE CASCADE,\n      FOREIGN KEY (id1) REFERENCES T9 (id1) ON UPDATE SET NULL\n    )\n\n    {\n      "name" : "T11",\n       ...\n      "columns" : [\n        {\n          "name" : "id1",\n          "type" : "integer",\n          ...\n        },\n        {\n          "name" : "id2",\n          "type" : "integer",\n           ...\n        },\n        {\n          "name" : "id3",\n          "type" : "integer",\n          ...\n        }\n      ],\n      "primaryKey" : [  ],\n      "foreignKeys" : [\n        {\n          "columns" : [ "id1" ],\n          "referenceTable" : "T9",\n          "referenceColumns" : [ "id1" ],\n          "onUpdate" : "NO ACTION",\n          "onDelete" : "CASCADE",\n          "isDeferred" : 0\n        },\n        {\n          "columns" : [ "id1" ],\n          "referenceTable" : "T9",\n          "referenceColumns" : [ "id1" ],\n          "onUpdate" : "SET NULL",\n          "onDelete" : "NO ACTION",\n          "isDeferred" : 0\n        }\n      ],\n      ...\n    },\n\n')),Object(r.b)("p",null,"Deferred FK actions can also be specified.  Note: per the SQLite documentation, the norm is immediate on everything except ",Object(r.b)("inlineCode",{parentName:"p"},"deferrable initially deferred"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n    CREATE TABLE T12(\n      id1 INTEGER,\n      id2 INTEGER,\n      id3 INTEGER,\n      FOREIGN KEY (id1) REFERENCES T9 (id1) ON DELETE SET DEFAULT\n       DEFERRABLE INITIALLY DEFERRED,\n      FOREIGN KEY (id2) REFERENCES T9 (id1) ON UPDATE NO ACTION\n    )\n\n    {\n      "name" : "T12",\n      ...\n      "columns" : [\n        {\n          "name" : "id1",\n          ...\n        },\n        {\n          "name" : "id2",\n          ...\n        },\n        {\n          "name" : "id3",\n           ...\n        }\n      ],\n      ...\n      "foreignKeys" : [\n        {\n          "columns" : [ "id1" ],\n          "referenceTable" : "T9",\n          "referenceColumns" : [ "id1" ],\n          "onUpdate" : "NO ACTION",\n          "onDelete" : "SET DEFAULT",\n          "isDeferred" : 1\n        },\n        {\n          "columns" : [ "id2" ],\n          "referenceTable" : "T9",\n          "referenceColumns" : [ "id1" ],\n          "onUpdate" : "NO ACTION",\n          "onDelete" : "NO ACTION",\n          "isDeferred" : 0\n        }\n      ],\n    ...\n    },\n\n')),Object(r.b)("p",null,"Just like unique keys, foreign keys on the columns are moved down as though they had been independently declared.  There are 3 foreign keys below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'    CREATE TABLE with_fk_on_columns(\n      id1 INTEGER NOT NULL REFERENCES T2 (id) ON UPDATE CASCADE\n        DEFERRABLE INITIALLY DEFERRED,\n      id2 INTEGER NOT NULL REFERENCES T10 (id4) ON DELETE CASCADE,\n      FOREIGN KEY (id1, id2) REFERENCES T10 (id3, id4)\n    )\n\n    {\n      "name" : "with_fk_on_columns",\n      "temp" : 0,\n      "ifNotExists" : 0,\n      "withoutRowid" : 0,\n      "isAdded" : 0,\n      "isDeleted" : 0,\n      "columns" : [\n        {\n          "name" : "id1",\n          "type" : "integer",\n          "isNotNull" : 1,\n           ...\n        },\n        {\n          "name" : "id2",\n          "type" : "integer",\n          "isNotNull" : 1,\n           ...\n        }\n      ],\n      "primaryKey" : [  ],\n      "foreignKeys" : [\n        {\n          "columns" : [ "id1" ],\n          "referenceTable" : "T2",\n          "referenceColumns" : [ "id" ],\n          "onUpdate" : "CASCADE",\n          "onDelete" : "NO ACTION",\n          "isDeferred" : 1\n        },\n        {\n          "columns" : [ "id2" ],\n          "referenceTable" : "T10",\n          "referenceColumns" : [ "id4" ],\n          "onUpdate" : "NO ACTION",\n          "onDelete" : "CASCADE",\n          "isDeferred" : 0\n        },\n        {\n          "columns" : [ "id1", "id2" ],\n          "referenceTable" : "T10",\n          "referenceColumns" : [ "id3", "id4" ],\n          "onUpdate" : "NO ACTION",\n          "onDelete" : "NO ACTION",\n          "isDeferred" : 0\n        }\n      ],\n      "uniqueKeys" : [\n      ]\n    }\n')),Object(r.b)("p",null,"Columns can be marked with ",Object(r.b)("inlineCode",{parentName:"p"},"@sensitive")," for privacy reasons.  This declaration flows to the column description as ",Object(r.b)("inlineCode",{parentName:"p"},"isSensitive"),".  For economy, ",Object(r.b)("inlineCode",{parentName:"p"},"isSenstive")," is only emitted when true."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'    CREATE TABLE radioactive(\n      id INTEGER NOT NULL,\n      danger TEXT @SENSITIVE\n    )\n\n   {\n      "name" : "radioactive",\n      "isTemp" : 0,\n      "ifNotExists" : 0,\n      "withoutRowid" : 0,\n      "isAdded" : 0,\n      "isDeleted" : 0,\n      "isRecreated": 0,\n      "columns" : [\n        {\n          "name" : "id",\n          "type" : "integer",\n          "isNotNull" : 1,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 0,\n          "isAutoIncrement" : 0\n        },\n        {\n          "name" : "danger",\n          "type" : "text",\n          "isNotNull" : 0,\n          "isSensitive" : 1,\n          "isAdded" : 0,\n          "isDeleted" : 0,\n          "isPrimaryKey" : 0,\n          "isUniqueKey" : 0,\n          "isAutoIncrement" : 0\n        }\n      ],\n      "primaryKey" : [  ],\n      "foreignKeys" : [\n      ],\n      "uniqueKeys" : [\n      ]\n    }\n  ],\n')),Object(r.b)("p",null,"The next major section is the views.  Each view includes its projection (that is the net columns it creates from the select clause) and its general statement information.  One example tells the story pretty clearly.  Views don't have arguments in any supported cases but the arguments are included for symmetry with the other forms.  Note: projection columns can be sensitive and will be so-marked if they are."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "views" : [\n\n    CREATE VIEW MyView AS\n    SELECT *\n      FROM Foo\n\n    {\n      "name" : "MyView",\n      "temp" : 0,\n      "projection" : [\n        {\n          "name" : "id",\n          "type" : "integer",\n          "isNotNull" : 1\n        },\n        {\n          "name" : "name",\n          "type" : "text",\n          "isNotNull" : 0\n        }\n      ],\n      "select" : "SELECT id, name FROM Foo",\n      "selectArgs" : [  ]\n    }\n  ],\n\n')),Object(r.b)("p",null,"Likewise indices contain the table and indexed columns.  This one example illustrates things fairly clearly."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "indices" : [\n\n    CREATE UNIQUE INDEX IF NOT EXISTS MyIndex ON Foo (name DESC, id ASC)\n\n    {\n      "name" : "MyIndex",\n      "table" : "Foo",\n      "isUnique" : 1,\n      "ifNotExists" : 1,\n      "columns" : [ "name", "id" ],\n      "sortOrders" : [ "desc", "asc" ]\n    }\n  ],\n')),Object(r.b)("p",null,'It\'s sometimes useful to include some top level attributes about your system in the JSON.  By convention all the attributes on any global variables\nwhose name ends in "database" (see example below) are emitted into the attributes section of the JSON.  This lets you easily contribute to this section\nfrom various schema fragments by providing "database" objects from each source. Any other globals are ignored.'),Object(r.b)("p",null,"NOTE: attributes are very flexible, even allowing nesting of arrays.  Attribute values can either be any literal, or a name, or an array of values, recursively."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n  @ATTRIBUTE(my_other_attribute=(\'any\', (\'tree\', \'of\'), \'values\'))\n  @ATTRIBUTE(dbname=\'fred.sql\')\n  @ATTRIBUTE(dbfile=\'cg_test_mlite_query.sql\')\n  DECLARE database OBJECT\n\n  "attributes" : [\n    {\n      "name" : "my_other_attribute",\n      "value" : ["any", ["tree", "of"], "values"]\n    },\n    {\n      "name" : "dbname",\n      "value" : "fred.sql"\n    },\n    {\n      "name" : "dbfile",\n      "value" : "cg_test_mlite_query.sql"\n    }\n  ],\n\n')),Object(r.b)("p",null,"The queries section corresponds to the stored procedures with a SELECT statement.  There is significant data provided about each one."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the name of the procedure"),Object(r.b)("li",{parentName:"ul"},"the number and type of arguments"),Object(r.b)("li",{parentName:"ul"},"the set of tables used anywhere in the query (for dependencies)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"this includes tables used within views that were used"))),Object(r.b)("li",{parentName:"ul"},"the query projection (aka the result shape of the select)"),Object(r.b)("li",{parentName:"ul"},"the full SQL statement and the arguments that should be bound to each ",Object(r.b)("inlineCode",{parentName:"li"},"?"))),Object(r.b)("p",null,"There are two examples below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "queries" : [\n\n\n    CREATE PROC a_query (pattern TEXT NOT NULL, reject TEXT)\n    BEGIN\n    SELECT id\n      FROM Foo\n      WHERE name LIKE pattern AND name <> reject;\n    END\n\n    {\n      "name" : "a_query",\n      "args" : [\n        {\n          "name" : "pattern",\n          "type" : "text",\n          "isNotNull" : 1\n        },\n        {\n          "name" : "reject",\n          "type" : "text",\n          "isNotNull" : 0\n        }\n      ],\n      "usesTables" : [ "Foo" ],\n      "projection" : [\n        {\n          "name" : "id",\n          "type" : "integer",\n          "isNotNull" : 1\n        }\n      ],\n      "statement" : "SELECT id FROM Foo WHERE name LIKE ? AND name <> ?",\n      "statementArgs" : [ "pattern", "reject" ],\n    },\n\n\n    CREATE PROC bigger_query (pattern TEXT NOT NULL, reject TEXT)\n    BEGIN\n    SELECT DISTINCT *\n      FROM Foo\n      WHERE name LIKE pattern AND name <> reject\n      GROUP BY name\n      HAVING name > reject\n      ORDER BY pattern\n      LIMIT 1\n      OFFSET 3;\n    END\n\n    {\n      "name" : "bigger_query",\n      "args" : [\n        {\n          "name" : "pattern",\n          "type" : "text",\n          "isNotNull" : 1\n        },\n        {\n          "name" : "reject",\n          "type" : "text",\n          "isNotNull" : 0\n        }\n      ],\n      "usesTables" : [ "Foo" ],\n      "projection" : [\n        {\n          "name" : "id",\n          "type" : "integer",\n          "isNotNull" : 1\n        },\n        {\n          "name" : "name",\n          "type" : "text",\n          "isNotNull" : 0\n        }\n      ],\n      "statement" : "SELECT DISTINCT id, name FROM Foo WHERE name LIKE ? AND\n          name <> ? GROUP BY name HAVING name > ? ORDER BY ?\n          LIMIT 1 OFFSET 3",\n      "statementArgs" : [ "pattern", "reject", "reject", "pattern" ],\n    },\n\n')),Object(r.b)("p",null,"The section on insert statements is very similar in shape.  Again the fields are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the name of the procedure"),Object(r.b)("li",{parentName:"ul"},"the arguments and argument types"),Object(r.b)("li",{parentName:"ul"},"the tables used by the insert statement (usually just the one but value expressions can be select statements so it can be more)"),Object(r.b)("li",{parentName:"ul"},"the table we are inserting into (certainly present in ",Object(r.b)("inlineCode",{parentName:"li"},"usesTables"),")"),Object(r.b)("li",{parentName:"ul"},"the overall statement and its arguments (easiest form to use)"),Object(r.b)("li",{parentName:"ul"},"the statement type (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"INSERT")," or ",Object(r.b)("inlineCode",{parentName:"li"},"INSERT OR REPLACE"),")"),Object(r.b)("li",{parentName:"ul"},"the inserted columns",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"present even if the ",Object(r.b)("inlineCode",{parentName:"li"},"insert into table values (...)")," form was used"))),Object(r.b)("li",{parentName:"ul"},"the array of value expressions and arguments, one for each value")),Object(r.b)("p",null,"Again, simple insert forms are readily recognized and complex forms are supported."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "inserts" : [\n\n    The statement ending at line 277\n\n    CREATE PROC insert_proc (id_ INTEGER NOT NULL, name_ TEXT)\n    BEGIN\n    INSERT OR REPLACE INTO Foo (id, name) VALUES (id_, name_);\n    END\n\n    {\n      "name" : "insert_proc",\n      "args" : [\n        {\n          "name" : "id_",\n          "type" : "integer",\n          "isNotNull" : 1\n        },\n        {\n          "name" : "name_",\n          "type" : "text",\n          "isNotNull" : 0\n        }\n      ],\n      "usesTables" : [ "Foo" ],\n      "table" : "Foo",\n      "statement" : "INSERT OR REPLACE INTO Foo (id, name) VALUES (?, ?)",\n      "statementArgs" : [ "id_", "name_" ],\n      "statementType" : "INSERT OR REPLACE",\n      "columns" : [ "id", "name" ],\n      "values" : [\n        {\n          "value" : "?",\n          "valueArgs" : [ "id_" ]\n        },\n        {\n          "value" : "?",\n          "valueArgs" : [ "name_" ]\n        }\n      ]\n    },\n\n')),Object(r.b)("p",null,"As another example, this fairly easy to write CQL transparently creates dummy values.  Great for use in testing.  The JSON shows the net insert created from the original source below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'\n    CREATE PROC dummy_insert_proc (seed_ INTEGER NOT NULL)\n    BEGIN\n    INSERT INTO Foo () VALUES () @DUMMY_SEED(seed_) @DUMMY_NULLABLES;\n    END\n\n    {\n      "name" : "dummy_insert_proc",\n      "args" : [\n        {\n          "name" : "seed_",\n          "type" : "integer",\n          "isNotNull" : 1\n        }\n      ],\n      "usesTables" : [ "Foo" ],\n      "table" : "Foo",\n      "statement" : "INSERT INTO Foo (id, name)\n            VALUES (?, printf(\'name_%d\', ?))",\n      "statementArgs" : [ "_seed_", "_seed_" ],\n      "statementType" : "INSERT",\n      "columns" : [ "id", "name" ],\n      "values" : [\n        {\n          "value" : "?",\n          "valueArgs" : [ "_seed_" ]\n        },\n        {\n          "value" : "printf(\'name_%d\', ?)",\n          "valueArgs" : [ "_seed_" ]\n        }\n      ]\n    }\n  ],\n\n')),Object(r.b)("p",null,"The above form can capture the simplest of the insert statements allowed in SQLite.  This is especially\ninteresting because the JSON above can cleanly capture each value and the only place where there might be\nreferences to the procedure arguments is in the ",Object(r.b)("inlineCode",{parentName:"p"},"valueArgs")," portion. There is simply no room for any other\nkind of variability.   As a result, it's actually possible to take this type of insert and potentially\nre-codegen it into an upsert or something else starting from the JSON.  This is isn't in general possible\nwith the other forms of insert.  More compilicated forms of insert go into a section called \"generalInesrts\"\nthis includes any other single insert statement such as these forms:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"insert from multiple value rows"),Object(r.b)("li",{parentName:"ul"},"insert from a select statement"),Object(r.b)("li",{parentName:"ul"},"insert using a ",Object(r.b)("inlineCode",{parentName:"li"},"WITH")," clause"),Object(r.b)("li",{parentName:"ul"},"insert using the upsert clause")),Object(r.b)("p",null,'The "generalInserts" section looks exactly like the "inserts" section except that it does not include "values".'),Object(r.b)("p",null,"Here's an example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "generalInserts" : [\n\n   CREATE PROC insert_compound ()\n    BEGIN\n    INSERT INTO T3(id) VALUES(1)\n    UNION ALL\n    SELECT 1 AS column1;\n    END\n\n    {\n      "name" : "insert_compound",\n      "definedInFile" : "cg_test_json_schema.sql",\n      "args" : [\n      ],\n      "insertTables" : [ "T3" ],\n      "usesTables" : [ "T3" ],\n      "table" : "T3",\n      "statement" : "INSERT INTO T3(id) VALUES(1) UNION ALL SELECT 1 AS column1",\n      "statementArgs" : [  ],\n      "statementType" : "INSERT",\n      "columns" : [ "id" ]\n    }\n    ...\n  ],\n')),Object(r.b)("p",null,"Update statements are handled very much like the others, but there are no statement fragments.  You get these pieces:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the name of the procedure and its arguments"),Object(r.b)("li",{parentName:"ul"},"dependency information"),Object(r.b)("li",{parentName:"ul"},"the statement text and its arguments")),Object(r.b)("p",null,"This is the minimum information needed to bind and run the statement.  Note that arguments can be in any part of the update."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "updates" : [\n\n    The statement ending at line 306\n\n    CREATE PROC update_proc (id_ INTEGER NOT NULL, name_ TEXT)\n    BEGIN\n    UPDATE Foo\n    SET name = name_\n      WHERE id = id_\n      ORDER BY name\n      LIMIT 1;\n    END\n\n    {\n      "name" : "update_proc",\n      "args" : [\n        {\n          "name" : "id_",\n          "type" : "integer",\n          "isNotNull" : 1\n        },\n        {\n          "name" : "name_",\n          "type" : "text",\n          "isNotNull" : 0\n        }\n      ],\n      "usesTables" : [ "Foo" ],\n      "table" : "Foo",\n      "statement" : "UPDATE Foo SET name = ?\n              WHERE id = ? ORDER BY name LIMIT 1",\n      "statementArgs" : [ "name_", "id_" ]\n    }\n  ],\n\n')),Object(r.b)("p",null,"The delete section looks exactly like the update section."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"procedure name and arguments"),Object(r.b)("li",{parentName:"ul"},"dependency information"),Object(r.b)("li",{parentName:"ul"},"statement and arguments")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "deletes" : [\n\n    The statement ending at line 297\n\n    CREATE PROC delete_proc (name_ TEXT)\n    BEGIN\n    DELETE FROM Foo WHERE name LIKE name_;\n    END\n\n    {\n      "name" : "delete_proc",\n      "args" : [\n        {\n          "name" : "name_",\n          "type" : "text",\n          "isNotNull" : 0\n        }\n      ],\n      "usesTables" : [ "Foo" ],\n      "table" : "Foo",\n      "statement" : "DELETE FROM Foo WHERE name LIKE ?",\n      "statementArgs" : [ "name_" ]\n    }\n  ],\n\n')),Object(r.b)("p",null,"And finally the section for procedures that were encountered that are not one of the simple prepared statement forms.  The principle reasons for being in this category are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the procedure has out arguments"),Object(r.b)("li",{parentName:"ul"},"the procedure uses something other than a single DML statement"),Object(r.b)("li",{parentName:"ul"},"the procedure has no projection (no result of any type)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'  "general" : [\n\n    CREATE PROC with_complex_args (OUT pattern TEXT NOT NULL, INOUT arg REAL)\n    BEGIN\n      SELECT 1 AS a;\n    END\n\n    {\n      "name" : "with_complex_args",\n      "args" : [\n        {\n          "name" : "pattern",\n          "type" : "text",\n          "isNotNull" : 1,\n          "binding" : "out"\n        },\n        {\n          "name" : "arg",\n          "type" : "real",\n          "isNotNull" : 0,\n          "binding" : "inout"\n        }\n      ],\n      "usesTables" : [  ],\n      "hasSelectResult" : 1,\n      "projection" : [\n        {\n          "name" : "a",\n          "type" : "integer",\n          "isNotNull" : 1\n        }\n      ],\n      "usesDatabase" : 1\n    },\n\n\n    CREATE PROC atypical_noreturn ()\n    BEGIN\n      DECLARE C CURSOR LIKE SELECT 1 AS A;\n    END\n\n    {\n      "name" : "atypical_noreturn",\n      "args" : [\n      ],\n      "usesTables" : [  ],\n      "usesDatabase" : 0\n    },\n\n\n    CREATE PROC typical_outresult ()\n    BEGIN\n      DECLARE C CURSOR LIKE SELECT 1 AS A;\n      FETCH C (A) FROM VALUES (7);\n      OUT C;\n    END\n\n    {\n      "name" : "typical_outresult",\n      "args" : [\n      ],\n      "usesTables" : [  ],\n      "hasOutResult" : 1,\n      "projection" : [\n        {\n          "name" : "A",\n          "type" : "integer",\n          "isNotNull" : 1\n        }\n      ],\n      "usesDatabase" : 0\n    },\n\n')),Object(r.b)("p",null,"Some additional properties not mentioned above that are worth noting:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"where ",Object(r.b)("inlineCode",{parentName:"li"},"usesTables")," appears there will also be more detailed information about how the tables were used",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"usesViews")," key will give you an array of the views that were used (these lead to more views/tables also included)"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"insertTables")," key will give you an array of the tables that were used as the target of an ",Object(r.b)("inlineCode",{parentName:"li"},"insert")," statement"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"updateTables")," key will give you an array of the tables that were used as the target of an ",Object(r.b)("inlineCode",{parentName:"li"},"update")," statement"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"deleteTables")," key will give you an array of the tables that were used as the target of an ",Object(r.b)("inlineCode",{parentName:"li"},"delete")," statement"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"fromTables")," key will give you an array of tables that were used the the ",Object(r.b)("inlineCode",{parentName:"li"},"from")," clause of a select or some other ",Object(r.b)("inlineCode",{parentName:"li"},"select"),"-ish context in which you only read from the table"))),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"usesProcedures")," key for a given proc has an array of the procedures it calls, this allows for complete dependency analysis if needed")),Object(r.b)("p",null,"NOTE: ",Object(r.b)("inlineCode",{parentName:"p"},"@ATTRIBUTE")," can be applied any number of times to the entities here, including the procedures (i.e. immediately before the ",Object(r.b)("inlineCode",{parentName:"p"},"CREATE PROCEDURE"),") .  Those attributes appear in the JSON in an optional ",Object(r.b)("inlineCode",{parentName:"p"},"attributes")," chunk.  Attributes are quite flexible (you can easily encode a lisp program in attributes if you were so inclined) so you can use them very effectively to annotate your CQL entities as needed for downstream tools."))}d.isMDXComponent=!0},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),c=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return t?i.a.createElement(b,l(l({ref:n},u),{},{components:t})):i.a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<r;u++)s[u]=t[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);