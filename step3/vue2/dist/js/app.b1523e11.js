(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dbb9d001"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var u=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0872":function(e,t,r){},"2c76":function(e,t,r){},"2fa2":function(e,t,r){"use strict";r("2c76")},"2fe6":function(e,t,r){},3708:function(e,t,r){"use strict";r("529a")},"529a":function(e,t,r){},7582:function(e,t,r){"use strict";r("2fe6")},bc39:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("router-view")],1)],1)},s=[],o=n["default"].extend({name:"App",data:function(){return{}}}),i=o,c=r("2877"),u=r("6544"),l=r.n(u),d=r("7496"),p=r("f6c4"),m=Object(c["a"])(i,a,s,!1,null,null,null),f=m.exports;l()(m,{VApp:d["a"],VMain:p["a"]});r("d3b7"),r("3ca3"),r("ddb0");var v=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("FriendList"),r("Chat")],1)},g=[],b=r("1da1"),x=(r("96cf"),r("b64b"),r("4de4"),r("d81d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"friends"}},[r("VirtualList",{attrs:{id:"virtual-list","data-key":"id","data-sources":e.items,"data-component":e.itemComponent}}),e._t("default")],2)}),k=[],_=(r("99af"),r("89c1")),y=r.n(_),V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{on:{click:e.talk}},[r("strong",[e._v(e._s(e.source.username?e.source.username:e.source.name))])])},w=[],j=(r("ac1f"),r("00b4"),n["default"].extend({name:"Item",props:["index","source"],methods:{talk:function(){console.log("talk");var e=!this.source.username,t=this.index,r={index:t,isGroup:e};this.$store.commit("updateInfo",r),console.log(this.$store.state.test)}}})),T=j,$=(r("3708"),r("b0af")),C=Object(c["a"])(T,V,w,!1,null,"7a75a1a4",null),O=C.exports;l()(C,{VCard:$["a"]});var I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{on:{click:e.talk}},[r("strong",[e._v(e._s(e.source.name))])])},R=[],F=(r("a9e3"),r("b0c0"),n["default"].extend({name:"Item",props:{index:{type:Number},source:{type:Object,default:function(){return{}}}},methods:{talk:function(){this.$store.commit("updateIndex",this.index)}},mounted:function(){console.log(this.source.name),console.log(this.index)}})),S=F,A=(r("d1a2"),Object(c["a"])(S,I,R,!1,null,"3a2dc2ca",null)),L=A.exports;l()(A,{VCard:$["a"]});var G=n["default"].extend({name:"FriendList",data:function(){return{itemComponent:O,groupComponent:L,items:[],groups:[],friends:[]}},components:{VirtualList:y.a},beforeMount:function(){this.items=this.$store.state.friends.concat(this.$store.state.groups),console.log(this.$store.state.groups)}}),P=G,E=(r("2fa2"),Object(c["a"])(P,x,k,!1,null,null,null)),M=E.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),r("div",{staticClass:"text-h3 mb-0",domProps:{textContent:e._s(this.$store.state.name)}}),r("v-spacer"),r("v-btn",{attrs:{to:"/",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Let's Talk")]),r("v-icon",[e._v("mdi-account-voice")])],1),r("v-btn",{attrs:{to:"/add-friend",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Add Friend")]),r("v-icon",[e._v("mdi-account-multiple-plus")])],1),r("v-btn",{attrs:{to:"/join-group",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Join Group")]),r("v-icon",[e._v("mdi-account-multiple-plus")])],1),r("v-btn",{attrs:{to:"/make-group",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Make Group")]),r("v-icon",[e._v("mdi-account-group")])],1),r("v-btn",{attrs:{to:"/login",text:""},on:{click:e.logout}},[r("span",{staticClass:"mr-2"},[e._v("Log Out")]),r("v-icon",[e._v("mdi-open-in-new")])],1)],1)},J=[],N=n["default"].extend({name:"Header",props:{text:String},methods:{logout:function(){this.$store.commit("resetStore")}}}),B=N,D=r("40dc"),z=r("8336"),U=r("132d"),q=r("adda"),K=r("2fa4"),Z=Object(c["a"])(B,H,J,!1,null,"0dab4ac4",null),W=Z.exports;l()(Z,{VAppBar:D["a"],VBtn:z["a"],VIcon:U["a"],VImg:q["a"],VSpacer:K["a"]});var Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isGroup&&e.talks!=[]?r("div",{attrs:{id:"chat-space"}},[e._l(e.talks,(function(t){return r("ul",{key:t.id},[r("p",[e._v(" "+e._s(t.sender_id==e.myId?e.myName:e.members[t.sender_id])+":"+e._s(t.message)+" ")])])})),r("div",{attrs:{id:"input-space"}},[r("v-text-field",{model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),r("v-btn",{on:{click:e.sendMessage}},[e._v("送信")])],1)],2):r("div",{attrs:{id:"chat-space"}},[e._l(e.talks,(function(t){return r("ul",{key:t.id},[r("p",[e._v(e._s(t.sender_id==e.myId?e.myName:e.username)+":"+e._s(t.message))])])})),r("div",{attrs:{id:"input-space"}},[r("v-text-field",{model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),r("v-btn",{on:{click:e.sendMessage}},[e._v("送信")])],1)],2)},X=[],Y=(r("e9c4"),function(e){var t={Authorization:e,accept:"application/json","Content-Type":"application/json"};return t}),ee=function(e,t){var r={Authorization:e,accept:"application/json","Content-Type":"application/json"},n="POST",a=JSON.stringify(t);return{headers:r,method:n,body:a}},te=n["default"].extend({name:"Chat",data:function(){return{isGroup:!1,talks:[],myName:"",myId:0,subjectId:0,username:"",members:[],message:""}},beforeMount:function(){var e=this;this.$store.subscribe((function(t,r){if("updateInfo"==t.type){var n=r.talkRoomInfo.index;e.isGroup=r.talkRoomInfo.isGroup,e.isGroup?(e.members=r.groupsTalk[n-r.friends.length].members.reduce((function(e,t){return e[t.id]=t.username,e}),{}),e.username="",e.subjectId=r.groups[n-r.friends.length],console.log(e.members),e.talks=e.$store.state.groupsTalk[n-r.friends.length].messages):(e.username=r.friends[n].username,e.subjectId=r.friends[n].id,e.talks=e.$store.state.friendsTalk[n],console.log(e.$store.state.friendsTalk),e.members=[]),e.myName=r.name,e.myId=r.id}}))},methods:{sendMessage:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.username||this.members){e.next=2;break}return e.abrupt("return");case 2:if(this.message){e.next=4;break}return e.abrupt("return");case 4:return t={datetime:Date.now(),message:this.message},this.isGroup?(t["group_id"]=this.subjectId.id,r="send_group_chat"):(t["receiver_id"]=this.subjectId,r="send_personal_chat"),console.log(t),this.message="",n=ee(this.$store.state.token,t),a=n.headers,s=n.method,o=n.body,e.next=11,fetch("".concat(this.$store.state.baseUrl,"/message/").concat(r),{headers:a,method:s,body:o});case 11:e.sent;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),re=te,ne=(r("7582"),r("8654")),ae=Object(c["a"])(re,Q,X,!1,null,"529573fb",null),se=ae.exports;l()(ae,{VBtn:z["a"],VTextField:ne["a"]});var oe=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Y(t),e.next=3,fetch("http://api.myj-spring-training-2022.kuroi.link/message/personal_chat_history?receiver_id=".concat(r.receiver_id,"&limit=200"),{headers:n}).then((function(e){return e.text()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return JSON.parse(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ie=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Y(t),e.next=3,fetch("http://api.myj-spring-training-2022.kuroi.link/message/get_group_with_chat_histroy?group_id=".concat(r.group_id),{headers:n}).then((function(e){return e.text()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return n=e.sent,e.abrupt("return",n.map((function(e){return JSON.parse(e)})));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ce=n["default"].extend({name:"Home",components:{Header:W,FriendList:M,Chat:se},data:function(){return{socket:null}},mounted:function(){var e=new WebSocket("ws://api.myj-spring-training-2022.kuroi.link/login/ws_connect?basic=".concat(this.$store.state.key)),t=this;e.onopen=function(){console.log("connect"),e.onmessage=function(e){t.addHistory(e.data)}}},methods:{addHistory:function(e){var t=JSON.parse(e),r=Object.keys(t);if("personal_message"==r[0]){var n,a=t.personal_message;n=a.sender_id==this.$store.state.id?this.$store.state.friends.filter((function(e,t){return e.id==a.receiver_id})):this.$store.state.friends.filter((function(e,t){return e.id==a.sender_id}));var s=this.$store.state.friends.indexOf(n[0]),o=this.$store.state.friendsTalk[s];o.push(a);var i=this.$store.state.friendsTalk;i[s]=o,this.$store.commit("updateFriendsTalk",i)}else{var c=t.group_message,u=this.$store.state.groups.filter((function(e){return e.id==c.group_id})),l=this.$store.state.groups.indexOf(u[0]),d=this.$store.state.groupsTalk[l];d.messages.push(c);var p=this.$store.state.groupsTalk;p[l]=d,console.log(p),this.$store.commit("updateGroupsTalk",p)}}},beforeMount:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$store.state.friends.map((function(e){return{receiver_id:e.id}})),r=this.$store.state.groups.map((function(e){return{group_id:e.id}})),e.next=4,oe(this.$store.state.token,t);case 4:return n=e.sent,e.next=7,ie(this.$store.state.token,r);case 7:a=e.sent,this.$store.commit("updateFriendsTalk",n),this.$store.commit("updateGroupsTalk",a),console.log("before mount");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),ue=ce,le=(r("fba9"),Object(c["a"])(ue,h,g,!1,null,"b1bd41f6",null)),de=le.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Login form")])],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{id:"name","prepend-icon":"mdi-account-circle",name:"naem",label:"name",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{id:"pas","prepend-icon":"mdi-key",label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-login")]),e._v(" Login ")],1)],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"",width:"360"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[r("v-card",{attrs:{align:"center"}},[r("v-card-title",[e._v(" ユーザー名もしくはパスワードが違います ")]),r("v-card-text",[e._v(" もう一度やり直してください ")]),r("v-btn",{staticClass:"mb-3",attrs:{outlined:"",color:"red lighten-2"},on:{click:e.retry}},[e._v("OK")])],1)],1)],1)],1)],1)},me=[],fe=(r("0eb6"),r("b7ef"),r("8bd4"),r("466d"),n["default"].extend({name:"Login",data:function(){return{name:"",password:"",error:!1}},props:{source:String},methods:{login:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.name&&""!==this.password){e.next=2;break}return e.abrupt("return");case 2:if(this.validLanguage(this.name)){e.next=4;break}return e.abrupt("return");case 4:return t=btoa("".concat(this.name,":").concat(this.password)),r="Basic ".concat(t),n={Authorization:r,accept:"application/json","Content-Type":"application/json"},"http://api.myj-spring-training-2022.kuroi.link/login",e.next=10,fetch("http://api.myj-spring-training-2022.kuroi.link/login",{headers:n});case 10:return a=e.sent,e.next=13,a.json();case 13:s=e.sent,500===a.status&&alert("Internal Server Error"),200!==a.status&&(this.error=!0),200===a.status&&(this.$store.commit("updateStore",{id:s.id,name:s.username,password:this.password,token:r,key:t,friends:s.friends,groups:s.groups}),this.$router.push("/"));case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),validLanguage:function(e){return!!e.match(/^[A-Za-z0-9]*$/)},retry:function(){console.log("fa"),this.error=!1}}})),ve=fe,he=r("99d9"),ge=r("a523"),be=r("a75b"),xe=r("169a"),ke=r("0e8f"),_e=r("4bd4"),ye=r("a722"),Ve=r("71d9"),we=r("2a7f"),je=Object(c["a"])(ve,pe,me,!1,null,null,null),Te=je.exports;l()(je,{VApp:d["a"],VBtn:z["a"],VCard:$["a"],VCardActions:he["a"],VCardText:he["b"],VCardTitle:he["c"],VContainer:ge["a"],VContent:be["a"],VDialog:xe["a"],VFlex:ke["a"],VForm:_e["a"],VIcon:U["a"],VLayout:ye["a"],VSpacer:K["a"],VTextField:ne["a"],VToolbar:Ve["a"],VToolbarTitle:we["a"]});var $e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"register"}},[r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Register form")])],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{id:"name","prepend-icon":"mdi-account-circle",name:"naem",label:"name",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{id:"pas","prepend-icon":"mdi-key",label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-login")]),e._v(" Register ")],1)],1)],1)],1)],1)],1)],1)],1)},Ce=[],Oe=n["default"].extend({name:"Register",data:function(){return{name:"",password:"",error:!1}},props:{source:String},methods:{login:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.name&&""!==this.password){e.next=2;break}return e.abrupt("return");case 2:if(this.validLanguage(this.name)){e.next=4;break}return e.abrupt("return");case 4:return t="".concat(this.$store.state.baseUrl,"user/register"),r="POST",n={Accept:"application/json","Content-Type":"application/json"},a={username:this.name,password:this.password},s=JSON.stringify(a),e.next=11,fetch(t,{method:r,headers:n,body:s});case 11:o=e.sent,console.log(o),422===o.status&&alert("validError"),200===o.status&&this.$router.push("/login");case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),validLanguage:function(e){return!!e.match(/^[A-Za-z0-9]*$/)}}}),Ie=Oe,Re=Object(c["a"])(Ie,$e,Ce,!1,null,null,null),Fe=Re.exports;l()(Re,{VApp:d["a"],VBtn:z["a"],VCard:$["a"],VCardActions:he["a"],VCardText:he["b"],VContainer:ge["a"],VContent:be["a"],VFlex:ke["a"],VForm:_e["a"],VIcon:U["a"],VLayout:ye["a"],VSpacer:K["a"],VTextField:ne["a"],VToolbar:Ve["a"],VToolbarTitle:we["a"]});var Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Add Friends")])],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{id:"name","prepend-icon":"mdi-account-circle",name:"naem",label:"enter Id ",type:"text"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:e.addFriend}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-account-multiple-plus")]),e._v(" Add Friend ")],1)],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"",width:"360"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[r("v-card",{attrs:{align:"center"}},[r("v-card-title",[e._v(" "+e._s(e.message)+" ")]),r("v-card-text",[e._v(" もう一度やり直してください ")]),r("v-btn",{staticClass:"mb-3",attrs:{outlined:"",color:"red lighten-2"},on:{click:function(t){e.error=!e.error}}},[e._v("OK")])],1)],1)],1)],1)],1)},Ae=[],Le=n["default"].extend({name:"AddFriends",components:{Header:W},data:function(){return{error:!1,message:"",id:null}},methods:{addFriend:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,o,i,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t="POST",this.id){e.next=5;break}return this.message="友達にするidを追加してください。",this.error=!this.error,e.abrupt("return");case 5:if(r=this.$store.state.friends.filter((function(e){return e.id==c.id})),!(r.length>0)){e.next=10;break}return this.message="既に友達です。",this.error=!this.error,e.abrupt("return");case 10:return n={friend_id:Number(this.id)},a=JSON.stringify(n),s={Authorization:"".concat(this.$store.state.token),accept:"application/json","Content-Type":"application/json"},e.next=15,fetch("".concat(this.$store.state.baseUrl,"/user/add_friend"),{method:t,body:a,headers:s});case 15:if(o=e.sent,422!==o.status){e.next=20;break}return this.message="そのidは存在しません",this.error=!this.error,e.abrupt("return");case 20:return e.next=22,o.json();case 22:i=e.sent,this.$store.commit("updateFriends",i),this.$router.push("/");case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),Ge=Le,Pe=Object(c["a"])(Ge,Se,Ae,!1,null,"56feabda",null),Ee=Pe.exports;l()(Pe,{VBtn:z["a"],VCard:$["a"],VCardActions:he["a"],VCardText:he["b"],VCardTitle:he["c"],VContainer:ge["a"],VContent:be["a"],VDialog:xe["a"],VFlex:ke["a"],VForm:_e["a"],VIcon:U["a"],VLayout:ye["a"],VSpacer:K["a"],VTextField:ne["a"],VToolbar:Ve["a"],VToolbarTitle:we["a"]});var Me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Make Group")])],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{id:"name","prepend-icon":"mdi-account-circle",name:"naem",label:"enter group name",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-checkbox",{attrs:{label:"作成したグループに参加する"},model:{value:e.join,callback:function(t){e.join=t},expression:"join"}}),r("v-btn",{attrs:{color:"primary"},on:{click:e.create}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-account-multiple-plus")]),e._v(" Login ")],1)],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"",width:"360"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[r("v-card",{attrs:{align:"center"}},[r("v-card-title",[e._v(" "+e._s(e.message)+" ")]),r("v-card-text",[e._v(" もう一度やり直してください ")]),r("v-btn",{staticClass:"mb-3",attrs:{outlined:"",color:"red lighten-2"},on:{click:function(t){e.error=!e.error}}},[e._v("OK")])],1)],1)],1)],1)],1)},He=[],Je=(r("a15b"),n["default"].extend({name:"MakeGroup",components:{Header:W},data:function(){return{join:!0,name:null,error:!1,message:""}},methods:{create:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.name){e.next=4;break}return this.message="グループ名を入力してください",this.error=!this.error,e.abrupt("return");case 4:return t={group_name:this.name,join_this_group:this.join},r=ee(this.$store.state.token,t),n=r.headers,a=r.method,s=r.body,e.next=8,fetch("".concat(this.$store.state.baseUrl,"group/create"),{headers:n,method:a,body:s});case 8:if(o=e.sent,422!=o.status){e.next=13;break}return this.message="失敗しました。",this.error=!this.error,e.abrupt("return");case 13:return e.next=15,o.json();case 15:i=e.sent,!0===this.join&&this.$store.commit("updateGroups",i),alert("作成されたグループIDは".concat(i.id,"です。")),this.$router.push("/");case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}})),Ne=Je,Be=r("ac7c"),De=Object(c["a"])(Ne,Me,He,!1,null,null,null),ze=De.exports;l()(De,{VBtn:z["a"],VCard:$["a"],VCardActions:he["a"],VCardText:he["b"],VCardTitle:he["c"],VCheckbox:Be["a"],VContainer:ge["a"],VContent:be["a"],VDialog:xe["a"],VFlex:ke["a"],VForm:_e["a"],VIcon:U["a"],VLayout:ye["a"],VSpacer:K["a"],VTextField:ne["a"],VToolbar:Ve["a"],VToolbarTitle:we["a"]});var Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Join Group")])],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{id:"name","prepend-icon":"mdi-account-circle",name:"group id",label:"enter group id ",type:"text"},model:{value:e.group_id,callback:function(t){e.group_id=t},expression:"group_id"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:e.join}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-account-multiple-plus")]),e._v(" Join ")],1)],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"",width:"360"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}},[r("v-card",{attrs:{align:"center"}},[r("v-card-title",[e._v(" "+e._s(e.message)+" ")]),r("v-card-text",[e._v(" もう一度やり直してください ")]),r("v-btn",{staticClass:"mb-3",attrs:{outlined:"",color:"red lighten-2"},on:{click:function(t){e.error=!e.error}}},[e._v("OK")])],1)],1)],1)],1)],1)},qe=[],Ke=n["default"].extend({name:"JoinGroup",components:{Header:W},data:function(){return{group_id:null,error:!1,message:""}},methods:{join:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.group_id){e.next=4;break}return this.message="グループIDを入力してください",this.error=!this.error,e.abrupt("return");case 4:return t={group_id:this.group_id},r=ee(this.$store.state.token,t),n=r.headers,a=r.method,s=r.body,e.next=8,fetch("".concat(this.$store.state.baseUrl,"group/join"),{method:a,body:s,headers:n});case 8:if(o=e.sent,422!==o.status){e.next=13;break}return this.message="そのIDのグループは存在しません",this.error=!this.error,e.abrupt("return");case 13:return e.next=15,o.json();case 15:i=e.sent,this.$store.commit("updateGroups",i),this.$router.push("/");case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),Ze=Ke,We=Object(c["a"])(Ze,Ue,qe,!1,null,"7174ce4e",null),Qe=We.exports;l()(We,{VBtn:z["a"],VCard:$["a"],VCardActions:he["a"],VCardText:he["b"],VCardTitle:he["c"],VContainer:ge["a"],VContent:be["a"],VDialog:xe["a"],VFlex:ke["a"],VForm:_e["a"],VIcon:U["a"],VLayout:ye["a"],VSpacer:K["a"],VTextField:ne["a"],VToolbar:Ve["a"],VToolbarTitle:we["a"]});var Xe=r("2f62"),Ye=r("0e44");n["default"].use(Xe["a"]);var et=new Xe["a"].Store({state:{id:0,name:"",password:"",token:"",key:"",friends:[],groups:[],talkRoomInfo:null,friendsTalk:[],groupsTalk:[],test:null,index:0,baseURL:"http://api.myj-spring-training-2022.kuroi.link/"},mutations:{updateStore:function(e,t){e.id=t.id,e.name=t.name,e.password=t.password,e.token=t.token,e.key=t.key,e.friends=t.friends,e.groups=t.groups},resetStore:function(e){e.id=0,e.name="",e.password="",e.token="",e.key="",e.friends=[],e.groups=[],e.groupsTalk=[],e.friendsTalk=[]},updateInfo:function(e,t){e.talkRoomInfo=t},resetInfo:function(e){e.talkRoomInfo={index:0,isGroup:!1}},updateFriends:function(e,t){e.friends=t},updateGroups:function(e,t){e.groups.push(t)},updateFriendsTalk:function(e,t){e.friendsTalk=t},updateGroupsTalk:function(e,t){e.groupsTalk=t},updatePersonalTalk:function(e,t){e.friendsTalk[t.index]=t.messages}},getters:{},actions:{},modules:{},plugins:[Object(Ye["a"])()]});n["default"].use(v["a"]);var tt=[{path:"/",name:"Home",component:de,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"a1d1"))}},{path:"/login",name:"Login",component:Te},{path:"/register",name:"Register",component:Fe},{path:"/join-group",name:"JoinGroup",component:Qe},{path:"/add-friend",name:"AddFriend",component:Ee},{path:"/make-group",name:"MakeGroup",component:ze}],rt=new v["a"]({mode:"history",base:"/",routes:tt});rt.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))&&!et.state.token?r({path:"/login",query:{redirect:e.fullPath}}):r()}));var nt=rt,at=r("f309");n["default"].use(at["a"]);var st=new at["a"]({});r("bf40");n["default"].config.productionTip=!1,new n["default"]({router:nt,store:et,vuetify:st,render:function(e){return e(f)}}).$mount("#app")},d1a2:function(e,t,r){"use strict";r("bc39")},fba9:function(e,t,r){"use strict";r("0872")}});
//# sourceMappingURL=app.b1523e11.js.map