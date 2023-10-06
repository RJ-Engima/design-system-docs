(self.webpackChunkdsl_doc=self.webpackChunkdsl_doc||[]).push([[3180],{40717:function(e){function n(e){return e?"string"==typeof e?e:e.source:null}function a(e){return t("(?=",e,")")}function t(...e){return e.map((e=>n(e))).join("")}function i(...e){return"("+e.map((e=>n(e))).join("|")+")"}const s=e=>t(/\b/,e,/\w$/.test(e)?/\b/:/\B/),c=["Protocol","Type"].map(s),u=["init","self"].map(s),r=["Any","Self"],o=["associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],l=["false","nil","true"],m=["assignment","associativity","higherThan","left","lowerThan","none","right"],d=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],p=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],F=i(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),b=i(F,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),h=t(F,b,"*"),f=i(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),w=i(f,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),y=t(f,w,"*"),g=t(/[A-Z]/,w,"*"),E=["autoclosure",t(/convention\(/,i("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",t(/objc\(/,y,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],v=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];e.exports=function(e){const n={match:/\s+/,relevance:0},F=e.COMMENT("/\\*","\\*/",{contains:["self"]}),f=[e.C_LINE_COMMENT_MODE,F],N={className:"keyword",begin:t(/\./,a(i(...c,...u))),end:i(...c,...u),excludeBegin:!0},A={match:t(/\./,i(...o)),relevance:0},C=o.filter((e=>"string"==typeof e)).concat(["_|0"]),k={variants:[{className:"keyword",match:i(...o.filter((e=>"string"!=typeof e)).concat(r).map(s),...u)}]},_={$pattern:i(/\b\w+/,/#\w+/),keyword:C.concat(d),literal:l},D=[N,A,k],B=[{match:t(/\./,i(...p)),relevance:0},{className:"built_in",match:t(/\b/,i(...p),/(?=\()/)}],M={match:/->/,relevance:0},S=[M,{className:"operator",relevance:0,variants:[{match:h},{match:`\\.(\\.|${b})+`}]}],x="([0-9]_*)+",I="([0-9a-fA-F]_*)+",$={className:"number",relevance:0,variants:[{match:`\\b(${x})(\\.(${x}))?([eE][+-]?(${x}))?\\b`},{match:`\\b0x(${I})(\\.(${I}))?([pP][+-]?(${x}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},O=(e="")=>({className:"subst",variants:[{match:t(/\\/,e,/[0\\tnr"']/)},{match:t(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),T=(e="")=>({className:"subst",match:t(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),L=(e="")=>({className:"subst",label:"interpol",begin:t(/\\/,e,/\(/),end:/\)/}),P=(e="")=>({begin:t(e,/"""/),end:t(/"""/,e),contains:[O(e),T(e),L(e)]}),K=(e="")=>({begin:t(e,/"/),end:t(/"/,e),contains:[O(e),L(e)]}),j={className:"string",variants:[P(),P("#"),P("##"),P("###"),K(),K("#"),K("##"),K("###")]},z={match:t(/`/,y,/`/)},q=[z,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${w}+`}],U=[{match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:v,contains:[...S,$,j]}]}},{className:"keyword",match:t(/@/,i(...E))},{className:"meta",match:t(/@/,y)}],Z={match:a(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,w,"+")},{className:"type",match:g,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:t(/\s+&\s+/,a(g)),relevance:0}]},G={begin:/</,end:/>/,keywords:_,contains:[...f,...D,...U,M,Z]};Z.contains.push(G);const H={begin:/\(/,end:/\)/,relevance:0,keywords:_,contains:["self",{match:t(y,/\s*:/),keywords:"_|0",relevance:0},...f,...D,...B,...S,$,j,...q,...U,Z]},R={beginKeywords:"func",contains:[{className:"title",match:i(z.match,y,h),endsParent:!0,relevance:0},n]},V={begin:/</,end:/>/,contains:[...f,Z]},W={begin:/\(/,end:/\)/,keywords:_,contains:[{begin:i(a(t(y,/\s*:/)),a(t(y,/\s+/,y,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:y}]},...f,...D,...S,$,j,...U,Z,H],endsParent:!0,illegal:/["']/},X={className:"function",match:a(/\bfunc\b/),contains:[R,V,W,n],illegal:[/\[/,/%/]},J={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[V,W,n],illegal:/\[|%/},Q={beginKeywords:"operator",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:h,endsParent:!0,relevance:0}]},Y={beginKeywords:"precedencegroup",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:g,relevance:0},{begin:/{/,end:/}/,relevance:0,endsParent:!0,keywords:[...m,...l],contains:[Z]}]};for(const e of j.variants){const n=e.contains.find((e=>"interpol"===e.label));n.keywords=_;const a=[...D,...B,...S,$,j,...q];n.contains=[...a,{begin:/\(/,end:/\)/,contains:["self",...a]}]}return{name:"Swift",keywords:_,contains:[...f,X,J,{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:_,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...D]},Q,Y,{beginKeywords:"import",end:/$/,contains:[...f],relevance:0},...D,...B,...S,$,j,...q,...U,Z,H]}}}}]);