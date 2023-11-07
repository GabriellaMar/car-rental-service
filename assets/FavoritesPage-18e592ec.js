import{s as r,r as s,u as i,j as a,C as p}from"./index-5d43bff1.js";import{C as n}from"./Search.style-5b2c50d6.js";import"./RentalCarBtn.styled-4a423d75.js";const l=r.ul`

   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
  `,f=()=>{const[o,x]=s.useState(!0),e=i(t=>t.favorite.favorite);return console.log("FAVORITE на сторінці Фейворит",e),a.jsx(p,{children:a.jsx(l,{children:o&&e.map(t=>a.jsx(n,{advert:t},t.id))})})};export{f as default};
