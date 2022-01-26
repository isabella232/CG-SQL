(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{153:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(153)),l=["components"],o={id:"ch04",title:"Chapter 4: Procedures, Functions, and Control Flow",sidebar_label:"Chapter 4: Procedures, Functions, and Control Flow"},c={unversionedId:"ch04",id:"ch04",isDocsHomePage:!1,title:"Chapter 4: Procedures, Functions, and Control Flow",description:"\x3c!---",source:"@site/../CQL_Guide/ch04.md",slug:"/ch04",permalink:"/cql-guide/ch04",version:"current",lastUpdatedBy:"Rico Mariani",lastUpdatedAt:1643239658,sidebar_label:"Chapter 4: Procedures, Functions, and Control Flow",sidebar:"someSidebar",previous:{title:"Chapter 3: Expressions, Literals, Nullability, Sensitivity",permalink:"/cql-guide/ch03"},next:{title:"Chapter 5: Types of Cursors, OUT and OUT UNION, and FETCH flavors",permalink:"/cql-guide/ch05"}},s=[{value:"Out Parameters",id:"out-parameters",children:[]},{value:"Procedure Calls",id:"procedure-calls",children:[]},{value:"The IF statement",id:"the-if-statement",children:[]},{value:"The WHILE statement",id:"the-while-statement",children:[]},{value:"The SWITCH Statement",id:"the-switch-statement",children:[]},{value:"The TRY, CATCH, and THROW Statements",id:"the-try-catch-and-throw-statements",children:[]},{value:"Procedures as Functions: Motivation and Example",id:"procedures-as-functions-motivation-and-example",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All kinds of control flow happens in the context of some procedure. Though we've already introduced examples of procedures let's\nnow go over some of the additional aspects we have not yet illustrated."),Object(i.b)("h3",{id:"out-parameters"},"Out Parameters"),Object(i.b)("p",null,"Consider this procedure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"create procedure echo_integer(in arg1 integer not null, out arg2 integer not null)\nbegin\n  set arg2 := arg1;\nend;\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"arg1")," has been declared ",Object(i.b)("inlineCode",{parentName:"p"},"in"),". This is the default: ",Object(i.b)("inlineCode",{parentName:"p"},"in arg1 integer not null"),"\nand ",Object(i.b)("inlineCode",{parentName:"p"},"arg1 integer not null")," mean the exact same thing."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"arg2"),", however, has been declared ",Object(i.b)("inlineCode",{parentName:"p"},"out"),". When a parameter is declared using\n",Object(i.b)("inlineCode",{parentName:"p"},"out"),", arguments for it are passed by reference. This is similar to by-reference\narguments in other languages; indeed, they compile into a simple pointer\nreference in the generated C code."),Object(i.b)("p",null,"Given that ",Object(i.b)("inlineCode",{parentName:"p"},"arg2")," is passed by reference, the statement ",Object(i.b)("inlineCode",{parentName:"p"},"set arg2 := arg1;"),"\nactually updates a variable in the caller. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"declare x int;\necho_integer(42, x);\n-- `x` is now 42\n")),Object(i.b)("p",null,"It is important to note that values cannot be passed ",Object(i.b)("em",{parentName:"p"},"into")," a procedure via an\n",Object(i.b)("inlineCode",{parentName:"p"},"out")," parameter. In fact, ",Object(i.b)("inlineCode",{parentName:"p"},"out")," parameters are immediately assigned a new value\nas soon as the procedure is called:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"All nullable ",Object(i.b)("inlineCode",{parentName:"p"},"out")," parameters are set to ",Object(i.b)("inlineCode",{parentName:"p"},"null"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Nonnull ",Object(i.b)("inlineCode",{parentName:"p"},"out")," parameters of a non-reference type (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"integer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"long"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"bool"),", et cetera) are set to their default values (",Object(i.b)("inlineCode",{parentName:"p"},"0"),", ",Object(i.b)("inlineCode",{parentName:"p"},"0.0"),", ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", et\ncetera).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Nonnull ",Object(i.b)("inlineCode",{parentName:"p"},"out")," parameters of a reference type (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"blob"),", ",Object(i.b)("inlineCode",{parentName:"p"},"object"),", and\n",Object(i.b)("inlineCode",{parentName:"p"},"text"),") are set to ",Object(i.b)("inlineCode",{parentName:"p"},"null")," as there are no default values for reference types.\nThey must, therefore, be assigned a value within the procedure so that they\nwill not be ",Object(i.b)("inlineCode",{parentName:"p"},"null")," when the procedure returns. CQL enforces this."))),Object(i.b)("p",null,"In addition to ",Object(i.b)("inlineCode",{parentName:"p"},"in")," and ",Object(i.b)("inlineCode",{parentName:"p"},"out")," parameters, there are also ",Object(i.b)("inlineCode",{parentName:"p"},"inout")," parameters.\n",Object(i.b)("inlineCode",{parentName:"p"},"inout")," parameters are, as one might expect, a combination of ",Object(i.b)("inlineCode",{parentName:"p"},"in")," and ",Object(i.b)("inlineCode",{parentName:"p"},"out"),"\nparameters: The caller passes in a value as with ",Object(i.b)("inlineCode",{parentName:"p"},"in")," parameters, but the value\nis passed by reference as with ",Object(i.b)("inlineCode",{parentName:"p"},"out")," parameters."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"inout")," parameters allow for code such as the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"create procedure double(inout arg integer not null)\nbegin\n  -- note that a variable in the caller is both\n  -- read from and written to\n  set arg := arg + arg;\nend;\n\nlet x := 2;\ndouble(x);\n-- `x` is now four\n")),Object(i.b)("h3",{id:"procedure-calls"},"Procedure Calls"),Object(i.b)("p",null,"The usual ",Object(i.b)("inlineCode",{parentName:"p"},"call")," syntax is used to invoke a procedure.  It returns no value but it can have any number of ",Object(i.b)("inlineCode",{parentName:"p"},"out")," arguments."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  declare scratch integer not null;\n  call echo(12, scratch);\n  scratch == 12; -- true\n")),Object(i.b)("p",null,"Let's go over the most essential bits of control flow."),Object(i.b)("h3",{id:"the-if-statement"},"The IF statement"),Object(i.b)("p",null,"The CQL ",Object(i.b)("inlineCode",{parentName:"p"},"IF")," statement has no syntatic ambiguities at the expense of being somewhat more verbose than many other languages.\nIn CQL the ",Object(i.b)("inlineCode",{parentName:"p"},"ELSE IF")," portion is baked into the ",Object(i.b)("inlineCode",{parentName:"p"},"IF")," statement, so what you see below is logically a single statement."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"create proc checker(foo integer, out result integer not null)\nbegin\n  if foo = 1 then\n   set result := 1;\n  else if foo = 2 then\n   set result := 3;\n  else\n   set result := 5;\n  end if;\nend;\n")),Object(i.b)("h3",{id:"the-while-statement"},"The WHILE statement"),Object(i.b)("p",null,"What follows is a simple procedure that counts down its input argument."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"declare procedure printf no check;\n\ncreate proc looper(x integer not null)\nbegin\n  while x > 0\n  begin\n   call printf('%d\\n', x);\n   set x := x - 1;\n  end;\nend;\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"WHILE")," loop has additional keywords that can be used within it to better control the loop.  A more general\nloop might look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"declare procedure printf no check;\n\ncreate proc looper(x integer not null)\nbegin\n  while 1\n  begin\n   set x := x - 1;\n   if x < 0 then\n     leave;\n   else if x % 100 = 0 then\n     continue;\n   else if x % 10 = 0\n     call printf('%d\\n', x);\n   end if;\n  end;\nend;\n")),Object(i.b)("p",null,"Let's go over this peculiar loop:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"  while 1\n  begin\n    ...\n  end;\n")),Object(i.b)("p",null,"This is an immediate sign that there will be an unusual exit condition.  The loop will never end without one because ",Object(i.b)("inlineCode",{parentName:"p"},"1")," will never be false."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"   if x < 0 then\n     leave;\n")),Object(i.b)("p",null,"Now here we've encoded our exit condition a bit strangely: we might have done the equivalent job with a normal condition in the predicate\npart of the ",Object(i.b)("inlineCode",{parentName:"p"},"while")," statement but for illustration anyway, when x becomes negative ",Object(i.b)("inlineCode",{parentName:"p"},"leave")," will cause us to exit the loop.  This is like\n",Object(i.b)("inlineCode",{parentName:"p"},"break")," in C."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"   else if x % 100 = 0 then\n     continue;\n")),Object(i.b)("p",null,"This bit says that on every 100th iteration we go back to the start of the loop.  So the next bit will not run, which is the printing."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"   else if x % 10 = 0\n     call printf('%d\\n', x);\n   end if;\n")),Object(i.b)("p",null,"Finishing up the control flow, on every 10th iteration we print the value of the loop variable."),Object(i.b)("h3",{id:"the-switch-statement"},"The SWITCH Statement"),Object(i.b)("p",null,"The  CQL ",Object(i.b)("inlineCode",{parentName:"p"},"SWITCH")," is designed to map to the C ",Object(i.b)("inlineCode",{parentName:"p"},"switch")," statement for better codegen and also to give us the opportunity to do better error checking.\n",Object(i.b)("inlineCode",{parentName:"p"},"SWITCH")," is a ",Object(i.b)("em",{parentName:"p"},"statement")," like ",Object(i.b)("inlineCode",{parentName:"p"},"IF")," not an ",Object(i.b)("em",{parentName:"p"},"expression")," like ",Object(i.b)("inlineCode",{parentName:"p"},"CASE..WHEN..END")," so it combines with other statements. The general form looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-SQL"},"SWITCH switch-expression [optional ALL VALUES]\nWHEN expr1, expr2, ... THEN\n  [statement_list]\nWHEN expr3, ... THEN\n  [statement_list]\nWHEN expr4 NOTHING\nELSE\n  [statement_list]\nEND;\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the switch-expression must be a not-null integral type (",Object(i.b)("inlineCode",{parentName:"li"},"integer not null")," or ",Object(i.b)("inlineCode",{parentName:"li"},"long integer not null"),")"),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("inlineCode",{parentName:"li"},"WHEN")," expressions ","[expr1, expr2, etc.]"," are made from constant integer expressions (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"5"),", ",Object(i.b)("inlineCode",{parentName:"li"},"1+7"),", ",Object(i.b)("inlineCode",{parentName:"li"},"1<<2"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"my_enum.thing"),")"),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("inlineCode",{parentName:"li"},"WHEN")," expressions must be compatible with the switch expression (long constants cannot be used if the switch expression is an integer)"),Object(i.b)("li",{parentName:"ul"},"the values in the ",Object(i.b)("inlineCode",{parentName:"li"},"WHEN")," clauses must be unique (after evaluation)"),Object(i.b)("li",{parentName:"ul"},"within one of the interior statement lists the ",Object(i.b)("inlineCode",{parentName:"li"},"LEAVE")," keyword exits the ",Object(i.b)("inlineCode",{parentName:"li"},"SWITCH")," prematurely, just like ",Object(i.b)("inlineCode",{parentName:"li"},"break")," in C",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a ",Object(i.b)("inlineCode",{parentName:"li"},"LEAVE")," is not required before the next ",Object(i.b)("inlineCode",{parentName:"li"},"WHEN")),Object(i.b)("li",{parentName:"ul"},"there are no fall-through semantics as you can find in ",Object(i.b)("inlineCode",{parentName:"li"},"C"),", if fall-through ever comes to ",Object(i.b)("inlineCode",{parentName:"li"},"SWITCH")," it will be explicit"))),Object(i.b)("li",{parentName:"ul"},"if the keyword ",Object(i.b)("inlineCode",{parentName:"li"},"NOTHING")," is used instead of ",Object(i.b)("inlineCode",{parentName:"li"},"THEN")," it means there is no code for that case, which is useful with ",Object(i.b)("inlineCode",{parentName:"li"},"ALL VALUES")," (see below)"),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("inlineCode",{parentName:"li"},"ELSE")," clause is optional and works just like ",Object(i.b)("inlineCode",{parentName:"li"},"default")," in ",Object(i.b)("inlineCode",{parentName:"li"},"C"),", covering any cases not otherwise explicitly listed"),Object(i.b)("li",{parentName:"ul"},"if you add ",Object(i.b)("inlineCode",{parentName:"li"},"ALL VALUES")," then:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"the expression must be an from an enum type"),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("inlineCode",{parentName:"li"},"WHEN")," values must cover every value of the enum",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"enum members that start with a leading ",Object(i.b)("inlineCode",{parentName:"li"},"_")," are by convention considered pseudo values and do not need to be covered"))),Object(i.b)("li",{parentName:"ul"},"there can be no extra ",Object(i.b)("inlineCode",{parentName:"li"},"WHEN")," values not in the enum"),Object(i.b)("li",{parentName:"ul"},"there can be no ",Object(i.b)("inlineCode",{parentName:"li"},"ELSE")," clause (it would defeat the point of listing ",Object(i.b)("inlineCode",{parentName:"li"},"ALL VALUES")," which is to get an error if new values come along)")))),Object(i.b)("p",null,"Some more complete examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"let x := get_something();\nswitch x\n  when 1,1+1 then -- constant expressions ok\n    set y := 'small';\n    -- other stuff\n  when 3,4,5 then\n    set y := 'medium';\n    -- other stuff\n  when 6,7,8 then\n    set y := 'large';\n    -- other stuff\n  else\n    set y := 'zomg enormous';\nend;\n\ndeclare enum item integer (\n  pen = 0, pencil, brush,\n  paper, canvas,\n  _count\n);\n\nlet x := get_item(); -- returns one of the above\n\nswitch x all values\n  when item.pen, item.pencil then\n     call write_something();\n  when item.brush then nothing\n     -- itemize brush but it needs no code\n  when item.paper, item.canvas then\n    call setup_writing();\nend;\n")),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"THEN NOTHING")," allows the compiler to avoid emitting a useless ",Object(i.b)("inlineCode",{parentName:"p"},"break")," in the C code.  Hence that choice is better/clearer than ",Object(i.b)("inlineCode",{parentName:"p"},"when brush then leave;")),Object(i.b)("p",null,"Note that the presence of ",Object(i.b)("inlineCode",{parentName:"p"},"_count")," in the enum will not cause an error in the above because it starts with ",Object(i.b)("inlineCode",{parentName:"p"},"_"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"C")," output for this statement will be a direct mapping to a ",Object(i.b)("inlineCode",{parentName:"p"},"C")," switch statement."),Object(i.b)("h3",{id:"the-try-catch-and-throw-statements"},"The TRY, CATCH, and THROW Statements"),Object(i.b)("p",null,'This example illustrates catching an error from some DML, and recovering rather than letting the error cascade up.\nThis is the common "upsert" pattern (insert or update)'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'declare procedure printf no check;\n\ncreate procedure upsert_foo(id_ integer, t_ text)\nbegin\n  begin try\n    insert into foo(id, t) values(id_, t_)\n  end try;\n  begin catch\n    begin try\n      update foo set t = t_ where id = id_;\n    end try;\n    begin catch\n      call printf("Error code %d!\\n", @rc);\n      throw;\n    end catch;\n  end catch;\nend;\n')),Object(i.b)("p",null,"Once again, let's go over this section by section:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"  begin try\n    insert into foo(id, t) values(id_, t_)\n  end try;\n")),Object(i.b)("p",null,"Normally if the ",Object(i.b)("inlineCode",{parentName:"p"},"insert")," statement fails, the procedure will exit with a failure result code.  Here, instead,\nwe prepare to catch that error."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"  begin catch\n    begin try\n      update foo set t = t_ where id = id_;\n    end try;\n")),Object(i.b)("p",null,"Now, having failed to insert, presumably because a row with the provided ",Object(i.b)("inlineCode",{parentName:"p"},"id")," already exists, we try to update\nthat row instead.  However that might also fail, so we  wrap it in another try.  If the update fails, then there is a final catch block:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'    begin catch\n      call printf("Error code %d!\\n", @rc);\n      throw;\n    end catch;\n')),Object(i.b)("p",null,"Here we see a usage of the ",Object(i.b)("inlineCode",{parentName:"p"},"@rc")," variable to observe the failed error code.  In this case we simply print a diagnostic message and\nthen use the ",Object(i.b)("inlineCode",{parentName:"p"},"throw")," keyword to rethrow the previous failure (exactly what is stored in ",Object(i.b)("inlineCode",{parentName:"p"},"@rc"),").  In general, ",Object(i.b)("inlineCode",{parentName:"p"},"throw")," will create a\nfailure in the current block using the most recent failed result code from SQLite (",Object(i.b)("inlineCode",{parentName:"p"},"@rc"),") if it is an error, or else the general\n",Object(i.b)("inlineCode",{parentName:"p"},"SQLITE_ERROR")," result code if there is no such error.  In this case the failure code for the ",Object(i.b)("inlineCode",{parentName:"p"},"update")," statement will become the\nresult code of the current procedure."),Object(i.b)("p",null,"This leaves only the closing markers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"  end catch;\nend;\n")),Object(i.b)("p",null,"If control flow reaches the normal end of the procedure it will return ",Object(i.b)("inlineCode",{parentName:"p"},"SQLITE_OK"),"."),Object(i.b)("h3",{id:"procedures-as-functions-motivation-and-example"},"Procedures as Functions: Motivation and Example"),Object(i.b)("p",null,"The calling convention for CQL stored procedures often (usually) requires that the procedure returns a result code from SQLite.\nThis makes it impossible to write a procedure that returns a result like a function, as the result position is already used for\nthe error code.  You can get around this problem by using ",Object(i.b)("inlineCode",{parentName:"p"},"out")," arguments as your return codes.  So for instance, this version\nof the Fibonacci function is possible."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"-- this works, but it is awkward\ncreate procedure fib (in arg integer not null, out result integer not null)\nbegin\n  if (arg <= 2) then\n    set result := 1;\n  else\n    declare t integer not null;\n    call fib(arg - 1,  result);\n    call fib(arg - 2,  t);\n    set result := t + result;\n  end if;\nend;\n")),Object(i.b)("p",null,"The above works, but the notation is very awkward."),Object(i.b)("p",null,'CQL has a "procedures as functions" feature that tries to make this more pleasant by making it possible to use function call notation\non a procedure whose last argument is an ',Object(i.b)("inlineCode",{parentName:"p"},"out")," variable.  You simply call the procedure like it was a function and omit the last argument in the call.\nA temporary variable is automatically created to hold the result and that temporary becomes the logical return of the function.\nFor semantic analysis, the result type of the function becomes the type of the ",Object(i.b)("inlineCode",{parentName:"p"},"out")," argument."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"-- rewritten with function call syntax\ncreate procedure fib (in arg integer not null, out result integer not null)\nbegin\n  if (arg <= 2) then\n    set result := 1;\n  else\n    set result := fib(arg - 1) + fib(arg - 2);\n  end if;\nend;\n")),Object(i.b)("p",null,"This form is allowed when:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"all but the last argument of the procedure was specified"),Object(i.b)("li",{parentName:"ul"},"the formal parameter for that last argument was marked with ",Object(i.b)("inlineCode",{parentName:"li"},"out")," (neither ",Object(i.b)("inlineCode",{parentName:"li"},"in")," nor ",Object(i.b)("inlineCode",{parentName:"li"},"inout")," are acceptable)"),Object(i.b)("li",{parentName:"ul"},"the procedure does not return a result set using a ",Object(i.b)("inlineCode",{parentName:"li"},"select")," statement or ",Object(i.b)("inlineCode",{parentName:"li"},"out")," statement (more on these later)")),Object(i.b)("p",null,"If the procedure in question uses SQLite, or calls something that uses SQLite, then it might fail.\nIf that happens the result code will propagate just like it would have with the usual ",Object(i.b)("inlineCode",{parentName:"p"},"call")," form.\nAny failures can be caught with ",Object(i.b)("inlineCode",{parentName:"p"},"try/catch"),' as usual.\nThis feature is really only syntatic sugar for the "awkward" form above, but it does allow for slightly better generated C code.'))}p.isMDXComponent=!0}}]);