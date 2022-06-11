import"./5c0ecc77.js";import{r as u,j as n,a as t,F as f}from"./index.78c62200.js";import"./459a0640.js";import"./a4b1cbe7.js";import{d as p}from"./d658131c.js";import"./2b4d78e9.js";import"./559c173a.js";import"./2e9b5744.js";import"./c6a79924.js";import"./b6229e35.js";import"./822fbd9b.js";function E({addresses:e,defaultAddress:l}){const{serverProps:d,setServerProps:s}=p(),{fullDefaultAddress:i,addressesWithoutDefault:c}=u.exports.useMemo(()=>{const r=e.findIndex(a=>a.id===l);return{addressesWithoutDefault:[...e.slice(0,r),...e.slice(r+1,e.length)],fullDefaultAddress:e[r]}},[e,l]);async function o(r){const a=await h(r);a.error?alert(a.error):s("rerender",!d.rerender)}return n("div",{className:"mt-6",children:[t("h2",{className:"text-2xl",children:"Address Book"}),e!=null&&e.length?null:t("p",{className:"mt-2 text-sm text-gray-500",children:"No address yet"}),t("div",{className:"flex items-center justify-between mt-2",children:t("button",{onClick:()=>s("editingAddress","NEW"),className:"text-center border border-gray-900 uppercase py-3 px-4 focus:shadow-outline block w-full",children:"Add an address"})}),e!=null&&e.length?n(f,{children:[i?t(m,{address:i,defaultAddress:!0,deleteAddress:o.bind(null,i.originalId)}):null,c.map(r=>t(m,{address:r,deleteAddress:o.bind(null,r.originalId)},r.id))]}):null]})}function m({address:e,defaultAddress:l,deleteAddress:d}){const{setServerProps:s}=p(),[i,c]=u.exports.useState(!1);return n("div",{className:"bg-white p-4 mt-4",children:[i?t(x,{deleteAddress:d,close:()=>c(!1)}):null,l?t("p",{className:"mb-2 text-sm text-gray-500 font-medium",children:"Default Delivery Address"}):null,e.formatted.map((o,r)=>t("div",{className:"pt-1",children:o},o+r)),n("div",{className:"flex font-medium mt-4",children:[t("button",{onClick:()=>s("editingAddress",e.id),className:"text-left flex-1 underline",children:"Edit"}),t("button",{onClick:()=>c(!0),className:"text-left text-gray-500",children:"Remove"})]})]})}function h(e){return fetch(`/account/address/${encodeURIComponent(e)}`,{method:"DELETE",headers:{Accept:"application/json"}}).then(l=>l.ok?{}:l.json()).catch(()=>({error:"Error removing address. Please try again."}))}function x({close:e,deleteAddress:l}){return n(f,{children:[t("div",{className:"fixed w-full h-full bg-white opacity-95 z-50 top-0 left-0"}),t("div",{className:"fixed w-full h-full z-50 top-0 left-0",children:t("div",{className:"flex justify-center mt-64 items-center",children:n("div",{className:"bg-gray-50 max-w-md w-full p-4",children:[t("div",{className:"text-xl",children:"Confirm removal"}),t("div",{children:"Are you sure you wish to remove this address?"}),t("div",{className:"mt-6",children:t("button",{onClick:()=>{e(),l()},className:"bg-gray-900 border border-gray-900 text-white uppercase py-3 px-4 focus:shadow-outline block w-full",children:"Confirm"})}),t("div",{children:t("button",{onClick:e,className:"mt-3 text-center border border-gray-900 uppercase py-3 px-4 focus:shadow-outline block w-full",children:"Cancel"})})]})})})]})}export{E as default};
//# sourceMappingURL=b033f074.js.map
