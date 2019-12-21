<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <h1 class="font-weight-bold">空氣品質指標(AQI)</h1>
        <div>
          <select name="city" id="cityOption" class="select_btn font-weight-bold mb-3" v-model="countySelected" @change="updateData(countySelected)">
            <option value="" disabled>請選擇地區</option>
            <option :value="item" v-for="item in county" :key="item" >{{item}}</option>
          </select>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row no-gutters" style="border:3px solid black;height:100%">
          <div class="col-md-2 col-6">
            <div class="aqi_demo top status-color-level1" ><span>0~50</span></div>
            <div class="aqi_demo btm">良好</div>
          </div>
          <div class="col-md-2 col-6">
             <div class="aqi_demo top status-color-level2" ><span>51~100</span></div>
             <div class="aqi_demo btm">普通</div>
          </div>
          <div class="col-md-2 col-6">
             <div class="aqi_demo top status-color-level3" ><span>101~150</span></div>
             <div class="aqi_demo btm">對敏感族群不健康</div>
          </div>
          <div class="col-md-2 col-6">
             <div class="aqi_demo top status-color-level4" ><span>151~200</span></div>
             <div class="aqi_demo btm">對所有族群不健康</div>
          </div>
          <div class="col-md-2 col-6">
             <div class="aqi_demo top status-color-level5"><span>201~300</span></div>
             <div class="aqi_demo btm">非常不健康</div>
          </div>
          <div class="col-md-2 col-6" >
             <div class="aqi_demo status-color-level6"><span>301~400</span></div>
             <div class="aqi_demo" style="border-top:3px solid #000000">危害</div>
          </div>
        </div>
      </div>
    </div>
     <div class="d-flex my-5">
        <h2 class="font-weight-bold">{{countySelected}}</h2>
        <div class="line_outer">
          <div class="line_inner"></div>
        </div>
        <div class="d-flex" style="align-items:center;"><span class="font-weight-bold">更新時間:{{siteNameSelected.PublishTime}}</span></div>
      </div>
    <section class="row">
      <div class="col-xl-4  col-md-6">
        <div class="row no-gutters">
          <div class="col-xl-8 col-6 district_Name ">{{siteNameSelected.SiteName}}</div>
          <div class="col-xl-4 col-6 district_aqi" :class="siteNameSelected.Status | aqi_status">{{siteNameSelected.AQI}}</div>
          <ul class="col-12 district_data" style="list-style:none;padding:15px">
            <li class="data_items">
              <b>臭氧</b>
              <span class="ml-2">O3 (ppb)</span>
              <b class="ml-auto">{{siteNameSelected.O3}}</b>
            </li>
            <li class="data_items">
              <b>懸浮粒子</b>
              <span class="ml-2">PM10 (μg/m³)</span>
              <b class="ml-auto">{{siteNameSelected.PM10}}</b>
            </li>
            <li class="data_items">
              <b>細懸浮粒子</b>
              <span class="ml-2">PM2.5 (μg/m³)</span>
              <b class="ml-auto">{{siteNameSelected['PM2.5']}}</b>
            </li>
            <li class="data_items">
              <b>一氧化碳</b>
              <span class="ml-2">CO (ppm)</span>
              <b class="ml-auto">{{siteNameSelected.CO}}</b>
            </li>
            <li class="data_items">
              <b>二氧化碳</b>
              <span class="ml-2">SO2 (ppb)</span>
              <b class="ml-auto">{{siteNameSelected.SO2}}</b>
            </li>
            <li class="data_items">
              <b>二氧化氮</b>
              <span class="ml-2">NO2 (ppb)</span>
              <b class="ml-auto">{{siteNameSelected.NO2}}</b>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xl-8  col-md-6" >
        <div class="row district-items">
          <div class=" col-xl-6  mb-5 hover_am"  v-for="city in siteSelectedData" :key="city.county" style="cursor:pointer" @click="selectSiteName(city)">
            <div class="row no-gutters ">
              <div class="col-7 district_Name">{{city.SiteName}}</div>
              <div class="col-5 district_aqi" :class="city.Status | aqi_status">{{city.AQI || '設備維修' }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aqi_status from '@/filters/aqi_status.js'

export default {
  name: 'aqi-test',
  data() {
    return {
      data: null,
      countySelected:'臺北市',
      county:[],
      siteSelectedData:[],
      siteNameSelected:{},
    };
  },
  created() {
    this.getData()
    
  },
  methods:{
    getData(){
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://opendata.epa.gov.tw/webapi/Data/REWIQA/?$orderby=SiteName&$skip=0&$top=1000&format=json';
    const corsUrl = cors + url;
    const vm = this;
    fetch(corsUrl)
      .then(function (response){
      // if (!response.ok) throw new Error(response.statusText);
      return response.json();
      })
      .then((jsonData) => {
        if (jsonData) {
          vm.data = jsonData;
          vm.data.forEach(function(item){
            if(vm.county.indexOf(item.County) === -1){
              vm.county.push(item.County)
            }
          })
         const countySelectedData = vm.data.filter(item => item.County === vm.countySelected);
          vm.siteSelectedData = countySelectedData;
          vm.siteNameSelected = vm.siteSelectedData[0]
        }
      })
      .catch(err => console.log(err));
    },
    updateData(countyName){
     const vm = this
     vm.siteSelectedData = vm.data.filter(item =>item.County === vm.countySelected)
     vm.siteNameSelected = vm.siteSelectedData[0]
    },
    selectSiteName(city){
      this.siteNameSelected = city
    }
  },
};
</script>

<style scoped>
.aqi_demo{
  height:50%;
  display:grid;
  place-items:center;
  font-weight:700;
}
.top{
  border-right:3px solid #000000
}
.btm{
  border-top:3px solid #000000;
  border-right:3px solid #000000
}
.line_outer{
  display:flex;
  padding:0 1em;
  align-items:center;
  flex:auto;
  align-items: center
}
.line_inner{
  width:100%;
  border-top:3px dotted #000000;
}
.data_items{
 display: flex;
 padding:15px;
 border-bottom:1px solid #000;
 align-items:flex-end;
}
.data_items:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.data_items b{
  font-size:24px;
}
.select_btn{
 width:100%;
 height:3em;
 border:2px solid #000000;
 padding-left:1em;
}
.district_data{
  border:3px solid #000;
  border-top:0;
}
.district_Name, .district_aqi{
  font-size:1.5rem;
  font-weight:700;
  border:3px solid;
  border-collapse: collapse
}
.district_Name{
  display:flex;
  align-items:center;
  justify-content:center;
}
.district_aqi{
  padding:15px 0;
  border-left:0;
}
.hover_am:hover{
  transition: all .05s ease;
  transform: scale(1.1);
}
.status-color-level1{
 background:#95f084;
}
.status-color-level2{
 background:#ffe695
}
.status-color-level3{
 background:#ffaf6a
}
.status-color-level4{
 background:#ff5757
}
.status-color-level5{
 background:#9777ff
}
.status-color-level6{
 background:#ad1774
}
</style>
