"use strict";(self.webpackChunkstats_of_war=self.webpackChunkstats_of_war||[]).push([[483],{8417:function(t,s,n){n.d(s,{Z:function(){return y}});var e=n(9439),i=n(2791),a=n(9434),r=n(1066),l=n(8485),c=n(2007),o=JSON.parse('{"T":{"ua":"-\u0439 \u0434\u0435\u043d\u044c \u0432\u0456\u0439\u043d\u0438","en":" day of war"}}'),u="ListStats_block__8x4lD",_="ListStats_title__IS6lp",d="ListStats_list__ixiQm",f="ListStats_listItem__CJIiL",v="ListStats_listItemName__z8kRZ",h="ListStats_listItemImg__q9+9s",m="ListStats_listItemTitle__Zf8T7",p="ListStats_listItemStats__bftDG",g="ListStats_statsSub__nxMgH",S=n(184),y=function(t){var s=t.stats,n=(0,a.v9)((function(t){return t.myLanguage})),y=(0,i.useState)({}),Z=(0,e.Z)(y,2),x=Z[0],j=Z[1];console.log(x);return(0,i.useEffect)((function(){try{(0,r.rl)(n).then((function(t){return j(t)}))}catch(t){console.error()}}),[s,n]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:u,children:[(0,S.jsx)("h3",{className:_,children:(null===s||void 0===s?void 0:s.date)&&(0,l.Z)(s.date)}),(0,S.jsxs)("p",{className:_,children:[null===s||void 0===s?void 0:s.day,"en"===n&&(0,c.Z)(null===s||void 0===s?void 0:s.day),o.T[n]]})]}),(0,S.jsx)("ul",{className:d,children:s&&["personnel_units","tanks","armoured_fighting_vehicles","special_military_equip","vehicles_fuel_tanks","mlrs","artillery_systems","atgm_srbm_systems","aa_warfare_systems","cruise_missiles","helicopters","planes","uav_systems","warships_cutters"].map((function(t){var n,e,i,a,r;return(0,S.jsxs)("li",{className:f,children:[(0,S.jsxs)("div",{className:v,children:[(0,S.jsx)("img",{src:null===x||void 0===x||null===(n=x[t])||void 0===n?void 0:n.icon,className:h,alt:null===x||void 0===x||null===(e=x[t])||void 0===e?void 0:e.title}),(0,S.jsx)("p",{className:m,children:null===x||void 0===x||null===(i=x[t])||void 0===i?void 0:i.title})]}),(0,S.jsx)("div",{children:(0,S.jsxs)("p",{className:p,children:[null===s||void 0===s||null===(a=s.stats)||void 0===a?void 0:a[t]," ",(0,S.jsxs)("span",{className:g,children:["(+",null===s||void 0===s||null===(r=s.increase)||void 0===r?void 0:r[t],")"]})]})})]},t)}))})]})}},9483:function(t,s,n){n.r(s);var e=n(9439),i=n(2791),a=n(1066),r=n(8417),l=n(524),c=n(184);s.default=function(){var t=(0,i.useState)([]),s=(0,e.Z)(t,2),n=s[0],o=s[1];return(0,i.useEffect)((function(){try{(0,a.Z2)(new Date).then((function(t){return o(t)})).catch((function(t){return o(l)}))}catch(t){console.error(),o(l)}}),[]),n&&(0,c.jsx)(r.Z,{stats:n})}},1066:function(t,s,n){n.d(s,{Z2:function(){return a},cz:function(){return l},rl:function(){return r}});var e=n(1912),i=n(8160),a=function(t){return e.Z.get("https://russianwarship.rip/api/v2/statistics/".concat((0,i.Z)(t))).then((function(t){return t.data.data}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ua";return console.log(t),e.Z.get("https://russianwarship.rip/api/v2/terms/".concat(t)).then((function(t){return t.data.data}))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return e.Z.get("https://russianwarship.rip/api/v2/statistics?offset=".concat(t,"&limit=").concat(s)).then((function(t){return t.data.data.records}))}},8160:function(t,s){s.Z=function(t){return"object"===typeof t?"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0")):t}},2007:function(t,s){s.Z=function(t){var s=t&&t.toString().split(""),n=t%10;return"1"!==(t&&s[s.length-2])?1===n?"st":2===n?"nd":3===n?"rd":"th":"th"}},8485:function(t,s,n){var e=n(9439);s.Z=function(t){var s=t.split("-"),n=(0,e.Z)(s,3),i=n[0],a=n[1],r=n[2];return"".concat(r,"-").concat(a,"-").concat(i)}},524:function(t){t.exports=JSON.parse('{"stats":{"personnel_units":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","tanks":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","armoured_fighting_vehicles":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","special_military_equip":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","vehicles_fuel_tanks":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","mlrs":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","artillery_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","atgm_srbm_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","aa_warfare_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","cruise_missiles":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","helicopters":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","planes":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","uav_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","warships_cutters":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439"}}')}}]);
//# sourceMappingURL=483.b6b999d8.chunk.js.map