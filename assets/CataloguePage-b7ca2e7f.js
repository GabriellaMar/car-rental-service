import{s as i,j as e,G as E,u as R,a as U,r,b as q,Q as f,C as G}from"./index-f69e0c91.js";import{C as O}from"./CatalogueCard-fae3c4f3.js";import{F as Q}from"./Footer-7f7403a7.js";const Z=i.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 30px;
   row-gap: 30px;
   padding : 20px;
   justify-content: center;
   
`,H=({adverts:n})=>e.jsx(Z,{children:n.length>0&&n.map(p=>e.jsx(O,{advert:p},p.id))});function J(n){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function K(n){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const X=i.section`
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
`,Y=i.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  
  justify-content: center;
  align-items: flex-end;
  gap: 18px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1440px) {
    
  }
`,M=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,_=i.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,ee=i.div`
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
  @media (max-width: 768px) {
    width: 182px;
   
  }
`,te=i.ul`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,ie=i.li`
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
`,v=i.label`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  /* color: #fff; */
  color:  #6e6e6e ;
  margin-bottom: 8px;
  `,ne=i.input`
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 228px;
  gap: 32px;
  border-radius: 10px;
  background: rgba(248, 246, 246, 0.996);
  border: none;
  outline: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #5c5d5e;
  }
  @media (min-width: 768px) {
    padding: 12px 12px 12px 18px;
    width: 125px;
    /* font-size: 16px; */
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
    font-size: 18px;
  }
`,F=i(J)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,I=i(K)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,oe=i.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,re=i.div`
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
  @media (max-width: 768px) {
    width: 182px;
   
  }
  /* @media (min-width: 1440px) {
   
  } */
`,ae=i.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,pe=i.li`
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
`,se=i.input`
  display: flex;
  width: 228px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  background: rgba(248, 246, 246, 0.996);
  border: none;
  outline: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #5c5d5e;
  }
  @media (min-width: 768px) {
    padding: 12px 12px 12px 18px;
    width: 125px;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
  }
`,le=i.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,de=i.input`
  /* position: relative; */
  display: flex;
  /* width: 100px; */
  padding: 10px 10px 10px 50px;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  @media (max-width: 767px) {
    width: 81px;
  }
 
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 63px;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 63px;
   
  }
`,xe=i.input`
  display: flex;
  /* width: 100px; */
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
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  @media (max-width: 767px) {
    width: 81px;
  }
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 40px;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 42px;
    
  }
`,T=i.p`
position: absolute;
/* top: 12px; */
  left: 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--dropdawn); 

  @media (min-width: 768px) {
    font-size: 18px;
    left: 17px;
  }
  @media (min-width: 1440px) {

  } 

`,ce=i(T)`
position: absolute;

@media (max-width: 767px) {
  left: 153px; 
  }
  
  @media (min-width: 768px) {
    left: 220px; 
   
  }
  @media (min-width: 1440px) {
    left: 255px; 
  }
`,B=i.button`
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
`,he=({adverts:n,updateFilteredAdverts:p})=>{const s=R(t=>t.filter.filter),u=U(),[a,c]=r.useState(!1),[l,m]=r.useState(""),[b,D]=r.useState([]),[d,j]=r.useState(""),[h,z]=r.useState(""),[g,S]=r.useState(""),L=r.useCallback(()=>{const t=n.map(x=>x.make),o=[...new Set(t)];D(o)},[n]);r.useEffect(()=>{L()},[L]),r.useEffect(()=>{u(q({model:l,price:d,startMileage:h,endMileage:g}))},[l,d,h,g,u]);const y=30,C=500,N=10,P=[];for(let t=y;t<=C;t+=N)P.push(t);const W=b.filter(t=>t.toLowerCase().includes(l.toLowerCase())).sort((t,o)=>t.localeCompare(o)),A=async()=>{if(s.model!==""&&!/^[a-zA-Z\s]+$/i.test(s.model)){f.error("Car brand should contain only EN letters !");return}const t=n.filter(o=>{if(l&&s.model&&!o.make.toLowerCase().includes(s.model.toLowerCase()))return!1;if(d&&!isNaN(d)&&parseFloat(o.price)===parseFloat(s.price)){if(Number(d)<y)return f.warn(`Price cannot be less than ${y}!`),!1;if(Number(d)>C)return f.warn(`Price cannot be greater than ${C}!`),!1}if(h!==""&&g!==""){const x=Number(h),$=Number(g);if(x>=$)return f.warn("Start mileage should be less than end mileage!"),!1}if(h<1e3||g>7e3){f.error("Mileage should be in the range of 1000 to 7000!");return}return!0});p(t),c(!1)},w=t=>{c(a===t?null:t)},V=()=>{m(""),j(""),z(""),S(""),p(n)},k=t=>{switch(t.target.name){case"model":m(t.target.value);break;case"price":j(t.target.value);break;case"endMileage":S(t.target.value);break;case"startMileage":z(t.target.value);break;default:return}};return e.jsx(X,{children:e.jsxs(Y,{children:[e.jsxs(M,{children:[e.jsx(v,{htmlFor:"modelTitle",children:"Car brand"}),e.jsx(ne,{id:"modelTitle",name:"model",placeholder:"Enter the text",value:l,onChange:k,onClick:()=>w("model")}),e.jsx(_,{onClick:()=>w("model"),type:"button",children:a==="model"?e.jsx(I,{}):e.jsx(F,{})}),a==="model"&&e.jsx(ee,{children:e.jsx(te,{children:W.map((t,o)=>e.jsx(ie,{onClick:x=>{x.stopPropagation(),m(t),c(!1)},children:t},o))})})]}),e.jsxs(M,{children:[e.jsx(v,{htmlFor:"priceTitle",children:"Price/ 1 hour "}),e.jsx(se,{id:"priceTitle",name:"price",placeholder:"To $",value:d,onChange:k,onClick:()=>w("price")}),e.jsx(oe,{type:"button",onClick:()=>w("price"),children:a==="price"?e.jsx(I,{}):e.jsx(F,{})}),a==="price"&&e.jsx(re,{children:e.jsx(ae,{children:P.map((t,o)=>e.jsx(pe,{onClick:x=>{x.stopPropagation(),j(t),c(!1)},children:t},o))})})]}),e.jsxs(M,{children:[e.jsx(v,{htmlFor:"mileageTitle",children:"Сar mileage / km "}),e.jsxs(le,{children:[e.jsx(T,{children:"from"}),e.jsx(de,{id:"mileageTitle",name:"startMileage",value:h,onChange:k}),e.jsx(ce,{children:"to"}),e.jsx(xe,{type:"number",name:"endMileage",value:g,onChange:k})]})]}),e.jsx(B,{type:"button",onClick:A,children:"Search"}),e.jsx(B,{type:"button",onClick:V,children:"Reset"})]})})},ge=i.button`
   width: 200px; 
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
   padding: 8px;
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
`,ue=i.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`,we=({adverts:n,currentPage:p,setCurrentPage:s})=>{const[u,a]=r.useState([]),c=12;r.useEffect(()=>{a(b=>[...b,...n])},[n]);const l=()=>{s(p+1)},m=b=>{a(b)};return e.jsxs(e.Fragment,{children:[e.jsx(G,{children:e.jsxs(ue,{children:[e.jsx(he,{adverts:n,updateFilteredAdverts:m}),e.jsx(H,{adverts:u.length>0?u:n}),n.length>=c&&e.jsx(ge,{onClick:l,children:"Load more"})]})}),e.jsx(Q,{})]})};export{we as default};
