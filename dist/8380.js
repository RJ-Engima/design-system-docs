(self.webpackChunkdsl_doc=self.webpackChunkdsl_doc||[]).push([[8380],{46174:function(t){"use strict";t.exports=function(t,e,r,n,i,o,a,s){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,a,s],l=0;(c=new Error(e.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},244:function(t,e,r){"use strict";r.r(e),r.d(e,{Helmet:function(){return et},HelmetData:function(){return z},HelmetProvider:function(){return G}});var n=r(41375),i=r.n(n),o=r(66159),a=r.n(o),s=r(937),c=r.n(s),u=r(46174),l=r.n(u),f=r(61503),p=r.n(f),d=r(93363);function h(){return h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h.apply(this,arguments)}function y(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,m(t,e)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function T(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},v={rel:["amphtml","canonical","alternate"]},b={type:["application/ld+json"]},A={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},O=Object.keys(g).map((function(t){return g[t]})),C={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S=Object.keys(C).reduce((function(t,e){return t[C[e]]=e,t}),{}),w=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},E=function(t){var e=w(t,g.TITLE),r=w(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,(function(){return e}));var n=w(t,"defaultTitle");return e||n||void 0},j=function(t){return w(t,"onChangeClientState")||function(){}},x=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return h({},t,e)}),{})},P=function(t,e){return e.filter((function(t){return void 0!==t[g.BASE]})).map((function(t){return t[g.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e}),[])},I=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&d&&"function"==typeof d.warn&&d.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var i={};r.filter((function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var s=o[a],c=h({},n[s],i[s]);n[s]=c}return t}),[]).reverse()},L=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},k=function(t){return Array.isArray(t)?t.join(""):t},M=function(t,e){return Array.isArray(t)?t.reduce((function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t}),{priority:[],default:[]}):{default:t}},H=function(t,e){var r;return h({},t,((r={})[e]=void 0,r))},N=[g.NOSCRIPT,g.SCRIPT,g.STYLE],R=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},D=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},B=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce((function(e,r){return e[C[r]||r]=t[r],e}),e)},_=function(t,e){return e.map((function(e,r){var n,o=((n={key:r})["data-rh"]=!0,n);return Object.keys(e).forEach((function(t){var r=C[t]||t;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:e.innerHTML||e.cssText}:o[r]=e[t]})),i().createElement(t,o)}))},U=function(t,e,r){switch(t){case g.TITLE:return{toComponent:function(){return r=e.titleAttributes,(n={key:t=e.title})["data-rh"]=!0,o=B(r,n),[i().createElement(g.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var i=D(r),o=k(e);return i?"<"+t+' data-rh="true" '+i+">"+R(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+R(o,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return B(e)},toString:function(){return D(e)}};default:return{toComponent:function(){return _(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var i=Object.keys(n).filter((function(t){return!("innerHTML"===t||"cssText"===t)})).reduce((function(t,e){var i=void 0===n[e]?e:e+'="'+R(n[e],r)+'"';return t?t+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===N.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,r)}}}},Y=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,l=t.linkTags,f=t.metaTags,p=t.scriptTags,d={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var h=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=M(t.metaTags,A),o=M(e,v),a=M(r,b);return{priorityMethods:{toComponent:function(){return[].concat(_(g.META,i.priority),_(g.LINK,o.priority),_(g.SCRIPT,a.priority))},toString:function(){return U(g.META,i.priority,n)+" "+U(g.LINK,o.priority,n)+" "+U(g.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);d=h.priorityMethods,l=h.linkTags,f=h.metaTags,p=h.scriptTags}return{priority:d,base:U(g.BASE,e,n),bodyAttributes:U("bodyAttributes",r,n),htmlAttributes:U("htmlAttributes",i,n),link:U(g.LINK,l,n),meta:U(g.META,f,n),noscript:U(g.NOSCRIPT,o,n),script:U(g.SCRIPT,p,n),style:U(g.STYLE,a,n),title:U(g.TITLE,{title:c,titleAttributes:u},n)}},q=[],z=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?q:r.instances},add:function(t){(r.canUseDOM?q:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?q:r.instances).indexOf(t);(r.canUseDOM?q:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=Y({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},K=i().createContext({}),F=a().shape({setHelmet:a().func,helmetInstances:a().shape({get:a().func,add:a().func,remove:a().func})}),V="undefined"!=typeof document,G=function(t){function e(r){var n;return(n=t.call(this,r)||this).helmetData=new z(n.props.context,e.canUseDOM),n}return y(e,t),e.prototype.render=function(){return i().createElement(K.Provider,{value:this.helmetData.value},this.props.children)},e}(n.Component);G.canUseDOM=V,G.propTypes={context:a().shape({helmet:a().shape()}),children:a().node.isRequired},G.defaultProps={context:{}},G.displayName="HelmetProvider";var $=function(t,e){var r,n=document.head||document.querySelector(g.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some((function(t,e){return r=e,n.isEqualNode(t)}))?o.splice(r,1):a.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},W=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f-=1)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},J=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,l=t.title,f=t.titleAttributes;W(g.BODY,t.bodyAttributes),W(g.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=k(t)),W(g.TITLE,e)}(l,f);var p={baseTag:$(g.BASE,r),linkTags:$(g.LINK,i),metaTags:$(g.META,o),noscriptTags:$(g.NOSCRIPT,a),scriptTags:$(g.SCRIPT,c),styleTags:$(g.STYLE,u)},d={},h={};Object.keys(p).forEach((function(t){var e=p[t],r=e.newTags,n=e.oldTags;r.length&&(d[t]=r),n.length&&(h[t]=p[t].oldTags)})),e&&e(),s(t,d,h)},Q=null,X=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}y(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!p()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map((function(t){var e=h({},t.props);return delete e.context,e})),{baseTag:P(["href"],t),bodyAttributes:x("bodyAttributes",t),defer:w(t,"defer"),encode:w(t,"encodeSpecialCharacters"),htmlAttributes:x("htmlAttributes",t),linkTags:I(g.LINK,["rel","href"],t),metaTags:I(g.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:I(g.NOSCRIPT,["innerHTML"],t),onChangeClientState:j(t),scriptTags:I(g.SCRIPT,["src","innerHTML"],t),styleTags:I(g.STYLE,["cssText"],t),title:E(t),titleAttributes:x("titleAttributes",t),prioritizeSeoTags:L(t,"prioritizeSeoTags")});G.canUseDOM?(e=o,Q&&cancelAnimationFrame(Q),e.defer?Q=requestAnimationFrame((function(){J(e,(function(){Q=null}))})):(J(e),Q=null)):Y&&(i=Y(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(n.Component);X.propTypes={context:F.isRequired},X.displayName="HelmetDispatcher";var Z=["children"],tt=["children"],et=function(t){function e(){return t.apply(this,arguments)||this}y(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!c()(H(this.props,"helmetData"),H(t,"helmetData"))},r.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:e};case g.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return h({},n,((e={})[r.type]=[].concat(n[r.type]||[],[h({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},r.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(n.type){case g.TITLE:return h({},i,((e={})[n.type]=a,e.titleAttributes=h({},o),e));case g.BODY:return h({},i,{bodyAttributes:h({},o)});case g.HTML:return h({},i,{htmlAttributes:h({},o)});default:return h({},i,((r={})[n.type]=h({},o),r))}},r.mapArrayTypeChildrenToProps=function(t,e){var r=h({},e);return Object.keys(t).forEach((function(e){var n;r=h({},r,((n={})[e]=t[e],n))})),r},r.warnOnInvalidChildren=function(t,e){return l()(O.some((function(e){return t.type===e})),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+O.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),l()(!e||"string"==typeof e||Array.isArray(e)&&!e.some((function(t){return"string"!=typeof t})),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(t,e){var r=this,n={};return i().Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=T(i,Z),s=Object.keys(a).reduce((function(t,e){return t[S[e]||e]=a[e],t}),{}),c=t.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(t,o),c){case g.FRAGMENT:e=r.mapChildrenToProps(o,e);break;case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:s,nestedChildren:o});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:s,nestedChildren:o})}}})),this.mapArrayTypeChildrenToProps(n,e)},r.render=function(){var t=this.props,e=t.children,r=T(t,tt),n=h({},r),o=r.helmetData;return e&&(n=this.mapChildrenToProps(e,n)),!o||o instanceof z||(o=new z(o.context,o.instances)),o?i().createElement(X,h({},n,{context:o.value,helmetData:void 0})):i().createElement(K.Consumer,null,(function(t){return i().createElement(X,h({},n,{context:t}))}))},e}(n.Component);et.propTypes={base:a().object,bodyAttributes:a().object,children:a().oneOfType([a().arrayOf(a().node),a().node]),defaultTitle:a().string,defer:a().bool,encodeSpecialCharacters:a().bool,htmlAttributes:a().object,link:a().arrayOf(a().object),meta:a().arrayOf(a().object),noscript:a().arrayOf(a().object),onChangeClientState:a().func,script:a().arrayOf(a().object),style:a().arrayOf(a().object),title:a().string,titleAttributes:a().object,titleTemplate:a().string,prioritizeSeoTags:a().bool,helmetData:a().object},et.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},et.displayName="Helmet"},937:function(t,e,r){var n=r(93363),i="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,s="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function c(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;var r,n,u,l;if(Array.isArray(t)){if((r=t.length)!=e.length)return!1;for(n=r;0!=n--;)if(!c(t[n],e[n]))return!1;return!0}if(o&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(l=t.entries();!(n=l.next()).done;)if(!e.has(n.value[0]))return!1;for(l=t.entries();!(n=l.next()).done;)if(!c(n.value[1],e.get(n.value[0])))return!1;return!0}if(a&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(l=t.entries();!(n=l.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if((r=t.length)!=e.length)return!1;for(n=r;0!=n--;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof e.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof e.toString)return t.toString()===e.toString();if((r=(u=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(e,u[n]))return!1;if(i&&t instanceof Element)return!1;for(n=r;0!=n--;)if(("_owner"!==u[n]&&"__v"!==u[n]&&"__o"!==u[n]||!t.$$typeof)&&!c(t[u[n]],e[u[n]]))return!1;return!0}return t!=t&&e!=e}t.exports=function(t,e){try{return c(t,e)}catch(t){if((t.message||"").match(/stack|recursion/i))return n.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}},61503:function(t){t.exports=function(t,e,r,n){var i=r?r.call(n,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var o=Object.keys(t),a=Object.keys(e);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(e),c=0;c<o.length;c++){var u=o[c];if(!s(u))return!1;var l=t[u],f=e[u];if(!1===(i=r?r.call(n,l,f,u):void 0)||void 0===i&&l!==f)return!1}return!0}}}]);