(function(t){function e(e){for(var r,i,o=e[0],l=e[1],p=e[2],d=0,u=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(u.length)u.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("19b3"),s=n.n(r);s.a},"19b3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{staticClass:"primary",attrs:{app:"",dark:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("Post")]),n("span",{staticClass:"font-weight-light"},[t._v("Demo for gibrit.io")])]),n("v-spacer"),n("v-btn",{staticClass:"mx-2",attrs:{small:"",outlined:""},on:{click:t.create}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-plus")]),t._v(" Добавить ")],1)],1),n("v-content",[n("ListPost")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.status?n("v-alert",{attrs:{type:"success"}},[n("v-progress-circular",{staticClass:"mr-5",attrs:{indeterminate:"",color:"while"}}),t._v(" Сохранение ")],1):t._e(),t._l(t.posts,(function(t){return n("div",{key:t.id},[n("post",{attrs:{postdata:t}})],1)}))],2)},o=[],l=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{staticClass:"mx-auto mb-3",attrs:{"max-width":"100%"}},[n("div",{staticClass:"pointer",on:{click:function(e){t.view=!t.view}}},[n("v-img",{attrs:{src:t.postdata.image,height:"400px"}}),n("v-card-title",[n("h4",[t._v(t._s(t.postdata.title))])]),n("v-card-text",[n("p",{staticClass:"subtitle-1"},[t._v(t._s(t.postdata.description))])])],1),t.view?n("v-divider"):t._e(),t.view?n("v-card-text",[n("div",{domProps:{innerHTML:t._s(t.postdata.content)}})]):t._e(),t.view?n("v-card-text",[n("div",[n("h3",[t._v("Добавить комментарии")]),n("v-form",{staticClass:"mt-5"},[n("v-text-field",{attrs:{label:"Имя"},model:{value:t.comment.name,callback:function(e){t.$set(t.comment,"name",e)},expression:"comment.name"}}),n("v-textarea",{attrs:{label:"Текст сообщения"},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}}),n("v-btn",{staticClass:"mr-4 mb-5",attrs:{disabled:!t.valid,color:"success"},on:{click:t.addComment}},[t._v(" Добавить ")]),n("v-divider")],1),n("v-list",{staticClass:"mt-5"},[n("h3",[t._v("Комментарии")]),n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.postdata.comments,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.text)}})],1),n("v-btn",{staticClass:"mx-2",attrs:{small:"",outlined:"",fab:""}},[n("v-icon",{attrs:{color:"red darken-2",dark:""},on:{click:function(n){return t.delComment(e)}}},[t._v("mdi-minus")])],1)],1)})),1)],1)],1)]):t._e(),n("v-divider"),n("v-card-actions",[n("editable",{attrs:{post:t.postdata,dialog:t.postdata.open}}),t.view?t._e():n("div",[n("v-icon",{attrs:{large:"",color:"blue darken-2"}},[t._v("mdi-message-text")]),t._v(" "+t._s(t.postdata.comments.length)+" ")],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.remove(t.postdata)}}},[n("v-icon",{attrs:{middle:"",left:"",color:"red darken-2"}},[t._v("mdi-delete")]),t._v(" Удалить ")],1)],1)],1)],1)},c=[],d=(n("c975"),n("a434"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"ml-3",attrs:{text:""}},r),[n("v-icon",{attrs:{middle:"",left:"",color:"blue darken-2"}},[t._v("mdi-pencil")]),t._v(" Редактировать ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Редактирование")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Заголовок",required:""},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Фото",required:""},model:{value:t.post.image,callback:function(e){t.$set(t.post,"image",e)},expression:"post.image"}})],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Краткое описание"},model:{value:t.post.description,callback:function(e){t.$set(t.post,"description",e)},expression:"post.description"}})],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-textarea",{attrs:{label:"Полный текст статьи","auto-grow":"",filled:"",rows:"7",required:""},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Отмена")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.setStatus}},[t._v("Сохранить")])],1)],1)],1)],1)}),u=[],b=n("2f62");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={props:{post:Object,dialog:Boolean},methods:f({},Object(b["c"])({saving:"saving",saved:"saved"}),{setStatus:function(){this.dialog=!1,this.saving(),this.saved()}})},y=m,g=n("2877"),h=n("6544"),x=n.n(h),j=n("8336"),O=n("b0af"),_=n("99d9"),w=n("62ad"),V=n("a523"),C=n("169a"),P=n("132d"),k=n("0fd9"),S=n("2fa4"),T=n("8654"),D=n("a844"),$=Object(g["a"])(y,d,u,!1,null,null,null),E=$.exports;function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}x()($,{VBtn:j["a"],VCard:O["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:w["a"],VContainer:V["a"],VDialog:C["a"],VIcon:P["a"],VRow:k["a"],VSpacer:S["a"],VTextField:T["a"],VTextarea:D["a"]});var A={components:{editable:E},props:{postdata:Object},data:function(){return{view:!1,comment:{name:"",text:""}}},methods:L({},Object(b["c"])({remove:"remove"}),{addComment:function(){this.valid&&this.postdata.comments.push({name:this.comment.name,text:this.comment.text})},delComment:function(t){var e=this.postdata.comments.indexOf(t);-1!==e&&this.postdata.comments.splice(e,1)}}),computed:{valid:function(){return this.comment.name&&this.comment.text}}},B=A,M=n("ce7e"),q=n("4bd4"),F=n("adda"),J=n("8860"),G=n("da13"),H=n("5d23"),R=n("1baa"),z=Object(g["a"])(B,p,c,!1,null,null,null),K=z.exports;function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}x()(z,{VBtn:j["a"],VCard:O["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:V["a"],VDivider:M["a"],VForm:q["a"],VIcon:P["a"],VImg:F["a"],VList:J["a"],VListItem:G["a"],VListItemContent:H["a"],VListItemGroup:R["a"],VListItemSubtitle:H["b"],VListItemTitle:H["c"],VSpacer:S["a"],VTextField:T["a"],VTextarea:D["a"]});var U={components:{post:K},computed:Q({},Object(b["b"])({posts:"getAll",status:"getStatus"}))},W=U,X=n("0798"),Y=n("490a"),Z=Object(g["a"])(W,i,o,!1,null,null,null),tt=Z.exports;x()(Z,{VAlert:X["a"],VContainer:V["a"],VProgressCircular:Y["a"]});var et={name:"App",components:{ListPost:tt},methods:{create:function(){this.$store.commit("create")}}},nt=et,rt=(n("034f"),n("7496")),st=n("40dc"),at=n("a75b"),it=n("2a7f"),ot=Object(g["a"])(nt,s,a,!1,null,null,null),lt=ot.exports;x()(ot,{VApp:rt["a"],VAppBar:st["a"],VBtn:j["a"],VContent:at["a"],VIcon:P["a"],VSpacer:S["a"],VToolbarTitle:it["a"]});var pt=n("f309");r["a"].use(pt["a"]);var ct=new pt["a"]({icons:{iconfont:"mdi"}}),dt=(n("26e9"),[{title:"Статья о Турции",image:"https://travelus.fun/storage/app/uploads/public/5d5/789/e14/5d5789e14914b924014065.jpg",description:"Турция находится в восточном полушарии. 97% страны располагается в Азии, а остальные 3% в Европейской части планеты.",content:'<h2 dir="ltr" style="text-align: justify;">Общая информация</h2>\n    <p dir="ltr" style="text-align: justify;">Официальный язык: Турецкий. Турция - Президентская Республика. Светское государство. Валюта - Турецкая лира (0,18$). Безвизовое посещение до 30 дней для стран СНГ. Площадь страны 783 562 км2 , население 79 463 663 человек. Средняя стоимость проживания 1500-5000р. в сутки. 95 % населения Турции исповедуют ислам, на остальные 5% приходятся иудаизм, протестантство, православие и католичество.</p>\n    <h2 dir="ltr" style="text-align: justify;">Столица</h2>\n    <p dir="ltr" style="text-align: justify;">Столица Турецкой республики является город Анкара численностью населения 5,5 миллионов человек. Анкара - &nbsp;город университетов, наполненный государственными служащими, сотрудниками офисов, дипломатами и студентами. Несмотря на то, что столица не располагается на берегу моря, здесь туристы могут насладиться отличными ресторанами, множеством музеев и современными архитектурными сооружениями.</p>\n    <h2 dir="ltr" style="text-align: justify;">Климат и купальные сезоны</h2>\n    <p dir="ltr" style="text-align: justify;">На берегах &nbsp;Эгейского и Средиземного морей - &nbsp;средиземноморский климат. Почти весь год в этой части Турции солнечно и жарко, а в некоторые месяцы зимой климат достаточно мягкий, морозы бывают лишь в горной местности. Особенно популярен здесь для туристов курортный город – Мармарис. На побережье Черного моря климат переходит от средиземноморского к субтропическому. Здесь почти не бывает резких перепадов температуры. Погода в основном теплая, а в летний период не сильно жаркая. Самое холодное время в январе - средняя температура около + 5 °C. Климат севера Турции дождливый, влажный, туманный. Лето не жаркое, а зима холодная. Юг Турции обладает самыми комфортными погодными условиями для отдыхающих. Города: Анталия, Аланья, Белек, Сиде. Кемер – являются самыми популярными пляжными курортами. В этих краях &nbsp;довольно приятная температура в зимний период и жаркое лето. Купальный сезон - с апреля по октябрь. Западный берег, включая город Стамбул, имеет также благоприятный климат. Купальный сезон в этих местах открыт почти целый год, так как и в зимний период температура не опускается ниже + 10 °C.</p>\n    <h2 dir="ltr" style="text-align: justify;">Особенности</h2>\n    <p dir="ltr" style="text-align: justify;">Популярность турецких курортов благодаря отличным условиям для пляжного отдыха, доступным ценам и хорошо развитой туристический инфраструктуре растет с каждым годом. По данным статистики в 2018 году её посетило 45 миллионов человек со всех уголков планеты, среди них почти 6 миллионов россиян.&nbsp;</p>\n    <h2 dir="ltr" style="text-align: justify;">Природа</h2>\n    <p dir="ltr" style="text-align: justify;">Турецкая республика &nbsp;омывается 4 морями: Черное и Мраморное моря – на севере страны, Эгейское в западной части и Средиземное море – на юге. Именно множество живописных разнообразных благоустроенных пляжей привлекают сюда миллионы туристов каждый год.&nbsp;Рельеф страны представлен горами и плоскогорьями, и располагается она на высоте 1000 м над уровнем моря.&nbsp;Природа Турции совмещает в себе разнообразие трех континентов: Азии, Европы и Африки.&nbsp;Здесь более 10 тысяч видов растений, &nbsp;20% из которых - эндемики. С целью защиты этого редкого многообразия власти Турции организовали &nbsp;39 национальных заповедников.</p>\n    <h2 dir="ltr" style="text-align: justify;">Достопримечательности</h2>\n    <p dir="ltr" style="text-align: justify;">Турция представлена огромным количеством великолепных шедевров, которые созданы как самой природой, так &nbsp;древнейшими талантливыми мастерами. На юго-западе страны находится знаменитый термальный источник Памуккале. Его воды, обогащенные карбонатом кальция, образовали уникальнейшие белоснежные террасы, ванны и сталактиты. Также здесь находится живописный Бассейн Клеопатры, в котором целебная минеральная и газированная вода с постоянной температурой 35°С. Помимо этого, не далеко от сюда можно посетить руины античного города Хиераполис.</p>\n    <p dir="ltr" style="text-align: justify;">Дворец Долмабахче является роскошным древним комплексом, находящийся на побережье пролива Босфор в Стамбуле. Он построен в необычном для Турции стиле барокко и простирается вдоль берега на 600 метров. На западе турецкого побережья расположился античный город-музей Эфес. Главная его достопримечательность &nbsp;- это &nbsp;храм Артемиды, включенный в список 7 чудес света. В Анталии находится великолепная природная достопримечательность – каскад&nbsp;Дюденских водопадов. Один из них падает с высоты 27 метров в озеро в парке Дюден, а второй, высотой 40 метров, стекает бешеным потоком в море.&nbsp;</p>\n    <h2 dir="ltr" style="text-align: justify;">Кухня</h2>\n    <p dir="ltr" style="text-align: justify;">Блюда Турции представлены множествами рыб и прочими морскими дарами, среди которых лангусты, омары, мидии и креветки. Также теплая страна очень богата разнообразием фруктов и овощей: инжир, бананы, мушмула, апельсины, абрикосы, арбузы, финики и т.д. Очень известными являются турецкие сладости: похвала, рахат-лукум, пишмание. Чаще всего туристы покупают их в качестве подарков для своих близких.</p>',open:!1,comments:[{name:"Иван",text:"Турция волшебная страна"},{name:"Петр",text:"Очень хорошая строна для отдыха"},{name:"Елена",text:"Лучший и недорогой отдых в мире"}]},{title:"Статья о Шри-Ланке",image:"https://travelus.fun/storage/app/uploads/public/5d5/77c/61b/5d577c61b1262342336744.jpg",description:"Шри-Ланка - страна на юге Азии, расположенная на одноименном острове к юго-востоку от Индии и омываемая Лаккадивским морем, Индийским океаном и Бенгальским заливом. Неспроста название страны переводится как «Благословенный блистательный остров», ведь здесь невероятная природа из белоснежных пляжей, бесконечных лазурных океанских берегов, величественных гор, пальм и вечнозеленых лесных массивов переплетается с историческими памятниками, древней культурой, многочисленными храмами и с экстремальными видами спорта, современными небоскребами и шикарными отелями. Отдых в Шри-Ланке предназначен для тех, кто хочет уединиться от городского шума и суета в райском уголке.",content:'<h2 dir="ltr" style="text-align: justify;">Общая информация</h2>\n    <p dir="ltr" style="text-align: justify;">Однако, это экзотическое государство довольно развито. Основу экономического роста составляет сельское хозяйство и добыча драгоценных металлов и полезных ископаемых. Также страна входит в четверку лидеров по производству чая, именно отсюда экспортируется &nbsp;всем известный Цейлонский чай. (до 1972 года государство имело название – Цейлон). Официальный язык: Тамильский &nbsp;и Сингальский языки. Площадь страны - 65 610 км², население 21 675 648 человек. Государственное устройство - Демократическая Социалистическая Республика. Валюта - Шри-Ланкийская рупия &nbsp;– (0,005683$). При посещении Шри-Ланки в течение не более 30 дней оформляют визу в аэропорту за 25$. Шри-Ланка входит в тройку самых религиозных государств на планете, поскольку в соответствии с исследованиями , 99 % населения считают &nbsp;религию очень важной &nbsp;составляющей в их жизни. Согласно конституции страны вероисповедание выбирается свободно. Примерно 70% населения исповедует &nbsp;буддизм, 15% - индуизм (тамилы), 8% - христианство, 7% - ислам. Каждый год здесь отмечаются главные &nbsp;праздники по каждой из религий.&nbsp;</p>\n    <h2 dir="ltr" style="text-align: justify;">Столица</h2>\n    <p dir="ltr" style="text-align: justify;">Столицей Шри-Ланки официально признан &nbsp;город&nbsp;Шри-Джаяварденепура-Котте, населением всего чуть больше 100 тысяч человек, так как здесь находится государственный парламент. Но фактически столицей является крупнейший на острове город Коломбо, где население в 7 раз больше. Коломбо располагается &nbsp;на западном побережье и обладает крупнейшим портом, а также на территории города множество уникальных храмов, соборов, дворцов и заповедников.&nbsp;</p>\n    <h2 dir="ltr" style="text-align: justify;">Климат</h2>\n    <p dir="ltr" style="text-align: justify;">В Шри-Ланке тропический климат. На протяжении года температура колеблется в пределах лишь 5-6 градусов (+26&nbsp;–32&nbsp;°C),&nbsp;&nbsp;и по всей территории страны климатические условия практически не отличаются. &nbsp;Главное влияние на погоду оказывают лишь дожди. &nbsp;С апреля по июнь &nbsp;длится сезон дождей, который сопровождается с душной &nbsp;и жаркой атмосферой. &nbsp;Также с октября по ноябрь постоянно &nbsp;идут ливни с грозами, а на океане появляются штормы. &nbsp;Температура воды на побережьях круглый год пригодна для купания.&nbsp;Наиболее подходящем периодом для пляжного отдыха и серфинга на юго-западе Шри –Ланки является с декабря по апрель, а на северо-востоке страны &nbsp;- с марта по ноябрь.&nbsp;</p>\n    <h2 dir="ltr" style="text-align: justify;">Природа</h2>\n    <p dir="ltr" style="text-align: justify;">Основная территория Шри-Ланки - это &nbsp;прибрежные низменности, а горные вершины находятся лишь в центре острова. Самой высокой точкой на Шри-ланкке является гора Пидуруталагала высотой 2524 метров. 7% площади страны в пастбищах и лугах, а 32% занято зоной лесов, в которых огромная доля растений эндемиков. Леса здесь довольно насыщенные и очень многообразные. Некоторые деревьев имеют высоту по 50 метров. Также по всему острову разбросаны миллионы пальм, чаще всего встречаются кокосовые. Богата Шри –Ланка &nbsp;и водопадами, которых насчитывается более 100. Животный мир представлен: пантерами, шакалами, леопардами, рысями, обезьянами, медведями, фламинго, пестрые попугаи и павлины и т.д. В речных водах &nbsp;водятся крокодилы, достигающие до 8 м в длину. Также в стране можно понаблюдать за голубыми китами, дельфинами и кашалотами. Самой главной природной особенностью, привлекающей туристов, являются, конечно, сказочные песчаные пляжи и изумрудные волны вечно теплого океана.&nbsp;</p>\n    <h2 dir="ltr" style="text-align: justify;">Достопримечательности</h2>\n    <p dir="ltr" style="text-align: justify;">Ежегодно тысячи туристов посещают Пик Адама, это гора &nbsp;высотой 2243 метров , находящаяся в центральной части острова ближе к югу. Это место считается священным, на вершине расположен храм, а на скале есть слепок, похожий на человеческий след и получивший название «След Будды». В провинции Матале расположен Золотой храм Дамбулла, в пещерах которого более 150 статуй Будды, 73 из них золотые. Также неподалеку отсюда есть удивительная скала Сигирия, высотой 170 метров. Здесь можно увидеть разрушенную древнюю &nbsp;дворцовую крепость и множество наскальных фресок. &nbsp;В портовом районе Форт в Коломбо построены две великолепные 152 метровые башни-близнецы, а рядом еще один небоскреб – Банк Цейлона. В городе Пиннавела посещают огромный зоопарк с уникальными жителями острова, а также приют дрессированных &nbsp;слонов. &nbsp;</p>\n    <p dir="ltr" style="text-align: justify;">Познать чайные традиции и насладиться прекарсными живописными пейзажи туристы приезжают в Нувара Элия, где на чайных плантациях у подножья &nbsp;Пидуруталагала &nbsp;расположено &nbsp;множество СПА и гольф-отелей. Тех, кто приехал за морем и солнцем, Шри-Ланка встречает &nbsp;потрясающими пляжами, самые известные из которых: &nbsp;Негомбо рядом с аэропортом, &nbsp;благоустроенные городской пляж Маунт-Лавиния без волн, красивейший пляж Бентота рядом с которым много отелей и отличных ресторанов, Мирисса для любителей серфинга, Хиккадува с массой развлечений для молодежи и т.д.</p>\n    <h2 dir="ltr" style="text-align: justify;">Кухня</h2>\n    <p dir="ltr" style="text-align: justify;">В своих блюдах жители Шри-Ланки используют много пряностей и специй: карри, гвоздику, тмин, корицу. Их кухня во многом схожа с азиатской, так как ее основу составляют рис, овощи и морепродукты, особенно здесь распространен тунец. Также в стране большое обилие различных креветок, лобстеров и крабов. Популярен здесь и кокосовый орех, в своих различных проявлениях: мякоть ореха, кокосовое молоко, масло и нектар пальмы. Национальные блюда Шри-Ланки: Котту из местного хлеба, мяса и овощей; Роти – лепешка с начинкой; Тосай из чечевицы, кари и мякоти кокоса; Самбол из мякоти кокса, чили и лайма; Кирибати с белым рисом, &nbsp;кокосовым молоком и специями.&nbsp;</p>',open:!1,comments:[{name:"Иван",text:"Хорошая статья о Шри-Ланке"},{name:"Петр",text:"Очень хорошая страна азиатского региона"},{name:"Елена",text:"Отличное море и пляжи"}]},{title:"Италия - лучший отдых в европе",image:"https://travelus.fun/storage/app/uploads/public/5d5/12f/393/5d512f393e045142833438.jpg",description:"Италия расположилась на уникальной территории Апеннинского полуострова в центре Средиземноморья, а также на островах Сицилия и Сардиния на севера- западе. Страна сочетает в себе историю и современность, огромное культурное наследие и является великой империей эпохи Возрождения.",content:'<h2 dir="ltr">Общая информация</h2>\n    <p dir="ltr">Невероятные разнообразные рельефы, старинные памятники, романтичная Венеция, горные ландшафты Тосканы, южные склоны Альпийских гор, солнце, морской бриз &nbsp;включает в себя это удивительное государство в форме сапога на карте. Официальный язык: итальянский. Государственное устройство Италия является унитарной республикой парламентского типа. Валюта Евро (1,12%)&nbsp;</p>\n    <p dir="ltr">Виза Для посещения необходимо оформление Шенгенской визы. Площадь страны 301 340 км², население 60 795 612 человек. 92 % населения исповедует католицизм. В черте Рима расположен международный центр католицизма - город-государство Ватикан, где находится резиденция Римского Папы. Развитие общества Италии всегда было тесно связано с религией.</p>\n    <h2 dir="ltr">Столица</h2>\n    <p dir="ltr">Столицей Италии является величайший город в истории человечества &nbsp;– Рим, находящийся на 7 холмах на реке Тибр и имеющий численность населения&nbsp;&nbsp;2 872 800 человек.&nbsp;Согласно знаменитой поговорке именно к этому городу ведут все дороги. Практически на каждой улице столицы сохранились легендарные исторические памятники,&nbsp;которым по несколько тысяч лет.&nbsp;</p>\n    <h2 dir="ltr">Климат</h2>\n    <p dir="ltr">Климатические условия на территории всей страны разнообразны. &nbsp;На севере климат умеренный, а на юге и в центре субтропический, средиземноморский.&nbsp;На островах также средиземноморский климат, отличающийся &nbsp;жарким и сухим летним периодом (температура в июле +27°С) и довольно теплой зимой (температура в январе +9°С).&nbsp;</p>\n    <p dir="ltr">Снег в Италии бывает очень редко, за исключением Альпийских горных вершин.&nbsp;В южной части страны &nbsp;с весны по осень приходят горячие ветры из Сахары &nbsp;под названием "сирокко". В это время температура достигает +35°С. В столице температура воздуха бывает даже свыше +40°С.</p>\n    <h2 dir="ltr">Природа</h2>\n    <p dir="ltr">Невероятно красивая природа солнечной Италии привлекает миллионы путешественников. Это горная страна, омываемая пятью морями:&nbsp;Адриатическим, Ионическим, Средиземным, Тирренским и Лигурийским. Горные цепи Альп и Апеннинских гор&nbsp;стали популярным местом для лыжников и &nbsp;альпинистов.&nbsp;Гористый и холмистый ландшафты присущи и островной части Италии.</p>\n    <p dir="ltr">Особенность итальянский природы – наличие действующих вулканов, среди которых и знаменитый Везувий. Хоть вулканы и малоактивны, но из-за них в стране иногда происходят землетрясения. Также некоторые озера Италии имеют вулканическое происхождение. Вокруг них обустроены спа-курорты, так как вода здесь уникальная и обладает лечебными свойствами.</p>\n    <p dir="ltr">На равнинных участках множество садов и фермерских угодий, поскольку погода создает в стране идеальные условия для сельского хозяйства. Также здесь есть все условия для комфортного пляжного отдыха: галечные и белоснежные песчаные пляжи с чистейшей лазурной водой.&nbsp;</p>\n    <h2 dir="ltr">Достопримечательности</h2>\n    <p dir="ltr">Невероятная природа и древнейшие памятники архитектуры сделали страну одну из самых популярных для туризма. К самым знаменитым достопримечательностям Рима относятся: невероятный Колизей, который знаком каждому; сохранивший свой &nbsp;потрясающий облик храм Пантеон, возведенный еще до нашей эры; &nbsp;исторический комплекс памятников - Римский форум; огромный великолепный фонтан Треви.</p>\n    <p dir="ltr">Не менее популярен и уникальный город на воде – Венеция, где можно&nbsp;прокатиться на гондолах по живописным каналам, насладиться изысканной архитектурой и мостами. Внешний вид города практически не менялся в течении 6 веков и здесь полностью отсутствуют автомобили.&nbsp;Миллионы туристов не упускают и шанс сфотографироваться возле известной наклонной Пизанской башни в городе Пиза в центральной части Италии.</p>\n    <p dir="ltr">Ближе к югу страны находятся руины античного города Помпеи, который был разрушен извержением Везувия. Город в настоящее время представляет собой уникальный музей. Необыкновенной природной достопримечательностью является морская пещера Голубой Грот на острове Капри. Главной ее особенность это невероятно яркий голубой оттенок воды.</p>\n    <p dir="ltr">В Италии существует еще множество уникальных исторических сооружений и необычных прибрежных городов, где красочные дома удивительным образом расположились среди скал. &nbsp;Страна насчитывает &nbsp;самое большое число в мире &nbsp;памятников Всемирного наследия ЮНЕСКО – 53.</p>\n    <h2 dir="ltr">Кухня</h2>\n    <p dir="ltr">Всемирно известные традиционные блюда Италии это пицца, которую здесь можно попробовать на каждом шагу, &nbsp;и спагетти с различными соусами и овощами. Также не менее популярны здесь блюда из морепродуктов, артишоки; ньокки из&nbsp;картофеля, кукурузной муки и риккоты;&nbsp; ризотто; равиоли с разнообразными начинками; итальянские вина; овощной суп&nbsp;Минестроне; лазанья с сыром грибами и фаршем, которую необходимо попробовать именно здесь; нежнейшие тирамису в качестве десерта.\n    </p>',open:!1,comments:[{name:"Иван",text:"Хорошая европейская страна"},{name:"Петр",text:"Очень хорошая страна"},{name:"Елена",text:"Лучшая страна в моей жизни"}]}]),ut={state:{posts:dt,isSave:!1},getters:{getAll:function(t){return t.posts.reverse()},getStatus:function(t){return t.isSave}},mutations:{remove:function(t,e){var n=t.posts.indexOf(e);-1!==n&&t.posts.splice(n,1)},create:function(t){var e={title:"",description:"",content:"",open:!0,comments:[]};t.posts.push(e)},saving:function(t){t.isSave=!0},saved:function(t){setTimeout((function(){t.isSave=!1}),1e3)}}};r["a"].use(b["a"]);var bt=new b["a"].Store({modules:{post:ut}});r["a"].config.productionTip=!1,new r["a"]({store:bt,vuetify:ct,render:function(t){return t(lt)}}).$mount("#app")}});
//# sourceMappingURL=app.1f054269.js.map