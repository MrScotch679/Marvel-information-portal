(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{23:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(0);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Loading error"})}},235:function(t,e,n){},236:function(t,e,n){},24:function(t,e,n){"use strict";var r=n(39),c=n.n(r),a=n(40),i=n(4),s=n(1),o=n(41).default;e.a=function(){var t=Object(s.useState)("waiting"),e=Object(i.a)(t,2),n=e[0],r=e[1],u=Object(s.useCallback)((function(){r("loading")}),[]),l="https://gateway.marvel.com:443/v1/public/",b="apikey=1993ba6ffb336a484ae8d64ac5c9983a",m=210,p=function(){var t=Object(a.a)(c.a.mark((function t(){var e,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:m,r("loading"),t.next=4,o.get("".concat(l,"characters?limit=9&offset=").concat(e,"&").concat(b));case 4:return n=t.sent,t.abrupt("return",n.data.data.results.map(j));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r("loading"),t.next=3,o.get("".concat(l,"characters/").concat(e,"?").concat(b));case 3:return n=t.sent,t.abrupt("return",j(n.data.data.results[0]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r("loading"),t.next=3,o.get("".concat(l,"characters?name=").concat(e,"&").concat(b));case 3:return n=t.sent,t.abrupt("return",j(n.data.data.results[0]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){return{name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"No description for this character...",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:0!==t.comics.available?t.comics.items.slice(0,10):[{name:"No information about comics..."}]}},h=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r("loading"),t.next=3,o.get("".concat(l,"comics/").concat(e,"?").concat(b));case 3:return n=t.sent,t.abrupt("return",O(n.data.data.results[0]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(c.a.mark((function t(){var e,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:m,r("loading"),t.next=4,o.get("".concat(l,"comics?limit=8&offset=").concat(e,"&").concat(b));case 4:return n=t.sent,t.abrupt("return",n.data.data.results.map(O));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(t){return{title:t.title,description:t.description?t.description:"No description for this comic...",pages:t.pageCount+" pages",shop:t.urls.url,prices:t.prices[0].price?t.prices[0].price+"$":"No price information...",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,id:t.id}};return{process:n,setProcess:r,getAllCharacters:p,getCharacter:f,getCharacterByName:d,getSingleComic:h,getAllComics:g,clearError:u}}},245:function(t,e,n){"use strict";n.r(e);n(235);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(0),i=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})},s=n(31),o=n(4),u=n(1),l=n(5),b=n(9),m=n(23),p=n(24),f=(n(236),function(t,e,n){switch(t){case"waiting":return Object(a.jsx)(b.a,{});case"loading":return n?Object(a.jsx)(e,{}):Object(a.jsx)(b.a,{});case"confirmed":return Object(a.jsx)(e,{});case"error":return Object(a.jsx)(m.a,{})}}),d=function(t){var e=Object(u.useState)([]),n=Object(o.a)(e,2),r=n[0],c=n[1],i=Object(u.useState)(!1),b=Object(o.a)(i,2),m=b[0],d=b[1],j=Object(u.useState)(210),h=Object(o.a)(j,2),g=h[0],O=h[1],v=Object(u.useState)(!1),x=Object(o.a)(v,2),w=x[0],y=x[1],_=Object(p.a)(),N=_.process,k=_.setProcess,A=_.getAllComics;Object(u.useEffect)((function(){C(g,!0)}),[]);var S=function(t){var e=!1;t<8&&(e=!0),c((function(e){return[].concat(Object(s.a)(r),Object(s.a)(t))})),d((function(t){return!1})),O((function(e){return e+t.length})),y((function(t){return e}))},C=function(t,e){d(!e),A(t).then(S).then((function(){return k("confirmed")})).catch((function(){return k("error")}))};return Object(a.jsxs)("div",{className:"comics__list",children:[f(N,(function(){return function(t){var e=t.map((function(t){return Object(a.jsx)("li",{className:"comics__item",children:Object(a.jsxs)(l.b,{to:"/comics/".concat(t.id),children:[Object(a.jsx)("img",{src:t.thumbnail,alt:"ultimate war",className:"comics__item-img"}),Object(a.jsx)("div",{className:"comics__item-name",children:t.title}),Object(a.jsx)("div",{className:"comics__item-price",children:t.prices})]})},t.id)}));return Object(a.jsx)("ul",{className:"comics__grid",children:e})}(r)}),m),Object(a.jsx)("button",{className:"button button__main button__long",disabled:m,style:{display:w?"none":"block"},onClick:function(){return C(g)},children:Object(a.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i,{}),Object(a.jsx)(d,{})]})}},31:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(8);var c=n(6);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=6.3c3e360c.chunk.js.map