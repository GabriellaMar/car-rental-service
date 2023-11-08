import{s as r,r as i,j as e,G as F,u as E,a as $,Q as h,f as U,C as q}from"./index-3835ebe4.js";import{C as G,u as A,s as Q}from"./CatalogueCard-f09f1250.js";import{C as Z}from"./MainPage.styled-36c1f190.js";import"./RentalCarBtn.styled-b5ac50a4.js";const H=r.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
   
`,J=r.button`
   display: inline-block;
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: rgba(243, 240, 240, 0.996);
   margin: 0 auto;
   margin-top: 40px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  
&:hover,
&:focus {
   background-color: var(--hover-blue)
}

`,K=({adverts:n})=>{const[s,a]=i.useState(1),d=12,p=()=>{a(s+1)},x=d*s;return e.jsx(e.Fragment,{children:e.jsxs(H,{children:[n.slice(0,s*d).map(l=>e.jsx(G,{advert:l},l.id)),n.length>x&&e.jsx(J,{onClick:p,children:"LOAD MORE"})]})})};function X(n){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function Y(n){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const _=r.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 80px;
  @media (min-width: 768px) {
    padding: 40px 0px 80px;
  }
  @media (min-width: 1440px) {
    padding: 50px 0px 80px;
  }
`,ee=r.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`,v=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,te=r.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,re=r.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  width: 224px;
  /* max-height: 272px; */
  height: 272px;
  overflow: auto;
  padding: 8px 8px 8px 18px;
  color: #5c5d5e;
  z-index: 10;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: rgba(248, 246, 246, 0.996);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  margin-top: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  ::-webkit-scrollbar {
    width: 8px;
    height: 130px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(243, 240, 240, 0.996);
  }

  ::-webkit-scrollbar-track {
    background: rgba(243, 240, 240, 0.996);
  }
`,ne=r.ul`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,oe=r.li`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  color: var(--dropdawn);

  &:hover {
    color: var(--blue);
  }
`,y=r.label`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #fff;
  margin-bottom: 8px;
  `,ie=r.input`
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: rgba(248, 246, 246, 0.996);
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #5c5d5e;
  }
  @media (min-width: 768px) {
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
  }
