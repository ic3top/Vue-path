(function(e){function t(t){for(var a,c,s=t[0],u=t[1],i=t[2],d=0,b=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/kanban/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f64":function(e,t,n){"use strict";n("4a72")},"42a3":function(e,t,n){"use strict";n("69bf")},"4a72":function(e,t,n){},"4b05":function(e,t,n){},"4b6f":function(e,t,n){"use strict";n("4b05")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("ad3d"),o=n("ecee"),c=n("c074");function s(e,t){var n=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])(n)}n("42a3");const u={};u.render=s;var i=u,l=n("6c02"),d={class:"board"},b={class:"flex flex-row items-start"},f={class:"column flex pr-2"};function m(e,t,n,r,o,c){var s=Object(a["w"])("v-column"),u=Object(a["w"])("font-awesome-icon"),i=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",d,[Object(a["g"])("div",b,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.board.columns,(function(t,n){return Object(a["p"])(),Object(a["d"])(s,{key:n,column:t,columnIndex:n,board:e.board},null,8,["column","columnIndex","board"])})),128)),Object(a["g"])("div",f,[Object(a["D"])(Object(a["g"])("input",{type:"text",class:"p-2 flex-grow rounded-l",placeholder:"New column name...","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newColumnName=e}),onKeyup:t[2]||(t[2]=Object(a["E"])((function(){return c.createColumn&&c.createColumn.apply(c,arguments)}),["enter"]))},null,544),[[a["B"],o.newColumnName]]),Object(a["g"])("button",{class:"flex justify-center items-center p-1 bg-grey-lighter rounded-r hover:bg-grey",onClick:t[3]||(t[3]=function(){return c.createColumn&&c.createColumn.apply(c,arguments)}),"aria-label":"Add task"},[Object(a["g"])(u,{icon:"plus",size:"2x"})])])]),c.isTaskOpen?(Object(a["p"])(),Object(a["d"])("div",{key:0,class:"task-bg",onClick:t[4]||(t[4]=Object(a["F"])((function(){return c.close&&c.close.apply(c,arguments)}),["self"]))},[Object(a["g"])(i)])):Object(a["e"])("",!0)])}var p=n("5530"),O=(n("b0c0"),n("5502")),k=Object(a["G"])("data-v-61bb3e50");Object(a["s"])("data-v-61bb3e50");var j={class:"flex items-center mb-2 font-bold"},v={class:"list-none w-full"},g={class:"w-full"};Object(a["q"])();var T=k((function(e,t,n,r,o,c){var s=Object(a["w"])("v-task");return Object(a["p"])(),Object(a["d"])("div",{class:"column",draggable:"true",onDrop:t[2]||(t[2]=function(t){return e.moveTaskOrColumn(t,e.column.tasks,e.columnIndex)}),onDragover:t[3]||(t[3]=Object(a["F"])((function(){}),["prevent"])),onDragenter:t[4]||(t[4]=Object(a["F"])((function(){}),["prevent"])),onDragstart:t[5]||(t[5]=Object(a["F"])((function(t){return c.pickupColumn(t,e.columnIndex)}),["self"]))},[Object(a["g"])("h2",j,Object(a["y"])(e.column.name),1),Object(a["g"])("ul",v,[Object(a["g"])("li",null,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.column.tasks,(function(t,n){return Object(a["p"])(),Object(a["d"])(s,{key:t.id,task:t,"task-index":n,column:e.column,"column-index":e.columnIndex,board:e.board},null,8,["task","task-index","column","column-index","board"])})),128))]),Object(a["g"])("li",g,[Object(a["g"])("input",{type:"text",class:"w-full p-2 bg-transparent",placeholder:"+ Enter new task",onKeyup:t[1]||(t[1]=Object(a["E"])((function(t){return c.createTask(t,e.column.tasks)}),["enter"]))},null,32)])])],32)})),h=(n("a9e3"),{props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},board:{type:Object,required:!0}},methods:Object(p["a"])(Object(p["a"])({},Object(O["c"])(["MOVE_TASK","MOVE_COLUMN"])),{},{moveTaskOrColumn:function(e,t,n,a){var r=e.dataTransfer.getData("type");"task"!==r?this.moveColumn(e,n):this.moveTask(e,t,a)},moveColumn:function(e,t){var n=e.dataTransfer.getData("from-column-index");this.MOVE_COLUMN({fromColumnIndex:n,toColumnIndex:t})},moveTask:function(e,t,n){var a=e.dataTransfer.getData("from-column-index"),r=this.board.columns[a].tasks,o=e.dataTransfer.getData("from-task-index");this.MOVE_TASK({fromTasks:r,toTasks:t,fromTaskIndex:o,toTaskIndex:n})}})}),x=(n("a4d3"),n("e01a"),Object(a["G"])("data-v-b79a31b4"));Object(a["s"])("data-v-b79a31b4");var y={class:"text-lg font-bold"},w={key:0,class:"mt-1 text-sm"};Object(a["q"])();var C=x((function(e,t,n,r,o,c){return Object(a["p"])(),Object(a["d"])("div",{class:["task",{done:n.task.done}],onClick:t[1]||(t[1]=function(e){return c.goToTask(n.task)}),onDragstart:t[2]||(t[2]=function(t){return c.pickupTask(t,n.taskIndex,e.columnIndex)}),draggable:"true",onDragover:t[3]||(t[3]=Object(a["F"])((function(){}),["prevent"])),onDragenter:t[4]||(t[4]=Object(a["F"])((function(){}),["prevent"])),onDrop:t[5]||(t[5]=Object(a["F"])((function(t){return e.moveTaskOrColumn(t,e.column.tasks,e.columnIndex,n.taskIndex)}),["stop"]))},[Object(a["g"])("h3",y,Object(a["y"])(n.task.name),1),n.task.description?(Object(a["p"])(),Object(a["d"])("p",w,Object(a["y"])(n.task.description),1)):Object(a["e"])("",!0)],34)})),E={name:"VTask",mixins:[h],props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},methods:Object(p["a"])(Object(p["a"])({},Object(O["c"])(["DELETE_TASK"])),{},{goToTask:function(e){this.$router.push({name:"task",params:{id:e.id}})},pickupTask:function(e,t,n){e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("from-task-index",t),e.dataTransfer.setData("from-column-index",n),e.dataTransfer.setData("type","task")},deleteTask:function(e,t,n){this.DELETE_TASK({tasks:t,taskIndex:n})}})};n("c18f");E.render=C,E.__scopeId="data-v-b79a31b4";var A=E,D={name:"VColumn",components:{VTask:A},mixins:[h],methods:Object(p["a"])(Object(p["a"])({},Object(O["c"])(["CREATE_TASK"])),{},{pickupColumn:function(e,t){e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("from-column-index",t),e.dataTransfer.setData("type","column")},createTask:function(e,t){this.CREATE_TASK({tasks:t,name:e.target.value}),e.target.value=""}})};n("4b6f");D.render=T,D.__scopeId="data-v-61bb3e50";var _=D,S={name:"Board",components:{VColumn:_},data:function(){return{newColumnName:""}},computed:Object(p["a"])(Object(p["a"])({},Object(O["d"])(["board"])),{},{isTaskOpen:function(){return"task"===this.$route.name}}),methods:Object(p["a"])(Object(p["a"])({},Object(O["c"])(["CREATE_COLUMN"])),{},{close:function(){this.$router.push({name:"board"})},createColumn:function(){0!==this.newColumnName.length&&(this.CREATE_COLUMN({name:this.newColumnName}),this.newColumnName="")}})};n("1f64");S.render=m;var I=S,N={class:"task-view"},M=Object(a["g"])("label",{for:"task-name",class:"text-grey-darker text-sm"},"Name of the task",-1),K=Object(a["g"])("label",{for:"task-description",class:"block mt-5 text-sm text-grey-darker"}," Description of the task ",-1),P=Object(a["f"])("Done ");function U(e,t,n,r,o,c){return Object(a["p"])(),Object(a["d"])("div",N,[M,Object(a["g"])("input",{class:"w-full p-2 font-bold text-xl w-full shadow-inner",id:"task-name",value:c.task.name,placeholder:"task.name",onChange:t[1]||(t[1]=function(e){return c.updateTaskProperty(e,"name")})},null,40,["value"]),K,Object(a["D"])(Object(a["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.task.description=e}),class:"w-full relative bg-transparent mt-2 px-2 pb-3 border rounded border-none shadow-inner",placeholder:"Description...",id:"task-description",onChange:t[3]||(t[3]=function(e){return c.updateTaskProperty(e,"description")})},"\n    ",544),[[a["B"],c.task.description]]),Object(a["g"])("label",{class:[{"bg-green text-white":c.task.done},"flex items-center w-1/4 mt-2 p-2 rounded bg-grey-light font-bold"]},[Object(a["D"])(Object(a["g"])("input",{class:"mr-1",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.task.done=e}),onChange:t[5]||(t[5]=function(t){return e.UPDATE_TASK({task:c.task,key:"done",value:c.task.done})})},null,544),[[a["A"],c.task.done]]),P],2)])}var V={name:"Task",computed:Object(p["a"])(Object(p["a"])({},Object(O["b"])(["getTask"])),{},{task:function(){return this.getTask(this.$route.params.id)}}),methods:Object(p["a"])(Object(p["a"])({},Object(O["c"])(["UPDATE_TASK"])),{},{updateTaskProperty:function(e,t){this.UPDATE_TASK({task:this.task,key:t,value:e.target.value})}})};n("ea62");V.render=U;var F=V,L=[{path:"/",name:"board",component:I,children:[{path:"task/:id",name:"task",component:F}]}],q=Object(l["a"])({history:Object(l["b"])("/kanban/dist/"),routes:L}),R=q,J=n("3835"),$=n("b85c");n("d3b7"),n("25f0"),n("a434"),n("fb6a");function B(){return Math.random().toString(16).slice(2)}function G(e){e.subscribe((function(e,t){localStorage.setItem("board",JSON.stringify(t.board))}))}var z={name:"workshop",columns:[{name:"TODO",tasks:[{description:"Some description about this task...",name:"first task",id:1,userAssigned:null},{description:"Some description about this task...",name:"second task",id:B(),userAssigned:null},{description:"some description for your easy task",name:"and third",id:B(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"",name:"First task",id:B(),userAssigned:null}]},{name:"DONE",tasks:[{description:"",name:"First task",id:B(),userAssigned:null}]}]},H=JSON.parse(localStorage.getItem("board"))||z,Q=Object(O["a"])({plugins:[G],state:{board:H},getters:{getTask:function(e){return function(t){var n,a=Object($["a"])(e.board.columns);try{for(a.s();!(n=a.n()).done;){var r,o=n.value,c=Object($["a"])(o.tasks);try{for(c.s();!(r=c.n()).done;){var s=r.value;if(s.id.toString()===t.toString())return s}}catch(u){c.e(u)}finally{c.f()}}}catch(u){a.e(u)}finally{a.f()}}}},mutations:{CREATE_TASK:function(e,t){var n=t.tasks,a=t.name;n.push({name:a,id:B(),description:""})},CREATE_COLUMN:function(e,t){var n=t.name;e.board.columns.push({name:n,tasks:[]})},UPDATE_TASK:function(e,t){var n=t.task,a=t.key,r=t.value;n[a]=r},MOVE_TASK:function(e,t){var n=t.fromTasks,a=t.toTasks,r=t.fromTaskIndex,o=t.toTaskIndex,c=n.splice(r,1),s=Object(J["a"])(c,1),u=s[0];a.splice(o,0,u)},MOVE_COLUMN:function(e,t){var n=t.fromColumnIndex,a=t.toColumnIndex,r=e.board.columns,o=r.splice(n,1)[0];r.splice(a,0,o)},DELETE_TASK:function(e,t){var n=t.tasks,a=t.taskIndex;n.splice(a,1)}}});n("ba8c");o["c"].add(c["a"],c["b"]),Object(a["c"])(i).component("font-awesome-icon",r["a"]).use(Q).use(R).mount("#app")},"69bf":function(e,t,n){},"7a2d":function(e,t,n){},aee3:function(e,t,n){},ba8c:function(e,t,n){},c18f:function(e,t,n){"use strict";n("aee3")},ea62:function(e,t,n){"use strict";n("7a2d")}});
//# sourceMappingURL=app.61627694.js.map