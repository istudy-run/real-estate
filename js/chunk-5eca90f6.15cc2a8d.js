(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5eca90f6"],{a85d:function(e,t,n){"use strict";n.r(t);n("b64b");var a=function(){var e=this,t=e._self._c;return t("Row",{attrs:{gutter:24}},[t("Col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:10}},[t("Card",{attrs:{shadow:""},scopedSlots:e._u([{key:"title",fn:function(){return[t("Dropdown",{scopedSlots:e._u([{key:"list",fn:function(){return[t("DropdownMenu",[t("DropdownItem",[e._v("添加顶栏菜单")]),t("DropdownItem",{attrs:{disabled:!Object.keys(e.selectedMenu).length}},[e._v("添加子菜单")])],1)]},proxy:!0}])},[t("Button",{staticClass:"ivu-mr",attrs:{type:"primary",ghost:""}},[e._v("添加菜单 "),t("Icon",{attrs:{type:"ios-arrow-down"}})],1)],1),t("Button",{staticClass:"ivu-mr",attrs:{type:"primary",ghost:"",icon:"md-list"},on:{click:e.collapseOrExpand}},[e._v("全部"+e._s(e.collapse?"收起":"展开"))]),t("Button",{staticClass:"ivu-mr",attrs:{type:"error",ghost:"",icon:"md-trash"},on:{click:e.deleteMenus}},[e._v("批量删除")])]},proxy:!0}])},[t("div",{staticClass:"ivu-p-8"},[t("Input",{attrs:{suffix:"ios-search",placeholder:"输入菜单名称搜索"}})],1),t("Tree",{attrs:{data:e.treeData,"show-checkbox":""},on:{"on-select-change":e.handleSelectMenu,"on-check-change":e.handleCheckedMenu,"on-contextmenu":e.handleContextMenu},scopedSlots:e._u([{key:"contextMenu",fn:function(){return[t("DropdownItem",{nativeOn:{click:function(t){return e.menuEdit.apply(null,arguments)}}},[e._v("编辑")]),t("DropdownItem",{nativeOn:{click:function(t){return e.menuEdit.apply(null,arguments)}}},[e._v("添加子菜单")]),t("DropdownItem",{staticStyle:{color:"#ed4014"},attrs:{divided:""},nativeOn:{click:function(t){return e.menuDelete.apply(null,arguments)}}},[e._v("删除")])]},proxy:!0}])})],1)],1),t("Col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:14}},[t("Card",{attrs:{shadow:""},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"ivu-menu-head"},[t("Avatar",{staticStyle:{color:"#1890ff",background:"#e6f7ff"},attrs:{size:"small",icon:"md-apps"}}),t("span",{staticClass:"ivu-pl-8"},[e._v("编辑菜单"+e._s(Object.keys(e.selectedMenu).length?"："+e.selectedMenu.title:""))])],1)]},proxy:!0}])},[t("Empty",{directives:[{name:"show",rawName:"v-show",value:!Object.keys(e.selectedMenu).length,expression:"!Object.keys(selectedMenu).length"}],attrs:{desc:"请选择一项菜单编辑"}}),Object.keys(e.selectedMenu).length?t("Form",{ref:"form",attrs:{"label-width":100,"label-colon":!0,model:e.form,rules:e.rule}},[t("FormItem",{attrs:{label:"类型"}},[e._v("侧边栏菜单")]),t("FormItem",{attrs:{label:"标题"}},[t("Input",{attrs:{placeholder:"请输入标题，必填"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"副标题"}},[t("Input",{attrs:{placeholder:"请输入副标题"},model:{value:e.form.subtitle,callback:function(t){e.$set(e.form,"subtitle",t)},expression:"form.subtitle"}})],1),t("FormItem",{attrs:{label:"路径"}},[t("Input",{attrs:{placeholder:"请输入路径，必填"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),t("FormItem",{attrs:{label:"打开方式"}},[t("RadioGroup",{model:{value:e.form.openWay,callback:function(t){e.$set(e.form,"openWay",t)},expression:"form.openWay"}},[t("Radio",{attrs:{label:"0"}},[e._v("当前窗口")]),t("Radio",{attrs:{label:"1"}},[e._v("新窗口")])],1)],1),t("FormItem",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" 分割线 "),t("Tooltip",{attrs:{content:"菜单折叠时是否显示分割线",placement:"top"}},[t("Icon",{attrs:{type:"md-help-circle"}})],1)]},proxy:!0}],null,!1,857158043)},[t("i-switch",{attrs:{"true-value":"1","false-value":"0"},scopedSlots:e._u([{key:"open",fn:function(){return[t("Icon",{attrs:{type:"md-checkmark"}})]},proxy:!0},{key:"close",fn:function(){return[t("Icon",{attrs:{type:"md-close"}})]},proxy:!0}],null,!1,3573282926),model:{value:e.form.divider,callback:function(t){e.$set(e.form,"divider",t)},expression:"form.divider"}})],1),t("FormItem",{attrs:{label:"图标"}},[t("IconSelect",{attrs:{placement:"top",clearable:"",placeholder:"请选择图标"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),t("FormItem",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" 菜单权限 "),t("Tooltip",{attrs:{content:"菜单权限",placement:"top"}},[t("Icon",{attrs:{type:"md-help-circle"}})],1)]},proxy:!0}],null,!1,1522298737)},[t("Input",{attrs:{placeholder:"权限，逗号分隔"},model:{value:e.form.auth,callback:function(t){e.$set(e.form,"auth",t)},expression:"form.auth"}})],1),t("FormItem",[t("Space",{attrs:{size:16}},[t("Button",{on:{click:e.resetMenu}},[e._v("重置")]),t("Button",{attrs:{type:"primary"},on:{click:e.resetMenu}},[e._v("保存")])],1)],1)],1):e._e()],1)],1)],1)},o=[],r=n("2909"),c=n("b85c"),l=n("5530"),s=(n("14d9"),n("a15b"),n("d81d"),n("2f62")),i=(n("4de4"),n("d3b7"),n("159b"),n("2ca0"),n("ac1f"),n("5319"),n("b0c0"),n("7db0"),function e(t){var n=t.map((function(t){return t.children&&t.children.forEach((function(n){n.path.startsWith("/")||n.path.startsWith("http")||(n.path=t.path.replace(/(\w*)[/]*$/,"$1/".concat(n.path)),n.children&&e([n]))})),Object(l["a"])({},t)}));return u(n)}),u=function e(t){return t.map((function(t){if(h(t))return{path:t.path,name:t.name,meta:t.meta,children:e(t.children)};var n=!!t.meta.showChild&&d(t),a={path:p(t,n),name:n&&t.children[0].name||t.name,meta:n&&t.children[0].meta||t.meta};return!t.meta.showChild&&d(t)&&(a.children=e(t.children)),a}))},d=function(e){return e.children&&1===e.children.length},h=function(e){return e.children&&e.children.length>1},p=function(e,t){var n;return null!==(n=e.meta)&&void 0!==n&&n.href?e.meta.href:t?e.children[0].path:e.path},m={name:"Menu",data:function(){return{form:{title:"",subtitle:"",path:"",openWay:"0",divider:"0",icon:"",auth:""},rule:{},treeData:[],contextData:{},collapse:!1,checkedMenus:[],selectedMenu:{}}},created:function(){this.getTreeData()},computed:Object(l["a"])({},Object(s["c"])(["mainMenu"])),methods:{getTreeData:function(){var e=i(this.mainMenu);this.formatMenus(this.treeData,e)},formatMenus:function(e,t){var n,a=Object(c["a"])(t);try{for(a.s();!(n=a.n()).done;){var o=n.value,r={title:o.meta.title,path:o.path,openWay:"0",divider:"0",icon:o.meta.icon,expand:!!o.children&&this.collapse,contextmenu:!0,checked:!1,children:[]};o.children&&this.formatMenus(r.children,o.children),e.push(r)}}catch(l){a.e(l)}finally{a.f()}},handleSelectMenu:function(e,t){this.selectedMenu=t.selected?t:{},this.form=Object(l["a"])({},this.selectedMenu)},handleCheckedMenu:function(e,t){this.checkedMenus=Object(r["a"])(e)},handleContextMenu:function(e){this.contextData=e},menuEdit:function(){this.$Message.info("编辑了 "+this.contextData.title)},menuDelete:function(){this.$Message.error("删除了 "+this.contextData.title)},collapseOrExpand:function(){this.collapse=!this.collapse,this.treeData=[],this.getTreeData()},deleteMenus:function(){var e=this;this.checkedMenus.length?this.$Modal.confirm({title:"删除确认",content:"您确认要删除菜单<strong>".concat(this.checkedMenus.map((function(e){return e.title})).join(","),"</strong>？"),loading:!0,onOk:function(){setTimeout((function(){e.$Modal.remove(),e.$Message.error("抱歉，您没有该权限")}),800)},onCancel:function(){e.$Message.info("点击了取消")}}):this.$Message.error("您没有勾选菜单")},resetMenu:function(){this.form=Object(l["a"])({},this.selectedMenu)}}},f=m,v=(n("d8ab"),n("2877")),b=Object(v["a"])(f,a,o,!1,null,"5c7d34d4",null);t["default"]=b.exports},a9d4:function(e,t,n){},d8ab:function(e,t,n){"use strict";n("a9d4")}}]);