`,P=r(X)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,z=r(Y)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,ae=r.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,pe=r.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  height: 188px;
  overflow: auto;
  padding: 8px 8px 8px 18px;

  z-index: 10;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: rgba(248, 246, 246, 0.996);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  margin-top: 3px;

  ::-webkit-scrollbar {
    width: 8px;
    height: 66px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(243, 240, 240, 0.996);
  }

  ::-webkit-scrollbar-track {
    background: rgba(243, 240, 240, 0.996);
  }
`,se=r.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,le=r.li`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--dropdawn); 
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: var(--blue);
  }
`,de=r.input`
  display: flex;
  width: 125px;
  padding: 10px 10px 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: rgba(248, 246, 246, 0.996);
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #5c5d5e;
  }
  @media (min-width: 768px) {
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
  }
`,ce=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,xe=r.input`
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background: rgba(248, 246, 246, 0.996);
  border: none;
  outline: none;
  color: #000;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #5c5d5e;
  }
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 18px;
  }
`,ge=r.input`
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  /* background: #f7f7fb; */
  background: rgba(248, 246, 246, 0.996);
  border: none;
  outline: none;
  color: #000;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #5c5d5e;
  }
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 18px;
  }
`,I=r.button`
  padding: 10px 20px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  background: #1752b2;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #134698;
  }
  @media (min-width: 768px) {
    padding: 13px 30px;
  }
  @media (min-width: 1440px) {
    padding: 13px 44px;
  }
`,ue=({adverts:n,updateFilteredAdverts:s})=>{const a=E(t=>t.filter.filter),d=A(),[p,x]=i.useState(!1),[l,f]=i.useState(""),[B,D]=i.useState([]),[c,w]=i.useState(""),[g,M]=i.useState(""),[u,L]=i.useState(""),T=()=>{const t=n.map(C=>C.make),o=[...new Set(t)];D(o)};i.useEffect(()=>{T()},[n]),i.useEffect(()=>{d($({model:l,price:c,startMileage:g,endMileage:u}))},[l,c,g,u,d]);const k=30,j=500,N=10,S=[];for(let t=k;t<=j;t+=N)S.push(t);const W=B.filter(t=>t.toLowerCase().includes(l.toLowerCase())).sort((t,o)=>t.localeCompare(o)),O=async()=>{if(a.model!==""&&!/^[a-zA-Z\s]+$/i.test(a.model)){h.error("Car brand should contain only EN letters !");return}const t=n.filter(o=>{if(l&&a.model&&!o.make.toLowerCase().includes(a.model.toLowerCase()))return!1;if(c&&!isNaN(c)&&parseFloat(o.price)===parseFloat(a.price)){if(Number(c)<k)return h.warn(`Price cannot be less than ${k}!`),!1;if(Number(c)>j)return h.warn(`Price cannot be greater than ${j}!`),!1}if(g!==""&&u!==""){const C=Number(g),V=Number(u);if(C>=V)return h.warn("Start mileage should be less than end mileage!"),!1}if(g<1e3||u>6620){h.error("Mileage should be in the range of 1000 to 6620!");return}return!0});s(t)},b=t=>{x(p===t?null:t)},R=()=>{f(""),w(""),M(""),L(""),s(n)},m=t=>{switch(t.target.name){case"model":f(t.target.value);break;case"price":w(t.target.value);break;case"endMileage":L(t.target.value);break;case"startMileage":M(t.target.value);default:return}p||x(!0)};return e.jsx(_,{children:e.jsxs(ee,{children:[e.jsxs(v,{children:[e.jsx(y,{htmlFor:"modelTitle",children:"Car brand"}),e.jsx(ie,{id:"modelTitle",name:"model",placeholder:"Enter the text",value:l,onChange:m,onClick:()=>b("model")}),e.jsx(te,{onClick:()=>b("model"),type:"button",children:p==="model"?e.jsx(z,{}):e.jsx(P,{})}),p==="model"&&e.jsx(re,{children:e.jsx(ne,{children:W.map((t,o)=>e.jsx(oe,{onClick:()=>f(t),children:t},o))})})]}),e.jsxs(v,{children:[e.jsx(y,{htmlFor:"priceTitle",children:"Price/ 1 hour "}),e.jsx(de,{id:"priceTitle",name:"price",placeholder:"To $",value:c,onChange:m,onClick:()=>b("price")}),e.jsx(ae,{type:"button",onClick:()=>b("price"),children:p==="price"?e.jsx(z,{}):e.jsx(P,{})}),p==="price"&&e.jsx(pe,{children:e.jsx(se,{children:S.map((t,o)=>e.jsx(le,{onClick:()=>w(t),children:t},o))})})]}),e.jsxs(v,{children:[e.jsx(y,{htmlFor:"mileageTitle",children:"Сar mileage / km "}),e.jsxs(ce,{children:[e.jsx(xe,{id:"mileageTitle",name:"startMileage",placeholder:"from",value:g,onChange:m}),e.jsx(ge,{type:"number",name:"endMileage",placeholder:"to",value:u,onChange:m})]})]}),e.jsx(I,{type:"button",onClick:O,children:"Search"}),e.jsx(I,{type:"button",onClick:R,children:"Reset"})]})})},we=()=>{const n=E(Q),s=A(),[a,d]=i.useState([]);i.useEffect(()=>{s(U())},[s]);const p=x=>{d(x)};return e.jsx(Z,{children:e.jsxs(q,{children:[e.jsx(ue,{adverts:n,updateFilteredAdverts:p}),e.jsx(K,{adverts:a.length>0?a:n})]})})};export{we as default};
