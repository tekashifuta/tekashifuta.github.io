(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{472:function(e,t,r){"use strict";r.r(t);var n=r(15),o=(r(66),r(21),r(58),{name:"IndexPage",middleware:"auth",data:function(){return{v_reqName:"",v_reqRemarks:"",dateNow:(new Date).toISOString().split("T")[0]}},created:function(){},methods:{saveData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={req_name:e.v_reqName,req_remarks:e.v_reqRemarks,req_date_only:e.dateNow},t.next=3,e.$axios.post("http://attendance.prycegas.com/prycegas_api_algar/saveNewReq.php",JSON.stringify(r),e.$store.state.auth.authTokenBearer).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()}}}),c=r(86),l=r(116),v=r.n(l),d=r(355),m=r(396),_=r(369),f=r(465),w=r(466),h=r(460),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v(" Algar Request Template ")]),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{label:"Name",solo:""},model:{value:e.v_reqName,callback:function(t){e.v_reqName=t},expression:"v_reqName"}}),e._v(" "),r("v-text-field",{attrs:{solo:"",label:"Request Remarks"},model:{value:e.v_reqRemarks,callback:function(t){e.v_reqRemarks=t},expression:"v_reqRemarks"}}),e._v(" "),r("div",{staticClass:"text-right"},[r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.saveData()}}},[e._v(" Request ")])],1)],1),e._v(" "),r("v-card-actions")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:d.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:f.a,VRow:w.a,VTextField:h.a})}}]);