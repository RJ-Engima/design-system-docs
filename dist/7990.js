/*! For license information please see 7990.js.LICENSE.txt */
(self.webpackChunkdsl_doc=self.webpackChunkdsl_doc||[]).push([[7990,6159],{59706:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(41375);function o(){return(0,r.useState)(null)}},51446:function(e,n,t){"use strict";var r=t(41375);n.Z=function(e){const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),n}},94112:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(41375),o=t(51446);function s(e){const n=(0,o.Z)(e);return(0,r.useCallback)((function(...e){return n.current&&n.current(...e)}),[n])}},6423:function(e,n,t){"use strict";var r=t(41375);const o=void 0!==t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,s="undefined"!=typeof document;n.Z=s||o?r.useLayoutEffect:r.useEffect},65162:function(e,n,t){"use strict";var r=t(41375);const o=e=>e&&"function"!=typeof e?n=>{e.current=n}:e;n.Z=function(e,n){return(0,r.useMemo)((()=>function(e,n){const t=o(e),r=o(n);return e=>{t&&t(e),r&&r(e)}}(e,n)),[e,n])}},84930:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(41375);function o(){const e=(0,r.useRef)(!0),n=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),n.current}},64338:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(41375);function o(e){const n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{n.current=e})),n.current}},8120:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(41375);function o(e){const n=function(e){const n=(0,r.useRef)(e);return n.current=e,n}(e);(0,r.useEffect)((()=>()=>n.current()),[])}},3125:function(e,n,t){"use strict";t.d(n,{$F:function(){return i},PB:function(){return s}});const r="data-rr-ui-",o="rrUi";function s(e){return`${r}${e}`}function i(e){return`${o}${e}`}},39953:function(e,n,t){"use strict";t.d(n,{sD:function(){return l}});var r=t(65162),o=t(94112),s=t(6423),i=t(41375),c=t(3945),a=t(16354);function u({children:e,in:n,onExited:t,onEntered:c,transition:a}){const[u,l]=(0,i.useState)(!n);n&&u&&l(!1);const d=function({in:e,onTransition:n}){const t=(0,i.useRef)(null),r=(0,i.useRef)(!0),c=(0,o.Z)(n);return(0,s.Z)((()=>{if(!t.current)return;let n=!1;return c({in:e,element:t.current,initial:r.current,isStale:()=>n}),()=>{n=!0}}),[e,c]),(0,s.Z)((()=>(r.current=!1,()=>{r.current=!0})),[]),t}({in:!!n,onTransition:e=>{Promise.resolve(a(e)).then((()=>{e.isStale()||(e.in?null==c||c(e.element,e.initial):(l(!0),null==t||t(e.element)))}),(n=>{throw e.in||l(!0),n}))}}),f=(0,r.Z)(d,e.ref);return u&&!n?null:(0,i.cloneElement)(e,{ref:f})}function l(e,n,t){return e?(0,a.jsx)(e,Object.assign({},t)):n?(0,a.jsx)(u,Object.assign({},t,{transition:n})):(0,a.jsx)(c.Z,Object.assign({},t))}},79441:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(70237);function o(e){void 0===e&&(e=(0,r.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(n){return e.body}}var s=t(65122),i=t(69818),c=t(44161),a=t(41375),u=t(41099),l=t.n(u),d=t(84930),f=t(8120),p=t(64338),m=t(94112),v=t(24900),h=t(45057),g=t(76293),Z=t(39953),E=t(32909),b=t(16354);const y=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let x;const w=(0,a.forwardRef)(((e,n)=>{let{show:t=!1,role:r="dialog",className:u,style:w,children:C,backdrop:k=!0,keyboard:N=!0,onBackdropClick:R,onEscapeKeyDown:O,transition:j,runTransition:T,backdropTransition:S,runBackdropTransition:$,autoFocus:L=!0,enforceFocus:P=!0,restoreFocus:D=!0,restoreFocusOptions:B,renderDialog:F,renderBackdrop:A=(e=>(0,b.jsx)("div",Object.assign({},e))),manager:M,container:_,onShow:H,onHide:W=(()=>{}),onExit:I,onExited:V,onExiting:z,onEnter:U,onEntering:K,onEntered:G}=e,Y=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,y);const q=(0,g.Z)(),X=(0,h.Z)(_),J=function(e){const n=(0,g.Z)(),t=e||function(e){return x||(x=new v.Z({ownerDocument:null==e?void 0:e.document})),x}(n),r=(0,a.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>t.add(r.current),remove:()=>t.remove(r.current),isTopModal:()=>t.isTopModal(r.current),setDialogRef:(0,a.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,a.useCallback)((e=>{r.current.backdrop=e}),[])})}(M),Q=(0,d.Z)(),ee=(0,p.Z)(t),[ne,te]=(0,a.useState)(!t),re=(0,a.useRef)(null);(0,a.useImperativeHandle)(n,(()=>J),[J]),i.Z&&!ee&&t&&(re.current=o(null==q?void 0:q.document)),t&&ne&&te(!1);const oe=(0,m.Z)((()=>{if(J.add(),le.current=(0,c.Z)(document,"keydown",ae),ue.current=(0,c.Z)(document,"focus",(()=>setTimeout(ie)),!0),H&&H(),L){var e,n;const t=o(null!=(e=null==(n=J.dialog)?void 0:n.ownerDocument)?e:null==q?void 0:q.document);J.dialog&&t&&!(0,s.Z)(J.dialog,t)&&(re.current=t,J.dialog.focus())}})),se=(0,m.Z)((()=>{var e;J.remove(),null==le.current||le.current(),null==ue.current||ue.current(),D&&(null==(e=re.current)||null==e.focus||e.focus(B),re.current=null)}));(0,a.useEffect)((()=>{t&&X&&oe()}),[t,X,oe]),(0,a.useEffect)((()=>{ne&&se()}),[ne,se]),(0,f.Z)((()=>{se()}));const ie=(0,m.Z)((()=>{if(!P||!Q()||!J.isTopModal())return;const e=o(null==q?void 0:q.document);J.dialog&&e&&!(0,s.Z)(J.dialog,e)&&J.dialog.focus()})),ce=(0,m.Z)((e=>{e.target===e.currentTarget&&(null==R||R(e),!0===k&&W())})),ae=(0,m.Z)((e=>{N&&(0,E.k)(e)&&J.isTopModal()&&(null==O||O(e),e.defaultPrevented||W())})),ue=(0,a.useRef)(),le=(0,a.useRef)();if(!X)return null;const de=Object.assign({role:r,ref:J.setDialogRef,"aria-modal":"dialog"===r||void 0},Y,{style:w,className:u,tabIndex:-1});let fe=F?F(de):(0,b.jsx)("div",Object.assign({},de,{children:a.cloneElement(C,{role:"document"})}));fe=(0,Z.sD)(j,T,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!t,onExit:I,onExiting:z,onExited:(...e)=>{te(!0),null==V||V(...e)},onEnter:U,onEntering:K,onEntered:G,children:fe});let pe=null;return k&&(pe=A({ref:J.setBackdropRef,onClick:ce}),pe=(0,Z.sD)(S,$,{in:!!t,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:pe})),(0,b.jsx)(b.Fragment,{children:l().createPortal((0,b.jsxs)(b.Fragment,{children:[pe,fe]}),X)})}));w.displayName="Modal";var C=Object.assign(w,{Manager:v.Z})},24900:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(56341);const o=(0,t(3125).PB)("modal-open");var s=class{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:t=!1}={}){this.handleContainerOverflow=n,this.isRTL=t,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();e.style={overflow:s.style.overflow,[t]:s.style[t]},e.scrollBarWidth&&(n[t]=`${parseInt((0,r.Z)(s,t)||"0",10)+e.scrollBarWidth}px`),s.setAttribute(o,""),(0,r.Z)(s,n)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(o),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return-1!==n||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),n}remove(e){const n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}},3945:function(e,n,t){"use strict";var r=t(94112),o=t(65162),s=t(41375);n.Z=function({children:e,in:n,onExited:t,mountOnEnter:i,unmountOnExit:c}){const a=(0,s.useRef)(null),u=(0,s.useRef)(n),l=(0,r.Z)(t);(0,s.useEffect)((()=>{n?u.current=!0:l(a.current)}),[n,l]);const d=(0,o.Z)(a,e.ref),f=(0,s.cloneElement)(e,{ref:d});return n?f:c||!u.current&&i?null:f}},45057:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(70237),o=t(69818),s=t(41375),i=t(76293);const c=(e,n)=>o.Z?null==e?(n||(0,r.Z)()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function a(e,n){const t=(0,i.Z)(),[r,o]=(0,s.useState)((()=>c(e,null==t?void 0:t.document)));if(!r){const n=c(e);n&&o(n)}return(0,s.useEffect)((()=>{n&&r&&n(r)}),[n,r]),(0,s.useEffect)((()=>{const n=c(e);n!==r&&o(n)}),[e,r]),r}},76293:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(41375),o=t(69818);const s=(0,r.createContext)(o.Z?window:void 0);function i(){return(0,r.useContext)(s)}s.Provider},32909:function(e,n,t){"use strict";function r(e){return"Escape"===e.code||27===e.keyCode}t.d(n,{k:function(){return r}})},51190:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&e.push(i)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)r.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},8832:function(e,n,t){"use strict";var r=t(69818),o=!1,s=!1;try{var i={get passive(){return o=!0},get once(){return s=o=!0}};r.Z&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(e){}n.ZP=function(e,n,t,r){if(r&&"boolean"!=typeof r&&!s){var i=r.once,c=r.capture,a=t;!s&&i&&(a=t.__once||function e(r){this.removeEventListener(n,e,c),t.call(this,r)},t.__once=a),e.addEventListener(n,a,o?r:c)}e.addEventListener(n,t,r)}},69818:function(e,n){"use strict";n.Z=!("undefined"==typeof window||!window.document||!window.document.createElement)},65122:function(e,n,t){"use strict";function r(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}t.d(n,{Z:function(){return r}})},56341:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(70237);var o=/([A-Z])/g,s=/^ms-/;function i(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(s,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,a=function(e,n){var t="",o="";if("string"==typeof n)return e.style.getPropertyValue(i(n))||function(e,n){return function(e){var n=(0,r.Z)(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}(e).getPropertyValue(i(n));Object.keys(n).forEach((function(r){var s=n[r];s||0===s?function(e){return!(!e||!c.test(e))}(r)?o+=r+"("+s+") ":t+=i(r)+": "+s+";":e.style.removeProperty(i(r))})),o&&(t+="transform: "+o+";"),e.style.cssText+=";"+t}},21398:function(e,n,t){"use strict";function r(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}t.d(n,{Z:function(){return r}})},44161:function(e,n,t){"use strict";var r=t(8832),o=t(69110);n.Z=function(e,n,t,s){return(0,r.ZP)(e,n,t,s),function(){(0,o.Z)(e,n,t,s)}}},70237:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},69658:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,n){return r(e.querySelectorAll(n))}},69110:function(e,n){"use strict";n.Z=function(e,n,t,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(n,t,o),t.__once&&e.removeEventListener(n,t.__once,o)}},43695:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(56341),o=t(44161);function s(e,n,t,s){var i,c,a;null==t&&(i=e,a=-1===(c=(0,r.Z)(i,"transitionDuration")||"").indexOf("ms")?1e3:1,t=parseFloat(c)*a||0);var u=function(e,n,t){void 0===t&&(t=5);var r=!1,s=setTimeout((function(){r||function(e,n,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent("transitionend",t,r),e.dispatchEvent(o)}}(e,0,!0)}),n+t),i=(0,o.Z)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(s),i()}}(e,t,s),l=(0,o.Z)(e,"transitionend",n);return function(){u(),l()}}},76745:function(e,n,t){"use strict";var r=t(24585);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,s,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:o};return t.PropTypes=t,t}},66159:function(e,n,t){e.exports=t(76745)()},24585:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},87270:function(e,n,t){"use strict";var r=t(41375),o=t(94112),s=t(5610),i=t(12082),c=t(16354);const a=r.forwardRef((({closeLabel:e="Close",closeVariant:n,closeButton:t=!1,onHide:a,children:u,...l},d)=>{const f=(0,r.useContext)(i.Z),p=(0,o.Z)((()=>{null==f||f.onHide(),null==a||a()}));return(0,c.jsxs)("div",{ref:d,...l,children:[u,t&&(0,c.jsx)(s.Z,{"aria-label":e,variant:n,onClick:p})]})}));n.Z=a},93164:function(e,n,t){"use strict";t.d(n,{Z:function(){return m},t:function(){return p}});var r=t(21398),o=t(56341),s=t(69658);function i(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var c=t(24900);const a=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",u=".sticky-top",l=".navbar-toggler";class d extends c.Z{adjustAndStore(e,n,t){const r=n.style[e];n.dataset[e]=r,(0,o.Z)(n,{[e]:`${parseFloat((0,o.Z)(n,e))+t}px`})}restore(e,n){const t=n.dataset[e];void 0!==t&&(delete n.dataset[e],(0,o.Z)(n,{[e]:t}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();var t,o;if(o="modal-open",(t=n).classList?t.classList.add(o):(0,r.Z)(t,o)||("string"==typeof t.className?t.className=t.className+" "+o:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+o)),!e.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";(0,s.Z)(n,a).forEach((n=>this.adjustAndStore(i,n,e.scrollBarWidth))),(0,s.Z)(n,u).forEach((n=>this.adjustAndStore(c,n,-e.scrollBarWidth))),(0,s.Z)(n,l).forEach((n=>this.adjustAndStore(c,n,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();var t,r;r="modal-open",(t=n).classList?t.classList.remove(r):"string"==typeof t.className?t.className=i(t.className,r):t.setAttribute("class",i(t.className&&t.className.baseVal||"",r));const o=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";(0,s.Z)(n,a).forEach((e=>this.restore(o,e))),(0,s.Z)(n,u).forEach((e=>this.restore(c,e))),(0,s.Z)(n,l).forEach((e=>this.restore(c,e)))}}let f;function p(e){return f||(f=new d(e)),f}var m=d},5610:function(e,n,t){"use strict";var r=t(66159),o=t.n(r),s=t(41375),i=t(51190),c=t.n(i),a=t(16354);const u={"aria-label":o().string,onClick:o().func,variant:o().oneOf(["white"])},l=s.forwardRef((({className:e,variant:n,"aria-label":t="Close",...r},o)=>(0,a.jsx)("button",{ref:o,type:"button",className:c()("btn-close",n&&`btn-close-${n}`,e),"aria-label":t,...r})));l.displayName="CloseButton",l.propTypes=u,n.Z=l},83529:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var r=t(51190),o=t.n(r),s=t(41375),i=t(28364),c=t(16354);function a({as:e,bsPrefix:n,className:t,...r}){n=(0,i.vE)(n,"col");const s=(0,i.pi)(),c=(0,i.zG)(),a=[],u=[];return s.forEach((e=>{const t=r[e];let o,s,i;delete r[e],"object"==typeof t&&null!=t?({span:o,offset:s,order:i}=t):o=t;const l=e!==c?`-${e}`:"";o&&a.push(!0===o?`${n}${l}`:`${n}${l}-${o}`),null!=i&&u.push(`order${l}-${i}`),null!=s&&u.push(`offset${l}-${s}`)})),[{...r,className:o()(t,...a,...u)},{as:e,bsPrefix:n,spans:a}]}const u=s.forwardRef(((e,n)=>{const[{className:t,...r},{as:s="div",bsPrefix:i,spans:u}]=a(e);return(0,c.jsx)(s,{...r,ref:n,className:o()(t,!u.length&&i)})}));u.displayName="Col",n.Z=u},33733:function(e,n,t){"use strict";var r=t(51190),o=t.n(r),s=t(41375),i=t(28364),c=t(16354);const a=s.forwardRef((({bsPrefix:e,fluid:n=!1,as:t="div",className:r,...s},a)=>{const u=(0,i.vE)(e,"container"),l="string"==typeof n?`-${n}`:"-fluid";return(0,c.jsx)(t,{ref:a,...s,className:o()(r,n?`${u}${l}`:u)})}));a.displayName="Container",n.Z=a},40918:function(e,n,t){"use strict";var r=t(51190),o=t.n(r),s=t(41375),i=t(46575),c=t(24059),a=t(23968),u=t(9715),l=t(16354);const d={[i.d0]:"show",[i.cn]:"show"},f=s.forwardRef((({className:e,children:n,transitionClasses:t={},onEnter:r,...i},f)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},m=(0,s.useCallback)(((e,n)=>{(0,a.Z)(e),null==r||r(e,n)}),[r]);return(0,l.jsx)(u.Z,{ref:f,addEndListener:c.Z,...p,onEnter:m,childRef:n.ref,children:(r,i)=>s.cloneElement(n,{...i,className:o()("fade",e,n.props.className,d[r],t[r])})})}));f.displayName="Fade",n.Z=f},89852:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var r,o=t(51190),s=t.n(o),i=t(8832),c=t(69818),a=t(70237),u=t(69110);function l(e){if((!r&&0!==r||e)&&c.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var d=t(59706),f=t(94112),p=t(65162),m=t(8120),v=t(43695),h=t(41375),g=t(79441),Z=t(93164),E=t(40918),b=t(37222),y=t(12082),x=t(6801),w=t(19404),C=t(63121),k=t(76635),N=t(28364),R=t(16354);function O(e){return(0,R.jsx)(E.Z,{...e,timeout:null})}function j(e){return(0,R.jsx)(E.Z,{...e,timeout:null})}const T=h.forwardRef((({bsPrefix:e,className:n,style:t,dialogClassName:r,contentClassName:o,children:E,dialogAs:b=x.Z,"aria-labelledby":w,"aria-describedby":C,"aria-label":k,show:T=!1,animation:S=!0,backdrop:$=!0,keyboard:L=!0,onEscapeKeyDown:P,onShow:D,onHide:B,container:F,autoFocus:A=!0,enforceFocus:M=!0,restoreFocus:_=!0,restoreFocusOptions:H,onEntered:W,onExit:I,onExiting:V,onEnter:z,onEntering:U,onExited:K,backdropClassName:G,manager:Y,...q},X)=>{const[J,Q]=(0,h.useState)({}),[ee,ne]=(0,h.useState)(!1),te=(0,h.useRef)(!1),re=(0,h.useRef)(!1),oe=(0,h.useRef)(null),[se,ie]=(0,d.Z)(),ce=(0,p.Z)(X,ie),ae=(0,f.Z)(B),ue=(0,N.SC)();e=(0,N.vE)(e,"modal");const le=(0,h.useMemo)((()=>({onHide:ae})),[ae]);function de(){return Y||(0,Z.t)({isRTL:ue})}function fe(e){if(!c.Z)return;const n=de().getScrollbarWidth()>0,t=e.scrollHeight>(0,a.Z)(e).documentElement.clientHeight;Q({paddingRight:n&&!t?l():void 0,paddingLeft:!n&&t?l():void 0})}const pe=(0,f.Z)((()=>{se&&fe(se.dialog)}));(0,m.Z)((()=>{(0,u.Z)(window,"resize",pe),null==oe.current||oe.current()}));const me=()=>{te.current=!0},ve=e=>{te.current&&se&&e.target===se.dialog&&(re.current=!0),te.current=!1},he=()=>{ne(!0),oe.current=(0,v.Z)(se.dialog,(()=>{ne(!1)}))},ge=e=>{"static"!==$?re.current||e.target!==e.currentTarget?re.current=!1:null==B||B():(e=>{e.target===e.currentTarget&&he()})(e)},Ze=(0,h.useCallback)((n=>(0,R.jsx)("div",{...n,className:s()(`${e}-backdrop`,G,!S&&"show")})),[S,G,e]),Ee={...t,...J};return Ee.display="block",(0,R.jsx)(y.Z.Provider,{value:le,children:(0,R.jsx)(g.Z,{show:T,ref:ce,backdrop:$,container:F,keyboard:!0,autoFocus:A,enforceFocus:M,restoreFocus:_,restoreFocusOptions:H,onEscapeKeyDown:e=>{L?null==P||P(e):(e.preventDefault(),"static"===$&&he())},onShow:D,onHide:B,onEnter:(e,n)=>{e&&fe(e),null==z||z(e,n)},onEntering:(e,n)=>{null==U||U(e,n),(0,i.ZP)(window,"resize",pe)},onEntered:W,onExit:e=>{null==oe.current||oe.current(),null==I||I(e)},onExiting:V,onExited:e=>{e&&(e.style.display=""),null==K||K(e),(0,u.Z)(window,"resize",pe)},manager:de(),transition:S?O:void 0,backdropTransition:S?j:void 0,renderBackdrop:Ze,renderDialog:t=>(0,R.jsx)("div",{role:"dialog",...t,style:Ee,className:s()(n,e,ee&&`${e}-static`,!S&&"show"),onClick:$?ge:void 0,onMouseUp:ve,"aria-label":k,"aria-labelledby":w,"aria-describedby":C,children:(0,R.jsx)(b,{...q,onMouseDown:me,className:r,contentClassName:o,children:E})})})})}));T.displayName="Modal";var S=Object.assign(T,{Body:b.Z,Header:C.Z,Title:k.Z,Footer:w.Z,Dialog:x.Z,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},37222:function(e,n,t){"use strict";var r=t(57894);n.Z=(0,r.Z)("modal-body")},12082:function(e,n,t){"use strict";const r=t(41375).createContext({onHide(){}});n.Z=r},6801:function(e,n,t){"use strict";var r=t(51190),o=t.n(r),s=t(41375),i=t(28364),c=t(16354);const a=s.forwardRef((({bsPrefix:e,className:n,contentClassName:t,centered:r,size:s,fullscreen:a,children:u,scrollable:l,...d},f)=>{const p=`${e=(0,i.vE)(e,"modal")}-dialog`,m="string"==typeof a?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return(0,c.jsx)("div",{...d,ref:f,className:o()(p,n,s&&`${e}-${s}`,r&&`${p}-centered`,l&&`${p}-scrollable`,a&&m),children:(0,c.jsx)("div",{className:o()(`${e}-content`,t),children:u})})}));a.displayName="ModalDialog",n.Z=a},19404:function(e,n,t){"use strict";var r=t(57894);n.Z=(0,r.Z)("modal-footer")},63121:function(e,n,t){"use strict";var r=t(51190),o=t.n(r),s=t(41375),i=t(28364),c=t(87270),a=t(16354);const u=s.forwardRef((({bsPrefix:e,className:n,closeLabel:t="Close",closeButton:r=!1,...s},u)=>(e=(0,i.vE)(e,"modal-header"),(0,a.jsx)(c.Z,{ref:u,...s,className:o()(n,e),closeLabel:t,closeButton:r}))));u.displayName="ModalHeader",n.Z=u},76635:function(e,n,t){"use strict";var r=t(57894);const o=(0,t(31614).Z)("h4");n.Z=(0,r.Z)("modal-title",{Component:o})},98318:function(e,n,t){"use strict";var r=t(51190),o=t.n(r),s=t(41375),i=t(28364),c=t(16354);const a=s.forwardRef((({bsPrefix:e,className:n,as:t="div",...r},s)=>{const a=(0,i.vE)(e,"row"),u=(0,i.pi)(),l=(0,i.zG)(),d=`${a}-cols`,f=[];return u.forEach((e=>{const n=r[e];let t;delete r[e],null!=n&&"object"==typeof n?({cols:t}=n):t=n;const o=e!==l?`-${e}`:"";null!=t&&f.push(`${d}${o}-${t}`)})),(0,c.jsx)(t,{ref:s,...r,className:o()(n,a,...f)})}));a.displayName="Row",n.Z=a},28364:function(e,n,t){"use strict";t.d(n,{Hz:function(){return s},SC:function(){return p},cs:function(){return i},pi:function(){return d},vE:function(){return l},zG:function(){return f}});var r=t(41375),o=t(16354);const s=["xxl","xl","lg","md","sm","xs"],i="xs",c=r.createContext({prefixes:{},breakpoints:s,minBreakpoint:i}),{Consumer:a,Provider:u}=c;function l(e,n){const{prefixes:t}=(0,r.useContext)(c);return e||t[n]||n}function d(){const{breakpoints:e}=(0,r.useContext)(c);return e}function f(){const{minBreakpoint:e}=(0,r.useContext)(c);return e}function p(){const{dir:e}=(0,r.useContext)(c);return"rtl"===e}n.ZP=function({prefixes:e={},breakpoints:n=s,minBreakpoint:t=i,dir:c,children:a}){const l=(0,r.useMemo)((()=>({prefixes:{...e},breakpoints:n,minBreakpoint:t,dir:c})),[e,n,t,c]);return(0,o.jsx)(u,{value:l,children:a})}},9715:function(e,n,t){"use strict";var r=t(41375),o=t.n(r),s=t(46575),i=t(65162),c=t(7711),a=t(16354);const u=o().forwardRef((({onEnter:e,onEntering:n,onEntered:t,onExit:u,onExiting:l,onExited:d,addEndListener:f,children:p,childRef:m,...v},h)=>{const g=(0,r.useRef)(null),Z=(0,i.Z)(g,m),E=e=>{Z((0,c.Z)(e))},b=e=>n=>{e&&g.current&&e(g.current,n)},y=(0,r.useCallback)(b(e),[e]),x=(0,r.useCallback)(b(n),[n]),w=(0,r.useCallback)(b(t),[t]),C=(0,r.useCallback)(b(u),[u]),k=(0,r.useCallback)(b(l),[l]),N=(0,r.useCallback)(b(d),[d]),R=(0,r.useCallback)(b(f),[f]);return(0,a.jsx)(s.ZP,{ref:h,...v,onEnter:y,onEntered:w,onEntering:x,onExit:C,onExited:N,onExiting:k,addEndListener:R,nodeRef:g,children:"function"==typeof p?(e,n)=>p(e,{...n,ref:E}):o().cloneElement(p,{ref:E})})}));n.Z=u},57894:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(51190),o=t.n(r),s=/-(.)/g,i=t(41375),c=t(28364),a=t(16354);const u=e=>{return e[0].toUpperCase()+(n=e,n.replace(s,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function l(e,{displayName:n=u(e),Component:t,defaultProps:r}={}){const s=i.forwardRef((({className:n,bsPrefix:s,as:i=t||"div",...u},l)=>{const d={...r,...u},f=(0,c.vE)(s,e);return(0,a.jsx)(i,{ref:l,className:o()(n,f),...d})}));return s.displayName=n,s}},31614:function(e,n,t){"use strict";var r=t(41375),o=t(51190),s=t.n(o),i=t(16354);n.Z=e=>r.forwardRef(((n,t)=>(0,i.jsx)("div",{...n,ref:t,className:s()(n.className,e)})))},7711:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(41099),o=t.n(r);function s(e){return e&&"setState"in e?o().findDOMNode(e):null!=e?e:null}},24059:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(56341),o=t(43695);function s(e,n){const t=(0,r.Z)(e,n)||"",o=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*o}function i(e,n){const t=s(e,"transitionDuration"),r=s(e,"transitionDelay"),i=(0,o.Z)(e,(t=>{t.target===e&&(i(),n(t))}),t+r)}},23968:function(e,n,t){"use strict";function r(e){e.offsetHeight}t.d(n,{Z:function(){return r}})}}]);