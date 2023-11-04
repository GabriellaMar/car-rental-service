import{R as w,a as Q,c as X,b as u,s as o,j as e,r as I,d as Y,u as ee,e as te,g as ne}from"./index-3d741ae8.js";function q(t=w){const n=t===w?Q:X(t);return function(){const{store:i}=n();return i}}const oe=q();function re(t=w){const n=t===w?oe:q(t);return function(){return n().dispatch}}const ie=re();var G={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N=u.createContext&&u.createContext(G),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},d.apply(this,arguments)},ae=globalThis&&globalThis.__rest||function(t,n){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(r[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(r[i[a]]=t[i[a]]);return r};function J(t){return t&&t.map(function(n,r){return u.createElement(n.tag,d({key:r},n.attr),J(n.child))})}function z(t){return function(n){return u.createElement(se,d({attr:d({},t.attr)},n),J(t.child))}}function se(t){var n=function(r){var i=t.attr,a=t.size,s=t.title,x=ae(t,["attr","size","title"]),m=a||r.size||"1em",l;return r.className&&(l=r.className),t.className&&(l=(l?l+" ":"")+t.className),u.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,x,{className:l,style:d(d({color:t.color||r.color},r.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&u.createElement("title",null,s),t.children)};return N!==void 0?u.createElement(N.Consumer,null,function(r){return n(r)}):n(G)}function le(t){return z({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(t)}function ce(t){return z({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(t)}const de=o.div`
    display: flex;
    justify-content: space-between;
 `,xe=o.div`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
 `,pe=o.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`,_=o.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
    margin-bottom: 4px;
`,p=o.li`
  color: var(--text-black);
 `,he=o.button`
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
`,ue=o.div`
   position: relative;
   margin-bottom: 14px;
   /* object-fit: cover; */
   width: 100%;
   /* width: 274px; */
   

`,ge=o.img`
display: block;
   border-radius: 13px;
   max-width: 274px;
   /* max-height: 100%; */
    height: 268px; 
   
`,me=o.h3`
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: var(--black)

   span {
      color:  var(--blue);
    }
`,fe=o.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;
`,be=o(ce)`
   display: block;
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--heart-white);
   
  
`,ve=o(le)`
  display: block;
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`;function Ce(t){return z({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(t)}const je=o.div`
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
`,we=o.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  max-width: 541px;
  max-height: 752px; 
  /* height: 90vh; */

  background-color: var(--white);
  border-radius: 24px;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
   padding: 40px; 
  overflow: hidden;
  overflow-y: scroll;


  @media screen and (max-width: 768px) {
    max-width: 441px;
 
  }

  @media screen and (min-width: 1440px) {
    max-width: 541px;
  max-height: 752px; 
    margin: 0 auto;
    /* padding: 32px; */
  }
`,ye=o(Ce)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`,ke=o.div`
  /* max-width: 541px;
  max-height: 752px;
  background-color: #FFFFFF; */
`,Le=o.img`
width: 100%;
margin-bottom: 14px;
    /* max-width: 461px;
    max-height: 248px; */

`,Fe=o.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`,W=o.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
    /* color: rgba(18, 20, 23, 0.5); */
 `,h=o.li`
    color: var(--text-black);
 `,H=o.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,Se=o.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,Z=o.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,b=o.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,Ie=o.button`
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
 `,$=o.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-black);
 `,ze=({data:t,country:n,city:r})=>{if(!t)return;const{id:i,year:a,make:s,model:x,type:m,img:l,description:D,fuelConsumption:M,engineSize:y,accessories:k,functionalities:L,rentalPrice:F,rentalCompany:E,address:K,mileage:f,rentalConditions:S}=t,c=S.split(`
`),v=parseInt(c[0].match(/\d+/));return e.jsxs(ke,{children:[e.jsx(Le,{src:l,alt:s}),e.jsxs(Fe,{children:[s," ",e.jsx("span",{children:x}),", ",a," "]}),e.jsxs(W,{children:[e.jsxs(h,{children:[r," | "]}),e.jsxs(h,{children:[n," | "]}),e.jsxs(h,{children:["id: ",i," | "]}),e.jsxs(h,{children:[a," |"]}),e.jsxs(h,{children:["Type: ",m,"  "]})]}),e.jsxs(W,{children:[e.jsxs(h,{children:["Fuel Consumption: ",M," |"]}),e.jsxs(h,{children:["Engine Size: ",y," "]})]}),e.jsx(Se,{children:D}),e.jsx(H,{children:"Accessories and functionalities:"}),e.jsx($,{children:k.join(" | ")}),e.jsx($,{children:L.join(" | ")}),e.jsx(H,{children:"Rental Conditions: "}),e.jsxs(Z,{children:[e.jsxs(b,{children:["Minimum age : ",e.jsx("span",{children:v})]}),e.jsx(b,{children:c[1]})]}),e.jsxs(Z,{children:[e.jsxs(b,{children:[c[2]," "]}),e.jsxs(b,{children:["Mileage: ",e.jsx("span",{children:f})]}),e.jsxs(b,{children:["Price: ",e.jsx("span",{children:F})]})]}),e.jsx(Ie,{type:"button",children:"Rental car"})]})},De=document.querySelector("#modal-root"),Me=({closeModal:t,data:n,country:r,city:i})=>{const a=s=>{s.currentTarget===s.target&&t()};return I.useEffect(()=>{const s=x=>{x.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[t]),Y.createPortal(e.jsx(je,{onClick:a,children:e.jsxs(we,{children:[e.jsx(ye,{onClick:t}),e.jsx(ze,{data:n,country:r,city:i})]})}),De)},Oe=({advert:t})=>{const{id:n,year:r,make:i,model:a,type:s,img:x,description:m,fuelConsumption:l,engineSize:D,accessories:M,functionalities:y,rentalPrice:k,rentalCompany:L,address:F,mileage:E,rentalConditions:K}=t,[f,S]=I.useState(!1),c=ee(g=>g.favorite.favorite);console.log("FAVORITE",c),console.log("ІДЕНТИФІКАТОР КАРДКИ",n);const v=c.some(g=>g.id===t.id),[O,R]=I.useState(v);console.log("STATUS:",v);const T=ie(),C=F.split(" "),B=C[C.length-1],P=C[C.length-1-1],A=()=>{S(!f),f?document.body.style.overflow="hidden":document.body.style.overflow="auto"},U=()=>{console.log("ADDDDDD!!!"),T(te(t)),R(!0)},V=()=>{console.log(n),console.log("Delete!!!");const g=c.findIndex(j=>j.id===n);if(g!==-1){const j=[...c];j.splice(g,1),localStorage.setItem("favorite",JSON.stringify(j)),T(ne(n))}R(!1)};return e.jsxs(xe,{children:[e.jsxs(ue,{children:[e.jsx(ge,{src:x,alt:i}),e.jsx(fe,{onClick:O?V:U,type:"button",children:O?e.jsx(ve,{}):e.jsx(be,{})})]}),e.jsxs(de,{children:[e.jsx(pe,{children:e.jsxs(me,{children:[i," ",e.jsx("span",{children:a}),", ",r]})}),e.jsx("p",{children:k})]}),e.jsxs("div",{children:[e.jsxs(_,{children:[e.jsxs(p,{children:[P," | "]}),e.jsxs(p,{children:[B," | "]}),e.jsxs(p,{children:[L,"  "]})]}),e.jsxs(_,{children:[e.jsx(p,{children:s}),e.jsxs(p,{children:[a," "]}),e.jsx(p,{children:E}),e.jsx(p,{children:y[0]})]}),e.jsx(he,{type:"button",onClick:A,children:"Learn more"}),f&&e.jsx(Me,{closeModal:A,data:t,country:B,city:P})]})]})},Re=o.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
`;export{Re as A,Oe as C,ie as u};
