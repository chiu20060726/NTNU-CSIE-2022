import{_ as i}from"./Typing.8d3ee117.js";import{r as f,o as l,c as p,a,e as u,i as n,u as r,b as c,d as m,F as h,g as x}from"./index.4d883657.js";const d={uniform:"https://spy-family.net/assets/img/common/header_bottomimg_3.png",icecream:"https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",uniform_large:"https://spy-family.net/assets/img/top/chara_anya_1.png",casual_large:"https://spy-family.net/assets/img/top/chara_anya_2.png",avatars:[]};for(let t=1;t<=40;t++)d.avatars[t]=`https://spy-family.net/assets/img/special/anya/${t.toString().padStart(2,"0")}.png`;d.avatars.push();const y=[{name:"use github rickroll",description:"Never gonna give you up",image:"https://s.yimg.com/ny/api/res/1.2/xQD.4JGpg6XIJzx.SbQkiA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://s.yimg.com/uu/api/res/1.2/Rffcviow.eCHjmEu2msLJg--~B/aD0xNzU3O3c9MjM0MzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/c6ce8d0b9a7b28f9c2dee8171da98b8f",skills:["rick roll","html","re url","GitHub"],url:"https://chiu20060726.github.io/main/home.html"},{name:"My own DNS",description:"A free .tk DNS bought by me (?",image:"https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",skills:["DNS",".tk"],url:"http://chiu20060726.tk"},{name:"A special link :)",description:"just click it :)",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png",skills:[":>"],url:"https://reurl.cc/8okm8g"}],b={class:"group flex flex-col justify-center lg:flex-row"},_={class:"flex h-full w-full items-center justify-center overflow-hidden rounded-md shadow lg:shadow-lg"},k=["src"],v={class:"h-full w-full p-4 pb-2"},j={class:"mt-4 flex flex-col justify-center"},w=["href"],D={__name:"Project",props:{project:{type:Object,default:()=>({name:"Project",description:"description.",image:""})}},setup(t){let e=f(0);return(g,s)=>(l(),p("div",b,[a("div",_,[a("img",{src:t.project.image,class:"w-full transition-all duration-200 ease-in group-hover:scale-105"},null,8,k)]),a("div",v,[u(i,{class:"mb-2 block text-lg md:text-xl lg:mb-4 lg:text-2xl",text:t.project.name,speed:60,onDone:s[0]||(s[0]=o=>n(e)?e.value++:e++)},null,8,["text"]),r(e)>0?(l(),c(i,{key:0,class:"mb-2 block text-sm text-gray-600 md:text-base",text:t.project.description,speed:40,onDone:s[1]||(s[1]=o=>n(e)?e.value++:e++)},null,8,["text"])):m("",!0),r(e)>1?(l(),c(i,{key:1,class:"block text-sm text-gray-400 md:text-base",text:t.project.skills.join(", "),speed:40,onDone:s[2]||(s[2]=o=>n(e)?e.value++:e++)},null,8,["text"])):m("",!0),a("div",j,[a("a",{href:t.project.url,target:"_blank",rel:"noopener noreferrer",class:"inline-block"},[r(e)>2?(l(),c(i,{key:0,class:"w-full text-blue-400 transition-all duration-200 ease-in hover:text-blue-600",text:t.project.url,speed:40,onDone:s[3]||(s[3]=o=>n(e)?e.value++:e++)},null,8,["text"])):m("",!0)],8,w)])])]))}},B={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},N={class:"py-2"},M={__name:"Projects",setup(t){return(e,g)=>(l(),p("div",B,[u(i,{text:"\u4F5C\u54C1\u96C6",class:"block text-2xl sm:text-3xl lg:text-4xl"}),a("div",N,[(l(!0),p(h,null,x(r(y),(s,o)=>(l(),c(D,{key:o,project:s,class:"my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200"},null,8,["project"]))),128))])]))}};export{M as default};
