webpackJsonp([6],{"2uFj":function(e,n,t){"use strict";window.location.href.includes(".demo.hotgz.com")},"4+5/":function(e,n){},"7D3W":function(e,n){},"JZO/":function(e,n){e.exports=function(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("MVMM"),i=t("9rMa"),r=t("3cXf"),u=t.n(r),c=t("rVsN"),a=t.n(c),s=(t("2uFj"),{state:{info:{Address:"",Brand:"奥迪",CarNo:"粤B00000",City:"深圳市",ContactName:"黄测试",ContactPhone:"",CustomerName:"",CustomerNo:"CNOa7955f4ce601886d",IdentityNo:"",Mobile:"18620588898",Model:"1.8 手动 化油器",Series:"100",VinNo:"",Years:"1992"},points:150,coupons:{count:9},VIP:{grade:1}},getters:{getIsLogin:function(e){return!!e.info}},actions:{verifyLogIn:function(e,n){var t=e.commit;return new a.a(function(e,o){fetch("http://ycpdapi.hotgz.com/Customer/GetCustomerInfoByOpenID?OpenID="+n,{method:"POST",contentType:"application/json; charset=utf-8"}).then(function(e){return e.json()},function(e){return e}).then(function(n){200===n.Code&&(t("initUserInfo",{userInfo:n.Data}),e(n.Data)),o("向服务器获取用户信息成功, 但是数据有误. 原因:"+u()(n))}).catch(function(e){o("向服务器获取用户信息发生错误!")})})}},mutations:{initUserInfo:function(e,n){e.info=n.userInfo}}}),f={state:{openid:!1},getters:{getOpenID:function(e){return e.openid}},actions:{getOpenid:function(e,n){var t=e.commit;return new a.a(function(e,o){fetch("http://picc.hotgz.com/GetOpenID.aspx?code="+n,{method:"GET",contentType:"application/json; charset=utf-8"}).then(function(e){return e.text()},function(e){return e}).then(function(n){t("initOpenid",{openid:n}),e(n)}).catch(function(e){o("向服务器获取openid信息发生错误!")})})}},mutations:{initOpenid:function(e,n){e.openid=n.openid}}};o.default.use(i.a);var d=new i.a.Store({modules:{user:s,wexin:f}}),l=t("zO6J");o.default.use(l.a);var p=[{path:"/index",alias:["/home","/"],name:"home",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"J39w"))},meta:{title:"车主入口"}},{path:"/user/index",alias:["/user/","/user"],name:"user",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"+mqG"))},meta:{title:"个人中心"}},{path:"/user/infor",name:"userInfor",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"bDl4"))},meta:{title:"个人信息"}},{path:"/user/order",name:"userOrder",component:function(){return t.e(4).then(t.bind(null,"nYYt"))},meta:{title:"订单信息"}}],m=new l.a({routes:p});m.beforeEach(function(e,n,t){e.meta.title&&(document.title=e.meta.title),t()});var h=m,I=t("JZO/"),g=t.n(I),w={name:"Index",mounted:function(){g()("code")}},O={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]};var x=t("Z0/y")(w,O,!1,function(e){t("4+5/")},null,null).exports;t("7D3W"),t("VKDx");o.default.config.productionTip=!1,o.default.use(i.a),new o.default({el:"#app",store:d,components:{Index:x},template:"<Index/>",router:h})},VKDx:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.c84af1b264440a529f48.js.map