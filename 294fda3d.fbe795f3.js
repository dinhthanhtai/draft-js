/*! For license information please see 294fda3d.fbe795f3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(191),n(190)),c={id:"api-reference-character-metadata",title:"CharacterMetadata"},i={id:"api-reference-character-metadata",title:"CharacterMetadata",description:"CharacterMetadata is an Immutable",source:"@site/../docs/APIReference-CharacterMetadata.md",permalink:"/docs/api-reference-character-metadata",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-CharacterMetadata.md",lastUpdatedBy:"Dominic Gannaway",lastUpdatedAt:1601037515,sidebar:"docs",previous:{title:"ContentBlock",permalink:"/docs/api-reference-content-block"},next:{title:"Entity",permalink:"/docs/api-reference-entity"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Static Methods",id:"static-methods",children:[{value:"<code>create()</code>",id:"create",children:[]},{value:"<code>applyStyle()</code>",id:"applystyle",children:[]},{value:"<code>removeStyle()</code>",id:"removestyle",children:[]},{value:"<code>applyEntity()</code>",id:"applyentity",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>getStyle()</code>",id:"getstyle",children:[]},{value:"<code>hasStyle()</code>",id:"hasstyle",children:[]},{value:"<code>getEntity()</code>",id:"getentity",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," is an Immutable\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Record"}),"Record"),"\nthat represents inline style and entity information for a single character."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," objects are aggressively pooled and shared. If two characters\nhave the same inline style and entity, they are represented with the same\n",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," object. We therefore need only as many objects as combinations\nof utilized inline style sets with entity keys, keeping our memory footprint\nsmall even as the contents grow in size and complexity."),Object(o.b)("p",null,"To that end, you should create or apply changes to ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," objects\nvia the provided set of static methods, which will ensure that pooling is utilized."),Object(o.b)("p",null,"Most Draft use cases are unlikely to use these static methods, since most common edit\noperations are already implemented and available via utility modules. The getter\nmethods, however, may come in handy at render time."),Object(o.b)("p",null,"See the API reference on\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-content-block#representing-styles-and-entities"}),"ContentBlock"),"\nfor information on how ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," is used within ",Object(o.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Static Methods")),Object(o.b)("ul",{class:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#create"},Object(o.b)("pre",null,"static create(...): CharacterMetadata"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#applystyle"},Object(o.b)("pre",null,"static applyStyle(...): CharacterMetadata"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#removestyle"},Object(o.b)("pre",null,"static removeStyle(...): CharacterMetadata"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#applyentity"},Object(o.b)("pre",null,"static applyEntity(...): CharacterMetadata")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Methods")),Object(o.b)("ul",{class:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#getstyle"},Object(o.b)("pre",null,"getStyle(): DraftInlineStyle"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#hasstyle"},Object(o.b)("pre",null,"hasStyle(style: string): boolean"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#getentity"},Object(o.b)("pre",null,"getEntity(): ?string")))),Object(o.b)("h2",{id:"static-methods"},"Static Methods"),Object(o.b)("p",null,"Under the hood, these methods will utilize pooling to return a matching object,\nor return a new object if none exists."),Object(o.b)("h3",{id:"create"},Object(o.b)("inlineCode",{parentName:"h3"},"create()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static create(config?: CharacterMetadataConfig): CharacterMetadata\n")),Object(o.b)("p",null,"Generates a ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," object from the provided configuration. This\nfunction should be used in lieu of a constructor."),Object(o.b)("p",null,"The configuration will be used to check whether a pooled match for this\nconfiguration already exists. If so, the pooled object will be returned.\nOtherwise, a new ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," will be pooled for this configuration,\nand returned."),Object(o.b)("h3",{id:"applystyle"},Object(o.b)("inlineCode",{parentName:"h3"},"applyStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static applyStyle(\n  record: CharacterMetadata,\n  style: string\n): CharacterMetadata\n")),Object(o.b)("p",null,"Apply an inline style to this ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata"),"."),Object(o.b)("h3",{id:"removestyle"},Object(o.b)("inlineCode",{parentName:"h3"},"removeStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static removeStyle(\n  record: CharacterMetadata,\n  style: string\n): CharacterMetadata\n")),Object(o.b)("p",null,"Remove an inline style from this ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata"),"."),Object(o.b)("h3",{id:"applyentity"},Object(o.b)("inlineCode",{parentName:"h3"},"applyEntity()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static applyEntity(\n  record: CharacterMetadata,\n  entityKey: ?string\n): CharacterMetadata\n")),Object(o.b)("p",null,"Apply an entity key -- or provide ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to remove an entity key -- on this\n",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata"),"."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"getstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"getStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getStyle(): DraftInlineStyle\n")),Object(o.b)("p",null,"Returns the ",Object(o.b)("inlineCode",{parentName:"p"},"DraftInlineStyle")," for this character, an ",Object(o.b)("inlineCode",{parentName:"p"},"OrderedSet")," of strings\nthat represents the inline style to apply for the character at render time."),Object(o.b)("h3",{id:"hasstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"hasStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"hasStyle(style: string): boolean\n")),Object(o.b)("p",null,"Returns whether this character has the specified style."),Object(o.b)("h3",{id:"getentity"},Object(o.b)("inlineCode",{parentName:"h3"},"getEntity()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getEntity(): ?string\n")),Object(o.b)("p",null,"Returns the entity key (if any) for this character, as mapped to the global set of\nentities tracked by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntity.js"}),Object(o.b)("inlineCode",{parentName:"a"},"Entity")),"\nmodule."),Object(o.b)("p",null,"By tracking a string key here, we can keep the corresponding metadata separate\nfrom the character representation."),Object(o.b)("p",null,"If null, no entity is applied for this character."))}s.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}function v(){}function C(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=C.prototype=new v;w.constructor=C,r(w,g.prototype),w.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:S.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,x=[];function _(e,t,n,r){if(x.length){var a=x.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return r(a,t,""===n?"."+I(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+I(i=t[u],u);l+=e(i,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+I(i,u++),r,a);else if("object"===i)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(P,"$&/")+"/"),$(e,D,t=_(t,o,r,a)),R(t)}var U={current:null};function B(){var e=U.current;if(null===e)throw Error(m(321));return e}var q={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,T,t=_(null,null,t,n)),R(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!M(e))throw Error(m(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=u,t.PureComponent=C,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var a=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)k.call(t,s)&&!N.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return B().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,n){return B().useReducer(e,t,n)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);