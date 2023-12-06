import{s as o,j as e,G as E,u as R,a as U,r as i,b as q,Q as m,C as G}from"./index-e549480f.js";import{C as O}from"./CatalogueCard-8469cfbc.js";const Q=o.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 30px;
   row-gap: 30px;
   padding : 20px;
   justify-content: center;
   
`,Z=({adverts:n})=>e.jsx(Q,{children:n.length>0&&n.map(p=>e.jsx(O,{advert:p},p.id))});function H(n){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function J(n){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const K=o.section`
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
`,X=o.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`,M=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Y=o.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,_=o.div`
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
  border-radius: 10px;
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
`,ee=o.ul`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,te=o.li`
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
`,v=o.label`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  /* color: #fff; */
  color:  #6e6e6e ;
  margin-bottom: 8px;
  `,oe=o.input`
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
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
`,I=o(H)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,F=o(J)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,ne=o.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,re=o.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  height: 188px;
  overflow: auto;
  padding: 8px 8px 8px 18px;

  z-index: 10;
  border-radius: 10px;
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
`,ie=o.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,ae=o.li`
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
`,pe=o.input`
  display: flex;
  width: 125px;
  padding: 10px 10px 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
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
`,se=o.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,le=o.input`
  /* position: relative; */
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgba(248, 246, 246, 0.996);
  border: none;
  outline: none;
  color: #000;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  /* &::placeholder {
    color: #5c5d5e;
  } */
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 63px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 63px;
  }
`,de=o.input`
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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

  /* &::placeholder {
    color: #5c5d5e;
  } */
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 42px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 42px;
  }
`,T=o.p`
position: absolute;
/* top: 12px; */
left: 18px;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--dropdawn);  

`,xe=o(T)`
position: absolute;
left: 255px; 
`,B=o.button`
  padding: 10px 20px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border-radius: 10px;
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
`,ce=({adverts:n,updateFilteredAdverts:p})=>{const s=R(t=>t.filter.filter),h=U(),[a,c]=i.useState(!1),[l,b]=i.useState(""),[f,D]=i.useState([]),[d,j]=i.useState(""),[g,S]=i.useState(""),[u,L]=i.useState(""),z=i.useCallback(()=>{const t=n.map(x=>x.make),r=[...new Set(t)];D(r)},[n]);i.useEffect(()=>{z()},[z]),i.useEffect(()=>{h(q({model:l,price:d,startMileage:g,endMileage:u}))},[l,d,g,u,h]);const y=30,C=500,N=10,P=[];for(let t=y;t<=C;t+=N)P.push(t);const W=f.filter(t=>t.toLowerCase().includes(l.toLowerCase())).sort((t,r)=>t.localeCompare(r)),A=async()=>{if(s.model!==""&&!/^[a-zA-Z\s]+$/i.test(s.model)){m.error("Car brand should contain only EN letters !");return}const t=n.filter(r=>{if(l&&s.model&&!r.make.toLowerCase().includes(s.model.toLowerCase()))return!1;if(d&&!isNaN(d)&&parseFloat(r.price)===parseFloat(s.price)){if(Number(d)<y)return m.warn(`Price cannot be less than ${y}!`),!1;if(Number(d)>C)return m.warn(`Price cannot be greater than ${C}!`),!1}if(g!==""&&u!==""){const x=Number(g),$=Number(u);if(x>=$)return m.warn("Start mileage should be less than end mileage!"),!1}if(g<1e3||u>7e3){m.error("Mileage should be in the range of 1000 to 7000!");return}return!0});p(t),c(!1)},w=t=>{c(a===t?null:t)},V=()=>{b(""),j(""),S(""),L(""),p(n)},k=t=>{switch(t.target.name){case"model":b(t.target.value);break;case"price":j(t.target.value);break;case"endMileage":L(t.target.value);break;case"startMileage":S(t.target.value);break;default:return}};return e.jsx(K,{children:e.jsxs(X,{children:[e.jsxs(M,{children:[e.jsx(v,{htmlFor:"modelTitle",children:"Car brand"}),e.jsx(oe,{id:"modelTitle",name:"model",placeholder:"Enter the text",value:l,onChange:k,onClick:()=>w("model")}),e.jsx(Y,{onClick:()=>w("model"),type:"button",children:a==="model"?e.jsx(F,{}):e.jsx(I,{})}),a==="model"&&e.jsx(_,{children:e.jsx(ee,{children:W.map((t,r)=>e.jsx(te,{onClick:x=>{x.stopPropagation(),b(t),c(!1)},children:t},r))})})]}),e.jsxs(M,{children:[e.jsx(v,{htmlFor:"priceTitle",children:"Price/ 1 hour "}),e.jsx(pe,{id:"priceTitle",name:"price",placeholder:"To $",value:d,onChange:k,onClick:()=>w("price")}),e.jsx(ne,{type:"button",onClick:()=>w("price"),children:a==="price"?e.jsx(F,{}):e.jsx(I,{})}),a==="price"&&e.jsx(re,{children:e.jsx(ie,{children:P.map((t,r)=>e.jsx(ae,{onClick:x=>{x.stopPropagation(),j(t),c(!1)},children:t},r))})})]}),e.jsxs(M,{children:[e.jsx(v,{htmlFor:"mileageTitle",children:"Сar mileage / km "}),e.jsxs(se,{children:[e.jsx(T,{children:"from"}),e.jsx(le,{id:"mileageTitle",name:"startMileage",value:g,onChange:k}),e.jsx(xe,{children:"to"}),e.jsx(de,{type:"number",name:"endMileage",value:u,onChange:k})]})]}),e.jsx(B,{type:"button",onClick:A,children:"Search"}),e.jsx(B,{type:"button",onClick:V,children:"Reset"})]})})},ge=o.button`
   width: 200px; 
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
   padding: 13px 8px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: rgba(243, 240, 240, 0.996); 
   margin-top: 40px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
   margin-bottom: 20px;
   
  
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`,ue=o.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`,fe=({adverts:n,currentPage:p,setCurrentPage:s})=>{const[h,a]=i.useState([]),c=12;i.useEffect(()=>{a(f=>[...f,...n])},[n]);const l=()=>{s(p+1)},b=f=>{a(f)};return e.jsx(G,{children:e.jsxs(ue,{children:[e.jsx(ce,{adverts:n,updateFilteredAdverts:b}),e.jsx(Z,{adverts:h.length>0?h:n}),n.length>=c&&e.jsx(ge,{onClick:l,children:"Load more"})]})})};export{fe as default};
