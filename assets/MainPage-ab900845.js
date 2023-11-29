import{s as t,j as e,C as n}from"./index-3f14ecbc.js";const o="/car-rental-service/assets/BMW-7ee50d55.jpg",r=t.h1`
   color: #e1e0e0;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.6;
  text-align: right;
  text-shadow: 1px 1px 2px #5c5757;
  margin-left:  400px;
  margin: 0 auto;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 58px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 66px;
    line-height: 1.2;
    font-weight: 700;
     padding-top: 15px; 
  }
`,a=t.p`
  color: var(--blue);
  font-weight: 600;
  font-size: 26px;
  line-height: 1.2;
  text-align: right;
  margin-bottom: 13px;
  

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 1.6;
  }
`,i=t.p`
   color: #b0bbd6;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  width: 900px;
  text-align: right;
  margin-left: auto;
  
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
    line-height: 1.6;
    /* margin-left: auto; */

  }

`,d=t.a`
display: block;
padding: 12px 50px;
max-width: 100px;
text-align: center;
background-color: #980d0dd3;
color:  #eceaea;
border-color: transparent;
border-radius: 12px;
margin-top: 16px;
margin-left: auto;
margin-right: 20px;
margin-bottom: 15px;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);


&:hover,
&:focus {
  transform: scale(1.05);

  background-color: #8f0c0cd2;
}
    

`,h=t.div`

  display: flex;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${o});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;t.div`
    /* padding-top: 100px; */
    /* max-width: 700px;  */
    
`;const l=()=>e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Best Cars For The Best Journey"}),e.jsx(a,{children:" Welcome to Car Rental Service!"}),e.jsx(i,{children:"We Provide Best Cars With The Best Prices. We Make Your Drive Memorable. "}),e.jsx(i,{children:" Enjoy Your Holiday With Us"}),e.jsx(d,{href:"tel:+380730000000",children:"Rental car"})]})});export{l as default};
