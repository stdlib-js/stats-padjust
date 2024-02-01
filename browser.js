// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,h,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var j=String.fromCharCode,A=isNaN,S=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function O(r){var e,t,n;if(!V(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var N=Object.prototype,P=N.toString,$=N.__defineGetter__,C=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__,Z=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};function W(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",B=U()?function(r){var e,t,n,i,o;if(null==r)return X.call(r);t=r[z],o=z,e=null!=(i=r)&&Y.call(i,o);try{r[z]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[z]=t:delete r[z],n}:function(r){return X.call(r)},D=Number,H=D.prototype.toString,J=U();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function Q(r){return L(r)||K(r)}function rr(r){return L(r)&&r>=0&&r<=1}function er(r){return K(r)&&r.valueOf()>=0&&r.valueOf()<=1}function tr(r){return rr(r)||er(r)}W(Q,"isPrimitive",L),W(Q,"isObject",K),W(tr,"isPrimitive",rr),W(tr,"isObject",er);var nr=Math.floor;function ir(r){return nr(r)===r}function or(r){if("function"!=typeof r)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=4294967295}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}var ar=or(tr.isPrimitive),ur=or(tr.isObject),cr=or(tr);W(cr,"primitives",ar),W(cr,"objects",ur);var fr=Number.POSITIVE_INFINITY,lr=D.NEGATIVE_INFINITY;function sr(r){return r<fr&&r>lr&&ir(r)}function pr(r){return L(r)&&sr(r)}function gr(r){return K(r)&&sr(r.valueOf())}function hr(r){return pr(r)||gr(r)}function dr(r){return"string"==typeof r}W(hr,"isPrimitive",pr),W(hr,"isObject",gr);var yr=String.prototype.valueOf,br=U();function vr(r){return"object"==typeof r&&(r instanceof String||(br?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===B(r)))}function wr(r){return dr(r)||vr(r)}function mr(r,e){var t,n;for(n=0;n<r.length;n++)t=r[n],r[n]=e*t>1?1:e*t;return r}function _r(r){return 0===r&&1/r===lr}function Er(r){return r!=r}function jr(r,e){return Er(r)||Er(e)?NaN:r===lr||e===lr?lr:r===e&&0===r?_r(r)?r:e:r<e?r:e}function Ar(r){return 0===r&&1/r===fr}function Sr(r,e){return Er(r)||Er(e)?NaN:r===fr||e===fr?fr:r===e&&0===r?Ar(r)?r:e:r>e?r:e}W(wr,"isPrimitive",dr),W(wr,"isObject",vr);var Ir="function"==typeof Float64Array,kr="function"==typeof Float64Array?Float64Array:null,Tr="function"==typeof Float64Array?Float64Array:void 0,xr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr([1,3.14,-3.14,NaN]),t=e,r=(Ir&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},Fr="function"==typeof Int32Array,Vr="function"==typeof Int32Array?Int32Array:null,Or="function"==typeof Int32Array?Int32Array:void 0,Nr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr([1,3.14,-3.14,2147483648]),t=e,r=(Fr&&t instanceof Int32Array||"[object Int32Array]"===B(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")};function Pr(r,e){return r<e?-1:r>e?1:0}function $r(r,e){return r<e?1:r>e?-1:0}function Cr(r,e){var t,n,i;for(t=e?$r:Pr,n=new Nr(r.length),i=0;i<r.length;i++)n[i]=i;return n.sort((function(e,n){return t(r[e],r[n])}))}var Rr=Array.prototype.slice;function Gr(r,e){var t,n,i,o,a,u,c,f,l,s,p,g;if((n=e-(a=r.length))>0)for(r=Rr.call(r);n>0;)r.push(1),n-=1;for(t=Cr(r),f=0;f<e;f++)g=e*r[f]/(f+1);for(p=new xr(e),i=new xr(e),f=e-1;f>1;f--){for(c=fr,s=e-f+1;s<=e;s++)(g=f*r[t[s]]/(2+s-e+f-1))<c&&(c=g);for(l=0;l<e-f+1;l++)p[l]=jr(f*r[t[l]],c);for(s=e-f+1;s<=e;s++)p[s]=p[e-f];for(l=0;l<i.length;l++)i[l]=Sr(p[l],i[l])}for(u=new Array(a),f=0;f<a;f++)o=t[f],g=Sr(i[f],r[o]),u[o]=g;return u}function Zr(r,e,t,n,i){var o,a,u,c,f;if(r<=0)return n;if(u=i<0?(1-r)*i:0,o=e[a=t<0?(1-r)*t:0],n[u]=o,u+=i,f=1,!1===Er(o))for(;f<r;f++){if(Er(c=e[a+=t])){o=c;break}(c>o||c===o&&Ar(c))&&(o=c),n[u]=o,u+=i}if(Er(o))for(;f<r;f++)n[u]=o,u+=i;return n}function Wr(r,e){var t,n,i,o,a;for(i=r.length,t=Cr(r),n=new xr(i),a=0;a<i;a++)n[a]=(e-a)*r[t[a]];for(n=Zr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=jr(n[a],1);return o}function Lr(r,e,t,n,i){var o,a,u,c,f;if(r<=0)return n;if(u=i<0?(1-r)*i:0,o=e[a=t<0?(1-r)*t:0],n[u]=o,u+=i,f=1,!1===Er(o))for(;f<r;f++){if(Er(c=e[a+=t])){o=c;break}(c<o||c===o&&_r(c))&&(o=c),n[u]=o,u+=i}if(Er(o))for(;f<r;f++)n[u]=o,u+=i;return n}function Mr(r,e){var t,n,i,o,a;for(i=r.length,t=Cr(r,!0),n=new xr(i),a=0;a<i;a++)n[a]=e/(i-a)*r[t[a]];for(n=Lr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=jr(n[a],1);return o}function Ur(r,e){var t,n,i,o,a,u;for(i=r.length,t=Cr(r,!0),u=0,a=0;a<e;a++)u+=1/(1+a);for(n=new xr(i),a=0;a<i;a++)n[a]=u*e/(i-a)*r[t[a]];for(n=Lr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=jr(n[a],1);return o}W(Zr,"ndarray",(function(r,e,t,n,i,o,a){var u,c,f,l,s;if(r<=0)return i;if(f=a,u=e[c=n],i[f]=u,f+=o,s=1,!1===Er(u))for(;s<r;s++){if(Er(l=e[c+=t])){u=l;break}(l>u||l===u&&Ar(l))&&(u=l),i[f]=u,f+=o}if(Er(u))for(;s<r;s++)i[f]=u,f+=o;return i})),W(Lr,"ndarray",(function(r,e,t,n,i,o,a){var u,c,f,l,s;if(r<=0)return i;if(f=a,u=e[c=n],i[f]=u,f+=o,s=1,!1===Er(u))for(;s<r;s++){if(Er(l=e[c+=t])){u=l;break}(l<u||l===u&&_r(l))&&(u=l),i[f]=u,f+=o}if(Er(u))for(;s<r;s++)i[f]=u,f+=o;return i}));var Xr=["bh","bonferroni","by","holm","hommel"];return function(r,e,t){if(!cr(r))throw new TypeError(O("invalid argument. First argument must be an array of probabilities. Value: `%s`.",r));if(!dr(e))throw new TypeError(O("invalid argument. Second argument must be a string. Value: `%s`.",e));if(arguments.length>2){if(!pr(t))throw new TypeError(O("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t<r.length)throw new RangeError(O("invalid argument. The number of comparisons must be greater or equal to the number of p-values to be adjusted. Value: `%u`.",t))}switch(t=t||r.length,e){case"bonferroni":return mr(r,t);case"by":return Ur(r,t);case"bh":return Mr(r,t);case"holm":return Wr(r,t);case"hommel":return Gr(r,t);default:throw new Error(O('invalid argument. Second argument must be one of the following: "%s". Value: `%s`.',Xr.join('", "'),e))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).padjust=e();
//# sourceMappingURL=browser.js.map
