(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-212dd124"],{"1b7c":function(e,r,t){e.exports=t.p+"img/qq.2cf4276d.svg"},"9f11":function(e,r,t){e.exports=t.p+"img/wx.c69ec08c.svg"},a806:function(e,r,t){e.exports=t.p+"img/wb.cbf658a0.svg"},dc3f:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e._self._c;return r("div",{class:"".concat(e.prefixCls,"-container")},[r("div",{class:"".concat(e.prefixCls,"-container-form")},[r("Form",{ref:"form",attrs:{model:e.form,rules:e.rule},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[r("FormItem",{attrs:{prop:"userName"}},[r("Input",{attrs:{size:"large",placeholder:"请输入用户名"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-contact-outline"}})]},proxy:!0}]),model:{value:e.form.userName,callback:function(r){e.$set(e.form,"userName",r)},expression:"form.userName"}})],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{size:"large",type:"password",placeholder:"请输入密码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-lock-outline"}})]},proxy:!0}]),model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("div",{class:"".concat(e.prefixCls,"-container-auto-login")},[r("Checkbox",{model:{value:e.remember,callback:function(r){e.remember=r},expression:"remember"}},[e._v(" 记住密码")]),r("a",{attrs:{href:""}},[e._v("忘记密码")])],1),r("div",{class:"".concat(e.prefixCls,"-container-submit")},[r("Button",{attrs:{type:"primary",size:"large",long:""},nativeOn:{click:function(r){return e.handleSubmit.apply(null,arguments)}}},[e._v("登录")])],1)],1)],1),r("div",{class:"".concat(e.prefixCls,"-container-other")},[r("span",[e._v("其它登录方式")]),r("img",{attrs:{src:t("9f11"),alt:"微信"}}),r("img",{attrs:{src:t("1b7c"),alt:"QQ"}}),r("img",{attrs:{src:t("a806"),alt:"微博"}}),r("RouterLink",{class:"".concat(e.prefixCls,"-container-other-register"),attrs:{to:"/register"}},[e._v("注册账户")])],1),e.verifyForce?r("Verify",{ref:"verify",attrs:{mode:"pop",imgSize:{width:"400px",height:"200px"},captchaType:e.captchaType},on:{"on-success":e.verifySuccess,"on-error":e.verifyError}}):e._e()],1)},n=[],s=t("5530"),a=(t("14d9"),t("99af"),t("2f62")),i=t("2af9"),c=t("b893"),u={name:"Login",components:{Verify:i["p"]},data:function(){return{prefixCls:"".concat(this.$config.cssPrefix,"login"),remember:!0,verifyForce:!1,form:{userName:"admin",password:"admin"},rule:{userName:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},computed:{captchaType:function(){var e=0,r=100,t=Math.floor(Math.random()*(r-e))+e,o="blockPuzzle";return t%2===0&&(o="blockPuzzle"),t%2===1&&(o="clickWord"),o="blockPuzzle",o}},methods:Object(s["a"])(Object(s["a"])({},Object(a["b"])(["handleLogin","getUserInfo"])),{},{handleSubmit:function(){var e=this;this.$refs.form.validate((function(r){r&&(e.verifyForce?e.$refs.verify.show():e.axiosSubmit())}))},axiosSubmit:function(){var e=this;this.handleLogin(this.form).then((function(r){e.remember,e.getUserInfo().then((function(r){e.$router.push({name:e.$config.homeRouteName}),e.$Message.success({content:"".concat(Object(c["h"])(),"，").concat(r.userName),duration:4})}))}))},verifySuccess:function(e){this.form.code=e.captchaVerification,this.axiosSubmit()},verifyError:function(){this.verifyForce=!1}})},f=u,l=t("2877"),p=Object(l["a"])(f,o,n,!1,null,null,null);r["default"]=p.exports}}]);