(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c90d6ec"],{"01d2":function(t,e,a){"use strict";var n=a("26c1"),c=a.n(n);c.a},"26c1":function(t,e,a){},d9a2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"projects-view"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"projects-bar"},t._l(t.projects,(function(e){return a("router-link",{key:"prCard"+e.name,staticClass:"project-card",style:{background:e.img?"url("+e.img+") center/cover no-repeat":"#ccc"},attrs:{to:"/projects/"+e.id}},[a("input",{staticClass:"card-title",attrs:{type:"text",readonly:""},domProps:{value:e.name},on:{blur:t.setValue,click:t.redactName}})])})),1)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[a("span",{staticClass:"rad"},[t._v("PROJECTS")]),a("span",{staticClass:"main"},[t._v("PROJECTS")]),a("span",{staticClass:"blue"},[t._v("PROJECTS")])])}],s={name:"ProjectsView",data:function(){return{isRefactorName:!1,nowName:"",projects:[{name:"Lorem",id:"20301230120",img:null,lastActive:"16-10-2020"},{name:"London",id:"203012323230120",img:"https://i.dailymail.co.uk/i/newpix/2018/03/19/09/4A56F83800000578-0-image-a-2_1521452635493.jpg",lastActive:"16-9-2020"}]}},computed:{},methods:{redactName:function(t){var e=t.target;e.hasAttribute("readonly")&&(e.removeAttribute("readonly"),e.focus())},setValue:function(t){var e=t.target;e.textContent=this.nowName}},mounted:function(){}},r=s,i=(a("01d2"),a("2877")),o=Object(i["a"])(r,n,c,!1,null,"74d4f48c",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-7c90d6ec.23ccd30e.js.map