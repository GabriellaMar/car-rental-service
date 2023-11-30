import{R as m,b as W,c as P,G as k,s as o,j as e,r as E,d as Z,u as G,e as $,g as q}from"./index-76cb6b65.js";function F(t=m){const n=t===m?W:P(t);return function(){const{store:i}=n();return i}}const K=F();function J(t=m){const n=t===m?K:F(t);return function(){return n().dispatch}}const N=J(),je=t=>t.advert.advert,O=t=>t.favorite.favorite;function Q(t){return k({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(t)}function U(t){return k({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(t)}const V=o.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
 `,X=o.li`
    max-height: 426px;
    /* margin: 0 auto; */
 `,I=o.ul`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    /* gap: 4px; */
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
`,l=o.li`

  color: var(--text-black);
  /* color: rgba(229, 225, 225, 0.5); */
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 3px;
  padding-left: 3px;

 `,Y=o.button`
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
`,_=o.div`
   position: relative;
   margin-bottom: 14px;
   width: 274px;
   
`,ee=o.img`
   display: block;
   border-radius: 13px;
   width: 100%;
   object-fit: cover;
   height: 268px; 
   
`,te=o.h3`
   font-family: 'Manrope', sans-serif;
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: rgb(18, 20, 23);
   /* color: rgba(243, 240, 240, 0.996); */
  

   span {
      color:  var(--blue);
    }
`,oe=o.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;

`,ne=o(U)`
   display: block;
   width: 18px;
   height: 18px;
   color: var(--heart-white);

   &:hover,
   &:focus{
   color: var(--blue);
  }
   
  
`,re=o(Q)`
  display: block;
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`,ie=o.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
`;function se(t){return k({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(t)}const ae=o.div`
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
`,ce=o.div`
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
`,le=o(se)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`,de=o.a`
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
`,xe=()=>e.jsx(de,{href:"tel:+380730000000",children:"Rental car"}),pe=o.div`
`,he=o.img`
width: 100%;
margin-bottom: 14px;
`,ge=o.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`,R=o.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
 `,d=o.li`
    color: var(--text-black);
 `,S=o.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,ue=o.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,z=o.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,h=o.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,B=o.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-black);
 `,fe=({data:t,country:n,city:a})=>{if(!t)return;const{id:i,year:c,make:r,model:x,type:b,img:C,description:j,fuelConsumption:v,engineSize:w,accessories:p,functionalities:y,rentalPrice:L,mileage:g,rentalConditions:u}=t,s=u.split(`
`),f=parseInt(s[0].match(/\d+/));return e.jsxs(pe,{children:[e.jsx(he,{src:C,alt:r}),e.jsxs(ge,{children:[r," ",e.jsx("span",{children:x}),", ",c," "]}),e.jsxs(R,{children:[e.jsxs(d,{children:[a,"  "]}),e.jsxs(d,{children:[n,"  "]}),e.jsxs(d,{children:["id: ",i,"  "]}),e.jsxs(d,{children:[c," "]}),e.jsxs(d,{children:["Type: ",b,"  "]})]}),e.jsxs(R,{children:[e.jsxs(d,{children:["Fuel Consumption: ",v," "]}),e.jsxs(d,{children:["Engine Size: ",w," "]})]}),e.jsx(ue,{children:j}),e.jsx(S,{children:"Accessories and functionalities:"}),e.jsx(B,{children:p.join(" | ")}),e.jsx(B,{children:y.join(" | ")}),e.jsx(S,{children:"Rental Conditions: "}),e.jsxs(z,{children:[e.jsxs(h,{children:["Minimum age : ",e.jsx("span",{children:f})]}),e.jsx(h,{children:s[1]})]}),e.jsxs(z,{children:[e.jsxs(h,{children:[s[2]," "]}),e.jsxs(h,{children:["Mileage: ",e.jsx("span",{children:g})]}),e.jsxs(h,{children:["Price: ",e.jsx("span",{children:L})]})]}),e.jsx(xe,{})]})},me=document.querySelector("#modal-root"),be=({closeModal:t,data:n,country:a,city:i})=>{const c=r=>{r.currentTarget===r.target&&t()};return E.useEffect(()=>{const r=x=>{x.key==="Escape"&&t()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[t]),Z.createPortal(e.jsx(ae,{onClick:c,children:e.jsxs(ce,{children:[e.jsx(le,{onClick:t}),e.jsx(fe,{data:n,country:a,city:i})]})}),me)},ve=({advert:t})=>{const{id:n,year:a,make:i,model:c,type:r,img:x,functionalities:b,rentalPrice:C,rentalCompany:j,address:v,mileage:w}=t,[p,y]=E.useState(!1),g=G(O).some(H=>H.id===t.id),u=N(),s=v.split(" "),f=s[s.length-1],M=s[s.length-1-1],D=()=>{y(!p),p?document.body.style.overflow="hidden":document.body.style.overflow="auto"},T=()=>{console.log("ADDDDDD!!!"),u($(t))},A=()=>{console.log(n),console.log("Delete!!!"),u(q(n))};return e.jsxs(X,{children:[e.jsxs(_,{children:[e.jsx(ee,{src:x,alt:i}),e.jsx(oe,{onClick:g?A:T,type:"button",children:g?e.jsx(re,{}):e.jsx(ne,{})})]}),e.jsxs(V,{children:[e.jsxs(te,{children:[i," ",e.jsx("span",{children:c}),", ",a]}),e.jsx("p",{children:C})]}),e.jsxs(ie,{children:[e.jsxs(I,{children:[e.jsxs(l,{children:[M," "]}),e.jsxs(l,{children:[f," "]}),e.jsxs(l,{children:[j,"  "]}),e.jsx(l,{children:r})]}),e.jsxs(I,{children:[e.jsxs(l,{children:[c," "]}),e.jsx(l,{children:w}),e.jsx(l,{children:b[0]})]})]}),e.jsx(Y,{type:"button",onClick:D,children:"Learn more"}),p&&e.jsx(be,{closeModal:D,data:t,country:f,city:M})]})};export{ve as C,je as s,N as u};
