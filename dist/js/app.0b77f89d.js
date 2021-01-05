(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],h=0,f=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/githubers/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"019b":function(e,t,s){"use strict";s("c341")},"034f":function(e,t,s){"use strict";s("85ec")},"28bd":function(e,t,s){},5528:function(e,t,s){"use strict";s("90f8")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("app-header"),s("router-view",{key:e.$route.fullPath})],1)},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"item"},[s("h1",[s("router-link",{staticClass:"home",attrs:{to:{name:"home"}}},[e._v("Githubbers")])],1)]),s("div",{staticClass:"item"},[s("app-search"),s("div",{staticClass:"toggle"},[e.isList?e._e():s("button",{staticClass:"material-icons-round",on:{click:e.changeLayout}},[e._v(" reorder ")]),e.isList?s("button",{staticClass:"material-icons-round",on:{click:e.changeLayout}},[e._v(" apps ")]):e._e()])],1)])},o=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-container"},[s("div",{staticClass:"row"},[s("form",{staticClass:"search",attrs:{method:"post",action:"index.html",autocomplete:"off"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",name:"q",placeholder:"Find GitHub user"},domProps:{value:e.searchQuery},on:{focusin:function(t){return e.focus(!0)},focusout:function(t){return e.focus(!1)},input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e.gotState?s("div",[e.isSearching?s("div",[s("ul",{staticClass:"results"},e._l(e.searchSuggestions,(function(t){return s("li",{key:t.login,on:{click:function(s){e.saveSearch(t),e.searchQuery=null}}},[s("router-link",{attrs:{to:{name:"user-profile",params:{user:t.login}}}},[s("img",{staticClass:"img",attrs:{src:t.avatar,alt:t.login}}),s("span",[e._v(e._s(t.login))])])],1)})),0)]):e._e()]):e._e()])])])},u=[],l=(s("99af"),s("a15b"),s("ac1f"),s("1276"),s("5530")),h=s("2f62"),f={data:function(){return{searchQuery:"",suggestionAmount:5,isSearching:!1,gotState:!1}},methods:Object(l["a"])(Object(l["a"])({},Object(h["b"])(["generateSuggestions","updateLastVisitedSearch","loadLastVisitedSearch"])),{},{focus:function(e){var t=this;e?(this.isSearching=!0,this.searchQuery||this.loadLastVisitedSearch()):e||setTimeout((function(){return t.isSearching=!1}),100)},saveSearch:function(e){this.updateLastVisitedSearch(e)}}),computed:Object(l["a"])(Object(l["a"])({},Object(h["c"])(["searchSuggestions"])),{},{computedSuggestions:function(){return this.searchSuggestions},githubApiUrl:function(){return"https://api.github.com/search/users?accept=application/vnd.github.v3+json&q=".concat(this.searchTerm,"+type%3Auser&type=Users&per_page=").concat(this.suggestionAmount)},searchTerm:function(){return this.searchQuery?this.searchQuery.split(" ").join("+"):this.searchQuery}}),watch:{searchQuery:function(){this.generateSuggestions({searchQuery:this.searchQuery,githubApiUrl:this.githubApiUrl})},searchSuggestions:function(){this.gotState=!0}}},p=f,g=(s("edec"),s("2877")),v=Object(g["a"])(p,c,u,!1,null,"27d7b608",null),d=v.exports,m={data:function(){return{isList:!0}},methods:{changeLayout:function(){this.isList=!this.isList,this.$root.$emit("changeLayout")}},components:{appSearch:d}},b=m,_=(s("852f"),Object(g["a"])(b,i,o,!1,null,"53ecba2e",null)),S=_.exports,y={components:{appHeader:S}},U=y,O=(s("034f"),Object(g["a"])(U,n,a,!1,null,null,null)),w=O.exports,C=s("8c4f"),j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{class:[e.isList?"flex-list":"",e.isList?"":"flex-grid"]},e._l(e.popularUsers,(function(t,r){return s("main",{key:r,class:[e.isList?"list-row":""]},[e.isList?s("user-list",{attrs:{userName:r,userDetails:t}}):e._e(),e.isList?e._e():s("user-grid",{attrs:{userName:r,userDetails:t}})],1)})),0)])},k=[],A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"column-1"},[s("img",{staticClass:"img",attrs:{src:e.userDetails.avatar,alt:""}})]),s("div",{staticClass:"column-2"},[s("h2",{staticClass:"row"},[s("router-link",{attrs:{to:{name:"user-profile",params:{user:e.userName}}}},[e._v(e._s(e.userName))])],1),s("p",{staticClass:"row"},[s("span",{staticClass:"title"},[e._v("Type:")]),s("b",{staticClass:"item"},[e._v(e._s(e.userDetails.type))])]),s("div",{staticClass:"row repo"},[s("p",{staticClass:"title title-repo"},[e._v("First three repository:")]),e._l(e.userDetails.repos,(function(t){return s("p",{key:t,staticClass:"item"},[s("b",[e._v(e._s(t))])])}))],2)])])},L=[],N={props:["userName","userDetails"]},P=N,x=(s("6607"),Object(g["a"])(P,A,L,!1,null,"80756de4",null)),$=x.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"row"},[s("img",{staticClass:"img",attrs:{src:e.userDetails.avatar,alt:""}})]),s("div",{staticClass:"row"},[s("h2",[s("a",{attrs:{href:e.userDetails.profileUrl}},[e._v(e._s(e.userName))])])]),s("div",{staticClass:"row"},[s("p",[e._v(" Type: "),s("b",[e._v(e._s(e.userDetails.type))])])]),e._m(0),s("div",{staticClass:"row repo"},e._l(e.userDetails.repos,(function(t){return s("p",{key:t,staticClass:"repo"},[s("b",[e._v(e._s(t))])])})),0)])},I=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("p",[e._v("First three repository:")])])}],V={props:["userName","userDetails"]},J=V,Q=(s("9337"),Object(g["a"])(J,E,I,!1,null,"679534a4",null)),F=Q.exports,D={name:"Home",mounted:function(){var e=this;this.getPopularUsers(),this.$root.$on("changeLayout",(function(){e.isList=!e.isList}))},data:function(){return{testdata:"",isList:!0}},computed:Object(l["a"])({},Object(h["c"])(["popularUsers"])),methods:Object(l["a"])({},Object(h["b"])(["getPopularUsers","test"])),components:{UserList:$,UserGrid:F}},T=D,q=(s("019b"),Object(g["a"])(T,j,k,!1,null,"37af968a",null)),G=q.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-container"},[e.showNotFound?s("div",[s("user-not-found")],1):e.userFound?s("div",{staticClass:"row"},[s("div",[s("img",{staticClass:"img-prof",attrs:{src:e.user.avatar,alt:e.user.name}})]),s("div",{staticClass:"title"},[s("h1",[s("a",{attrs:{href:e.user.profileUrl,target:"_blank"}},[e._v(e._s(e.user.name))])])]),s("div",{staticClass:"title-2"},[e._v(" Type: "),s("b",[e._v(e._s(e.user.type))])]),s("div",{staticClass:"column"},[s("div",{staticClass:"column-item"},[e._m(0),e.user.repos?s("div",{staticClass:"repo"},e._l(e.user.repos,(function(t){return s("p",{key:t,staticClass:"list"},[e._v(" "+e._s(t)+" ")])})),0):s("div",[s("p",{staticClass:"info"},[e._v("User doesn't have any repository")])])]),s("div",{staticClass:"column-item"},[e._m(1),e.user.orgs?s("div",e._l(e.user.orgs,(function(t){return s("p",{key:t.login,staticClass:"list"},[s("img",{staticClass:"img-org",attrs:{src:t.avatar,alt:t.login}}),s("a",{attrs:{href:t.url}},[e._v(e._s(t.login))])])})),0):s("div",[s("p",{staticClass:"info"},[e._v("User doesn't belongs to any organisation")])])])])]):e._e()])},M=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title-2"},[s("h3",[e._v("First three repository")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title-2"},[s("h3",[e._v("Organisations")])])}],W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"item"},[e._v("User wasn't found")]),s("div",{staticClass:"item"},[s("button",{on:{click:e.goHome}},[e._v("Go to home page")])])])},z=[],B={methods:{goHome:function(){this.$router.push({name:"home"})}}},K=B,R=(s("f398"),Object(g["a"])(K,W,z,!1,null,"15e69582",null)),X=R.exports,Y={name:"UserProfile",mounted:function(){var e=this;this.getUser(this.requestedUsername).then((function(t){e.userFound=!0,e.user=t}),(function(t){e.showNotFound=!0,e.userFound=!1,console.error(t)}))},data:function(){return{userFound:!1,user:{},showNotFound:!1}},methods:Object(l["a"])({},Object(h["b"])(["getUser"])),computed:{requestedUsername:function(){return this.$route.params.user}},watch:{$route:function(){this.getUser(this.requestedUsername)}},components:{UserNotFound:X}},Z=Y,ee=(s("5528"),Object(g["a"])(Z,H,M,!1,null,"ceb97870",null)),te=ee.exports;r["a"].use(C["a"]);var se=[{path:"/",name:"home",component:G},{path:"/:user",name:"user-profile",component:te}],re=new C["a"]({mode:"history",base:"/githubers/",routes:se}),ne=re,ae=(s("4de4"),s("c740"),s("4160"),s("caad"),s("d81d"),s("a434"),s("b0c0"),s("d3b7"),s("6062"),s("2532"),s("3ca3"),s("159b"),s("ddb0"),s("2909"));r["a"].use(h["a"]);var ie=new h["a"].Store({state:{popularUsers:{},users:{},popularUsersApi:"https://api.github.com/search/users?q=followers%3A%3E%3D1000",usersApi:"https://api.github.com/users/",repoAmount:3,searchSuggestions:[],lastVisitedSearch:[]},mutations:{savePopularUsers:function(e,t){e.popularUsers=t},saveUser:function(e,t){e.users=t},saveApiSearch:function(e,t){e.testSavedGithubQueries=t},saveSuggestions:function(e,t){e.searchSuggestions=t},saveLastVisitedSearch:function(e,t){e.lastVisitedSearch=[],e.lastVisitedSearch.push(t)}},actions:{updateLastVisitedSearch:function(e,t){var s=e.dispatch,r=JSON.parse(localStorage.getItem("lastVisitedSearch"))||[],n=!1;if(r.forEach((function(e){e.login==t.login&&(n=!0)})),n){var a=r.findIndex((function(e){return e.login===t.login})),i=function(e,t){var s=r.splice(e,1)[0];r.splice(t,0,s)};i(a,0)}else{var o={};o.login=t.login,o.avatar=t.avatar,r.unshift(o),4==r.length&&r.pop()}s("saveLastVisitedSearch",r)},generateSuggestions:function(e,t){var s=e.dispatch,r=JSON.parse(localStorage.getItem("lastVisitedSearch"))||[],n=JSON.parse(localStorage.getItem("savedApiSearch"))||{},a=t.searchQuery,i=t.githubApiUrl,o=function(e,t){var r=new Set(e.map((function(e){return e.login}))),n=[].concat(Object(ae["a"])(e),Object(ae["a"])(t.filter((function(e){return!r.has(e.login)}))));s("saveSuggestions",n)};if(console.log(a),a){console.log(a);var c=r.filter((function(e){return e.login.toLowerCase().includes(a.toLowerCase())}));if(console.log("match",c),Object.prototype.hasOwnProperty.call(n,a)){var u=n["".concat(a)];o(c,u)}else console.log("searchApi",i),fetch(i,{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){if(e.ok)return e.json()})).then((function(e){console.log("data",e);var t={};t["".concat(a)]=[],e.items.forEach((function(e){var s={};s.login=e.login,s.avatar=e.avatar_url,t["".concat(a)].push(s)})),s("saveApiSearch",t),o(c,t["".concat(a)])})).catch((function(e){console.log(e)}))}else s("saveSuggestions",r)},getUser:function(e,t){var s=e.dispatch,r=e.state,n=JSON.parse(localStorage.getItem("popularUsers"))||{},a=JSON.parse(localStorage.getItem("users"))||{};return new Promise((function(e,i){if(t in n){var o=n["".concat(t)];Object.prototype.hasOwnProperty.call(o,"orgs")?e(o):fetch("https://api.github.com/users/".concat(t,"/orgs"),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){if(e.ok)return e.json()})).then((function(r){var a={};r.forEach((function(r,i,c){var u={};return u.login=r.login,u.avatar=r.avatar_url,fetch("".concat(r.url),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){return e.json()})).then((function(r){u.url=r.html_url,a["".concat(u.login)]=u,i===c.length-1&&(o.orgs=a,n["".concat(t)]=o,s("savePopularUsers",n),e(o))}))}))}))}else Object.prototype.hasOwnProperty.call(a,t)?e(a["".concat(t)]):fetch("".concat(r.usersApi).concat(t),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){if(e.ok)return e.json();throw new Error("User not found")})).then((function(t){s("getUserInfo",t).then((function(t){e(t)}))})).catch((function(e){i(e)}))}))},getUserInfo:function(e,t){var s=e.dispatch,r=e.state,n=JSON.parse(localStorage.getItem("users"))||{};return new Promise((function(e){var a={};a.name=t.name,a.profileUrl=t.html_url,a.avatar=t.avatar_url,a.type=t.type,fetch("".concat(t.organizations_url),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){return e.json()})).then((function(e){var t={};e.forEach((function(e,s,r){var n={};return n.login=e.login,n.avatar=e.avatar_url,fetch("".concat(e.url),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){return e.json()})).then((function(e){n.url=e.html_url,t["".concat(n.login)]=n,s===r.length-1&&(a.orgs=t)}))}))})).then(fetch("".concat(t.repos_url),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){return e.json()})).then((function(i){for(var o=[],c=0;c<r.repoAmount;c++){if(!i[c])break;o.push(i[c].name)}a.repos=o,n["".concat(t.login)]=a,s("saveUser",n),e(a)})))}))},getPopularUsers:function(e){var t=e.dispatch,s=e.commit,r=e.state;if(localStorage.getItem("popularUsers")){var n=JSON.parse(localStorage.getItem("popularUsers"));s("savePopularUsers",n)}else fetch("".concat(r.popularUsersApi),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){if(e.ok)return e.json()})).then((function(e){t("getPopularUsersInfo",e.items)})).catch((function(e){console.log(e)}))},getPopularUsersInfo:function(e,t){for(var s=e.dispatch,r=e.state,n={},a=function(e){n["".concat(t[e].login)]={};var a=n["".concat(t[e].login)];a.avatar=t[e].avatar_url,a.profileUrl=t[e].html_url,a.type=t[e].type,fetch("".concat(t[e].url),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){return e.json()})).then((function(i){return a.name=i.name,fetch("".concat(t[e].repos_url),{headers:{"User-Agent":"khukhunaishvili"}}).then((function(e){return e.json()})).then((function(i){for(var o=[],c=0;c<r.repoAmount;c++)o.push(i[c].name);a.repos=o,e==t.length-1&&s("savePopularUsers",n)}))}))},i=0;i<t.length;i++)a(i)},loadLastVisitedSearch:function(e){var t=e.commit,s=JSON.parse(localStorage.getItem("lastVisitedSearch"))||[];t("saveSuggestions",s)},saveLastVisitedSearch:function(e,t){var s=e.commit;s("saveLastVisitedSearch",t),localStorage.setItem("lastVisitedSearch",JSON.stringify(t))},saveSuggestions:function(e,t){var s=e.commit;s("saveSuggestions",t)},saveApiSearch:function(e,t){var s=e.commit,r=JSON.parse(localStorage.getItem("savedApiSearch"))||{},n=Object(l["a"])(Object(l["a"])({},t),r);s("saveApiSearch",n),localStorage.setItem("savedApiSearch",JSON.stringify(n))},savePopularUsers:function(e,t){var s=e.commit;s("savePopularUsers",t),localStorage.setItem("popularUsers",JSON.stringify(t))},saveUser:function(e,t){var s=e.commit;s("saveUser",t),localStorage.setItem("users",JSON.stringify(t))}}}),oe=s("9483");Object(oe["a"])("".concat("/githubers/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js")})),new r["a"]({router:ne,store:ie,render:function(e){return e(w)}}).$mount("#app")},6607:function(e,t,s){"use strict";s("28bd")},6801:function(e,t,s){},"852f":function(e,t,s){"use strict";s("968b")},"85ec":function(e,t,s){},"90f8":function(e,t,s){},9337:function(e,t,s){"use strict";s("d544")},"968b":function(e,t,s){},a6b6:function(e,t,s){},c341:function(e,t,s){},d544:function(e,t,s){},edec:function(e,t,s){"use strict";s("6801")},f398:function(e,t,s){"use strict";s("a6b6")}});
//# sourceMappingURL=app.0b77f89d.js.map