(this.webpackJsonpnovicam=this.webpackJsonpnovicam||[]).push([[0],{13:function(e,t,a){e.exports={card:"Card_card__euWIs",bottom_block:"Card_bottom_block__3ZTmE",bottom_text:"Card_bottom_text__3J7Am",plus:"Card_plus__IXPgl",favorite:"Card_favorite__2f72N"}},15:function(e,t,a){e.exports={overlay:"Drawer_overlay__BsJML",overlayVisible:"Drawer_overlayVisible__1niOl",drawer:"Drawer_drawer__3jXK6",drawer__top:"Drawer_drawer__top__29M7S",items:"Drawer_items__1gRmN"}},16:function(e,t,a){e.exports={header:"Header_header__vvO-5",header__logo:"Header_header__logo__3bRAq","header__logo-text":"Header_header__logo-text__KbT9m",header__nav:"Header_header__nav__3yGne"}},32:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(11),s=a(26),i=a.n(s),o=(a(32),a(33),a(8)),d=a(9),l=a(7),j=a.n(l),u=a(10),b=a(3),h=a(2),x=a(5),m=a.n(x),f=a.p+"static/media/btn-remove.845f3635.svg",p=a.p+"static/media/complete-order.b997b2a1.jpg",O=a.p+"static/media/empty-cart.03669791.jpg",v=a.p+"static/media/arrow.566fdd2a.svg",g=c.a.createContext({}),_=a(1),N=function(e){var t=e.title,a=e.image,r=e.description,n=c.a.useContext(g).setCartOpened;return Object(_.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(_.jsx)("img",{className:"mb-20",width:"120px",src:a,alt:"Empty"}),Object(_.jsx)("h2",{children:t}),Object(_.jsx)("p",{className:"opacity-6",children:r}),Object(_.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(_.jsx)("img",{style:{transform:"rotate(0deg)"},src:v,alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},k=function(){var e=c.a.useContext(g),t=e.cartItems,a=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:a,totalPrice:r}},w=a(15),C=a.n(w),y=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var I=function(e){var t=e.onClose,a=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=k(),o=i.cartItems,d=i.setCartItems,l=i.totalPrice,h=c.a.useState(null),x=Object(b.a)(h,2),g=x[0],w=x[1],I=c.a.useState(!1),S=Object(b.a)(I,2),A=S[0],T=S[1],F=c.a.useState(!1),P=Object(b.a)(F,2),V=P[0],B=P[1],E=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,m.a.post("https://61fe2adea58a4e00173c9751.mockapi.io/order",{items:o});case 4:t=e.sent,a=t.data,w(a.id),T(!0),d([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return c=o[r],e.next=14,m.a.delete("https://61fe2adea58a4e00173c9751.mockapi.io/cart/".concat(c.id));case 14:return e.next=16,y(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(");case 24:B(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{className:"".concat(C.a.overlay," ").concat(s?C.a.overlayVisible:""),children:Object(_.jsxs)("div",{className:C.a.drawer,children:[Object(_.jsxs)("h2",{className:C.a.drawer__top,children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(_.jsx)("img",{onClick:t,className:"cu-p",src:f,alt:"Close"})]}),n.length>0?Object(_.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(_.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(_.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(_.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"cartItemImg"}),Object(_.jsxs)("div",{className:"mr-20 flex",children:[Object(_.jsx)("p",{className:"mb-5",children:e.title}),Object(_.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(_.jsx)("img",{onClick:function(){return a(e.id)},className:"removeBtn",src:f,alt:"Remove"})]},e.id)}))}),Object(_.jsxs)("div",{className:"cartTotalBlock",children:[Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{children:[Object(_.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(_.jsx)("div",{}),Object(_.jsxs)("b",{children:[l," \u0440\u0443\u0431. "]})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(_.jsx)("div",{}),Object(_.jsxs)("b",{children:[(l/100*5).toFixed(2)," \u0440\u0443\u0431. "]})]})]}),Object(_.jsxs)("button",{disabled:V,onClick:E,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(_.jsx)("img",{src:v,alt:"Arrow"})]})]})]}):Object(_.jsx)(N,{title:A?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:A?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(g," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043a\u0430\u043c\u0435\u0440\u0443, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:A?p:O})]})})},S=a.p+"static/media/search.b2233f92.svg",A=a(27),T=a.p+"static/media/liked.bfa36d4d.svg",F=a.p+"static/media/unliked.4752529a.svg",P=a.p+"static/media/btn-checked.0c4d8afb.svg",V=a.p+"static/media/btn-plus.503fc6fb.svg",B=a(13),E=a.n(B);var L=function(e){var t=e.id,a=e.title,r=e.url,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,d=void 0!==o&&o,l=e.loading,j=void 0!==l&&l,u=c.a.useContext(g).isItemAdded,h=c.a.useState(d),x=Object(b.a)(h,2),m=x[0],f=x[1],p={id:t,parentId:t,title:a,url:r,price:n};return Object(_.jsx)("div",{className:E.a.card,children:j?Object(_.jsxs)(A.a,{speed:2,width:155,height:250,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(_.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(_.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(_.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(_.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(_.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(_.jsxs)(_.Fragment,{children:[s&&Object(_.jsx)("div",{className:E.a.favorite,onClick:function(){s(p),f(!m)},children:Object(_.jsx)("img",{src:m?T:F,alt:"Unliked"})}),Object(_.jsx)("img",{width:"100%",height:135,src:r,alt:"Sneakers"}),Object(_.jsx)("h5",{children:a}),Object(_.jsxs)("div",{className:E.a.bottom_block,children:[Object(_.jsxs)("div",{className:E.a.bottom_text,children:[Object(_.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(_.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(_.jsx)("img",{className:E.a.plus,onClick:function(){i(p)},src:u(t)?P:V,alt:"Plus",checked:!0})]})]})})};var D=function(e){var t=e.items,a=e.searchValue,r=e.setSearchValue,c=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(_.jsxs)("div",{className:"content p-40",children:[Object(_.jsxs)("div",{className:"top-title",children:[Object(_.jsx)("h1",{children:a?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(a,'"'):"\u0412\u0441\u0435 \u043a\u0430\u043c\u0435\u0440\u044b"}),Object(_.jsxs)("div",{className:"search-block d-flex",children:[Object(_.jsx)("img",{src:S,alt:"Search"}),a&&Object(_.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:f,alt:"Clear"}),Object(_.jsx)("input",{onChange:c,value:a,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(_.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return(i?Object(d.a)(Array(8)):e).map((function(e,t){return Object(_.jsx)(L,Object(o.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var R=function(){var e=c.a.useContext(g),t=e.favorites,a=e.onAddToFavorite;return Object(_.jsxs)("div",{className:"content p-40",children:[Object(_.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(_.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(_.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(_.jsx)(L,Object(o.a)({favorited:!0,onFavorite:a},e),t)}))})]})};var H=function(){var e=c.a.useContext(g),t=(e.onAddToFavorite,e.onAddToCart,c.a.useState([])),a=Object(b.a)(t,2),r=a[0],n=a[1],s=c.a.useState(!0),i=Object(b.a)(s,2),l=i[0],h=i[1];return c.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://61fe2adea58a4e00173c9751.mockapi.io/order");case 3:t=e.sent,a=t.data,n(a.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.items))}),[])),h(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(_.jsxs)("div",{className:"content p-40",children:[Object(_.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(_.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(_.jsx)("div",{className:"d-flex flex-wrap",children:(l?Object(d.a)(Array(8)):r).map((function(e,t){return Object(_.jsx)(L,Object(o.a)({loading:l},e),t)}))})]})},J=a.p+"static/media/logo.cd71228b.png",M=a.p+"static/media/cart.896ad80a.svg",K=a.p+"static/media/heart.0f1a07ae.svg",X=a.p+"static/media/user.a2d7f9ab.svg",q=a(16),G=a.n(q);var U=function(e){var t=k().totalPrice;return Object(_.jsxs)("header",{className:G.a.header,children:[Object(_.jsx)(n.b,{to:"/",children:Object(_.jsxs)("div",{className:G.a.header__logo,children:[Object(_.jsx)("img",{width:40,height:40,src:J,alt:"Logotype"}),Object(_.jsxs)("div",{className:"header__logo-text",children:[Object(_.jsx)("h3",{children:"NOVICAM"}),Object(_.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0432\u0438\u0434\u0435\u043e\u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f"})]})]})}),Object(_.jsxs)("ul",{className:G.a.header__nav,children:[Object(_.jsxs)("li",{onClick:e.onClickCart,children:[Object(_.jsx)("img",{width:18,height:18,src:M,alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(_.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(_.jsx)("li",{children:Object(_.jsx)(n.b,{to:"/favorites",children:Object(_.jsx)("img",{width:18,height:18,src:K,alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(_.jsx)("li",{children:Object(_.jsx)(n.b,{to:"/orders",children:Object(_.jsx)("img",{width:18,height:18,src:X,alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})};var W=function(){var e=c.a.useState([]),t=Object(b.a)(e,2),a=t[0],r=t[1],n=c.a.useState([]),s=Object(b.a)(n,2),i=s[0],l=s[1],x=c.a.useState([]),f=Object(b.a)(x,2),p=f[0],O=f[1],v=c.a.useState(""),N=Object(b.a)(v,2),k=N[0],w=N[1],C=c.a.useState(!1),y=Object(b.a)(C,2),S=y[0],A=y[1],T=c.a.useState(!0),F=Object(b.a)(T,2),P=F[0],V=F[1];c.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,a,c,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([m.a.get("https://61fe2adea58a4e00173c9751.mockapi.io/cart"),m.a.get("https://61fe2adea58a4e00173c9751.mockapi.io/favorite"),m.a.get("https://61fe2adea58a4e00173c9751.mockapi.io/items")]);case 3:t=e.sent,a=Object(b.a)(t,3),c=a[0],n=a[1],s=a[2],V(!1),l(c.data),O(n.data),r(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ;("),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var B=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return l((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,m.a.delete("https://61fe2adea58a4e00173c9751.mockapi.io/cart/".concat(a.id));case 6:e.next=14;break;case 8:return l((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,m.a.post("https://61fe2adea58a4e00173c9751.mockapi.io/cart",t);case 11:r=e.sent,c=r.data,l((function(e){return e.map((function(e){return e.parentId===c.parentId?Object(o.a)(Object(o.a)({},e),{},{id:c.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}m.a.delete("https://61fe2adea58a4e00173c9751.mockapi.io/favorite/".concat(t.id)),O((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://61fe2adea58a4e00173c9751.mockapi.io/favorite",t);case 8:a=e.sent,r=a.data,O((function(e){return[].concat(Object(d.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)(g.Provider,{value:{items:a,cartItems:i,favorites:p,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:E,onAddToCart:B,setCartOpened:A,setCartItems:l},children:Object(_.jsxs)("div",{className:"wrapper clear",children:[Object(_.jsx)(I,{items:i,onClose:function(){return A(!1)},onRemove:function(e){try{m.a.delete("https://61fe2adea58a4e00173c9751.mockapi.io/cart/".concat(e)),l((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:S}),Object(_.jsx)(U,{onClickCart:function(){return A(!0)}}),Object(_.jsxs)(h.c,{children:[Object(_.jsx)(h.a,{path:"",exact:!0,element:Object(_.jsx)(D,{items:a,cartItems:i,searchValue:k,setSearchValue:w,onChangeSearchInput:function(e){w(e.target.value)},onAddToFavorite:E,onAddToCart:B,isLoading:P})}),Object(_.jsx)(h.a,{path:"/favorites",element:Object(_.jsx)(R,{})}),Object(_.jsx)(h.a,{path:"/orders",element:Object(_.jsx)(H,{})})]})]})})};i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(n.a,{hashType:"noslash",children:Object(_.jsx)(W,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9771cae6.chunk.js.map