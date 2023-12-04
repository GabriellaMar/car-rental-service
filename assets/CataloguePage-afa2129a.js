import{s as o,j as e,G as B,u as D,r,a as q,Q as m,f as G,C as O}from"./index-36919090.js";import{u as N,s as Q}from"./selectors-b2964713.js";import{C as Z}from"./CatalogueCard-33b2554e.js";const H=o.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 30px;
   row-gap: 30px;
   padding : 20px;
   justify-content: center;
   
`,J=({adverts:n})=>e.jsx(H,{children:n.length>0&&n.map(p=>e.jsx(Z,{advert:p},p.id))});function K(n){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function X(n){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const Y=o.section`
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
`,_=o.div`
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
`,ee=o.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,te=o.div`
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
`,oe=o.ul`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,ne=o.li`
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
`,S=o.label`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  /* color: #fff; */
  color:  #6e6e6e ;
  margin-bottom: 8px;
  `,re=o.input`
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
`,E=o(K)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,F=o(X)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,ie=o.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,ae=o.div`
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
`,pe=o.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,se=o.li`
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
`,le=o.input`
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
`,de=o.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,xe=o.input`
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
`,ce=o.input`
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
`,A=o.p`
position: absolute;
/* top: 12px; */
left: 18px;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--dropdawn);  

`,ge=o(A)`
position: absolute;
left: 255px; 
`,T=o.button`
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
`,ue=({adverts:n,updateFilteredAdverts:p})=>{const s=D(t=>t.filter.filter),h=N(),[a,c]=r.useState(!1),[l,b]=r.useState(""),[j,f]=r.useState([]),[d,C]=r.useState(""),[g,L]=r.useState(""),[u,P]=r.useState(""),z=r.useCallback(()=>{const t=n.map(x=>x.make),i=[...new Set(t)];f(i)},[n]);r.useEffect(()=>{z()},[z]),r.useEffect(()=>{h(q({model:l,price:d,startMileage:g,endMileage:u}))},[l,d,g,u,h]);const y=30,v=500,W=10,I=[];for(let t=y;t<=v;t+=W)I.push(t);const V=j.filter(t=>t.toLowerCase().includes(l.toLowerCase())).sort((t,i)=>t.localeCompare(i)),$=async()=>{if(s.model!==""&&!/^[a-zA-Z\s]+$/i.test(s.model)){m.error("Car brand should contain only EN letters !");return}const t=n.filter(i=>{if(l&&s.model&&!i.make.toLowerCase().includes(s.model.toLowerCase()))return!1;if(d&&!isNaN(d)&&parseFloat(i.price)===parseFloat(s.price)){if(Number(d)<y)return m.warn(`Price cannot be less than ${y}!`),!1;if(Number(d)>v)return m.warn(`Price cannot be greater than ${v}!`),!1}if(g!==""&&u!==""){const x=Number(g),U=Number(u);if(x>=U)return m.warn("Start mileage should be less than end mileage!"),!1}if(g<1e3||u>6620){m.error("Mileage should be in the range of 1000 to 6620!");return}return!0});p(t),c(!1)},w=t=>{c(a===t?null:t)},R=()=>{b(""),C(""),L(""),P(""),p(n)},k=t=>{switch(t.target.name){case"model":b(t.target.value);break;case"price":C(t.target.value);break;case"endMileage":P(t.target.value);break;case"startMileage":L(t.target.value);break;default:return}};return e.jsx(Y,{children:e.jsxs(_,{children:[e.jsxs(M,{children:[e.jsx(S,{htmlFor:"modelTitle",children:"Car brand"}),e.jsx(re,{id:"modelTitle",name:"model",placeholder:"Enter the text",value:l,onChange:k,onClick:()=>w("model")}),e.jsx(ee,{onClick:()=>w("model"),type:"button",children:a==="model"?e.jsx(F,{}):e.jsx(E,{})}),a==="model"&&e.jsx(te,{children:e.jsx(oe,{children:V.map((t,i)=>e.jsx(ne,{onClick:x=>{x.stopPropagation(),b(t),c(!1)},children:t},i))})})]}),e.jsxs(M,{children:[e.jsx(S,{htmlFor:"priceTitle",children:"Price/ 1 hour "}),e.jsx(le,{id:"priceTitle",name:"price",placeholder:"To $",value:d,onChange:k,onClick:()=>w("price")}),e.jsx(ie,{type:"button",onClick:()=>w("price"),children:a==="price"?e.jsx(F,{}):e.jsx(E,{})}),a==="price"&&e.jsx(ae,{children:e.jsx(pe,{children:I.map((t,i)=>e.jsx(se,{onClick:x=>{x.stopPropagation(),C(t),c(!1)},children:t},i))})})]}),e.jsxs(M,{children:[e.jsx(S,{htmlFor:"mileageTitle",children:"Сar mileage / km "}),e.jsxs(de,{children:[e.jsx(A,{children:"from"}),e.jsx(xe,{id:"mileageTitle",name:"startMileage",value:g,onChange:k}),e.jsx(ge,{children:"to"}),e.jsx(ce,{type:"number",name:"endMileage",value:u,onChange:k})]})]}),e.jsx(T,{type:"button",onClick:$,children:"Search"}),e.jsx(T,{type:"button",onClick:R,children:"Reset"})]})})},he=o.button`
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
`,be=o.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`,ke=()=>{const n=D(Q),p=N(),[s,h]=r.useState([]),[a,c]=r.useState(1),l=12;r.useEffect(()=>{p(G({page:a,limit:l}))},[p,a]),r.useEffect(()=>{h(f=>[...f,...n])},[n]);const b=()=>{c(a+1)},j=f=>{h(f)};return e.jsx(O,{children:e.jsxs(be,{children:[e.jsx(ue,{adverts:n,updateFilteredAdverts:j}),e.jsx(J,{adverts:s.length>0?s:n}),n.length>=l&&e.jsx(he,{onClick:b,children:"Load"})]})})};export{ke as default};
