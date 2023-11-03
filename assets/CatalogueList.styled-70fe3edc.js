import{R as v,b as J,c as Q,d as p,e as n,j as t,r as A,g as U,u as V,s as X,h as Y,i as tt}from"./index-4ba9a1e3.js";function W(e=v){const r=e===v?J:Q(e);return function(){const{store:i}=r();return i}}const et=W();function nt(e=v){const r=e===v?et:W(e);return function(){return r().dispatch}}const rt=nt();var H={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},O=p.createContext&&p.createContext(H),c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(e){for(var r,o=1,i=arguments.length;o<i;o++){r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)},ot=globalThis&&globalThis.__rest||function(e,r){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)r.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(o[i[a]]=e[i[a]]);return o};function Z(e){return e&&e.map(function(r,o){return p.createElement(r.tag,c({key:o},r.attr),Z(r.child))})}function z(e){return function(r){return p.createElement(it,c({attr:c({},e.attr)},r),Z(e.child))}}function it(e){var r=function(o){var i=e.attr,a=e.size,s=e.title,d=ot(e,["attr","size","title"]),u=a||o.size||"1em",l;return o.className&&(l=o.className),e.className&&(l=(l?l+" ":"")+e.className),p.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,i,d,{className:l,style:c(c({color:e.color||o.color},o.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&p.createElement("title",null,s),e.children)};return O!==void 0?p.createElement(O.Consumer,null,function(o){return r(o)}):r(H)}function at(e){return z({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(e)}function st(e){return z({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(e)}const lt=n.div`
    display: flex;
    justify-content: space-between;
 `,ct=n.div`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
 `,dt=n.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`,T=n.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
    margin-bottom: 4px;
`,x=n.li`
  color: var(--text-black);
 `,xt=n.button`
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
`,ht=n.div`
   position: relative;
   margin-bottom: 14px;
   /* object-fit: cover; */
   width: 100%;
   /* width: 274px; */
   

`,pt=n.img`
display: block;
   border-radius: 13px;
   max-width: 274px;
   /* max-height: 100%; */
    height: 268px; 
   
`,ut=n.h3`
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: var(--black)

   span {
      color:  var(--blue);
    }
`,gt=n.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;
`,mt=n(st)`
   display: block;
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--heart-white);
   
  
`,ft=n(at)`
  display: block;
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`;function bt(e){return z({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(e)}const Ct=n.div`
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
`,vt=n.div`
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
`,jt=n(bt)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`,wt=n.div`
  /* max-width: 541px;
  max-height: 752px;
  background-color: #FFFFFF; */
`,yt=n.img`
width: 100%;
margin-bottom: 14px;
    /* max-width: 461px;
    max-height: 248px; */

`,kt=n.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`,B=n.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
    /* color: rgba(18, 20, 23, 0.5); */
 `,h=n.li`
    color: var(--text-black);
 `,P=n.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,Lt=n.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,_=n.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,m=n.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,zt=n.button`
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
 `,N=n.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-black);
 `,Ft=({data:e,country:r,city:o})=>{if(!e)return;const{id:i,year:a,make:s,model:d,type:u,img:l,description:F,fuelConsumption:D,engineSize:j,accessories:w,functionalities:y,rentalPrice:k,rentalCompany:M,address:$,mileage:g,rentalConditions:L}=e,f=L.split(`
`),b=parseInt(f[0].match(/\d+/));return t.jsxs(wt,{children:[t.jsx(yt,{src:l,alt:s}),t.jsxs(kt,{children:[s," ",t.jsx("span",{children:d}),", ",a," "]}),t.jsxs(B,{children:[t.jsxs(h,{children:[o," | "]}),t.jsxs(h,{children:[r," | "]}),t.jsxs(h,{children:["id: ",i," | "]}),t.jsxs(h,{children:[a," |"]}),t.jsxs(h,{children:["Type: ",u,"  "]})]}),t.jsxs(B,{children:[t.jsxs(h,{children:["Fuel Consumption: ",D," |"]}),t.jsxs(h,{children:["Engine Size: ",j," "]})]}),t.jsx(Lt,{children:F}),t.jsx(P,{children:"Accessories and functionalities:"}),t.jsx(N,{children:w.join(" | ")}),t.jsx(N,{children:y.join(" | ")}),t.jsx(P,{children:"Rental Conditions: "}),t.jsxs(_,{children:[t.jsxs(m,{children:["Minimum age : ",t.jsx("span",{children:b})]}),t.jsx(m,{children:f[1]})]}),t.jsxs(_,{children:[t.jsxs(m,{children:[f[2]," "]}),t.jsxs(m,{children:["Mileage: ",t.jsx("span",{children:g})]}),t.jsxs(m,{children:["Price: ",t.jsx("span",{children:k})]})]}),t.jsx(zt,{type:"button",children:"Rental car"})]})},Dt=document.querySelector("#modal-root"),Mt=({closeModal:e,data:r,country:o,city:i})=>{const a=s=>{s.currentTarget===s.target&&e()};return A.useEffect(()=>{const s=d=>{d.key==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]),U.createPortal(t.jsx(Ct,{onClick:a,children:t.jsxs(vt,{children:[t.jsx(jt,{onClick:e}),t.jsx(Ft,{data:r,country:o,city:i})]})}),Dt)},It=({advert:e})=>{const{id:r,year:o,make:i,model:a,type:s,img:d,description:u,fuelConsumption:l,engineSize:F,accessories:D,functionalities:j,rentalPrice:w,rentalCompany:y,address:k,mileage:M,rentalConditions:$}=e,[g,L]=A.useState(!1),b=V(X).includes(r),S=rt(),C=k.split(" "),I=C[C.length-1],E=C[C.length-1-1],R=()=>{L(!g),g?document.body.style.overflow="hidden":document.body.style.overflow="auto"},q=()=>{console.log("ADDDDDD!!!"),S(Y(e))},G=K=>{console.log("Delete!!!"),S(tt(K))};return t.jsxs(ct,{children:[t.jsxs(ht,{children:[t.jsx(pt,{src:d,alt:i}),t.jsx(gt,{onClick:b?G:q,type:"button",children:b?t.jsx(ft,{}):t.jsx(mt,{})})]}),t.jsxs(lt,{children:[t.jsx(dt,{children:t.jsxs(ut,{children:[i," ",t.jsx("span",{children:a}),", ",o]})}),t.jsx("p",{children:w})]}),t.jsxs("div",{children:[t.jsxs(T,{children:[t.jsxs(x,{children:[E," | "]}),t.jsxs(x,{children:[I," | "]}),t.jsxs(x,{children:[y,"  "]})]}),t.jsxs(T,{children:[t.jsx(x,{children:s}),t.jsxs(x,{children:[a," "]}),t.jsx(x,{children:M}),t.jsx(x,{children:j[0]})]}),t.jsx(xt,{type:"button",onClick:R,children:"Learn more"}),g&&t.jsx(Mt,{closeModal:R,data:e,country:I,city:E})]})]})},Et=n.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
`;export{Et as A,It as C,rt as u};
