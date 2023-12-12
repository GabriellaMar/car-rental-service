import{s as i,j as t,u as a,C as n}from"./index-81fe8e87.js";import{C as o}from"./CatalogueCard-2b8fd159.js";import{F as s}from"./Footer-88fa4a63.js";const p=i.ul`
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
  /* background: linear-gradient(
    -60deg,
    rgb(17, 20, 25) 29%,
    rgb(181, 186, 196) 100%,
    rgb(205, 206, 206) 50%
  ); */
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
`,g=i.p`
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
`,l=()=>t.jsxs(d,{children:[t.jsx(g,{children:"No cars available"}),t.jsx(c,{src:x,alt:"set Of Cars"})]}),j=()=>{const r=a(e=>e.favorite.favorite);return t.jsxs(t.Fragment,{children:[t.jsx(n,{children:r.length>0?t.jsx(p,{children:r.map(e=>t.jsx(o,{advert:e},e.id))}):t.jsx(l,{})}),t.jsx(s,{})]})};export{j as default};
