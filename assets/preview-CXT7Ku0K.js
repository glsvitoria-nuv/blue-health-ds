import{j as c}from"./jsx-runtime-CKrituN3.js";import{t as b}from"./index-DsoWsVcV.js";import{_ as i}from"./inheritsLoose-DMKMEUQT.js";import{v,w as y,R as S,_ as T,x as d,u as j,G as _}from"./VisibilityOff-D6BBgNQi.js";import{r as a}from"./index-CBqU2yxZ.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";const C=a.createContext(null),h=C;function x(){return a.useContext(h)}const E=typeof Symbol=="function"&&Symbol.for,M=E?Symbol.for("mui.nested"):"__THEME_NESTED__";function k(e,o){return typeof o=="function"?o(e):i({},e,o)}function P(e){const{children:o,theme:t}=e,r=x(),n=a.useMemo(()=>{const s=r===null?t:k(r,t);return s!=null&&(s[M]=r!==null),s},[t,r]);return c.jsx(h.Provider,{value:n,children:o})}const p={};function f(e,o,t,r=!1){return a.useMemo(()=>{const n=e&&o[e]||o;if(typeof t=="function"){const s=t(n),l=e?i({},o,{[e]:s}):s;return r?()=>l:l}return e?i({},o,{[e]:t}):i({},o,t)},[e,o,t,r])}function $(e){const{children:o,theme:t,themeId:r}=e,n=v(p),s=x()||p,l=f(r,n,t),m=f(r,s,t,!0),u=l.direction==="rtl";return c.jsx(P,{theme:m,children:c.jsx(y.Provider,{value:l,children:c.jsx(S,{value:u,children:o})})})}const O=["theme"];function W(e){let{theme:o}=e,t=T(e,O);const r=o[d];return c.jsx($,i({},t,{themeId:r?d:void 0,theme:r||o}))}const w=(e,o)=>i({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode}),z=e=>i({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),B=(e,o=!1)=>{var t;const r={};o&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,m])=>{var u;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(u=m.palette)==null?void 0:u.mode}});let n=i({html:w(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:i({margin:0},z(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const s=(t=e.components)==null||(t=t.MuiCssBaseline)==null?void 0:t.styleOverrides;return s&&(n=[n,s]),n};function D(e){const o=j({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=o;return c.jsxs(a.Fragment,{children:[c.jsx(_,{styles:n=>B(n,r)}),t]})}const V={controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},g=e=>c.jsxs(W,{theme:b,children:[c.jsx(D,{}),c.jsx(e,{})]}),Y=[g];g.__docgenInfo={description:"",methods:[],displayName:"withMuiTheme"};export{Y as decorators,V as parameters,g as withMuiTheme};