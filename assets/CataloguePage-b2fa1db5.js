import{s as r,j as e,G as D,u as T,r as i,a as V,Q as b,f as W,C as $}from"./index-4a81ba41.js";import{C as q,u as A,s as G}from"./CatalogueCard-263384a6.js";const Q=r.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
   
`,Z=r.button`
   /* display: inline-block; */
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: rgba(243, 240, 240, 0.996); 
   margin-top: 40px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
   /* margin: 0 auto;  */

  
&:hover,
&:focus {
   background-color: var(--hover-blue)
}

`,H=({adverts:n})=>e.jsx(e.Fragment,{children:e.jsx(Q,{children:n.length>0&&n.map(p=>e.jsx(q,{advert:p},p.id))})});function J(n){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function K(n){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const X=r.section`
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
`,Y=r.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`,L=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,_=r.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,ee=r.div`
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
`,te=r.ul`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,re=r.li`
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
`,S=r.label`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #fff;
  margin-bottom: 8px;
  `,ne=r.input`
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
`,E=r(J)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,F=r(K)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,oe=r.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,ie=r.div`
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
`,ae=r.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,pe=r.li`
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
`,se=r.input`
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
`,le=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,de=r.input`
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
`,ce=r.input`
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
`,B=r.button`
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
`,xe=({adverts:n,updateFilteredAdverts:p})=>{const s=T(t=>t.filter.filter),u=A(),[a,m]=i.useState(!1),[l,g]=i.useState(""),[k,h]=i.useState([]),[d,j]=i.useState(""),[c,P]=i.useState(""),[x,z]=i.useState("");i.useEffect(()=>{(()=>{const o=n.map(M=>M.make),v=[...new Set(o)];h(v)})()},[n]),i.useEffect(()=>{u(V({model:l,price:d,startMileage:c,endMileage:x}))},[l,d,c,x,u]);const C=30,y=500,N=10,I=[];for(let t=C;t<=y;t+=N)I.push(t);const O=k.filter(t=>t.toLowerCase().includes(l.toLowerCase())).sort((t,o)=>t.localeCompare(o)),R=async()=>{if(s.model!==""&&!/^[a-zA-Z\s]+$/i.test(s.model)){b.error("Car brand should contain only EN letters !");return}const t=n.filter(o=>{if(l&&s.model&&!o.make.toLowerCase().includes(s.model.toLowerCase()))return!1;if(d&&!isNaN(d)&&parseFloat(o.price)===parseFloat(s.price)){if(Number(d)<C)return b.warn(`Price cannot be less than ${C}!`),!1;if(Number(d)>y)return b.warn(`Price cannot be greater than ${y}!`),!1}if(c!==""&&x!==""){const v=Number(c),M=Number(x);if(v>=M)return b.warn("Start mileage should be less than end mileage!"),!1}if(c<1e3||x>6620){b.error("Mileage should be in the range of 1000 to 6620!");return}return!0});p(t)},f=t=>{m(a===t?null:t)},U=()=>{g(""),j(""),P(""),z(""),p(n)},w=t=>{switch(t.target.name){case"model":g(t.target.value);break;case"price":j(t.target.value);break;case"endMileage":z(t.target.value);break;case"startMileage":P(t.target.value);break;default:return}a||m(!0)};return e.jsx(X,{children:e.jsxs(Y,{children:[e.jsxs(L,{children:[e.jsx(S,{htmlFor:"modelTitle",children:"Car brand"}),e.jsx(ne,{id:"modelTitle",name:"model",placeholder:"Enter the text",value:l,onChange:w,onClick:()=>f("model")}),e.jsx(_,{onClick:()=>f("model"),type:"button",children:a==="model"?e.jsx(F,{}):e.jsx(E,{})}),a==="model"&&e.jsx(ee,{children:e.jsx(te,{children:O.map((t,o)=>e.jsx(re,{onClick:()=>g(t),children:t},o))})})]}),e.jsxs(L,{children:[e.jsx(S,{htmlFor:"priceTitle",children:"Price/ 1 hour "}),e.jsx(se,{id:"priceTitle",name:"price",placeholder:"To $",value:d,onChange:w,onClick:()=>f("price")}),e.jsx(oe,{type:"button",onClick:()=>f("price"),children:a==="price"?e.jsx(F,{}):e.jsx(E,{})}),a==="price"&&e.jsx(ie,{children:e.jsx(ae,{children:I.map((t,o)=>e.jsx(pe,{onClick:()=>j(t),children:t},o))})})]}),e.jsxs(L,{children:[e.jsx(S,{htmlFor:"mileageTitle",children:"Сar mileage / km "}),e.jsxs(le,{children:[e.jsx(de,{id:"mileageTitle",name:"startMileage",placeholder:"from",value:c,onChange:w}),e.jsx(ce,{type:"number",name:"endMileage",placeholder:"to",value:x,onChange:w})]})]}),e.jsx(B,{type:"button",onClick:R,children:"Search"}),e.jsx(B,{type:"button",onClick:U,children:"Reset"})]})})},he=()=>{const n=T(G),p=A(),[s,u]=i.useState([]),[a,m]=i.useState(1),l=12;i.useEffect(()=>{p(W({page:a,limit:l}))},[p,a]),i.useEffect(()=>{u(h=>[...h,...n])},[n]);const g=()=>{m(a+1)},k=h=>{u(h)};return e.jsxs($,{children:[e.jsx(xe,{adverts:n,updateFilteredAdverts:k}),e.jsx(H,{adverts:s.length>0?s:n}),n.length>=l&&e.jsx(Z,{onClick:g,children:"LOAD MORE"})]})};export{he as default};
