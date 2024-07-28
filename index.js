// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,h,"$1."),n=s.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function j(r){return r!=r}function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,f,u,l,s,p,g,h,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,j(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,y=void 0,(y=g-p.length)<0?p:p=h?p+m(y):m(y)+p)),f+=n.arg||"",u+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F=Object.prototype,O=F.toString,N=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,$=F.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};function L(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,M=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,z="function"==typeof U?U.toStringTag:"",D=Z()?function(r){var e,t,n,i,o;if(null==r)return W.call(r);t=r[z],o=z,e=null!=(i=r)&&M.call(i,o);try{r[z]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[z]=t:delete r[z],n}:function(r){return W.call(r)},X=Number,Y=X.prototype.toString,Q=Z();function q(r){return"object"==typeof r&&(r instanceof X||(Q?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function B(r){return R(r)||q(r)}function H(r){return R(r)&&r>=0&&r<=1}function J(r){return q(r)&&r.valueOf()>=0&&r.valueOf()<=1}function K(r){return H(r)||J(r)}L(B,"isPrimitive",R),L(B,"isObject",q),L(K,"isPrimitive",H),L(K,"isObject",J);var rr=Math.floor;function er(r){return rr(r)===r}var tr=4294967295;function nr(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&er(r.length)&&r.length>=0&&r.length<=tr}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}var ir=nr(K.isPrimitive),or=nr(K.isObject),ar=nr(K);L(ar,"primitives",ir),L(ar,"objects",or);var cr=Number.POSITIVE_INFINITY,fr=X.NEGATIVE_INFINITY;function ur(r){return r<cr&&r>fr&&er(r)}function lr(r){return R(r)&&ur(r)}function sr(r){return q(r)&&ur(r.valueOf())}function pr(r){return lr(r)||sr(r)}function gr(r){return"string"==typeof r}L(pr,"isPrimitive",lr),L(pr,"isObject",sr);var hr=String.prototype.valueOf,yr=Z();function dr(r){return"object"==typeof r&&(r instanceof String||(yr?function(r){try{return hr.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function br(r){return gr(r)||dr(r)}function vr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function wr(r){return 0===r&&1/r===fr}function mr(r){return r!=r}function _r(r,e){return mr(r)||mr(e)?NaN:r===fr||e===fr?fr:r===e&&0===r?wr(r)?r:e:r<e?r:e}function Er(r){return 0===r&&1/r===cr}function jr(r,e){return mr(r)||mr(e)?NaN:r===cr||e===cr?cr:r===e&&0===r?Er(r)?r:e:r>e?r:e}L(br,"isPrimitive",gr),L(br,"isObject",dr);var Ar="function"==typeof Float64Array,Sr="function"==typeof Float64Array?Float64Array:null,Ir="function"==typeof Float64Array?Float64Array:void 0,kr=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr([1,3.14,-3.14,NaN]),t=e,r=(Ar&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")},xr="function"==typeof Int32Array,Tr="function"==typeof Int32Array?Int32Array:null,Fr="function"==typeof Int32Array?Int32Array:void 0,Or=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,2147483648]),t=e,r=(xr&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};function Nr(r,e){return r<e?-1:r>e?1:0}function Vr(r,e){return r<e?1:r>e?-1:0}function Pr(r,e){var t,n,i;for(t=e?Vr:Nr,n=new Or(r.length),i=0;i<r.length;i++)n[i]=i;return n.sort((function(e,n){return t(r[e],r[n])}))}var $r=Array.prototype.slice;function Cr(r,e,t,n,i){var o,a,c,f,u;if(r<=0)return n;if(c=i<0?(1-r)*i:0,o=e[a=t<0?(1-r)*t:0],n[c]=o,c+=i,u=1,!1===mr(o))for(;u<r;u++){if(mr(f=e[a+=t])){o=f;break}(f>o||f===o&&Er(f))&&(o=f),n[c]=o,c+=i}if(mr(o))for(;u<r;u++)n[c]=o,c+=i;return n}function Lr(r,e,t,n,i){var o,a,c,f,u;if(r<=0)return n;if(c=i<0?(1-r)*i:0,o=e[a=t<0?(1-r)*t:0],n[c]=o,c+=i,u=1,!1===mr(o))for(;u<r;u++){if(mr(f=e[a+=t])){o=f;break}(f<o||f===o&&wr(f))&&(o=f),n[c]=o,c+=i}if(mr(o))for(;u<r;u++)n[c]=o,c+=i;return n}L(Cr,"ndarray",(function(r,e,t,n,i,o,a){var c,f,u,l,s;if(r<=0)return i;if(u=a,c=e[f=n],i[u]=c,u+=o,s=1,!1===mr(c))for(;s<r;s++){if(mr(l=e[f+=t])){c=l;break}(l>c||l===c&&Er(l))&&(c=l),i[u]=c,u+=o}if(mr(c))for(;s<r;s++)i[u]=c,u+=o;return i})),L(Lr,"ndarray",(function(r,e,t,n,i,o,a){var c,f,u,l,s;if(r<=0)return i;if(u=a,c=e[f=n],i[u]=c,u+=o,s=1,!1===mr(c))for(;s<r;s++){if(mr(l=e[f+=t])){c=l;break}(l<c||l===c&&wr(l))&&(c=l),i[u]=c,u+=o}if(mr(c))for(;s<r;s++)i[u]=c,u+=o;return i}));var Rr=["bh","bonferroni","by","holm","hommel"];return function(r,e,t){if(!ar(r))throw new TypeError(vr("1Ll9x",r));if(!gr(e))throw new TypeError(vr("1Ll39",e));if(arguments.length>2){if(!lr(t))throw new TypeError(vr("1Ll2z",t));if(t<r.length)throw new RangeError(vr("1LlDP",t))}switch(t=t||r.length,e){case"bonferroni":return function(r,e){var t,n;for(n=0;n<r.length;n++)t=r[n],r[n]=e*t>1?1:e*t;return r}(r,t);case"by":return function(r,e){var t,n,i,o,a,c;for(i=r.length,t=Pr(r,!0),c=0,a=0;a<e;a++)c+=1/(1+a);for(n=new kr(i),a=0;a<i;a++)n[a]=c*e/(i-a)*r[t[a]];for(n=Lr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=_r(n[a],1);return o}(r,t);case"bh":return function(r,e){var t,n,i,o,a;for(i=r.length,t=Pr(r,!0),n=new kr(i),a=0;a<i;a++)n[a]=e/(i-a)*r[t[a]];for(n=Lr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=_r(n[a],1);return o}(r,t);case"holm":return function(r,e){var t,n,i,o,a;for(i=r.length,t=Pr(r),n=new kr(i),a=0;a<i;a++)n[a]=(e-a)*r[t[a]];for(n=Cr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=_r(n[a],1);return o}(r,t);case"hommel":return function(r,e){var t,n,i,o,a,c,f,u,l,s,p,g;if((n=e-(a=r.length))>0)for(r=$r.call(r);n>0;)r.push(1),n-=1;for(t=Pr(r),u=0;u<e;u++)g=e*r[u]/(u+1);for(p=new kr(e),i=new kr(e),u=e-1;u>1;u--){for(f=cr,s=e-u+1;s<=e;s++)(g=u*r[t[s]]/(2+s-e+u-1))<f&&(f=g);for(l=0;l<e-u+1;l++)p[l]=_r(u*r[t[l]],f);for(s=e-u+1;s<=e;s++)p[s]=p[e-u];for(l=0;l<i.length;l++)i[l]=jr(p[l],i[l])}for(c=new Array(a),u=0;u<a;u++)o=t[u],g=jr(i[u],r[o]),c[o]=g;return c}(r,t);default:throw new Error(vr("1LlDQ",Rr.join('", "'),e))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).padjust=e();
//# sourceMappingURL=index.js.map
