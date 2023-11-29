import{s as t,j as e,r as o,u as n,C as s}from"./index-4a81ba41.js";import{C as p}from"./CatalogueCard-263384a6.js";const d=t.ul`

   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
   
  `,x=t.div`
  height: 100vh;
  background: linear-gradient(
    -60deg,
    rgb(23, 26, 32) 49%,
    rgb(187, 206, 226) 100%,
    rgb(206, 206, 206) 70%
  );
`,c="/car-rental-service/assets/Nocar-bdb983a9.png",g=t.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    -60deg,
    rgb(17, 20, 25) 29%,
    rgb(181, 186, 196) 100%,
    rgb(205, 206, 206) 50%
  );
`,l=t.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`,h=t.p`
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
`,m=()=>e.jsxs(g,{children:[e.jsx(h,{children:"No cars available"}),e.jsx(l,{src:c,alt:"set Of Cars"})]}),u=()=>{const[a,f]=o.useState(!0),i=n(r=>r.favorite.favorite);return e.jsx(x,{children:e.jsx(s,{children:i.length>0?e.jsx(d,{children:a&&i.map(r=>e.jsx(p,{advert:r},r.id))}):e.jsx(m,{})})})};export{u as default};
