webpackJsonp([1],{Cr1M:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")({name:"App"},i,!1,function(t){e("ll/F")},null,null).exports,c=e("/ocq"),o={name:"aqi-test",data:function(){return{data:null,countySelected:"臺北市",county:[],siteSelectedData:[],siteNameSelected:{}}},created:function(){this.getData()},methods:{getData:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/http://opendata.epa.gov.tw/webapi/Data/REWIQA/?$orderby=SiteName&$skip=0&$top=1000&format=json").then(function(t){return t.json()}).then(function(s){if(s){t.data=s,t.data.forEach(function(s){-1===t.county.indexOf(s.County)&&t.county.push(s.County)});var e=t.data.filter(function(s){return s.County===t.countySelected});t.siteSelectedData=e,t.siteNameSelected=t.siteSelectedData[0]}}).catch(function(t){return console.log(t)})},updateData:function(t){var s=this;s.siteSelectedData=s.data.filter(function(t){return t.County===s.countySelected}),s.siteNameSelected=s.siteSelectedData[0]},selectSiteName:function(t){this.siteNameSelected=t}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("h1",{staticClass:"font-weight-bold"},[t._v("空氣品質指標(AQI)")]),t._v(" "),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.countySelected,expression:"countySelected"}],staticClass:"select_btn font-weight-bold mb-3",attrs:{name:"city",id:"cityOption"},on:{change:[function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.countySelected=s.target.multiple?e:e[0]},function(s){return t.updateData(t.countySelected)}]}},[e("option",{attrs:{value:"",disabled:""}},[t._v("請選擇地區")]),t._v(" "),t._l(t.county,function(s){return e("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})],2)])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"d-flex my-5"},[e("h2",{staticClass:"font-weight-bold"},[t._v(t._s(t.countySelected))]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"d-flex",staticStyle:{"align-items":"center"}},[e("span",{staticClass:"font-weight-bold"},[t._v("更新時間:"+t._s(t.siteNameSelected.PublishTime))])])]),t._v(" "),e("section",{staticClass:"row"},[e("div",{staticClass:"col-xl-4  col-md-6"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-xl-8 col-6 district_Name "},[t._v(t._s(t.siteNameSelected.SiteName))]),t._v(" "),e("div",{staticClass:"col-xl-4 col-6 district_aqi",class:t._f("aqi_status")(t.siteNameSelected.Status)},[t._v(t._s(t.siteNameSelected.AQI))]),t._v(" "),e("ul",{staticClass:"col-12 district_data",staticStyle:{"list-style":"none",padding:"15px"}},[e("li",{staticClass:"data_items"},[e("b",[t._v("臭氧")]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("O3 (ppb)")]),t._v(" "),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteNameSelected.O3))])]),t._v(" "),e("li",{staticClass:"data_items"},[e("b",[t._v("懸浮粒子")]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("PM10 (μg/m³)")]),t._v(" "),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteNameSelected.PM10))])]),t._v(" "),e("li",{staticClass:"data_items"},[e("b",[t._v("細懸浮粒子")]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("PM2.5 (μg/m³)")]),t._v(" "),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteNameSelected["PM2.5"]))])]),t._v(" "),e("li",{staticClass:"data_items"},[e("b",[t._v("一氧化碳")]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("CO (ppm)")]),t._v(" "),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteNameSelected.CO))])]),t._v(" "),e("li",{staticClass:"data_items"},[e("b",[t._v("二氧化碳")]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("SO2 (ppb)")]),t._v(" "),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteNameSelected.SO2))])]),t._v(" "),e("li",{staticClass:"data_items"},[e("b",[t._v("二氧化氮")]),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("NO2 (ppb)")]),t._v(" "),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteNameSelected.NO2))])])])])]),t._v(" "),e("div",{staticClass:"col-xl-8  col-md-6"},[e("div",{staticClass:"row district-items"},t._l(t.siteSelectedData,function(s){return e("div",{key:s.county,staticClass:" col-xl-6  mb-5 hover_am",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.selectSiteName(s)}}},[e("div",{staticClass:"row no-gutters "},[e("div",{staticClass:"col-7 district_Name"},[t._v(t._s(s.SiteName))]),t._v(" "),e("div",{staticClass:"col-5 district_aqi",class:t._f("aqi_status")(s.Status)},[t._v(t._s(s.AQI||"設備維修"))])])])}),0)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"row no-gutters",staticStyle:{border:"3px solid black",height:"100%"}},[e("div",{staticClass:"col-md-2 col-6"},[e("div",{staticClass:"aqi_demo top status-color-level1"},[e("span",[t._v("0~50")])]),t._v(" "),e("div",{staticClass:"aqi_demo btm"},[t._v("良好")])]),t._v(" "),e("div",{staticClass:"col-md-2 col-6"},[e("div",{staticClass:"aqi_demo top status-color-level2"},[e("span",[t._v("51~100")])]),t._v(" "),e("div",{staticClass:"aqi_demo btm"},[t._v("普通")])]),t._v(" "),e("div",{staticClass:"col-md-2 col-6"},[e("div",{staticClass:"aqi_demo top status-color-level3"},[e("span",[t._v("101~150")])]),t._v(" "),e("div",{staticClass:"aqi_demo btm"},[t._v("對敏感族群不健康")])]),t._v(" "),e("div",{staticClass:"col-md-2 col-6"},[e("div",{staticClass:"aqi_demo top status-color-level4"},[e("span",[t._v("151~200")])]),t._v(" "),e("div",{staticClass:"aqi_demo btm"},[t._v("對所有族群不健康")])]),t._v(" "),e("div",{staticClass:"col-md-2 col-6"},[e("div",{staticClass:"aqi_demo top status-color-level5"},[e("span",[t._v("201~300")])]),t._v(" "),e("div",{staticClass:"aqi_demo btm"},[t._v("非常不健康")])]),t._v(" "),e("div",{staticClass:"col-md-2 col-6"},[e("div",{staticClass:"aqi_demo status-color-level6"},[e("span",[t._v("301~400")])]),t._v(" "),e("div",{staticClass:"aqi_demo",staticStyle:{"border-top":"3px solid #000000"}},[t._v("危害")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"line_outer"},[s("div",{staticClass:"line_inner"})])}]};var v=e("VU/8")(o,n,!1,function(t){e("Cr1M")},"data-v-265dec4d",null).exports;a.a.use(c.a);var d=new c.a({routes:[{path:"/",name:"index",component:v}]});a.a.config.productionTip=!1,a.a.filter("aqi_status",function(t){var s="";switch(t){case"良好":s="status-color-level1";break;case"普通":s="status-color-level2";break;case"對敏感族群不健康":s="status-color-level3";break;case"對所有族群不健康":s="status-color-level4";break;case"非常不健康":s="status-color-level5";break;case"危害":s="status-color-level6";break;default:s="status-color-none"}return s}),new a.a({el:"#app",router:d,components:{App:l},template:"<App/>"})},"ll/F":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.e49664cc5af88cbfa716.js.map