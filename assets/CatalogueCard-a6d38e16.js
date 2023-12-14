import{G as D,s as e,R as W,j as t,r as E,c as P,u as A,d as G,a as H,e as Z,f as q}from"./index-470b59db.js";function K(o){return D({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(o)}function J(o){return D({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(o)}const N=e.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
 `,O=e.li`
    max-height: 426px;
    /* margin: 0 auto; */
 `,L=e.ul`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    align-items: center;
`,s=e.li`

  color: var(--text-color);
  /* color: rgba(229, 225, 225, 0.5); */
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
  padding-left: 3px;

 `,Q=e.button`
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
`,U=e.div`
   position: relative;
   margin-bottom: 14px;
   width: 274px;
   
`,V=e.img`
   display: block;
   border-radius: 13px;
   width: 100%;
   object-fit: cover;
   height: 268px; 
   
`,X=e.h3`
   font-family: 'Manrope', sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: rgb(18, 20, 23);

   span {
      color:  var(--blue);
    }
`,Y=e.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;

`,_=e(J)`
   display: block;
   width: 18px;
   height: 18px;
   color: var(--heart-white);

   &:hover,
   &:focus{
   color: var(--blue);
  }
   
  
`,$=e(K)`
  display: block;
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`,tt=e.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
`,et=e.div`
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
`,ot=e.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  /* height: 85vh;  */

  background-color: var(--white);
  background:  rgb(212, 212, 213) ;
  border-radius: 24px;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
  padding: 40px 15px; 
  overflow: hidden;
  overflow-y: scroll;
  

  @media screen and (min-width: 768px) {
    max-width: 441px;
    max-height: 752px;  
 
  }

  @media screen and (min-width: 1440px) {
    max-width: 541px;
    height: 85vh; 
    margin: 0 auto;
  }
`,nt=e(W)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 20px;
`,it=e.a`
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
`,rt=()=>t.jsx(it,{href:"tel:+380730000000",children:"Rental car"}),st=e.div`
`,at=e.img`
width: 100%;
margin-bottom: 14px;
`,ct=e.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`,I=e.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
 `,a=e.li`
    color: var(--text-color);
 `,z=e.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,lt=e.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,B=e.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,h=e.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,S=e.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-color);
 `,dt=({data:o,country:l,city:d})=>{if(!o)return;const{id:c,year:r,make:n,model:x,type:f,img:b,description:j,fuelConsumption:C,engineSize:v,accessories:p,functionalities:w,rentalPrice:y,mileage:g,rentalConditions:u}=o,i=u.split(`
`),m=parseInt(i[0].match(/\d+/));return t.jsxs(st,{children:[t.jsx(at,{src:b,alt:n}),t.jsxs(ct,{children:[n," ",t.jsx("span",{children:x}),", ",r," "]}),t.jsxs(I,{children:[t.jsxs(a,{children:[d,"  "]}),t.jsxs(a,{children:[l,"  "]}),t.jsxs(a,{children:["id: ",c,"  "]}),t.jsxs(a,{children:[r," "]}),t.jsxs(a,{children:["Type: ",f,"  "]})]}),t.jsxs(I,{children:[t.jsxs(a,{children:["Fuel Consumption: ",C," "]}),t.jsxs(a,{children:["Engine Size: ",v," "]})]}),t.jsx(lt,{children:j}),t.jsx(z,{children:"Accessories and functionalities:"}),t.jsx(S,{children:p.join(" | ")}),t.jsx(S,{children:w.join(" | ")}),t.jsx(z,{children:"Rental Conditions: "}),t.jsxs(B,{children:[t.jsxs(h,{children:["Minimum age : ",t.jsx("span",{children:m})]}),t.jsx(h,{children:i[1]})]}),t.jsxs(B,{children:[t.jsxs(h,{children:[i[2]," "]}),t.jsxs(h,{children:["Mileage: ",t.jsx("span",{children:g})]}),t.jsxs(h,{children:["Price: ",t.jsx("span",{children:y})]})]}),t.jsx(rt,{})]})},xt=document.querySelector("#modal-root"),pt=({closeModal:o,data:l,country:d,city:c})=>{const r=n=>{n.currentTarget===n.target&&o()};return E.useEffect(()=>{const n=x=>{x.key==="Escape"&&o()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[o]),P.createPortal(t.jsx(et,{onClick:r,children:t.jsxs(ot,{children:[t.jsx(nt,{onClick:o}),t.jsx(dt,{data:l,country:d,city:c})]})}),xt)},gt=({advert:o})=>{const{id:l,year:d,make:c,model:r,type:n,img:x,functionalities:f,rentalPrice:b,rentalCompany:j,address:C,mileage:v}=o,[p,w]=E.useState(!1),g=A(G).some(T=>T.id===o.id),u=H(),i=C.split(" "),m=i[i.length-1],k=i[i.length-1-1],M=()=>{w(!p),document.body.style.overflow=p?"auto":"hidden"},F=()=>{u(Z(o))},R=()=>{u(q(l))};return t.jsxs(O,{children:[t.jsxs(U,{children:[t.jsx(V,{src:x,alt:c}),t.jsx(Y,{onClick:g?R:F,type:"button",children:g?t.jsx($,{}):t.jsx(_,{})})]}),t.jsxs(N,{children:[t.jsxs(X,{children:[c," ",t.jsx("span",{children:r}),", ",d]}),t.jsx("p",{children:b})]}),t.jsxs(tt,{children:[t.jsxs(L,{children:[t.jsxs(s,{children:[k," "]}),t.jsxs(s,{children:[m," "]}),t.jsxs(s,{children:[j,"  "]})]}),t.jsxs(L,{children:[t.jsx(s,{children:n}),t.jsxs(s,{children:[r," "]}),t.jsx(s,{children:v}),t.jsx(s,{children:f[0]})]})]}),t.jsx(Q,{type:"button",onClick:M,children:"Learn more"}),p&&t.jsx(pt,{closeModal:M,data:o,country:m,city:k})]})};export{gt as C};
