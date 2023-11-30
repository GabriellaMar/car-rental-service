import{s as i,j as e,C as a}from"./index-265b4502.js";const o=i.section`
padding: 30px 20px;
background: linear-gradient(
    -125deg,
    rgb(75, 77, 86) 47%,
    rgb(142, 142, 143) 98%,
    rgb(179, 179, 180) 130%
  );
    background-color:  rgb(96, 98, 109) ; 
  
`,t=i.li`
position: relative;
    width: 120px;
    height: 120px;
    
   background:  rgb(65, 67, 76) ;
   /* background:  rgb(76, 77, 87) ; */
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

    &:hover,
    &:focus {
        transform: scale(1.08);
        box-shadow: 1px 1px 8px rgba(174, 173, 173, 0.872); 
        transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--white);
    }
`,s=i.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
`,r=i.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: block;
  margin: 0 auto;
  padding: 0;
  width: 70px;
  transform: translate(-50% -50%);

  @media (min-width: 768px) {
    display: block;
    /* width: 40%; */
  }
  @media (min-width: 1440px) {
    display: block;
    /* width: 30%; */
  }
`,c=i.h2`
  
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 25px;
    /* text-align: center; */
    color: #b7bed0;
    margin-bottom: 20px;
`,l="/car-rental-service/assets/car-wheel-971b36df.png",d="/car-rental-service/assets/towing-vehicle-a7db3985.png",x="/car-rental-service/assets/icon-fuel-0655b89a.png",h="/car-rental-service/assets/icon-driver-f8481cc2.png",g="/car-rental-service/assets/icon-car-wash-4efe9c62.png",p=()=>e.jsxs(o,{children:[e.jsx(c,{children:"Aditional services"}),e.jsxs(s,{children:[e.jsx(t,{children:e.jsx(r,{src:l,alt:"Tire",fill:"#2200ff"})}),e.jsx(t,{children:e.jsx(r,{src:h,alt:"Driver",fill:"#2200ff"})}),e.jsx(t,{children:e.jsx(r,{src:x,alt:"Fuel Delivery",fill:"#2200ff"})}),e.jsx(t,{children:e.jsx(r,{src:d,alt:"Tow truk",width:150,height:80,fill:"#2200ff"})}),e.jsx(t,{children:e.jsx(r,{src:g,alt:"Tire",fill:"#2200ff"})})]})]}),f="/car-rental-service/assets/BMW-7ee50d55.jpg",m=i.h1`
   color: #e1e0e0;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.6;
  text-align: right;
  text-shadow: 1px 1px 2px #5c5757;
  margin-left:  400px;
  /* margin: 0 auto; */
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
`,b=i.p`
  color: var(--blue);
  font-weight: 600;
  font-size: 26px;
  line-height: 1.2;
  margin-left: auto;
  /* text-align: right; */
  margin-bottom: 13px;
  

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 1.6;
  }
`,n=i.p`
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

`,u=i.a`
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
    

`,w=i.div`

  display: flex;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${f});

  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;i.div`
    /* padding-top: 100px; */
    /* max-width: 700px;  */
    
`;const j=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsxs(a,{children:[e.jsx(m,{children:"Best Cars For The Best Journey"}),e.jsx(b,{children:" Welcome to Car Rental Service!"}),e.jsx(n,{children:"We Provide Best Cars With The Best Prices. We Make Your Drive Memorable. "}),e.jsx(n,{children:" Enjoy Your Holiday With Us"}),e.jsx(u,{href:"tel:+380730000000",children:"Rental car"})]})}),e.jsx(p,{})]});export{j as default};
