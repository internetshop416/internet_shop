(function(){"use strict";var t={728:function(t,e,i){var a=i(7195),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"app-header"},[e("h1",{staticClass:"fw-bold ms-2"},[t._v(t._s(t.database.title.title))]),e("p",[t._v(t._s(t.database.title.description))])]),e("product-list",{attrs:{products:t.database.products,maximal:t.maximal}}),e("contacts",{attrs:{contacts:t.database.contacts}})],1)},o=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-center p-2"},[e("form",{staticClass:"col-md-6 d-flex align-items-center gap-1"},[e("label",{staticClass:"fw-bold w-75"},[t._v("Maximum price")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxAmount,expression:"maxAmount"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.maxAmount},on:{change:function(e){return t.$emit("update:maximal",t.maxAmount)},input:function(e){e.target.composing||(t.maxAmount=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxAmount,expression:"maxAmount"}],staticClass:"form-range pe-auto",attrs:{type:"range"},domProps:{value:t.maxAmount},on:{input:function(e){return t.$emit("update:maximal",t.maxAmount)},__r:function(e){t.maxAmount=e.target.value}}})])])},r=[],u={name:"price-slider",data:function(){return{maxAmount:30}},props:["maximal"]},c=u,l=i(1001),d=(0,l.Z)(c,s,r,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"productList"}},[t._l(t.filteredItems,(function(i,a){return e("section",{key:a,staticClass:"product"},[e("div",{staticClass:"product__photo"},[e("div",{staticClass:"photo-container"},[e("div",{staticClass:"photo-main"},[e("img",{attrs:{src:i.image}})])])]),e("div",{staticClass:"product__info"},[e("div",{staticClass:"title"},[e("h1",[t._v(t._s(i.name))]),e("span",[t._v("Артикул: "+t._s(i.id))])]),e("div",{staticClass:"price"},[e("span",[t._v(t._s(i.price)+" ₽")]),t._v(" "),e("span",{staticClass:"weight_for_price"},[t._v(" / "+t._s(i.weight_for_price)+" грамм")])]),e("div",{staticClass:"description"},[e("h3",[t._v("ОПИСАНИЕ")]),e("ul",[e("li",[t._v("Цвет: "+t._s(i.color))]),e("li",[t._v("Состав: "+t._s(i.ingredients))]),e("li",[t._v("Нить: "+t._s(i.length))]),e("li",[t._v("В наличии: "+t._s(i.available)+" грамм")]),e("li",[t._v(t._s(i.description))])])]),e("button",{staticClass:"buy--btn",on:{click:function(e){return t.showModal(i)}}},[t._v("Купить")])])])})),e("BuyModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],attrs:{product:t.currentProduct},on:{close:t.closeModal}})],2)},v=[],f=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"buy-modal-fade"}},[e("div",{staticClass:"buy-modal-backdrop"},[e("div",{staticClass:"buy-modal"},[t.readyToClose?e("header",{staticClass:"buy-modal-header"},[t._v(" Заказ оформлен ")]):e("header",{staticClass:"buy-modal-header"},[t._v(" Оформление нового заказа: "+t._s(t.product.name)+" Артикул: "+t._s(t.product.id)+" ")]),t.readyToClose?e("section",{staticClass:"buy-modal-body"},[e("h3",[t._v("Спасибо за заказ!")]),e("p",[t._v("Наш оператор свяжется с вами при первой возможности!")])]):e("section",{staticClass:"buy-modal-body"},[e("table",[e("tbody",[e("tr",[e("td",[t._v("Описание:")]),e("td",[t._v(t._s(t.product.description))])]),e("tr",[e("td",[t._v("Цена:")]),e("td",[t._v(t._s(t.product.price)+" руб. за "+t._s(t.product.weight_for_price)+" грамм")])]),e("tr",[e("td",[t._v("Количество:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})])]),e("tr",[e("td",[t._v("Контактные данные:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.contactInfo,expression:"contactInfo"}],attrs:{type:"text"},domProps:{value:t.contactInfo},on:{input:function(e){e.target.composing||(t.contactInfo=e.target.value)}}})])]),e("tr",[e("td",[t._v("Адрес доставки:")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),e("tr",[e("td",[t._v("Комментарий к заказу:")]),e("td",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])])])])]),e("footer",{staticClass:"buy-modal-footer"},[t.readyToClose?e("div",{staticClass:"buttons-container-centered"},[e("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:t.close}},[e("div",[t._v(" Закрыть ")])])]):e("div",{staticClass:"buttons-container"},[e("button",{staticClass:"btn-green button-left btn-cancel",attrs:{type:"button"},on:{click:t.close}},[e("div",[t._v(" Отмена ")])]),e("button",{staticClass:"btn-green button-right",attrs:{type:"button"},on:{click:t.buy}},[e("div",[t._v(" Заказать ")])])])])])])])},g=[],h=i(1412),_={name:"BuyModal",props:["product"],data:function(){return{quantity:1,contactInfo:"",address:"",comment:"",readyToClose:!1}},methods:{close(){this.$emit("close")},buy(){let t={name:this.product.name,id:this.product.id,quantity:this.quantity,contacts:this.contactInfo,address:this.address,comment:this.comment};h.ZP.init("29IJ0jY4u-_sIZ-Nb"),h.ZP.send("service_mp2brdj","template_vhyvgkb",t).then((function(t){console.log("SUCCESS!",t.status,t.text)}),(function(t){console.log("FAILED...",t)})),this.readyToClose=!0}}},b=_,y=(0,l.Z)(b,f,g,!1,null,null,null),x=y.exports,C={name:"product-list",props:["products","maximal"],components:{BuyModal:x},data:function(){return{isModalVisible:!1,currentProduct:{}}},methods:{showModal(t){this.currentProduct=t,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}},computed:{filteredItems:function(){const t=this.maximal;return this.products.filter((function(e){return t<=0||e.price<=t}))}}},w=C,j=(0,l.Z)(w,p,v,!1,null,"2e482a61",null),P=j.exports,M=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"contacts-footer"},[e("div",{staticClass:"contacts"},[e("p",{staticClass:"contacts-header"},[t._v("Наши контакты:")]),e("br"),e("table",[e("tbody",t._l(this.contacts,(function(i,a){return e("tr",{key:a},[e("td",[t._v(t._s(i.title)+": ")]),e("td",[e("a",{attrs:{href:i.href}},[t._v(t._s(i.value))])])])})),0)])])])},q=[],A={name:"contacts-footer",props:["contacts"]},N=A,O=(0,l.Z)(N,M,q,!1,null,null,null),k=O.exports,I=JSON.parse('{"title":{"title":"Бобинки-пушинки","page_title":"Бобинки-пушинки: интернет магазин","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis rutrum lacus ut aliquet. Nulla molestie dictum vehicula. Nunc ut mi consectetur, tempor turpis eget, fermentum erat."},"contacts":[{"title":"Электронная почта","href":"mailto:internetshop416@gmail.com","value":"internetshop416@gmail.com"},{"title":"Телефон","href":"tel:79031234567","value":"+7 (903) 123-4567"},{"title":"Telegram","href":"https://t.me/+79031234567","value":"@internetshop416"},{"title":"WhatsApp","href":"https://api.whatsapp.com/send?phone=79031234567","value":"+7 (903) 123-4567"}],"products":[{"id":1,"name":"Сariaggi jaipur","color":"корица","price":1300,"weight_for_price":100,"available":496,"ingredients":"70 гребенной кашемир + 30 шелк.","length":"2800 м в 100 г. (2/56)","description":"Готовое полотно мягкое, струящееся, с шелковым блеском.","image":"images/1.jpg"},{"id":2,"name":"Сariaggi jaipur: 2222","color":"корица","price":3933,"weight_for_price":100,"available":496,"ingredients":"70 гребенной кашемир + 30 шелк.","length":"2800 м в 100 г. (2/56)","description":"Готовое полотно мягкое, струящееся, с шелковым блеском.","image":"images/1.jpg"},{"id":3,"name":"Сariaggi jaipur: 3333","color":"корица","price":1238,"weight_for_price":100,"available":496,"ingredients":"70 гребенной кашемир + 30 шелк.","length":"2800 м в 100 г. (2/56)","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis rutrum lacus ut aliquet. Nulla molestie dictum vehicula. Nunc ut mi consectetur, tempor turpis eget, fermentum erat. Phasellus eu commodo massa, in auctor tellus. Aenean lorem lorem, rutrum vitae neque sit amet, gravida tincidunt enim. In posuere sapien eget metus elementum tristique. Duis commodo felis sit amet imperdiet tristique. Nulla eros leo, faucibus et diam ut, consectetur rutrum quam. Donec et eros eu leo tempus suscipit. Vestibulum ac dignissim arcu, in molestie ante. Mauris nunc odio, finibus quis enim quis, tincidunt fringilla sem. Proin commodo, lorem at scelerisque feugiat, ex elit volutpat ligula, eu dictum nisl enim sed ex. Suspendisse nec enim eget velit hendrerit elementum. Suspendisse potenti. Mauris id mi tincidunt felis lobortis elementum id sed nisi.            ","image":"images/1.jpg"},{"id":4,"name":"Сariaggi jaipur: 4444","color":"корица","price":800,"weight_for_price":100,"available":496,"ingredients":"70 гребенной кашемир + 30 шелк.","length":"2800 м в 100 г. (2/56)","description":"Готовое полотно мягкое, струящееся, с шелковым блеском.","image":"images/1.jpg"},{"id":5,"name":"Сariaggi jaipur: 5555","color":"корица","price":2500,"weight_for_price":100,"available":496,"ingredients":"70 гребенной кашемир + 30 шелк.","length":"2800 м в 100 г. (2/56)","description":"Готовое полотно мягкое, струящееся, с шелковым блеском.","image":"images/1.jpg"}]}'),S={name:"App",data:function(){return{maximal:0,products:[],database:I}},components:{ProductList:P,PriceSlider:m,Contacts:k},methods:{},mounted:function(){},created(){document.title=this.database.title.page_title}},T=S,Z=(0,l.Z)(T,n,o,!1,null,null,null),V=Z.exports;i(4894);a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(V)}).$mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,o){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],o=t[l][2];for(var r=!0,u=0;u<a.length;u++)(!1&o||s>=o)&&Object.keys(i.O).every((function(t){return i.O[t](a[u])}))?a.splice(u--,1):(r=!1,o<s&&(s=o));if(r){t.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,n,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,s=a[0],r=a[1],u=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(u)var l=u(i)}for(e&&e(a);c<s.length;c++)o=s[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(l)},a=self["webpackChunkmyproject"]=self["webpackChunkmyproject"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(728)}));a=i.O(a)})();
//# sourceMappingURL=app.f1f8beca.js.map