"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var m=d(function(I,l){
var E=require('@stdlib/strided-base-reinterpret-boolean/dist');function h(e,r,i,u,s,a,v,o){var x,t,n,f,c,q;if(e<=0)return a;for(x=E(a,0),t=!1,n=r,f=s,c=o,q=0;q<e;q++)!t&&i[f]&&(n-=1,n<=0&&(t=!0)),x[c]=t,f+=u,c+=v;return a}l.exports=h
});var R=d(function(J,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),k=m();function w(e,r,i,u,s,a){var v=y(e,u),o=y(e,a);return k(e,r,i,u,v,s,a,o)}j.exports=w
});var g=d(function(K,b){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),A=m();z(_,"ndarray",A);b.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),p,B=D(C(__dirname,"./native.js"));F(B)?p=G:p=B;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
