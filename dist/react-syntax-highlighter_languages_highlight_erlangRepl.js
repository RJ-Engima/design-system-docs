(self.webpackChunkdsl_doc=self.webpackChunkdsl_doc||[]).push([[6996],{92310:function(e){function n(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){return{name:"Erlang REPL",keywords:{built_in:"spawn spawn_link self",keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},contains:[{className:"meta",begin:"^[0-9]+> ",relevance:10},e.COMMENT("%","$"),{className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:n(/\?(::)?/,/([A-Z]\w*)/,/((::)[A-Z]\w*)*/)},{begin:"->"},{begin:"ok"},{begin:"!"},{begin:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",relevance:0},{begin:"[A-Z][a-zA-Z0-9_']*",relevance:0}]}}}}]);