"use strict";(self["webpackChunkshihci_shop"]=self["webpackChunkshihci_shop"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(7045),v=n(7976),y=n(9518),_=n(7674),w=n(5112),b=n(9711),E=n(9909),T=E.enforce,I=E.get,C=c.Int8Array,S=C&&C.prototype,A=c.Uint8ClampedArray,k=A&&A.prototype,O=C&&y(C),R=S&&y(S),N=Object.prototype,x=c.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!_&&"Opera"!==d(c.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(F,t)||h(V,t)},$=function(e){var t=y(e);if(l(t)){var n=I(t);return n&&h(n,L)?n[L]:$(t)}},B=function(e){if(!l(e))return!1;var t=d(e);return h(F,t)||h(V,t)},q=function(e){if(B(e))return e;throw x("Target is not a typed array")},z=function(e){if(u(e)&&(!_||v(O,e)))return e;throw x(f(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}R[e]&&!n||g(R,e,n?t:M&&S[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(_){if(n)for(r in F)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(O[e]&&!n)return;try{return g(O,e,n?t:M&&O[e]||t)}catch(s){}}for(r in F)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(O)||O===Function.prototype)&&(O=function(){throw x("Incorrect invocation")},M))for(r in F)c[r]&&_(c[r],O);if((!M||!R||R===N)&&(R=O.prototype,M))for(r in F)c[r]&&_(c[r].prototype,R);if(M&&y(k)!==R&&_(k,R),a&&!h(R,D))for(r in U=!0,m(R,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),F)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:O,TypedArrayPrototype:R}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,i=r(t),s=new e(i);while(i>n)s[n]=t[n++];return s}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},1572:function(e,t,n){var r=n(6244),i=n(9303),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw g(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},s=function(e){return _.has(e)}}else{var w=d("state");f[w]=!0,r=function(e,t){if(l(e,w))throw g(p);return t.facade=e,u(e,w,t),t},i=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(_,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293),s=n(7854),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4599:function(e,t,n){var r=n(7593),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},1439:function(e,t,n){var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(e,t,n){var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},5315:function(e,t,n){var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},2801:function(e,t,n){var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",v=s("Error"),y=s(m),_=function(){u(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),C=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||C},{DOMException:C?_:y});var S=s(m),A=S.prototype;if(A.constructor!==S)for(var k in g||a(A,"constructor",o(1,S)),d)if(c(d,k)){var O=d[k],R=O.s;c(S,R)||a(S,R,o(6,O.c))}},6229:function(e,t,n){var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,n){var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,n){var r=n(9781),i=n(1702),s=n(7045),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},223:function(e,t,n){n.d(t,{BH:function(){return _},L:function(){return c},LL:function(){return N},P0:function(){return m},Pz:function(){return y},Sg:function(){return w},UG:function(){return T},ZR:function(){return R},aH:function(){return v},b$:function(){return C},eu:function(){return k},hl:function(){return A},m9:function(){return z},ne:function(){return j},pd:function(){return V},q4:function(){return g},ru:function(){return I},tV:function(){return u},uI:function(){return E},vZ:function(){return L},w1:function(){return S},xO:function(){return U},xb:function(){return P},z$:function(){return b},zd:function(){return F}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/shihciShop/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function x(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(M(n)&&M(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function F(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function V(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=B(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){n.d(t,{Bj:function(){return s},Fl:function(){return He},IU:function(){return Re},Jd:function(){return I},PG:function(){return Se},SU:function(){return $e},Um:function(){return Te},WL:function(){return qe},X$:function(){return k},X3:function(){return Oe},XI:function(){return Fe},Xl:function(){return Ne},dq:function(){return Me},iH:function(){return Ue},j:function(){return S},lk:function(){return C},nZ:function(){return a},qj:function(){return Ee},qq:function(){return w},yT:function(){return ke}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}function a(){return i}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&g)>0,l=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~g,i.n&=~g}t.length=n}},f=new WeakMap;let p=0,g=1;const m=30;let v;const y=Symbol(""),_=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=v,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=v,v=this,E=!0,g=1<<++p,p<=m?h(this):b(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,v=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const T=[];function I(){T.push(E),E=!1}function C(){const e=T.pop();E=void 0===e||e}function S(e,t,n){if(E&&v){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;A(r,i)}}function A(e,t){let n=!1;p<=m?l(e)||(e.n|=g,n=!u(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function k(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(y)),(0,r._N)(e)&&u.push(a.get(_)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(y)),(0,r._N)(e)&&u.push(a.get(_)));break;case"set":(0,r._N)(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&O(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);O(c(e))}}function O(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==v||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=V(),P=V(!1,!0),L=V(!0),M=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Re(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Re(this)[t].apply(this,e);return C(),n}})),e}function F(e){const t=Re(this);return S(t,"has",e),t.hasOwnProperty(e)}function V(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?_e:ye:t?ve:me).get(n))return n;const o=(0,r.kJ)(n);if(!e){if(o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);if("hasOwnProperty"===i)return F}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?x.has(i):N(i))?a:(e||S(n,"get",i),t?a:Me(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ie(a):Ee(a):a)}}const j=B(),$=B(!0);function B(e=!1){return function(t,n,i,s){let o=t[n];if(Ae(o)&&Me(o)&&!Me(i))return!1;if(!e&&(ke(i)||Ae(i)||(o=Re(o),i=Re(i)),!(0,r.kJ)(t)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Re(s)&&(a?(0,r.aU)(i,o)&&k(t,"set",n,i,o):k(t,"add",n,i)),c}}function q(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&k(e,"delete",t,void 0,i),s}function z(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&x.has(t)||S(e,"has",t),n}function H(e){return S(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const K={get:D,set:j,deleteProperty:q,has:z,ownKeys:H},W={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},G=(0,r.l7)({},K,{get:P,set:$}),Q=e=>e,J=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Re(e),s=Re(t);n||(t!==s&&S(i,"get",t),S(i,"get",s));const{has:o}=J(i),a=r?Q:n?De:xe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=Re(n),i=Re(e);return t||(e!==i&&S(r,"has",e),S(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&S(Re(e),"iterate",y),Reflect.get(e,"size",e)}function ee(e){e=Re(e);const t=Re(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),k(t,"add",e,e)),this}function te(e,t){t=Re(t);const n=Re(this),{has:i,get:s}=J(n);let o=i.call(n,e);o||(e=Re(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&k(n,"set",e,t,a):k(n,"add",e,t),this}function ne(e){const t=Re(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=Re(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&k(t,"delete",e,void 0,s),o}function re(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&k(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Re(s),a=t?Q:e?De:xe;return!e&&S(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const s=this["__v_raw"],o=Re(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?Q:t?De:xe;return!t&&S(o,"iterate",u?_:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return X(this,e)},get size(){return Z(this)},has:Y,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return Z(this)},has:Y,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!1)},r={get(e){return X(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return Y.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[ce,ue,le,he]=ae();function de(e,t){const n=t?e?he:le:e?ue:ce;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},ge={get:de(!0,!1)};const me=new WeakMap,ve=new WeakMap,ye=new WeakMap,_e=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function Ee(e){return Ae(e)?e:Ce(e,!1,K,fe,me)}function Te(e){return Ce(e,!1,G,pe,ve)}function Ie(e){return Ce(e,!0,W,ge,ye)}function Ce(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Se(e){return Ae(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Oe(e){return Se(e)||Ae(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Ne(e){return(0,r.Nj)(e,"__v_skip",!0),e}const xe=e=>(0,r.Kn)(e)?Ee(e):e,De=e=>(0,r.Kn)(e)?Ie(e):e;function Pe(e){E&&v&&(e=Re(e),A(e.dep||(e.dep=c())))}function Le(e,t){e=Re(e);const n=e.dep;n&&O(n)}function Me(e){return!(!e||!0!==e.__v_isRef)}function Ue(e){return Ve(e,!1)}function Fe(e){return Ve(e,!0)}function Ve(e,t){return Me(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:xe(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||ke(e)||Ae(e);e=t?e:Re(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xe(e),Le(this,e))}}function $e(e){return Me(e)?e.value:e}const Be={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qe(e){return Se(e)?e:new Proxy(e,Be)}class ze{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Re(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function He(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new ze(i,s,o||!s,n);return a}},3396:function(e,t,n){n.d(t,{$d:function(){return o},Cn:function(){return M},FN:function(){return yn},Fl:function(){return Un},HY:function(){return Mt},JJ:function(){return ut},Jd:function(){return Ae},Ko:function(){return Fe},P$:function(){return ie},Q6:function(){return le},U2:function(){return oe},Uk:function(){return on},Us:function(){return Rt},Wm:function(){return tn},Xn:function(){return Ce},Y3:function(){return y},Y8:function(){return ee},YP:function(){return W},_:function(){return en},aZ:function(){return he},bv:function(){return Ie},dD:function(){return L},f3:function(){return lt},h:function(){return Fn},iD:function(){return Wt},ic:function(){return Se},j4:function(){return Gt},kq:function(){return cn},nJ:function(){return ne},nK:function(){return ue},uE:function(){return an},up:function(){return Pe},w5:function(){return U},wg:function(){return Bt},wy:function(){return Y}});n(7658);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(e){const t=v||m;return e?t.then(this?e.bind(this):e):t}function _(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=S(h[r]);i<e?t=r+1:n=r}return t}function w(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(_(e.id),0,e),b())}function b(){u||l||(l=!0,v=m.then(k))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),b()}function I(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function C(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>S(e)-S(t))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const S=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function k(e){l=!1,u=!0,h.sort(A);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,C(e),u=!1,v=null,(h.length||f.length)&&k(e)}}function O(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function R(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let x=null,D=null;function P(e){const t=x;return x=e,D=e&&e.type.__scopeId||null,t}function L(e){D=e}function M(){D=null}function U(e,t=x,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ht(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&Ht(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function F(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e;let y,_;const w=P(e);try{if(4&n.shapeFlag){const e=s||r;y=un(d.call(e,e,f,o,g,p,m)),_=l}else{const e=t;0,y=un(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),_=t.props?l:V(l)}}catch(E){jt.length=0,a(E,e,1),y=tn(Ft)}let b=y;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(_=j(_,c)),b=sn(b,_))}return n.dirs&&(b=sn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,P(w),y}const V=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?B(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!N(n,s))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}const K={};function W(e,t,n){return G(e,t,n)}function G(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const d=(0,r.nZ)()===(null==(h=vn)?void 0:h.scope)?vn:null;let f,p,g=!1,m=!1;if((0,r.dq)(e)?(f=()=>e.value,g=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,g=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?X(e):(0,i.mf)(e)?s(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),o(e,d,3,[y])}:i.dG,t&&a){const e=f;f=()=>X(e())}let v,y=e=>{p=T.onStop=()=>{s(e,d,4)}};if(An){if(y=i.dG,t?n&&o(t,d,3,[f(),m?[]:void 0,y]):f(),"sync"!==c)return i.dG;{const e=jn();v=e.__watcherHandles||(e.__watcherHandles=[])}}let _=m?new Array(e.length).fill(K):K;const b=()=>{if(T.active)if(t){const e=T.run();(a||g||(m?e.some(((e,t)=>(0,i.aU)(e,_[t]))):(0,i.aU)(e,_)))&&(p&&p(),o(t,d,3,[e,_===K?void 0:m&&_[0]===K?[]:_,y]),_=e)}else T.run()};let E;b.allowRecurse=!!t,"sync"===c?E=b:"post"===c?E=()=>Ot(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),E=()=>w(b));const T=new r.qq(f,E);t?n?b():_=T.run():"post"===c?Ot(T.run.bind(T),d&&d.suspense):T.run();const I=()=>{T.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,T)};return v&&v.push(I),I}function Q(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?J(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=vn;En(this);const c=G(s,o.bind(r),n);return a?En(a):Tn(),c}function J(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function X(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))X(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)X(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{X(e,t)}));else if((0,i.PO)(e))for(const n in e)X(e[n],t);return e}function Y(e,t){const n=x;if(null===n)return e;const r=Pn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&X(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Z(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ie((()=>{e.isMounted=!0})),Ae((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},re={name:"BaseTransition",props:ne,setup(e,{slots:t}){const n=yn(),i=ee();let s;return()=>{const o=t.default&&le(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Ft){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ae(a);const l=ce(a);if(!l)return ae(a);const h=oe(l,c,i,n);ue(l,h);const d=n.subTree,f=d&&ce(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Ft&&(!Jt(l,f)||p)){const e=oe(f,c,i,n);if(ue(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},ae(a);"in-out"===u&&l.type!==Ft&&(e.delayLeave=(e,t,n)=>{const r=se(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ie=re;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oe(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:w}=t,b=String(e.key),E=se(n,e),T=(e,t)=>{e&&o(e,r,9,t)},I=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=v||u}t._leaveCb&&t._leaveCb(!0);const i=E[b];i&&Jt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||l,r=_||h,i=w||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?I(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?I(p,[t,o]):o()},clone(e){return oe(e,t,n,r)}};return C}function ae(e){if(fe(e))return e=sn(e),e.children=null,e}function ce(e){return fe(e)?e.children?e.children[0]:void 0:e}function ue(e,t){6&e.shapeFlag&&e.component?ue(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function le(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Mt?(128&o.patchFlag&&i++,r=r.concat(le(o.children,t,a))):(t||o.type!==Ft)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function he(e,t){return(0,i.mf)(e)?(()=>(0,i.l7)({name:e.name},t,{setup:e}))():e}const de=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,t){return(0,i.kJ)(e)?e.some((e=>pe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!(0,i.Kj)(e)&&e.test(t)}function ge(e,t){ve(e,"a",t)}function me(e,t){ve(e,"da",t)}function ve(e,t,n=vn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,r,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ye(r,t,n,e),e=e.parent}}function ye(e,t,n,r){const s=be(t,e,r,!0);ke((()=>{(0,i.Od)(r[t],s)}),n)}function _e(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function we(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=vn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),En(n);const s=o(t,n,e,i);return Tn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ee=e=>(t,n=vn)=>(!An||"sp"===e)&&be(e,((...e)=>t(...e)),n),Te=Ee("bm"),Ie=Ee("m"),Ce=Ee("bu"),Se=Ee("u"),Ae=Ee("bum"),ke=Ee("um"),Oe=Ee("sp"),Re=Ee("rtg"),Ne=Ee("rtc");function xe(e,t=vn){be("ec",e,t)}const De="components";function Pe(e,t){return Me(De,e,!0,t)||e}const Le=Symbol.for("v-ndc");function Me(e,t,n=!0,r=!1){const s=x||vn;if(s){const n=s.type;if(e===De){const e=Ln(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Ue(s[e]||n[e],t)||Ue(s.appContext[e],t);return!o&&r?n:o}}function Ue(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Fe(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ve=e=>e?In(e)?Pn(e)||e.proxy:Ve(e.parent):null,je=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ve(e.parent),$root:e=>Ve(e.root),$emit:e=>e.emit,$options:e=>Qe(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>Q.bind(e)}),$e=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Be={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if($e(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];ze&&(c[t]=0)}}const d=je[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return $e(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||$e(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(je,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qe(e){return(0,i.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let ze=!0;function He(e){const t=Qe(e),n=e.proxy,s=e.ctx;ze=!1,t.beforeCreate&&We(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:C,errorCaptured:S,serverPrefetch:A,expose:k,inheritAttrs:O,components:R,directives:N,filters:x}=t,D=null;if(h&&Ke(h,s,D),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ze=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Un({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ge(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{ut(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&We(d,e,"c"),P(Te,f),P(Ie,p),P(Ce,g),P(Se,m),P(ge,v),P(me,y),P(xe,S),P(Ne,I),P(Re,C),P(Ae,w),P(ke,E),P(Oe,A),(0,i.kJ)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=O&&(e.inheritAttrs=O),R&&(e.components=R),N&&(e.directives=N)}function Ke(e,t,n=i.dG){(0,i.kJ)(e)&&(e=et(e));for(const s in e){const n=e[s];let o;o=(0,i.Kn)(n)?"default"in n?lt(n.from||s,n.default,!0):lt(n.from||s):lt(n),(0,r.dq)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function We(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,r){const s=r.includes(".")?J(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&W(s,n)}else if((0,i.mf)(e))W(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ge(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&W(s,r,e)}else 0}function Qe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Je(u,e,a,!0))),Je(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function Je(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Je(e,s,n,!0),i&&i.forEach((t=>Je(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Xe[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Xe={data:Ye,props:rt,emits:rt,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:it,provide:Ye,inject:Ze};function Ye(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return nt(et(e),et(t))}function et(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,i.l7)(Object.create(null),e,t):t}function rt(e,t){return e?(0,i.kJ)(e)&&(0,i.kJ)(t)?[...new Set([...e,...t])]:(0,i.l7)(Object.create(null),qe(e),qe(null!=t?t:{})):t}function it(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function st(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ot=0;function at(e,t){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=st();const o=new Set;let a=!1;const c=s.app={_uid:ot++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:$n,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=tn(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Pn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){ct=c;try{return e()}finally{ct=null}}};return c}}let ct=null;function ut(e,t){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const r=vn||x;if(r||ct){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ct._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r&&r.proxy):t}else 0}function ht(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Xt,1),e.propsDefaults=Object.create(null),ft(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function dt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ft(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=pt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=pt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ft(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=pt(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function pt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(En(s),r=i[n]=e.call(null,t),Tn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function gt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=gt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);mt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(mt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const e=_t(Boolean,r.type),n=_t(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function mt(e){return"$"!==e[0]}function vt(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function yt(e,t){return vt(e)===vt(t)}function _t(e,t){return(0,i.kJ)(t)?t.findIndex((t=>yt(t,e))):(0,i.mf)(t)&&yt(t,e)?0:-1}const wt=e=>"_"===e[0]||"$stable"===e,bt=e=>(0,i.kJ)(e)?e.map(un):[un(e)],Et=(e,t,n)=>{if(t._n)return t;const r=U(((...e)=>bt(t(...e))),n);return r._c=!1,r},Tt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(wt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=Et(s,n,r);else if(null!=n){0;const e=bt(n);t[s]=()=>e}}},It=(e,t)=>{const n=bt(t);e.slots.default=()=>n},Ct=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Tt(t,e.slots={})}else e.slots={},t&&It(e,t);(0,i.Nj)(e.slots,Xt,1)},St=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Tt(t,s)),a=t}else t&&(It(e,t),a={default:1});if(o)for(const i in s)wt(i)||i in a||delete s[i]};function At(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>At(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(de(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Ot(r,n)):r()}else 0}}function kt(){}const Ot=H;function Rt(e){return Nt(e)}function Nt(e,t){kt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.dG,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Jt(e,t)&&(r=Y(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ut:y(e,t,n,r);break;case Ft:_(e,t,n,r);break;case Vt:null==e&&b(t,n,r,o);break;case Mt:P(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&At(l,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},k=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:g,props:m,shapeFlag:v,transition:y,dirs:_}=e;if(f=e.el=c(e.type,u,m&&m.is,m),8&v?d(f,e.children):16&v&&R(e.children,f,null,r,o,u&&"foreignObject"!==g,l,h),_&&Z(e,null,r,"created"),O(f,e,e.scopeId,l,r),m){for(const t in m)"value"===t||(0,i.Gg)(t)||a(f,t,null,m[t],u,e.children,r,o,X);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&fn(p,r,e)}_&&Z(e,null,r,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||w||_)&&Ot((()=>{p&&fn(p,r,e),w&&y.enter(f),_&&Z(e,null,r,"mounted")}),o)},O=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?ln(e[u]):un(e[u]);v(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,g=t.props||i.kT;let m;n&&xt(n,!1),(m=g.onVnodeBeforeUpdate)&&fn(m,n,t,e),f&&Z(t,e,n,"beforeUpdate"),n&&xt(n,!0);const v=s&&"foreignObject"!==t.type;if(h?x(e.dynamicChildren,h,u,n,r,v,o):c||B(e,t,u,null,n,r,v,o,!1),l>0){if(16&l)D(u,t,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||D(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Ot((()=>{m&&fn(m,n,t,e),f&&Z(t,e,n,"updated")}),r)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Mt||!Jt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),R(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Dt(e,t,!0)):B(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):U(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=mn(e,r,i);if(fe(e)&&(a.ctx.renderer=te),kn(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=tn(Ft);_(null,e,t,n)}}else V(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,xt(e,!1),n?(n.el=l.el,j(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&fn(t,u,n,l),xt(e,!0);const d=F(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&q(e,d.el),s&&Ot(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Ot((()=>fn(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=de(t);if(xt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&fn(r,d,t),xt(e,!0),c&&re){const n=()=>{e.subTree=F(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=F(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&Ot(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Ot((()=>fn(r,d,e)),o)}(256&t.shapeFlag||d&&de(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ot(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>w(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,xt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,dt(e,t.props,i,n),St(e,t.children,n),(0,r.Jd)(),I(),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(u,h,n,r,i,s,o,a,c);if(256&f)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&R(h,n,r,i,s,o,a,c))},z=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?ln(t[f]):un(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):R(t,n,r,s,o,a,c,u,d)},H=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?ln(t[l]):un(t[l]);if(!Jt(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?ln(t[f]):un(t[f]);if(!Jt(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?ln(t[l]):un(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?ln(t[l]):un(t[l]);null!=e.key&&m.set(e.key,l)}let y,_=0;const w=f-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(_>=w){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Jt(r,t[y])){i=y;break}void 0===i?W(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,v(r,t[i],n,null,s,o,a,c,u),_++)}const I=b?Pt(T):i.Z6;for(y=I.length-1,l=w-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?v(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==I[y]?K(i,n,d,2):y--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Mt){s(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Vt)return void T(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Ot((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&At(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!de(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&fn(g,t,e),6&l)J(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Z(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Mt||h>0&&64&h)?X(u,t,n,!1,!0):(s===Mt&&384&h||!i&&16&l)&&X(c,t,n),r&&G(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Ot((()=>{g&&fn(g,t,e),f&&Z(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Mt)return void Q(n,r);if(t===Vt)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&Ot(c,t),Ot((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),I(),C(),t._vnode=e},te={p:v,um:W,m:K,r:G,mt:M,mc:R,pc:B,pbc:x,n:Y,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:at(ee,ne)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Dt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=ln(s[i]),t.el=e.el),n||Dt(e,t)),t.type===Ut&&(t.el=e.el)}}function Pt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Lt=e=>e.__isTeleport;const Mt=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Vt=Symbol.for("v-stc"),jt=[];let $t=null;function Bt(e=!1){jt.push($t=e?null:[])}function qt(){jt.pop(),$t=jt[jt.length-1]||null}let zt=1;function Ht(e){zt+=e}function Kt(e){return e.dynamicChildren=zt>0?$t||i.Z6:null,qt(),zt>0&&$t&&$t.push(e),e}function Wt(e,t,n,r,i,s){return Kt(en(e,t,n,r,i,s,!0))}function Gt(e,t,n,r,i){return Kt(tn(e,t,n,r,i,!0))}function Qt(e){return!!e&&!0===e.__v_isVNode}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Xt="__vInternal",Yt=({key:e})=>null!=e?e:null,Zt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:x,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,r=0,s=null,o=(e===Mt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yt(t),ref:t&&Zt(t),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:x};return c?(hn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),zt>0&&!a&&$t&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&$t.push(u),u}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Le||(e=Ft),Qt(e)){const r=sn(e,t,!0);return n&&hn(r,n),zt>0&&!a&&$t&&(6&r.shapeFlag?$t[$t.indexOf(e)]=r:$t.push(r)),r.patchFlag|=-2,r}if(Mn(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:z(e)?128:Lt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,r.X3)(e)||Xt in e?(0,i.l7)({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?dn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Yt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Zt(t)):[s,Zt(t)]:Zt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function on(e=" ",t=0){return tn(Ut,null,e,t)}function an(e,t){const n=tn(Vt,null,e);return n.staticCount=t,n}function cn(e="",t=!1){return t?(Bt(),Gt(Ft,null,e)):tn(Ft,null,e)}function un(e){return null==e||"boolean"===typeof e?tn(Ft):(0,i.kJ)(e)?tn(Mt,null,e.slice()):"object"===typeof e?ln(e):tn(Ut,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function hn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Xt in t?3===r&&x&&(1===x.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=x}}else(0,i.mf)(t)?(t={default:t,_ctx:x},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function fn(e,t,n,r=null){o(e,t,7,[n,r])}const pn=st();let gn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:gn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gt(s,o),emitsOptions:R(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=O.bind(null,a),e.ce&&e.ce(a),a}let vn=null;const yn=()=>vn||x;let _n,wn,bn="__VUE_INSTANCE_SETTERS__";(wn=(0,i.E9)()[bn])||(wn=(0,i.E9)()[bn]=[]),wn.push((e=>vn=e)),_n=e=>{wn.length>1?wn.forEach((t=>t(e))):wn[0](e)};const En=e=>{_n(e),e.scope.on()},Tn=()=>{vn&&vn.scope.off(),_n(null)};function In(e){return 4&e.vnode.shapeFlag}let Cn,Sn,An=!1;function kn(e,t=!1){An=t;const{props:n,children:r}=e.vnode,i=In(e);ht(e,n,i,t),Ct(e,r);const s=i?On(e,t):void 0;return An=!1,s}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Be));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Dn(e):null;En(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),Tn(),(0,i.tI)(c)){if(c.then(Tn,Tn),t)return c.then((n=>{Rn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Rn(e,c,t)}else Nn(e,t)}function Rn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Nn(e,n)}function Nn(e,t,n){const s=e.type;if(!e.render){if(!t&&Cn&&!s.render){const t=s.template||Qe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Cn(t,c)}}e.render=s.render||i.dG,Sn&&Sn(e)}En(e),(0,r.Jd)(),He(e),(0,r.lk)(),Tn()}function xn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}}))}function Dn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return xn(e)},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in je?je[n](e):void 0},has(e,t){return t in e||t in je}}))}function Ln(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Mn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Un=(e,t)=>(0,r.Fl)(e,t,An);function Fn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Qt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Qt(n)&&(n=[n]),tn(e,t,n))}const Vn=Symbol.for("v-scx"),jn=()=>{{const e=lt(Vn);return e}};const $n="3.3.4"},9242:function(e,t,n){n.d(t,{e8:function(){return ue},nr:function(){return ce},ri:function(){return me}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"");for(const e in n)f(i,e,n[e])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],g={};function m(e,t){const n=g[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return g[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return g[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value"):e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",u=!0):"number"===i&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function E(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=I(t);if(r){const o=s[t]=k(r,i);w(e,n,o,a)}else o&&(b(e,n,o,a),s[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function I(e){let t;if(T.test(e)){let n;t={};while(n=e.match(T))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let C=0;const S=Promise.resolve(),A=()=>C||(S.then((()=>C=0)),C=Date.now());function k(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(O(e,n.value),t,5,[e])};return n.value=e,n.attached=A(),n}function O(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,N=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?l(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||E(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):x(e,t,i,s))?_(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function x(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",P="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=L.props=(0,r.l7)({},i.nJ,M),F=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},V=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in M||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=$(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:w,onLeave:b,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:I=_,onAppearCancelled:C=w}=t,S=(e,t,n)=>{z(e,t?h:c),z(e,t?l:a),n&&n()},A=(e,t)=>{e._isLeaving=!1,z(e,d),z(e,p),z(e,f),t&&t()},k=e=>(t,n)=>{const r=e?I:_,s=()=>S(t,e,n);F(r,[t,s]),H((()=>{z(t,e?u:o),q(t,e?h:c),V(r)||W(t,i,m,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(y,[e]),q(e,o),q(e,a)},onBeforeAppear(e){F(T,[e]),q(e,u),q(e,l)},onEnter:k(!1),onAppear:k(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>A(e,t);q(e,d),X(),q(e,f),H((()=>{e._isLeaving&&(z(e,d),q(e,p),V(b)||W(e,i,v,n))})),F(b,[e,n])},onEnterCancelled(e){S(e,!1),F(w,[e])},onAppearCancelled(e){S(e,!0),F(C,[e])},onLeaveCancelled(e){A(e),F(E,[e])}})}function $(e){if(null==e)return null;if((0,r.Kn)(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=(0,r.He)(e);return t}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function H(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let K=0;function W(e,t,n,r){const i=e._endId=++K,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=G(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function G(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${D}Delay`),s=r(`${D}Duration`),o=Q(i,s),a=r(`${P}Delay`),c=r(`${P}Duration`),u=Q(a,c);let l=null,h=0,d=0;t===D?o>0&&(l=D,h=o,d=s.length):t===P?u>0&&(l=P,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?D:P:null,d=l?l===D?s.length:c.length:0);const f=l===D&&/\b(transform|all)(,|$)/.test(r(`${D}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Y=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},U,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ie(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const r=o.filter(re);X(),r.forEach((e=>{const n=e.el,r=n.style;q(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=j(c);let l=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),Y.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function re(e){const t=Y.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ie(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=G(r);return i.removeChild(r),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=se(s);const o=i||s.props&&"number"===s.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),e._assign(i)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",oe),w(e,"compositionend",ae),w(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ue={deep:!0,created(e,t,n){e._assign=se(n),w(e,"change",(()=>{const t=e._modelValue,n=he(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(de(e,i))}))},mounted:le,beforeUpdate(e,t,n){e._assign=se(n),le(e,t,n)}};function le(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,de(e,!0)))}function he(e){return"_value"in e?e._value:e.value}function de(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const fe=(0,r.l7)({patchProp:N},u);let pe;function ge(){return pe||(pe=(0,i.Us)(fe))}const me=(...e)=>{const t=ge().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ve(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ve(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){n.d(t,{C_:function(){return Y},DM:function(){return v},E9:function(){return z},F7:function(){return u},Gg:function(){return R},HD:function(){return b},He:function(){return B},Kj:function(){return _},Kn:function(){return T},NO:function(){return a},Nj:function(){return j},Od:function(){return d},PO:function(){return k},Pq:function(){return ee},RI:function(){return p},S0:function(){return O},W7:function(){return A},WV:function(){return re},Z6:function(){return s},_A:function(){return D},_N:function(){return m},aU:function(){return F},dG:function(){return o},e1:function(){return K},fY:function(){return r},h5:function(){return $},hR:function(){return U},hq:function(){return ie},ir:function(){return V},j5:function(){return W},kC:function(){return M},kJ:function(){return g},kT:function(){return i},l7:function(){return h},mf:function(){return w},rs:function(){return L},tI:function(){return I},tR:function(){return l},yA:function(){return te},yk:function(){return E},zw:function(){return se}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i={},s=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,u=e=>c.test(e),l=e=>e.startsWith("onUpdate:"),h=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,p=(e,t)=>f.call(e,t),g=Array.isArray,m=e=>"[object Map]"===S(e),v=e=>"[object Set]"===S(e),y=e=>"[object Date]"===S(e),_=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,b=e=>"string"===typeof e,E=e=>"symbol"===typeof e,T=e=>null!==e&&"object"===typeof e,I=e=>T(e)&&w(e.then)&&w(e.catch),C=Object.prototype.toString,S=e=>C.call(e),A=e=>S(e).slice(8,-1),k=e=>"[object Object]"===S(e),O=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},x=/-(\w)/g,D=N((e=>e.replace(x,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,L=N((e=>e.replace(P,"-$1").toLowerCase())),M=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),U=N((e=>e?`on${M(e)}`:"")),F=(e,t)=>!Object.is(e,t),V=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$=e=>{const t=parseFloat(e);return isNaN(t)?e:t},B=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let q;const z=()=>q||(q="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(H);function W(e){if(g(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?X(r):W(r);if(i)for(const e in i)t[e]=i[e]}return t}return b(e)||T(e)?e:void 0}const G=/;(?![^(]*\))/g,Q=/:([^]+)/,J=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(J,"").split(G).forEach((e=>{if(e){const n=e.split(Q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Y(e){let t="";if(b(e))t=e;else if(g(e))for(let n=0;n<e.length;n++){const r=Y(e[n]);r&&(t+=r+" ")}else if(T(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(Z);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=E(e),r=E(t),n||r)return e===t;if(n=g(e),r=g(t),n||r)return!(!n||!r)&&ne(e,t);if(n=T(e),r=T(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>re(e,t)))}const se=e=>b(e)?e:null==e?"":g(e)||T(e)&&(e.toString===C||!w(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:v(t)?{[`Set(${t.size})`]:[...t.values()]}:!T(t)||g(t)||k(t)?t:String(t)},2166:function(e,t,n){var r={};n.r(r),n.d(r,{afterMain:function(){return T},afterRead:function(){return w},afterWrite:function(){return S},applyStyles:function(){return L},arrow:function(){return ae},auto:function(){return c},basePlacements:function(){return u},beforeMain:function(){return b},beforeRead:function(){return y},beforeWrite:function(){return I},bottom:function(){return s},clippingParents:function(){return d},computeStyles:function(){return fe},createPopper:function(){return lt},createPopperBase:function(){return ct},createPopperLite:function(){return dt},detectOverflow:function(){return Pe},end:function(){return h},eventListeners:function(){return me},flip:function(){return Fe},hide:function(){return Be},left:function(){return a},main:function(){return E},modifierPhases:function(){return A},offset:function(){return He},placements:function(){return v},popper:function(){return p},popperGenerator:function(){return at},popperOffsets:function(){return We},preventOverflow:function(){return Je},read:function(){return _},reference:function(){return g},right:function(){return o},start:function(){return l},top:function(){return i},variationPlacements:function(){return m},viewport:function(){return f},write:function(){return C}});n(7658);var i="top",s="bottom",o="right",a="left",c="auto",u=[i,s,o,a],l="start",h="end",d="clippingParents",f="viewport",p="popper",g="reference",m=u.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+h])}),[]),v=[].concat(u,[c]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+h])}),[]),y="beforeRead",_="read",w="afterRead",b="beforeMain",E="main",T="afterMain",I="beforeWrite",C="write",S="afterWrite",A=[y,_,w,b,E,T,I,C,S];function k(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function R(e){var t=O(e).Element;return e instanceof t||e instanceof Element}function N(e){var t=O(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function x(e){if("undefined"===typeof ShadowRoot)return!1;var t=O(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function D(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];N(i)&&k(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function P(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});N(r)&&k(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:P,requires:["computeStyles"]};function M(e){return e.split("-")[0]}var U=Math.max,F=Math.min,V=Math.round;function j(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function $(){return!/^((?!chrome|android).)*safari/i.test(j())}function B(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,s=1;t&&N(e)&&(i=e.offsetWidth>0&&V(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&V(r.height)/e.offsetHeight||1);var o=R(e)?O(e):window,a=o.visualViewport,c=!$()&&n,u=(r.left+(c&&a?a.offsetLeft:0))/i,l=(r.top+(c&&a?a.offsetTop:0))/s,h=r.width/i,d=r.height/s;return{width:h,height:d,top:l,right:u+h,bottom:l+d,left:u,x:u,y:l}}function q(e){var t=B(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function z(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&x(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function H(e){return O(e).getComputedStyle(e)}function K(e){return["table","td","th"].indexOf(k(e))>=0}function W(e){return((R(e)?e.ownerDocument:e.document)||window.document).documentElement}function G(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||W(e)}function Q(e){return N(e)&&"fixed"!==H(e).position?e.offsetParent:null}function J(e){var t=/firefox/i.test(j()),n=/Trident/i.test(j());if(n&&N(e)){var r=H(e);if("fixed"===r.position)return null}var i=G(e);x(i)&&(i=i.host);while(N(i)&&["html","body"].indexOf(k(i))<0){var s=H(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function X(e){var t=O(e),n=Q(e);while(n&&K(n)&&"static"===H(n).position)n=Q(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===H(n).position)?t:n||J(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e,t,n){return U(e,F(t,n))}function ee(e,t,n){var r=Z(e,t,n);return r>n?n:r}function te(){return{top:0,right:0,bottom:0,left:0}}function ne(e){return Object.assign({},te(),e)}function re(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ie=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ne("number"!==typeof e?e:re(e,u))};function se(e){var t,n=e.state,r=e.name,c=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=M(n.placement),d=Y(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var g=ie(c.padding,n),m=q(u),v="y"===d?i:a,y="y"===d?s:o,_=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],w=l[d]-n.rects.reference[d],b=X(u),E=b?"y"===d?b.clientHeight||0:b.clientWidth||0:0,T=_/2-w/2,I=g[v],C=E-m[p]-g[y],S=E/2-m[p]/2+T,A=Z(I,S,C),k=d;n.modifiersData[r]=(t={},t[k]=A,t.centerOffset=A-S,t)}}function oe(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&z(t.elements.popper,i)&&(t.elements.arrow=i)}var ae={name:"arrow",enabled:!0,phase:"main",fn:se,effect:oe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function le(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:V(n*i)/i||0,y:V(r*i)/i||0}}function he(e){var t,n=e.popper,r=e.popperRect,c=e.placement,u=e.variation,l=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,v=l.x,y=void 0===v?0:v,_=l.y,w=void 0===_?0:_,b="function"===typeof g?g({x:y,y:w}):{x:y,y:w};y=b.x,w=b.y;var E=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),I=a,C=i,S=window;if(p){var A=X(n),k="clientHeight",R="clientWidth";if(A===O(n)&&(A=W(n),"static"!==H(A).position&&"absolute"===d&&(k="scrollHeight",R="scrollWidth")),c===i||(c===a||c===o)&&u===h){C=s;var N=m&&A===S&&S.visualViewport?S.visualViewport.height:A[k];w-=N-r.height,w*=f?1:-1}if(c===a||(c===i||c===s)&&u===h){I=o;var x=m&&A===S&&S.visualViewport?S.visualViewport.width:A[R];y-=x-r.width,y*=f?1:-1}}var D,P=Object.assign({position:d},p&&ue),L=!0===g?le({x:y,y:w},O(n)):{x:y,y:w};return y=L.x,w=L.y,f?Object.assign({},P,(D={},D[C]=T?"0":"",D[I]=E?"0":"",D.transform=(S.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",D)):Object.assign({},P,(t={},t[C]=T?w+"px":"",t[I]=E?y+"px":"",t.transform="",t))}function de(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:M(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,he(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,he(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var fe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:de,data:{}},pe={passive:!0};function ge(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=O(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",n.update,pe)})),a&&c.addEventListener("resize",n.update,pe),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",n.update,pe)})),a&&c.removeEventListener("resize",n.update,pe)}}var me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ge,data:{}},ve={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,(function(e){return ve[e]}))}var _e={start:"end",end:"start"};function we(e){return e.replace(/start|end/g,(function(e){return _e[e]}))}function be(e){var t=O(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Ee(e){return B(W(e)).left+be(e).scrollLeft}function Te(e,t){var n=O(e),r=W(e),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,a=0,c=0;if(i){s=i.width,o=i.height;var u=$();(u||!u&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:o,x:a+Ee(e),y:c}}function Ie(e){var t,n=W(e),r=be(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=U(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=U(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Ee(e),c=-r.scrollTop;return"rtl"===H(i||n).direction&&(a+=U(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ce(e){var t=H(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Se(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:N(e)&&Ce(e)?e:Se(G(e))}function Ae(e,t){var n;void 0===t&&(t=[]);var r=Se(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=O(r),o=i?[s].concat(s.visualViewport||[],Ce(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Ae(G(o)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oe(e,t){var n=B(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Re(e,t,n){return t===f?ke(Te(e,n)):R(t)?Oe(t,n):ke(Ie(W(e)))}function Ne(e){var t=Ae(G(e)),n=["absolute","fixed"].indexOf(H(e).position)>=0,r=n&&N(e)?X(e):e;return R(r)?t.filter((function(e){return R(e)&&z(e,r)&&"body"!==k(e)})):[]}function xe(e,t,n,r){var i="clippingParents"===t?Ne(e):[].concat(t),s=[].concat(i,[n]),o=s[0],a=s.reduce((function(t,n){var i=Re(e,n,r);return t.top=U(i.top,t.top),t.right=F(i.right,t.right),t.bottom=F(i.bottom,t.bottom),t.left=U(i.left,t.left),t}),Re(e,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function De(e){var t,n=e.reference,r=e.element,c=e.placement,u=c?M(c):null,d=c?ce(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:t={x:f,y:n.y-r.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var g=u?Y(u):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case l:t[g]=t[g]-(n[m]/2-r[m]/2);break;case h:t[g]=t[g]+(n[m]/2-r[m]/2);break;default:}}return t}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.strategy,l=void 0===c?e.strategy:c,h=n.boundary,m=void 0===h?d:h,v=n.rootBoundary,y=void 0===v?f:v,_=n.elementContext,w=void 0===_?p:_,b=n.altBoundary,E=void 0!==b&&b,T=n.padding,I=void 0===T?0:T,C=ne("number"!==typeof I?I:re(I,u)),S=w===p?g:p,A=e.rects.popper,k=e.elements[E?S:w],O=xe(R(k)?k:k.contextElement||W(e.elements.popper),m,y,l),N=B(e.elements.reference),x=De({reference:N,element:A,strategy:"absolute",placement:a}),D=ke(Object.assign({},A,x)),P=w===p?D:N,L={top:O.top-P.top+C.top,bottom:P.bottom-O.bottom+C.bottom,left:O.left-P.left+C.left,right:P.right-O.right+C.right},M=e.modifiersData.offset;if(w===p&&M){var U=M[a];Object.keys(L).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[i,s].indexOf(e)>=0?"y":"x";L[e]+=U[n]*t}))}return L}function Le(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?v:c,h=ce(r),d=h?a?m:m.filter((function(e){return ce(e)===h})):u,f=d.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Pe(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[M(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Me(e){if(M(e)===c)return[];var t=ye(e);return[we(e),t,we(t)]}function Ue(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,v=n.rootBoundary,y=n.altBoundary,_=n.flipVariations,w=void 0===_||_,b=n.allowedAutoPlacements,E=t.options.placement,T=M(E),I=T===E,C=p||(I||!w?[ye(E)]:Me(E)),S=[E].concat(C).reduce((function(e,n){return e.concat(M(n)===c?Le(t,{placement:n,boundary:m,rootBoundary:v,padding:g,flipVariations:w,allowedAutoPlacements:b}):n)}),[]),A=t.rects.reference,k=t.rects.popper,O=new Map,R=!0,N=S[0],x=0;x<S.length;x++){var D=S[x],P=M(D),L=ce(D)===l,U=[i,s].indexOf(P)>=0,F=U?"width":"height",V=Pe(t,{placement:D,boundary:m,rootBoundary:v,altBoundary:y,padding:g}),j=U?L?o:a:L?s:i;A[F]>k[F]&&(j=ye(j));var $=ye(j),B=[];if(h&&B.push(V[P]<=0),f&&B.push(V[j]<=0,V[$]<=0),B.every((function(e){return e}))){N=D,R=!1;break}O.set(D,B)}if(R)for(var q=w?3:1,z=function(e){var t=S.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},H=q;H>0;H--){var K=z(H);if("break"===K)break}t.placement!==N&&(t.modifiersData[r]._skip=!0,t.placement=N,t.reset=!0)}}var Fe={name:"flip",enabled:!0,phase:"main",fn:Ue,requiresIfExists:["offset"],data:{_skip:!1}};function Ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[i,o,s,a].some((function(t){return e[t]>=0}))}function $e(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=Pe(t,{elementContext:"reference"}),a=Pe(t,{altBoundary:!0}),c=Ve(o,r),u=Ve(a,i,s),l=je(c),h=je(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$e};function qe(e,t,n){var r=M(e),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*s,[a,o].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function ze(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=v.reduce((function(e,n){return e[n]=qe(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}var He={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ze};function Ke(e){var t=e.state,n=e.name;t.modifiersData[n]=De({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var We={name:"popperOffsets",enabled:!0,phase:"read",fn:Ke,data:{}};function Ge(e){return"x"===e?"y":"x"}function Qe(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,v=n.tether,y=void 0===v||v,_=n.tetherOffset,w=void 0===_?0:_,b=Pe(t,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),E=M(t.placement),T=ce(t.placement),I=!T,C=Y(E),S=Ge(C),A=t.modifiersData.popperOffsets,k=t.rects.reference,O=t.rects.popper,R="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,N="number"===typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),x=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(A){if(u){var P,L="y"===C?i:a,V="y"===C?s:o,j="y"===C?"height":"width",$=A[C],B=$+b[L],z=$-b[V],H=y?-O[j]/2:0,K=T===l?k[j]:O[j],W=T===l?-O[j]:-k[j],G=t.elements.arrow,Q=y&&G?q(G):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:te(),ne=J[L],re=J[V],ie=Z(0,k[j],Q[j]),se=I?k[j]/2-H-ie-ne-N.mainAxis:K-ie-ne-N.mainAxis,oe=I?-k[j]/2+H+ie+re+N.mainAxis:W+ie+re+N.mainAxis,ae=t.elements.arrow&&X(t.elements.arrow),ue=ae?"y"===C?ae.clientTop||0:ae.clientLeft||0:0,le=null!=(P=null==x?void 0:x[C])?P:0,he=$+se-le-ue,de=$+oe-le,fe=Z(y?F(B,he):B,$,y?U(z,de):z);A[C]=fe,D[C]=fe-$}if(d){var pe,ge="x"===C?i:a,me="x"===C?s:o,ve=A[S],ye="y"===S?"height":"width",_e=ve+b[ge],we=ve-b[me],be=-1!==[i,a].indexOf(E),Ee=null!=(pe=null==x?void 0:x[S])?pe:0,Te=be?_e:ve-k[ye]-O[ye]-Ee+N.altAxis,Ie=be?ve+k[ye]+O[ye]-Ee-N.altAxis:we,Ce=y&&be?ee(Te,ve,Ie):Z(y?Te:_e,ve,y?Ie:we);A[S]=Ce,D[S]=Ce-ve}t.modifiersData[r]=D}}var Je={name:"preventOverflow",enabled:!0,phase:"main",fn:Qe,requiresIfExists:["offset"]};function Xe(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ye(e){return e!==O(e)&&N(e)?Xe(e):be(e)}function Ze(e){var t=e.getBoundingClientRect(),n=V(t.width)/e.offsetWidth||1,r=V(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function et(e,t,n){void 0===n&&(n=!1);var r=N(t),i=N(t)&&Ze(t),s=W(t),o=B(e,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==k(t)||Ce(s))&&(a=Ye(t)),N(t)?(c=B(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Ee(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function tt(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function nt(e){var t=tt(e);return A.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function rt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function it(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ot(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function at(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?st:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:R(e)?Ae(e):e.contextElement?Ae(e.contextElement):[],popper:Ae(t)};var a=nt(it([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(ot(t,n)){i.rects={reference:et(t,X(n),"fixed"===i.options.strategy),popper:q(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:rt((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!ot(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ct=at(),ut=[me,We,fe,L,He,Fe,Je,ae,Be],lt=at({defaultModifiers:ut}),ht=[me,We,fe,L],dt=at({defaultModifiers:ht});
/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ft=new Map,pt={set(e,t,n){ft.has(e)||ft.set(e,new Map);const r=ft.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return ft.has(e)&&ft.get(e).get(t)||null},remove(e,t){if(!ft.has(e))return;const n=ft.get(e);n.delete(t),0===n.size&&ft.delete(e)}},gt=1e6,mt=1e3,vt="transitionend",yt=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),_t=e=>null===e||void 0===e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),wt=e=>{do{e+=Math.floor(Math.random()*gt)}while(document.getElementById(e));return e},bt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*mt):0},Et=e=>{e.dispatchEvent(new Event(vt))},Tt=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),It=e=>Tt(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(yt(e)):null,Ct=e=>{if(!Tt(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},St=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),At=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?At(e.parentNode):null},kt=()=>{},Ot=e=>{e.offsetHeight},Rt=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Nt=[],xt=e=>{"loading"===document.readyState?(Nt.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of Nt)e()})),Nt.push(e)):e()},Dt=()=>"rtl"===document.documentElement.dir,Pt=e=>{xt((()=>{const t=Rt();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},Lt=(e,t=[],n=e)=>"function"===typeof e?e(...t):n,Mt=(e,t,n=!0)=>{if(!n)return void Lt(e);const r=5,i=bt(t)+r;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(vt,o),Lt(e))};t.addEventListener(vt,o),setTimeout((()=>{s||Et(t)}),i)},Ut=(e,t,n,r)=>{const i=e.length;let s=e.indexOf(t);return-1===s?!n&&r?e[i-1]:e[0]:(s+=n?1:-1,r&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))])},Ft=/[^.]*(?=\..*)\.|.*/,Vt=/\..*/,jt=/::\d+$/,$t={};let Bt=1;const qt={mouseenter:"mouseover",mouseleave:"mouseout"},zt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ht(e,t){return t&&`${t}::${Bt++}`||e.uidEvent||Bt++}function Kt(e){const t=Ht(e);return e.uidEvent=t,$t[t]=$t[t]||{},$t[t]}function Wt(e,t){return function n(r){return nn(r,{delegateTarget:e}),n.oneOff&&tn.off(e,r.type,t),t.apply(e,[r])}}function Gt(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return nn(i,{delegateTarget:o}),r.oneOff&&tn.off(e,i.type,t,n),n.apply(o,[i])}}function Qt(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function Jt(e,t,n){const r="string"===typeof t,i=r?n:t||n;let s=en(e);return zt.has(s)||(s=e),[r,i,s]}function Xt(e,t,n,r,i){if("string"!==typeof t||!e)return;let[s,o,a]=Jt(t,n,r);if(t in qt){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=Kt(e),u=c[a]||(c[a]={}),l=Qt(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=Ht(o,t.replace(Ft,"")),d=s?Gt(e,n,o):Wt(e,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,u[h]=d,e.addEventListener(a,d,s)}function Yt(e,t,n,r,i){const s=Qt(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function Zt(e,t,n,r){const i=t[n]||{};for(const[s,o]of Object.entries(i))s.includes(r)&&Yt(e,t,n,o.callable,o.delegationSelector)}function en(e){return e=e.replace(Vt,""),qt[e]||e}const tn={on(e,t,n,r){Xt(e,t,n,r,!1)},one(e,t,n,r){Xt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=Jt(t,n,r),a=o!==t,c=Kt(e),u=c[o]||{},l=t.startsWith(".");if("undefined"===typeof s){if(l)for(const n of Object.keys(c))Zt(e,c,n,t.slice(1));for(const[n,r]of Object.entries(u)){const i=n.replace(jt,"");a&&!t.includes(i)||Yt(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(u).length)return;Yt(e,c,o,s,i?n:null)}},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=Rt(),i=en(t),s=t!==i;let o=null,a=!0,c=!0,u=!1;s&&r&&(o=r.Event(t,n),r(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const l=nn(new Event(t,{bubbles:a,cancelable:!0}),n);return u&&l.preventDefault(),c&&e.dispatchEvent(l),l.defaultPrevented&&o&&o.preventDefault(),l}};function nn(e,t={}){for(const[r,i]of Object.entries(t))try{e[r]=i}catch(n){Object.defineProperty(e,r,{configurable:!0,get(){return i}})}return e}function rn(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function sn(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const on={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${sn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${sn(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=rn(e.dataset[r])}return t},getDataAttribute(e,t){return rn(e.getAttribute(`data-bs-${sn(t)}`))}};class an{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=Tt(t)?on.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...Tt(t)?on.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,r]of Object.entries(t)){const t=e[n],i=Tt(t)?"element":_t(t);if(!new RegExp(r).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`)}}}const cn="5.3.1";class un extends an{constructor(e,t){super(),e=It(e),e&&(this._element=e,this._config=this._getConfig(t),pt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){pt.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Mt(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return pt.get(It(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return cn}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ln=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return yt(t)},hn={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode.closest(t);while(r)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!St(e)&&Ct(e)))},getSelectorFromElement(e){const t=ln(e);return t&&hn.findOne(t)?t:null},getElementFromSelector(e){const t=ln(e);return t?hn.findOne(t):null},getMultipleElementsFromSelector(e){const t=ln(e);return t?hn.find(t):[]}},dn=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;tn.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),St(this))return;const i=hn.getElementFromSelector(this)||this.closest(`.${r}`),s=e.getOrCreateInstance(i);s[t]()}))},fn="alert",pn="bs.alert",gn=`.${pn}`,mn=`close${gn}`,vn=`closed${gn}`,yn="fade",_n="show";class wn extends un{static get NAME(){return fn}close(){const e=tn.trigger(this._element,mn);if(e.defaultPrevented)return;this._element.classList.remove(_n);const t=this._element.classList.contains(yn);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,vn),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=wn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(wn,"close"),Pt(wn);const bn="button",En="bs.button",Tn=`.${En}`,In=".data-api",Cn="active",Sn='[data-bs-toggle="button"]',An=`click${Tn}${In}`;class kn extends un{static get NAME(){return bn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Cn))}static jQueryInterface(e){return this.each((function(){const t=kn.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}tn.on(document,An,Sn,(e=>{e.preventDefault();const t=e.target.closest(Sn),n=kn.getOrCreateInstance(t);n.toggle()})),Pt(kn);const On="swipe",Rn=".bs.swipe",Nn=`touchstart${Rn}`,xn=`touchmove${Rn}`,Dn=`touchend${Rn}`,Pn=`pointerdown${Rn}`,Ln=`pointerup${Rn}`,Mn="touch",Un="pen",Fn="pointer-event",Vn=40,jn={endCallback:null,leftCallback:null,rightCallback:null},$n={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Bn extends an{constructor(e,t){super(),this._element=e,e&&Bn.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return jn}static get DefaultType(){return $n}static get NAME(){return On}dispose(){tn.off(this._element,Rn)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Lt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Vn)return;const t=e/this._deltaX;this._deltaX=0,t&&Lt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(tn.on(this._element,Pn,(e=>this._start(e))),tn.on(this._element,Ln,(e=>this._end(e))),this._element.classList.add(Fn)):(tn.on(this._element,Nn,(e=>this._start(e))),tn.on(this._element,xn,(e=>this._move(e))),tn.on(this._element,Dn,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Un||e.pointerType===Mn)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const qn="carousel",zn="bs.carousel",Hn=`.${zn}`,Kn=".data-api",Wn="ArrowLeft",Gn="ArrowRight",Qn=500,Jn="next",Xn="prev",Yn="left",Zn="right",er=`slide${Hn}`,tr=`slid${Hn}`,nr=`keydown${Hn}`,rr=`mouseenter${Hn}`,ir=`mouseleave${Hn}`,sr=`dragstart${Hn}`,or=`load${Hn}${Kn}`,ar=`click${Hn}${Kn}`,cr="carousel",ur="active",lr="slide",hr="carousel-item-end",dr="carousel-item-start",fr="carousel-item-next",pr="carousel-item-prev",gr=".active",mr=".carousel-item",vr=gr+mr,yr=".carousel-item img",_r=".carousel-indicators",wr="[data-bs-slide], [data-bs-slide-to]",br='[data-bs-ride="carousel"]',Er={[Wn]:Zn,[Gn]:Yn},Tr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ir={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Cr extends un{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=hn.findOne(_r,this._element),this._addEventListeners(),this._config.ride===cr&&this.cycle()}static get Default(){return Tr}static get DefaultType(){return Ir}static get NAME(){return qn}next(){this._slide(Jn)}nextWhenVisible(){!document.hidden&&Ct(this._element)&&this.next()}prev(){this._slide(Xn)}pause(){this._isSliding&&Et(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?tn.one(this._element,tr,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,tr,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const r=e>n?Jn:Xn;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&tn.on(this._element,nr,(e=>this._keydown(e))),"hover"===this._config.pause&&(tn.on(this._element,rr,(()=>this.pause())),tn.on(this._element,ir,(()=>this._maybeEnableCycle()))),this._config.touch&&Bn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of hn.find(yr,this._element))tn.on(n,sr,(e=>e.preventDefault()));const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Qn+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder(Yn)),rightCallback:()=>this._slide(this._directionToOrder(Zn)),endCallback:e};this._swipeHelper=new Bn(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Er[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=hn.findOne(gr,this._indicatorsElement);t.classList.remove(ur),t.removeAttribute("aria-current");const n=hn.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(ur),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),r=e===Jn,i=t||Ut(this._getItems(),n,r,this._config.wrap);if(i===n)return;const s=this._getItemIndex(i),o=t=>tn.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s}),a=o(er);if(a.defaultPrevented)return;if(!n||!i)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=i;const u=r?dr:hr,l=r?fr:pr;i.classList.add(l),Ot(i),n.classList.add(u),i.classList.add(u);const h=()=>{i.classList.remove(u,l),i.classList.add(ur),n.classList.remove(ur,l,u),this._isSliding=!1,o(tr)};this._queueCallback(h,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(lr)}_getActive(){return hn.findOne(vr,this._element)}_getItems(){return hn.find(mr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Dt()?e===Yn?Xn:Jn:e===Yn?Jn:Xn}_orderToDirection(e){return Dt()?e===Xn?Yn:Zn:e===Xn?Zn:Yn}static jQueryInterface(e){return this.each((function(){const t=Cr.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}tn.on(document,ar,wr,(function(e){const t=hn.getElementFromSelector(this);if(!t||!t.classList.contains(cr))return;e.preventDefault();const n=Cr.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");return r?(n.to(r),void n._maybeEnableCycle()):"next"===on.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),tn.on(window,or,(()=>{const e=hn.find(br);for(const t of e)Cr.getOrCreateInstance(t)})),Pt(Cr);const Sr="collapse",Ar="bs.collapse",kr=`.${Ar}`,Or=".data-api",Rr=`show${kr}`,Nr=`shown${kr}`,xr=`hide${kr}`,Dr=`hidden${kr}`,Pr=`click${kr}${Or}`,Lr="show",Mr="collapse",Ur="collapsing",Fr="collapsed",Vr=`:scope .${Mr} .${Mr}`,jr="collapse-horizontal",$r="width",Br="height",qr=".collapse.show, .collapse.collapsing",zr='[data-bs-toggle="collapse"]',Hr={parent:null,toggle:!0},Kr={parent:"(null|element)",toggle:"boolean"};class Wr extends un{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=hn.find(zr);for(const r of n){const e=hn.getSelectorFromElement(r),t=hn.find(e).filter((e=>e===this._element));null!==e&&t.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Hr}static get DefaultType(){return Kr}static get NAME(){return Sr}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(qr).filter((e=>e!==this._element)).map((e=>Wr.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;const t=tn.trigger(this._element,Rr);if(t.defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(Mr),this._element.classList.add(Ur),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Ur),this._element.classList.add(Mr,Lr),this._element.style[n]="",tn.trigger(this._element,Nr)},i=n[0].toUpperCase()+n.slice(1),s=`scroll${i}`;this._queueCallback(r,this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,xr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Ot(this._element),this._element.classList.add(Ur),this._element.classList.remove(Mr,Lr);for(const r of this._triggerArray){const e=hn.getElementFromSelector(r);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(Ur),this._element.classList.add(Mr),tn.trigger(this._element,Dr)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Lr)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=It(e.parent),e}_getDimension(){return this._element.classList.contains(jr)?$r:Br}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(zr);for(const t of e){const e=hn.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=hn.find(Vr,this._config.parent);return hn.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(Fr,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Wr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}tn.on(document,Pr,zr,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of hn.getMultipleElementsFromSelector(this))Wr.getOrCreateInstance(t,{toggle:!1}).toggle()})),Pt(Wr);const Gr="dropdown",Qr="bs.dropdown",Jr=`.${Qr}`,Xr=".data-api",Yr="Escape",Zr="Tab",ei="ArrowUp",ti="ArrowDown",ni=2,ri=`hide${Jr}`,ii=`hidden${Jr}`,si=`show${Jr}`,oi=`shown${Jr}`,ai=`click${Jr}${Xr}`,ci=`keydown${Jr}${Xr}`,ui=`keyup${Jr}${Xr}`,li="show",hi="dropup",di="dropend",fi="dropstart",pi="dropup-center",gi="dropdown-center",mi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',vi=`${mi}.${li}`,yi=".dropdown-menu",_i=".navbar",wi=".navbar-nav",bi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ei=Dt()?"top-end":"top-start",Ti=Dt()?"top-start":"top-end",Ii=Dt()?"bottom-end":"bottom-start",Ci=Dt()?"bottom-start":"bottom-end",Si=Dt()?"left-start":"right-start",Ai=Dt()?"right-start":"left-start",ki="top",Oi="bottom",Ri={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ni={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class xi extends un{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=hn.next(this._element,yi)[0]||hn.prev(this._element,yi)[0]||hn.findOne(yi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ri}static get DefaultType(){return Ni}static get NAME(){return Gr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(St(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=tn.trigger(this._element,si,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(wi))for(const e of[].concat(...document.body.children))tn.on(e,"mouseover",kt);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(li),this._element.classList.add(li),tn.trigger(this._element,oi,e)}}hide(){if(St(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,ri,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))tn.off(e,"mouseover",kt);this._popper&&this._popper.destroy(),this._menu.classList.remove(li),this._element.classList.remove(li),this._element.setAttribute("aria-expanded","false"),on.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,ii,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!Tt(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Gr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:Tt(this._config.reference)?e=It(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=lt(e,this._menu,t)}_isShown(){return this._menu.classList.contains(li)}_getPlacement(){const e=this._parent;if(e.classList.contains(di))return Si;if(e.classList.contains(fi))return Ai;if(e.classList.contains(pi))return ki;if(e.classList.contains(gi))return Oi;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(hi)?t?Ti:Ei:t?Ci:Ii}_detectNavbar(){return null!==this._element.closest(_i)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(on.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Lt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=hn.find(bi,this._menu).filter((e=>Ct(e)));n.length&&Ut(n,t,e===ti,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=xi.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e.button===ni||"keyup"===e.type&&e.key!==Zr)return;const t=hn.find(vi);for(const n of t){const t=xi.getInstance(n);if(!t||!1===t._config.autoClose)continue;const r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||"inside"===t._config.autoClose&&!i||"outside"===t._config.autoClose&&i)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===Zr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===Yr,r=[ei,ti].includes(e.key);if(!r&&!n)return;if(t&&!n)return;e.preventDefault();const i=this.matches(mi)?this:hn.prev(this,mi)[0]||hn.next(this,mi)[0]||hn.findOne(mi,e.delegateTarget.parentNode),s=xi.getOrCreateInstance(i);if(r)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),i.focus())}}tn.on(document,ci,mi,xi.dataApiKeydownHandler),tn.on(document,ci,yi,xi.dataApiKeydownHandler),tn.on(document,ai,xi.clearMenus),tn.on(document,ui,xi.clearMenus),tn.on(document,ai,mi,(function(e){e.preventDefault(),xi.getOrCreateInstance(this).toggle()})),Pt(xi);const Di="backdrop",Pi="fade",Li="show",Mi=`mousedown.bs.${Di}`,Ui={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Fi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Vi extends an{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Ui}static get DefaultType(){return Fi}static get NAME(){return Di}show(e){if(!this._config.isVisible)return void Lt(e);this._append();const t=this._getElement();this._config.isAnimated&&Ot(t),t.classList.add(Li),this._emulateAnimation((()=>{Lt(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(Li),this._emulateAnimation((()=>{this.dispose(),Lt(e)}))):Lt(e)}dispose(){this._isAppended&&(tn.off(this._element,Mi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Pi),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=It(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),tn.on(e,Mi,(()=>{Lt(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){Mt(e,this._getElement(),this._config.isAnimated)}}const ji="focustrap",$i="bs.focustrap",Bi=`.${$i}`,qi=`focusin${Bi}`,zi=`keydown.tab${Bi}`,Hi="Tab",Ki="forward",Wi="backward",Gi={autofocus:!0,trapElement:null},Qi={autofocus:"boolean",trapElement:"element"};class Ji extends an{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Gi}static get DefaultType(){return Qi}static get NAME(){return ji}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),tn.off(document,Bi),tn.on(document,qi,(e=>this._handleFocusin(e))),tn.on(document,zi,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,Bi))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=hn.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Wi?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===Hi&&(this._lastTabNavDirection=e.shiftKey?Wi:Ki)}}const Xi=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Yi=".sticky-top",Zi="padding-right",es="margin-right";class ts{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Zi,(t=>t+e)),this._setElementAttributes(Xi,Zi,(t=>t+e)),this._setElementAttributes(Yi,es,(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Zi),this._resetElementAttributes(Xi,Zi),this._resetElementAttributes(Yi,es)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&on.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=on.getDataAttribute(e,t);null!==n?(on.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(Tt(e))t(e);else for(const n of hn.find(e,this._element))t(n)}}const ns="modal",rs="bs.modal",is=`.${rs}`,ss=".data-api",os="Escape",as=`hide${is}`,cs=`hidePrevented${is}`,us=`hidden${is}`,ls=`show${is}`,hs=`shown${is}`,ds=`resize${is}`,fs=`click.dismiss${is}`,ps=`mousedown.dismiss${is}`,gs=`keydown.dismiss${is}`,ms=`click${is}${ss}`,vs="modal-open",ys="fade",_s="show",ws="modal-static",bs=".modal.show",Es=".modal-dialog",Ts=".modal-body",Is='[data-bs-toggle="modal"]',Cs={backdrop:!0,focus:!0,keyboard:!0},Ss={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class As extends un{constructor(e,t){super(e,t),this._dialog=hn.findOne(Es,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ts,this._addEventListeners()}static get Default(){return Cs}static get DefaultType(){return Ss}static get NAME(){return ns}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,ls,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(vs),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,as);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(_s),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){tn.off(window,is),tn.off(this._dialog,is),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Vi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ji({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=hn.findOne(Ts,this._dialog);t&&(t.scrollTop=0),Ot(this._element),this._element.classList.add(_s);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,hs,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){tn.on(this._element,gs,(e=>{e.key===os&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),tn.on(window,ds,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),tn.on(this._element,ps,(e=>{tn.one(this._element,fs,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(vs),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,us)}))}_isAnimated(){return this._element.classList.contains(ys)}_triggerBackdropTransition(){const e=tn.trigger(this._element,cs);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(ws)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ws),this._queueCallback((()=>{this._element.classList.remove(ws),this._queueCallback((()=>{this._element.style.overflowY=n}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=Dt()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=Dt()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=As.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}tn.on(document,ms,Is,(function(e){const t=hn.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,ls,(e=>{e.defaultPrevented||tn.one(t,us,(()=>{Ct(this)&&this.focus()}))}));const n=hn.findOne(bs);n&&As.getInstance(n).hide();const r=As.getOrCreateInstance(t);r.toggle(this)})),dn(As),Pt(As);const ks="offcanvas",Os="bs.offcanvas",Rs=`.${Os}`,Ns=".data-api",xs=`load${Rs}${Ns}`,Ds="Escape",Ps="show",Ls="showing",Ms="hiding",Us="offcanvas-backdrop",Fs=".offcanvas.show",Vs=`show${Rs}`,js=`shown${Rs}`,$s=`hide${Rs}`,Bs=`hidePrevented${Rs}`,qs=`hidden${Rs}`,zs=`resize${Rs}`,Hs=`click${Rs}${Ns}`,Ks=`keydown.dismiss${Rs}`,Ws='[data-bs-toggle="offcanvas"]',Gs={backdrop:!0,keyboard:!0,scroll:!1},Qs={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Js extends un{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Gs}static get DefaultType(){return Qs}static get NAME(){return ks}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,Vs,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new ts).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ls);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ps),this._element.classList.remove(Ls),tn.trigger(this._element,js,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,$s);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ms),this._backdrop.hide();const t=()=>{this._element.classList.remove(Ps,Ms),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new ts).reset(),tn.trigger(this._element,qs)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():tn.trigger(this._element,Bs)},t=Boolean(this._config.backdrop);return new Vi({className:Us,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Ji({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Ks,(e=>{e.key===Ds&&(this._config.keyboard?this.hide():tn.trigger(this._element,Bs))}))}static jQueryInterface(e){return this.each((function(){const t=Js.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}tn.on(document,Hs,Ws,(function(e){const t=hn.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),St(this))return;tn.one(t,qs,(()=>{Ct(this)&&this.focus()}));const n=hn.findOne(Fs);n&&n!==t&&Js.getInstance(n).hide();const r=Js.getOrCreateInstance(t);r.toggle(this)})),tn.on(window,xs,(()=>{for(const e of hn.find(Fs))Js.getOrCreateInstance(e).show()})),tn.on(window,zs,(()=>{for(const e of hn.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Js.getOrCreateInstance(e).hide()})),dn(Js),Pt(Js);const Xs=/^aria-[\w-]*$/i,Ys={"*":["class","dir","id","lang","role",Xs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Zs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),eo=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,to=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Zs.has(n)||Boolean(eo.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))};function no(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const o of s){const e=o.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){o.remove();continue}const n=[].concat(...o.attributes),r=[].concat(t["*"]||[],t[e]||[]);for(const t of n)to(t,r)||o.removeAttribute(t.nodeName)}return i.body.innerHTML}const ro="TemplateFactory",io={allowList:Ys,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},so={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},oo={entry:"(string|element|function|null)",selector:"(string|element)"};class ao extends an{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return io}static get DefaultType(){return so}static get NAME(){return ro}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},oo)}_setContent(e,t,n){const r=hn.findOne(n,e);r&&(t=this._resolvePossibleFunction(t),t?Tt(t)?this._putElementInTemplate(It(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?no(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Lt(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const co="tooltip",uo=new Set(["sanitize","allowList","sanitizeFn"]),lo="fade",ho="modal",fo="show",po=".tooltip-inner",go=`.${ho}`,mo="hide.bs.modal",vo="hover",yo="focus",_o="click",wo="manual",bo="hide",Eo="hidden",To="show",Io="shown",Co="inserted",So="click",Ao="focusin",ko="focusout",Oo="mouseenter",Ro="mouseleave",No={AUTO:"auto",TOP:"top",RIGHT:Dt()?"left":"right",BOTTOM:"bottom",LEFT:Dt()?"right":"left"},xo={allowList:Ys,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Do={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Po extends un{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return xo}static get DefaultType(){return Do}static get NAME(){return co}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(go),mo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.eventName(To)),t=At(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),tn.trigger(this._element,this.constructor.eventName(Co))),this._popper=this._createPopper(r),r.classList.add(fo),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))tn.on(o,"mouseover",kt);const s=()=>{tn.trigger(this._element,this.constructor.eventName(Io)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=tn.trigger(this._element,this.constructor.eventName(bo));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(fo),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))tn.off(r,"mouseover",kt);this._activeTrigger[_o]=!1,this._activeTrigger[yo]=!1,this._activeTrigger[vo]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.eventName(Eo)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(lo,fo),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=wt(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(lo),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new ao({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[po]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(lo)}_isShown(){return this.tip&&this.tip.classList.contains(fo)}_createPopper(e){const t=Lt(this._config.placement,[this,e,this._element]),n=No[t.toUpperCase()];return lt(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return Lt(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...Lt(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)tn.on(this._element,this.constructor.eventName(So),this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t.toggle()}));else if(t!==wo){const e=t===vo?this.constructor.eventName(Oo):this.constructor.eventName(Ao),n=t===vo?this.constructor.eventName(Ro):this.constructor.eventName(ko);tn.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?yo:vo]=!0,t._enter()})),tn.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?yo:vo]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(go),mo,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=on.getDataAttributes(this._element);for(const n of Object.keys(t))uo.has(n)&&delete t[n];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:It(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=Po.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Pt(Po);const Lo="popover",Mo=".popover-header",Uo=".popover-body",Fo={...Po.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Vo={...Po.DefaultType,content:"(null|string|element|function)"};class jo extends Po{static get Default(){return Fo}static get DefaultType(){return Vo}static get NAME(){return Lo}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Mo]:this._getTitle(),[Uo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=jo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Pt(jo);const $o="scrollspy",Bo="bs.scrollspy",qo=`.${Bo}`,zo=".data-api",Ho=`activate${qo}`,Ko=`click${qo}`,Wo=`load${qo}${zo}`,Go="dropdown-item",Qo="active",Jo='[data-bs-spy="scroll"]',Xo="[href]",Yo=".nav, .list-group",Zo=".nav-link",ea=".nav-item",ta=".list-group-item",na=`${Zo}, ${ea} > ${Zo}, ${ta}`,ra=".dropdown",ia=".dropdown-toggle",sa={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oa={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class aa extends un{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sa}static get DefaultType(){return oa}static get NAME(){return $o}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=It(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(tn.off(this._config.target,Ko),tn.on(this._config.target,Ko,Xo,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:"smooth"});n.scrollTop=r}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(s),!r)return}else i||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=hn.find(Xo,this._config.target);for(const t of e){if(!t.hash||St(t))continue;const e=hn.findOne(decodeURI(t.hash),this._element);Ct(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Qo),this._activateParents(e),tn.trigger(this._element,Ho,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Go))hn.findOne(ia,e.closest(ra)).classList.add(Qo);else for(const t of hn.parents(e,Yo))for(const e of hn.prev(t,na))e.classList.add(Qo)}_clearActiveClass(e){e.classList.remove(Qo);const t=hn.find(`${Xo}.${Qo}`,e);for(const n of t)n.classList.remove(Qo)}static jQueryInterface(e){return this.each((function(){const t=aa.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(window,Wo,(()=>{for(const e of hn.find(Jo))aa.getOrCreateInstance(e)})),Pt(aa);const ca="tab",ua="bs.tab",la=`.${ua}`,ha=`hide${la}`,da=`hidden${la}`,fa=`show${la}`,pa=`shown${la}`,ga=`click${la}`,ma=`keydown${la}`,va=`load${la}`,ya="ArrowLeft",_a="ArrowRight",wa="ArrowUp",ba="ArrowDown",Ea="Home",Ta="End",Ia="active",Ca="fade",Sa="show",Aa="dropdown",ka=".dropdown-toggle",Oa=".dropdown-menu",Ra=":not(.dropdown-toggle)",Na='.list-group, .nav, [role="tablist"]',xa=".nav-item, .list-group-item",Da=`.nav-link${Ra}, .list-group-item${Ra}, [role="tab"]${Ra}`,Pa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',La=`${Da}, ${Pa}`,Ma=`.${Ia}[data-bs-toggle="tab"], .${Ia}[data-bs-toggle="pill"], .${Ia}[data-bs-toggle="list"]`;class Ua extends un{constructor(e){super(e),this._parent=this._element.closest(Na),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),tn.on(this._element,ma,(e=>this._keydown(e))))}static get NAME(){return ca}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?tn.trigger(t,ha,{relatedTarget:e}):null,r=tn.trigger(e,fa,{relatedTarget:t});r.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Ia),this._activate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),tn.trigger(e,pa,{relatedTarget:t})):e.classList.add(Sa)};this._queueCallback(n,e,e.classList.contains(Ca))}_deactivate(e,t){if(!e)return;e.classList.remove(Ia),e.blur(),this._deactivate(hn.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),tn.trigger(e,da,{relatedTarget:t})):e.classList.remove(Sa)};this._queueCallback(n,e,e.classList.contains(Ca))}_keydown(e){if(![ya,_a,wa,ba,Ea,Ta].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter((e=>!St(e)));let n;if([Ea,Ta].includes(e.key))n=t[e.key===Ea?0:t.length-1];else{const r=[_a,ba].includes(e.key);n=Ut(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Ua.getOrCreateInstance(n).show())}_getChildren(){return hn.find(La,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=hn.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(Aa))return;const r=(e,r)=>{const i=hn.findOne(e,n);i&&i.classList.toggle(r,t)};r(ka,Ia),r(Oa,Sa),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Ia)}_getInnerElement(e){return e.matches(La)?e:hn.findOne(La,e)}_getOuterElement(e){return e.closest(xa)||e}static jQueryInterface(e){return this.each((function(){const t=Ua.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(document,ga,Pa,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),St(this)||Ua.getOrCreateInstance(this).show()})),tn.on(window,va,(()=>{for(const e of hn.find(Ma))Ua.getOrCreateInstance(e)})),Pt(Ua);const Fa="toast",Va="bs.toast",ja=`.${Va}`,$a=`mouseover${ja}`,Ba=`mouseout${ja}`,qa=`focusin${ja}`,za=`focusout${ja}`,Ha=`hide${ja}`,Ka=`hidden${ja}`,Wa=`show${ja}`,Ga=`shown${ja}`,Qa="fade",Ja="hide",Xa="show",Ya="showing",Za={animation:"boolean",autohide:"boolean",delay:"number"},ec={animation:!0,autohide:!0,delay:5e3};class tc extends un{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ec}static get DefaultType(){return Za}static get NAME(){return Fa}show(){const e=tn.trigger(this._element,Wa);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Qa);const t=()=>{this._element.classList.remove(Ya),tn.trigger(this._element,Ga),this._maybeScheduleHide()};this._element.classList.remove(Ja),Ot(this._element),this._element.classList.add(Xa,Ya),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=tn.trigger(this._element,Ha);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Ja),this._element.classList.remove(Ya,Xa),tn.trigger(this._element,Ka)};this._element.classList.add(Ya),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Xa),super.dispose()}isShown(){return this._element.classList.contains(Xa)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,$a,(e=>this._onInteraction(e,!0))),tn.on(this._element,Ba,(e=>this._onInteraction(e,!1))),tn.on(this._element,qa,(e=>this._onInteraction(e,!0))),tn.on(this._element,za,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=tc.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}dn(tc),Pt(tc)},89:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},7077:function(e,t,n){n.d(t,{Jn:function(){return ge},qX:function(){return he},Xd:function(){return le},Mq:function(){return ve},ZF:function(){return me},KN:function(){return ye}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function _(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],A=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}_((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",x="0.9.19",D=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",G="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.4.0",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[G]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=ie;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(o,u),u}function ve(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return me();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}le(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",we=1,be="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=I(_e,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(be)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Ie(e){try{const t=await Te(),n=await t.transaction(be).objectStore(be).get(Se(e));return n}catch(t){if(t instanceof s.ZR)D.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ce(e,t){try{const n=await Te(),r=n.transaction(be,"readwrite"),i=r.objectStore(be);await i.put(t,Se(e)),await r.done}catch(n){if(n instanceof s.ZR)D.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,ke=2592e6;class Oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=ke})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Ne(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Ne(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){le(new r.wA("platform-logger",(e=>new O(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Oe(e)),"PRIVATE")),ye(N,x,e),ye(N,x,"esm2017"),ye("fire-js","")}Pe("")},7142:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7795:function(e,t,n){n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="10.4.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},4233:function(e,t,n){n.d(t,{Xb:function(){return Ot},v0:function(){return zr},Aj:function(){return Lt},e5:function(){return Rt},w7:function(){return Mt},ck:function(){return xt}});n(7658),n(6229),n(7330),n(2062);var r=n(223),i=n(7077),s=n(5168);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(7142);function c(e){return void 0!==e&&void 0!==e.enterprise}class u{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h=l,d=new r.LL("auth","Firebase",l()),f=new s.Yd("@firebase/auth");function p(e,...t){f.logLevel<=s["in"].WARN&&f.warn(`Auth (${i.Jn}): ${e}`,...t)}function g(e,...t){f.logLevel<=s["in"].ERROR&&f.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,...t){throw _(e,...t)}function v(e,...t){return _(e,...t)}function y(e,t,n){const i=Object.assign(Object.assign({},h()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return d.create(e,...t)}function w(e,t,...n){if(!e)throw _(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function E(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,s={}){return L(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function L(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw y(e,a,o);m(e,a)}}catch(s){if(s instanceof r.ZR)throw s;m(e,"network-request-failed",{message:String(s)})}}async function M(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&m(e,"multi-factor-auth-required",{_serverResponse:s}),s}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t){return P(e,"GET","/v2/recaptchaConfig",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=K(i);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(H(s.auth_time)),issuedAtTime:q(H(s.iat)),expirationTime:q(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function K(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function W(e){const t=K(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Q(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,B(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await L(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=U(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(w("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:T}=t;w(y&&T,e,"internal-error");const I=re.fromJSON(this.name,T);w("string"===typeof y,e,"internal-error"),ie(l,e.name),ie(h,e.name),w("boolean"===typeof _,e,"internal-error"),w("boolean"===typeof b,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(v,e.name);const C=new se({uid:y,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(C.providerData=E.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Map;function ae(e){E(e instanceof Function,"Expected a class definition");let t=oe.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,oe.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ce.type="NONE";const ue=ce;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class he{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,i),this.fullPersistenceKey=le("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new he(ae(ue),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ae(ue);const s=le(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=se._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new he(i,e,n)):new he(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ye(t))return"Blackberry";if(_e(t))return"Webos";if(pe(t))return"Safari";if((t.includes("chrome/")||ge(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=(0,r.z$)()){return/firefox\//i.test(e)}function pe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ge(e=(0,r.z$)()){return/crios\//i.test(e)}function me(e=(0,r.z$)()){return/iemobile/i.test(e)}function ve(e=(0,r.z$)()){return/android/i.test(e)}function ye(e=(0,r.z$)()){return/blackberry/i.test(e)}function _e(e=(0,r.z$)()){return/webos/i.test(e)}function we(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return we(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ee(){return(0,r.w1)()&&10===document.documentMode}function Te(e=(0,r.z$)()){return we(e)||ve(e)||_e(e)||ye(e)||/windows phone/i.test(e)||me(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=de((0,r.z$)());break;case"Worker":n=`${de((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t={}){return P(e,"GET","/v2/passwordPolicy",D(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=6;class Oe{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:ke,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xe(this),this.idTokenSubscription=new xe(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ae(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await he.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ae(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ae(this),t=new Oe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ae(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await he.create(this,[ae(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&p(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ne(e){return(0,r.m9)(e)}class xe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Pe(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",De().appendChild(r)}))}function Le(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Me="https://www.google.com/recaptcha/enterprise.js?render=",Ue="recaptcha-enterprise",Fe="NO_RECAPTCHA";class Ve{constructor(e){this.type=Ue,this.auth=Ne(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{j(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new u(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;c(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Fe)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&c(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Pe(Me+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function je(e,t,n,r=!1){const i=new Ve(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $e(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;m(e,"already-initialized")}const s=n.initialize({options:t});return s}function Be(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ae);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function qe(e,t,n){const r=Ne(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=ze(t),{host:o,port:a}=He(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||We()}function ze(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function He(e){const t=ze(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ke(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ke(t)}}}function Ke(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function We(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Je(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function Ye(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Ge{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ze(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ze(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await je(e,n,"signInWithPassword");return Je(e,t)}return Je(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await je(e,n,"signInWithPassword");return Je(e,t)}return Promise.reject(t)}));case"emailLink":return Xe(e,{email:this._email,oobCode:this._password});default:m(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Qe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:m(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="http://localhost";class nt extends Ge{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):m("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new nt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return et(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,et(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,et(e,t)}buildRequest(){const e={requestUri:tt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function it(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function st(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const ot={["USER_NOT_FOUND"]:"user-not-found"};async function at(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),ot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Ge{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ct({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ct({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return it(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return st(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return at(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ct({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lt(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class ht{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ut(null!==(i=c["mode"])&&void 0!==i?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=lt(e);try{return new ht(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Ze._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ht.parseLink(t);return w(n,"argument-error"),Ze._fromEmailAndCode(e,n.code,n.tenantId)}}dt.PROVIDER_ID="password",dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends ft{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends pt{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends pt{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt extends pt{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(e,t){return M(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.TWITTER_SIGN_IN_METHOD="twitter.com",yt.PROVIDER_ID="twitter.com";class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=bt(n),o=new wt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=bt(n);return new wt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Et.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Et(e,t,n,r)}}function Tt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Et._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await G(e,Tt(r,i,t,e),n);w(s.idToken,r,"internal-error");const o=K(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(e.uid===a,r,"user-mismatch"),wt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&m(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e,t,n=!1){const r="signIn",i=await Tt(e,r,t),s=await wt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function At(e,t){return St(Ne(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(e){const t=Ne(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Ot(e,t,n){var r;const i=Ne(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await je(i,s,"signUpPassword");o=_t(i,e)}else o=_t(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await je(i,s,"signUpPassword");return _t(i,e)}throw e}));const a=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&kt(e),t})),c=await wt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Rt(e,t,n){return At((0,r.m9)(e),dt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&kt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await G(i,Nt(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function Dt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function Pt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function Lt(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function Mt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ut(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Ft(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function Vt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function jt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const $t="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($t,"1"),this.storage.removeItem($t),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){const e=(0,r.z$)();return pe(e)||we(e)}const zt=1e3,Ht=10;class Kt extends Bt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qt()&&Ie(),this.fallbackToPolling=Te(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ee()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ht):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),zt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kt.type="LOCAL";const Wt=Kt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Bt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gt.type="SESSION";const Qt=Gt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Xt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Jt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.receivers=[];class Zt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Yt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function tn(e){en().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return"undefined"!==typeof en()["WorkerGlobalScope"]&&"function"===typeof en()["importScripts"]}async function rn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function sn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function on(){return nn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="firebaseLocalStorageDb",cn=1,un="firebaseLocalStorage",ln="fbase_key";class hn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function dn(e,t){return e.transaction([un],t?"readwrite":"readonly").objectStore(un)}function fn(){const e=indexedDB.deleteDatabase(an);return new hn(e).toPromise()}function pn(){const e=indexedDB.open(an,cn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(un,{keyPath:ln})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(un)?t(n):(n.close(),await fn(),t(await pn()))}))}))}async function gn(e,t,n){const r=dn(e,!0).put({[ln]:t,value:n});return new hn(r).toPromise()}async function mn(e,t){const n=dn(e,!1).get(t),r=await new hn(n).toPromise();return void 0===r?null:r.value}function vn(e,t){const n=dn(e,!0).delete(t);return new hn(n).toPromise()}const yn=800,_n=3;class wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await pn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>_n)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xt._getInstance(on()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await rn(),!this.activeServiceWorker)return;this.sender=new Zt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&sn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pn();return await gn(e,$t,"1"),await vn(e,$t),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>gn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>mn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=dn(e,!1).getAll();return new hn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),yn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wn.type="LOCAL";const bn=wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function Tn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}function In(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Le("rcb"),new k(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn="recaptcha";async function Sn(e,t,n){var r;const i=await n.verify();try{let s;if(w("string"===typeof i,e,"argument-error"),w(n.type===Cn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){w("enroll"===t.type,e,"internal-error");const n=await Ut(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;w(n,e,"missing-multi-factor-info");const o=await En(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await rt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{constructor(e){this.providerId=An.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return Sn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return ct._fromVerification(e,t)}static credentialFromResult(e){const t=e;return An.credentialFromTaggedObject(t)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ct._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(e,t){return t?ae(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.PROVIDER_ID="phone",An.PHONE_SIGN_IN_METHOD="phone";class On extends Ge{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return et(e,this._buildIdpRequest())}_linkToIdToken(e,t){return et(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return et(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rn(e){return St(e.auth,new On(e),e.bypassAuthState)}function Nn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Ct(n,new On(e),e.bypassAuthState)}async function xn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),It(n,new On(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rn;case"linkViaPopup":case"linkViaRedirect":return xn;case"reauthViaPopup":case"reauthViaRedirect":return Nn;default:m(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new k(2e3,1e4);class Ln extends Dn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Yt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Pn.get())};e()}}Ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mn="pendingRedirect",Un=new Map;class Fn extends Dn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const t=await Vn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Vn(e,t){const n=Bn(t),r=$n(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function jn(e,t){Un.set(e._key(),t)}function $n(e){return ae(e._redirectPersistence)}function Bn(e){return le(Mn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(e,t,n=!1){const r=Ne(e),i=kn(r,t),s=new Fn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zn=6e5;class Hn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Gn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kn(e))}saveEventToCache(e){this.cachedEventUids.add(Kn(e)),this.lastProcessedEventTime=Date.now()}}function Kn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Wn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Gn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;async function Yn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qn(e);for(const r of t)try{if(Zn(r))return}catch(n){}m(e,"unauthorized-domain")}function Zn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Xn.test(n))return!1;if(Jn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new k(3e4,6e4);function tr(){const e=en().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function nr(e){return new Promise(((t,n)=>{var r,i,s;function o(){tr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tr(),n(v(e,"network-request-failed"))},timeout:er.get()})}if(null===(i=null===(r=en().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=en().gapi)||void 0===s?void 0:s.load)){const t=Le("iframefcb");return en()[t]=()=>{gapi.load?o():n(v(e,"network-request-failed"))},Pe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw rr=null,e}))}let rr=null;function ir(e){return rr=rr||nr(e),rr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new k(5e3,15e3),or="__/auth/iframe",ar="emulator/auth/iframe",cr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lr(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,ar):`https://${e.config.authDomain}/${or}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=ur.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function hr(e){const t=await ir(e),n=en().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:lr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=v(e,"network-request-failed"),s=en().setTimeout((()=>{r(i)}),sr.get());function o(){en().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fr=500,pr=600,gr="_blank",mr="http://localhost";class vr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function yr(e,t,n,i=fr,s=pr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},dr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ge(l)?gr:n),fe(l)&&(t=t||mr,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(l)&&"_self"!==c)return _r(t||"",c),new vr(null);const d=window.open(t||"",c,h);w(d,e,"popup-blocked");try{d.focus()}catch(f){}return new vr(d)}function _r(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="__/auth/handler",br="emulator/auth/handler",Er=encodeURIComponent("fac");async function Tr(e,t,n,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof ft){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof pt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${Er}=${encodeURIComponent(l)}`:"";return`${Ir(e)}?${(0,r.xO)(u).slice(1)}${h}`}function Ir({config:e}){return e.emulator?O(e,br):`https://${e.authDomain}/${wr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="webStorageSupport";class Sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qt,this._completeRedirectFn=qn,this._overrideRedirectResult=jn}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Tr(e,t,n,T(),r);return yr(e,s,Yt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Tr(e,t,n,T(),r);return tn(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await hr(e),n=new Hn(e);return t.register("authEvent",(t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Cr,{type:Cr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Cr];void 0!==i&&t(!!i),m(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Te()||pe()||we()}}const Ar=Sr;class kr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Or extends kr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Or(e)}_finalizeEnroll(e,t,n){return Ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Tn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rr{constructor(){}static assertion(e){return Or._fromCredential(e)}}Rr.FACTOR_ID="phone";class Nr{static assertionForEnrollment(e,t){return xr._fromSecret(e,t)}static assertionForSignIn(e,t){return xr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Vt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Dr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Nr.FACTOR_ID="totp";class xr extends kr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new xr(t,void 0,e)}static _fromEnrollmentId(e,t){return new xr(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),jt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return In(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Dr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Dr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Pr(e)||Pr(t))&&(r=!0),r&&(Pr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Pr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Pr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Lr="@firebase/auth",Mr="1.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},u=new Re(r,i,s,c);return Be(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Ur(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Lr,Mr,Fr(e)),(0,i.KN)(Lr,Mr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=300,$r=(0,r.Pz)("authIdTokenMaxAge")||jr;let Br=null;const qr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$r)return;const i=null===n||void 0===n?void 0:n.token;Br!==i&&(Br=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$e(e,{popupRedirectResolver:Ar,persistence:[bn,Wt,Qt]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=qr(s);Pt(n,e,(()=>e(n.currentUser))),Dt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&qe(n,`http://${o}`),n}Vr("Browser")},4287:function(e,t,n){n.d(t,{ET:function(){return sd},hJ:function(){return ah},JU:function(){return ch},QT:function(){return td},PL:function(){return rd},ad:function(){return hh},IO:function(){return $h},pl:function(){return id}});n(1439),n(7585),n(5315),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function y(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,_.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",(()=>{}),t),h.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}function R(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function N(e){return-1!=R().indexOf(e)}function x(e){return x[" "](e),e}function D(e,t){var n=wr;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}x[" "]=function(){};var P,L,M=N("Opera"),U=N("Trident")||N("MSIE"),F=N("Edge"),V=F||U,j=N("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),$=-1!=R().toLowerCase().indexOf("webkit")&&!N("Edge");function B(){var e=h.document;return e?e.documentMode:void 0}e:{var q="",z=function(){var e=R();return j?/rv:([^\);]+)(\)|;)/.exec(e):F?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(q=z?z[1]:""),U){var H=B();if(null!=H&&H>parseFloat(q)){P=String(H);break e}}P=q}if(h.document&&U){var K=B();L=K||(parseInt(P,10)||void 0)}else L=void 0;var W=L;function G(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{x(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}b(G,A);var Q={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Y(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=we(n),e&&e[J]?e.O(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=ye(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)k||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ve;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=we(n),e&&e[J]?e.P(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=we(n),e&&e[J]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[J])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):Z(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ve(e,t){if(e.fa)e=!0;else{t=new G(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function ye(e){return e=e[ce],e instanceof se?e:null}var _e="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[_e]||(e[_e]=function(t){return e.handleEvent(t)}),e[_e])}function be(){E.call(this),this.i=new se(this),this.S=this,this.J=null}function Ee(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),ie(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}b(be,E),be.prototype[J]=!0,be.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},be.prototype.N=function(){if(be.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Z(n[r]);delete t.g[e],t.h--}}this.J=null},be.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},be.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ie=h.JSON.stringify;class Ce{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Se(){var e=Pe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=ke.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var ke=new Ce((()=>new Oe),(e=>e.reset()));class Oe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Re(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ne(e){h.setTimeout((()=>{throw e}),0)}let xe,De=!1,Pe=new Ae,Le=()=>{const e=h.Promise.resolve(void 0);xe=()=>{e.then(Me)}};var Me=()=>{for(var e;e=Se();){try{e.h.call(e.g)}catch(n){Ne(n)}var t=ke;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}De=!1};function Ue(e,t){be.call(this),this.h=e||1,this.g=t||h,this.j=_(this.qb,this),this.l=Date.now()}function Fe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ve(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function je(e){e.g=Ve((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Ue,be),r=Ue.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Fe(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ue.$.N.call(this),Fe(this),delete this.g};class $e extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){E.call(this),this.h=e,this.g={}}b(Be,E);var qe=[];function ze(e,t,n,r){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var i=0;i<n.length;i++){var s=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function He(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function Ke(){this.g=!0}function We(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ge(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Qe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Xe(e,n)+(r?" "+r:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Xe(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ie(n)}catch(a){return t}}Be.prototype.N=function(){Be.$.N.call(this),He(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ke.prototype.Ea=function(){this.g=!1},Ke.prototype.info=function(){};var Ye={},Ze=null;function et(){return Ze=Ze||new be}function tt(e){A.call(this,Ye.Ta,e)}function nt(e){const t=et();Ee(t,new tt(t))}function rt(e,t){A.call(this,Ye.STAT_EVENT,e),this.stat=t}function it(e){const t=et();Ee(t,new rt(t,e))}function st(e,t){A.call(this,Ye.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Ye.Ta="serverreachability",b(tt,A),Ye.STAT_EVENT="statevent",b(rt,A),Ye.Ua="timingevent",b(st,A);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function lt(e){return e.h||(e.h=e.i())}function ht(){}ut.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){A.call(this,"d")}function gt(){A.call(this,"c")}function mt(){}function vt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Be(this),this.P=_t,e=V?125:void 0,this.V=new Ue(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}b(pt,A),b(gt,A),b(mt,ut),mt.prototype.g=function(){return new XMLHttpRequest},mt.prototype.i=function(){return{}},dt=new mt;var _t=45e3,wt={},bt={};function Et(e,t,n){e.L=1,e.v=zt(Vt(t)),e.s=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),At(e),e.A=Vt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new yt,e.g=ur(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $e(_(e.Pa,e,e.g),e.O)),ze(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),nt(),We(e.j,e.u,e.A,e.m,e.W,e.s)}function It(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ct(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=St(e,n),r==bt){4==t&&(e.o=4,it(14),i=!1),Qe(e.j,e.m,null,"[Incomplete Response]");break}if(r==wt){e.o=4,it(15),Qe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Qe(e.j,e.m,r,null),xt(e,r)}It(e)&&r!=bt&&r!=wt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,it(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tr(t),t.M=!0,it(11))):(Qe(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),Rt(e))}function St(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?bt:(n=Number(t.substring(n,r)),isNaN(n)?wt:(r+=1,r+n>t.length?bt:(t=t.slice(r,r+n),e.C=r+n,t)))}function At(e){e.Y=Date.now()+e.P,kt(e,e.P)}function kt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ot(_(e.lb,e),t)}function Ot(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.H||e.J||ir(e.l,e)}function Nt(e){Ot(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Fe(e.V),He(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function xt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;rr(n),Kn(n)}er(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ot(_(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((e.K||n.g==e)&&rr(n),!O(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,qt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ot(a),At(a)),r.g=o}else Zn(r);0<n.j.length&&Gn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Hn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}nt(4)}catch(u){}}function Dt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Pt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Lt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Pt(e),r=Dt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=vt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Fn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Fn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.ja()||Vn(this.g)))){this.J||4!=l||7==t||nt(8==t||0>=d?3:2),Ot(this);var n=this.g.da();this.ca=n;t:if(It(this)){var r=Vn(this.g);e="";var i=r.length,s=4==Fn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Nt(this),Rt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ge(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,it(12),Nt(this),Rt(this);break e}Qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xt(this,n)}this.S?(Ct(this,l,o),V&&this.i&&3==l&&(ze(this.U,this.V,"tick",this.mb),this.V.start())):(Qe(this.j,this.m,o,null),xt(this,o)),4==l&&Nt(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,At(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Nt(this),Rt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Fn(this.g),t=this.g.ja();this.C<t.length&&(Ot(this),Ct(this,e,t),this.i&&4!=e&&At(this))}},r.cancel=function(){this.J=!0,Nt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Je(this.j,this.A),2!=this.L&&(nt(),it(17)),Nt(this),this.o=2,Rt(this)):kt(this,this.Y-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ut(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ft(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=e.h,jt(this,e.j),this.s=e.s,this.g=e.g,$t(this,e.m),this.l=e.l;var t=e.i,n=new Zt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bt(this,n),this.o=e.o}else e&&(t=String(e).match(Mt))?(this.h=!1,jt(this,t[1]||"",!0),this.s=Ht(t[2]||""),this.g=Ht(t[3]||"",!0),$t(this,t[4]),this.l=Ht(t[5]||"",!0),Bt(this,t[6]||"",!0),this.o=Ht(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function Vt(e){return new Ft(e)}function jt(e,t,n){e.j=n?Ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,n){t instanceof Zt?(e.i=t,on(e.i,e.h)):(n||(t=Kt(t,Xt)),e.i=new Zt(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function zt(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Kt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Wt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Kt(t,Gt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Kt(t,Gt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Kt(n,"/"==n.charAt(0)?Jt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Kt(n,Yt)),e.join("")};var Gt=/[#\/\?@]/g,Qt=/[#\?:]/g,Jt=/[#\?]/g,Xt=/[#\?@]/g,Yt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ut(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),C(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}r=Zt.prototype,r.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){en(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||un,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return C(e.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var mn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function vn(){this.g=new mn}function yn(e,t,n){const r=n||"";try{Lt(e,(function(e,n){let i=e;f(e)&&(i=Ie(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _n(e,t){const n=new Ke;if(h.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,t),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function wn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function bn(e){this.l=e.ec||null,this.j=e.ob||!1}function En(e,t){be.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ut),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(e){return function(){return e}}({}),b(En,be);var Tn=0;function In(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Sn(e)}function Sn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Sn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Cn(this)),this.readyState=Tn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Cn(this):Sn(this),3==this.readyState&&In(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Cn(this))},r.Ya=function(e){this.g&&(this.response=e,Cn(this))},r.ka=function(){this.g&&Cn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=h.JSON.parse;function kn(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=On,this.L=this.M=!1}b(kn,be);var On="",Rn=/^https?$/i,Nn=["POST","PUT"];function xn(e){return U&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Dn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pn(e),Mn(e)}function Pn(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Ln(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Fn(e)||2!=e.da()))if(e.v&&4==Fn(e))Ve(e.La,0,e);else if(Ee(e,"readystatechange"),4==Fn(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Mt)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!Rn.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Fn(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Pn(e)}}finally{Mn(e)}}}function Mn(e,t){if(e.g){Un(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Un(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Fn(e){return e.g?e.g.readyState:0}function Vn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case On:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function jn(e){const t={};e=(e.g&&2<=Fn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(O(e[r]))continue;var n=Re(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}te(t,(function(e){return e.join(", ")}))}function $n(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Bn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$n(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ga=0,this.j=[],this.l=new Ke,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,e),this.hb=qn("retryDelaySeedMs",1e4,e),this.eb=qn("forwardChannelMaxRetries",2,e),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new vn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(e){if(Wn(e),3==e.H){var t=e.W++,n=Vt(e.I);if(qt(n,"SID",e.K),qt(n,"RID",t),qt(n,"TYPE","terminate"),Xn(e,n),t=new vt(e,e.l,t),t.L=2,t.v=zt(Vt(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=ur(t.l,null),t.g.ha(t.v)),t.G=Date.now(),At(t)}ar(e)}function Kn(e){e.g&&(tr(e),e.g.cancel(),e.g=null)}function Wn(e){Kn(e),e.u&&(h.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Gn(e){if(!ln(e.i)&&!e.m){e.m=!0;var t=e.Na;xe||Le(),De||(xe(),De=!0),Pe.add(t,e),e.C=0}}function Qn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(_(e.Na,e,t),sr(e,e.C)),e.C++,!0))}function Jn(e,t){var n;n=t?t.m:e.W++;const r=Vt(e.I);qt(r,"SID",e.K),qt(r,"RID",n),qt(r,"AID",e.V),Xn(e,r),e.o&&e.s&&Bn(r,e.o,e.s),n=new vt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Yn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),Et(n,r,t)}function Xn(e,t){e.na&&ee(e.na,(function(e,n){qt(t,n,e)})),e.h&&Lt({},(function(e,n){qt(t,n,e)}))}function Yn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{yn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Zn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;xe||Le(),De||(xe(),De=!0),Pe.add(t,e),e.A=0}}function er(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(_(e.Ma,e),sr(e,e.A)),e.A++,!0)}function tr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new vt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Vt(e.wa);qt(t,"RID","rpc"),qt(t,"SID",e.K),qt(t,"AID",e.V),qt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&qt(t,"TO",e.qa),qt(t,"TYPE","xmlhttp"),Xn(e,t),e.o&&e.s&&Bn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=zt(Vt(t)),n.s=null,n.S=!0,Tt(n,e)}function rr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ir(e,t){var n=null;if(e.g==t){rr(e),tr(e),e.g=null;var r=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=et(),Ee(r,new st(r,n)),Gn(e)}else Zn(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&Qn(e,t)||2==r&&er(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:or(e,5);break;case 4:or(e,10);break;case 3:or(e,6);break;default:or(e,2)}}function sr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function or(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=_(e.pb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||jt(n,"https"),zt(n)),_n(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),ar(e),Wn(e)}function ar(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(S(e.ma,t),S(e.ma,e.j),e.i.i.length=0,C(e.j),e.j.length=0),e.h.ya()}}function cr(e,t,n){var r=n instanceof Ft?Vt(n):new Ft(n);if(""!=r.g)t&&(r.g=t+"."+r.g),$t(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ft(null);r&&jt(s,r),t&&(s.g=t),i&&$t(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&qt(r,n,t),qt(r,"VER",e.ra),Xn(e,r),r}function ur(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new kn(new bn({ob:!0})):new kn(e.va),t.Oa(e.J),t}function lr(){}function hr(){if(U&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function dr(e,t){be.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function fr(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pr(){gt.call(this),this.status=1}function gr(e){this.g=e}function mr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function _r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?lt(this.u):lt(dt),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Dn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=I(Nn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Un(this),0<this.B&&((this.L=xn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=Ve(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Dn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Fn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new vt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ne(s),ie(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Yn(this,i,t),n=Vt(this.I),qt(n,"RID",e),qt(n,"CVER",22),this.F&&qt(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String($n(s)))+"&"+t:this.o&&Bn(n,this.o,s)),fn(this.i,i),this.bb&&qt(n,"TYPE","init"),this.P?(qt(n,"$req",t),qt(n,"SID","null"),i.aa=!0,Et(i,n,null)):Et(i,n,t),this.H=2}}else 3==this.H&&(e?Jn(this,e):0==this.j.length||ln(this.i)||Jn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(_(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),Kn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),er(this),it(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(e,t){return new dr(e,t)},b(dr,be),dr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cr(e,null,e.Y),Gn(e)},dr.prototype.close=function(){Hn(this.g)},dr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ie(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Gn(t)},dr.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,dr.$.N.call(this)},b(fr,pt),b(pr,gt),b(gr,lr),gr.prototype.Ba=function(){Ee(this.g,"a")},gr.prototype.Aa=function(e){Ee(this.g,new fr(e))},gr.prototype.za=function(e){Ee(this.g,new pr)},gr.prototype.ya=function(){Ee(this.g,"b")},b(vr,mr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)yr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){yr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=t},vr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var wr={};function br(e){return-128<=e&&128>e?D(e,(function(e){return new _r([0|e],0>e?-1:0)})):new _r([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return Cr;if(0>e)return Rr(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ir;return new _r(t,0)}function Tr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Rr(Tr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=Cr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Ir=4294967296,Cr=br(0),Sr=br(1),Ar=br(16777216);function kr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Or(e){return-1==e.h}function Rr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new _r(n,~e.h).add(Sr)}function Nr(e,t){return e.add(Rr(t))}function xr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Dr(e,t){this.g=e,this.h=t}function Pr(e,t){if(kr(t))throw Error("division by zero");if(kr(e))return new Dr(Cr,Cr);if(Or(e))return t=Pr(Rr(e),t),new Dr(Rr(t.g),Rr(t.h));if(Or(t))return t=Pr(e,Rr(t)),new Dr(Rr(t.g),t.h);if(30<e.g.length){if(Or(e)||Or(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Sr,r=t;0>=r.X(e);)n=Lr(n),r=Lr(r);var i=Mr(n,1),s=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!kr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Mr(r,1),n=Mr(n,1)}return t=Nr(e,i.R(t)),new Dr(i,t)}for(i=Cr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Or(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);kr(s)&&(s=Sr),i=i.add(s),e=Nr(e,o)}return new Dr(i,e)}function Lr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new _r(n,e.h)}function Mr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new _r(i,e.h)}r=_r.prototype,r.ea=function(){if(Or(this))return-Rr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ir+r)*t,t*=Ir}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(kr(this))return"0";if(Or(this))return"-"+Rr(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Pr(n,t).g;n=Nr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Nr(this,e),Or(e)?-1:kr(e)?0:1},r.abs=function(){return Or(this)?Rr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(kr(this)||kr(e))return Cr;if(Or(this))return Or(e)?Rr(this).R(Rr(e)):Rr(Rr(this).R(e));if(Or(e))return Rr(this.R(Rr(e)));if(0>this.X(Ar)&&0>e.X(Ar))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,xr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,xr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,xr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,xr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new _r(n,0)},r.gb=function(e){return Pr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new _r(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new _r(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new _r(n,this.h^e.h)},hr.prototype.createWebChannel=hr.prototype.g,dr.prototype.send=dr.prototype.u,dr.prototype.open=dr.prototype.m,dr.prototype.close=dr.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",be.prototype.listen=be.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Er,_r.fromString=Tr;var Ur=u.createWebChannelTransport=function(){return new hr},Fr=u.getStatEventTarget=function(){return et()},Vr=u.ErrorCode=at,jr=u.EventType=ct,$r=u.Event=Ye,Br=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=(u.FetchXmlHttpFactory=bn,u.WebChannel=ht),zr=u.XhrIo=kn,Hr=u.Md5=vr,Kr=u.Integer=_r;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gr.UNAUTHENTICATED=new Gr(null),Gr.GOOGLE_CREDENTIALS=new Gr("google-credentials-uid"),Gr.FIRST_PARTY=new Gr("first-party-uid"),Gr.MOCK_USER=new Gr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="10.4.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new o.Yd("@firebase/firestore");function Xr(){return Jr.logLevel}function Yr(e,...t){if(Jr.logLevel<=o["in"].DEBUG){const n=t.map(ti);Jr.debug(`Firestore (${Qr}): ${e}`,...n)}}function Zr(e,...t){if(Jr.logLevel<=o["in"].ERROR){const n=t.map(ti);Jr.error(`Firestore (${Qr}): ${e}`,...n)}}function ei(e,...t){if(Jr.logLevel<=o["in"].WARN){const n=t.map(ti);Jr.warn(`Firestore (${Qr}): ${e}`,...n)}}function ti(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e="Unexpected state"){const t=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+e;throw Zr(t),new Error(t)}function ri(e,t){e||ni()}function ii(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oi extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ui{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Gr.UNAUTHENTICATED)))}shutdown(){}}class li{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hi{constructor(e){this.t=e,this.currentUser=Gr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ai,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Yr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Yr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ai)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Yr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ri("string"==typeof t.accessToken),new ci(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ri(null===e||"string"==typeof e),new Gr(e)}}class di{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Gr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fi{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new di(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Gr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Yr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Yr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Yr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Yr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ri("string"==typeof e.token),this.R=e.token,new pi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=mi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function yi(e,t){return e<t?-1:e>t?1:0}function _i(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wi.fromMillis(Date.now())}static fromDate(e){return wi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new wi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?yi(this.nanoseconds,e.nanoseconds):yi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new bi(e)}static min(){return new bi(new wi(0,0))}static max(){return new bi(new wi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,n){void 0===t?t=0:t>e.length&&ni(),void 0===n?n=e.length-t:n>e.length-t&&ni(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ei.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ti extends Ei{construct(e,t,n){return new Ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new oi(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ti(t)}static emptyPath(){return new Ti([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ci extends Ei{construct(e,t,n){return new Ci(e,t,n)}static isValidIdentifier(e){return Ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ci.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ci(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new oi(si.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new oi(si.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new oi(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new oi(si.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ci(t)}static emptyPath(){return new Ci([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.path=e}static fromPath(e){return new Si(Ti.fromString(e))}static fromName(e){return new Si(Ti.fromString(e).popFirst(5))}static empty(){return new Si(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Si(new Ti(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function ki(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=bi.fromTimestamp(1e9===r?new wi(n+1,0):new wi(n,r));return new Ri(i,Si.empty(),t)}function Oi(e){return new Ri(e.readTime,e.key,-1)}class Ri{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ri(bi.min(),Si.empty(),-1)}static max(){return new Ri(bi.max(),Si.empty(),-1)}}function Ni(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Si.comparator(e.documentKey,t.documentKey),0!==n?n:yi(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e){if(e.code!==si.FAILED_PRECONDITION||e.message!==xi)throw e;Yr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ni(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Li(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Li?t:Li.resolve(t)}catch(e){return Li.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.reject(t)}static resolve(e){return new Li(((t,n)=>{t(e)}))}static reject(e){return new Li(((t,n)=>{n(e)}))}static waitFor(e){return new Li(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Li.resolve(!1);for(const n of e)t=t.next((e=>e?Li.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Li(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Li(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function Fi(e){return null==e}function Vi(e){return 0===e&&1/e==-1/0}function ji(e){return"number"==typeof e&&Number.isInteger(e)&&!Vi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.ae=-1;const $i=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qi=Bi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Hi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ki(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.comparator=e,this.root=t||Qi.EMPTY}insert(e,t){return new Wi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qi.BLACK,null,null))}remove(e){return new Wi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gi(this.root,e,this.comparator,!0)}}class Gi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Qi.RED,this.left=null!=r?r:Qi.EMPTY,this.right=null!=i?i:Qi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Qi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Qi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ni();if(this.right.isRed())throw ni();const e=this.left.check();if(e!==this.right.check())throw ni();return e+(this.isRed()?0:1)}}Qi.EMPTY=null,Qi.RED=!0,Qi.BLACK=!1,Qi.EMPTY=new class{constructor(){this.size=0}get key(){throw ni()}get value(){throw ni()}get color(){throw ni()}get left(){throw ni()}get right(){throw ni()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Qi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e){this.comparator=e,this.data=new Wi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(e){return new Xi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ji))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ji(this.comparator);return t.data=e,t}}class Xi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(e){this.fields=e,e.sort(Ci.comparator)}static empty(){return new Yi([])}unionWith(e){let t=new Ji(Ci.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Yi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Zi("Invalid base64 string: "+e):e}}(e);return new es(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new es(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return yi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");const ts=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(e){if(ri(!!e),"string"==typeof e){let t=0;const n=ts.exec(e);if(ri(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rs(e.seconds),nanos:rs(e.nanos)}}function rs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function is(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function os(e){const t=e.mapValue.fields.__previous_value__;return ss(t)?os(t):t}function as(e){const t=ns(e.mapValue.fields.__local_write_time__.timestampValue);return new wi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class us{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ss(e)?4:Cs(e)?9007199254740991:10:ni()}function ds(e,t){if(e===t)return!0;const n=hs(e);if(n!==hs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return as(e).isEqual(as(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ns(e.timestampValue),r=ns(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return is(e.bytesValue).isEqual(is(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return rs(e.geoPointValue.latitude)===rs(t.geoPointValue.latitude)&&rs(e.geoPointValue.longitude)===rs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rs(e.integerValue)===rs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=rs(e.doubleValue),r=rs(t.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return _i(e.arrayValue.values||[],t.arrayValue.values||[],ds);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(zi(n)!==zi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ds(n[i],r[i])))return!1;return!0}(e,t);default:return ni()}}function fs(e,t){return void 0!==(e.values||[]).find((e=>ds(e,t)))}function ps(e,t){if(e===t)return 0;const n=hs(e),r=hs(t);if(n!==r)return yi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=rs(e.integerValue||e.doubleValue),r=rs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return gs(e.timestampValue,t.timestampValue);case 4:return gs(as(e),as(t));case 5:return yi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=is(e),r=is(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=yi(n[i],r[i]);if(0!==e)return e}return yi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=yi(rs(e.latitude),rs(t.latitude));return 0!==n?n:yi(rs(e.longitude),rs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ps(n[i],r[i]);if(e)return e}return yi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ls.mapValue&&t===ls.mapValue)return 0;if(e===ls.mapValue)return 1;if(t===ls.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=yi(r[o],s[o]);if(0!==e)return e;const t=ps(n[r[o]],i[s[o]]);if(0!==t)return t}return yi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ni()}}function gs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return yi(e,t);const n=ns(e),r=ns(t),i=yi(n.seconds,r.seconds);return 0!==i?i:yi(n.nanos,r.nanos)}function ms(e){return vs(e)}function vs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ns(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return is(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Si.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=vs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${vs(e.fields[i])}`;return n+"}"}(e.mapValue):ni()}function ys(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function _s(e){return!!e&&"integerValue"in e}function ws(e){return!!e&&"arrayValue"in e}function bs(e){return!!e&&"nullValue"in e}function Es(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ts(e){return!!e&&"mapValue"in e}function Is(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Hi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Is(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Is(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Cs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(e){this.value=e}static empty(){return new Ss({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(t)}setAll(e){let t=Ci.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Is(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ds(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ts(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Hi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Ss(Is(this.value))}}function As(e){const t=[];return Hi(e.fields,((e,n)=>{const r=new Ci([e]);if(Ts(n)){const e=As(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Yi(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ks{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ks(e,0,bi.min(),bi.min(),bi.min(),Ss.empty(),0)}static newFoundDocument(e,t,n,r){return new ks(e,1,t,bi.min(),n,r,0)}static newNoDocument(e,t){return new ks(e,2,t,bi.min(),bi.min(),Ss.empty(),0)}static newUnknownDocument(e,t){return new ks(e,3,t,bi.min(),bi.min(),Ss.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(bi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ss.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bi.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ks&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ks(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.position=e,this.inclusive=t}}function Rs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Si.comparator(Si.fromName(o.referenceValue),n.key):ps(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ns(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ds(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ds(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{}class Ls extends Ps{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new qs(e,t,n):"array-contains"===t?new Ws(e,n):"in"===t?new Gs(e,n):"not-in"===t?new Qs(e,n):"array-contains-any"===t?new Js(e,n):new Ls(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new zs(e,n):new Hs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ps(t,this.value)):null!==t&&hs(this.value)===hs(t)&&this.matchesComparison(ps(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ni()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ms extends Ps{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ms(e,t)}matches(e){return Us(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le((e=>e.isInequality()));return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Us(e){return"and"===e.op}function Fs(e){return Vs(e)&&Us(e)}function Vs(e){for(const t of e.filters)if(t instanceof Ms)return!1;return!0}function js(e){if(e instanceof Ls)return e.field.canonicalString()+e.op.toString()+ms(e.value);if(Fs(e))return e.filters.map((e=>js(e))).join(",");{const t=e.filters.map((e=>js(e))).join(",");return`${e.op}(${t})`}}function $s(e,t){return e instanceof Ls?function(e,t){return t instanceof Ls&&e.op===t.op&&e.field.isEqual(t.field)&&ds(e.value,t.value)}(e,t):e instanceof Ms?function(e,t){return t instanceof Ms&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&$s(n,t.filters[r])),!0)}(e,t):void ni()}function Bs(e){return e instanceof Ls?function(e){return`${e.field.canonicalString()} ${e.op} ${ms(e.value)}`}(e):e instanceof Ms?function(e){return e.op.toString()+" {"+e.getFilters().map(Bs).join(" ,")+"}"}(e):"Filter"}class qs extends Ls{constructor(e,t,n){super(e,t,n),this.key=Si.fromName(n.referenceValue)}matches(e){const t=Si.comparator(e.key,this.key);return this.matchesComparison(t)}}class zs extends Ls{constructor(e,t){super(e,"in",t),this.keys=Ks("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Hs extends Ls{constructor(e,t){super(e,"not-in",t),this.keys=Ks("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ks(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Si.fromName(e.referenceValue)))}class Ws extends Ls{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ws(t)&&fs(t.arrayValue,this.value)}}class Gs extends Ls{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&fs(this.value.arrayValue,t)}}class Qs extends Ls{constructor(e,t){super(e,"not-in",t)}matches(e){if(fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!fs(this.value.arrayValue,t)}}class Js extends Ls{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ws(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>fs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function Ys(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Xs(e,t,n,r,i,s,o)}function Zs(e){const t=ii(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>js(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Fi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ms(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ms(e))).join(",")),t.he=e}return t.he}function eo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ds(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$s(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ns(e.startAt,t.startAt)&&Ns(e.endAt,t.endAt)}function to(e){return Si.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ro(e,t,n,r,i,s,o,a){return new no(e,t,n,r,i,s,o,a)}function io(e){return new no(e)}function so(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function oo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ao(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function co(e){return null!==e.collectionGroup}function uo(e){const t=ii(e);if(null===t.Pe){t.Pe=[];const e=ao(t),n=oo(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new xs(e)),t.Pe.push(new xs(Ci.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new xs(Ci.keyField(),e))}}}return t.Pe}function lo(e){const t=ii(e);return t.Ie||(t.Ie=ho(t,uo(e))),t.Ie}function ho(e,t){if("F"===e.limitType)return Ys(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new xs(e.field,t)}));const n=e.endAt?new Os(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Os(e.startAt.position,e.startAt.inclusive):null;return Ys(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function fo(e,t){t.getFirstInequalityField(),ao(e);const n=e.filters.concat([t]);return new no(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function po(e,t,n){return new no(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function go(e,t){return eo(lo(e),lo(t))&&e.limitType===t.limitType}function mo(e){return`${Zs(lo(e))}|lt:${e.limitType}`}function vo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Bs(e))).join(", ")}]`),Fi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ms(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ms(e))).join(",")),`Target(${t})`}(lo(e))}; limitType=${e.limitType})`}function yo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Si.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of uo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Rs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,uo(e),t))&&!(e.endAt&&!function(e,t,n){const r=Rs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,uo(e),t))}(e,t)}function _o(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function wo(e){return(t,n)=>{let r=!1;for(const i of uo(e)){const e=bo(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function bo(e,t,n){const r=e.field.isKeyField()?Si.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ps(r,i):ni()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ni()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ki(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Wi(Si.comparator);function Io(){return To}const Co=new Wi(Si.comparator);function So(...e){let t=Co;for(const n of e)t=t.insert(n.key,n);return t}function Ao(e){let t=Co;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ko(){return Ro()}function Oo(){return Ro()}function Ro(){return new Eo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const No=new Wi(Si.comparator),xo=new Ji(Si.comparator);function Do(...e){let t=xo;for(const n of e)t=t.add(n);return t}const Po=new Ji(yi);function Lo(){return Po}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(t)?"-0":t}}function Uo(e){return{integerValue:""+e}}function Fo(e,t){return ji(t)?Uo(t):Mo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function jo(e,t,n){return e instanceof qo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ss(t)&&(t=os(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof zo?Ho(e,t):e instanceof Ko?Wo(e,t):function(e,t){const n=Bo(e,t),r=Qo(n)+Qo(e.Te);return _s(n)&&_s(e.Te)?Uo(r):Mo(e.serializer,r)}(e,t)}function $o(e,t,n){return e instanceof zo?Ho(e,t):e instanceof Ko?Wo(e,t):n}function Bo(e,t){return e instanceof Go?function(e){return _s(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class qo extends Vo{}class zo extends Vo{constructor(e){super(),this.elements=e}}function Ho(e,t){const n=Jo(t);for(const r of e.elements)n.some((e=>ds(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ko extends Vo{constructor(e){super(),this.elements=e}}function Wo(e,t){let n=Jo(t);for(const r of e.elements)n=n.filter((e=>!ds(e,r)));return{arrayValue:{values:n}}}class Go extends Vo{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Qo(e){return rs(e.integerValue||e.doubleValue)}function Jo(e){return ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof zo&&t instanceof zo||e instanceof Ko&&t instanceof Ko?_i(e.elements,t.elements,ds):e instanceof Go&&t instanceof Go?ds(e.Te,t.Te):e instanceof qo&&t instanceof qo}(e.transform,t.transform)}class Yo{constructor(e,t){this.version=e,this.transformResults=t}}class Zo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zo}static exists(e){return new Zo(void 0,e)}static updateTime(e){return new Zo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ta{}function na(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new da(e.key,Zo.none()):new aa(e.key,e.data,Zo.none());{const n=e.data,r=Ss.empty();let i=new Ji(Ci.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ca(e.key,r,new Yi(i.toArray()),Zo.none())}}function ra(e,t,n){e instanceof aa?function(e,t,n){const r=e.value.clone(),i=la(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ca?function(e,t,n){if(!ea(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=la(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ua(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ia(e,t,n,r){return e instanceof aa?function(e,t,n,r){if(!ea(e.precondition,t))return n;const i=e.value.clone(),s=ha(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ca?function(e,t,n,r){if(!ea(e.precondition,t))return n;const i=ha(e.fieldTransforms,r,t),s=t.data;return s.setAll(ua(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ea(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function sa(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Bo(r.transform,e||null);null!=i&&(null===n&&(n=Ss.empty()),n.set(r.field,i))}return n||null}function oa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&_i(e,t,((e,t)=>Xo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class aa extends ta{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ca extends ta{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ua(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function la(e,t,n){const r=new Map;ri(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,$o(o,a,n[i]))}return r}function ha(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,jo(e,s,t))}return r}class da extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fa extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ra(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ia(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ia(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Oo();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=na(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(bi.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Do())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,((e,t)=>oa(e,t)))&&_i(this.baseMutations,e.baseMutations,((e,t)=>oa(e,t)))}}class ga{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ri(e.mutations.length===n.length);let r=function(){return No}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ga(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya,_a;function wa(e){switch(e){default:return ni();case si.CANCELLED:case si.UNKNOWN:case si.DEADLINE_EXCEEDED:case si.RESOURCE_EXHAUSTED:case si.INTERNAL:case si.UNAVAILABLE:case si.UNAUTHENTICATED:return!1;case si.INVALID_ARGUMENT:case si.NOT_FOUND:case si.ALREADY_EXISTS:case si.PERMISSION_DENIED:case si.FAILED_PRECONDITION:case si.ABORTED:case si.OUT_OF_RANGE:case si.UNIMPLEMENTED:case si.DATA_LOSS:return!0}}function ba(e){if(void 0===e)return Zr("GRPC error has no .code"),si.UNKNOWN;switch(e){case ya.OK:return si.OK;case ya.CANCELLED:return si.CANCELLED;case ya.UNKNOWN:return si.UNKNOWN;case ya.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case ya.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case ya.INTERNAL:return si.INTERNAL;case ya.UNAVAILABLE:return si.UNAVAILABLE;case ya.UNAUTHENTICATED:return si.UNAUTHENTICATED;case ya.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case ya.NOT_FOUND:return si.NOT_FOUND;case ya.ALREADY_EXISTS:return si.ALREADY_EXISTS;case ya.PERMISSION_DENIED:return si.PERMISSION_DENIED;case ya.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case ya.ABORTED:return si.ABORTED;case ya.OUT_OF_RANGE:return si.OUT_OF_RANGE;case ya.UNIMPLEMENTED:return si.UNIMPLEMENTED;case ya.DATA_LOSS:return si.DATA_LOSS;default:return ni()}}(_a=ya||(ya={}))[_a.OK=0]="OK",_a[_a.CANCELLED=1]="CANCELLED",_a[_a.UNKNOWN=2]="UNKNOWN",_a[_a.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_a[_a.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_a[_a.NOT_FOUND=5]="NOT_FOUND",_a[_a.ALREADY_EXISTS=6]="ALREADY_EXISTS",_a[_a.PERMISSION_DENIED=7]="PERMISSION_DENIED",_a[_a.UNAUTHENTICATED=16]="UNAUTHENTICATED",_a[_a.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_a[_a.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_a[_a.ABORTED=10]="ABORTED",_a[_a.OUT_OF_RANGE=11]="OUT_OF_RANGE",_a[_a.UNIMPLEMENTED=12]="UNIMPLEMENTED",_a[_a.INTERNAL=13]="INTERNAL",_a[_a.UNAVAILABLE=14]="UNAVAILABLE",_a[_a.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ea=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Kr([4294967295,4294967295],0);function Ca(e){const t=Ta().encode(e),n=new Hr;return n.update(t),new Uint8Array(n.digest())}function Sa(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class Aa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(n<0)throw new ka(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ka(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=Kr.fromNumber(this.Ae)}Ve(e,t,n){let r=e.add(t.multiply(Kr.fromNumber(n)));return 1===r.compare(Ia)&&(r=new Kr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;const t=Ca(e),[n,r]=Sa(t);for(let i=0;i<this.hashCount;i++){const e=this.Ve(n,r,i);if(!this.me(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Aa(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ae)return;const t=Ca(e),[n,r]=Sa(t);for(let i=0;i<this.hashCount;i++){const e=this.Ve(n,r,i);this.fe(e)}}fe(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Oa(bi.min(),r,new Wi(yi),Io(),Do())}}class Ra{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ra(n,t,Do(),Do(),Do())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n,r){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=r}}class xa{constructor(e,t){this.targetId=e,this.ye=t}}class Da{constructor(e,t,n=es.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Pa{constructor(){this.we=0,this.Se=Ua(),this.be=es.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=Do(),t=Do(),n=Do();return this.Se.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ni()}})),new Ra(this.be,this.De,e,t,n)}Oe(){this.Ce=!1,this.Se=Ua()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class La{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Io(),this.Ue=Ma(),this.We=new Wi(yi)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,(t=>{const n=this.Je(t);switch(e.state){case 0:this.Ye(t)&&n.Me(e.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(e.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),n.Me(e.resumeToken));break;default:ni()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach(((e,n)=>{this.Ye(n)&&t(n)}))}Xe(e){const t=e.targetId,n=e.ye.count,r=this.et(t);if(r){const i=r.target;if(to(i))if(0===n){const e=new Si(i.path);this.je(t,e,ks.newNoDocument(e,bi.min()))}else ri(1===n);else{const r=this.tt(t);if(r!==n){const n=this.nt(e),i=n?this.rt(n,e,r):1;if(0!==i){this.Ze(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(t,e)}null==Ea||Ea.it(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.ye,this.Qe.st(),n,i))}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=is(n).toUint8Array()}catch(e){if(e instanceof Zi)return ei("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Aa(s,r,i)}catch(e){return ei(e instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ae?null:o}rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0:2}ot(e,t){const n=this.Qe.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.je(t,n,null),r++)})),r}_t(e){const t=new Map;this.Ke.forEach(((n,r)=>{const i=this.et(r);if(i){if(n.current&&to(i.target)){const t=new Si(i.target.path);null!==this.$e.get(t)||this.ut(r,t)||this.je(r,t,ks.newNoDocument(t,e))}n.Fe&&(t.set(r,n.xe()),n.Oe())}}));let n=Do();this.Ue.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$e.forEach(((t,n)=>n.setReadTime(e)));const r=new Oa(e,t,this.We,this.$e,n);return this.$e=Io(),this.Ue=Ma(),this.We=new Wi(yi),r}ze(e,t){if(!this.Ye(e))return;const n=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,n){if(!this.Ye(e))return;const r=this.Je(e);this.ut(e,t)?r.Ne(t,1):r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new Pa,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Ji(yi),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=null!==this.et(e);return t||Yr("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Pa),this.Qe.getRemoteKeysForTarget(e).forEach((t=>{this.je(e,t,null)}))}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function Ma(){return new Wi(Si.comparator)}function Ua(){return new Wi(Si.comparator)}const Fa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Va=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ja=(()=>{const e={and:"AND",or:"OR"};return e})();class $a{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ba(e,t){return e.useProto3Json||Fi(t)?t:{value:t}}function qa(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function za(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ha(e,t){return qa(e,t.toTimestamp())}function Ka(e){return ri(!!e),bi.fromTimestamp(function(e){const t=ns(e);return new wi(t.seconds,t.nanos)}(e))}function Wa(e,t){return function(e){return new Ti(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ga(e){const t=Ti.fromString(e);return ri(vc(t)),t}function Qa(e,t){return Wa(e.databaseId,t.path)}function Ja(e,t){const n=Ga(t);if(n.get(1)!==e.databaseId.projectId)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Si(ec(n))}function Xa(e,t){return Wa(e.databaseId,t)}function Ya(e){const t=Ga(e);return 4===t.length?Ti.emptyPath():ec(t)}function Za(e){return new Ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ec(e){return ri(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function tc(e,t,n){return{name:Qa(e,t),fields:n.value.mapValue.fields}}function nc(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ni()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ri(void 0===t||"string"==typeof t),es.fromBase64String(t||"")):(ri(void 0===t||t instanceof Uint8Array),es.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?si.UNKNOWN:ba(e.code);return new oi(t,e.message||"")}(o);n=new Da(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ja(e,r.document.name),s=Ka(r.document.updateTime),o=r.document.createTime?Ka(r.document.createTime):bi.min(),a=new Ss({mapValue:{fields:r.document.fields}}),c=ks.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Na(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ja(e,r.document),s=r.readTime?Ka(r.readTime):bi.min(),o=ks.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Na([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ja(e,r.document),s=r.removedTargetIds||[];n=new Na([],s,i,null)}else{if(!("filter"in t))return ni();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new va(r,i),o=e.targetId;n=new xa(o,s)}}return n}function rc(e,t){let n;if(t instanceof aa)n={update:tc(e,t.key,t.value)};else if(t instanceof da)n={delete:Qa(e,t.key)};else if(t instanceof ca)n={update:tc(e,t.key,t.data),updateMask:mc(t.fieldMask)};else{if(!(t instanceof fa))return ni();n={verify:Qa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof qo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ko)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Go)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw ni()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ha(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ni()}(e,t.precondition)),n}function ic(e,t){return e&&e.length>0?(ri(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ka(e.updateTime):Ka(t);return n.isEqual(bi.min())&&(n=Ka(t)),new Yo(n,e.transformResults||[])}(e,t)))):[]}function sc(e,t){return{documents:[Xa(e,t.path)]}}function oc(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Xa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return gc(Ms.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:fc(e.field),direction:lc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ba(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ac(e){let t=Ya(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ri(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=uc(e);return t instanceof Ms&&Fs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new xs(pc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Fi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Os(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Os(n,t)}(n.endAt)),ro(t,i,o,s,a,"F",c,u)}function cc(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ni()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function uc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=pc(e.unaryFilter.field);return Ls.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=pc(e.unaryFilter.field);return Ls.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=pc(e.unaryFilter.field);return Ls.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=pc(e.unaryFilter.field);return Ls.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ni()}}(e):void 0!==e.fieldFilter?function(e){return Ls.create(pc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ni()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ms.create(e.compositeFilter.filters.map((e=>uc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ni()}}(e.compositeFilter.op))}(e):ni()}function lc(e){return Fa[e]}function hc(e){return Va[e]}function dc(e){return ja[e]}function fc(e){return{fieldPath:e.canonicalString()}}function pc(e){return Ci.fromServerFormat(e.fieldPath)}function gc(e){return e instanceof Ls?function(e){if("=="===e.op){if(Es(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NAN"}};if(bs(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Es(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NOT_NAN"}};if(bs(e.value))return{unaryFilter:{field:fc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fc(e.field),op:hc(e.op),value:e.value}}}(e):e instanceof Ms?function(e){const t=e.getFilters().map((e=>gc(e)));return 1===t.length?t[0]:{compositeFilter:{op:dc(e.op),filters:t}}}(e):ni()}function mc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function vc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,n,r,i=bi.min(),s=bi.min(),o=es.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new yc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.ht=e}}function wc(e){const t=ac({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?po(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(rs(e.integerValue));else if("doubleValue"in e){const n=rs(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),Vi(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.At(t,20),"string"==typeof n?t.Vt(n):(t.Vt(`${n.seconds||""}`),t.Rt(n.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(is(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.At(t,45),t.Rt(n.latitude||0),t.Rt(n.longitude||0)}else"mapValue"in e?Cs(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):ni()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){const n=e.fields||{};this.At(t,55);for(const r of Object.keys(n))this.ft(r,t),this.Tt(n[r],t)}bt(e,t){const n=e.values||[];this.At(t,50);for(const r of n)this.Tt(r,t)}wt(e,t){this.At(t,37),Si.fromName(e).path.forEach((e=>{this.At(t,60),this.Dt(e,t)}))}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}bc.Ct=new bc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(){this.an=new Tc}addToCollectionParentIndex(e,t){return this.an.add(t),Li.resolve()}getCollectionParents(e,t){return Li.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return Li.resolve()}deleteFieldIndex(e,t){return Li.resolve()}deleteAllFieldIndexes(e){return Li.resolve()}createTargetIndexes(e,t){return Li.resolve()}getDocumentsMatchingTarget(e,t){return Li.resolve(null)}getIndexType(e,t){return Li.resolve(0)}getFieldIndexes(e,t){return Li.resolve([])}getNextCollectionGroupToUpdate(e){return Li.resolve(null)}getMinOffset(e,t){return Li.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return Li.resolve(Ri.min())}updateCollectionGroup(e,t,n){return Li.resolve()}updateIndexEntries(e,t){return Li.resolve()}}class Tc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ji(Ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ji(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ic{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ic(e,Ic.DEFAULT_COLLECTION_PERCENTILE,Ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ic.DEFAULT_COLLECTION_PERCENTILE=10,Ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ic.DEFAULT=new Ic(41943040,Ic.DEFAULT_COLLECTION_PERCENTILE,Ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ic.DISABLED=new Ic(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Cc(0)}static Ln(){return new Cc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.changes=new Eo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ks.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Li.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&ia(n.mutation,e,Yi.empty(),wi.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Do()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Do()){const r=ko();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=So();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ko();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Do())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Io();const s=Ro(),o=function(){return Ro()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ca)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ia(o.mutation,t,o.mutation.getFieldMask(),wi.now())):s.set(t.key,Yi.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ac(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ro();let r=new Wi(((e,t)=>e-t)),i=Do();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Yi.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Do()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Oo();c.forEach((e=>{if(!i.has(e)){const r=na(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Si.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):co(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Li.resolve(ko());let o=-1,a=i;return s.next((t=>Li.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Li.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Do()))).next((e=>({batchId:o,changes:Ao(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Si(t)).next((e=>{let t=So();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=So();return this.indexManager.getCollectionParents(e,i).next((o=>Li.forEach(o,(o=>{const a=function(e,t){return new no(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ks.newInvalidDocument(r)))}));let n=So();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&ia(s.mutation,r,Yi.empty(),wi.now()),yo(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return Li.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ka(e.createTime)}}(t)),Li.resolve()}getNamedQuery(e,t){return Li.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(e){return{name:e.name,query:wc(e.bundledQuery),readTime:Ka(e.readTime)}}(t)),Li.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.overlays=new Wi(Si.comparator),this.Pr=new Map}getOverlay(e,t){return Li.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ko();return Li.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.It(e,t,r)})),Li.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Pr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Pr.delete(n)),Li.resolve()}getOverlaysForCollection(e,t,n){const r=ko(),i=t.length+1,s=new Si(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Li.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Wi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ko(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ko(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Li.resolve(o)}It(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ma(t,n));let i=this.Pr.get(t);void 0===i&&(i=Do(),this.Pr.set(t,i)),this.Pr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.Ir=new Ji(xc.dr),this.Tr=new Ji(xc.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const n=new xc(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Rr(new xc(e,t))}Vr(e,t){e.forEach((e=>this.removeReference(e,t)))}mr(e){const t=new Si(new Ti([])),n=new xc(t,e),r=new xc(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Rr(e),i.push(e.key)})),i}gr(){this.Ir.forEach((e=>this.Rr(e)))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const t=new Si(new Ti([])),n=new xc(t,e),r=new xc(t,e+1);let i=Do();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new xc(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class xc{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return Si.comparator(e.key,t.key)||yi(e.yr,t.yr)}static Er(e,t){return yi(e.yr,t.yr)||Si.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new Ji(xc.dr)}checkEmpty(e){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pa(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Sr=this.Sr.add(new xc(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(e,t){return Li.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Dr(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new xc(t,0),r=new xc(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],(e=>{const t=this.br(e.yr);i.push(t)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ji(yi);return t.forEach((e=>{const t=new xc(e,0),r=new xc(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],(e=>{n=n.add(e.yr)}))})),Li.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Si.isDocumentKey(i)||(i=i.child(""));const s=new xc(new Si(i),0);let o=new Ji(yi);return this.Sr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.yr)),!0)}),s),Li.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach((e=>{const n=this.br(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ri(0===this.vr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return Li.forEach(t.mutations,(r=>{const i=new xc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Sr=n}))}xn(e){}containsKey(e,t){const n=new xc(t,0),r=this.Sr.firstAfterOrEqual(n);return Li.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Li.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.Fr=e,this.docs=function(){return new Wi(Si.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Li.resolve(n?n.document.mutableCopy():ks.newInvalidDocument(t))}getEntries(e,t){let n=Io();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ks.newInvalidDocument(e))})),Li.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Io();const s=t.path,o=new Si(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ni(Oi(o),n)<=0||(r.has(o.key)||yo(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ni()}Mr(e,t){return Li.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Lc(this)}getSize(e){return Li.resolve(this.size)}}class Lc extends Sc{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)})),Li.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.persistence=e,this.Or=new Eo((e=>Zs(e)),eo),this.lastRemoteSnapshotVersion=bi.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Nc,this.targetCount=0,this.Lr=Cc.Bn()}forEachTarget(e,t){return this.Or.forEach(((e,n)=>t(n))),Li.resolve()}getLastRemoteSnapshotVersion(e){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Li.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),Li.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Cc(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,Li.resolve()}updateTargetData(e,t){return this.Qn(t),Li.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,Li.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Or.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(e){return Li.resolve(this.targetCount)}getTargetData(e,t){const n=this.Or.get(t)||null;return Li.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Ar(t,n),Li.resolve()}removeMatchingKeys(e,t,n){this.Br.Vr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Li.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),Li.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.pr(t);return Li.resolve(n)}containsKey(e,t){return Li.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.kr={},this.overlays={},this.qr=new Ui(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new Mc(this),this.indexManager=new Ec,this.remoteDocumentCache=function(e){return new Pc(e)}((e=>this.referenceDelegate.$r(e))),this.serializer=new _c(t),this.Ur=new Oc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new Dc(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,n){Yr("MemoryPersistence","Starting transaction:",e);const r=new Fc(this.qr.next());return this.referenceDelegate.Wr(),n(r).next((e=>this.referenceDelegate.Gr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}zr(e,t){return Li.or(Object.values(this.kr).map((n=>()=>n.containsKey(e,t))))}}class Fc extends Di{constructor(e){super(),this.currentSequenceNumber=e}}class Vc{constructor(e){this.persistence=e,this.jr=new Nc,this.Hr=null}static Jr(e){return new Vc(e)}get Yr(){if(this.Hr)return this.Hr;throw ni()}addReference(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),Li.resolve()}removeReference(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),Li.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach((e=>this.Yr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Yr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Wr(){this.Hr=new Set}Gr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Yr,(n=>{const r=Si.fromPath(n);return this.Zr(e,r).next((e=>{e||t.removeEntry(r,bi.min())}))})).next((()=>(this.Hr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Zr(e,t).next((e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())}))}$r(e){return 0}Zr(e,t){return Li.or([()=>Li.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Qi=n,this.Ki=r}static $i(e,t){let n=Do(),r=Do();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new jc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Hi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Ji(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new $c;return this.Yi(e,t,n).next((r=>{if(i.result=r,this.Wi)return this.Zi(e,t,n,r.size)}))})).next((()=>i.result))}Zi(e,t,n,r){return n.documentReadCount<this.Gi?(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),Li.resolve()):(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Query:",vo(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lo(t))):Li.resolve())}Hi(e,t){if(so(t))return Li.resolve(null);let n=lo(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=po(t,null,"F"),n=lo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Do(...r);return this.ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Xi(t,r);return this.es(t,s,i,n.readTime)?this.Hi(e,po(t,null,"F")):this.ts(e,s,t,n)}))))})))))}Ji(e,t,n,r){return so(t)||r.isEqual(bi.min())?Li.resolve(null):this.ji.getDocuments(e,n).next((i=>{const s=this.Xi(t,i);return this.es(t,s,n,r)?Li.resolve(null):(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vo(t)),this.ts(e,s,t,ki(r,-1)).next((e=>e)))}))}Xi(e,t){let n=new Ji(wo(e));return t.forEach(((t,r)=>{yo(e,r)&&(n=n.add(r))})),n}es(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(e,t,n){return Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Using full collection scan to execute query:",vo(t)),this.ji.getDocumentsMatchingQuery(e,t,Ri.min(),n)}ts(e,t,n,r){return this.ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,n,r){this.persistence=e,this.ns=t,this.serializer=r,this.rs=new Wi(yi),this.ss=new Eo((e=>Zs(e)),eo),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(n)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kc(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.rs)))}}function zc(e,t,n,r){return new qc(e,t,n,r)}async function Hc(e,t){const n=ii(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.us(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Do();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({cs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Kc(e,t){const n=ii(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Li.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ri(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Do();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Wc(e){const t=ii(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Kr.getLastRemoteSnapshotVersion(e)))}function Gc(e,t){const n=ii(e),r=t.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Kr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Kr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(es.EMPTY_BYTE_STRING,bi.min()).withLastLimboFreeSnapshotVersion(bi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Kr.updateTargetData(e,u))}));let a=Io(),c=Do();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Qc(e,s,t.documentUpdates).next((e=>{a=e.ls,c=e.hs}))),!r.isEqual(bi.min())){const t=n.Kr.getLastRemoteSnapshotVersion(e).next((t=>n.Kr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Li.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.rs=i,e)))}function Qc(e,t,n){let r=Do(),i=Do();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Io();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(bi.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Yr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ls:r,hs:i}}))}function Jc(e,t){const n=ii(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Xc(e,t){const n=ii(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Kr.getTargetData(e,t).next((i=>i?(r=i,Li.resolve(r)):n.Kr.allocateTargetId(e).next((i=>(r=new yc(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Kr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.rs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(e.targetId,e),n.ss.set(t,e.targetId)),e}))}async function Yc(e,t,n){const r=ii(e),i=r.rs.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Mi(e))throw e;Yr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.rs=r.rs.remove(t),r.ss.delete(i.target)}function Zc(e,t,n){const r=ii(e);let i=bi.min(),s=Do();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=ii(e),i=r.ss.get(n);return void 0!==i?Li.resolve(r.rs.get(i)):r.Kr.getTargetData(t,n)}(r,e,lo(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ns.getDocumentsMatchingQuery(e,t,n?i:bi.min(),n?s:Do()))).next((e=>(eu(r,_o(t),e),{documents:e,Ps:s})))))}function eu(e,t,n){let r=e.os.get(t)||bi.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.os.set(t,r)}class tu{constructor(){this.activeTargetIds=Lo()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nu{constructor(){this.ro=new tu,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,n){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new tu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{so(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){Yr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){Yr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su=null;function ou(){return null===su?su=function(){return 268435456+Math.round(2147483648*Math.random())}():su++,"0x"+su.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const au={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="WebChannelConnection";class lu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get So(){return!1}bo(e,t,n,r,i){const s=ou(),o=this.Do(e,t);Yr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,r,i),this.vo(e,o,a,n).then((t=>(Yr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ei("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Fo(e,t,n,r,i,s){return this.bo(e,t,n,r,i)}Co(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Do(e,t){const n=au[e];return`${this.po}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const i=ou();return new Promise(((s,o)=>{const a=new zr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const t=a.getResponseJson();Yr(uu,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Vr.TIMEOUT:Yr(uu,`RPC '${e}' ${i} timed out`),o(new oi(si.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const n=a.getStatus();if(Yr(uu,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(t)>=0?t:si.UNKNOWN}(t.status);o(new oi(e,t.message))}else o(new oi(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new oi(si.UNAVAILABLE,"Connection failed."));break;default:ni()}}finally{Yr(uu,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Yr(uu,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Mo(e,t,n){const r=ou(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ur(),o=Fr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Co(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Yr(uu,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new cu({ho:t=>{d?Yr(uu,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Yr(uu,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Yr(uu,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},Po:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{d||Yr(uu,`RPC '${e}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{d||(d=!0,Yr(uu,`RPC '${e}' stream ${r} transport closed`),f.mo())})),p(l,qr.EventType.ERROR,(t=>{d||(d=!0,ei(uu,`RPC '${e}' stream ${r} transport errored:`,t),f.mo(new oi(si.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ri(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Yr(uu,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=ya[e];if(void 0!==t)return ba(t)}(t),i=o.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.mo(new oi(n,i)),l.close()}else Yr(uu,`RPC '${e}' stream ${r} received:`,i),f.fo(i)}})),p(o,$r.STAT_EVENT,(t=>{t.stat===Br.PROXY?Yr(uu,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Br.NOPROXY&&Yr(uu,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Vo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e){return new $a(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,n=1e3,r=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=n,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const t=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,t-n);r>0&&Yr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,(()=>(this.ko=Date.now(),e()))),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,n,r,i,s,o,a){this._i=e,this.Uo=n,this.Wo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new fu(e,t)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,(()=>this.t_())))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===si.RESOURCE_EXHAUSTED?(Zr(t.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Go===t&&this.__(e,n)}),(t=>{e((()=>{const e=new oi(si.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)}))}))}__(e,t){const n=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io((()=>{n((()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,(()=>(this.Yo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((e=>{n((()=>this.a_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Zo(){this.state=5,this.Ho.Qo((async()=>{this.state=0,this.start()}))}a_(e){return Yr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget((()=>this.Go===e?t():(Yr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gu extends pu{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();const t=nc(this.serializer,e),n=function(e){if(!("targetChange"in e))return bi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?bi.min():t.readTime?Ka(t.readTime):bi.min()}(e);return this.listener.c_(t,n)}l_(e){const t={};t.database=Za(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=to(r)?{documents:sc(e,r)}:{query:oc(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=za(e,t.resumeToken);const r=Ba(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(bi.min())>0){n.readTime=qa(e,t.snapshotVersion.toTimestamp());const r=Ba(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=cc(this.serializer,e);n&&(t.labels=n),this.n_(t)}h_(e){const t={};t.database=Za(this.serializer),t.removeTarget=e,this.n_(t)}}class mu extends pu{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){if(ri(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const t=ic(e.writeResults,e.commitTime),n=Ka(e.commitTime);return this.listener.T_(n,t)}return ri(!e.writeResults||0===e.writeResults.length),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Za(this.serializer),this.n_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>rc(this.serializer,e)))};this.n_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.bo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oi(si.UNKNOWN,e.toString())}))}Fo(e,t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oi(si.UNKNOWN,e.toString())}))}terminate(){this.R_=!0}}class yu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve()))))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Zr(t),this.p_=!1):Yr("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so((e=>{n.enqueueAndForget((async()=>{ku(this)&&(Yr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ii(e);t.F_.add(4),await bu(t),t.O_.set("Unknown"),t.F_.delete(4),await wu(t)}(this))}))})),this.O_=new yu(n,r)}}async function wu(e){if(ku(e))for(const t of e.M_)await t(!0)}async function bu(e){for(const t of e.M_)await t(!1)}function Eu(e,t){const n=ii(e);n.v_.has(t.targetId)||(n.v_.set(t.targetId,t),Au(n)?Su(n):Ku(n).Yo()&&Iu(n,t))}function Tu(e,t){const n=ii(e),r=Ku(n);n.v_.delete(t),r.Yo()&&Cu(n,t),0===n.v_.size&&(r.Yo()?r.e_():ku(n)&&n.O_.set("Unknown"))}function Iu(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(bi.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ku(e).l_(t)}function Cu(e,t){e.N_.Le(t),Ku(e).h_(t)}function Su(e){e.N_=new La({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),Ku(e).start(),e.O_.y_()}function Au(e){return ku(e)&&!Ku(e).Jo()&&e.v_.size>0}function ku(e){return 0===ii(e).F_.size}function Ou(e){e.N_=void 0}async function Ru(e){e.v_.forEach(((t,n)=>{Iu(e,t)}))}async function Nu(e,t){Ou(e),Au(e)?(e.O_.b_(t),Su(e)):e.O_.set("Unknown")}async function xu(e,t,n){if(e.O_.set("Online"),t instanceof Da&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.v_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.v_.delete(r),e.N_.removeTarget(r))}(e,t)}catch(n){Yr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Du(e,n)}else if(t instanceof Na?e.N_.Ge(t):t instanceof xa?e.N_.Xe(t):e.N_.He(t),!n.isEqual(bi.min()))try{const t=await Wc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.N_._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.v_.get(r);i&&e.v_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.v_.get(t);if(!r)return;e.v_.set(t,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),Cu(e,t);const i=new yc(r.target,t,n,r.sequenceNumber);Iu(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Yr("RemoteStore","Failed to raise snapshot:",t),await Du(e,t)}}async function Du(e,t,n){if(!Mi(t))throw t;e.F_.add(1),await bu(e),e.O_.set("Offline"),n||(n=()=>Wc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Yr("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await wu(e)}))}function Pu(e,t){return t().catch((n=>Du(e,n,t)))}async function Lu(e){const t=ii(e),n=Wu(t);let r=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;Mu(t);)try{const e=await Jc(t.localStore,r);if(null===e){0===t.C_.length&&n.e_();break}r=e.batchId,Uu(t,e)}catch(e){await Du(t,e)}Fu(t)&&Vu(t)}function Mu(e){return ku(e)&&e.C_.length<10}function Uu(e,t){e.C_.push(t);const n=Wu(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function Fu(e){return ku(e)&&!Wu(e).Jo()&&e.C_.length>0}function Vu(e){Wu(e).start()}async function ju(e){Wu(e).A_()}async function $u(e){const t=Wu(e);for(const n of e.C_)t.d_(n.mutations)}async function Bu(e,t,n){const r=e.C_.shift(),i=ga.from(r,t,n);await Pu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Lu(e)}async function qu(e,t){t&&Wu(e).I_&&await async function(e,t){if(function(e){return wa(e)&&e!==si.ABORTED}(t.code)){const n=e.C_.shift();Wu(e).Xo(),await Pu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Lu(e)}}(e,t),Fu(e)&&Vu(e)}async function zu(e,t){const n=ii(e);n.asyncQueue.verifyOperationInProgress(),Yr("RemoteStore","RemoteStore received new credentials");const r=ku(n);n.F_.add(3),await bu(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.F_.delete(3),await wu(n)}async function Hu(e,t){const n=ii(e);t?(n.F_.delete(2),await wu(n)):t||(n.F_.add(2),await bu(n),n.O_.set("Unknown"))}function Ku(e){return e.B_||(e.B_=function(e,t,n){const r=ii(e);return r.V_(),new gu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Io:Ru.bind(null,e),Eo:Nu.bind(null,e),c_:xu.bind(null,e)}),e.M_.push((async t=>{t?(e.B_.Xo(),Au(e)?Su(e):e.O_.set("Unknown")):(await e.B_.stop(),Ou(e))}))),e.B_}function Wu(e){return e.L_||(e.L_=function(e,t,n){const r=ii(e);return r.V_(),new mu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Io:ju.bind(null,e),Eo:qu.bind(null,e),E_:$u.bind(null,e),T_:Bu.bind(null,e)}),e.M_.push((async t=>{t?(e.L_.Xo(),await Lu(e)):(await e.L_.stop(),e.C_.length>0&&(Yr("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))}))),e.L_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Gu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new oi(si.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(e,t){if(Zr("AsyncQueue",`${t}: ${e}`),Mi(e))return new oi(si.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Si.comparator(t.key,n.key):(e,t)=>Si.comparator(e.key,t.key),this.keyedMap=So(),this.sortedSet=new Wi(this.comparator)}static emptySet(e){return new Ju(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ju))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ju;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.k_=new Wi(Si.comparator)}track(e){const t=e.doc.key,n=this.k_.get(t);n?0!==e.type&&3===n.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.k_=this.k_.remove(t):1===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):ni():this.k_=this.k_.insert(t,e)}q_(){const e=[];return this.k_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Yu{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Yu(e,t,Ju.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.Q_=void 0,this.listeners=[]}}class el{constructor(){this.queries=new Eo((e=>mo(e)),go),this.onlineState="Unknown",this.K_=new Set}}async function tl(e,t){const n=ii(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Zu),i)try{s.Q_=await n.onListen(r)}catch(e){const n=Qu(e,`Initialization of query '${vo(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.U_(n.onlineState),s.Q_&&t.W_(s.Q_)&&sl(n)}async function nl(e,t){const n=ii(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function rl(e,t){const n=ii(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.W_(i)&&(r=!0);t.Q_=i}}r&&sl(n)}function il(e,t,n){const r=ii(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function sl(e){e.K_.forEach((e=>{e.next()}))}class ol{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Yu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Z_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=Yu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(e){this.key=e}}class cl{constructor(e){this.key=e}}class ul{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Do(),this.mutatedKeys=Do(),this.ua=wo(e),this.ca=new Ju(this.ua)}get la(){return this.oa}ha(e,t){const n=t?t.Pa:new Xu,r=t?t.ca:this.ca;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=yo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ia(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ua(l,a)>0||c&&this.ua(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,es:o,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ni()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.ua(e.doc,t.doc))),this.da(n);const s=t?this.Ta():[],o=0===this.aa.size&&this.current?1:0,a=o!==this._a;return this._a=o,0!==i.length||a?{snapshot:new Yu(this.query,e.ca,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Xu,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach((e=>this.oa=this.oa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.oa=this.oa.delete(e))),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=Do(),this.ca.forEach((e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))}));const t=[];return e.forEach((e=>{this.aa.has(e)||t.push(new cl(e))})),this.aa.forEach((n=>{e.has(n)||t.push(new al(n))})),t}Ra(e){this.oa=e.Ps,this.aa=Do();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return Yu.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class ll{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class hl{constructor(e){this.key=e,this.ma=!1}}class dl{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Eo((e=>mo(e)),go),this.pa=new Map,this.ya=new Set,this.wa=new Wi(Si.comparator),this.Sa=new Map,this.ba=new Nc,this.Da={},this.Ca=new Map,this.va=Cc.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function fl(e,t){const n=xl(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const e=await Xc(n.localStore,lo(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await pl(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&Eu(n.remoteStore,e)}return i}async function pl(e,t,n,r,i){e.Ma=(t,n,r)=>async function(e,t,n,r){let i=t.view.ha(n);i.es&&(i=await Zc(e.localStore,t.query,!1).then((({documents:e})=>t.view.ha(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Sl(e,t.targetId,o.Ea),o.snapshot}(e,t,n,r);const s=await Zc(e.localStore,t,!0),o=new ul(t,s.Ps),a=o.ha(s.documents),c=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Sl(e,n,u.Ea);const l=new ll(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function gl(e,t){const n=ii(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter((e=>!go(e,t)))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Tu(n.remoteStore,r.targetId),Il(n,r.targetId)})).catch(Pi)):(Il(n,r.targetId),await Yc(n.localStore,r.targetId,!0))}async function ml(e,t,n){const r=Dl(e);try{const e=await function(e,t){const n=ii(e),r=wi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Do());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Io(),c=Do();return n._s.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=sa(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new ca(e.key,t,As(t.value.mapValue),Zo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ao(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Da[e.currentUser.toKey()];r||(r=new Wi(yi)),r=r.insert(t,n),e.Da[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ol(r,e.changes),await Lu(r.remoteStore)}catch(e){const t=Qu(e,"Failed to persist write");n.reject(t)}}async function vl(e,t){const n=ii(e);try{const e=await Gc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Sa.get(t);r&&(ri(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ma=!0:e.modifiedDocuments.size>0?ri(r.ma):e.removedDocuments.size>0&&(ri(r.ma),r.ma=!1))})),await Ol(n,e,t)}catch(e){await Pi(e)}}function yl(e,t,n){const r=ii(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ga.forEach(((n,r)=>{const i=r.view.U_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ii(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.U_(t)&&(r=!0)})),r&&sl(n)}(r.eventManager,t),e.length&&r.fa.c_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _l(e,t,n){const r=ii(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let e=new Wi(Si.comparator);e=e.insert(s,ks.newNoDocument(s,bi.min()));const n=Do().add(s),i=new Oa(bi.min(),new Map,new Wi(yi),e,n);await vl(r,i),r.wa=r.wa.remove(s),r.Sa.delete(t),kl(r)}else await Yc(r.localStore,t,!1).then((()=>Il(r,t,n))).catch(Pi)}async function wl(e,t){const n=ii(e),r=t.batch.batchId;try{const e=await Kc(n.localStore,t);Tl(n,r,null),El(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ol(n,e)}catch(e){await Pi(e)}}async function bl(e,t,n){const r=ii(e);try{const e=await function(e,t){const n=ii(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ri(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Tl(r,t,n),El(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ol(r,e)}catch(n){await Pi(n)}}function El(e,t){(e.Ca.get(t)||[]).forEach((e=>{e.resolve()})),e.Ca.delete(t)}function Tl(e,t,n){const r=ii(e);let i=r.Da[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Il(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach((t=>{e.ba.containsKey(t)||Cl(e,t)}))}function Cl(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);null!==n&&(Tu(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),kl(e))}function Sl(e,t,n){for(const r of n)r instanceof al?(e.ba.addReference(r.key,t),Al(e,r)):r instanceof cl?(Yr("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Cl(e,r.key)):ni()}function Al(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(Yr("SyncEngine","New document in limbo: "+n),e.ya.add(r),kl(e))}function kl(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new Si(Ti.fromString(t)),r=e.va.next();e.Sa.set(r,new hl(n)),e.wa=e.wa.insert(n,r),Eu(e.remoteStore,new yc(lo(io(n.path)),r,"TargetPurposeLimboResolution",Ui.ae))}}async function Ol(e,t,n){const r=ii(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((e,a)=>{o.push(r.Ma(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=jc.$i(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.fa.c_(i),await async function(e,t){const n=ii(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Li.forEach(t,(t=>Li.forEach(t.Qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Li.forEach(t.Ki,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Mi(e))throw e;Yr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.rs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.rs=n.rs.insert(e,i)}}}(r.localStore,s))}async function Rl(e,t){const n=ii(e);if(!n.currentUser.isEqual(t)){Yr("SyncEngine","User change. New user:",t.toKey());const e=await Hc(n.localStore,t);n.currentUser=t,function(e,t){e.Ca.forEach((e=>{e.forEach((e=>{e.reject(new oi(si.CANCELLED,t))}))})),e.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ol(n,e.cs)}}function Nl(e,t){const n=ii(e),r=n.Sa.get(t);if(r&&r.ma)return Do().add(r.key);{let e=Do();const r=n.pa.get(t);if(!r)return e;for(const t of r){const r=n.ga.get(t);e=e.unionWith(r.view.la)}return e}}function xl(e){const t=ii(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=vl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_l.bind(null,t),t.fa.c_=rl.bind(null,t.eventManager),t.fa.xa=il.bind(null,t.eventManager),t}function Dl(e){const t=ii(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bl.bind(null,t),t}class Pl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return zc(this.persistence,new Bc,e.initialUser,this.serializer)}createPersistence(e){return new Uc(Vc.Jr,this.serializer)}createSharedClientState(e){return new nu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ll{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>yl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rl.bind(null,this.syncEngine),await Hu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new el}()}createDatastore(e){const t=du(e.databaseInfo.databaseId),n=function(e){return new lu(e)}(e.databaseInfo);return function(e,t,n,r){return new vu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new _u(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>yl(this.syncEngine,e,0)),function(){return iu.C()?new iu:new ru}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new dl(e,t,n,r,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ii(e);Yr("RemoteStore","RemoteStore shutting down."),t.F_.add(5),await bu(t),t.x_.shutdown(),t.O_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Zr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ul{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Gr.UNAUTHENTICATED,this.clientId=vi.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Yr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Yr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Qu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Fl(e,t){e.asyncQueue.verifyOperationInProgress(),Yr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Hc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Vl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $l(e);Yr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>zu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>zu(t.remoteStore,n))),e._onlineComponents=t}function jl(e){return"FirebaseError"===e.name?e.code===si.FAILED_PRECONDITION||e.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function $l(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Yr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fl(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!jl(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Fl(e,new Pl)}}else Yr("FirestoreClient","Using default OfflineComponentProvider"),await Fl(e,new Pl);return e._offlineComponents}async function Bl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Yr("FirestoreClient","Using user provided OnlineComponentProvider"),await Vl(e,e._uninitializedComponentsProvider._online)):(Yr("FirestoreClient","Using default OnlineComponentProvider"),await Vl(e,new Ll))),e._onlineComponents}function ql(e){return Bl(e).then((e=>e.syncEngine))}async function zl(e){const t=await Bl(e),n=t.eventManager;return n.onListen=fl.bind(null,t.syncEngine),n.onUnlisten=gl.bind(null,t.syncEngine),n}function Hl(e,t,n={}){const r=new ai;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Ml({next:s=>{t.enqueueAndForget((()=>nl(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new oi(si.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new ol(io(n.path),s,{includeMetadataChanges:!0,Z_:!0});return tl(e,o)}(await zl(e),e.asyncQueue,t,n,r))),r.promise}function Kl(e,t,n={}){const r=new ai;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Ml({next:n=>{t.enqueueAndForget((()=>nl(e,o))),n.fromCache&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new ol(n,s,{includeMetadataChanges:!0,Z_:!0});return tl(e,o)}(await zl(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wl(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Gl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(e,t,n){if(!n)throw new oi(si.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Jl(e,t,n,r){if(!0===t&&!0===r)throw new oi(si.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Xl(e){if(!Si.isDocumentKey(e))throw new oi(si.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Yl(e){if(Si.isDocumentKey(e))throw new oi(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Zl(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ni()}function eh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new oi(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(e);throw new oi(si.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class th{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new oi(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new oi(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wl(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new th({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oi(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new oi(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new th(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ui;switch(e.type){case"firstParty":return new fi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new oi(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Gl.get(e);t&&(Yr("ComponentProvider","Removing Datastore"),Gl.delete(e),t.terminate())}(this),Promise.resolve()}}function rh(e,t,n,r={}){var i;const s=(e=eh(e,nh))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Gr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new oi(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Gr(s)}e._authCredentials=new li(new ci(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ih(this.firestore,e,this._query)}}class sh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sh(this.firestore,e,this._key)}}class oh extends ih{constructor(e,t,n){super(e,t,io(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sh(this.firestore,null,new Si(e))}withConverter(e){return new oh(this.firestore,e,this._path)}}function ah(e,t,...n){if(e=(0,a.m9)(e),Ql("collection","path",t),e instanceof nh){const r=Ti.fromString(t,...n);return Yl(r),new oh(e,null,r)}{if(!(e instanceof sh||e instanceof oh))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return Yl(r),new oh(e.firestore,null,r)}}function ch(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=vi.V()),Ql("doc","path",t),e instanceof nh){const r=Ti.fromString(t,...n);return Xl(r),new sh(e,null,new Si(r))}{if(!(e instanceof sh||e instanceof oh))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return Xl(r),new sh(e.firestore,e instanceof oh?e.converter:null,new Si(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new fu(this,"async_queue_retry"),this.ou=()=>{const e=hu();e&&Yr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};const e=hu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const t=hu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise((()=>{}));const t=new ai;return this.au((()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xa.push(e),this.uu())))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Mi(e))throw e;Yr("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo((()=>this.uu()))}}au(e){const t=this.Za.then((()=>(this.ru=!0,e().catch((e=>{this.nu=e,this.ru=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Zr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.ru=!1,e))))));return this.Za=t,t}enqueueAfterDelay(e,t,n){this._u(),this.su.indexOf(e)>-1&&(t=0);const r=Gu.createAndSchedule(this,e,t,n,(e=>this.cu(e)));return this.tu.push(r),r}_u(){this.nu&&ni()}verifyOperationInProgress(){}async lu(){let e;do{e=this.Za,await e}while(e!==this.Za)}hu(e){for(const t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then((()=>{this.tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()}))}Iu(e){this.su.push(e)}cu(e){const t=this.tu.indexOf(e);this.tu.splice(t,1)}}class lh extends nh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new uh}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fh(this),this._firestoreClient.terminate()}}function hh(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&rh(s,...e)}return s}function dh(e){return e._firestoreClient||fh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fh(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new cs(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wl(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Ul(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ph(es.fromBase64String(e))}catch(e){throw new oi(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ph(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new oi(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ci(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oi(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oi(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return yi(this._lat,e._lat)||yi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=/^__.*__$/;class _h{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ca(e,this.data,this.fieldMask,t,this.fieldTransforms):new aa(e,this.data,t,this.fieldTransforms)}}function wh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ni()}}class bh{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Dh(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(wh(this.Tu)&&yh.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class Eh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||du(e)}wu(e,t,n,r=!1){return new bh({Tu:e,methodName:t,yu:n,path:Ci.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Th(e){const t=e._freezeSettings(),n=du(e._databaseId);return new Eh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ih(e,t,n,r,i,s={}){const o=e.wu(s.merge||s.mergeFields?2:0,t,n,i);Oh("Data must be an object, but it was:",o,r);const a=Ah(r,o);let c,u;if(s.merge)c=new Yi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Rh(t,r,n);if(!o.contains(i))throw new oi(si.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ph(e,i)||e.push(i)}c=new Yi(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new _h(new Ss(a),c,u)}function Ch(e,t,n,r=!1){return Sh(n,e.wu(r?4:3,t))}function Sh(e,t){if(kh(e=(0,a.m9)(e)))return Oh("Unsupported field value:",t,e),Ah(e,t);if(e instanceof mh)return function(e,t){if(!wh(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Sh(i,t.fu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Fo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=wi.fromDate(e);return{timestampValue:qa(t.serializer,n)}}if(e instanceof wi){const n=new wi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:qa(t.serializer,n)}}if(e instanceof vh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ph)return{bytesValue:za(t.serializer,e._byteString)};if(e instanceof sh){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wa(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${Zl(e)}`)}(e,t)}function Ah(e,t){const n={};return Ki(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hi(e,((e,r)=>{const i=Sh(r,t.Au(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function kh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof wi||e instanceof vh||e instanceof ph||e instanceof sh||e instanceof mh)}function Oh(e,t,n){if(!kh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Zl(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}}function Rh(e,t,n){if((t=(0,a.m9)(t))instanceof gh)return t._internalPath;if("string"==typeof t)return xh(e,t);throw Dh("Field path arguments must be of type string or ",e,!1,void 0,n)}const Nh=new RegExp("[~\\*/\\[\\]]");function xh(e,t,n){if(t.search(Nh)>=0)throw Dh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new gh(...t.split("."))._internalPath}catch(b){throw Dh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Dh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new oi(si.INVALID_ARGUMENT,a+e+c)}function Ph(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Mh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Mh extends Lh{data(){return super.data()}}function Uh(e,t){return"string"==typeof t?xh(e,t):t instanceof gh?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new oi(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vh{}class jh extends Vh{}function $h(e,t,...n){let r=[];t instanceof Vh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof qh)).length,n=e.filter((e=>e instanceof Bh)).length;if(t>1||t>0&&n>0)throw new oi(si.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Bh extends jh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Bh(e,t,n)}_apply(e){const t=this._parse(e);return Kh(e._query,t),new ih(e.firestore,e.converter,fo(e._query,t))}_parse(e){const t=Th(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new oi(si.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Hh(o,s);const t=[];for(const n of o)t.push(zh(r,e,n));a={arrayValue:{values:t}}}else a=zh(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Hh(o,s),a=Ch(n,t,o,"in"===s||"not-in"===s);return Ls.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class qh extends Vh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qh(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Ms.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Kh(n,i),n=fo(n,i)}(e._query,t),new ih(e.firestore,e.converter,fo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function zh(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new oi(si.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!co(t)&&-1!==n.indexOf("/"))throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ti.fromString(n));if(!Si.isDocumentKey(r))throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ys(e,new Si(r))}if(n instanceof sh)return ys(e,n._key);throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zl(n)}.`)}function Hh(e,t){if(!Array.isArray(e)||0===e.length)throw new oi(si.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Kh(e,t){if(t.isInequality()){const n=ao(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new oi(si.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=oo(e);null!==i&&Wh(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new oi(si.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new oi(si.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Wh(e,t,n){if(!n.isEqual(t))throw new oi(si.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Gh{convertValue(e,t="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ni()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Hi(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new vh(rs(e.latitude),rs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=os(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(as(e));default:return null}}convertTimestamp(e){const t=ns(e);return new wi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ti.fromString(e);ri(vc(n));const r=new us(n.get(1),n.get(3)),i=new Si(n.popFirst(5));return r.isEqual(t)||Zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xh extends Lh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Uh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Yh extends Xh{data(e={}){return super.data(e)}}class Zh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Jh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Yh(this._firestore,this._userDataWriter,n.key,n,new Jh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oi(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Yh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Jh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Yh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Jh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ed(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ed(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ni()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function td(e){e=eh(e,sh);const t=eh(e.firestore,lh);return Hl(dh(t),e._key).then((n=>ad(t,e,n)))}class nd extends Gh{constructor(e){super(),this.firestore=e}convertBytes(e){return new ph(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new sh(this.firestore,null,t)}}function rd(e){e=eh(e,ih);const t=eh(e.firestore,lh),n=dh(t),r=new nd(t);return Fh(e._query),Kl(n,e._query).then((n=>new Zh(t,r,e,n)))}function id(e,t,n){e=eh(e,sh);const r=eh(e.firestore,lh),i=Qh(e.converter,t,n);return od(r,[Ih(Th(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Zo.none())])}function sd(e,t){const n=eh(e.firestore,lh),r=ch(e),i=Qh(e.converter,t);return od(n,[Ih(Th(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Zo.exists(!1))]).then((()=>r))}function od(e,t){return function(e,t){const n=new ai;return e.asyncQueue.enqueueAndForget((async()=>ml(await ql(e),t,n))),n.promise}(dh(e),t)}function ad(e,t,n){const r=n.docs.get(t._key),i=new nd(e);return new Xh(e,i,t._key,r,new Jh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Qr=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new lh(new hi(e.getProvider("auth-internal")),new gi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new oi(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Wr,"4.2.0",e),(0,i.KN)(Wr,"4.2.0","esm2017")}()},1294:function(e,t,n){n.d(t,{Jt:function(){return yt},cF:function(){return wt},iH:function(){return _t},B0:function(){return vt}});n(2801),n(7658),n(1439),n(7585),n(5315);var r=n(7077),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5,l=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends i.ZR{constructor(e,t,n=0){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,f;function p(e){return"storage/"+e}function g(){const e="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,e)}function m(e){return new h(d.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function v(e){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,e)}function _(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(e){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function b(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function E(){return new h(d.CANCELED,"User canceled the upload/download.")}function T(e){return new h(d.INVALID_URL,"Invalid URL '"+e+"'.")}function I(e){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function C(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A(){return new h(d.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function k(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(e){return new h(d.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function R(e){return new h(d.INVALID_ARGUMENT,e)}function N(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function x(e){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(e,t){return new h(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function P(e){throw new h(d.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));class L{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=L.makeFromUrl(e,t)}catch(r){return new L(e,"")}if(""===n.path)return n;throw I(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<_.length;o++){const t=_[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new L(e,i),t.postModify(n);break}}if(null==n)throw T(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function F(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return void 0!==e}function j(e){return"function"===typeof e}function $(e){return"object"===typeof e&&!Array.isArray(e)}function B(e){return"string"===typeof e||e instanceof String}function q(e){return z()&&e instanceof Blob}function z(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function H(e,t,n,r){if(r<t)throw R(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw R(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function W(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(f||(f={}));class Q{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new J(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!t||G(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===f.ABORT;return void e(!1,new J(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new J(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());V(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=g();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?N():E();r(e)}else{const e=b();r(e)}};this.canceled_?t(!1,new J(!1,null,!0)):this.backoffId_=U(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class J{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function X(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Y(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Z(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ee(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function te(e,t,n,r,i,s,o=!0){const a=W(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return Z(u,t),X(u,n),Y(u,s),ee(u,r),new Q(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function re(...e){const t=ne();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(z())return new Blob(e);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function ie(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){if("undefined"===typeof atob)throw O("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ae{constructor(e,t){this.data=e,this.contentType=t||null}}function ce(e,t){switch(e){case oe.RAW:return new ae(ue(t));case oe.BASE64:case oe.BASE64URL:return new ae(he(e,t));case oe.DATA_URL:return new ae(fe(t),pe(t))}throw g()}function ue(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function le(e){let t;try{t=decodeURIComponent(e)}catch(n){throw D(oe.DATA_URL,"Malformed data URL.")}return ue(t)}function he(e,t){switch(e){case oe.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw D(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case oe.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw D(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=se(t)}catch(i){if(i.message.includes("polyfill"))throw i;throw D(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class de{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw D(oe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=ge(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function fe(e){const t=new de(e);return t.base64?he(oe.BASE64,t.rest):le(t.rest)}function pe(e){const t=new de(e);return t.contentType}function ge(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){let n=0,r="";q(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(q(this.data_)){const n=this.data_,r=ie(n,e,t);return null===r?null:new me(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new me(n,!0)}}static getBlob(...e){if(z()){const t=e.map((e=>e instanceof me?e.data_:e));return new me(re.apply(null,t))}{const t=e.map((e=>B(e)?ce(oe.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new me(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t;try{t=JSON.parse(e)}catch(n){return null}return $(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function _e(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function we(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){return t}class Ee{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||be}}let Te=null;function Ie(e){return!B(e)||e.length<2?e:we(e)}function Ce(){if(Te)return Te;const e=[];function t(e,t){return Ie(t)}e.push(new Ee("bucket")),e.push(new Ee("generation")),e.push(new Ee("metageneration")),e.push(new Ee("name","fullPath",!0));const n=new Ee("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new Ee("size");return i.xform=r,e.push(i),e.push(new Ee("timeCreated")),e.push(new Ee("updated")),e.push(new Ee("md5Hash",null,!0)),e.push(new Ee("cacheControl",null,!0)),e.push(new Ee("contentDisposition",null,!0)),e.push(new Ee("contentEncoding",null,!0)),e.push(new Ee("contentLanguage",null,!0)),e.push(new Ee("contentType",null,!0)),e.push(new Ee("metadata","customMetadata",!0)),Te=e,Te}function Se(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new L(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ae(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Se(r,e),r}function ke(e,t,n){const r=ve(t);if(null===r)return null;const i=r;return Ae(e,i,n)}function Oe(e,t,n,r){const i=ve(t);if(null===i)return null;if(!B(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=K(a,n,r),u=W({alt:"media",token:t});return c+u}));return c[0]}function Re(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){if(!e)throw g()}function De(e,t){function n(n,r){const i=ke(e,r,t);return xe(null!==i),i}return n}function Pe(e,t){function n(n,r){const i=ke(e,r,t);return xe(null!==i),Oe(i,r,e.host,e._protocol)}return n}function Le(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?_():y():402===t.getStatus()?v(e.bucket):403===t.getStatus()?w(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Me(e){const t=Le(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=m(e.path)),i.serverResponse=r.serverResponse,i}return n}function Ue(e,t,n){const r=t.fullServerUrl(),i=K(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Ne(i,s,De(e,n),o);return a.errorHandler=Me(t),a}function Fe(e,t,n){const r=t.fullServerUrl(),i=K(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Ne(i,s,Pe(e,n),o);return a.errorHandler=Me(t),a}function Ve(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function je(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Ve(null,t)),r}function $e(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=je(t,r,i),l=Re(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=me.getBlob(h,r,d);if(null===f)throw S();const p={name:u["fullPath"]},g=K(s,e.host,e._protocol),m="POST",v=e.maxUploadRetryTime,y=new Ne(g,m,De(e,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Le(t),y}class Be{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function qe(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){xe(!1)}const r=t||["active"];return xe(!!n&&-1!==r.indexOf(n)),n}function ze(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=je(t,r,i),a={name:o["fullPath"]},c=K(s,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Re(o,n),d=e.maxUploadRetryTime;function f(e){let t;qe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){xe(!1)}return xe(B(t)),t}const p=new Ne(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Le(t),p}function He(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=qe(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){xe(!1)}n||xe(!1);const i=Number(n);return xe(!isNaN(i)),new Be(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Ne(n,o,s,a);return c.headers=i,c.errorHandler=Le(t),c}const Ke=262144;function We(e,t,n,r,i,s,o,a){const c=new Be(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw A();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},g=r.slice(h,d);if(null===g)throw S();function m(e,n){const i=qe(e,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?De(t,s)(e,n):null,new Be(o,a,"final"===i,u)}const v="POST",y=t.maxUploadRetryTime,_=new Ne(n,v,m,y);return _.headers=p,_.body=g.uploadData(),_.progressCallback=a||null,_.errorHandler=Le(e),_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Qe(e){switch(e){case"running":case"pausing":case"canceling":return Ge.RUNNING;case"paused":return Ge.PAUSED;case"success":return Ge.SUCCESS;case"canceled":return Ge.CANCELED;case"error":return Ge.ERROR;default:return Ge.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t,n){const r=j(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye=null;class Ze{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class et extends Ze{initXhr(){this.xhr_.responseType="text"}}function tt(){return Ye?Ye():new et}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Ce(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(d.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(G(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,l),this._needToFetchStatus=!0,void this.completeTransitions_();e=b()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(d.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=ze(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,tt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=He(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,tt,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=Ke*this._chunkMultiplier,t=new Be(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=We(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,tt,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=Ke*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=Ue(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,tt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=$e(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,tt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=E(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Qe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new Je(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Qe(this._state)){case Ge.SUCCESS:Xe(this._resolve.bind(null,this.snapshot))();break;case Ge.CANCELED:case Ge.ERROR:const t=this._reject;Xe(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Qe(this._state);switch(t){case Ge.RUNNING:case Ge.PAUSED:e.next&&Xe(e.next.bind(e,this.snapshot))();break;case Ge.SUCCESS:e.complete&&Xe(e.complete.bind(e))();break;case Ge.CANCELED:case Ge.ERROR:e.error&&Xe(e.error.bind(e,this._error))();break;default:e.error&&Xe(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this._service=e,this._location=t instanceof L?t:L.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new rt(e,t)}get root(){const e=new L(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return we(this._location.path)}get storage(){return this._service}get parent(){const e=ye(this._location.path);if(null===e)return null;const t=new L(this._location.bucket,e);return new rt(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw x(e)}}function it(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new nt(e,new me(t),n)}function st(e){e._throwIfRoot("getDownloadURL");const t=Fe(e.storage,e._location,Ce());return e.storage.makeRequestWithTokens(t,tt).then((e=>{if(null===e)throw k();return e}))}function ot(e,t){const n=_e(e._location.path,t),r=new L(e._location.bucket,n);return new rt(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return/^[A-Za-z]+:\/\//.test(e)}function ct(e,t){return new rt(e,t)}function ut(e,t){if(e instanceof ft){const n=e;if(null==n._bucket)throw C();const r=new rt(n,n._bucket);return null!=t?ut(r,t):r}return void 0!==t?ot(e,t):e}function lt(e,t){if(t&&at(t)){if(e instanceof ft)return ct(e,t);throw R("To use ref(service, url), the first argument must be a Storage instance.")}return ut(e,t)}function ht(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:L.makeFromBucketSpec(n,e)}function dt(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,e.app.options.projectId))}class ft{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?L.makeFromBucketSpec(r,this._host):ht(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=L.makeFromBucketSpec(this._url,e):this._bucket=ht(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rt(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new M(N());{const s=te(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const pt="@firebase/storage",gt="0.11.2",mt="storage";function vt(e,t,n){return e=(0,i.m9)(e),it(e,t,n)}function yt(e){return e=(0,i.m9)(e),st(e)}function _t(e,t){return e=(0,i.m9)(e),lt(e,t)}function wt(e=(0,r.Mq)(),t){e=(0,i.m9)(e);const n=(0,r.qX)(e,mt),s=n.getImmediate({identifier:t}),o=(0,i.P0)("storage");return o&&bt(s,...o),s}function bt(e,t,n,r={}){dt(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new ft(n,i,s,t,r.Jn)}function Tt(){(0,r.Xd)(new s.wA(mt,Et,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(pt,gt,""),(0,r.KN)(pt,gt,"esm2017")}Tt()},2483:function(e,t,n){n.d(t,{p7:function(){return nt},r5:function(){return j},yj:function(){return it}});n(7658);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=b(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_(e[n],t[n]))return!1;return!0}function _(e,t){return l(e)?w(e,t):l(t)?w(t,e):e===t}function w(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function I(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const C=/^[^#]+#/;function S(e,t){return e.replace(C,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function O(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=A(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function x(e,t){N.set(e,t)}function D(e){const t=N.get(e);return N.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:k()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function U(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?k():null}}function F(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,U(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:k()});s(o.current,o,!0);const c=a({},U(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(e){e=I(e);const t=F(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:S.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function j(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),V(e)}function $(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function K(e,t){return a(new Error,{type:e,[z]:!0},t)}function W(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const G="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},Q,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||G;if(l!==G){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ie(e,t,n){const r=X(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const h=he(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ue(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw K(1,{location:e});0,o=i.record.name,c=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw K(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:le(u)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,ge=/\//g,me=/=/g,ve=/\?/g,ye=/\+/g,_e=/%5B/g,we=/%5D/g,be=/%5E/g,Ee=/%60/g,Te=/%7B/g,Ie=/%7C/g,Ce=/%7D/g,Se=/%20/g;function Ae(e){return encodeURI(""+e).replace(Ie,"|").replace(_e,"[").replace(we,"]")}function ke(e){return Ae(e).replace(Te,"{").replace(Ce,"}").replace(be,"^")}function Oe(e){return Ae(e).replace(ye,"%2B").replace(Se,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Te,"{").replace(Ce,"}").replace(be,"^")}function Re(e){return Oe(e).replace(me,"%3D")}function Ne(e){return Ae(e).replace(fe,"%23").replace(ve,"%3F")}function xe(e){return null==e?"":Ne(e).replace(ge,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Oe(e))):[r&&Oe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ue=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),je=Symbol(""),$e=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):$(e)?a(K(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(qe(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&qe(u,n,r,s,e)()}))))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ve),n=(0,r.f3)(je),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function l(n={}){return Qe(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:s}=(0,r.f3)(Ve),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=We;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)($e),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Fe,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Fe,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Ue,l),(0,r.JJ)($e,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:g,route:i})||g}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||Le,h=e.history;const d=Be(),g=Be(),v=Be(),y=(0,i.XI)(q);let _=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(e=>""+e)),b=c.bind(null,xe),T=c.bind(null,De);function I(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function C(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function A(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:De(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:b(t)}),r.params=b(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=w(T(s.params));const u=p(o,a({},e,{hash:ke(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Le?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function P(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function L(e,t){if(_!==e)return K(8,{from:t,to:e})}function M(e){return V(e)}function U(e){return M(a(P(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=_=N(e),r=y.value,i=e.state,s=e.force,c=!0===e.replace,u=F(n);if(u)return V(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&m(o,r,n)&&(h=K(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):z(l,r)).catch((e=>W(e)?W(e,2)?e:ne(e):ee(e,l,r))).then((e=>{if(e){if(W(e,2))return V(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=G(l,r,!0,c,i);return H(l,r,e),e}))}function j(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function z(e,t){let n;const[r,i,s]=rt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=j.bind(null,e,t);return n.push(o),ue(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),ue(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ue(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t),n.push(o),ue(n)))).then((()=>{n=[];for(const r of g.list())n.push(qe(r,e,t));return n.push(o),ue(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function H(e,t,n){v.list().forEach((r=>$((()=>r(e,t,n)))))}function G(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===q,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),y.value=e,re(e,t,n,c),ne()}let Q;function J(){Q||(Q=h.listen(((e,t,n)=>{if(!ce.listening)return;const r=N(e),i=F(r);if(i)return void V(a(i,{replace:!0}),r).catch(u);_=r;const o=y.value;s&&x(R(o.fullPath,n.delta),k()),z(r,o).catch((e=>W(e,12)?e:W(e,2)?(V(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,r,o)))).then((e=>{e=e||G(r,o,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),H(r,o,e)})).catch(u)})))}let X,Y=Be(),Z=Be();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return X&&y.value!==q?Promise.resolve():new Promise(((e,t)=>{Y.add([e,t])}))}function ne(e){return X||(X=!e,J(),Y.list().forEach((([t,n])=>e?n(e):t())),Y.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&D(R(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&O(e))).catch((e=>ee(e,t,n)))}const ie=e=>h.go(e);let oe;const ae=new Set,ce={currentRoute:y,listening:!0,addRoute:I,removeRoute:C,hasRoute:A,getRoutes:S,resolve:N,options:e,push:M,replace:U,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:g.add,afterEach:v.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!oe&&y.value===q&&(oe=!0,M(h.location).catch((e=>{0})));const n={};for(const i in q)Object.defineProperty(n,i,{get:()=>y.value[i],enumerable:!0});e.provide(Ve,t),e.provide(je,(0,i.Um)(n)),e.provide($e,y);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(_=q,Q&&Q(),Q=null,y.value=q,oe=!1,X=!1),r()}}};function ue(e){return e.reduce(((e,t)=>e.then((()=>$(t)))),Promise.resolve())}return ce}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>v(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}function it(){return(0,r.f3)(je)}}}]);
//# sourceMappingURL=chunk-vendors.69d2a689.js.map