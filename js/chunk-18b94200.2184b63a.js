(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b94200"],{3232:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;return e("Card",{attrs:{shadow:""}},[e("Form",{staticClass:"todo-form-search",attrs:{model:t.form,inline:""}},[e("FormItem",{attrs:{label:"搜索："}},[e("Input",{directives:[{name:"width",rawName:"v-width",value:400,expression:"400"}],attrs:{type:"text",placeholder:"输入受理编号、业务号、登记类型、权利人名称等关键字"},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),e("FormItem",[e("Button",{attrs:{type:"primary",icon:"ios-search"}},[t._v("搜索")])],1)],1),e("Table",{attrs:{border:"",columns:t.columns,data:t.tableData},on:{"on-sort-change":t.changeSort},scopedSlots:t._u([{key:"action",fn:function(a){var r=a.row;return[e("Button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.viewDetail(r)}}},[t._v("查看")])]}}])}),e("Page",{staticClass:"ivu-mt-8 ivu-text-center",attrs:{"show-total":"","show-sizer":"","show-elevator":"",total:t.tableData.length},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}}),e("Modal",{attrs:{width:"85%","footer-hide":""},on:{"on-ok":t.handleOk,"on-cancel":t.handleCancel},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-left"},[e("h3",[t._v("受理编号：240516092301059（安化雪峰湖现代农业发展有限公司）")]),e("Row",{staticClass:"ivu-mt-8",attrs:{gutter:16}},[e("Col",{attrs:{span:8}},[t._v("权利类型：抵押权")]),e("Col",{attrs:{span:8}},[t._v("等级大类：首次登记")])],1)],1),e("div",{staticClass:"header-right"},[e("Row",{staticClass:"ivu-text-center",attrs:{gutter:16}},[e("Col",{attrs:{span:6}},[e("div",{directives:[{name:"font",rawName:"v-font",value:12,expression:"12"}]},[t._v("当前环节")]),e("div",{staticClass:"ivu-mt-8"},[t._v("业务查看")])]),e("Col",{attrs:{span:6}},[e("div",{directives:[{name:"font",rawName:"v-font",value:12,expression:"12"}]},[t._v("受理日期")]),e("div",{staticClass:"ivu-mt-8"},[t._v("2024-05-16")])]),e("Col",{attrs:{span:6}},[e("div",{directives:[{name:"font",rawName:"v-font",value:12,expression:"12"}]},[t._v("受理人")]),e("div",{staticClass:"ivu-mt-8"},[t._v("罗晨")])]),e("Col",{attrs:{span:6}},[e("div",{directives:[{name:"font",rawName:"v-font",value:12,expression:"12"}]},[t._v("状态")]),e("div",{staticClass:"ivu-mt-8"},[e("Tag",{attrs:{color:"blue"}},[t._v("正常")])],1)])],1)],1)]),e("Divider",{staticClass:"ivu-mt-16 ivu-mb-4"}),e("Tabs",{attrs:{value:"name1"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[e("TabPane",{attrs:{label:"权属来源",name:"name1"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"申请信息",name:"name2"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"房地信息",name:"name3"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"登簿信息",name:"name4"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"缴费信息",name:"name5"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"审批意见",name:"name6"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"发证信息",name:"name7"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"归档信息",name:"name8"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1),e("TabPane",{attrs:{label:"协同共享",name:"name9"}},[e("TabPane2",{attrs:{record:t.modalForm}})],1)],1)],1)],1)},s=[],n=a("5530"),i=function(){var t=this,e=t._self._c;return e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:12}},[e("Card",{attrs:{shadow:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("Button",{attrs:{size:"small",type:"primary",icon:"md-people"}},[t._v("安化雪峰湖现代农业发展有限责任公司")])]},proxy:!0}])},[e("div",[e("h3",{staticClass:"ivu-text-center ivu-mb-16"},[t._v("湘(2024)安化县不动产权第0004180号")])]),e("table",{staticClass:"info-table"},[e("tr",[e("td",{attrs:{width:"20%"}},[t._v("权利人")]),e("td",{attrs:{width:"80%"}},[t._v("安化雪峰湖现代农业发展有限公司")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("共有情况")]),e("td",{attrs:{width:"80%"}},[t._v("单独所有")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("坐落")]),e("td",{attrs:{width:"80%"}},[t._v("安化县经济开发区江南工业园一期标准化厂房")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("不动产单元号")]),e("td",{attrs:{width:"80%"}},[t._v("430923024004GB00016F00020001")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("权利类型")]),e("td",{attrs:{width:"80%"}},[t._v("国有建没有地使用权/房屋(构筑物)所有权")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("权利性质")]),e("td",{attrs:{width:"80%"}},[t._v("出让/自建房")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("用途")]),e("td",{attrs:{width:"80%"}},[t._v("工业用地/工业")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("面积")]),e("td",{attrs:{width:"80%"}},[t._v("共有宗地面积21978平方米/房屋建筑面积17683.06平方米")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("使用期限")]),e("td",{attrs:{width:"80%"}},[t._v("土地使用期限:2020年7月13日至2050年7月12日止")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("权利其他状况")]),e("td",{attrs:{width:"80%"}},[t._v("专有建筑面积:17683.78平方米")])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("附记")]),e("td",{attrs:{width:"80%"}})])])])],1),e("Col",{attrs:{span:12}},[e("Card",{attrs:{shadow:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[e("span",[t._v("附录图")]),e("Button",{directives:[{name:"print",rawName:"v-print",value:"#printContent",expression:"'#printContent'"}],attrs:{size:"small"}},[e("span",{staticClass:"ivu-mr-4"},[t._v("打印")]),e("Icon",{attrs:{type:"ios-print-outline"}})],1)],1)]},proxy:!0}])},[e("div",{staticClass:"append-image",attrs:{id:"printContent"}},[e("img",{attrs:{src:a("d4ff")}})])])],1)],1)},o=[],l={name:"TabPane1",props:{record:{type:Object,default:function(){}}},data:function(){return{}},created:function(){},methods:{changeSort:function(){}}},c=l,d=(a("9426"),a("2877")),m=Object(d["a"])(c,i,o,!1,null,"9dd0c5c6",null),u=m.exports,p={name:"Done",components:{TabPane2:u},data:function(){return{currentTab:"name4",form:{text:""},columns:[{type:"index",width:60,align:"center"},{title:"状态",key:"status",width:100,sortable:!0},{title:"受理编号",key:"acceptNumber",width:155,sortable:!0},{title:"申请人",key:"applyPeople",sortable:!0,ellipsis:!0,tooltip:!0},{title:"业务名称",key:"businessName",sortable:!0,ellipsis:!0,tooltip:!0},{title:"当前环节",key:"currentStep",width:120,sortable:!0},{title:"受理日期",key:"acceptDate",width:150,sortable:!0},{title:"办结时间",key:"closeDate",width:150,sortable:!0},{title:"缮证时间",key:"writingDate",width:150,sortable:!0},{title:"操作",align:"center",width:100,fixed:"right",slot:"action"}],tableData:[],modalVisible:!1,modalForm:{}}},created:function(){this.tableData=[{status:"在办",region:"安化县",acceptNumber:"240516092301059",applyPeople:"安化雪峰湖现代农业发展有限公司",businessName:"国有建设用地使用权及房屋所有权转移登记+抵押权首次登记",currentStep:"受理",acceptDate:"2024-05-16 08:30"},{status:"办结",region:"安化县",acceptNumber:"240513092302421",applyPeople:"张英 黄再保 安化湘晖房地产开发有限公司",businessName:"国有建设用地使用权及房屋所有权转移登记+抵押权首次登记",currentStep:"已办结",acceptDate:"2024-05-13 16:26",closeDate:"2024-05-13 16:26",writingDate:"2024-05-13 16:26"},{status:"办结",region:"安化县",acceptNumber:"240513092302422",applyPeople:"张英 黄再保 安化湘晖房地产开发有限公司",businessName:"国有建设用地使用权及房屋所有权转移登记+抵押权首次登记",currentStep:"已办结",acceptDate:"2024-05-13 16:26",closeDate:"2024-05-13 16:26",writingDate:"2024-05-13 16:26"},{status:"办结",region:"安化县",acceptNumber:"240513092302520",applyPeople:"张英 黄再保 安化湘晖房地产开发有限公司",businessName:"国有建设用地使用权及房屋所有权转移登记+抵押权首次登记",currentStep:"已办结",acceptDate:"2024-05-13 16:26",closeDate:"2024-05-13 16:26",writingDate:"2024-05-13 16:26"},{status:"办结",region:"安化县",acceptNumber:"240513092302345",applyPeople:"张英 黄再保 安化湘晖房地产开发有限公司",businessName:"国有建设用地使用权及房屋所有权转移登记+抵押权首次登记",currentStep:"已办结",acceptDate:"2024-05-13 16:26",closeDate:"2024-05-13 16:26",writingDate:"2024-05-13 16:26"}]},methods:{changeSort:function(){},changePage:function(){},changePageSize:function(){},viewDetail:function(t){this.modalVisible=!0,this.modalForm=Object(n["a"])({},t)},handleOk:function(){},handleCancel:function(){}}},v=p,b=(a("bae8"),Object(d["a"])(v,r,s,!1,null,"81814a0e",null));e["default"]=b.exports},"527f":function(t,e,a){},"88e9":function(t,e,a){},9426:function(t,e,a){"use strict";a("527f")},bae8:function(t,e,a){"use strict";a("88e9")},d4ff:function(t,e,a){t.exports=a.p+"img/1.77bea7f1.png"}}]);