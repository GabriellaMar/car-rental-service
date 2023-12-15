import{s as i,j as t,u as a,C as o}from"./index-32cf2021.js";import{C as n}from"./CatalogueCard-1568b00c.js";import{F as s}from"./Footer-b7b89cdc.js";const p=i.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
  `,x="/car-rental-service/assets/Nocar-bdb983a9.png",d=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,c=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  margin-top: 50px;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`,l=i.p`
  background-color: transparent;
  border: none;
  padding: 28px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: #d8d6d6;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;
  padding: 0;
  margin-right: 30px;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    margin-top: 100px;
  }
`,m=()=>t.jsxs(d,{children:[t.jsx(l,{children:"No cars available"}),t.jsx(c,{src:x,alt:"set Of Cars"})]}),j=()=>{const r=a(e=>e.favorite.favorite);return t.jsxs(t.Fragment,{children:[t.jsx(o,{children:r.length>0?t.jsx(p,{children:r.map(e=>t.jsx(n,{advert:e},e.id))}):t.jsx(m,{})}),t.jsx(s,{})]})};export{j as default};
