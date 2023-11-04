import{s as r,r as s,u as i,j as a,C as p}from"./index-3d741ae8.js";import{C as n}from"./CatalogueList.styled-747fbb20.js";const l=r.ul`

   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
  `,d=()=>{const[o,x]=s.useState(!0),e=i(t=>t.favorite.favorite);return console.log("FAVORITE на сторінці Фейворит",e),a.jsx(p,{children:a.jsx(l,{children:o&&e.map(t=>a.jsx(n,{advert:t},t.id))})})};export{d as default};
