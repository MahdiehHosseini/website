import{R as c,b as p,r as i,_ as N,u as d,a as l,j as e,L as r,t as u,c as f}from"./index.5187af20.js";function h(a=c){const s=a===c?p:()=>i.exports.useContext(a);return function(){const{store:t}=s();return t}}const C=h();function b(a=c){const s=a===c?C:h(a);return function(){return s().dispatch}}const $=b(),g=i.exports.lazy(()=>N(()=>import("./Music.1c7c9a99.js"),["assets/Music.1c7c9a99.js","assets/index.5187af20.js","assets/index.65d819fc.css"]));function w({navVisablity:a}){const[s,o]=i.exports.useState(!1),t=d(x=>x.toggle.them),m=d(x=>x.toggle.lang),n=$();return i.exports.useEffect(()=>{a(s)},[s]),l("nav",{className:"flex justify-between md:justify-end z-10",children:[l("span",{onClick:()=>o(!s),className:`${s?"mt-5":"mt-7"} md:hidden flex flex-col justify-between h-4 text-xl mt-7 ml-5 z-10 cursor-pointer`,children:[e("span",{className:`${s?"rotate-45 mt-3":""} border border-${t.mainTxtColor} w-10 h-0`}),e("span",{className:`${s?"-rotate-45":""} border border-${t.mainTxtColor} w-10 h-0`})]}),l("div",{className:`${!s&&"hidden"} flex h-screen w-full md:border-l border-${t.subBorderColor} md:flex md:mt-28 md:right-0 absolute md:w-1/6 flex-col justify-around md:bg-inherit py-52 md:p-5 md:h-4/6 items-center bg-${t.mainBgColor}/70`,children:[e(r,{to:"/",children:e("i",{onClick:()=>o(!1),className:"fa fa-home text-4xl"})}),e(r,{to:"/aboutme",children:e("i",{onClick:()=>o(!1),className:"fa fa-user text-4xl"})}),e(r,{to:"/skills",children:e("i",{onClick:()=>o(!1),className:"fa fa-clipboard-list text-4xl"})}),e(r,{to:"/portfolio",children:e("i",{onClick:()=>o(!1),className:"fa fa-clone text-4xl"})}),e(r,{to:"/contact",children:e("i",{onClick:()=>o(!1),className:"fa fa-envelope text-4xl"})})]}),s|window.innerWidth>768?e(g,{}):"",l("span",{className:"mt-4 flex flex-col items-center mr-5 md:mr-10 lg:mr-16 2xl:mr-20",children:[l("span",{onClick:()=>n(m==="EN"?u("FA"):u("EN")),className:" cursor-pointer text-2xl flex",children:[e("p",{className:`mr-1 ${m!=="EN"&&`text-${t.subTxtColor}`}`,children:"EN"})," / ",e("p",{className:`ml-1 ${m!=="FA"&&`text-${t.subTxtColor}`}`,children:"FA"})]}),l("span",{onClick:()=>t.mainTxtColor==="white"?n(f("light")):n(f("dark")),className:" cursor-pointer items-center text-2xl flex mt-2",children:[e("i",{className:`fa fa-sun mr-1 ${t.mainTxtColor==="white"&&`text-${t.subTxtColor}`}`})," / ",e("i",{className:`fa fa-moon ml-1 ${t.mainTxtColor==="black"&&`text-${t.subTxtColor}`}`})]})]})]})}export{w as default};
