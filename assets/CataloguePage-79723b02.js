import{R as m,u as T,c as D,a as d,s as i,j as e,r as C,b as _,d as N,f as W,C as H}from"./index-b9f5ba15.js";function z(t=m){const r=t===m?T:D(t);return function(){const{store:o}=r();return o}}const K=z();function A(t=m){const r=t===m?K:z(t);return function(){return r().dispatch}}const U=A();var M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=d.createContext&&d.createContext(M),s=globalThis&&globalThis.__assign||function(){return s=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},s.apply(this,arguments)},V=globalThis&&globalThis.__rest||function(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};function S(t){return t&&t.map(function(r,n){return d.createElement(r.tag,s({key:n},r.attr),S(r.child))})}function v(t){return function(r){return d.createElement(Z,s({attr:s({},t.attr)},r),S(t.child))}}function Z(t){var r=function(n){var o=t.attr,a=t.size,h=t.title,f=V(t,["attr","size","title"]),u=a||n.size||"1em",x;return n.className&&(x=n.className),t.className&&(x=(x?x+" ":"")+t.className),d.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,f,{className:x,style:s(s({color:t.color||n.color},n.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),h&&d.createElement("title",null,h),t.children)};return b!==void 0?d.createElement(b.Consumer,null,function(n){return r(n)}):r(M)}function $(t){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(t)}function q(t){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(t)}const G=i.div`
    display: flex;
    justify-content: space-between;
 `,Y=i.div`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
 `,J=i.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`,j=i.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
    margin-bottom: 4px;
`,l=i.li`
  color: var(--text-black);
 `,Q=i.button`
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: #FFFFFF;
   margin-top: 24px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`,X=i.div`
   position: relative;
   margin-bottom: 14px;
   object-fit: cover;
   width: 274px;
   height: 268px;

`,ee=i.img`
   border-radius: 13px;
   max-width: 100%;
   /* max-height: 100%; */
    height: 268px; 
   
`,te=i.h3`
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: var(--black)

   span {
      color:  var(--blue);
    }
`,ne=i(q)`
   position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   fill: var(--heart-white);
`;i($)`
   position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   fill: var(--blue);
`;const re=({advert:t,openModal:r})=>{const{id:n,year:o,make:a,model:h,type:f,img:u,description:x,fuelConsumption:ve,engineSize:be,accessories:je,functionalities:E,rentalPrice:F,rentalCompany:I,address:R,mileage:B,rentalConditions:we}=t,g=R.split(" "),O=g[g.length-1],P=g[g.length-1-1];return e.jsxs(Y,{children:[e.jsxs(X,{children:[e.jsx(ee,{src:u}),e.jsx(ne,{})]}),e.jsxs(G,{children:[e.jsx(J,{children:e.jsxs(te,{children:[a," ",e.jsx("span",{children:h}),", ",o]})}),e.jsx("p",{children:F})]}),e.jsxs("div",{children:[e.jsxs(j,{children:[e.jsxs(l,{children:[P," | "]}),e.jsxs(l,{children:[O," | "]}),e.jsxs(l,{children:[I,"  "]})]}),e.jsxs(j,{children:[e.jsx(l,{children:f}),e.jsxs(l,{children:[h," "]}),e.jsx(l,{children:B}),e.jsx(l,{children:E[0]})]}),e.jsx(Q,{type:"button",onClick:r,children:"Learn more"})]})]})},ie=t=>t.advert.advert,oe=i.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
`;function ae(t){return v({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(t)}const se=i.div`
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
`,le=i.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  max-width: 541px;
 max-height: 752px;
  background-color: var(--white);
  border-radius: 24px;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
   padding: 40px; 
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
`,ce=i(ae)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`,de=i.div`
  /* max-width: 541px;
  max-height: 752px;
  background-color: #FFFFFF; */
`,xe=i.img`
    max-width: 461px;
    max-height: 248px;

`,he=i.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);

   span {
      color: var(--blue);
    }
`,w=i.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
    /* color: rgba(18, 20, 23, 0.5); */
 `,c=i.li`
    color: var(--text-black);
 `,y=i.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,pe=i.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,k=i.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,p=i.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,ue=i.button`
    padding: 12px 50px;
    background-color: var(--blue);
    color: var(--white);
    border-color: transparent;
    border-radius: 12px;
    margin-top: 16px;

    &:hover,
    &:focus {
    background-color: var(--hover-blue);
}
 `,L=i.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
 `,ge=()=>e.jsxs(de,{children:[e.jsx(xe,{}),e.jsxs(he,{children:["KUBIK ",e.jsx("span",{children:"Kubik"}),", 2008 "]}),e.jsxs(w,{children:[e.jsx(c,{children:"Kiev | "}),e.jsx(c,{children:"Ukraine | "}),e.jsx(c,{children:"id: 9582 | "}),e.jsx(c,{children:"Year: 2008 |"}),e.jsx(c,{children:"Type: SUV  "})]}),e.jsxs(w,{children:[e.jsx(c,{children:"Fuel Consumption: 10.5 |"}),e.jsx(c,{children:"Engine Size: 3.6L V6 "})]}),e.jsx(pe,{children:"The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features."}),e.jsx(y,{children:"Accessories and functionalities:"}),e.jsx(L,{children:"Leather seats  | Panoramic sunroof | Power liftgate"}),e.jsx(L,{children:"Premium audio system | Remote start |  Blind-spot monitoring"}),e.jsx(y,{children:"Rental Conditions: "}),e.jsxs(k,{children:[e.jsxs(p,{children:["Minimum age : ",e.jsx("span",{children:"25"})]}),e.jsx(p,{children:"Valid driver’s license"})]}),e.jsxs(k,{children:[e.jsx(p,{children:"Security deposite required "}),e.jsxs(p,{children:["Mileage: ",e.jsx("span",{children:"5,858"})]}),e.jsxs(p,{children:["Price: ",e.jsx("span",{children:"40$"})]})]}),e.jsx(ue,{type:"button",children:"Rental car"})]}),me=document.querySelector("#modal-root"),fe=({closeModal:t})=>{const r=n=>{n.currentTarget===n.target&&t()};return C.useEffect(()=>{const n=o=>{o.key==="Escape"&&t()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[t]),_.createPortal(e.jsx(se,{onClick:r,children:e.jsxs(le,{children:[e.jsx(ce,{onClick:t}),e.jsx(ge,{})]})}),me)},Ce=()=>{const t=N(ie),[r,n]=C.useState(!1),o=()=>{n(!r),r?document.body.style.overflow="hidden":document.body.style.overflow="auto"};return e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:t.length>0&&t.map(a=>e.jsx(re,{advert:a,openModal:o},a.id))}),r&&e.jsx(fe,{closeModal:o})]})},ke=()=>{const t=U();return C.useEffect(()=>{t(W())},[]),e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsx(Ce,{})})})};export{ke as default};
