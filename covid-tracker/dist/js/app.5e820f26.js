(function(e){function t(t){for(var s,r,o=t[0],l=t[1],d=t[2],i=0,u=[];i<o.length;i++)r=o[i],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);b&&b(t);while(u.length)u.shift()();return c.push.apply(c,d||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},c=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"6493b6c1"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=n[e]=[t,s]}));t.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(i);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+c+")",d.name="ChunkLoadError",d.type=s,d.request=c,a[1](d)}n[e]=void 0}};var i=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/covid-tracker/dist/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var b=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"06c4":function(e,t,a){"use strict";a("b875")},"3df9":function(e,t,a){"use strict";a("77cf")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),n={class:"min-h-screen flex justify-between flex-col"},c={class:"container"};function r(e,t,a,r,o,l){var d=Object(s["x"])("the-header"),i=Object(s["x"])("router-view"),b=Object(s["x"])("the-footer");return Object(s["q"])(),Object(s["e"])("div",n,[Object(s["h"])(d),Object(s["h"])("div",c,[Object(s["h"])(i)]),Object(s["h"])(b)])}var o={class:"text-center bg-blue-900 text-white p-4"},l=Object(s["h"])("h1",{class:"md:text-3xl text-5xl"},[Object(s["h"])("span",{class:"fa fa-viruses"}),Object(s["g"])(" Covid-19 Tracker")],-1),d=Object(s["h"])("p",null,[Object(s["g"])("API: "),Object(s["h"])("a",{href:"https://disease.sh/docs/#/",class:"text-blue-200",target:"_blank"},"disease.sh")],-1);function i(e,t,a,n,c,r){return Object(s["q"])(),Object(s["e"])("header",o,[l,d])}var b={name:"Header"};b.render=i;var u=b,j={class:"p-2 text-center shadow-inner bg-blue-50 mt-8"},f=Object(s["g"])(" Written by "),h=Object(s["h"])("a",{class:"underline",href:"https://github.com/ic3top"},"@ic3top",-1);function m(e,t,a,n,c,r){return Object(s["q"])(),Object(s["e"])("footer",j,[f,h])}var p={name:"TheFooter"};p.render=m;var O=p,v={name:"App",components:{TheHeader:u,TheFooter:O}};a("06c4");v.render=r;var x=v,y=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),g={key:0},w={class:"grid grid-cols-4 xl:grid-cols-2 md:grid-cols-1 mt-4 gap-4 items-center"},k={class:"h-40 flex items-center justify-center shadow-md hover:shadow-lg rounded border-2"},C=Object(s["h"])("span",{class:"fas fa-plus"},null,-1),D=Object(s["g"])(" Delete all "),z=Object(s["h"])("span",{class:"fas fa-broom"},null,-1),q={key:1,class:"text-center mt-48"},L=Object(s["h"])("span",{class:"fas fa-circle-notch fa-spin text-4xl"},null,-1),A=Object(s["h"])("p",{class:"text-gray-500 text-1xl mt-5"},"Fetching data...",-1);function T(e,t,a,n,c,r){var o=Object(s["x"])("data-title"),l=Object(s["x"])("data-boxes"),d=Object(s["x"])("v-card"),i=Object(s["x"])("popup-form");return Object(s["q"])(),Object(s["e"])(s["a"],null,[c.loading?(Object(s["q"])(),Object(s["e"])("main",q,[L,A])):(Object(s["q"])(),Object(s["e"])("main",g,[Object(s["h"])(o,{dataDate:c.stats.updated},null,8,["dataDate"]),Object(s["h"])(l,{stats:c.stats},null,8,["stats"]),Object(s["h"])("div",w,[(Object(s["q"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(c.cardsList,(function(e){return Object(s["q"])(),Object(s["e"])(d,{key:e.countryData.countryInfo._id,title:e.countryData.country,"additional-data":e},null,8,["title","additional-data"])})),128)),Object(s["h"])("div",k,[Object(s["h"])("button",{class:"w-full h-full text-white bg-auto text-blue-900 text-3xl",onClick:t[1]||(t[1]=function(){return r.showModalHandler&&r.showModalHandler.apply(r,arguments)})},[C])])]),c.cardsList.length>0?(Object(s["q"])(),Object(s["e"])("button",{key:0,onClick:t[2]||(t[2]=function(){return r.clearCountryData&&r.clearCountryData.apply(r,arguments)}),class:"bg-blue-900 text-white rounded p-3 mt-10 focus:outline-none hover:bg-blue-600"},[D,z])):Object(s["f"])("",!0)])),Object(s["h"])(i,{"show-modal":c.showModal,countries:c.countries,onClose:t[3]||(t[3]=function(e){return c.showModal=!1}),onAddCard:r.addCardHandler},null,8,["show-modal","countries","onAddCard"])],64)}var S=a("1da1"),_=(a("96cf"),a("4de4"),{class:"text-center"}),M=Object(s["h"])("div",{class:"flex justify-center items-center h-20"},[Object(s["h"])("h2",{class:"text-3xl font-bold"},"Global"),Object(s["h"])("span",{class:"fas fa-globe text-2xl ml-1"})],-1),N={class:"text-2xl mt-4 mb-5"},V=Object(s["h"])("p",{class:"text-sm text-gray-500"},"(info for the last 24h)",-1);function F(e,t,a,n,c,r){return Object(s["q"])(),Object(s["e"])("div",_,[M,Object(s["h"])("div",N,[Object(s["h"])("p",null,Object(s["z"])(r.timestamp),1),V])])}a("a9e3");var P=a("c1df"),W=a.n(P),H={name:"DataTitle",props:{dataDate:{type:Number,required:!0}},computed:{timestamp:function(){return W()(this.dataDate).format("DD.MM.YYYY")}}};H.render=F;var I=H,R=Object(s["G"])("data-v-1c197fa0");Object(s["t"])("data-v-1c197fa0");var E={class:"grid grid-cols-2 md:grid-cols-1 gap-4"},B={class:"shadow-md bg-blue-100 p-10 rounded text-center transition-shadow\n                hover:shadow-lg"},J=Object(s["h"])("h2",{class:"text-3xl text-blue-900 mb-4 font-bold"},"Cases",-1),Y={class:"text-2xl mb-4"},U=Object(s["h"])("h3",{class:"font-bold"},"New:",-1),G={class:"text-2xl mb-4"},$=Object(s["h"])("h3",{class:"font-bold"},"Total:",-1),K={class:"shadow-md bg-blue-900 p-10 rounded text-center transition-shadow hover:shadow-lg"},Q=Object(s["h"])("h2",{class:"text-3xl mb-4 font-bold text-white"},"Deaths",-1),X={class:"text-2xl mb-4 text-blue-50"},Z=Object(s["h"])("h3",{class:"font-bold"},"New:",-1),ee={class:"text-2xl mb-4 text-blue-50"},te=Object(s["h"])("h3",{class:"font-bold"},"Total:",-1);Object(s["r"])();var ae=R((function(e,t,a,n,c,r){return Object(s["q"])(),Object(s["e"])("div",E,[Object(s["h"])("div",B,[J,Object(s["h"])("div",Y,[U,Object(s["h"])("p",null,Object(s["z"])(r.numberWithCommas(a.stats.todayCases)),1)]),Object(s["h"])("div",G,[$,Object(s["h"])("p",null,Object(s["z"])(r.numberWithCommas(a.stats.cases)),1)])]),Object(s["h"])("div",K,[Q,Object(s["h"])("div",X,[Z,Object(s["h"])("p",null,Object(s["z"])(r.numberWithCommas(a.stats.todayDeaths)),1)]),Object(s["h"])("div",ee,[te,Object(s["h"])("p",null,Object(s["z"])(r.numberWithCommas(a.stats.deaths)),1)])])])})),se=(a("ac1f"),a("5319"),a("25f0"),{name:"DataBoxes",props:["stats"],methods:{numberWithCommas:function(e){return"undefined"!==typeof e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):(console.error("FATAL: invalid data"),"FATAL: invalid data")}}});se.render=ae,se.__scopeId="data-v-1c197fa0";var ne=se,ce=Object(s["G"])("data-v-39a5b3b5");Object(s["t"])("data-v-39a5b3b5");var re={key:0,class:"modal-mask"},oe={class:"shadow-xl w-1/3 xl:w-1/2 md:w-full md:mx-8"},le={class:"relative p-2 bg-blue-800 text-center rounded-t-md"},de=Object(s["h"])("h2",{class:"font-bold text-2xl text-white"},"Add a new country",-1),ie=Object(s["h"])("span",{class:"fas fa-times"},null,-1),be={class:"bg-white rounded-b-md p-4 font-normal"},ue=Object(s["h"])("hr",null,null,-1),je=Object(s["h"])("h4",{class:"mt-4 text-gray-500"},"Additional information:",-1),fe=Object(s["h"])("hr",{class:"mt-4"},null,-1),he={class:"flex items-center justify-between p-1"},me={key:0,class:"text-red-400"},pe=Object(s["h"])("button",{type:"submit",class:"bg-blue-800 text-white p-3 px-4 rounded hover:bg-blue-600"}," Add ",-1);Object(s["r"])();var Oe=ce((function(e,t,a,n,c,r){return Object(s["q"])(),Object(s["e"])(s["b"],{name:"bounce"},{default:ce((function(){return[a.showModal?(Object(s["q"])(),Object(s["e"])("div",re,[Object(s["h"])("div",oe,[Object(s["h"])("div",le,[de,Object(s["h"])("button",{onClick:t[1]||(t[1]=function(){return r.onClose&&r.onClose.apply(r,arguments)}),class:"absolute top-1 right-3 p-1 text-white text-lg"},[ie])]),Object(s["h"])("div",be,[Object(s["h"])("form",{onSubmit:t[5]||(t[5]=Object(s["F"])((function(){return r.onFormSubmit&&r.onFormSubmit.apply(r,arguments)}),["prevent"])),class:"py-4 flex flex-col w-full"},[Object(s["E"])(Object(s["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.countryName=e}),class:[{"border-red-300":!c.valid},"p-2 border"],onInput:t[3]||(t[3]=function(e){return c.valid=!0}),type:"text",placeholder:"Country name..."},null,34),[[s["C"],c.countryName]]),ue,je,(Object(s["q"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(c.allValues,(function(e){return Object(s["q"])(),Object(s["e"])("div",{key:e,class:"flex items-center mt-2 border p-2"},[Object(s["E"])(Object(s["h"])("input",{class:"w-4 h-4",type:"checkbox",id:e,value:e,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.chosenValues=e})},null,8,["id","value"]),[[s["B"],c.chosenValues]]),Object(s["h"])("label",{class:"ml-2 w-full text-lg",for:e},Object(s["z"])(e),9,["for"])])})),128)),fe,Object(s["h"])("div",he,[Object(s["h"])("div",null,[c.valid?Object(s["f"])("",!0):(Object(s["q"])(),Object(s["e"])("p",me,"We didn't find such country..."))]),pe])],32)])])])):Object(s["f"])("",!0)]})),_:1})})),ve=(a("7db0"),a("fb6a"),{name:"PopupForm",props:{showModal:{type:Boolean,default:function(){return!1}},countries:{countries:Array,required:!0}},emits:["close","addCard"],data:function(){return{chosenValues:["population","recovered","tests","todayCases","active"],allValues:["population","recovered","tests","todayCases","active"],countryName:"",valid:!0}},methods:{onFormSubmit:function(){var e=this;if(this.countryName){var t=this.countries.find((function(t){return t.country.toLocaleLowerCase()===e.countryName.toLocaleLowerCase()}));if(t){var a=JSON.parse(JSON.stringify(this.chosenValues));return this.$emit("addCard",{countryData:t,chosenValues:a}),this.$emit("close"),void this.resetData()}this.valid=!1}else this.valid=!1},onClose:function(){this.$emit("close"),this.resetData()},resetData:function(){this.chosenValues=this.allValues.slice(),this.countryName="",this.valid=!0,document.body.style.overflowY="unset"}}});a("3df9");ve.render=Oe,ve.__scopeId="data-v-39a5b3b5";var xe=ve,ye=Object(s["G"])("data-v-2522b044");Object(s["t"])("data-v-2522b044");var ge={class:"shadow-md relative bg-blue-100 py-10 px-4 rounded text-center transition-shadow\n                hover:shadow-lg"},we={class:"text-3xl text-blue-900 mb-4 font-bold"},ke={class:"flex justify-between items-center"},Ce=Object(s["h"])("h2",{class:"text-blue-700 text-2xl font-bold"},"Total cases",-1),De={class:"text-xl"},ze={class:"flex justify-between items-center mt-4"},qe=Object(s["h"])("h2",{class:"text-blue-900 text-2xl font-bold"},"Total deaths",-1),Le={class:"text-xl"},Ae={key:0,class:"text-gray-600 text-xl mb-2 mt-4"},Te={class:"overflow-y-auto h-44 scroll pr-3"},Se={class:"text-xl font-bold"},_e={class:"text-xl"};Object(s["r"])();var Me=ye((function(e,t,a,n,c,r){return Object(s["q"])(),Object(s["e"])("div",ge,[Object(s["h"])("h2",we,Object(s["z"])(a.title),1),Object(s["h"])("div",ke,[Ce,Object(s["h"])("p",De,Object(s["z"])(r.numberWithCommas(a.additionalData.countryData.cases)),1)]),Object(s["h"])("div",ze,[qe,Object(s["h"])("p",Le,Object(s["z"])(r.numberWithCommas(a.additionalData.countryData.deaths)),1)]),a.additionalData.chosenValues.length>0?(Object(s["q"])(),Object(s["e"])("h3",Ae," Additional info: ")):Object(s["f"])("",!0),Object(s["h"])("div",Te,[(Object(s["q"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(a.additionalData.chosenValues,(function(e){return Object(s["q"])(),Object(s["e"])("div",{class:"py-3 text-left flex justify-between items-center border-b border-gray-100",key:e},[Object(s["h"])("span",Se,Object(s["z"])(r.capitalize(e))+":",1),Object(s["h"])("p",_e,Object(s["z"])(r.numberWithCommas(a.additionalData.countryData[e])),1)])})),128))])])})),Ne={name:"VCard",props:{title:{type:String,default:function(){return""}},additionalData:{type:Object,required:!0}},methods:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},numberWithCommas:function(e){return"undefined"!==typeof e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):(console.error("FATAL: invalid data"),"FATAL: invalid data")}}};a("7642");Ne.render=Me,Ne.__scopeId="data-v-2522b044";var Ve=Ne,Fe={name:"Home",components:{PopupForm:xe,DataTitle:I,DataBoxes:ne,VCard:Ve},data:function(){return{loading:!0,showModal:!1,stats:{},countries:[],cardsList:JSON.parse(localStorage.getItem("cardsList"))||[]}},methods:{getCovidData:function(){return Object(S["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all");case 2:return t=e.sent,a=t.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},getCountries:function(){return Object(S["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=false");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))()},clearCountryData:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.scrollTo({top:0,behavior:"smooth"}),e.cardsList=[],localStorage.removeItem("cardsList");case 3:case"end":return t.stop()}}),t)})))()},addCardHandler:function(e){this.cardsList=this.cardsList.filter((function(t){return t.countryData.country!==e.countryData.country})),this.cardsList.push(e),localStorage.setItem("cardsList",JSON.stringify(this.cardsList))},showModalHandler:function(){this.showModal=!0,document.body.style.overflowY="hidden"}},created:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getCovidData();case 2:return e.stats=t.sent,t.next=5,e.getCountries();case 5:e.countries=t.sent,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}};Fe.render=T;var Pe=Fe,We=[{path:"/",name:"Home",component:Pe},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}}],He=Object(y["a"])({history:Object(y["b"])("/covid-tracker/dist/"),routes:We}),Ie=He;a("ba8c");Object(s["d"])(x).use(Ie).mount("#app")},7642:function(e,t,a){"use strict";a("9cfd")},"77cf":function(e,t,a){},"9cfd":function(e,t,a){},b875:function(e,t,a){},ba8c:function(e,t,a){}});
//# sourceMappingURL=app.5e820f26.js.map