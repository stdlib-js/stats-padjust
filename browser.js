// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,h,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var A=String.fromCharCode,j=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,u,l,s,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function O(r){return"string"==typeof r}function N(r){var e,t,n;if(!O(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var V=Object.prototype,P=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,L=V.__lookupGetter__,C=V.__lookupSetter__,R=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&G&&G.call(r,e,t.set),r};function M(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,K="function"==typeof Y?Y.toStringTag:"",q=U()?function(r){var e,t,n,i,o;if(null==r)return z.call(r);t=r[K],o=K,e=null!=(i=r)&&X.call(i,o);try{r[K]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[K]=t:delete r[K],n}:function(r){return z.call(r)},B=Number,D=B.prototype.toString,H=U();function J(r){return"object"==typeof r&&(r instanceof B||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function Q(r){return Z(r)||J(r)}function rr(r){return Z(r)&&r>=0&&r<=1}function er(r){return J(r)&&r.valueOf()>=0&&r.valueOf()<=1}function tr(r){return rr(r)||er(r)}M(Q,"isPrimitive",Z),M(Q,"isObject",J),M(tr,"isPrimitive",rr),M(tr,"isObject",er);var nr=Math.floor;function ir(r){return nr(r)===r}function or(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=4294967295}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}var ar=or(tr.isPrimitive),cr=or(tr.isObject),fr=or(tr);M(fr,"primitives",ar),M(fr,"objects",cr);var ur=Number.POSITIVE_INFINITY,lr=B.NEGATIVE_INFINITY;function sr(r){return r<ur&&r>lr&&ir(r)}function pr(r){return Z(r)&&sr(r)}function gr(r){return J(r)&&sr(r.valueOf())}function hr(r){return pr(r)||gr(r)}function yr(r){return"string"==typeof r}M(hr,"isPrimitive",pr),M(hr,"isObject",gr);var dr=String.prototype.valueOf,br=U();function wr(r){return"object"==typeof r&&(r instanceof String||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function vr(r){return yr(r)||wr(r)}function mr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Er(r,e){var t,n;for(n=0;n<r.length;n++)t=r[n],r[n]=e*t>1?1:e*t;return r}function _r(r){return 0===r&&1/r===lr}function Ar(r){return r!=r}function jr(r,e){return Ar(r)||Ar(e)?NaN:r===lr||e===lr?lr:r===e&&0===r?_r(r)?r:e:r<e?r:e}function Ir(r){return 0===r&&1/r===ur}function Sr(r,e){return Ar(r)||Ar(e)?NaN:r===ur||e===ur?ur:r===e&&0===r?Ir(r)?r:e:r>e?r:e}M(vr,"isPrimitive",yr),M(vr,"isObject",wr);var kr="function"==typeof Float64Array,xr="function"==typeof Float64Array?Float64Array:null,Tr="function"==typeof Float64Array?Float64Array:void 0,Fr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,NaN]),t=e,r=(kr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},Or="function"==typeof Int32Array,Nr="function"==typeof Int32Array?Int32Array:null,Vr="function"==typeof Int32Array?Int32Array:void 0,Pr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr([1,3.14,-3.14,2147483648]),t=e,r=(Or&&t instanceof Int32Array||"[object Int32Array]"===q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};function $r(r,e){return r<e?-1:r>e?1:0}function Gr(r,e){return r<e?1:r>e?-1:0}function Lr(r,e){var t,n,i;for(t=e?Gr:$r,n=new Pr(r.length),i=0;i<r.length;i++)n[i]=i;return n.sort((function(e,n){return t(r[e],r[n])}))}var Cr=Array.prototype.slice;function Rr(r,e){var t,n,i,o,a,c,f,u,l,s,p,g;if((n=e-(a=r.length))>0)for(r=Cr.call(r);n>0;)r.push(1),n-=1;for(t=Lr(r),u=0;u<e;u++)g=e*r[u]/(u+1);for(p=new Fr(e),i=new Fr(e),u=e-1;u>1;u--){for(f=ur,s=e-u+1;s<=e;s++)(g=u*r[t[s]]/(2+s-e+u-1))<f&&(f=g);for(l=0;l<e-u+1;l++)p[l]=jr(u*r[t[l]],f);for(s=e-u+1;s<=e;s++)p[s]=p[e-u];for(l=0;l<i.length;l++)i[l]=Sr(p[l],i[l])}for(c=new Array(a),u=0;u<a;u++)o=t[u],g=Sr(i[u],r[o]),c[o]=g;return c}function Mr(r,e,t,n,i){var o,a,c,f,u;if(r<=0)return n;if(c=i<0?(1-r)*i:0,o=e[a=t<0?(1-r)*t:0],n[c]=o,c+=i,u=1,!1===Ar(o))for(;u<r;u++){if(Ar(f=e[a+=t])){o=f;break}(f>o||f===o&&Ir(f))&&(o=f),n[c]=o,c+=i}if(Ar(o))for(;u<r;u++)n[c]=o,c+=i;return n}function Zr(r,e){var t,n,i,o,a;for(i=r.length,t=Lr(r),n=new Fr(i),a=0;a<i;a++)n[a]=(e-a)*r[t[a]];for(n=Mr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=jr(n[a],1);return o}function Wr(r,e,t,n,i){var o,a,c,f,u;if(r<=0)return n;if(c=i<0?(1-r)*i:0,o=e[a=t<0?(1-r)*t:0],n[c]=o,c+=i,u=1,!1===Ar(o))for(;u<r;u++){if(Ar(f=e[a+=t])){o=f;break}(f<o||f===o&&_r(f))&&(o=f),n[c]=o,c+=i}if(Ar(o))for(;u<r;u++)n[c]=o,c+=i;return n}function Ur(r,e){var t,n,i,o,a;for(i=r.length,t=Lr(r,!0),n=new Fr(i),a=0;a<i;a++)n[a]=e/(i-a)*r[t[a]];for(n=Wr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=jr(n[a],1);return o}function zr(r,e){var t,n,i,o,a,c;for(i=r.length,t=Lr(r,!0),c=0,a=0;a<e;a++)c+=1/(1+a);for(n=new Fr(i),a=0;a<i;a++)n[a]=c*e/(i-a)*r[t[a]];for(n=Wr(i,n,1,n,1),o=new Array(i),a=0;a<i;a++)o[t[a]]=jr(n[a],1);return o}M(Mr,"ndarray",(function(r,e,t,n,i,o,a){var c,f,u,l,s;if(r<=0)return i;if(u=a,c=e[f=n],i[u]=c,u+=o,s=1,!1===Ar(c))for(;s<r;s++){if(Ar(l=e[f+=t])){c=l;break}(l>c||l===c&&Ir(l))&&(c=l),i[u]=c,u+=o}if(Ar(c))for(;s<r;s++)i[u]=c,u+=o;return i})),M(Wr,"ndarray",(function(r,e,t,n,i,o,a){var c,f,u,l,s;if(r<=0)return i;if(u=a,c=e[f=n],i[u]=c,u+=o,s=1,!1===Ar(c))for(;s<r;s++){if(Ar(l=e[f+=t])){c=l;break}(l<c||l===c&&_r(l))&&(c=l),i[u]=c,u+=o}if(Ar(c))for(;s<r;s++)i[u]=c,u+=o;return i}));var Xr=["bh","bonferroni","by","holm","hommel"];return function(r,e,t){if(!fr(r))throw new TypeError(mr("1Ll9x,GK",r));if(!yr(e))throw new TypeError(mr("1Ll39,Ey",e));if(arguments.length>2){if(!pr(t))throw new TypeError(mr("1Ll2z,GL",t));if(t<r.length)throw new RangeError(mr("1LlGM",t))}switch(t=t||r.length,e){case"bonferroni":return Er(r,t);case"by":return zr(r,t);case"bh":return Ur(r,t);case"holm":return Zr(r,t);case"hommel":return Rr(r,t);default:throw new Error(mr("1LlGN,Mn",Xr.join('", "'),e))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).padjust=e();
//# sourceMappingURL=browser.js.map