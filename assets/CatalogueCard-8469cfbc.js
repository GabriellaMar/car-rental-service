import{G as y,s as t,j as e,r as E,c as W,u as A,d as P,a as Z,e as G,f as H}from"./index-e549480f.js";function q(o){return y({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(o)}function K(o){return y({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(o)}const J=t.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
 `,N=t.li`
    max-height: 426px;
    /* margin: 0 auto; */
 `,D=t.ul`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    /* gap: 4px; */
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
`,s=t.li`

  color: var(--text-black);
  /* color: rgba(229, 225, 225, 0.5); */
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
  padding-left: 3px;

 `,O=t.button`
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: rgba(243, 240, 240, 0.996);
   margin-top: 24px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
   width: 274px;
  
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`,Q=t.div`
   position: relative;
   margin-bottom: 14px;
   width: 274px;
   
`,U=t.img`
   display: block;
   border-radius: 13px;
   width: 100%;
   object-fit: cover;
   height: 268px; 
   
`,V=t.h3`
   font-family: 'Manrope', sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: rgb(18, 20, 23);
   /* color: rgba(243, 240, 240, 0.996); */
  

   span {
      color:  var(--blue);
    }
`,X=t.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;

`,Y=t(K)`
   display: block;
   width: 18px;
   height: 18px;
   color: var(--heart-white);

   &:hover,
   &:focus{
   color: var(--blue);
  }
   
  
`,_=t(q)`
  display: block;
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`,$=t.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
`;function ee(o){return y({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(o)}const te=t.div`
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
`,oe=t.div`
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
`,ne=t(ee)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`,re=t.a`
display: inline-block;
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
`,ie=()=>e.jsx(re,{href:"tel:+380730000000",children:"Rental car"}),se=t.div`
`,ae=t.img`
width: 100%;
margin-bottom: 14px;
`,le=t.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`,I=t.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
 `,a=t.li`
    color: var(--text-black);
 `,z=t.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,ce=t.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,B=t.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,h=t.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,S=t.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-black);
 `,de=({data:o,country:l,city:d})=>{if(!o)return;const{id:c,year:i,make:n,model:p,type:f,img:b,description:j,fuelConsumption:C,engineSize:v,accessories:x,functionalities:w,rentalPrice:k,mileage:g,rentalConditions:u}=o,r=u.split(`
`),m=parseInt(r[0].match(/\d+/));return e.jsxs(se,{children:[e.jsx(ae,{src:b,alt:n}),e.jsxs(le,{children:[n," ",e.jsx("span",{children:p}),", ",i," "]}),e.jsxs(I,{children:[e.jsxs(a,{children:[d,"  "]}),e.jsxs(a,{children:[l,"  "]}),e.jsxs(a,{children:["id: ",c,"  "]}),e.jsxs(a,{children:[i," "]}),e.jsxs(a,{children:["Type: ",f,"  "]})]}),e.jsxs(I,{children:[e.jsxs(a,{children:["Fuel Consumption: ",C," "]}),e.jsxs(a,{children:["Engine Size: ",v," "]})]}),e.jsx(ce,{children:j}),e.jsx(z,{children:"Accessories and functionalities:"}),e.jsx(S,{children:x.join(" | ")}),e.jsx(S,{children:w.join(" | ")}),e.jsx(z,{children:"Rental Conditions: "}),e.jsxs(B,{children:[e.jsxs(h,{children:["Minimum age : ",e.jsx("span",{children:m})]}),e.jsx(h,{children:r[1]})]}),e.jsxs(B,{children:[e.jsxs(h,{children:[r[2]," "]}),e.jsxs(h,{children:["Mileage: ",e.jsx("span",{children:g})]}),e.jsxs(h,{children:["Price: ",e.jsx("span",{children:k})]})]}),e.jsx(ie,{})]})},pe=document.querySelector("#modal-root"),xe=({closeModal:o,data:l,country:d,city:c})=>{const i=n=>{n.currentTarget===n.target&&o()};return E.useEffect(()=>{const n=p=>{p.key==="Escape"&&o()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[o]),W.createPortal(e.jsx(te,{onClick:i,children:e.jsxs(oe,{children:[e.jsx(ne,{onClick:o}),e.jsx(de,{data:l,country:d,city:c})]})}),pe)},ge=({advert:o})=>{const{id:l,year:d,make:c,model:i,type:n,img:p,functionalities:f,rentalPrice:b,rentalCompany:j,address:C,mileage:v}=o,[x,w]=E.useState(!1),g=A(P).some(T=>T.id===o.id),u=Z(),r=C.split(" "),m=r[r.length-1],L=r[r.length-1-1],M=()=>{w(!x),x?document.body.style.overflow="hidden":document.body.style.overflow="auto"},F=()=>{console.log("ADDDDDD!!!"),u(G(o))},R=()=>{console.log(l),console.log("Delete!!!"),u(H(l))};return e.jsxs(N,{children:[e.jsxs(Q,{children:[e.jsx(U,{src:p,alt:c}),e.jsx(X,{onClick:g?R:F,type:"button",children:g?e.jsx(_,{}):e.jsx(Y,{})})]}),e.jsxs(J,{children:[e.jsxs(V,{children:[c," ",e.jsx("span",{children:i}),", ",d]}),e.jsx("p",{children:b})]}),e.jsxs($,{children:[e.jsxs(D,{children:[e.jsxs(s,{children:[L," "]}),e.jsxs(s,{children:[m," "]}),e.jsxs(s,{children:[j,"  "]}),e.jsx(s,{children:n})]}),e.jsxs(D,{children:[e.jsxs(s,{children:[i," "]}),e.jsx(s,{children:v}),e.jsx(s,{children:f[0]})]})]}),e.jsx(O,{type:"button",onClick:M,children:"Learn more"}),x&&e.jsx(xe,{closeModal:M,data:o,country:m,city:L})]})};export{ge as C};
