(self.webpackChunkdsl_doc=self.webpackChunkdsl_doc||[]).push([[7892],{90297:function(e){e.exports=function(e){var n="[ \\t\\f]*",a=n+"[:=]"+n,s="[ \\t\\f]+",t="("+a+"|"+s+")",r="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",c="([^\\\\:= \\t\\f\\n]|\\\\.)+",i={end:t,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:r+a,relevance:1},{begin:r+s,relevance:0}],contains:[{className:"attr",begin:r,endsParent:!0,relevance:0}],starts:i},{begin:c+t,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:c,endsParent:!0,relevance:0}],starts:i},{className:"attr",relevance:0,begin:c+n+"$"}]}}}}]);