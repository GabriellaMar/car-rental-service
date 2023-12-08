import{G as S,s as t,R as W,j as e,r as E,c as A,u as P,d as G,a as H,e as Z,f as q}from"./index-f69e0c91.js";function K(o){return S({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(o)}function J(o){return S({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(o)}const N=t.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
 `,O=t.li`
    max-height: 426px;
    /* margin: 0 auto; */
 `,L=t.ul`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    align-items: center;
`,s=t.li`

  color: var(--text-color);
  /* color: rgba(229, 225, 225, 0.5); */
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
  padding-left: 3px;

 `,Q=t.button`
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
`,U=t.div`
   position: relative;
   margin-bottom: 14px;
   width: 274px;
   
`,V=t.img`
   display: block;
   border-radius: 13px;
   width: 100%;
   object-fit: cover;
   height: 268px; 
   
`,X=t.h3`
   font-family: 'Manrope', sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: rgb(18, 20, 23);

   span {
      color:  var(--blue);
    }
`,Y=t.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;

`,_=t(J)`
   display: block;
   width: 18px;
   height: 18px;
   color: var(--heart-white);

   &:hover,
   &:focus{
   color: var(--blue);
  }
   
  
`,$=t(K)`
  display: block;
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`,ee=t.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
`,te=t.div`
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
  background:  rgb(212, 212, 213) ;
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
`,ne=t(W)`
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
`,D=t.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
 `,a=t.li`
    color: var(--text-color);
 `,I=t.h3`
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
 `,z=t.ul`
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
 `,B=t.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-color);
 `,de=({data:o,country:l,city:d})=>{if(!o)return;const{id:c,year:i,make:n,model:x,type:f,img:b,description:j,fuelConsumption:C,engineSize:v,accessories:p,functionalities:w,rentalPrice:y,mileage:g,rentalConditions:m}=o,r=m.split(`
`),u=parseInt(r[0].match(/\d+/));return e.jsxs(se,{children:[e.jsx(ae,{src:b,alt:n}),e.jsxs(le,{children:[n," ",e.jsx("span",{children:x}),", ",i," "]}),e.jsxs(D,{children:[e.jsxs(a,{children:[d,"  "]}),e.jsxs(a,{children:[l,"  "]}),e.jsxs(a,{children:["id: ",c,"  "]}),e.jsxs(a,{children:[i," "]}),e.jsxs(a,{children:["Type: ",f,"  "]})]}),e.jsxs(D,{children:[e.jsxs(a,{children:["Fuel Consumption: ",C," "]}),e.jsxs(a,{children:["Engine Size: ",v," "]})]}),e.jsx(ce,{children:j}),e.jsx(I,{children:"Accessories and functionalities:"}),e.jsx(B,{children:p.join(" | ")}),e.jsx(B,{children:w.join(" | ")}),e.jsx(I,{children:"Rental Conditions: "}),e.jsxs(z,{children:[e.jsxs(h,{children:["Minimum age : ",e.jsx("span",{children:u})]}),e.jsx(h,{children:r[1]})]}),e.jsxs(z,{children:[e.jsxs(h,{children:[r[2]," "]}),e.jsxs(h,{children:["Mileage: ",e.jsx("span",{children:g})]}),e.jsxs(h,{children:["Price: ",e.jsx("span",{children:y})]})]}),e.jsx(ie,{})]})},xe=document.querySelector("#modal-root"),pe=({closeModal:o,data:l,country:d,city:c})=>{const i=n=>{n.currentTarget===n.target&&o()};return E.useEffect(()=>{const n=x=>{x.key==="Escape"&&o()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[o]),A.createPortal(e.jsx(te,{onClick:i,children:e.jsxs(oe,{children:[e.jsx(ne,{onClick:o}),e.jsx(de,{data:l,country:d,city:c})]})}),xe)},ge=({advert:o})=>{const{id:l,year:d,make:c,model:i,type:n,img:x,functionalities:f,rentalPrice:b,rentalCompany:j,address:C,mileage:v}=o,[p,w]=E.useState(!1),g=P(G).some(T=>T.id===o.id),m=H(),r=C.split(" "),u=r[r.length-1],k=r[r.length-1-1],M=()=>{w(!p),document.body.style.overflow=p?"auto":"hidden"},F=()=>{console.log("ADDDDDD!!!"),m(Z(o))},R=()=>{console.log(l),console.log("Delete!!!"),m(q(l))};return e.jsxs(O,{children:[e.jsxs(U,{children:[e.jsx(V,{src:x,alt:c}),e.jsx(Y,{onClick:g?R:F,type:"button",children:g?e.jsx($,{}):e.jsx(_,{})})]}),e.jsxs(N,{children:[e.jsxs(X,{children:[c," ",e.jsx("span",{children:i}),", ",d]}),e.jsx("p",{children:b})]}),e.jsxs(ee,{children:[e.jsxs(L,{children:[e.jsxs(s,{children:[k," "]}),e.jsxs(s,{children:[u," "]}),e.jsxs(s,{children:[j,"  "]}),e.jsx(s,{children:n})]}),e.jsxs(L,{children:[e.jsxs(s,{children:[i," "]}),e.jsx(s,{children:v}),e.jsx(s,{children:f[0]})]})]}),e.jsx(Q,{type:"button",onClick:M,children:"Learn more"}),p&&e.jsx(pe,{closeModal:M,data:o,country:u,city:k})]})};export{ge as C};
