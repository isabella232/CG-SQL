(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(150)),o=["components"],l={id:"ch08",title:"Chapter 8: Functions",sidebar_label:"Chapter 8: Functions"},c={unversionedId:"ch08",id:"ch08",isDocsHomePage:!1,title:"Chapter 8: Functions",description:"\x3c!---",source:"@site/../CQL_Guide/ch08.md",slug:"/ch08",permalink:"/cql-guide/ch08",version:"current",lastUpdatedBy:"Rico Mariani",lastUpdatedAt:1639984996,sidebar_label:"Chapter 8: Functions",sidebar:"someSidebar",previous:{title:"Chapter 7: CQL Result Sets",permalink:"/cql-guide/ch07"},next:{title:"Chapter 9: Statements Summary and Error Checking",permalink:"/cql-guide/ch09"}},s=[{value:"Notes on Builtin Functions",id:"notes-on-builtin-functions",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CQL stored procs have a very simple contract so it is easy to declare procedures and then implement them in regular C, the C functions just have to conform to the contract.  However, there is no notion of functions at all and this makes it very inconvenient to use some external code and is not doing database things and wants to return values.  Even a random number generator or something would be difficult to use because it could not be called in the context of an expression.  To allow for this CQL adds declared functions"),Object(r.b)("p",null,"In an other example of the two-headed nature of CQL, there are two ways to declare functions.  As we have already\nseen you can make function-like procedures and call them like functions simply by making a procedure with an ",Object(r.b)("inlineCode",{parentName:"p"},"out")," parameter. However, there are also cases where it is reasonable to make function calls to external functions of other kinds.  There are three major types of functions you might wish to call."),Object(r.b)("h4",{id:"ordinary-scalar-functions"},"Ordinary Scalar Functions"),Object(r.b)("p",null,"These functions are written in regular C and provide for the ability to do operations on in-memory objects.  For instance,\nyou could create functions that allow you to read and write from a dictionary.  You can declare these functions like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"declare function dict_get_value(dict object, key_ text not null) text;\n")),Object(r.b)("p",null,"Such a function is not known to SQLite and therefore cannot appear in SQL statements.  CQL will enforce this."),Object(r.b)("p",null,"The above function returns a text reference, and, importantly, this is a borrowed reference.  The dictionary\nis presumably holding on to the reference and as long as it is not mutated the reference is valid.  CQL will\nretain this reference as soon as it is stored and release it automatically when it is out of scope.  So, in\nthis case, the dictionary continues to own the object."),Object(r.b)("p",null,"It is also possible to declare functions that create objects.  Such as this example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"declare function dict_create() create object;\n")),Object(r.b)("p",null,"This declaration tells CQL that the function will create a new object for our use.  CQL does not retain the\nprovided object, rather assuming ownership of the presumably one reference count the object already has.\nWhen the object goes out of scope it is release as usual."),Object(r.b)("p",null,"If we also declare this procedure:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"declare procedure dict_add(\n    dict object not null,\n    key_ text not null,\n    value text not null);\n")),Object(r.b)("p",null,"Then with this family of declarations we could write something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},'create proc create_and_init(out dict object not null)\nbegin\n  set dict := dict_create();\n  call dict_add(dict, "k1", "v1");\n  call dict_add(dict, "k2", "v2");\n  if (dict_get_value(dict, "k1") == dict__get_value(dict, "k2)) then\n    call printf("insanity has ensued\\n");\n  end if;\nend;\n')),Object(r.b)("p",null,"Note: Ordinary scalar functions may not use the database in any way, when they are invoked they will not\nbe provided with the database pointer and so they will be unable to do any database operations.  To do\ndatabase operations use regular procedures.  You can create a function-like-procedure using the ",Object(r.b)("inlineCode",{parentName:"p"},"out")," convention\ndiscussed previously."),Object(r.b)("h4",{id:"sql-scalar-functions"},"SQL Scalar Functions"),Object(r.b)("p",null,"SQLite includes the ability to add new functions to its expressions using ",Object(r.b)("inlineCode",{parentName:"p"},"sqlite3_create_function"),".  In\norder to use this function in CQL, you must also provide its prototype definition to the compiler.  You\ncan do so like in this example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"declare select function strencode(t text not null) text not null;\n")),Object(r.b)("p",null,"This introduces the function ",Object(r.b)("inlineCode",{parentName:"p"},"strencode")," to the compiler for use in SQL constructs.  With this done you\ncould write a procedure something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"create table foo(id integer, t text);\n\ncreate procedure bar(id_ integer)\nbegin\n   select strencode(T1.t) from foo T1 where T1.id = id_;\nend;\n")),Object(r.b)("p",null,'This presumably returns the "encoded" text, whatever that might be.  Note that if ',Object(r.b)("inlineCode",{parentName:"p"},"sqlite3_create_function"),"\nis not called before this code runs, a run-time error will ensue.  Just as CQL must assume that declared\ntables really are created, it also assumes that declared function really are created.  This is another case\nof telling the compiler in advance what the situation will be at runtime."),Object(r.b)("p",null,"SQLite allows for many flexible kinds of user defined functions.  CQL doesn't concern itself with the details of the implementation of the function, it only needs the signature so that it can validate calls."),Object(r.b)("p",null,"Note that SQL Scalar Functions cannot contain ",Object(r.b)("inlineCode",{parentName:"p"},"object")," parameters. To pass an ",Object(r.b)("inlineCode",{parentName:"p"},"object"),", you should instead pass\nthe memory address of this object using a ",Object(r.b)("inlineCode",{parentName:"p"},"LONG INT")," parameter. To access the address of an ",Object(r.b)("inlineCode",{parentName:"p"},"object")," at runtime, you should use\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"ptr()")," function. See ",Object(r.b)("a",{parentName:"p",href:"#notes-on-builtin-functions"},"the notes section below")," for more information."),Object(r.b)("p",null,"See also: ",Object(r.b)("a",{parentName:"p",href:"https://www.sqlite.org/c3ref/create_function.html"},"Create Or Redefine SQL Functions"),"."),Object(r.b)("h4",{id:"sql-table-valued-functions"},"SQL Table Valued Functions"),Object(r.b)("p",null,'More recent versions of SQLite also include the ability to add table-valued functions to statements in place of actual tables. These functions can use their arguments to create a "virtual table" value for use in place of a table.  For this\nto work, again SQLite must be told of the existence of the table.  There are a series of steps to make this happen\nbeginning with ',Object(r.b)("inlineCode",{parentName:"p"},"sqlite3_create_module"),' which are described in the SQLite documents under "The Virtual Table Mechanism Of SQLite."'),Object(r.b)("p",null,"Once that has been done, a table-valued function can be defined for most object types.  For instance it is possible to\ncreate a table-valued function like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"declare select function dict_contents(dict object not null)\n   (k text not null, v text not null);\n")),Object(r.b)("p",null,"This is just like the previous type of select function but the return type is a table shape.  Once the above has been done you can legally write something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"create proc read_dict(dict object not null, pattern text)\nbegin\n  if pattern is not null then\n    select k, v from dict_contents(dict) T1 where T1.k LIKE pattern;\n  else\n    select k, v from dict_contents(dict);\n  end if;\nend;\n")),Object(r.b)("p",null,"This construct is very general indeed but the runtime set up for it is much more complicated than scalar functions\nand only more modern versions of SQLite even support it."),Object(r.b)("h3",{id:"notes-on-builtin-functions"},"Notes on Builtin Functions"),Object(r.b)("p",null,"Some of the SQLite builtin functions are hard-coded,  these are the functions that have semantics that are not readily captured with a simple prototype.  Other SQLite functions can be declared with ",Object(r.b)("inlineCode",{parentName:"p"},"declare select function ...")," and then used."),Object(r.b)("p",null,"CQL's hard-coded builtin list includes:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Aggregate Functions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"count"),Object(r.b)("li",{parentName:"ul"},"max"),Object(r.b)("li",{parentName:"ul"},"min"),Object(r.b)("li",{parentName:"ul"},"sum"),Object(r.b)("li",{parentName:"ul"},"total"),Object(r.b)("li",{parentName:"ul"},"avg"),Object(r.b)("li",{parentName:"ul"},"average"),Object(r.b)("li",{parentName:"ul"},"group_concat")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Scalar Functions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ifnull"),Object(r.b)("li",{parentName:"ul"},"nullif"),Object(r.b)("li",{parentName:"ul"},"upper"),Object(r.b)("li",{parentName:"ul"},"char"),Object(r.b)("li",{parentName:"ul"},"abs"),Object(r.b)("li",{parentName:"ul"},"instr"),Object(r.b)("li",{parentName:"ul"},"coalesce"),Object(r.b)("li",{parentName:"ul"},"last_insert_rowid"),Object(r.b)("li",{parentName:"ul"},"printf"),Object(r.b)("li",{parentName:"ul"},"strftime"),Object(r.b)("li",{parentName:"ul"},"date"),Object(r.b)("li",{parentName:"ul"},"time"),Object(r.b)("li",{parentName:"ul"},"datetime"),Object(r.b)("li",{parentName:"ul"},"julianday"),Object(r.b)("li",{parentName:"ul"},"substr"),Object(r.b)("li",{parentName:"ul"},"replace"),Object(r.b)("li",{parentName:"ul"},"round"),Object(r.b)("li",{parentName:"ul"},"trim"),Object(r.b)("li",{parentName:"ul"},"ltrim"),Object(r.b)("li",{parentName:"ul"},"rtrim")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Window Functions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"row_number"),Object(r.b)("li",{parentName:"ul"},"rank"),Object(r.b)("li",{parentName:"ul"},"dense_rank"),Object(r.b)("li",{parentName:"ul"},"percent_rank"),Object(r.b)("li",{parentName:"ul"},"cume_dist"),Object(r.b)("li",{parentName:"ul"},"ntile"),Object(r.b)("li",{parentName:"ul"},"lag"),Object(r.b)("li",{parentName:"ul"},"lead"),Object(r.b)("li",{parentName:"ul"},"first_value"),Object(r.b)("li",{parentName:"ul"},"last_value"),Object(r.b)("li",{parentName:"ul"},"nth_value")),Object(r.b)("p",null,"Special Functions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"nullable"),Object(r.b)("li",{parentName:"ul"},"sensitive"),Object(r.b)("li",{parentName:"ul"},"ptr")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Nullable")," casts an operand to the nullable version of its type and otherwise does nothing.  This cast might be useful if you need an exact type match in a situation.  It is stripped from any generated SQL and generated C so it has no runtime effect at all other than the indirect consequences of changing the storage class of its operand."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Sensitive")," casts an operand to the sensitive version of its type and otherwise does nothing.  This cast might be useful if you need an exact type match in a situation.  It is stripped from any generated SQL and generated C so it has no runtime effect at all other than the indirect consequences of changing the storage class of its operand."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Ptr")," is used to cause a reference type variable to be bound as a long integer to SQLite. This is a way of giving object pointers to SQLite UDFs. Not all versions of Sqlite support\nbinding object variables, so passing memory addresses is the best we can do on all versions."))}b.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,h=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);