import{R as p,u as z,c as E,a as l,s as a,j as e,b as M,r as g,f as I}from"./index-01e3e484.js";function C(t=p){const n=t===p?z:E(t);return function(){const{store:i}=n();return i}}const P=C();function R(t=p){const n=t===p?P:C(t);return function(){return n().dispatch}}const T=R();var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=l.createContext&&l.createContext(b),s=globalThis&&globalThis.__assign||function(){return s=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s.apply(this,arguments)},_=globalThis&&globalThis.__rest||function(t,n){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(r[i[o]]=t[i[o]]);return r};function v(t){return t&&t.map(function(n,r){return l.createElement(n.tag,s({key:r},n.attr),v(n.child))})}function w(t){return function(n){return l.createElement(N,s({attr:s({},t.attr)},n),v(t.child))}}function N(t){var n=function(r){var i=t.attr,o=t.size,d=t.title,h=_(t,["attr","size","title"]),x=o||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),l.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,h,{className:c,style:s(s({color:t.color||r.color},r.style),t.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),d&&l.createElement("title",null,d),t.children)};return m!==void 0?l.createElement(m.Consumer,null,function(r){return n(r)}):n(b)}function A(t){return w({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(t)}function B(t){return w({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(t)}const D=a.div`
    display: flex;
    justify-content: space-between;
 `,H=a.div`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
 `,W=a.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`,f=a.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 4px;
`,G=a.button`
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: #3470FF;
   color: #FFFFFF;
   margin-top: 24px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
   background-color: #0B44CD;
}
`,Z=a.div`
   position: relative;
   margin-bottom: 14px;
   object-fit: cover;
   width: 274px;
   height: 268px;

`,$=a.img`
   border-radius: 13px;
   max-width: 100%;
   /* max-height: 100%; */
    height: 268px; 
   
`,q=a.h3`
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: #121417;

   span {
      color: blue;
    }
`,J=a(B)`
   position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   fill: rgba(255, 255, 255, 0.8);
`;a(A)`
   position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   fill: #3470FF;
`;const K=({advert:t,toggleModal:n})=>{const{id:r,year:i,make:o,model:d,type:h,img:x,description:c,fuelConsumption:et,engineSize:nt,accessories:rt,functionalities:j,rentalPrice:y,rentalCompany:F,address:L,mileage:k,rentalConditions:it}=t,u=L.split(" "),O=u[u.length-1],S=u[u.length-1-1];return e.jsxs(H,{children:[e.jsxs(Z,{children:[e.jsx($,{src:x}),e.jsx(J,{})]}),e.jsxs(D,{children:[e.jsx(W,{children:e.jsxs(q,{children:[o," ",e.jsx("span",{children:d}),", ",i]})}),e.jsx("p",{children:y})]}),e.jsxs("div",{children:[e.jsxs(f,{children:[e.jsxs("li",{children:[S," | "]}),e.jsxs("li",{children:[O," | "]}),e.jsxs("li",{children:[F,"  "]})]}),e.jsxs(f,{children:[e.jsx("li",{children:h}),e.jsxs("li",{children:[d," "]}),e.jsx("li",{children:k}),e.jsx("li",{children:j[0]})]}),e.jsx(G,{type:"button",onClick:n,children:"Learn more"})]})]})},Q=t=>t.advert.advert,U=a.ul`

display: flex;
flex-wrap: wrap;
column-gap: 20px;
row-gap: 30px;
padding : 20px;
`,V=()=>{const t=M(Q);return e.jsx(U,{children:t.length>0&&t.map(n=>e.jsx(K,{advert:n},n.id))})},X=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 5;
`,Y=a.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
  /* padding: 28px 20px; */
  overflow: hidden;

  @media screen and (max-width: 374px) {
    /* width: 90vw; */
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    /* width: 90vw; */
    /* max-width: 468px; */
    /* padding: 32px; */
  }

  @media screen and (min-width: 768px) {
    /* width: 468px; */
    margin: 0 auto;
    /* padding: 32px; */
  }
`,tt=({children:t})=>e.jsx(X,{children:e.jsx(Y,{children:t})});a.div`
width: 50px;
height: 50px;
background-color: #FFFFFF;
`;const at=()=>{const[t,n]=g.useState(!1),r=T();g.useEffect(()=>{r(I())},[]);const i=()=>{console.log("КЛІЛНУЛИ"),n(!t),t?document.body.style.overflow="hidden":document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:" CATALOG PAGE"}),e.jsx(V,{showModal:t,toggleModal:i}),t&&e.jsx(tt,{})]})};export{at as default};
