import{s as e,j as t,r as o,u as n,C as s}from"./index-0e73fd05.js";import{C as p}from"./CatalogueCard-b954bdcc.js";const d=e.ul`

   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
   
  `,x=e.div`
  height: 100vh;
  margin: 0 auto;
  /* background: linear-gradient(
    -60deg,
    rgb(23, 26, 32) 49%,
    rgb(187, 206, 226) 100%,
    rgb(206, 206, 206) 70%
  ); */
`,c="/car-rental-service/assets/Nocar-bdb983a9.png",g=e.section`
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
`,l=e.img`
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
`,h=e.p`
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
`,m=()=>t.jsxs(g,{children:[t.jsx(h,{children:"No cars available"}),t.jsx(l,{src:c,alt:"set Of Cars"})]}),v=()=>{const[a,f]=o.useState(!0),i=n(r=>r.favorite.favorite);return t.jsx(x,{children:t.jsx(s,{children:i.length>0?t.jsx(d,{children:a&&i.map(r=>t.jsx(p,{advert:r},r.id))}):t.jsx(m,{})})})};export{v as default};
