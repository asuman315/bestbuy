var E=Object.defineProperty;var c=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&u(e,r,t[r]);return e};var s=(e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};import{R as f}from"./index.78c62200.js";import"./559c173a.js";import{u as C}from"./4daf791e.js";import"./a4b1cbe7.js";import"./d658131c.js";import"./81216b71.js";import"./822fbd9b.js";function S(U){var l=U,{data:e,as:t,withoutCurrency:r,withoutTrailingZeros:n,measurement:p,measurementSeparator:g="/"}=l,v=s(l,["data","as","withoutCurrency","withoutTrailingZeros","measurement","measurementSeparator"]);if(!R(e))throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");const o=C(e),y=t!=null?t:"div";let i=o.localizedString;return(r||n)&&(r&&!n?i=o.amount:!r&&n?i=o.withoutTrailingZeros:i=o.withoutTrailingZerosAndCurrency),f.createElement(y,m({},v),i,p&&p.referenceUnit&&f.createElement(f.Fragment,null,g,p.referenceUnit))}function R(e){return typeof e.amount=="string"&&!!e.amount&&typeof e.currencyCode=="string"&&!!e.currencyCode}export{S as Money};
//# sourceMappingURL=6670bf50.js.map