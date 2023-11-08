import{R as g,b as $,c as q,j as e,G as v,s as o,r as T,d as K,u as J,e as N,g as O}from"./index-3835ebe4.js";import{C as Q}from"./RentalCarBtn.styled-b5ac50a4.js";function W(t=g){const n=t===g?$:q(t);return function(){const{store:r}=n();return r}}const U=W();function V(t=g){const n=t===g?U:W(t);return function(){return n().dispatch}}const X=V(),Y=()=>e.jsx(Q,{href:"tel:+380730000000",children:"Rental car"}),Me=t=>t.advert.advert,_=t=>t.favorite.favorite;function ee(t){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(t)}function te(t){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(t)}const oe=o.div`
    display: flex;
    justify-content: space-between;
 `,ne=o.div`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
    /* box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25); */
 `,ie=o.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`,B=o.ul`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
    margin-bottom: 4px;
`,l=o.li`

  color: var(--text-black);
 color: rgba(229, 225, 225, 0.5);
 `,re=o.button`
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: rgba(243, 240, 240, 0.996);
   margin-top: 24px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`,se=o.div`
   position: relative;
   margin-bottom: 14px;
   width: 100%;
`,ae=o.img`
   display: block;
   border-radius: 13px;
   max-width: 274px;
   height: 268px; 
   
`,ce=o.h3`
   font-family: 'Manrope', sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: rgba(243, 240, 240, 0.996);
  

   span {
      color:  var(--blue);
    }
`,le=o.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;

`,de=o(te)`
   display: block;
   width: 18px;
   height: 18px;
   color: var(--heart-white);

   &:hover,
   &:focus{
   color: var(--blue);
  }
   
  
`,xe=o(ee)`
  display: block;
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`;function pe(t){return v({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(t)}const he=o.div`
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
`,ge=o.div`
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
`,ue=o(pe)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`,me=o.div`
`,fe=o.img`
width: 100%;
margin-bottom: 14px;
`,Ce=o.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`,E=o.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
 `,d=o.li`
    color: var(--text-black);
 `,F=o.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,je=o.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,A=o.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,p=o.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,H=o.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-black);
 `,be=({data:t,country:n,city:s})=>{if(!t)return;const{id:r,year:a,make:i,model:x,type:w,img:y,description:k,fuelConsumption:L,engineSize:u,accessories:m,functionalities:f,rentalPrice:C,mileage:j,rentalConditions:M}=t,c=M.split(`
`),b=parseInt(c[0].match(/\d+/));return e.jsxs(me,{children:[e.jsx(fe,{src:y,alt:i}),e.jsxs(Ce,{children:[i," ",e.jsx("span",{children:x}),", ",a," "]}),e.jsxs(E,{children:[e.jsxs(d,{children:[s," | "]}),e.jsxs(d,{children:[n," | "]}),e.jsxs(d,{children:["id: ",r," | "]}),e.jsxs(d,{children:[a," |"]}),e.jsxs(d,{children:["Type: ",w,"  "]})]}),e.jsxs(E,{children:[e.jsxs(d,{children:["Fuel Consumption: ",L," |"]}),e.jsxs(d,{children:["Engine Size: ",u," "]})]}),e.jsx(je,{children:k}),e.jsx(F,{children:"Accessories and functionalities:"}),e.jsx(H,{children:m.join(" | ")}),e.jsx(H,{children:f.join(" | ")}),e.jsx(F,{children:"Rental Conditions: "}),e.jsxs(A,{children:[e.jsxs(p,{children:["Minimum age : ",e.jsx("span",{children:b})]}),e.jsx(p,{children:c[1]})]}),e.jsxs(A,{children:[e.jsxs(p,{children:[c[2]," "]}),e.jsxs(p,{children:["Mileage: ",e.jsx("span",{children:j})]}),e.jsxs(p,{children:["Price: ",e.jsx("span",{children:C})]})]}),e.jsx(Y,{})]})},ve=document.querySelector("#modal-root"),we=({closeModal:t,data:n,country:s,city:r})=>{const a=i=>{i.currentTarget===i.target&&t()};return T.useEffect(()=>{const i=x=>{x.key==="Escape"&&t()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[t]),K.createPortal(e.jsx(he,{onClick:a,children:e.jsxs(ge,{children:[e.jsx(ue,{onClick:t}),e.jsx(be,{data:n,country:s,city:r})]})}),ve)},De=({advert:t})=>{const{id:n,year:s,make:r,model:a,type:i,img:x,description:w,fuelConsumption:y,engineSize:k,accessories:L,functionalities:u,rentalPrice:m,rentalCompany:f,address:C,mileage:j,rentalConditions:M}=t,[c,b]=T.useState(!1),D=J(_).some(G=>G.id===t.id),S=X(),h=C.split(" "),z=h[h.length-1],I=h[h.length-1-1],R=()=>{b(!c),c?document.body.style.overflow="hidden":document.body.style.overflow="auto"},P=()=>{console.log("ADDDDDD!!!"),S(N(t))},Z=()=>{console.log(n),console.log("Delete!!!"),S(O(n))};return e.jsxs(ne,{children:[e.jsxs(se,{children:[e.jsx(ae,{src:x,alt:r}),e.jsx(le,{onClick:D?Z:P,type:"button",children:D?e.jsx(xe,{}):e.jsx(de,{})})]}),e.jsxs(oe,{children:[e.jsx(ie,{children:e.jsxs(ce,{children:[r," ",e.jsx("span",{children:a}),", ",s]})}),e.jsx("p",{children:m})]}),e.jsxs("div",{children:[e.jsxs(B,{children:[e.jsxs(l,{children:[I," | "]}),e.jsxs(l,{children:[z," | "]}),e.jsxs(l,{children:[f,"  "]})]}),e.jsxs(B,{children:[e.jsx(l,{children:i}),e.jsxs(l,{children:[a," "]}),e.jsx(l,{children:j}),e.jsx(l,{children:u[0]})]}),e.jsx(re,{type:"button",onClick:R,children:"Learn more"}),c&&e.jsx(we,{closeModal:R,data:t,country:z,city:I})]})]})};export{De as C,Me as s,X as u};
