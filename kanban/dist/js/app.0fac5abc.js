(function(e){function t(t){for(var a,s,c=t[0],u=t[1],i=t[2],l=0,b=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/kanban/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"006f":function(e,t,n){},"1f64":function(e,t,n){"use strict";n("4a72")},"42a3":function(e,t,n){"use strict";n("69bf")},"4a72":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("ad3d"),o=n("ecee"),s=n("c074");function c(e,t){var n=Object(a["x"])("router-view");return Object(a["p"])(),Object(a["d"])(n)}n("42a3");const u={};u.render=c;var i=u,d=n("6c02"),l={class:"board"},b={class:"flex flex-row items-start"},f={class:"column flex pr-2"};function p(e,t,n,r,o,s){var c=Object(a["x"])("v-column"),u=Object(a["x"])("font-awesome-icon"),i=Object(a["x"])("router-view");return Object(a["p"])(),Object(a["d"])("div",l,[Object(a["g"])("div",b,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.board.columns,(function(t,n){return Object(a["p"])(),Object(a["d"])(c,{key:n,column:t,columnIndex:n,board:e.board},null,8,["column","columnIndex","board"])})),128)),Object(a["g"])("div",f,[Object(a["E"])(Object(a["g"])("input",{type:"text",class:"p-2 flex-grow rounded-l",placeholder:"New column name...","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newColumnName=e}),onKeyup:t[2]||(t[2]=Object(a["F"])((function(){return s.createColumn&&s.createColumn.apply(s,arguments)}),["enter"]))},null,544),[[a["C"],o.newColumnName]]),Object(a["g"])("button",{class:"flex justify-center items-center p-1 bg-grey-lighter rounded-r hover:bg-grey",onClick:t[3]||(t[3]=function(){return s.createColumn&&s.createColumn.apply(s,arguments)}),"aria-label":"Add task"},[Object(a["g"])(u,{icon:"plus",size:"2x"})])])]),s.isTaskOpen?(Object(a["p"])(),Object(a["d"])("div",{key:0,class:"task-bg",onClick:t[4]||(t[4]=Object(a["G"])((function(){return s.close&&s.close.apply(s,arguments)}),["self"]))},[Object(a["g"])(i)])):Object(a["e"])("",!0)])}var m=n("5530"),O=(n("b0c0"),n("5502")),j=Object(a["H"])("data-v-ae7ae4aa");Object(a["s"])("data-v-ae7ae4aa");var k={class:"flex items-center mb-2 font-bold"},v={class:"list-none w-full"};Object(a["q"])();var g=j((function(e,t,n,r,o,s){var c=Object(a["x"])("v-task"),u=Object(a["x"])("v-drag"),i=Object(a["x"])("v-drop");return Object(a["p"])(),Object(a["d"])(i,{onDrop:e.moveTaskOrColumn},{default:j((function(){return[Object(a["g"])(u,{"transfer-data":{type:"column",fromColumnIndex:e.columnIndex},class:"column"},{default:j((function(){return[Object(a["g"])("h2",k,Object(a["z"])(e.column.name),1),Object(a["g"])("div",v,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.column.tasks,(function(t,n){return Object(a["p"])(),Object(a["d"])(c,{key:t.id,task:t,"task-index":n,column:e.column,"column-index":e.columnIndex,board:e.board},null,8,["task","task-index","column","column-index","board"])})),128)),Object(a["g"])("input",{type:"text",class:"w-full p-2 bg-transparent",placeholder:"+ Enter new task",onKeyup:t[1]||(t[1]=Object(a["F"])((function(t){return s.createTask(t,e.column.tasks)}),["enter"]))},null,32)])]})),_:1},8,["transfer-data"])]})),_:1},8,["onDrop"])})),h=(n("a9e3"),{props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},board:{type:Object,required:!0}},methods:Object(m["a"])(Object(m["a"])({},Object(O["c"])(["MOVE_TASK","MOVE_COLUMN"])),{},{moveTaskOrColumn:function(e){"task"!==e.type?this.moveColumn(e):this.moveTask(e)},moveColumn:function(e){var t=e.fromColumnIndex;this.MOVE_COLUMN({fromColumnIndex:t,toColumnIndex:this.columnIndex})},moveTask:function(e){var t=e.fromColumnIndex,n=e.fromTaskIndex,a=this.board.columns[t].tasks,r=this.board.columns[this.columnIndex].tasks,o=void 0===this.taskIndex?r.length:this.taskIndex;this.MOVE_TASK({fromTasks:a,toTasks:r,fromTaskIndex:n,toTaskIndex:o})}})});function x(e,t,n,r,o,s){return Object(a["p"])(),Object(a["d"])("div",{draggable:"true",onDragstart:t[1]||(t[1]=Object(a["G"])((function(){return s.onDrag&&s.onDrag.apply(s,arguments)}),["self"])),onDragover:t[2]||(t[2]=Object(a["G"])((function(){}),["prevent"])),onDragenter:t[3]||(t[3]=Object(a["G"])((function(){}),["prevent"]))},[Object(a["w"])(e.$slots,"default")],32)}var T={name:"VDrag",props:{transferData:{type:Object,required:!0}},methods:{onDrag:function(e){e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("payload",JSON.stringify(this.transferData))}}};T.render=x;var y=T;function C(e,t,n,r,o,s){return Object(a["p"])(),Object(a["d"])("div",{onDrop:t[1]||(t[1]=Object(a["G"])((function(){return s.onDrop&&s.onDrop.apply(s,arguments)}),["stop"])),onDragover:t[2]||(t[2]=Object(a["G"])((function(){}),["prevent"])),onDragenter:t[3]||(t[3]=Object(a["G"])((function(){}),["prevent"]))},[Object(a["w"])(e.$slots,"default")],32)}var w={name:"VDrop",methods:{onDrop:function(e){var t=JSON.parse(e.dataTransfer.getData("payload"));this.$emit("drop",t)}}};w.render=C;var D=w,E=(n("a4d3"),n("e01a"),Object(a["H"])("data-v-1a536382"));Object(a["s"])("data-v-1a536382");var _={class:"text-lg font-bold"},I={key:0,class:"mt-1 text-sm"};Object(a["q"])();var A=E((function(e,t,n,r,o,s){var c=Object(a["x"])("v-drag"),u=Object(a["x"])("v-drop");return Object(a["p"])(),Object(a["d"])(u,{onDrop:e.moveTaskOrColumn},{default:E((function(){return[Object(a["g"])(c,{class:["task",{done:n.task.done}],"transfer-data":{type:"task",fromColumnIndex:e.columnIndex,fromTaskIndex:n.taskIndex},onClick:t[1]||(t[1]=function(e){return s.goToTask(n.task)})},{default:E((function(){return[Object(a["g"])("h3",_,Object(a["z"])(n.task.name),1),n.task.description?(Object(a["p"])(),Object(a["d"])("p",I,Object(a["z"])(n.task.description),1)):Object(a["e"])("",!0)]})),_:1},8,["class","transfer-data"])]})),_:1},8,["onDrop"])})),S={name:"VTask",mixins:[h],components:{VDrop:D,VDrag:y},props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},methods:Object(m["a"])(Object(m["a"])({},Object(O["c"])(["DELETE_TASK"])),{},{goToTask:function(e){this.$router.push({name:"task",params:{id:e.id}})},deleteTask:function(e,t,n){this.DELETE_TASK({tasks:t,taskIndex:n})}})};n("d41f");S.render=A,S.__scopeId="data-v-1a536382";var N=S,V={name:"VColumn",components:{VTask:N,VDrag:y,VDrop:D},mixins:[h],methods:Object(m["a"])(Object(m["a"])({},Object(O["c"])(["CREATE_TASK"])),{},{createTask:function(e,t){this.CREATE_TASK({tasks:t,name:e.target.value}),e.target.value=""}})};n("9a2a");V.render=g,V.__scopeId="data-v-ae7ae4aa";var M=V,K={name:"Board",components:{VColumn:M},data:function(){return{newColumnName:""}},computed:Object(m["a"])(Object(m["a"])({},Object(O["d"])(["board"])),{},{isTaskOpen:function(){return"task"===this.$route.name}}),methods:Object(m["a"])(Object(m["a"])({},Object(O["c"])(["CREATE_COLUMN"])),{},{close:function(){this.$router.push({name:"board"})},createColumn:function(){0!==this.newColumnName.length&&(this.CREATE_COLUMN({name:this.newColumnName}),this.newColumnName="")}})};n("1f64");K.render=p;var P=K,U={class:"task-view"},L=Object(a["g"])("label",{for:"task-name",class:"text-grey-darker text-sm"},"Name of the task",-1),q=Object(a["g"])("label",{for:"task-description",class:"block mt-5 text-sm text-grey-darker"}," Description of the task ",-1),G=Object(a["f"])("Done ");function $(e,t,n,r,o,s){return Object(a["p"])(),Object(a["d"])("div",U,[L,Object(a["g"])("input",{class:"w-full p-2 font-bold text-xl w-full shadow-inner",id:"task-name",value:s.task.name,placeholder:"task.name",onChange:t[1]||(t[1]=function(e){return s.updateTaskProperty(e,"name")})},null,40,["value"]),q,Object(a["E"])(Object(a["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.task.description=e}),class:"w-full relative bg-transparent mt-2 px-2 pb-3 border rounded border-none shadow-inner",placeholder:"Description...",id:"task-description",onChange:t[3]||(t[3]=function(e){return s.updateTaskProperty(e,"description")})},"\n    ",544),[[a["C"],s.task.description]]),Object(a["g"])("label",{class:[{"bg-green text-white":s.task.done},"flex items-center w-1/4 mt-2 p-2 rounded bg-grey-light font-bold"]},[Object(a["E"])(Object(a["g"])("input",{class:"mr-1",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return s.task.done=e}),onChange:t[5]||(t[5]=function(t){return e.UPDATE_TASK({task:s.task,key:"done",value:s.task.done})})},null,544),[[a["B"],s.task.done]]),G],2)])}var J={name:"Task",computed:Object(m["a"])(Object(m["a"])({},Object(O["b"])(["getTask"])),{},{task:function(){return this.getTask(this.$route.params.id)}}),methods:Object(m["a"])(Object(m["a"])({},Object(O["c"])(["UPDATE_TASK"])),{},{updateTaskProperty:function(e,t){this.UPDATE_TASK({task:this.task,key:t,value:e.target.value})}})};n("ea62");J.render=$;var R=J,z=[{path:"/",name:"board",component:P,children:[{path:"task/:id",name:"task",component:R}]}],F=Object(d["a"])({history:Object(d["b"])("/kanban/dist/"),routes:z}),B=F,H=n("b85c");n("d3b7"),n("25f0"),n("a434"),n("fb6a");function Q(){return Math.random().toString(16).slice(2)}function W(e){e.subscribe((function(e,t){localStorage.setItem("board",JSON.stringify(t.board))}))}var X={name:"workshop",columns:[{name:"TODO",tasks:[{description:"Some description about this task...",name:"first task",id:1,userAssigned:null},{description:"Some description about this task...",name:"second task",id:Q(),userAssigned:null},{description:"some description for your easy task",name:"and third",id:Q(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"",name:"First task",id:Q(),userAssigned:null}]},{name:"DONE",tasks:[{description:"",name:"First task",id:Q(),userAssigned:null}]}]},Y=JSON.parse(localStorage.getItem("board"))||X,Z=Object(O["a"])({plugins:[W],state:{board:Y},getters:{getTask:function(e){return function(t){var n,a=Object(H["a"])(e.board.columns);try{for(a.s();!(n=a.n()).done;){var r,o=n.value,s=Object(H["a"])(o.tasks);try{for(s.s();!(r=s.n()).done;){var c=r.value;if(c.id.toString()===t.toString())return c}}catch(u){s.e(u)}finally{s.f()}}}catch(u){a.e(u)}finally{a.f()}}}},mutations:{CREATE_TASK:function(e,t){var n=t.tasks,a=t.name;n.push({name:a,id:Q(),description:""})},CREATE_COLUMN:function(e,t){var n=t.name;e.board.columns.push({name:n,tasks:[]})},UPDATE_TASK:function(e,t){var n=t.task,a=t.key,r=t.value;n[a]=r},MOVE_TASK:function(e,t){var n=t.fromTasks,a=t.toTasks,r=t.fromTaskIndex,o=t.toTaskIndex,s=n.splice(r,1)[0];a.splice(o,0,s)},MOVE_COLUMN:function(e,t){var n=t.fromColumnIndex,a=t.toColumnIndex;if("number"===typeof n){var r=e.board.columns,o=r.splice(n,1)[0];r.splice(a,0,o)}},DELETE_TASK:function(e,t){var n=t.tasks,a=t.taskIndex;n.splice(a,1)}}});n("ba8c");o["c"].add(s["a"],s["b"]),Object(a["c"])(i).component("font-awesome-icon",r["a"]).use(Z).use(B).mount("#app")},"69bf":function(e,t,n){},"7a2d":function(e,t,n){},"9a2a":function(e,t,n){"use strict";n("c8a4")},ba8c:function(e,t,n){},c8a4:function(e,t,n){},d41f:function(e,t,n){"use strict";n("006f")},ea62:function(e,t,n){"use strict";n("7a2d")}});
//# sourceMappingURL=app.0fac5abc.js.map