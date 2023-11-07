import{R as Y,b as we,c as Ce,j as r,t as g,s as l,r as m,d as Ee,u as ke,e as Te,g as je}from"./index-5d43bff1.js";import{C as Le}from"./RentalCarBtn.styled-4a423d75.js";function ge(e=Y){const t=e===Y?we:Ce(e);return function(){const{store:n}=t();return n}}const Ie=ge();function Me(e=Y){const t=e===Y?Ie:ge(e);return function(){return t().dispatch}}const _e=Me(),ze=()=>r.jsx(Le,{href:"tel:+380730000000",children:"Rental car"}),ht=e=>e.advert.advert,Re=e=>e.favorite.favorite;var me={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ie=g.createContext&&g.createContext(me),S=globalThis&&globalThis.__assign||function(){return S=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},S.apply(this,arguments)},De=globalThis&&globalThis.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(i[n[c]]=e[n[c]]);return i};function be(e){return e&&e.map(function(t,i){return g.createElement(t.tag,S({key:i},t.attr),be(t.child))})}function V(e){return function(t){return g.createElement(Ne,S({attr:S({},e.attr)},t),be(e.child))}}function Ne(e){var t=function(i){var n=e.attr,c=e.size,p=e.title,o=De(e,["attr","size","title"]),a=c||i.size||"1em",y;return i.className&&(y=i.className),e.className&&(y=(y?y+" ":"")+e.className),g.createElement("svg",S({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,o,{className:y,style:S(S({color:e.color||i.color},i.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),p&&g.createElement("title",null,p),e.children)};return ie!==void 0?g.createElement(ie.Consumer,null,function(i){return t(i)}):t(me)}function Oe(e){return V({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.5,5c-2.892,0-5.327,1.804-6.5,2.854C14.827,6.804,12.392,5,9.5,5C5.364,5,2,8.364,2,12.5c0,2.59,2.365,4.947,2.46,5.041 L16,29.081l11.534-11.534C27.635,17.447,30,15.09,30,12.5C30,8.364,26.636,5,22.5,5z"}}]})(e)}function Be(e){return V({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 9.5 5 C 5.363281 5 2 8.402344 2 12.5 C 2 13.929688 2.648438 15.167969 3.25 16.0625 C 3.851563 16.957031 4.46875 17.53125 4.46875 17.53125 L 15.28125 28.375 L 16 29.09375 L 16.71875 28.375 L 27.53125 17.53125 C 27.53125 17.53125 30 15.355469 30 12.5 C 30 8.402344 26.636719 5 22.5 5 C 19.066406 5 16.855469 7.066406 16 7.9375 C 15.144531 7.066406 12.933594 5 9.5 5 Z M 9.5 7 C 12.488281 7 15.25 9.90625 15.25 9.90625 L 16 10.75 L 16.75 9.90625 C 16.75 9.90625 19.511719 7 22.5 7 C 25.542969 7 28 9.496094 28 12.5 C 28 14.042969 26.125 16.125 26.125 16.125 L 16 26.25 L 5.875 16.125 C 5.875 16.125 5.390625 15.660156 4.90625 14.9375 C 4.421875 14.214844 4 13.273438 4 12.5 C 4 9.496094 6.457031 7 9.5 7 Z"}}]})(e)}const Pe=l.div`
    display: flex;
    justify-content: space-between;
 `,Fe=l.div`
    max-width: 274px;
    max-height: 426px;
    margin: 0 auto;
 `,Se=l.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`,re=l.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    /* color: rgba(18, 20, 23, 0.5); */
    margin-bottom: 4px;
`,H=l.li`
  color: var(--text-black);
 `,$e=l.button`
   padding: 12px 98px;
   border: transparent;
   border-radius: 12px;
   background-color: var(--blue);
   color: #FFFFFF;
   margin-top: 24px;
   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
   background-color: var(--hover-blue)
}
`,Ae=l.div`
   position: relative;
   margin-bottom: 14px;
   /* object-fit: cover; */
   width: 100%;
   /* width: 274px; */
   

`,He=l.img`
display: block;
   border-radius: 13px;
   max-width: 274px;
   /* max-height: 100%; */
    height: 268px; 
   
`,We=l.h3`
   font-size: 16px;
   font-weight: 500;
   line-height: calc(24/16);
   color: var(--black)

   span {
      color:  var(--blue);
    }
`,qe=l.button`
position: absolute;
   top: 16px;
   right: 16px;
   width: 18px;
   height: 18px;
   border: none;
  cursor: pointer;
  background-color: transparent;
`,Qe=l(Be)`
   display: block;
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--heart-white);
   
  
`,Ve=l(Oe)`
  display: block;
   /* top: 16px;
   right: 16px; */
   width: 18px;
   height: 18px;
   color: var(--blue);
  
`;function Ke(e){return V({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(e)}const Ue=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 5;
`,Xe=l.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  max-width: 541px;
  max-height: 752px; 
  /* height: 90vh; */

  background-color: var(--white);
  border-radius: 24px;
  /* border: 1px solid rgba(220, 227, 229, 0.8); */
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
   padding: 40px; 
  overflow: hidden;
  overflow-y: scroll;


  @media screen and (max-width: 768px) {
    max-width: 441px;
 
  }

  @media screen and (min-width: 1440px) {
    max-width: 541px;
  max-height: 752px; 
    margin: 0 auto;
    /* padding: 32px; */
  }
`,Ze=l(Ke)`
  position: relative;
  width: 24px;
  height: 24px;
  top: 0px;
  left: 520px;
  margin-left: auto;
`,Ye=l.div`
  /* max-width: 541px;
  max-height: 752px;
  background-color: #FFFFFF; */
`,Ge=l.img`
width: 100%;
margin-bottom: 14px;
    /* max-width: 461px;
    max-height: 248px; */

`,Je=l.h2`
    font-size: 18px;
    font-weight: 500;
    line-height: calc(24/18);
    color: var(--black);
    margin-bottom: 8px;

   span {
      color: var(--blue);
    }
`,ae=l.ul`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 4px;
    /* color: rgba(18, 20, 23, 0.5); */
 `,W=l.li`
    color: var(--text-black);
 `,se=l.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 24px;
    margin-bottom: 8px;
 `,et=l.p`
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20/14);
    color: var(--black);
    margin-top: 10px;
    margin-bottom:24px;
 `,le=l.ul`
    display: flex;
    gap: 36px;
    margin-bottom: 8px;
 `,Q=l.li`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    color: var(--gray);
    span {
        color: var(--blue);
    }
 `,ce=l.p`
    font-weight: 400;
    font-size: 12px;
    line-height: calc(18/12);
    margin-bottom: 4px;
    color: var(--text-black);
 `,tt=({data:e,country:t,city:i})=>{if(!e)return;const{id:n,year:c,make:p,model:o,type:a,img:y,description:C,fuelConsumption:E,engineSize:v,accessories:j,functionalities:u,rentalPrice:h,rentalCompany:x,address:s,mileage:d,rentalConditions:w}=e,k=w.split(`
`),f=parseInt(k[0].match(/\d+/));return r.jsxs(Ye,{children:[r.jsx(Ge,{src:y,alt:p}),r.jsxs(Je,{children:[p," ",r.jsx("span",{children:o}),", ",c," "]}),r.jsxs(ae,{children:[r.jsxs(W,{children:[i," | "]}),r.jsxs(W,{children:[t," | "]}),r.jsxs(W,{children:["id: ",n," | "]}),r.jsxs(W,{children:[c," |"]}),r.jsxs(W,{children:["Type: ",a,"  "]})]}),r.jsxs(ae,{children:[r.jsxs(W,{children:["Fuel Consumption: ",E," |"]}),r.jsxs(W,{children:["Engine Size: ",v," "]})]}),r.jsx(et,{children:C}),r.jsx(se,{children:"Accessories and functionalities:"}),r.jsx(ce,{children:j.join(" | ")}),r.jsx(ce,{children:u.join(" | ")}),r.jsx(se,{children:"Rental Conditions: "}),r.jsxs(le,{children:[r.jsxs(Q,{children:["Minimum age : ",r.jsx("span",{children:f})]}),r.jsx(Q,{children:k[1]})]}),r.jsxs(le,{children:[r.jsxs(Q,{children:[k[2]," "]}),r.jsxs(Q,{children:["Mileage: ",r.jsx("span",{children:d})]}),r.jsxs(Q,{children:["Price: ",r.jsx("span",{children:h})]})]}),r.jsx(ze,{})]})},nt=document.querySelector("#modal-root"),ot=({closeModal:e,data:t,country:i,city:n})=>{const c=p=>{p.currentTarget===p.target&&e()};return m.useEffect(()=>{const p=o=>{o.key==="Escape"&&e()};return window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[e]),Ee.createPortal(r.jsx(Ue,{onClick:c,children:r.jsxs(Xe,{children:[r.jsx(Ze,{onClick:e}),r.jsx(tt,{data:t,country:i,city:n})]})}),nt)},ft=({advert:e})=>{const{id:t,year:i,make:n,model:c,type:p,img:o,description:a,fuelConsumption:y,engineSize:C,accessories:E,functionalities:v,rentalPrice:j,rentalCompany:u,address:h,mileage:x,rentalConditions:s}=e,[d,w]=m.useState(!1),f=ke(Re).some(L=>L.id===e.id),b=_e(),I=h.split(" "),R=I[I.length-1],T=I[I.length-1-1],D=()=>{w(!d),d?document.body.style.overflow="hidden":document.body.style.overflow="auto"},P=()=>{console.log("ADDDDDD!!!"),b(Te(e))},N=()=>{console.log(t),console.log("Delete!!!"),b(je(t))};return r.jsxs(Fe,{children:[r.jsxs(Ae,{children:[r.jsx(He,{src:o,alt:n}),r.jsx(qe,{onClick:f?N:P,type:"button",children:f?r.jsx(Ve,{}):r.jsx(Qe,{})})]}),r.jsxs(Pe,{children:[r.jsx(Se,{children:r.jsxs(We,{children:[n," ",r.jsx("span",{children:c}),", ",i]})}),r.jsx("p",{children:j})]}),r.jsxs("div",{children:[r.jsxs(re,{children:[r.jsxs(H,{children:[T," | "]}),r.jsxs(H,{children:[R," | "]}),r.jsxs(H,{children:[u,"  "]})]}),r.jsxs(re,{children:[r.jsx(H,{children:p}),r.jsxs(H,{children:[c," "]}),r.jsx(H,{children:x}),r.jsx(H,{children:v[0]})]}),r.jsx($e,{type:"button",onClick:D,children:"Learn more"}),d&&r.jsx(ot,{closeModal:D,data:e,country:R,city:T})]})]})},gt=l.ul`
   display: flex;
   flex-wrap: wrap;
   column-gap: 20px;
   row-gap: 30px;
   padding : 20px;
`;function ye(e){var t,i,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=ye(e[t]))&&(n&&(n+=" "),n+=i);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function F(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=ye(e))&&(n&&(n+=" "),n+=t);return n}const X=e=>typeof e=="number"&&!isNaN(e),G=e=>typeof e=="string",z=e=>typeof e=="function",Z=e=>G(e)||z(e)?e:null,te=e=>m.isValidElement(e)||G(e)||z(e)||X(e);function it(e,t,i){i===void 0&&(i=300);const{scrollHeight:n,style:c}=e;requestAnimationFrame(()=>{c.minHeight="initial",c.height=n+"px",c.transition=`all ${i}ms`,requestAnimationFrame(()=>{c.height="0",c.padding="0",c.margin="0",setTimeout(t,i)})})}function J(e){let{enter:t,exit:i,appendPosition:n=!1,collapse:c=!0,collapseDuration:p=300}=e;return function(o){let{children:a,position:y,preventExitTransition:C,done:E,nodeRef:v,isIn:j}=o;const u=n?`${t}--${y}`:t,h=n?`${i}--${y}`:i,x=m.useRef(0);return m.useLayoutEffect(()=>{const s=v.current,d=u.split(" "),w=k=>{k.target===v.current&&(s.dispatchEvent(new Event("d")),s.removeEventListener("animationend",w),s.removeEventListener("animationcancel",w),x.current===0&&k.type!=="animationcancel"&&s.classList.remove(...d))};s.classList.add(...d),s.addEventListener("animationend",w),s.addEventListener("animationcancel",w)},[]),m.useEffect(()=>{const s=v.current,d=()=>{s.removeEventListener("animationend",d),c?it(s,E,p):E()};j||(C?d():(x.current=1,s.className+=` ${h}`,s.addEventListener("animationend",d)))},[j]),g.createElement(g.Fragment,null,a)}}function de(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const q={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const i=this.list.get(e).filter(n=>n!==t);return this.list.set(e,i),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const i=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(i)})}},U=e=>{let{theme:t,type:i,...n}=e;return g.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${i})`,...n})},ne={info:function(e){return g.createElement(U,{...e},g.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return g.createElement(U,{...e},g.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return g.createElement(U,{...e},g.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return g.createElement(U,{...e},g.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return g.createElement("div",{className:"Toastify__spinner"})}};function rt(e){const[,t]=m.useReducer(u=>u+1,0),[i,n]=m.useState([]),c=m.useRef(null),p=m.useRef(new Map).current,o=u=>i.indexOf(u)!==-1,a=m.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:u=>p.get(u)}).current;function y(u){let{containerId:h}=u;const{limit:x}=a.props;!x||h&&a.containerId!==h||(a.count-=a.queue.length,a.queue=[])}function C(u){n(h=>u==null?[]:h.filter(x=>x!==u))}function E(){const{toastContent:u,toastProps:h,staleId:x}=a.queue.shift();j(u,h,x)}function v(u,h){let{delay:x,staleId:s,...d}=h;if(!te(u)||function(L){return!c.current||a.props.enableMultiContainer&&L.containerId!==a.props.containerId||p.has(L.toastId)&&L.updateId==null}(d))return;const{toastId:w,updateId:k,data:f}=d,{props:b}=a,I=()=>C(w),R=k==null;R&&a.count++;const T={...b,style:b.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(d).filter(L=>{let[O,M]=L;return M!=null})),toastId:w,updateId:k,data:f,closeToast:I,isIn:!1,className:Z(d.className||b.toastClassName),bodyClassName:Z(d.bodyClassName||b.bodyClassName),progressClassName:Z(d.progressClassName||b.progressClassName),autoClose:!d.isLoading&&(D=d.autoClose,P=b.autoClose,D===!1||X(D)&&D>0?D:P),deleteToast(){const L=de(p.get(w),"removed");p.delete(w),q.emit(4,L);const O=a.queue.length;if(a.count=w==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),O>0){const M=w==null?a.props.limit:1;if(O===1||M===1)a.displayedToast++,E();else{const $=M>O?O:M;a.displayedToast=$;for(let _=0;_<$;_++)E()}}else t()}};var D,P;T.iconOut=function(L){let{theme:O,type:M,isLoading:$,icon:_}=L,B=null;const A={theme:O,type:M};return _===!1||(z(_)?B=_(A):m.isValidElement(_)?B=m.cloneElement(_,A):G(_)||X(_)?B=_:$?B=ne.spinner():(K=>K in ne)(M)&&(B=ne[M](A))),B}(T),z(d.onOpen)&&(T.onOpen=d.onOpen),z(d.onClose)&&(T.onClose=d.onClose),T.closeButton=b.closeButton,d.closeButton===!1||te(d.closeButton)?T.closeButton=d.closeButton:d.closeButton===!0&&(T.closeButton=!te(b.closeButton)||b.closeButton);let N=u;m.isValidElement(u)&&!G(u.type)?N=m.cloneElement(u,{closeToast:I,toastProps:T,data:f}):z(u)&&(N=u({closeToast:I,toastProps:T,data:f})),b.limit&&b.limit>0&&a.count>b.limit&&R?a.queue.push({toastContent:N,toastProps:T,staleId:s}):X(x)?setTimeout(()=>{j(N,T,s)},x):j(N,T,s)}function j(u,h,x){const{toastId:s}=h;x&&p.delete(x);const d={content:u,props:h};p.set(s,d),n(w=>[...w,s].filter(k=>k!==x)),q.emit(4,de(d,d.props.updateId==null?"added":"updated"))}return m.useEffect(()=>(a.containerId=e.containerId,q.cancelEmit(3).on(0,v).on(1,u=>c.current&&C(u)).on(5,y).emit(2,a),()=>{p.clear(),q.emit(3,a)}),[]),m.useEffect(()=>{a.props=e,a.isToastActive=o,a.displayedToast=i.length}),{getToastToRender:function(u){const h=new Map,x=Array.from(p.values());return e.newestOnTop&&x.reverse(),x.forEach(s=>{const{position:d}=s.props;h.has(d)||h.set(d,[]),h.get(d).push(s)}),Array.from(h,s=>u(s[0],s[1]))},containerRef:c,isToastActive:o}}function pe(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ue(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function at(e){const[t,i]=m.useState(!1),[n,c]=m.useState(!1),p=m.useRef(null),o=m.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=m.useRef(e),{autoClose:y,pauseOnHover:C,closeToast:E,onClick:v,closeOnClick:j}=e;function u(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",w),document.addEventListener("touchmove",d),document.addEventListener("touchend",w);const b=p.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=b.getBoundingClientRect(),b.style.transition="",o.x=pe(f.nativeEvent),o.y=ue(f.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(f){if(o.boundingRect){const{top:b,bottom:I,left:R,right:T}=o.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=R&&o.x<=T&&o.y>=b&&o.y<=I?s():x()}}function x(){i(!0)}function s(){i(!1)}function d(f){const b=p.current;o.canDrag&&b&&(o.didMove=!0,t&&s(),o.x=pe(f),o.y=ue(f),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,b.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function w(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",w);const f=p.current;if(o.canDrag&&o.didMove&&f){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return c(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}m.useEffect(()=>{a.current=e}),m.useEffect(()=>(p.current&&p.current.addEventListener("d",x,{once:!0}),z(e.onOpen)&&e.onOpen(m.isValidElement(e.children)&&e.children.props),()=>{const f=a.current;z(f.onClose)&&f.onClose(m.isValidElement(f.children)&&f.children.props)}),[]),m.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||s(),window.addEventListener("focus",x),window.addEventListener("blur",s)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",s))}),[e.pauseOnFocusLoss]);const k={onMouseDown:u,onTouchStart:u,onMouseUp:h,onTouchEnd:h};return y&&C&&(k.onMouseEnter=s,k.onMouseLeave=x),j&&(k.onClick=f=>{v&&v(f),o.canCloseOnClick&&E()}),{playToast:x,pauseToast:s,isRunning:t,preventExitTransition:n,toastRef:p,eventHandlers:k}}function ve(e){let{closeToast:t,theme:i,ariaLabel:n="close"}=e;return g.createElement("button",{className:`Toastify__close-button Toastify__close-button--${i}`,type:"button",onClick:c=>{c.stopPropagation(),t(c)},"aria-label":n},g.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},g.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function st(e){let{delay:t,isRunning:i,closeToast:n,type:c="default",hide:p,className:o,style:a,controlledProgress:y,progress:C,rtl:E,isIn:v,theme:j}=e;const u=p||y&&C===0,h={...a,animationDuration:`${t}ms`,animationPlayState:i?"running":"paused",opacity:u?0:1};y&&(h.transform=`scaleX(${C})`);const x=F("Toastify__progress-bar",y?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${j}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":E}),s=z(o)?o({rtl:E,type:c,defaultClassName:x}):F(x,o);return g.createElement("div",{role:"progressbar","aria-hidden":u?"true":"false","aria-label":"notification timer",className:s,style:h,[y&&C>=1?"onTransitionEnd":"onAnimationEnd"]:y&&C<1?null:()=>{v&&n()}})}const lt=e=>{const{isRunning:t,preventExitTransition:i,toastRef:n,eventHandlers:c}=at(e),{closeButton:p,children:o,autoClose:a,onClick:y,type:C,hideProgressBar:E,closeToast:v,transition:j,position:u,className:h,style:x,bodyClassName:s,bodyStyle:d,progressClassName:w,progressStyle:k,updateId:f,role:b,progress:I,rtl:R,toastId:T,deleteToast:D,isIn:P,isLoading:N,iconOut:L,closeOnClick:O,theme:M}=e,$=F("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${C}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":O}),_=z(h)?h({rtl:R,position:u,type:C,defaultClassName:$}):F($,h),B=!!I||!a,A={closeToast:v,type:C,theme:M};let K=null;return p===!1||(K=z(p)?p(A):m.isValidElement(p)?m.cloneElement(p,A):ve(A)),g.createElement(j,{isIn:P,done:D,position:u,preventExitTransition:i,nodeRef:n},g.createElement("div",{id:T,onClick:y,className:_,...c,style:x,ref:n},g.createElement("div",{...P&&{role:b},className:z(s)?s({type:C}):F("Toastify__toast-body",s),style:d},L!=null&&g.createElement("div",{className:F("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},L),g.createElement("div",null,o)),K,g.createElement(st,{...f&&!B?{key:`pb-${f}`}:{},rtl:R,theme:M,delay:a,isRunning:t,isIn:P,closeToast:v,hide:E,type:C,style:k,className:w,controlledProgress:B,progress:I||0})))},ee=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},ct=J(ee("bounce",!0));J(ee("slide",!0));J(ee("zoom"));J(ee("flip"));const xe=m.forwardRef((e,t)=>{const{getToastToRender:i,containerRef:n,isToastActive:c}=rt(e),{className:p,style:o,rtl:a,containerId:y}=e;function C(E){const v=F("Toastify__toast-container",`Toastify__toast-container--${E}`,{"Toastify__toast-container--rtl":a});return z(p)?p({position:E,rtl:a,defaultClassName:v}):F(v,Z(p))}return m.useEffect(()=>{t&&(t.current=n.current)},[]),g.createElement("div",{ref:n,className:"Toastify",id:y},i((E,v)=>{const j=v.length?{...o}:{...o,pointerEvents:"none"};return g.createElement("div",{className:C(E),style:j,key:`container-${E}`},v.map((u,h)=>{let{content:x,props:s}=u;return g.createElement(lt,{...s,isIn:c(s.toastId),style:{...s.style,"--nth":h+1,"--len":v.length},key:`toast-${s.key}`},x)}))}))});xe.displayName="ToastContainer",xe.defaultProps={position:"top-right",transition:ct,autoClose:5e3,closeButton:ve,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let he,oe=new Map,fe=[];q.on(2,e=>{he=e.containerId||e,oe.set(he,e),fe.forEach(t=>{q.emit(0,t.content,t.options)}),fe=[]}).on(3,e=>{oe.delete(e.containerId||e),oe.size===0&&q.off(0).off(1).off(5)});function dt(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function pt(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}const mt=l.section`
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
`,bt=l.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`,yt=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,vt=l.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,wt=l.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  width: 224px;
  /* max-height: 272px; */
  height: 272px;
  overflow: auto;
  padding: 8px 8px 8px 18px;

  z-index: 10;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
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
    background-color: #fff;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
`,Ct=l.ul`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,Et=l.li`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: red;
  /* color: rgba(18, 20, 23, 0.2); */
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: rgba(18, 20, 23, 0.8);
  }
`,kt=l.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #fff;
  margin-bottom: 8px;
`,Tt=l.input`
  display: flex;
  width: 224px;
  padding: 10px 10px 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #121417;
  }
  @media (min-width: 768px) {
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
  }
`,jt=l(dt)`
  width: 20px;
  height: 20px;
  margin: 0;
  color: #121417;
`,Lt=l(pt)`
  width: 20px;
  height: 20px;
  margin: 0;

  color: #121417;
`,It=l.button`
  position: absolute;
  padding: 0;
  right: 14px;
  top: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,Mt=l.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  /* max-height: 188px; */
  height: 188px;
  overflow: auto;
  padding: 8px 8px 8px 18px;

  z-index: 10;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
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
    background-color: #fff;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
`,_t=l.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 120px;
  margin-right: auto;
`,zt=l.li`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  /* color: rgba(18, 20, 23, 0.2); */
  color: red;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: rgba(18, 20, 23, 0.8);
  }
`,Rt=l.input`
  display: flex;
  width: 125px;
  padding: 10px 10px 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #121417;
  }
  @media (min-width: 768px) {
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
  }
`,Dt=l.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Nt=l.input`
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #121417;
  }
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 18px;
  }
`,Ot=l.input`
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &::placeholder {
    color: #121417;
  }
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 18px;
  }
`,Bt=l.button`
  padding: 10px 20px;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  background: #5a7aaf;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #445c84;
  }
  @media (min-width: 768px) {
    padding: 13px 30px;
  }
  @media (min-width: 1440px) {
    padding: 13px 44px;
  }
`;export{Lt as A,ft as C,mt as F,bt as I,kt as L,Tt as M,Rt as P,Bt as S,yt as a,vt as b,jt as c,wt as d,Ct as e,Et as f,It as g,Mt as h,_t as i,zt as j,Dt as k,Nt as l,Ot as m,gt as n,ht as s,_e as u};
