(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(150)),s=["components"],i={slug:"shared-fragments-intro",title:"Introducing Shared Fragments",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},l={permalink:"/blog/shared-fragments-intro",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2021-12-14-shared-fragments.md",source:"@site/blog/2021-12-14-shared-fragments.md",description:"Shared fragments are a real game-changer for CQL.",date:"2021-12-14T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],title:"Introducing Shared Fragments",readingTime:7.875,truncated:!1,nextItem:{title:"Introducing @RC builtin variable",permalink:"/blog/result-variable"}},c=[{value:"Generics",id:"generics",children:[]},{value:"Conditionals",id:"conditionals",children:[]},{value:"Validation",id:"validation",children:[]}],u={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,s);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Shared fragments are a real game-changer for CQL."),Object(o.b)("p",null,"Remember, these are designed to let you write part of a query and then substitute in parameters.  So it's like a parameterized view in normal SQL terms.  But actually it's more power than that, fragments also provide features that are more like Java generics.  Let's do some examples."),Object(o.b)("p",null,"Suppose we have a procedure which looks something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC get_stuff(to_include_ text, to_exclude_ text)\nBEGIN\n  WITH\n  to_exclude_recursive_query (tok, rest) AS (\n    SELECT\n      '',\n      to_exclude_ || ','\n    UNION ALL\n    SELECT\n      substr(rest, 1, instr(rest, ',') - 1),\n      substr(rest, instr(rest, ',') + 1)\n    FROM to_exclude_recursive_query\n    WHERE rest <> ''\n  ),\n  to_exclude (id) AS (\n    SELECT CAST(tok AS LONG)\n    FROM to_exclude_recursive_query\n    WHERE tok <> ''\n  )\n  to_include_recursive_query (tok, rest) AS (\n    SELECT\n      '',\n      to_include_ || ','\n    UNION ALL\n    SELECT\n      substr(rest, 1, instr(rest, ',') - 1),\n      substr(rest, instr(rest, ',') + 1)\n    FROM to_include_recursive_query\n    WHERE rest <> ''\n  ),\n  to_include (id) AS (\n    SELECT CAST(tok AS LONG)\n    FROM to_include_recursive_query\n    WHERE tok <> ''\n  )\n  SELECT * from stuff S\n  WHERE\n    S.id in (select * from to_include) AND\n    S.id not in (select * from to_exclude);\nEND;\n")),Object(o.b)("p",null,"With shared fragments you could write something like this"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"-- this could be moved somewhere shared, it's totally generic\n@attribute(cql:shared_fragment)\nCREATE PROC split_commas(str text)\nBEGIN\n  WITH splitter(tok, rest) AS (\n    SELECT '', IFNULL(str || ',', '')\n    UNION ALL\n    SELECT\n      substr(rest, 1, instr(rest, ',') - 1),\n      substr(rest, instr(rest, ',') + 1)\n    FROM splitter\n    WHERE rest <> '')\n  select tok from splitter where tok <> '';\nEND;\n\n-- this could be moved somewhere shared, it's totally generic\n@attribute(cql:shared_fragment)\nCREATE PROC ids_from_string(str text)\nBEGIN\n  WITH toks(tok) AS (CALL split_commas(str))\n  SELECT CAST(tok AS LONG) AS id from toks;\nEND;\n")),Object(o.b)("p",null,'We now have a shared fragment called "split_commas" which can be anywhere like maybe in a standard include file.  There are some immediate benefits:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the fragment is compiled on its own before usage so any errors are reported in the fragment",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"with macros you get errors when you try to use the macro and they are all charged to the line the macro appears on so it's hopeless figuring out what's wrong"))),Object(o.b)("li",{parentName:"ul"},"the text of the shared fragment will be the same, so it can be re-used in all locations, this can be a big binary size savings",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"macros are pre-processed before CQL ever sees the text so it doesn't \"know\" it's the same code"))),Object(o.b)("li",{parentName:"ul"},"fragments compose cleanly as we'll see; and they have typed arguments"),Object(o.b)("li",{parentName:"ul"},"fragments can be independently tested outside of the context in which they appear",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"make a test context and explore the fragment, no worries about it breaking on edge cases later")))),Object(o.b)("p",null,"The first fragment called ",Object(o.b)("inlineCode",{parentName:"p"},"split_commas")," does exactly what it sounds like, it takes a string argument and makes a list of the strings in it."),Object(o.b)("p",null,"The second fragment uses the first to split a string and then it converts all the strings to long integers."),Object(o.b)("p",null,"Now insted of the above we could write:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"#include <stringsplit.sql> /* whereever you put the fragments */\n\nCREATE PROC get_stuff(to_include_ text, to_exclude_ text)\nBEGIN\n  WITH\n    to_include(id) AS (CALL ids_from_string(to_include_)),\n    to_exclude(id) AS (CALL ids_from_string(to_exclude_))\n  SELECT * from stuff S\n  WHERE\n    S.id in (select * from to_include) AND\n    S.id not in (select * from to_exclude);\nEND;\n")),Object(o.b)("p",null,"And of course since ",Object(o.b)("inlineCode",{parentName:"p"},"ids_from_string")," is somewhere shared (",Object(o.b)("inlineCode",{parentName:"p"},"stringsplit.sql"),") so these fragments can be used\nall over you code and you'll only pay for the text one time.  This gives you great flexibility, very much\nlike parameterized views. You can have any number of these fragments, they will share code, they compose like crazy\nand there is no schema cost!"),Object(o.b)("h3",{id:"generics"},"Generics"),Object(o.b)("p",null,"A series of useful fragments for generating data would go a long way but there are other applications\nof fragments and you might what to operate on various data sources without hard coding them all.  This is\nwhere the generic form of fragments comes in. Consider a case where you want to be able to filter ",Object(o.b)("inlineCode",{parentName:"p"},"stuff"),"\nby say name and age.  You could create this fragment:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC filter_stuff(pattern_ text not null, min_age_ integer not null, max_age_ integer not null)\nBEGIN\n  WITH\n    source(*) LIKE stuff\n  SELECT * from source S\n  WHERE\n    S.name LIKE pattern_ AND\n    S.age BETWEEN min_age_ and max_age_;\nEND;\n")),Object(o.b)("p",null,"Now imagine that we had added the shared fragment annotation to ",Object(o.b)("inlineCode",{parentName:"p"},"get_stuff")," (just like the above)\nwe could then write"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC the_right_stuff(to_include_ text, to_exclude_ text, pattern_ text not null, min_age_ integer not null, max_age_ integer not null)\nBEGIN\n  WITH\n    get_stuff(*) AS (call get_stuff(to_include_, to_exclude_)),\n    filter_stuff(*) AS (call filter_stuff(pattern_, min_age_, max_age_) using get_stuff as source)\n  SELECT * from filter_stuff S\n  ORDER BY name\n  LIMIT 5;\nEND;\n")),Object(o.b)("p",null,"Or with some sugar to forward arguments and assume the CTE name matches, more economically"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC the_right_stuff(to_include_ text, to_exclude_ text, pattern_ text not null, min_age_ integer not null, max_age_ integer not null)\nBEGIN\n  WITH\n    (call get_stuff(*)),\n    (call filter_stuff(*) using get_stuff as source)\n  SELECT * from filter_stuff S\n  ORDER BY name\n  LIMIT 5;\nEND;\n")),Object(o.b)("p",null,"The arg syntax ",Object(o.b)("inlineCode",{parentName:"p"},"(*)")," simply indicates that the arg names in the caller should match to the same names in the callee.  In\ngeneral ",Object(o.b)("inlineCode",{parentName:"p"},"call foo(*)")," expands to ",Object(o.b)("inlineCode",{parentName:"p"},"call foo(from arguments like foo arguments)"),".  ",Object(o.b)("inlineCode",{parentName:"p"},"*")," is rather more economical than that."),Object(o.b)("p",null,"In this example ",Object(o.b)("inlineCode",{parentName:"p"},"filter_stuff")," doesn't know where its data will be coming from, you bind its table parameter ",Object(o.b)("inlineCode",{parentName:"p"},"source"),"\nto a compatible data source of your choice. For example, this would also be legal:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROC almost_the_right_stuff(pattern_ text not null, min_age_ integer not null, max_age_ integer not null)\nBEGIN\n  WITH\n    (call filter_stuff(*) using stuff as source)\n  SELECT * from filter_stuff S\n  ORDER BY name\n  LIMIT 5;\nEND;\n")),Object(o.b)("h3",{id:"conditionals"},"Conditionals"),Object(o.b)("p",null,"It's often desirable to have some options in the generated SQL without having to fork your entire query.  Shared\nfragments address this as well with the conditional form.  In this form the top level of the fragment is an\n",Object(o.b)("inlineCode",{parentName:"p"},"IF")," statement and there are a number of alternatives.  Here are some simple modifications to the above that illustrate\nsome of the possibilities."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC filter_stuff(pattern_ text, min_age_ integer not null, max_age_ integer not null)\nBEGIN\n  IF pattern_ IS NOT NULL THEN\n    WITH\n        source(*) LIKE stuff\n    SELECT * from source S\n    WHERE\n        S.name LIKE pattern_ AND\n        S.age BETWEEN min_age_ and max_age_;\n  ELSE\n    WITH\n        source(*) LIKE stuff\n    SELECT * from source S\n    WHERE\n        S.age BETWEEN min_age_ and max_age_;\n  END IF;\nEND;\n")),Object(o.b)("p",null,"In the above if the input pattern is NULL then it is not considered, it won't be part of the generated SQL at all. Note that\n",Object(o.b)("inlineCode",{parentName:"p"},"source")," (same name) appears in both branches and therefore must be the same type as it will be fulfilled by one actual table\nparameter."),Object(o.b)("p",null,"Now the above could have been achieved with something like"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"pattern_ IS NULL OR S.name LIKE pattern_\n")),Object(o.b)("p",null,"But that would have no useful selectivity.  But in general you might be able to avoid joins and so forth\nwith your constraints.  Consider something like this hypothetical:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC filter_stuff(pattern_ text, min_age_ integer not null, max_age_ integer not null)\nBEGIN\n  IF pattern_ IS NOT NULL THEN\n    WITH\n        source(*) LIKE stuff\n    SELECT DISTINCT S.* from source S\n    INNER JOIN keywords K\n    WHERE\n        K.keyword LIKE pattern_ AND\n        S.age BETWEEN min_age_ and max_age_;\n  ELSE\n    WITH\n        source(*) LIKE stuff\n    SELECT * from source S\n    WHERE\n        S.age BETWEEN min_age_ and max_age_;\n  END IF;\nEND;\n")),Object(o.b)("p",null,"Here we save the DISTINCT and the JOIN if there is no pattern which might be important.  Of course\nthere are probably better ways to match keywords but this is just an illustration of what's possible."),Object(o.b)("p",null,"There are numerous ways this flexibility can be used, again a simple example, a real schema\ntransform would be more complex."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-SQL"},"@attribute(cql:shared_fragment)\nCREATE PROC get_stuff(to_include_ text, to_exclude_ text, schema_v2 bool not null)\nBEGIN\n  IF schema_v2 THEN\n    WITH\n        to_include(id) AS (CALL ids_from_string(to_include_)),\n        to_exclude(id) AS (CALL ids_from_string(to_exclude_))\n    SELECT * from stuff_2 S\n    WHERE\n        S.id in (select * from to_include) AND\n        S.id not in (select * from to_exclude);\n  ELSE\n    WITH\n        to_include(id) AS (CALL ids_from_string(to_include_)),\n        to_exclude(id) AS (CALL ids_from_string(to_exclude_))\n    SELECT * from stuff S\n    WHERE\n        S.id in (select * from to_include) AND\n        S.id not in (select * from to_exclude);\n   END IF;\nEND;\n")),Object(o.b)("h3",{id:"validation"},"Validation"),Object(o.b)("p",null,"All of this requires a bunch of checking, at least this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the LIKE forms can only appear in a shared fragment"),Object(o.b)("li",{parentName:"ul"},"the CALL forms must refer to shared fragments"),Object(o.b)("li",{parentName:"ul"},"the CALL args must be compatible"),Object(o.b)("li",{parentName:"ul"},"the number and type of the provided tables in USING must be correct"),Object(o.b)("li",{parentName:"ul"},"the shared fragment must be a single select statement or an IF statement with an ELSE",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"the statement lists of the IF/ELSE combo must all be single select statements"),Object(o.b)("li",{parentName:"ul"},"all the choices in the IF block must return the same shape (this is normal for procedures)"))),Object(o.b)("li",{parentName:"ul"},"the shared fragment can't have any out arguments"),Object(o.b)("li",{parentName:"ul"},"the provided fragment arguments cannot themselves use the nested SELECT construct")),Object(o.b)("p",null,"I think this is a total game changer for SQL authoring and should go a long way to making it easier to get your work done\non SQLite. A good base set of shared fragments as part any suite of procedures seems like a good idea."),Object(o.b)("p",null,"There are more details in the section on shared fragments in ",Object(o.b)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch14"},"Chapter 14")," of The Guide."),Object(o.b)("p",null,"These features are in the current build as of today (12/14/2021)."),Object(o.b)("p",null,"Happy Holidays and stay safe."))}m.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(f,i(i({ref:t},c),{},{components:n})):r.a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);