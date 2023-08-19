// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,u=n.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=a.value,r.__proto__=c):r[t]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,a.get),p&&i&&i.call(r,t,a.set),r};function c(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",h=p()?function(r){var t,n,e,o,i;if(null==r)return b.call(r);n=r[v],i=v,t=null!=(o=r)&&s.call(o,i);try{r[v]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[v]=n:delete r[v],e}:function(r){return b.call(r)},g=Number,m=g.prototype.toString,w=p();function d(r){return"object"==typeof r&&(r instanceof g||(w?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function _(r){return l(r)||d(r)}function j(r){return l(r)&&r>=0&&r<=1}function A(r){return d(r)&&r.valueOf()>=0&&r.valueOf()<=1}function I(r){return j(r)||A(r)}c(_,"isPrimitive",l),c(_,"isObject",d),c(I,"isPrimitive",j),c(I,"isObject",A);var O=Math.floor;function S(r){return O(r)===r}function E(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&S(r.length)&&r.length>=0&&r.length<=4294967295}(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}var N=E(I.isPrimitive),T=E(I.isObject),P=E(I);c(P,"primitives",N),c(P,"objects",T);var F=Number.POSITIVE_INFINITY,G=g.NEGATIVE_INFINITY;function k(r){return r<F&&r>G&&S(r)}function L(r){return l(r)&&k(r)}function V(r){return d(r)&&k(r.valueOf())}function x(r){return L(r)||V(r)}function M(r){return"string"==typeof r}c(x,"isPrimitive",L),c(x,"isObject",V);var C=String.prototype.valueOf,R=p();function Y(r){return"object"==typeof r&&(r instanceof String||(R?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object String]"===h(r)))}function z(r){return M(r)||Y(r)}function K(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function U(r,t){var n,e;for(e=0;e<r.length;e++)n=r[e],r[e]=t*n>1?1:t*n;return r}function q(r){return 0===r&&1/r===G}function B(r){return r!=r}function D(r,t){var n,e,o,i;if(2===(n=arguments.length))return B(r)||B(t)?NaN:r===G||t===G?G:r===t&&0===r?q(r)?r:t:r<t?r:t;for(e=F,i=0;i<n;i++){if(B(o=arguments[i])||o===G)return o;(o<e||o===e&&0===o&&q(o))&&(e=o)}return e}function H(r){return 0===r&&1/r===F}function J(r,t){var n,e,o,i;if(2===(n=arguments.length))return B(r)||B(t)?NaN:r===F||t===F?F:r===t&&0===r?H(r)?r:t:r>t?r:t;for(e=G,i=0;i<n;i++){if(B(o=arguments[i])||o===F)return o;(o>e||o===e&&0===o&&H(o))&&(e=o)}return e}c(z,"isPrimitive",M),c(z,"isObject",Y);var Q="function"==typeof Float64Array,W="function"==typeof Float64Array?Float64Array:null,X="function"==typeof Float64Array?Float64Array:void 0,Z=function(){var r,t,n;if("function"!=typeof W)return!1;try{t=new W([1,3.14,-3.14,NaN]),n=t,r=(Q&&n instanceof Float64Array||"[object Float64Array]"===h(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?X:function(){throw new Error("not implemented")},$="function"==typeof Int32Array,rr="function"==typeof Int32Array?Int32Array:null,tr="function"==typeof Int32Array?Int32Array:void 0,nr=function(){var r,t,n;if("function"!=typeof rr)return!1;try{t=new rr([1,3.14,-3.14,2147483648]),n=t,r=($&&n instanceof Int32Array||"[object Int32Array]"===h(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?tr:function(){throw new Error("not implemented")};function er(r,t){return r<t?-1:r>t?1:0}function or(r,t){return r<t?1:r>t?-1:0}function ir(r,t){var n,e,o;for(n=t?or:er,e=new nr(r.length),o=0;o<r.length;o++)e[o]=o;return e.sort((function(t,e){return n(r[t],r[e])}))}var fr=Array.prototype.slice;function ur(r,t){var n,e,o,i,f,u,a,c,l,y,p,b;if((e=t-(f=r.length))>0)for(r=fr.call(r);e>0;)r.push(1),e-=1;for(n=ir(r),c=0;c<t;c++)b=t*r[c]/(c+1);for(p=new Z(t),o=new Z(t),c=t-1;c>1;c--){for(a=F,y=t-c+1;y<=t;y++)(b=c*r[n[y]]/(2+y-t+c-1))<a&&(a=b);for(l=0;l<t-c+1;l++)p[l]=D(c*r[n[l]],a);for(y=t-c+1;y<=t;y++)p[y]=p[t-c];for(l=0;l<o.length;l++)o[l]=J(p[l],o[l])}for(u=new Array(f),c=0;c<f;c++)i=n[c],b=J(o[c],r[i]),u[i]=b;return u}function ar(r,t,n,e,o){var i,f,u,a,c;if(r<=0)return e;if(u=o<0?(1-r)*o:0,i=t[f=n<0?(1-r)*n:0],e[u]=i,u+=o,c=1,!1===B(i))for(;c<r;c++){if(B(a=t[f+=n])){i=a;break}(a>i||a===i&&H(a))&&(i=a),e[u]=i,u+=o}if(B(i))for(;c<r;c++)e[u]=i,u+=o;return e}function cr(r,t){var n,e,o,i,f;for(o=r.length,n=ir(r),e=new Z(o),f=0;f<o;f++)e[f]=(t-f)*r[n[f]];for(e=ar(o,e,1,e,1),i=new Array(o),f=0;f<o;f++)i[n[f]]=D(e[f],1);return i}function lr(r,t,n,e,o){var i,f,u,a,c;if(r<=0)return e;if(u=o<0?(1-r)*o:0,i=t[f=n<0?(1-r)*n:0],e[u]=i,u+=o,c=1,!1===B(i))for(;c<r;c++){if(B(a=t[f+=n])){i=a;break}(a<i||a===i&&q(a))&&(i=a),e[u]=i,u+=o}if(B(i))for(;c<r;c++)e[u]=i,u+=o;return e}function yr(r,t){var n,e,o,i,f;for(o=r.length,n=ir(r,!0),e=new Z(o),f=0;f<o;f++)e[f]=t/(o-f)*r[n[f]];for(e=lr(o,e,1,e,1),i=new Array(o),f=0;f<o;f++)i[n[f]]=D(e[f],1);return i}function pr(r,t){var n,e,o,i,f,u;for(o=r.length,n=ir(r,!0),u=0,f=0;f<t;f++)u+=1/(1+f);for(e=new Z(o),f=0;f<o;f++)e[f]=u*t/(o-f)*r[n[f]];for(e=lr(o,e,1,e,1),i=new Array(o),f=0;f<o;f++)i[n[f]]=D(e[f],1);return i}c(ar,"ndarray",(function(r,t,n,e,o,i,f){var u,a,c,l,y;if(r<=0)return o;if(c=f,u=t[a=e],o[c]=u,c+=i,y=1,!1===B(u))for(;y<r;y++){if(B(l=t[a+=n])){u=l;break}(l>u||l===u&&H(l))&&(u=l),o[c]=u,c+=i}if(B(u))for(;y<r;y++)o[c]=u,c+=i;return o})),c(lr,"ndarray",(function(r,t,n,e,o,i,f){var u,a,c,l,y;if(r<=0)return o;if(c=f,u=t[a=e],o[c]=u,c+=i,y=1,!1===B(u))for(;y<r;y++){if(B(l=t[a+=n])){u=l;break}(l<u||l===u&&q(l))&&(u=l),o[c]=u,c+=i}if(B(u))for(;y<r;y++)o[c]=u,c+=i;return o}));var br=["bh","bonferroni","by","holm","hommel"];return function(r,t,n){if(!P(r))throw new TypeError(K("1Ll9x,GK",r));if(!M(t))throw new TypeError(K("1Ll39,Ey",t));if(arguments.length>2){if(!L(n))throw new TypeError(K("1Ll2z,GL",n));if(n<r.length)throw new RangeError(K("1LlGM",n))}switch(n=n||r.length,t){case"bonferroni":return U(r,n);case"by":return pr(r,n);case"bh":return yr(r,n);case"holm":return cr(r,n);case"hommel":return ur(r,n);default:throw new Error(K("1LlGN,Mn",br.join('", "'),t))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).padjust=t();
//# sourceMappingURL=browser.js.map
