import{j as n}from"./jsx-runtime-CKrituN3.js";import{r as X,s as D,f as Z,a as z,c as S,b as Me}from"./index-CEPEh0dU.js";import{v as ze,y as Be,z as Ve,u as ce,_ as q,A as We,D as Oe,H as de,J as Ue,c as pe,a as ue,g as fe,s as B,h as O,i as he,j as w,K as He,M as me,O as Ye,P as Qe,Q as se,U as Xe,r as Ze,W as Ge,d as Q,X as Je,m as ge,L as xe,k as g,q as Ke,C as ye,t as et,N as ie,o as V,S as $,Y as tt,T as rt,I as nt,l as ve,V as ot,n as at,E as Ce,F as st,p as it}from"./VisibilityOff-D6BBgNQi.js";import{_ as x}from"./inheritsLoose-DMKMEUQT.js";import{r as f}from"./index-CBqU2yxZ.js";function lt(t,e,o,r,a){const[i,c]=f.useState(()=>a&&o?o(t).matches:r?r(t).matches:e);return Ve(()=>{let l=!0;if(!o)return;const p=o(t),s=()=>{l&&c(p.matches)};return s(),p.addListener(s),()=>{l=!1,p.removeListener(s)}},[t,o]),i}const be=f.useSyncExternalStore;function ct(t,e,o,r,a){const i=f.useCallback(()=>e,[e]),c=f.useMemo(()=>{if(a&&o)return()=>o(t).matches;if(r!==null){const{matches:u}=r(t);return()=>u}return i},[i,t,r,a,o]),[l,p]=f.useMemo(()=>{if(o===null)return[i,()=>()=>{}];const u=o(t);return[()=>u.matches,m=>(u.addListener(m),()=>{u.removeListener(m)})]},[i,o,t]);return be(p,l,c)}function dt(t,e={}){const o=ze(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:i=r?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:l=!1}=Be({name:"MuiUseMediaQuery",props:e,theme:o});let p=typeof t=="function"?t(o):t;return p=p.replace(/^@media( ?)/m,""),(be!==void 0?ct:lt)(p,a,i,c,l)}function pt(t){return ce}const ut=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],ft=["component","slots","slotProps"],ht=["component"];function mt(t,e){const{className:o,elementType:r,ownerState:a,externalForwardedProps:i,getSlotOwnerState:c,internalForwardedProps:l}=e,p=q(e,ut),{component:s,slots:u={[t]:void 0},slotProps:m={[t]:void 0}}=i,d=q(i,ft),v=u[t]||r,C=We(m[t],a),k=Oe(x({className:o},p,{externalForwardedProps:t==="root"?d:void 0,externalSlotProps:C})),{props:{component:j},internalRef:E}=k,R=q(k.props,ht),P=de(E,C==null?void 0:C.ref,e.ref),b=c?c(R):{},F=x({},a,b),T=t==="root"?j||s:j,y=Ue(v,x({},t==="root"&&!s&&!u[t]&&l,t!=="root"&&!u[t]&&l,R,T&&{as:T},{ref:P}),F);return Object.keys(b).forEach(W=>{delete y[W]}),[v,y]}const gt=pe(n.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function xt(t){return ue("MuiAvatar",t)}fe("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const yt=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],vt=pt(),Ct=t=>{const{classes:e,variant:o,colorDefault:r}=t;return he({root:["root",o,r&&"colorDefault"],img:["img"],fallback:["fallback"]},xt,e)},bt=B("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],o.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:x({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:x({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),wt=B("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),kt=B(gt,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function jt({crossOrigin:t,referrerPolicy:e,src:o,srcSet:r}){const[a,i]=f.useState(!1);return f.useEffect(()=>{if(!o&&!r)return;i(!1);let c=!0;const l=new Image;return l.onload=()=>{c&&i("loaded")},l.onerror=()=>{c&&i("error")},l.crossOrigin=t,l.referrerPolicy=e,l.src=o,r&&(l.srcset=r),()=>{c=!1}},[t,e,o,r]),a}const It=f.forwardRef(function(e,o){const r=vt({props:e,name:"MuiAvatar"}),{alt:a,children:i,className:c,component:l="div",slots:p={},slotProps:s={},imgProps:u,sizes:m,src:d,srcSet:v,variant:C="circular"}=r,k=q(r,yt);let j=null;const E=jt(x({},u,{src:d,srcSet:v})),R=d||v,P=R&&E!=="error",b=x({},r,{colorDefault:!P,component:l,variant:C}),F=Ct(b),[T,y]=mt("img",{className:F.img,elementType:wt,externalForwardedProps:{slots:p,slotProps:{img:x({},u,s.img)}},additionalProps:{alt:a,src:d,srcSet:v,sizes:m},ownerState:b});return P?j=n.jsx(T,x({},y)):i||i===0?j=i:R&&a?j=a[0]:j=n.jsx(kt,{ownerState:b,className:F.fallback}),n.jsx(bt,x({as:l,ownerState:b,className:O(F.root,c),ref:o},k,{children:j}))}),St=It,Pt=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Tt(t,e,o){const r=e.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),i=me(e);let c;if(e.fakeTransform)c=e.fakeTransform;else{const s=i.getComputedStyle(e);c=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let l=0,p=0;if(c&&c!=="none"&&typeof c=="string"){const s=c.split("(")[1].split(")")[0].split(",");l=parseInt(s[4],10),p=parseInt(s[5],10)}return t==="left"?a?`translateX(${a.right+l-r.left}px)`:`translateX(${i.innerWidth+l-r.left}px)`:t==="right"?a?`translateX(-${r.right-a.left-l}px)`:`translateX(-${r.left+r.width-l}px)`:t==="up"?a?`translateY(${a.bottom+p-r.top}px)`:`translateY(${i.innerHeight+p-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-p}px)`:`translateY(-${r.top+r.height-p}px)`}function Dt(t){return typeof t=="function"?t():t}function Y(t,e,o){const r=Dt(o),a=Tt(t,e,r);a&&(e.style.webkitTransform=a,e.style.transform=a)}const Rt=f.forwardRef(function(e,o){const r=w(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:c,appear:l=!0,children:p,container:s,direction:u="down",easing:m=a,in:d,onEnter:v,onEntered:C,onEntering:k,onExit:j,onExited:E,onExiting:R,style:P,timeout:b=i,TransitionComponent:F=Ye}=e,T=q(e,Pt),y=f.useRef(null),W=de(p.ref,y,o),_=h=>I=>{h&&(I===void 0?h(y.current):h(y.current,I))},L=_((h,I)=>{Y(u,h,s),Qe(h),v&&v(h,I)}),N=_((h,I)=>{const ae=se({timeout:b,style:P,easing:m},{mode:"enter"});h.style.webkitTransition=r.transitions.create("-webkit-transform",x({},ae)),h.style.transition=r.transitions.create("transform",x({},ae)),h.style.webkitTransform="none",h.style.transform="none",k&&k(h,I)}),U=_(C),H=_(R),Le=_(h=>{const I=se({timeout:b,style:P,easing:m},{mode:"exit"});h.style.webkitTransition=r.transitions.create("-webkit-transform",I),h.style.transition=r.transitions.create("transform",I),Y(u,h,s),j&&j(h)}),Ae=_(h=>{h.style.webkitTransition="",h.style.transition="",E&&E(h)}),qe=h=>{c&&c(y.current,h)},oe=f.useCallback(()=>{y.current&&Y(u,y.current,s)},[u,s]);return f.useEffect(()=>{if(d||u==="down"||u==="right")return;const h=He(()=>{y.current&&Y(u,y.current,s)}),I=me(y.current);return I.addEventListener("resize",h),()=>{h.clear(),I.removeEventListener("resize",h)}},[u,d,s]),f.useEffect(()=>{d||oe()},[d,oe]),n.jsx(F,x({nodeRef:y,onEnter:L,onEntered:U,onEntering:N,onExit:Le,onExited:Ae,onExiting:H,addEndListener:qe,appear:l,in:d,timeout:b},T,{children:(h,I)=>f.cloneElement(p,x({ref:W,style:x({visibility:h==="exited"&&!d?"hidden":void 0},P,p.props.style)},I))}))}),Ft=Rt;function Nt(t){return ue("MuiDrawer",t)}fe("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const $t=["BackdropProps"],Et=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],we=(t,e)=>{const{ownerState:o}=t;return[e.root,(o.variant==="permanent"||o.variant==="persistent")&&e.docked,e.modal]},_t=t=>{const{classes:e,anchor:o,variant:r}=t,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${Q(o)}`,r!=="temporary"&&`paperAnchorDocked${Q(o)}`]};return he(a,Nt,e)},Lt=B(Xe,{name:"MuiDrawer",slot:"Root",overridesResolver:we})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),le=B("div",{shouldForwardProp:Ze,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:we})({flex:"0 0 auto"}),At=B(Ge,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperAnchor${Q(o.anchor)}`],o.variant!=="temporary"&&e[`paperAnchorDocked${Q(o.anchor)}`]]}})(({theme:t,ownerState:e})=>x({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),ke={left:"right",right:"left",top:"down",bottom:"up"};function qt(t){return["left","right"].indexOf(t)!==-1}function Mt({direction:t},e){return t==="rtl"&&qt(e)?ke[e]:e}const zt=f.forwardRef(function(e,o){const r=ce({props:e,name:"MuiDrawer"}),a=w(),i=Je(),c={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:l="left",BackdropProps:p,children:s,className:u,elevation:m=16,hideBackdrop:d=!1,ModalProps:{BackdropProps:v}={},onClose:C,open:k=!1,PaperProps:j={},SlideProps:E,TransitionComponent:R=Ft,transitionDuration:P=c,variant:b="temporary"}=r,F=q(r.ModalProps,$t),T=q(r,Et),y=f.useRef(!1);f.useEffect(()=>{y.current=!0},[]);const W=Mt({direction:i?"rtl":"ltr"},l),L=x({},r,{anchor:l,elevation:m,open:k,variant:b},T),N=_t(L),U=n.jsx(At,x({elevation:b==="temporary"?m:0,square:!0},j,{className:O(N.paper,j.className),ownerState:L,children:s}));if(b==="permanent")return n.jsx(le,x({className:O(N.root,N.docked,u),ownerState:L,ref:o},T,{children:U}));const H=n.jsx(R,x({in:k,direction:ke[W],timeout:P,appear:y.current},E,{children:U}));return b==="persistent"?n.jsx(le,x({className:O(N.root,N.docked,u),ownerState:L,ref:o},T,{children:H})):n.jsx(Lt,x({BackdropProps:x({},p,v,{transitionDuration:P}),className:O(N.root,N.modal,u),open:k,ownerState:L,onClose:C,hideBackdrop:d,ref:o},T,F,{children:H}))}),Bt=zt,Vt=pe(n.jsx("path",{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78 0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44C16.1 2.67 14.13 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z"}),"TaskAlt"),Wt=({icon:t,active:e=!1,...o})=>{const r=w();return n.jsx(ge,{...o,sx:{width:32,height:32,borderRadius:X.sm,borderStyle:"solid",borderWidth:1,borderColor:"#E8EDFF",background:e?r.palette.primary.main:r.palette.common.white,color:e?r.palette.common.white:"#94ADFF",p:D[1],transition:"all 0.3s",":hover":{background:r.palette.common.white,borderColor:r.palette.primary.main,color:r.palette.primary.main}},children:t})};Wt.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ot="data:image/svg+xml,%3csvg%20width='41'%20height='36'%20viewBox='0%200%2041%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2055'%3e%3cg%20id='Group%2054'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M38.14%2010.4103C37.8014%2010.2221%2037.4308%2010.0653%2037.041%209.95235C36.9068%209.91471%2036.7726%209.88335%2036.6385%209.85198C34.1976%209.35644%2031.8079%2010.887%2031.2009%2013.2581C31.1498%2013.4526%2031.0986%2013.6533%2031.0348%2013.8477C30.8878%2014.3433%2030.7153%2014.8263%2030.53%2015.2968C27.3415%2023.2632%2018.4344%2027.6729%209.89784%2025.2265C9.53363%2025.1199%209.1758%2025.007%208.82437%2024.8815C8.14706%2024.6432%207.49532%2024.3609%206.86914%2024.0473C4.76056%2022.9872%202.15998%2023.6019%200.843716%2025.5339C0.562572%2025.9479%200.338935%2026.4121%200.185584%2026.9139C0.172804%2026.9578%200.160027%2027.0017%200.147247%2027.0519C-0.402261%2029.1157%200.626469%2031.2798%202.56253%2032.252C3.35484%2032.6535%204.17911%2033.0173%205.02254%2033.3372C5.75096%2033.6132%206.49216%2033.8641%207.25892%2034.0837C20.7474%2037.9414%2034.843%2030.7779%2039.533%2017.9752C39.7183%2017.4671%2039.8908%2016.9465%2040.0441%2016.4258C40.1336%2016.1248%2040.2167%2015.8237%2040.2933%2015.5226C40.8045%2013.5278%2039.9483%2011.4139%2038.1273%2010.404L38.14%2010.4103Z'%20fill='%2300D8FF'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.9931%200.593775C19.9292%20-0.359686%2017.9101%20-0.15269%2016.0443%201.12695C14.6706%202.06787%2013.9741%203.44161%2013.6163%205.0098C13.5076%205.48653%2013.4629%205.96954%2013.4246%206.45254C13.3862%206.45254%2013.3735%206.45254%2013.3735%206.45254C13.3223%206.40863%2013.2712%206.37099%2013.2265%206.32709C11.6035%204.9408%209.75693%204.2947%207.60362%204.78398C3.27145%205.7688%201.49511%2010.7431%204.25544%2014.143C5.24583%2015.3599%206.53015%2016.213%207.92948%2016.903C9.34159%2017.5993%2010.8048%2018.1513%2012.3064%2018.628C14.0124%2019.1674%2015.744%2019.6254%2017.5012%2019.9704C18.5618%2020.1774%2019.4947%2019.8825%2020.2998%2019.1737C20.7407%2018.7911%2020.9963%2018.2767%2021.271%2017.7874C22.7151%2015.2407%2024.0122%2012.6312%2024.8556%209.82729C25.2454%208.5351%2025.501%207.21782%2025.4307%205.8629C25.3093%203.45415%2024.2294%201.62878%2021.9931%200.593775Z'%20fill='%232500FF'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Ut=""+new URL("logo-CPUrtU-e.svg",import.meta.url).href,G=({variant:t="standard"})=>n.jsx(xe,{to:"/",draggable:!1,children:n.jsx(g,{sx:{display:"flex",justifyCOntent:"center",alignItems:"center"},children:t==="standard"?n.jsx(g,{component:"img",src:Ut,alt:"Logo da blue",sx:{height:38,width:112},draggable:!1}):n.jsx(g,{component:"img",src:Ot,alt:"Ícone da blue",sx:{height:38,width:33},draggable:!1})})});G.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{variant:{required:!1,tsType:{name:"union",raw:'"icon" | "standard"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"standard"'}]},description:"",defaultValue:{value:'"standard"',computed:!1}}}};const J=({icon:t="",label:e="",to:o="",subItens:r=[],variant:a="standard",onClick:i})=>{const c=w(),[l,p]=f.useState(!1),s=Ke();f.useEffect(()=>{var d;(d=r==null?void 0:r.some)!=null&&d.call(r,v=>{var C,k;return(k=(C=s==null?void 0:s.pathname)==null?void 0:C.includes)==null?void 0:k.call(C,v==null?void 0:v.to)})?p(!0):p(!1)},[r,s==null?void 0:s.pathname]);const u=()=>{p(d=>!d)},m=()=>{i==null||i(),l||p(!0)};return r.length>0?n.jsxs(g,{sx:{width:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs(g,{onClick:a==="icon"?m:u,sx:{width:"100%",height:24,px:D[4],display:"flex",alignItems:"center",gap:D[4],cursor:"pointer",color:l?c.palette.primary.main:c.palette.text.primary,fontSize:Z.sm,fontWeight:l?z.semibold:z.regular,transition:"all 0.1s ease-in-out",whiteSpace:"nowrap",userSelect:"none",":hover":{color:c.palette.primary.main},"> *":{marginRight:a==="icon"?"auto":0}},children:[!!t&&n.jsx(g,{sx:{width:24,height:24},children:t}),a==="standard"&&!!e&&e,n.jsx(g,{sx:{display:a==="icon"?"none":"flex",justifyContent:"end",width:"100%"},children:n.jsx(g,{sx:{backgroundColor:l?c.palette.primary.main:"transparent",color:l?"white":c.palette.text.primary,borderRadius:1,padding:1/7,display:"flex",justifyContent:"center",alignItems:"center",transition:"all 0.1s ease-in-out"},children:n.jsx(ye,{fontSize:"small",style:{transform:l?"rotate(90deg)":"rotate(0deg)",transition:"all 0.1s ease"}})})})]}),a==="standard"&&n.jsx(et,{in:l,sx:{userSelect:"none"},children:n.jsx(g,{sx:{display:"flex",flexDirection:"column",gap:D[6],marginTop:D[4]},children:r==null?void 0:r.map((d,v)=>n.jsx(ie,{to:d==null?void 0:d.to,style:{textDecoration:"none"},draggable:!1,children:({isActive:C})=>n.jsxs(g,{sx:{height:24,width:"100%",px:D[8],display:"flex",justifyContent:"start",alignItems:"center",gap:1,color:C?c.palette.primary.main:c.palette.text.primary,fontSize:14,fontWeight:C?600:400,transition:"all 0.1s ease-in-out",whiteSpace:"nowrap",userSelect:"none",":hover":{color:c.palette.primary.main}},children:[!!(d!=null&&d.icon)&&n.jsx(g,{sx:{height:24,width:24},children:d==null?void 0:d.icon}),a==="standard"&&!!(d!=null&&d.label)&&(d==null?void 0:d.label)]})},v))})})]}):n.jsx(g,{sx:{borderRadius:X.md,display:"flex",flexDirection:"column",overflow:"hidden",userSelect:"none",width:"100%"},children:n.jsx(ie,{to:o,style:{textDecoration:"none"},draggable:!1,children:({isActive:d})=>(console.log(d),n.jsxs(g,{sx:{height:24,width:"100%",px:D[2],display:"flex",alignItems:"center",gap:D[2],color:d?c.palette.primary.main:c.palette.text.primary,fontWeight:d?z.semibold:z.regular,transition:"all 0.1s ease-in-out",whiteSpace:"nowrap",":hover":{color:c.palette.primary.main},"> *":{mr:a==="icon"?"auto":0}},children:[!!t&&n.jsx(g,{sx:{width:24,height:24},children:t}),a==="standard"&&!!e&&n.jsx(V,{variant:"body2",sx:{fontSize:Z.sm,fontWeight:"inherit"},children:e})]}))})})};J.__docgenInfo={description:"",methods:[],displayName:"NavLink",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},module:{required:!1,tsType:{name:"T"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},to:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},subItens:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: ReactNode;
  label: string;
  to: string;
  module: T;
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}},{key:"module",value:{name:"T",required:!0}}]}}],raw:"CollapseNavLinkItem<T>[]"},description:"",defaultValue:{value:"[]",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"icon" | "standard"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"standard"'}]},description:"",defaultValue:{value:'"standard"',computed:!1}}}};const Ht="data:image/svg+xml,%3csvg%20width='309'%20height='309'%20viewBox='0%200%20309%20309'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_889_22471)'%3e%3crect%20width='309'%20height='309'%20fill='%232500CF'/%3e%3crect%20x='80'%20y='58'%20width='148'%20height='149'%20rx='74'%20fill='white'/%3e%3cg%20clip-path='url(%23clip1_889_22471)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M201.175%20147.543C200.651%20146.827%20200.038%20146.164%20199.333%20145.56C199.09%20145.35%20198.839%20145.158%20198.591%20144.975C194%20141.662%20187.608%20142.642%20184.081%20147.061C183.787%20147.423%20183.491%20147.792%20183.179%20148.146C182.402%20149.051%20181.588%20149.91%20180.75%20150.73C166.556%20164.513%20143.898%20165.469%20128.546%20152.381C127.893%20151.822%20127.263%20151.244%20126.659%20150.657C125.49%20149.522%20124.407%20148.324%20123.41%20147.08C120.052%20142.888%20114.08%20141.749%20109.519%20144.592C108.537%20145.204%20107.638%20145.967%20106.847%20146.887C106.774%20146.969%20106.707%20147.053%20106.639%20147.138C103.529%20150.971%20103.606%20156.467%20106.69%20160.328C107.952%20161.907%20109.31%20163.435%20110.75%20164.908C111.991%20166.169%20113.295%20167.386%20114.67%20168.557C138.928%20189.245%20174.953%20187.315%20196.876%20164.775C197.75%20163.879%20198.593%20162.954%20199.418%20161.991C199.889%20161.444%20200.348%20160.89%20200.796%20160.332C203.758%20156.619%20203.991%20151.376%20201.189%20147.542L201.175%20147.543Z'%20fill='%2300D8FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M144.529%20111.298C145.832%20107.979%20145.509%20104.874%20143.161%20102.143C141.001%2099.6288%20138.191%2098.7104%20134.929%2099.3252C132.537%2099.7784%20130.769%20101.218%20129.34%20103.121C128.909%20103.7%20128.553%20104.325%20128.209%20104.956C128.159%20104.934%20128.143%20104.927%20128.137%20104.92C128.098%20104.833%20128.053%20104.749%20128.014%20104.662C126.694%20101.827%20124.643%2099.8575%20121.483%2099.2367C115.127%2097.9889%20109.735%20103.646%20111.341%20109.873C111.915%20112.104%20113.106%20114.019%20114.549%20115.785C115.999%20117.564%20117.612%20119.186%20119.322%20120.717C121.263%20122.459%20123.278%20124.109%20125.408%20125.618C126.689%20126.527%20128.114%20126.687%20129.613%20126.211C130.43%20125.952%20131.081%20125.417%20131.752%20124.919C135.217%20122.343%20138.532%20119.595%20141.354%20116.309C142.654%20114.793%20143.794%20113.173%20144.533%20111.3L144.529%20111.298Z'%20fill='%2300D8FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M196.529%20113.298C197.831%20109.979%20197.508%20106.874%20195.16%20104.143C193%20101.629%20190.19%20100.711%20186.928%20101.325C184.536%20101.778%20182.768%20103.218%20181.339%20105.121C180.908%20105.699%20180.552%20106.325%20180.208%20106.956C180.158%20106.933%20180.143%20106.926%20180.137%20106.919C180.098%20106.833%20180.053%20106.748%20180.013%20106.662C178.694%20103.826%20176.643%20101.857%20173.482%20101.236C167.126%2099.9883%20161.735%20105.644%20163.34%20111.872C163.915%20114.102%20165.106%20116.017%20166.548%20117.783C167.999%20119.562%20169.612%20121.184%20171.322%20122.716C173.264%20124.457%20175.279%20126.107%20177.408%20127.616C178.689%20128.525%20180.114%20128.685%20181.614%20128.209C182.43%20127.95%20183.081%20127.415%20183.753%20126.917C187.217%20124.341%20190.533%20121.594%20193.354%20118.308C194.654%20116.792%20195.794%20115.173%20196.533%20113.3L196.529%20113.298Z'%20fill='%2300D8FF'/%3e%3c/g%3e%3cpath%20d='M32%20314C32%20265.951%2070.9512%20227%20119%20227H189C237.049%20227%20276%20265.951%20276%20314H32Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_889_22471'%3e%3crect%20width='309'%20height='309'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_889_22471'%3e%3crect%20x='101'%20y='78'%20width='106'%20height='109'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Yt=({src:t,...e})=>{const o={width:42,height:42,borderRadius:X.sm};return n.jsx(St,{...e,src:t||Ht,sx:{...o,...e.sx}})};Yt.__docgenInfo={description:"",methods:[],displayName:"ProfilePhoto",props:{src:{required:!0,tsType:{name:"string"},description:""}}};const je=({variant:t,label:e,step:o,...r})=>{const a=w();let i={};switch(t){case"waiting":i={borderColor:"#94ADFF",backgroundColor:"#E8EDFF"};break;case"active":i={borderColor:a.palette.primary.main,backgroundColor:a.palette.primary.main,color:a.palette.common.white};break;case"completed":i={borderColor:a.palette.primary.main,backgroundColor:a.palette.primary.main,color:a.palette.common.white};break}return n.jsxs($,{...r,sx:{gap:1,flexDirection:"column",alignItems:"center",justifyContent:"center",width:"fit-content",zIndex:1,...r.sx},children:[n.jsx($,{sx:{width:32,height:32,alignItems:"center",justifyContent:"center",borderRadius:"50%",borderWidth:2,borderStyle:"solid",...i},children:t!=="completed"?o:n.jsx(Vt,{sx:{width:18,height:18}})}),n.jsx(V,{variant:"body1",sx:{fontWeight:z.semibold,width:"max-content"},children:e})]})};je.__docgenInfo={description:"",methods:[],displayName:"ProgressBarItem"};const Ie=({steps:t,currentStep:e=0})=>{const o=w(),r=a=>a+1<e?"completed":a+1===e?"active":"waiting";return n.jsx($,{sx:{flexDirection:"row",alignItems:"start",justifyContent:"center"},children:t.map((a,i)=>(console.log(i,r(i),e),n.jsxs(n.Fragment,{children:[n.jsx(Qt.Item,{label:a,variant:r(i),step:i+1}),i!==t.length-1&&n.jsx($,{sx:{width:"100%",height:4,mt:"14px",mx:-4,zIndex:0,backgroundColor:r(i+1)==="waiting"?"#94ADFF":o.palette.primary.main}})]})))})};Ie.__docgenInfo={description:"",methods:[],displayName:"ProgressBarRoot",props:{currentStep:{defaultValue:{value:"0",computed:!1},required:!1}}};const Qt={Item:je,Root:Ie},Se=f.createContext({}),Pe=({children:t})=>{const e=w(),r=!dt(e.breakpoints.down("md")),[a,i]=f.useState(r),c=()=>i(!0),l=()=>i(!1),p=()=>i(s=>!s);return n.jsx(Se.Provider,{value:{openSidebar:c,closeSidebar:l,sidebarIsOpen:a,toggleSidebar:p},children:t})},M=()=>f.useContext(Se);Pe.__docgenInfo={description:"",methods:[],displayName:"SidebarProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Te=({navigation:t})=>{const e=f.useCallback(s=>!!s,[]),{toggleSidebar:o,sidebarIsOpen:r}=M(),[a,i]=f.useState(!0),[c,l]=f.useState(t),p=f.useCallback(s=>{if(s!=null&&s.subItens){const u=s.subItens.filter(m=>e(m==null?void 0:m.module));return u==null?void 0:u.length}return e(s.module)},[e]);return f.useEffect(()=>{l(s=>s==null?void 0:s.filter(p)),i(!1)},[p,e]),n.jsxs(n.Fragment,{children:[n.jsxs(A.Root,{children:[n.jsx(A.Header,{logo:n.jsx(G,{}),shrunkenLogo:n.jsx(G,{variant:"icon"})}),n.jsxs(A.Content.Wrapper,{children:[n.jsx(A.Content.Title,{children:"Menu"}),n.jsx(A.Content.Items,{children:!a&&(c==null?void 0:c.map((s,u)=>{var m;if(s!=null&&s.subItens&&((m=s==null?void 0:s.subItens)==null?void 0:m.length)>0)return n.jsx(J,{onClick:o,icon:s.icon,label:(s==null?void 0:s.label)??"",variant:r?"standard":"icon",subItens:s.subItens??[]},u);if(s)return n.jsx(J,{to:(s==null?void 0:s.to)??"",icon:s==null?void 0:s.icon,label:(s==null?void 0:s.label)??"",variant:r?"standard":"icon"},u)}))})]}),n.jsx(A.Footer,{text:"Powered by Nuv Tech",shrunkenText:"Nuv Tech"})]}),n.jsx(A.Page,{children:n.jsx(tt,{})})]})};Te.__docgenInfo={description:"",methods:[],displayName:"Container",props:{navigation:{required:!0,tsType:{name:"Array",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  icon?: ReactNode;
  label: string;
  module?: T;
  onClick?: () => void;
  to?: string;
  subItens?: CollapseNavLinkItem<T>[];
  variant?: "icon" | "standard";
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"module",value:{name:"T",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"to",value:{name:"string",required:!1}},{key:"subItens",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon?: ReactNode;
  label: string;
  to: string;
  module: T;
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}},{key:"module",value:{name:"T",required:!0}}]}}],raw:"CollapseNavLinkItem<T>[]",required:!1}},{key:"variant",value:{name:"union",raw:'"icon" | "standard"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"standard"'}],required:!1}}]}}],raw:"Partial<NavLinkProps<T>>"}],raw:"Link<T>[]"},description:""}}};const De=({children:t})=>n.jsx(g,{component:"nav",sx:{display:"flex",flexDirection:"column",gap:3},children:t});De.__docgenInfo={description:"",methods:[],displayName:"ContentItems",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Re=({children:t})=>{const{sidebarIsOpen:e}=M();return n.jsx(g,{sx:{paddingY:1,borderBottom:1,borderColor:"divider",display:"flex"},children:n.jsx(V,{fontSize:12,sx:{marginLeft:e?0:1/2,transition:"margin 0.2s ease-in"},children:t})})};Re.__docgenInfo={description:"",methods:[],displayName:"ContentTitle",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Fe=({children:t})=>{const e=w(),{sidebarIsOpen:o}=M(),r=o?242:89;return n.jsx(g,{sx:{flex:1,display:"flex",flexDirection:"column",gap:3,paddingY:2,paddingX:3,width:r,transition:e.transitions.create(["width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),userSelect:"none"},children:t})};Fe.__docgenInfo={description:"",methods:[],displayName:"ContentWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Xt={Wrapper:Fe,Title:Re,Items:De},Ne=({shrunkenText:t="",text:e=""})=>{const{sidebarIsOpen:o}=M(),r=w(),a=o?242:89;return n.jsxs(g,{sx:{width:a,height:48,display:"flex",justifyContent:"center",alignItems:"center",color:r.palette.primary.main,fontSize:12,fontWeight:600,whiteSpace:"nowrap",backgroundColor:"background.paper",borderTop:1,borderTopColor:"divider",userSelect:"none",transition:r.transitions.create(["width"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})},children:[o&&e,!o&&t]})};Ne.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},shrunkenText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const $e=({logo:t,shrunkenLogo:e})=>{const o=w(),{sidebarIsOpen:r,toggleSidebar:a}=M(),i=r?242:89;return n.jsxs(g,{sx:{display:"flex",height:80,borderBottom:1,borderColor:"divider",justifyContent:r?"initial":"center",paddingX:3,alignItems:"center",width:i,transition:o.transitions.create(["all"],{easing:o.transitions.easing.sharp,duration:o.transitions.duration.enteringScreen}),background:o.palette.common.white,overflow:"hidden",zIndex:1,userSelect:"none"},children:[r?t:e,n.jsx(g,{component:"button",sx:{display:"flex",position:"absolute",right:0,backgroundColor:o.palette.primary.main,height:48,alignItems:"center",justifyContent:"center",color:o.palette.common.white,borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",padding:0,border:0,cursor:"pointer"},onClick:a,children:n.jsx(g,{sx:{transform:r?"rotate(180deg)":"rotate(0deg)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease-in-out"},children:n.jsx(ye,{fontSize:"small"})})})]})};$e.__docgenInfo={description:"",methods:[],displayName:"Header",props:{logo:{required:!0,tsType:{name:"ReactNode"},description:""},shrunkenLogo:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ee=({children:t})=>{const e=w(),{sidebarIsOpen:o}=M();return n.jsx(g,{sx:{minHeight:"100vh",overflowY:"scroll",marginLeft:o?e.spacing(30):e.spacing(11),transition:e.transitions.create(["margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},children:t})};Ee.__docgenInfo={description:"",methods:[],displayName:"Page",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const _e=({children:t})=>{const{sidebarIsOpen:e}=M();return n.jsx(Bt,{variant:"permanent",open:e,children:t})};_e.__docgenInfo={description:"",methods:[],displayName:"Root",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const A={Root:_e,Page:Ee,Header:$e,Footer:Ne,Content:Xt,Container:Te,Provider:Pe},Zt=({variant:t,children:e,...o})=>{const r=w();let a={};switch(t){case"approve":a={backgroundColor:"#2E7D3240",color:r.palette.success.main};break;case"reject":a={backgroundColor:"#D32F2F40",color:r.palette.error.main};break;case"pending":a={backgroundColor:"#EF6C0040",color:r.palette.warning.main};break;case"black":a={backgroundColor:"#2B2B2B40",color:r.palette.text.primary};break;case"blue":a={backgroundColor:"#2500CF40",color:r.palette.primary.main};break;case"others":a={backgroundColor:"#E8EDFF",color:"#7A8A9D"};break}return n.jsx($,{...o,sx:{borderRadius:X.xs,px:D[4],py:D[2],...a,...o.sx},children:n.jsx(V,{sx:{color:"inherit",fontSize:Z.sm,fontWeight:z.semibold},children:e})})};Zt.__docgenInfo={description:"",methods:[],displayName:"TagStatus",props:{variant:{required:!0,tsType:{name:"union",raw:'"approve" | "reject" | "pending" | "black" | "blue" | "others"',elements:[{name:"literal",value:'"approve"'},{name:"literal",value:'"reject"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"black"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"others"'}]},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};const Gt=({type:t,data:e})=>{switch(t){case"cpf":return e.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2");case"cnpj":return e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d)/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1");case"cep":return e.replace(/\D/g,"").replace(/(\d{5})(\d)/,"$1-$2").replace(/(-\d{3})\d+?$/,"$1");case"phone":return e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2").replace(/(-\d{4})(\d)/,"$1");case"date":return e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{4})\d+?$/,"$1");case"currency":return e.replace(/\D/g,"").replace(/(\d{1,})(\d{2})$/,"$1,$2").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.");case"code":return e.replace(/\D/g,"").slice(0,6);default:return e}},K=f.forwardRef(({mask:t,...e},o)=>{const r=w();return n.jsx(rt,{...e,ref:o,sx:{"& fieldset":{border:"none"},width:"100%",backgroundColor:e.disabled?"#D7D7D7":"#FAFAFA",borderRadius:"14px",borderWidth:1,borderStyle:"solid",border:e!=null&&e.error?`1px solid ${r.palette.error.main}`:"1px solid #E0E0E0",transition:"all 0.3s",":hover":{backgroundColor:e.disabled?"#D7D7D7":"#F5F5F5"},...e.sx},onChange:a=>{var i;t&&(a.target.value=Gt({data:a.target.value,type:t})),(i=e.onChange)==null||i.call(e,a)}})});K.displayName="Default";K.__docgenInfo={description:"",methods:[],displayName:"Default"};const ee=f.forwardRef(({containerProps:t,label:e,visibilityChange:o=!1,labelProps:r,errorMessage:a,...i},c)=>{const l=w(),[p,s]=f.useState(e!=="Senha"),u=()=>{s(m=>!m)};return n.jsxs($,{...t,sx:{gap:1},children:[n.jsxs($,{sx:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[n.jsx(nt,{...r,sx:{fontSize:16,fontWeight:600,color:i.error?l.palette.error.main:l.palette.text.primary},htmlFor:e,children:e}),e==="Senha"&&n.jsx(g,{component:xe,sx:{color:"#000"},to:"/acesso/recuperar",children:"Esqueci minha senha"})]}),n.jsx(ne.Default,{...i,ref:c,id:e,type:p?"text":"password",sx:{"& ::placeholder":{color:l.palette.info.main,opacity:1},...i.sx},InputProps:{endAdornment:o&&n.jsx(ve,{position:"end",children:n.jsx(ge,{"aria-label":"Altere a visibilidade",onClick:u,edge:"end",children:p?n.jsx(ot,{}):n.jsx(at,{})})})}}),(i==null?void 0:i.error)&&n.jsxs($,{sx:{color:l.palette.error.main,flexDirection:"row",gap:1},children:[n.jsx(Ce,{sx:{width:16,height:16}}),n.jsx(V,{variant:"caption",sx:{fontSize:12},children:a})]})]})});ee.displayName="External Label";ee.__docgenInfo={description:"",methods:[],displayName:"External Label",props:{visibilityChange:{defaultValue:{value:"false",computed:!1},required:!1}}};const te=f.forwardRef(({icon:t,...e},o)=>{var a;const r=w();return n.jsx(ne.Default,{...e,ref:o,sx:{"& ::placeholder":{color:r.palette.info.main,fontWeight:600,opacity:1},...e.sx},InputProps:{sx:{height:52,...(a=e.InputProps)==null?void 0:a.sx},startAdornment:n.jsx(ve,{position:"start",children:t}),...e.InputProps}})});te.displayName="Icon";te.__docgenInfo={description:"",methods:[],displayName:"Icon"};const re=f.forwardRef(({errorMessage:t,...e},o)=>{const r=w();return n.jsxs(st,{fullWidth:!0,sx:{display:"flex",flexDirection:"column",gap:1},children:[n.jsx(ne.Default,{...e,ref:o,variant:"filled",sx:{"& .MuiFormLabel-root":{color:e.error?r.palette.error.main:r.palette.info.main,fontWeight:600},"& .MuiInputBase-root":{borderRadius:"14px",backgroundColor:"transparent"},":focus":{"& .MuiFormLabel-root":{color:e.error?r.palette.error.main:r.palette.info.main}},...e.sx},InputProps:{disableUnderline:!0,...e.InputProps}}),(e==null?void 0:e.error)&&n.jsxs($,{sx:{color:r.palette.error.main,flexDirection:"row",gap:1},children:[n.jsx(Ce,{sx:{width:16,height:16}}),n.jsx(V,{variant:"caption",sx:{fontSize:12},children:t})]})]})});re.displayName="Internal Label";re.__docgenInfo={description:"",methods:[],displayName:"Internal Label"};const ne={Default:K,Icon:te,ExternalLabel:ee,InternalLabel:re};it({palette:{primary:{main:S.primary,dark:S.primaryDark},secondary:{main:S.secondary,dark:S.secondaryDark},common:{white:"#FFFFFF",black:"#000000"},error:{main:S.error,dark:S.errorDark},success:{main:S.success,dark:S.successDark},warning:{main:S.warning,dark:S.warningDark},text:{primary:S.textPrimary,secondary:S.textSecondary},info:{main:S.info}},typography:{fontFamily:Me.default},components:{MuiTypography:{defaultProps:{variantMapping:{h1:"h1",h2:"h2",h4:"h4",body1:"p",body2:"span"}}}}});export{Wt as I,Yt as P,A as S,Zt as T,Qt as a};
