"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=d(function(I,l){
var E=require('@stdlib/strided-base-reinterpret-boolean/dist');function h(r,e,t,i,s,a,v,o){var x,u,n,f,c,q;if(r<=0)return a;for(x=E(a,0),u=!1,n=e,f=s,c=o,q=0;q<r;q++)!u&&t[f]&&(n-=1,n<=0&&(u=!0)),x[c]=u,f+=i,c+=v;return a}l.exports=h
});var R=d(function(J,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),k=m();function w(r,e,t,i,s,a){var v=y(r,i),o=y(r,a);return k(r,e,t,i,v,s,a,o)}j.exports=w
});var g=d(function(K,b){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),A=m();z(_,"ndarray",A);b.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),p,B=D(C(__dirname,"./native.js"));F(B)?p=G:p=B;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
