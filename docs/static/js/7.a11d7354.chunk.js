(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{237:function(e,t,c){},24:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",n=c(0);t.a=function(){return Object(n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Loading error"})}},242:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c(2),r=c(5),s=c(1),i=c(45),o=c(26),u=(c(237),c(0)),l=function(e){var t=e.data,c=t.title,a=t.description,n=t.pages,s=t.prices,i=t.thumbnail;return Object(u.jsxs)("div",{className:"single-comic",children:[Object(u.jsx)("img",{src:i,alt:c,className:"single-comic__img"}),Object(u.jsxs)("div",{className:"single-comic__info",children:[Object(u.jsx)("h2",{className:"single-comic__name",children:c}),Object(u.jsx)("p",{className:"single-comic__descr",children:a}),Object(u.jsx)("p",{className:"single-comic__descr",children:n}),Object(u.jsx)("p",{className:"single-comic__descr",children:"Language: en-us"}),Object(u.jsx)("div",{className:"single-comic__price",children:s})]}),Object(u.jsx)(r.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};t.default=function(){var e=Object(n.g)().comicId,t=Object(s.useState)({}),c=Object(a.a)(t,2),r=c[0],m=c[1],p=Object(o.a)(),d=p.process,b=p.setProcess,f=p.getSingleComic,h=p.clearError;Object(s.useEffect)((function(){j()}),[e]);var j=function(){h(),f(e).then(g).then((function(){return b("confirmed")})).catch((function(){return b("error")}))},g=function(e){m(e)};return Object(u.jsx)(u.Fragment,{children:Object(i.a)(d,l,r)})}},26:function(e,t,c){"use strict";var a=c(46),n=c.n(a),r=c(47),s=c(4),i=c(1),o=c(48).default;t.a=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],a=t[1],u=Object(i.useCallback)((function(){a("loading")}),[]),l="https://gateway.marvel.com:443/v1/public/",m="apikey=1993ba6ffb336a484ae8d64ac5c9983a",p=210,d=function(){var e=Object(r.a)(n.a.mark((function e(){var t,c,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:p,a("loading"),e.next=4,o.get("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(m));case 4:return c=e.sent,e.abrupt("return",c.data.data.results.map(h));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a("loading"),e.next=3,o.get("".concat(l,"characters/").concat(t,"?").concat(m));case 3:return c=e.sent,e.abrupt("return",h(c.data.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a("loading"),e.next=3,o.get("".concat(l,"characters?name=").concat(t,"&").concat(m));case 3:return c=e.sent,e.abrupt("return",h(c.data.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"We have no information about...",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,id:e.id,comics:0!==e.comics.available?e.comics.items.slice(0,10):[{name:"We have no information about..."}]}},j=function(){var e=Object(r.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a("loading"),e.next=3,o.get("".concat(l,"comics/").concat(t,"?").concat(m));case 3:return c=e.sent,e.abrupt("return",v(c.data.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(n.a.mark((function e(){var t,c,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:p,a("loading"),e.next=4,o.get("".concat(l,"comics?limit=8&offset=").concat(t,"&").concat(m));case 4:return c=e.sent,e.abrupt("return",c.data.data.results.map(v));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){return{title:e.title,description:e.description?e.description:"We have no description information for this comic",pages:e.pageCount+" pages",shop:e.urls.url,prices:e.prices[0].price?e.prices[0].price+"$":"We have no price information for this comic",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,id:e.id}};return{process:c,setProcess:a,getAllCharacters:d,getCharacter:b,getCharacterByName:f,getSingleComic:j,getAllComics:g,clearError:u}}},45:function(e,t,c){"use strict";var a=c(9),n=c(24),r=(c(51),c(0)),s=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(r.jsxs)("div",{className:"skeleton",children:[Object(r.jsxs)("div",{className:"pulse skeleton__header",children:[Object(r.jsx)("div",{className:"pulse skeleton__circle"}),Object(r.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"}),Object(r.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(r.jsx)(s,{});case"loading":return Object(r.jsx)(a.a,{});case"confirmed":return Object(r.jsx)(t,{data:c});case"error":return Object(r.jsx)(n.a,{})}}},51:function(e,t,c){}}]);
//# sourceMappingURL=7.a11d7354.chunk.js.map