(()=>{"use strict";var t={591:(t,e,a)=>{var s=a(242),o=a(396),n=a(268),r=a(870),c=a(139);const l=(0,c.MT)({state:{turn:(0,r.iH)(0).value,val:(0,r.iH)("X").value,pressed:(0,r.iH)(0).value,blocks:(0,r.iH)([]).value,checkBlocks:(0,r.iH)([[],[],[]]).value,gameMode:(0,r.iH)(!0).value},mutations:{},actions:{},getters:{},modules:{}}),i=(0,o.aZ)({__name:"Square",props:{id:Number},setup(t){const e=t;return(t,a)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)(["square",{x:"X"==(0,r.SU)(l).state.blocks[e.id],o:"O"==(0,r.SU)(l).state.blocks[e.id]}])},(0,n.zw)((0,r.SU)(l).state.blocks[e.id]),3))}});var u=a(89);const d=(0,u.Z)(i,[["__scopeId","data-v-7cffc21e"]]),k=d,v=t=>((0,o.dD)("data-v-4408833f"),t=t(),(0,o.Cn)(),t),f={class:"player"},h=v((()=>(0,o._)("h1",null,"Player:",-1))),p=v((()=>(0,o._)("h1",null,"Won:",-1))),g=v((()=>(0,o._)("h1",null,"Loose:",-1))),b=[h,p,g];function m(t,e){return(0,o.wg)(),(0,o.iD)("div",f,b)}const w={},O=(0,u.Z)(w,[["render",m],["__scopeId","data-v-4408833f"]]),_=O,y={class:"container"},M=(0,o.aZ)({__name:"App",setup(t){function e(t){l.state.gameMode&&(l.state.blocks[t]||(l.state.turn%2==0?l.state.val="X":l.state.val="O",l.state.turn++,u(t)),l.state.blocks[t]||(l.state.blocks[t]=l.state.val),l.state.pressed=t,l.state.blocks.length>2&&a())}function a(){i()?d():r()?alert("You won1"):c()?alert("You won2"):s()?alert("You won3"):n()&&alert("You won4")}function s(){var t=!1;const e=l.state.checkBlocks,a=3;for(let s=0;s<a;s++){const a=e[s],o=a.includes("X"),n=a.includes("O");if(a[0]&&a[1]&&a[2]){const e=o&&!n||!o&&n;if(e){l.state.gameMode=!1,t=!0;break}}}return t}function n(){const t=l.state.checkBlocks,e=3;for(var a=0;a<e;a++){const e=t[0][a],s=t[1][a],o=t[2][a],n=e&&s&&o;if(e===s&&e===o&&n)return l.state.gameMode=!1,!0}return!1}function r(){const t=l.state.checkBlocks,e=t[0][0],a=t[1][1],s=t[2][2];return!!(e&&a&&s&&e==a&&e==s)&&(l.state.gameMode=!1,!0)}function c(){const t=l.state.checkBlocks,e=t[2][0],a=t[1][1],s=t[0][2];return!!(e&&a&&s&&e==a&&e==s)&&(l.state.gameMode=!1,!0)}function i(){const t=l.state.checkBlocks,e=t[0].length,a=t[1].length,s=t[2].length,o=3;return e===o&&a===o&&s===o&&(l.state.gameMode=!1,!0)}function u(t){t<3?l.state.checkBlocks[0][t]=l.state.val:t<6?l.state.checkBlocks[1][Math.round(t%3)]=l.state.val:l.state.checkBlocks[2][Math.round(t%3)]=l.state.val}function d(){l.state.turn=0,l.state.val="X",l.state.pressed=0,l.state.blocks=[],l.state.checkBlocks=[[],[],[]],l.state.gameMode=!0}return(t,a)=>((0,o.wg)(),(0,o.iD)("main",null,[(0,o.Wm)(_),(0,o._)("div",y,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(9,(t=>(0,o.Wm)(k,{key:t,onClick:a=>e(t-1),id:t-1},null,8,["onClick","id"]))),64))]),(0,o.Wm)(_)]))}}),B=M,H=B;(0,s.ri)(H).use(l).mount("#app")}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,a),n.exports}a.m=t,(()=>{var t=[];a.O=(e,s,o,n)=>{if(!s){var r=1/0;for(u=0;u<t.length;u++){for(var[s,o,n]=t[u],c=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((t=>a.O[t](s[l])))?s.splice(l--,1):(c=!1,n<r&&(r=n));if(c){t.splice(u--,1);var i=o();void 0!==i&&(e=i)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,o,n]}})(),(()=>{a.d=(t,e)=>{for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={143:0};a.O.j=e=>0===t[e];var e=(e,s)=>{var o,n,[r,c,l]=s,i=0;if(r.some((e=>0!==t[e]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(l)var u=l(a)}for(e&&e(s);i<r.length;i++)n=r[i],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},s=self["webpackChunktiktak"]=self["webpackChunktiktak"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})();var s=a.O(void 0,[998],(()=>a(591)));s=a.O(s)})();
//# sourceMappingURL=app.615a99e2.js.map