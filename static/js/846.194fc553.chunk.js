"use strict";(self.webpackChunkstats_of_war=self.webpackChunkstats_of_war||[]).push([[846],{6009:function(t,s,e){e.d(s,{Z:function(){return r}});var n="Button_btn__Ork4e",a=e(184),r=function(t){var s=t.name,e=t.func,r=t.id;return(0,a.jsx)("button",{type:"button",className:n,id:r,onClick:e,children:s})}},8417:function(t,s,e){e.d(s,{Z:function(){return N}});var n=e(9439),a=e(2791),r=e(9434),i=e(1066),c=e(8485),l=e(2007),o=JSON.parse('{"T":{"ua":"-\u0439 \u0434\u0435\u043d\u044c \u0432\u0456\u0439\u043d\u0438","en":" day of war"}}'),u="ListStats_block__8x4lD",d="ListStats_title__IS6lp",_="ListStats_list__ixiQm",m="ListStats_listItem__CJIiL",f="ListStats_listItemName__z8kRZ",h="ListStats_listItemImg__q9+9s",p="ListStats_listItemTitle__Zf8T7",v="ListStats_listItemStats__bftDG",x="ListStats_statsSub__nxMgH",g=e(184),N=function(t){var s=t.stats,e=(0,r.v9)((function(t){return t.myLanguage})),N=(0,a.useState)(),j=(0,n.Z)(N,2),y=j[0],Z=j[1];return(0,a.useEffect)((function(){try{(0,i.rl)(e).then((function(t){return Z(t)}))}catch(t){console.error()}}),[s,e]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)("h3",{className:d,children:(null===s||void 0===s?void 0:s.date)&&(0,c.Z)(s.date)}),(0,g.jsxs)("p",{className:d,children:[null===s||void 0===s?void 0:s.day,"en"===e&&(0,l.Z)(null===s||void 0===s?void 0:s.day),o.T[e]]})]}),(0,g.jsx)("ul",{className:_,children:s&&["personnel_units","tanks","armoured_fighting_vehicles","special_military_equip","vehicles_fuel_tanks","mlrs","artillery_systems","atgm_srbm_systems","aa_warfare_systems","cruise_missiles","helicopters","planes","uav_systems","warships_cutters"].map((function(t){var e,n,a,r,i;return(0,g.jsxs)("li",{className:m,children:[(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)("img",{src:null===y||void 0===y||null===(e=y[t])||void 0===e?void 0:e.icon,className:h,alt:null===y||void 0===y||null===(n=y[t])||void 0===n?void 0:n.title}),(0,g.jsx)("p",{className:p,children:null===y||void 0===y||null===(a=y[t])||void 0===a?void 0:a.title})]}),(0,g.jsx)("div",{children:(0,g.jsxs)("p",{className:v,children:[null===s||void 0===s||null===(r=s.stats)||void 0===r?void 0:r[t]," ",(0,g.jsxs)("span",{className:x,children:["(+",null===s||void 0===s||null===(i=s.increase)||void 0===i?void 0:i[t],")"]})]})})]},t)}))})]})}},7851:function(t,s,e){e.r(s),e.d(s,{default:function(){return E}});var n=e(9439),a=e(2791),r=e(9434),i=e(1066),c=e(1926),l=e(6009),o=JSON.parse('{"TN":{"ua":"\u041e\u0431\u0435\u0440\u0438 \u0434\u0430\u0442\u0443","en":"Choose date"},"Ki":{"ua":"\u0428\u0443\u043a\u0430\u0442\u0438","en":"Find"},"Kp":{"ua":"\u0414\u0430\u0442\u0430 \u043d\u0435 \u0431\u0443\u043b\u0430 \u043e\u0431\u0440\u0430\u043d\u0430","en":"Date not collected"}}'),u=(e(830),"MyCalendar_blockCalendar__wBSDC"),d="MyCalendar_calendarForm__EdG+Y",_="MyCalendar_title__EpDYL",m="MyCalendar_calendar__d1R1Y",f=e(184),h=function(t){var s=t.func,e=t.state,i=t.date,h=(0,a.useState)(!1),p=(0,n.Z)(h,2),v=p[0],x=p[1],g=(0,r.v9)((function(t){return t.myLanguage}));return(0,f.jsx)("div",{className:u,children:(0,f.jsxs)("form",{className:d,children:[(0,f.jsx)("h4",{className:_,children:o.TN[g]}),(0,f.jsx)(c.ZP,{className:m,onChange:function(t){e(t),v&&x(!1)},locale:"ua"===g?"uk":"en"}),!v&&(0,f.jsx)(l.Z,{name:o.Ki[g],func:function(){i?s():x(!0)}}),v&&(0,f.jsx)("p",{className:_,children:o.Kp[g]})]})})},p=e(8417),v=e(8160),x=e(8485),g=JSON.parse('{"TN":{"ua":"\u041e\u0439, \u0441\u043a\u043e\u0457\u043b\u0430\u0441\u044c \u044f\u043a\u0430\u0441\u044c \u043f\u0440\u0438\u043a\u0440\u0430 \u043d\u0435\u0441\u043f\u043e\u0434\u0456\u0432\u0430\u043d\u043a\u0430!","en":"Oops, some unpleasant surprise happened!"},"GK":{"ua":"*\u0421\u043a\u043e\u0440\u0456\u0448 \u0437\u0430 \u0432\u0441\u0435 \u0434\u0440\u0443\u0436\u0435 \u0442\u0438 \u043e\u0431\u0440\u0430\u0432 \u0434\u0430\u0442\u0443 \u044f\u043a\u0430 \u043f\u0440\u0438\u043f\u0430\u0434\u0430\u0454 \u0434\u043e 25-02-2022 \u0430\u0431\u043e \u043f\u0456\u0441\u043b\u044f ","en":"*Most likely, my friend, you chose a date that falls before 25-02-2022 or after "},"AD":{"ua":". \u041f\u0440\u043e\u0441\u0442\u043e c\u043f\u0440\u043e\u0431\u0443\u0439 \u043e\u0431\u0440\u0430\u0442\u0438 \u0456\u043d\u0448\u0443 \u0434\u0430\u0442\u0443.","en":". Just try to choose another date."},"w1":{"ua":"**\u0422\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043b\u0438\u0432\u0430 \u043d\u0435\u0441\u043f\u043e\u0434\u0456\u0432\u0430\u043d\u043a\u0430 \u044f\u043a\u0430 \u043d\u0435 \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u044c \u0432\u0456\u0434 \u043c\u0435\u043d\u0435, \u0442\u0430\u043a \u0449\u043e \u0441\u043f\u0440\u043e\u0431\u0443\u0439 \u0449\u0435 \u0440\u0430\u0437 \u0437\u0430\u0440\u0430\u0437, \u0430\u0431\u043e \u043f\u0456\u0437\u043d\u0456\u0448\u0435.","en":"**Also a surprise is possible that is beyond my control, so try again now or later."}}'),N="Error_block__X+6FE",j="Error_blockError__xup74",y="Error_blockImg__5ei48",Z="Error_img__+nP31",S="Error_blockText__zV3I4",b="Error_text__bdn3f",k="Error_textUpd__52WFb",w=function(){var t=(0,r.v9)((function(t){return t.myLanguage}));return(0,f.jsx)("div",{className:N,children:(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)("div",{className:y,children:(0,f.jsx)("img",{src:"/stats-of-war/images/nuclear_mushroom.png",className:Z,alt:"error icon"})}),(0,f.jsxs)("div",{className:S,children:[(0,f.jsx)("h4",{className:b,children:g.TN[t]}),(0,f.jsxs)("p",{className:k,children:[g.GK[t],(0,x.Z)((0,v.Z)(new Date)),g.AD[t]]}),(0,f.jsx)("p",{className:k,children:g.w1[t]})]})]})})},L=e(524),C=JSON.parse('{"X":{"ua":"\u0414\u043e \u0456\u043d\u0448\u043e\u0457 \u0434\u0430\u0442\u0438","en":"Another date"}}'),D="ChooseDatePage_btn__YSCxZ",E=function(){var t=(0,r.v9)((function(t){return t.myLanguage})),s=(0,a.useState)(""),e=(0,n.Z)(s,2),c=e[0],o=e[1],u=(0,a.useState)(null),d=(0,n.Z)(u,2),_=d[0],m=d[1],x=(0,a.useState)(!0),g=(0,n.Z)(x,2),N=g[0],j=g[1],y=(0,a.useState)(!1),Z=(0,n.Z)(y,2),S=Z[0],b=Z[1];return(0,f.jsxs)(f.Fragment,{children:[N&&(0,f.jsx)(h,{func:function(){try{(0,i.Z2)(c).then((function(t){m(t)})).catch((function(t){_||((0,v.Z)(new Date)===(0,v.Z)(c)?m(L):b(!0))}))}catch(t){console.error()}j(!1)},state:o,date:c}),!N&&(0,f.jsx)("div",{className:D,children:(0,f.jsx)(l.Z,{name:C.X[t],func:function(t){t.preventDefault(),m(null),S&&b(!1),j(!0),o("")}})}),!S&&_&&(0,f.jsx)(p.Z,{stats:_}),S&&(0,f.jsx)(w,{})]})}},1066:function(t,s,e){e.d(s,{Z2:function(){return r},cz:function(){return c},rl:function(){return i}});var n=e(1912),a=e(8160),r=function(t){return n.Z.get("https://russianwarship.rip/api/v2/statistics/".concat((0,a.Z)(t))).then((function(t){return t.data.data}))},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ua";return n.Z.get("https://russianwarship.rip/api/v2/terms/".concat(t)).then((function(t){return t.data.data}))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return n.Z.get("https://russianwarship.rip/api/v2/statistics?offset=".concat(t,"&limit=").concat(s)).then((function(t){return t.data.data.records}))}},8160:function(t,s){s.Z=function(t){return"object"===typeof t?"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0")):t}},2007:function(t,s){s.Z=function(t){var s=t&&t.toString().split(""),e=t%10;return"1"!==(t&&s[s.length-2])?1===e?"st":2===e?"nd":3===e?"rd":"th":"th"}},8485:function(t,s,e){var n=e(9439);s.Z=function(t){var s=t.split("-"),e=(0,n.Z)(s,3),a=e[0],r=e[1],i=e[2];return"".concat(i,"-").concat(r,"-").concat(a)}},524:function(t){t.exports=JSON.parse('{"stats":{"personnel_units":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","tanks":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","armoured_fighting_vehicles":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","special_military_equip":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","vehicles_fuel_tanks":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","mlrs":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","artillery_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","atgm_srbm_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","aa_warfare_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","cruise_missiles":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","helicopters":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","planes":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","uav_systems":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439","warships_cutters":"\u0437\u0430\u0447\u0435\u043a\u0430\u0439"}}')}}]);
//# sourceMappingURL=846.194fc553.chunk.js.map