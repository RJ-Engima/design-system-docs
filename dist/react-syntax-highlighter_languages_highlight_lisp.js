(self.webpackChunkdsl_doc=self.webpackChunkdsl_doc||[]).push([[7287],{32405:function(e){e.exports=function(e){var n="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",a="\\|[^]*?\\|",i="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",s={className:"literal",begin:"\\b(t{1}|nil)\\b"},l={className:"number",variants:[{begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},b=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),c=e.COMMENT(";","$",{relevance:0}),g={begin:"\\*",end:"\\*"},t={className:"symbol",begin:"[:&]"+n},r={begin:n,relevance:0},d={begin:a},o={contains:[l,b,g,t,{begin:"\\(",end:"\\)",contains:["self",s,b,l,r]},r],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+a}]},u={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},v={begin:"\\(\\s*",end:"\\)"},m={endsWithParent:!0,relevance:0};return v.contains=[{className:"name",variants:[{begin:n,relevance:0},{begin:a}]},m],m.contains=[o,u,v,s,l,b,c,g,t,d,r],{name:"Lisp",illegal:/\S/,contains:[l,e.SHEBANG(),s,b,c,o,u,v,r]}}}}]);