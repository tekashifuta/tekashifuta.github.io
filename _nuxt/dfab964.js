(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{471:function(e,t,r){"use strict";r.r(t);var n=r(15),c=(r(66),{name:"RequestListPage",middleware:"auth",data:function(){return{requestApiItems:[],editedIndex:-1,editedItem:{req_rem_id:"",req_rem_pass:""},defaultItem:{req_rem_id:"",req_rem_pass:""}}},computed:{reqHeaders:function(){var e=[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Name",value:"req_name"},{text:"Req Remarks",value:"req_remarks"},{text:"Date",value:"req_date_only"},{text:"Rem ID",value:"req_rem_id"},{text:"Rem Pass",value:"req_rem_pass"}];return"admin"==this.$store.state.auth.userRole?e.push({text:"Actions",value:"btnActions",sortable:!1}):"sub_admin"==this.$store.state.auth.userRole&&e.push({text:"APRV",value:"req_apprvd_stat"},{text:"Actions",value:"btnReqOkay",sortable:!1}),e}},created:function(){this.getDataFromApi()},methods:{reqApprvd:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={id:e,req_apprvd_stat:t},"https://attendance.prycegas.com/prycegas_api_algar/rb_api/algar_api.php",n.t0=r.$axios,n.t1="https://attendance.prycegas.com/prycegas_api_algar/rb_api/algar_api.php",n.t2=JSON.stringify(c),n.next=7,r.$store.state.auth.authTokenBearer;case 7:return n.t3=n.sent,n.next=10,n.t0.put.call(n.t0,n.t1,n.t2,n.t3).then((function(e){r.getDataFromApi()})).catch((function(e){console.log(e)}));case 10:case"end":return n.stop()}}),n)})))()},editItem:function(e){this.editedIndex=this.requestApiItems.indexOf(e),this.editedItem=Object.assign({},e)},close:function(){var e=this;this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},saveEditItem:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r.editedIndex>-1)){n.next=16;break}return Object.assign(r.requestApiItems[r.editedIndex],r.editedItem),console.log(r.$store.state.auth.authTokenBearer),c={id:e.id,req_apprvd_stat:t,req_rem_id:e.req_rem_id,req_rem_pass:e.req_rem_pass},"https://attendance.prycegas.com/prycegas_api_algar/rb_api/algar_api.php",n.t0=r.$axios,n.t1="https://attendance.prycegas.com/prycegas_api_algar/rb_api/algar_api.php",n.t2=JSON.stringify(c),n.next=10,r.$store.state.auth.authTokenBearer;case 10:return n.t3=n.sent,n.next=13,n.t0.put.call(n.t0,n.t1,n.t2,n.t3).then((function(e){console.log(e),r.getDataFromApi()})).catch((function(e){console.log(e)}));case 13:console.log(e),n.next=16;break;case 16:r.close();case 17:case"end":return n.stop()}}),n)})))()},getDataFromApi:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://attendance.prycegas.com/prycegas_api_algar/rb_api/algar_api.php",t.t0=e.$axios,t.t1="https://attendance.prycegas.com/prycegas_api_algar/rb_api/algar_api.php",t.next=5,e.$store.state.auth.authTokenBearer;case 5:return t.t2=t.sent,t.next=8,t.t0.get.call(t.t0,t.t1,t.t2).then((function(t){e.requestApiItems=t.data})).catch((function(e){console.log(e)}));case 8:case"end":return t.stop()}}),t)})))()},test:function(){}}}),d=r(86),o=r(116),l=r.n(o),m=r(396),_=r(369),v=r(465),h=r(469),f=r(400),x=r(466),I=r(460),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(" Requests ")]),e._v(" "),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.reqHeaders,items:e.requestApiItems,"item-key":"id"},scopedSlots:e._u([{key:"item.req_rem_id",fn:function(t){var n=t.item;return[n.id===e.editedItem.id?r("v-text-field",{attrs:{"hide-details":!0,dense:"","single-line":""},model:{value:e.editedItem.req_rem_id,callback:function(t){e.$set(e.editedItem,"req_rem_id",t)},expression:"editedItem.req_rem_id"}}):r("span",[e._v(e._s(n.req_rem_id))])]}},{key:"item.req_rem_pass",fn:function(t){var n=t.item;return[n.id===e.editedItem.id?r("v-text-field",{attrs:{"hide-details":!0,dense:"","single-line":""},model:{value:e.editedItem.req_rem_pass,callback:function(t){e.$set(e.editedItem,"req_rem_pass",t)},expression:"editedItem.req_rem_pass"}}):r("span",[e._v(e._s(n.req_rem_pass))])]}},{key:"item.btnReqOkay",fn:function(t){var n=t.item;return[""===n.req_apprvd_stat||"CANCELLED"===n.req_apprvd_stat?r("div",[r("v-icon",{attrs:{small:""},on:{click:function(t){return e.reqApprvd(n.id,"APPROVED")}}},[e._v("\n                mdi-check-bold\n              ")])],1):r("div",[r("v-icon",{attrs:{small:""},on:{click:function(t){return e.reqApprvd(n.id,"CANCELLED")}}},[e._v("\n                mdi-close\n              ")])],1)]}},{key:"item.btnActions",fn:function(t){var n=t.item;return[n.id===e.editedItem.id?r("div",[r("v-icon",{attrs:{small:""},on:{click:function(t){return e.saveEditItem(n,"UPDATEME")}}},[e._v("\n                mdi-content-save\n              ")]),e._v(" "),r("v-icon",{attrs:{color:"red",small:""},on:{click:e.close}},[e._v("\n                mdi-window-close\n              ")])],1):r("div",["APPROVED"===n.req_apprvd_stat?r("div",[r("v-icon",{attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")])],1):e._e()])]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:m.a,VCardText:_.b,VCardTitle:_.c,VCol:v.a,VDataTable:h.a,VIcon:f.a,VRow:x.a,VTextField:I.a})}}]);