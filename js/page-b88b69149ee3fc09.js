(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{98:function(e,t,s){Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.bind(s,1932)),Promise.resolve().then(s.bind(s,8845)),Promise.resolve().then(s.bind(s,606)),Promise.resolve().then(s.bind(s,6660)),Promise.resolve().then(s.bind(s,1999)),Promise.resolve().then(s.bind(s,1634)),Promise.resolve().then(s.bind(s,7866)),Promise.resolve().then(s.bind(s,1411))},606:function(e,t,s){"use strict";s.r(t);var l=s(7437),a=s(2265),i=s(6648);let r=e=>{let{children:t,moveSpeed:s,id:r,className:o}=e,[n,u]=(0,a.useState)({x:0,y:0}),[c,d]=(0,a.useState)({width:0,height:0});return(0,a.useEffect)(()=>{let e=e=>{u({x:e.clientX,y:e.clientY})};return window.addEventListener("load",()=>{d({width:window.innerWidth,height:window.innerHeight})}),window.addEventListener("resize",()=>{d({width:window.innerWidth,height:window.innerHeight})}),window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),(0,l.jsx)("div",{className:"".concat(o," z-10"),id:r,children:(0,l.jsxs)("div",{className:"h-full w-full rounded-full",style:((e,t,s)=>{if(c.width>=768){let l=(e/window.innerWidth-.5)*s,a=(t/window.innerHeight-.5)*s;return{transform:"translate(".concat(l,"px, ").concat(a,"px)")}}})(n.x,n.y,s),children:[(0,l.jsx)(i.default,{src:"/assets/images/bubble.svg",className:"absolute top-0 left-0 h-full w-full z-20",height:500,width:500,alt:"KLAUS Bubble"}),t]})})};t.default=e=>{let{className:t}=e;return(0,l.jsxs)("section",{className:"relative h-[400px] mobile:h-[200px] ".concat(t),children:[(0,l.jsx)(r,{moveSpeed:50,className:"h-48 w-48 mobile:h-24 mobile:w-24 rounded-full absolute left-8 mobile:bottom-0",children:(0,l.jsx)(i.default,{src:"./klaus-image.webp",className:"w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10",height:500,width:500,alt:"../klaus-image.webp"})}),(0,l.jsx)(r,{moveSpeed:10,className:"h-48 w-48 mobile:h-24 mobile:w-24 rounded-full absolute top-6 left-1/2 -translate-x-1/2",children:(0,l.jsx)(i.default,{src:"/assets/images/animations/klaus_newspaper.gif",className:"w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10",height:500,width:500,alt:"KLAUS newspaper"})}),(0,l.jsx)(r,{moveSpeed:120,className:"h-48 w-48 mobile:h-24 mobile:w-24 rounded-full absolute right-20 mobile:right-10 bottom-10",children:(0,l.jsx)(i.default,{src:"/assets/images/happy_klaus.png",className:"w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10",height:500,width:500,alt:"KLAUS happy"})}),(0,l.jsx)(r,{moveSpeed:30,className:"h-32 w-32 mobile:h-16 mobile:w-16 rounded-full absolute left-1/4 mobile:left-10 top-0"}),(0,l.jsx)(r,{moveSpeed:70,className:"h-16 w-16 mobile:h-8 mobile:w-8 rounded-full absolute left-1/3 top-1/3 mobile:left-5"}),(0,l.jsx)(r,{moveSpeed:225,className:"h-24 w-24 mobile:w-12 mobile:h-12 rounded-full absolute right-1/4 top-0 translate-x-14"}),(0,l.jsx)(r,{moveSpeed:25,className:"h-16 w-16 mobile:h-8 mobile:w-8 rounded-full absolute right-5 bottom-0"})]})}},6660:function(e,t,s){"use strict";s.r(t);var l=s(7437),a=s(2265),i=s(7138);t.default=e=>{let{href:t,children:s,className:r,id:o,copyValue:n,...u}=e,[c,d]=(0,a.useState)(!1);return(0,l.jsx)(i.default,{href:t,...u,onClick:n?e=>{e.preventDefault(),navigator.clipboard.writeText(n),d(!0)}:null,className:"bg-[#FF8F0B] rounded-xl border-4 border-black text-white px-5 flex items-center h-16 uppercase text-2xl drop-shadow-[5px_5px_0_rgba(0,0,0,1)] mobile:drop-shadow-[2px_2px_0_rgba(0,0,0,1)] mobile:text-sm whitespace-nowrap mobile:px-3 mobile:h-12 transition hover:!translate-x-1 hover:!translate-y-1 hover:drop-shadow-[0_0_0_rgba(0,0,0,1)] flex items-center ".concat(r),id:o,children:c?"Copied":s})}},8404:function(e,t,s){"use strict";s.d(t,{$:function(){return r}});var l=s(7437),a=s(2265),i=s(6648);let r=()=>{let[e,t]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=(()=>{let e=window.navigator.userAgent;return -1!==e.indexOf("Mac")?"mac":-1!==e.indexOf("Win")?"windows":"unknown"})();document.body.classList.add(e);let s=()=>{t(!1);let e=setInterval(()=>{window.scrollTo(0,0)},100);setTimeout(()=>{clearInterval(e)},1e3)};return"complete"===document.readyState?s():window.addEventListener("load",s),()=>{window.removeEventListener("load",s)}},[]),e};t.Z=()=>{let e=r();return(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-white transition-all duration-700 z-[200] ".concat(e?"pointer-events-auto":"pointer-events-none opacity-0"),children:(0,l.jsx)(i.default,{src:"/assets/images/animations/klaus-rich.gif",className:"w-24",id:"klaus-bowl-rich",width:100,height:100,alt:"KLAUS Loading"})})}},1999:function(e,t,s){"use strict";var l=s(7437),a=s(2265),i=s(6648),r=s(9582),o=s(1204),n=s(2088),u=s(8364);t.default=()=>{let e=(0,a.useRef)(null),[t,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t||(r.ZP.registerPlugin(o.i),s(!0))},[t]),(0,a.useEffect)(()=>{let e=new u.Z({lerp:.06,duration:1.5,smoothTouch:!0});return requestAnimationFrame(function t(s){e.raf(s),requestAnimationFrame(t)}),e.on("scroll",o.i.update),()=>e.destroy()},[]),(0,a.useLayoutEffect)(()=>{new n.Z(".fut-flag-title"),new n.Z("#fut-flag-text");let t=r.ZP.context(()=>{r.ZP.from(".fut-flag-title .char",{duration:.6,opacity:0,x:120,stagger:.02,scrollTrigger:{trigger:".fut-flag-title",start:"top 70%",end:"bottom 30%"}}),r.ZP.from("#fut-flag-text .char",{duration:.2,opacity:0,x:10,y:10,stagger:.01,scrollTrigger:{trigger:"#fut-flag-text",start:"top 70%",end:"bottom 30%"}}),r.ZP.from("#klaus-fut-flag-img",{duration:.5,x:200,scrollTrigger:{trigger:"#klaus-fut-flag-img",start:"top 70%",end:"bottom 30%",scrub:!0}})},e);return()=>t.revert()},[t]),(0,l.jsx)("section",{className:"bg-[#57A8D8] pb-32 overflow-hidden",ref:e,children:(0,l.jsxs)("div",{className:"container flex gap-20 mobile:gap-10 items-center mobile:flex-col",children:[(0,l.jsxs)("div",{className:"w-1/2 mobile:w-full flex flex-col gap-10",children:[(0,l.jsx)("h2",{className:"text-white text-7xl mobile:text-4xl whitespace-nowrap fut-flag-title",children:"AH YES YES"}),(0,l.jsx)("p",{className:"text-2xl mobile:text-lg text-white font-bold uppercase",id:"fut-flag-text",children:"$KLAUS isn’t just another meme coin.\xa0It’s the pre-cursor to something huge. A trailblazer, riding the wave into the future. This is what you’ve all been waiting for.\xa0"})]}),(0,l.jsx)("div",{className:"w-1/2 mobile:w-full mobile:-mt-0",children:(0,l.jsx)(i.default,{src:"/assets/images/animations/drunk-klaus.gif",className:"p-10 relative z-10",width:1200,height:1200,id:"klaus-fut-flag-img",alt:"KLAUS drunk"})})]})})}},1634:function(e,t,s){"use strict";var l=s(7437),a=s(2265),i=s(9582),r=s(6648),o=s(2088),n=s(8404),u=s(19);t.default=()=>{let e=(0,a.useRef)(null),t=(0,n.$)();return(0,u.V)(()=>{if(t)return;let e=o.Z.create("#welcome");i.ZP.timeline().from(e.chars,{delay:.5,duration:.4,opacity:0,y:20,stagger:.1}).from(["#klaus-state-1"],{duration:.4,opacity:0,x:100}).from(["#klaus-state-2"],{duration:.4,opacity:0,x:-50}).from(["#klaus-state-3"],{duration:.4,opacity:0,y:20}).from(["#klaus-state-4"],{duration:.1,opacity:0,y:-400}).from(["#klaus-state-5"],{duration:.1,opacity:0,scale:.5}).to(["#klaus-state-5"],{scale:1.2,duration:.1}).to(["#klaus-state-5"],{scale:1,duration:.1})},{scope:e,dependencies:[t]}),(0,l.jsxs)("section",{className:"relative w-full bg-[url('/assets/images/klaus-bg-top.png')] bg-cover bg-bottom flex items-center hero-aspect",ref:e,children:[(0,l.jsx)(r.default,{src:"/assets/images/klaus-state-1.png",alt:"Klaus",width:400,height:400,className:"absolute right-5 bottom-0 w-[32%]",id:"klaus-state-1"}),(0,l.jsx)(r.default,{src:"/assets/images/klaus-state-2.png",alt:"Klaus",width:400,height:400,className:"absolute left-5 bottom-0 w-[19%]",id:"klaus-state-2"}),(0,l.jsx)(r.default,{src:"/assets/images/klaus-state-3.png",alt:"Klaus",width:400,height:400,className:"absolute bottom-[8.5%] w-[20%] left-[30%]",id:"klaus-state-3"}),(0,l.jsx)(r.default,{src:"/assets/images/klaus-state-4.png",alt:"Klaus",width:400,height:400,className:"absolute bottom-[28%] w-[16%] left-[17%]",id:"klaus-state-4"}),(0,l.jsx)(r.default,{src:"/assets/images/klaus-state-5.png",alt:"Klaus",width:400,height:400,className:"absolute bottom-[32.2%] w-[16%] left-[50%] origin-bottom",id:"klaus-state-5"}),(0,l.jsx)("div",{id:"welcome",className:"absolute top-[3.5%] left-1/2 -translate-x-1/2 text-[1.7vw] text-white",children:"WELCOME TO"})]})}},7866:function(e,t,s){"use strict";var l=s(7437),a=s(2265),i=s(6648),r=s(9582),o=s(1204),n=s(2088),u=s(8364);let c=e=>(0,l.jsxs)("div",{className:"relative h-full klaus_card",children:[(0,l.jsx)("div",{className:"bg-[#272627] absolute bottom-full right-full translate-x-1/2 translate-y-1/2 h-16 w-16 rounded-full flex items-center justify-center text-white text-3xl border-[7px] border-white z-20",children:e.number}),(0,l.jsx)("div",{className:"h-16 w-16 absolute z-0 bottom-full right-full translate-x-10 translate-y-10 bg-[#ff8f0b] rounded-full"}),(0,l.jsxs)("div",{className:"relative z-10 bg-[#272627] h-full p-8 rounded-xl flex flex-col justify-center gap-4 drop-shadow-[7px_7px_0_#ff8f0b]",children:[(0,l.jsx)("h3",{className:"text-5xl mobile:text-2xl text-white leading-snug font-bold ".concat(e.isCenter?"text-center":""),children:e.title}),(0,l.jsx)("p",{className:"text-2xl mobile:text-base text-white font-bold uppercase",children:e.description})]})]});t.default=()=>{let e=(0,a.useRef)(null),[t,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t||(r.ZP.registerPlugin(o.i),s(!0))},[t]),(0,a.useEffect)(()=>{let e=new u.Z({lerp:.06,duration:1.5,smoothTouch:!0});return requestAnimationFrame(function t(s){e.raf(s),requestAnimationFrame(t)}),e.on("scroll",o.i.update),()=>e.destroy()},[]),(0,a.useLayoutEffect)(()=>{let t=new n.Z(".how-to-buy-title");new n.Z(".how-to-buy-subheading"),t.words[2].classList.add("color_main");let s=r.ZP.context(()=>{r.ZP.from(".how-to-buy-title .char",{duration:.6,opacity:0,scale:2,stagger:.03,color:"#ff8f0b",scrollTrigger:{scrub:!0,trigger:".how-to-buy-title",start:"top 70%",end:"bottom 60%"}}),r.ZP.from(".how-to-buy-subheading .char",{duration:.6,opacity:0,scale:2,stagger:.03,color:"#ff8f0b",scrollTrigger:{scrub:!0,trigger:".how-to-buy-subheading",start:"top 70%",end:"bottom 60%"}}),r.ZP.from(".klaus_card",{duration:.6,opacity:0,x:100,stagger:1,color:"#ff8f0b",scrollTrigger:{scrub:!0,trigger:".klaus_card",start:"top 70%",end:"bottom 30%"}})},e);return()=>s.revert()},[t]),(0,l.jsxs)("section",{className:"bg-white pb-40 mobile:pb-20 relative",ref:e,children:[(0,l.jsxs)("div",{className:"w-full container flex mobile:flex-col-reverse items-center gap-14 mobile:gap-6 mobile:w-full",children:[(0,l.jsx)("div",{className:"w-1/2 mobile:w-full",children:(0,l.jsx)(i.default,{src:"/assets/images/animations/klaus_money.gif",width:500,height:500,className:"w-full -mt-[40%] mobile:-mt-0",alt:"Klaus Rich"})}),(0,l.jsx)("div",{className:"w-1/2 mobile:w-full flex flex-col gap-8 mobile:gap-4 mobile:px-5",children:(0,l.jsx)("h2",{className:"text-[2.8vw] leading-tight mobile:text-4xl whitespace-normal how-to-buy-title",children:"WANNA BUY $KLAUS? EVEN A FISH COULD DO IT"})})]}),(0,l.jsx)("div",{className:"container -mt-14 overflow-x-hidden pt-8",children:(0,l.jsxs)("div",{className:"grid grid-cols-2 mobile:grid-cols-1 gap-14 pb-2",children:[(0,l.jsx)(c,{number:"1",title:"CREATE A WALLET WITH PHANTOM",description:"VISIT PHANTOM AND FOLLOW the SIMPLE STEPS TO CREATE YOUR NEW ACCOUNT USING the PHANTOM APP OR BROWSER EXTENSION.\xa0"}),(0,l.jsx)(c,{number:"2",title:"BUY $SOL",description:"CLICK THE BUY BUTTON IN THE APP TO PURCHASE SOME SOLANA, OR DEPOSIT $SOL INTO YOUR PHANTOM WALLET FROM YOUR FAVOURITE CRYPTO EXCHANGE."}),(0,l.jsx)(c,{number:"3",title:"SWAP $SOL FOR $KLAUS",description:"Visit Pump.fun, connect your wallet, and follow the easy steps to swap for $KLAUS using the Pump.fun platform through the app or browser."}),(0,l.jsx)(c,{number:"4",title:"YOU ARE NOW A $KLAUS HOLDER!",isCenter:!0})]})})]})}},1411:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var l=s(7437),a=s(2265),i=s(6648),r=s(9582),o=s(1204),n=s(2088),u=s(8364),c=s(6660),d=()=>{let e=(0,a.useRef)(null),[t,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t||(r.ZP.registerPlugin(o.i),s(!0))},[t]),(0,a.useEffect)(()=>{let e=new u.Z({lerp:.06,duration:1.5,smoothTouch:!0});return requestAnimationFrame(function t(s){e.raf(s),requestAnimationFrame(t)}),e.on("scroll",o.i.update),()=>e.destroy()},[]),(0,a.useLayoutEffect)(()=>{new n.Z(".reading-title"),new n.Z("#reading-text");let t=r.ZP.context(()=>{r.ZP.from(".reading-title .char",{duration:.6,opacity:0,x:120,stagger:.02,scrollTrigger:{trigger:".reading-title",start:"top 70%",end:"bottom 30%"}}),r.ZP.from("#reading-text .char",{duration:.2,opacity:0,x:10,y:10,stagger:.01,scrollTrigger:{trigger:"#reading-text",start:"top 70%",end:"bottom 30%"}}),r.ZP.from("#klaus-bowl-rich",{duration:.5,rotate:400,scrollTrigger:{trigger:"#klaus-bowl-rich",start:"top 70%",end:"bottom 30%",scrub:!0}})},e);return()=>t.revert()},[t]),(0,l.jsx)("section",{className:"pt-24 pb-40 bg-[#57A8D8] -mt-10 relative overflow-x-hidden",ref:e,children:(0,l.jsxs)("div",{className:"container flex gap-20 mobile:gap-5 items-center mobile:flex-col",children:[(0,l.jsxs)("div",{className:"w-2/3 mobile:w-full flex flex-col gap-10 mobile:gap-5",children:[(0,l.jsx)("p",{className:"text-white text-[2.2vw] leading-tight relative mobile:text-2xl reading-title",children:"I USED TO BE A TOP-TIER ATHLETE, A OLYMPIC SKIER, LIVING THE DREAM..."}),(0,l.jsx)("p",{className:"text-white text-[2.2vw] leading-tight relative mobile:text-2xl reading-title",children:"AND NOW? I’M A MEME."}),(0,l.jsx)(c.default,{href:"https://pump.fun/PYyfhM9HPRmoXXbmGvUxNAMPJv8qt6kMPX2ifRZmump",target:"_blank",className:"mr-auto",children:"BUY $KLAUS"})]}),(0,l.jsx)("div",{className:"w-1/3 mobile:w-full",children:(0,l.jsx)(i.default,{src:"/assets/images/animations/klaus-rich.gif",className:"w-full max-w-xl",id:"klaus-bowl-rich",width:600,height:600,alt:"Klaus Rich"})})]})})}}},function(e){e.O(0,[922,470,954,971,23,744],function(){return e(e.s=98)}),_N_E=e.O()}]);