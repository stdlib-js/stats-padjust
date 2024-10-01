"use strict";var g=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var c=g(function(br,m){
function N(r,t){var i,n;for(n=0;n<r.length;n++)i=r[n],r[n]=t*i>1?1:t*i;return r}m.exports=N
});var l=g(function(yr,A){
var O=require('@stdlib/array-int32/dist');function R(r,t){return r<t?-1:r>t?1:0}function z(r,t){return r<t?1:r>t?-1:0}function B(r,t){var i,n,u;for(i=t?z:R,n=new O(r.length),u=0;u<r.length;u++)n[u]=u;return n.sort(f);function f(e,v){return i(r[e],r[v])}}A.exports=B
});var j=g(function(mr,T){
var C=require('@stdlib/math-base-special-min/dist'),x=require('@stdlib/math-base-special-max/dist'),E=require('@stdlib/array-float64/dist'),F=require('@stdlib/constants-float64-pinf/dist'),G=l(),J=Array.prototype.slice;function K(r,t){var i,n,u,f,e,v,b,y,a,o,h,d,q;if(e=r.length,n=t-e,n>0)for(r=J.call(r);n>0;)r.push(1),n-=1;for(i=G(r),y=F,a=0;a<t;a++)q=t*r[a]/(a+1),q<y&&(y=q);for(d=new E(t),u=new E(t),a=t-1;a>1;a--){for(b=F,h=t-a+1;h<=t;h++)q=a*r[i[h]]/(2+h-t+a-1),q<b&&(b=q);for(o=0;o<t-a+1;o++)d[o]=C(a*r[i[o]],b);for(h=t-a+1;h<=t;h++)d[h]=d[t-a];for(o=0;o<u.length;o++)u[o]=x(d[o],u[o])}for(v=new Array(e),a=0;a<e;a++)f=i[a],q=x(u[a],r[f]),v[f]=q;return v}T.exports=K
});var P=g(function(cr,V){
var L=require('@stdlib/math-base-special-min/dist'),Q=require('@stdlib/stats-base-cumax/dist'),U=require('@stdlib/array-float64/dist'),W=l();function X(r,t){var i,n,u,f,e;for(u=r.length,i=W(r),n=new U(u),e=0;e<u;e++)n[e]=(t-e)*r[i[e]];for(n=Q(u,n,1,n,1),f=new Array(u),e=0;e<u;e++)f[i[e]]=L(n[e],1);return f}V.exports=X
});var I=g(function(Ar,S){
var Y=require('@stdlib/math-base-special-min/dist'),Z=require('@stdlib/stats-base-cumin/dist'),_=require('@stdlib/array-float64/dist'),$=l();function s(r,t){var i,n,u,f,e;for(u=r.length,i=$(r,!0),n=new _(u),e=0;e<u;e++)n[e]=t/(u-e)*r[i[e]];for(n=Z(u,n,1,n,1),f=new Array(u),e=0;e<u;e++)f[i[e]]=Y(n[e],1);return f}S.exports=s
});var D=g(function(xr,k){
var p=require('@stdlib/math-base-special-min/dist'),rr=require('@stdlib/stats-base-cumin/dist'),er=require('@stdlib/array-float64/dist'),tr=l();function ir(r,t){var i,n,u,f,e,v;for(u=r.length,i=tr(r,!0),v=0,e=0;e<t;e++)v+=1/(1+e);for(n=new er(u),e=0;e<u;e++)n[e]=v*t/(u-e)*r[i[e]];for(n=rr(u,n,1,n,1),f=new Array(u),e=0;e<u;e++)f[i[e]]=p(n[e],1);return f}k.exports=ir
});var M=g(function(Er,H){
var nr=require('@stdlib/assert-is-probability-array/dist'),ur=require('@stdlib/assert-is-integer/dist').isPrimitive,ar=require('@stdlib/assert-is-string/dist').isPrimitive,w=require('@stdlib/error-tools-fmtprodmsg/dist'),fr=c(),or=j(),vr=P(),hr=I(),qr=D(),gr=["bh","bonferroni","by","holm","hommel"];function dr(r,t,i){if(!nr(r))throw new TypeError(w('1Ll9x',r));if(!ar(t))throw new TypeError(w('1Ll39',t));if(arguments.length>2){if(!ur(i))throw new TypeError(w('1Ll2z',i));if(i<r.length)throw new RangeError(w('1LlDP',i))}switch(i=i||r.length,t){case"bonferroni":return fr(r,i);case"by":return qr(r,i);case"bh":return hr(r,i);case"holm":return vr(r,i);case"hommel":return or(r,i);default:throw new Error(w('1LlDQ',gr.join('", "'),t))}}H.exports=dr
});var lr=M();module.exports=lr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
