import{R as o,a as t,j as s}from"./index.78c62200.js";import"./5c0ecc77.js";import"./459a0640.js";import"./a4b1cbe7.js";import"./d658131c.js";import"./2b4d78e9.js";import"./559c173a.js";import"./2e9b5744.js";import"./c6a79924.js";import{u as g}from"./b6229e35.js";import"./822fbd9b.js";function q({id:i,activationToken:n}){const l=g(),[r,h]=o.useState(null),[d,f]=o.useState(""),[c,m]=o.useState(null),[w,b]=o.useState(""),[u,p]=o.useState(null);function v(e){m(null),p(null);let a=!1;return e.password.validity.valid||(a=!0,m(e.password.validity.valueMissing?"Please enter a password":"Passwords must be at least 6 characters")),e.passwordConfirm.validity.valid||(a=!0,p(e.password.validity.valueMissing?"Please re-enter a password":"Passwords must be at least 6 characters")),d!==w&&(a=!0,p("The two passwords entered did not match.")),a}async function x(e){if(e.preventDefault(),v(e.target))return;const a=await y({id:i,activationToken:n,password:d});if(a.error){h(a.error);return}l("/account")}return t("div",{className:"flex justify-center",children:s("div",{className:"max-w-md w-full",children:[t("h1",{className:"text-4xl",children:"Activate Account."}),t("p",{className:"mt-4",children:"Create your password to activate your account."}),s("form",{noValidate:!0,className:"pt-6 pb-8 mt-4 mb-4",onSubmit:x,children:[r&&t("div",{className:"flex items-center justify-center mb-6 bg-zinc-500",children:t("p",{className:"m-4 text-s text-white",children:r})}),s("div",{className:"mb-4",children:[t("input",{className:`mb-1 appearance-none border w-full py-2 px-3 text-gray-800 placeholder:text-gray-500 leading-tight focus:shadow-outline ${c?" border-red-500":"border-gray-900"}`,id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",value:d,minLength:8,required:!0,onChange:e=>{f(e.target.value)}}),s("p",{className:`text-red-500 text-xs ${c?"":"invisible"}`,children:[c," \xA0"]})]}),s("div",{className:"mb-4",children:[t("input",{className:`mb-1 appearance-none border w-full py-2 px-3 text-gray-800 placeholder:text-gray-500 leading-tight focus:shadow-outline ${u?" border-red-500":"border-gray-900"}`,id:"passwordConfirm",name:"passwordConfirm",type:"password",autoComplete:"current-password",placeholder:"Re-enter password","aria-label":"Re-enter password",value:w,required:!0,minLength:8,onChange:e=>{b(e.target.value)}}),s("p",{className:`text-red-500 text-xs ${u?"":"invisible"}`,children:[u," \xA0"]})]}),t("div",{className:"flex items-center justify-between",children:t("button",{className:"bg-gray-900 text-white uppercase py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Save"})})]})]})})}function y({id:i,activationToken:n,password:l}){return fetch("/account/activate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:i,activationToken:n,password:l})}).then(r=>r.ok?{}:r.json()).catch(r=>({error:r.toString()}))}export{q as default};
//# sourceMappingURL=a35395f9.js.map
