var h=Object.defineProperty,F=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var $=(t,n,e)=>n in t?h(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,I=(t,n)=>{for(var e in n||(n={}))L.call(n,e)&&$(t,e,n[e]);if(m)for(var e of m(n))U.call(n,e)&&$(t,e,n[e]);return t},l=(t,n)=>F(t,b(n));import{R as p,r as d}from"./index.78c62200.js";import{u as Z}from"./81216b71.js";import"./d658131c.js";function A(t){return(t.edges||[]).map(n=>{if(!(n!=null&&n.node))throw new Error("Connection edges must contain nodes");return n.node})}const V=t=>`
mutation CartLineAdd($cartId: ID!, $lines: [CartLineInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,v=t=>`
mutation CartCreate($input: CartInput!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartCreate(input: $input) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,q=t=>`
mutation CartLineRemove($cartId: ID!, $lines: [ID!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesRemove(cartId: $cartId, lineIds: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,T=t=>`
mutation CartLineUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,R=t=>`
mutation CartNoteUpdate($cartId: ID!, $note: String, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,j=t=>`
mutation CartBuyerIdentityUpdate(
  $cartId: ID!
  $buyerIdentity: CartBuyerIdentityInput!
  $numCartLines: Int = 250
  $country: CountryCode = ZZ
) @inContext(country: $country) {
  cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,w=t=>`
mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,B=t=>`
mutation CartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!], $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      ...CartFragment
    }
  }
}

${t}
`,O=t=>`
query CartQuery($id: ID!, $numCartLines: Int = 250, $country: CountryCode = ZZ) @inContext(country: $country) {
  cart(id: $id) {
    ...CartFragment
  }
}

${t}
`,D=`
fragment CartFragment on Cart {
  id
  checkoutUrl
  totalQuantity
  buyerIdentity {
    countryCode
    customer {
      id
      email
      firstName
      lastName
      displayName
    }
    email
    phone
  }
  lines(first: $numCartLines) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          compareAtAmount {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            availableForSale
            compareAtPriceV2 {
              ...MoneyFragment
            }
            priceV2 {
              ...MoneyFragment
            }
            requiresShipping
            title
            image {
              ...ImageFragment
            }
            product {
              handle
              title
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
  estimatedCost {
    subtotalAmount {
      ...MoneyFragment
    }
    totalAmount {
      ...MoneyFragment
    }
    totalDutyAmount {
      ...MoneyFragment
    }
    totalTaxAmount {
      ...MoneyFragment
    }
  }
  note
  attributes {
    key
    value
  }
  discountCodes {
    code
  }
}

fragment MoneyFragment on MoneyV2 {
  currencyCode
  amount
}
fragment ImageFragment on Image {
  id
  url
  altText
  width
  height
}
`;function S(){const{storeDomain:t,storefrontApiVersion:n,storefrontToken:e}=Z();return p.useCallback(({query:a,variables:i})=>fetch(`https://${t}/api/${n}/graphql.json`,{method:"POST",headers:{"Content-Type":"application/json","X-SDK-Variant":"hydrogen","X-SDK-Version":n,"X-Shopify-Storefront-Access-Token":e},body:JSON.stringify({query:a.toString(),variables:i})}).then(r=>r.json()).catch(r=>({data:void 0,error:r.toString()})),[t,n,e])}function P(){const[t,n]=d.exports.useState(),[e,a]=d.exports.useState(),[i,r]=d.exports.useState(),C=S(),g=p.useCallback(async f=>{var c,s;const{data:o,error:y}=await C({query:v(D),variables:{input:f}});if(y&&(r(y),n(void 0),a(void 0)),!((c=o==null?void 0:o.cartCreate)===null||c===void 0)&&c.cart){const u=o.cartCreate.cart;n(l(I({},u),{lines:A(u.lines),note:(s=u.note)!==null&&s!==void 0?s:void 0})),a(u.checkoutUrl)}},[C]);return{cart:t,checkoutUrl:e,error:i,createInstantCheckout:g}}export{O as C,v as a,V as b,q as c,T as d,R as e,A as f,j as g,w as h,B as i,D as j,P as k,S as u};
//# sourceMappingURL=a79d38ee.js.map
