import{s as i,j as e,G as B,u as R,a as U,r,b as q,Q as m,C as G}from"./index-32cf2021.js";import{C as O}from"./CatalogueCard-1568b00c.js";import{F as Q}from"./Footer-b7b89cdc.js";const Z=i.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 30px;
   row-gap: 30px;
   padding : 20px;
   justify-content: center; 
`,H=({adverts:n})=>e.jsx(Z,{children:n.length>0&&n.map(p=>e.jsx(O,{advert:p},p.id))});function J(n){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function K(n){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const X=i.section`
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

  @media (max-width: 768px) {
    width: 240px;
  }
  @media (min-width: 768px) {
    width: 250px;
   
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
  color:  #6e6e6e ;
  margin-bottom: 8px;
  `,ne=i.input`
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 250px;
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
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
    font-size: 18px;
  }
`,I=i(J)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,N=i(K)`
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

  @media (max-width: 768px) {
    width: 240px;
  }
  @media (min-width: 768px) {
    width: 125px;
  }

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
  width: 250px;
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
  display: flex;
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
  padding: 10px 10px 10px 33px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
`,E=i.p`
position: absolute;
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

`,ce=i(E)`
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
`,F=i.button`
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
`,he=({adverts:n,updateFilteredAdverts:p})=>{const h=R(t=>t.filter.filter),u=U(),[a,g]=r.useState(!1),[s,f]=r.useState(""),[b,T]=r.useState([]),[l,k]=r.useState(""),[d,z]=r.useState(""),[x,S]=r.useState(""),L=r.useCallback(()=>{const t=n.map(c=>c.make),o=[...new Set(t)];T(o)},[n]);r.useEffect(()=>{L()},[L]),r.useEffect(()=>{u(q({model:s,price:l,startMileage:d,endMileage:x}))},[s,l,d,x,u]);const y=30,C=500,D=10,P=[];for(let t=y;t<=C;t+=D)P.push(t);const W=b.filter(t=>t.toLowerCase().includes(s.toLowerCase())).sort((t,o)=>t.localeCompare(o)),A=async()=>{if(h.model!==""&&!/^[a-zA-Z\s]+$/i.test(h.model)){m.error("Car brand should contain only EN letters !");return}const t=n.filter(o=>{if(s&&h.model&&!o.make.toLowerCase().includes(h.model.toLowerCase()))return!1;if(l!==""){if(Number(l)<y)return m.warn(`Price cannot be less than ${y}!`),!1;if(Number(l)>C)return m.warn(`Price cannot be greater than ${C}!`),!1;if(Number(o.rentalPrice.substr(1))>Number(l))return!1}if(d!==""&&x!==""){const c=Number(d),$=Number(x);if(Number(o.mileage)>Number(x)||Number(o.mileage)<Number(d))return!1;if(c>=$)return m.warn("Start mileage should be less than end mileage!"),!1;if(d<1e3||x>7e3){m.error("Mileage should be in the range of 1000 to 7000!");return}}return!0});if(t.length===0){m.warn("No car found with the specified parameters!");return}p(t),g(!1)},w=t=>{g(a===t?null:t)},V=()=>{f(""),k(""),z(""),S(""),p(n)},j=t=>{switch(t.target.name){case"model":f(t.target.value);break;case"price":k(t.target.value);break;case"endMileage":S(t.target.value);break;case"startMileage":z(t.target.value);break;default:return}};return e.jsx(X,{children:e.jsxs(Y,{children:[e.jsxs(M,{children:[e.jsx(v,{htmlFor:"modelTitle",children:"Car brand"}),e.jsx(ne,{id:"modelTitle",name:"model",placeholder:"Enter the text",value:s,onChange:j,onClick:()=>w("model")}),e.jsx(_,{onClick:()=>w("model"),type:"button",children:a==="model"?e.jsx(N,{}):e.jsx(I,{})}),a==="model"&&e.jsx(ee,{children:e.jsx(te,{children:W.map((t,o)=>e.jsx(ie,{onClick:c=>{c.stopPropagation(),f(t),g(!1)},children:t},o))})})]}),e.jsxs(M,{children:[e.jsx(v,{htmlFor:"priceTitle",children:"Price/ 1 hour "}),e.jsx(se,{id:"priceTitle",name:"price",placeholder:"To $",value:l,onChange:j,onClick:()=>w("price")}),e.jsx(oe,{type:"button",onClick:()=>w("price"),children:a==="price"?e.jsx(N,{}):e.jsx(I,{})}),a==="price"&&e.jsx(re,{children:e.jsx(ae,{children:P.map((t,o)=>e.jsx(pe,{onClick:c=>{c.stopPropagation(),k(t),g(!1)},children:t},o))})})]}),e.jsxs(M,{children:[e.jsx(v,{htmlFor:"mileageTitle",children:"Сar mileage / km "}),e.jsxs(le,{children:[e.jsx(E,{children:"from"}),e.jsx(de,{id:"mileageTitle",name:"startMileage",value:d,onChange:j}),e.jsx(ce,{children:"to"}),e.jsx(xe,{type:"number",name:"endMileage",value:x,onChange:j})]})]}),e.jsx(F,{type:"button",onClick:A,children:"Search"}),e.jsx(F,{type:"button",onClick:V,children:"Reset"})]})})},ue=i.button`
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
`,ge=i.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`,we=({adverts:n,currentPage:p,setCurrentPage:h})=>{const[u,a]=r.useState([]),g=12;r.useEffect(()=>{a(b=>[...b,...n])},[n]);const s=()=>{h(p+1)},f=b=>{a(b)};return e.jsxs(e.Fragment,{children:[e.jsx(G,{children:e.jsxs(ge,{children:[e.jsx(he,{adverts:n,updateFilteredAdverts:f}),e.jsx(H,{adverts:u.length>0?u:n}),n.length>=g&&u.length>=n.length&&e.jsx(ue,{onClick:s,children:"Load more"})]})}),e.jsx(Q,{})]})};export{we as default};
