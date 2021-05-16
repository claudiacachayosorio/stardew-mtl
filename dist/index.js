const $={soil:"#e9d65d",soilDark:"#e5bb51",pavement:"#66797f",pavementLight:"#6c996e",road:"#485b4c",roadMarking:"#607966",grass:"#40c51b",grassDark:"#3ea031",water:"#3c82c3"};class Marker{constructor(e,t,n,a,s,i){this.title=e,this.position={lat:t,lng:n},this.icon={url:`../assets/png/locations/${a}.png`,scaledSize:{width:s,height:i}},this.optimized=!1}}const defaultHeight=90,scaleWidth=(e,t)=>e/t*defaultHeight,startingPoint=new Marker("Welcome!",45.446387508733245,-73.7414325471116,"bus",512/6,42.5),mapCenter=startingPoint.position,busIcon=startingPoint.icon.url,markerData=[startingPoint,new Marker("Montréal-Trudeau Airport",45.466151244756595,-73.7456076958713,"jojamart",scaleWidth(384,312),defaultHeight),new Marker("Cra-terre Garden",45.52658588605292,-73.6171524003503,"witchs_hut",scaleWidth(336,279),defaultHeight),new Marker("Montréal, arts interculturels",45.51153320551439,-73.5761720027772,"oasis",scaleWidth(508,664),defaultHeight),new Marker("Jean-Talon Market",45.536395052797445,-73.61421428613065,"pierres_shop",scaleWidth(322,320),defaultHeight),new Marker("Place Versailles",45.59255738667644,-73.54073498928062,"hat_shop",scaleWidth(508,535),defaultHeight),new Marker("Biodôme",45.5597821824346,-73.54994420832364,"leahs_cottage",scaleWidth(447,378),defaultHeight),new Marker("Botanical Garden",45.55999426718373,-73.56299817393943,"ranch",scaleWidth(1152,632),defaultHeight),new Marker("La Fontaine Park",45.524517998162835,-73.56850027237539,"coop",scaleWidth(384,436),defaultHeight),new Marker("Jarry Park",45.53425977877009,-73.6283952866005,"trailer_large",scaleWidth(384,399),defaultHeight),new Marker("Racines Bookstore",45.53630158476484,-73.60382224510487,"community_center",scaleWidth(384,320),defaultHeight),new Marker("L'Euguélionne Bookstore",45.51898338320269,-73.55640264135363,"saloon",scaleWidth(396,435),defaultHeight),new Marker("Grande Bibliothèque",45.51524100060111,-73.56165316127093,"mayors_manor",scaleWidth(576,896),defaultHeight),new Marker("Museum of Fine Arts",45.498528203258694,-73.57947864398147,"museum",scaleWidth(576,512),defaultHeight),new Marker("SPCA Montréal",45.496031389370245,-73.65200322848719,"1_river_road",scaleWidth(568,640),defaultHeight),new Marker("Mont Royal",45.506321671332806,-73.58794237518575,"tent",scaleWidth(192,384),defaultHeight),new Marker("Science Centre",45.50516360342,-73.55034073496597,"elliotts_cabin",scaleWidth(320,448),defaultHeight),new Marker("Old Port",45.51540682467202,-73.54669927023373,"fish_shop",scaleWidth(444,459),defaultHeight)],styles=[{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"transit.line",stylers:[{visibility:"off"}]},{featureType:"transit.station.rail",stylers:[{visibility:"off"}]},{featureType:"all",stylers:[{color:$.soilDark}]},{featureType:"landscape",stylers:[{color:$.grass}]},{featureType:"water",stylers:[{color:$.water}]},{featureType:"poi",stylers:[{color:$.pavement}]},{featureType:"poi.park",stylers:[{color:$.grassDark}]},{featureType:"road.arterial",stylers:[{color:$.soil}]},{featureType:"road.highway",stylers:[{color:$.roadMarking}]},{featureType:"road.highway.controlled_access",stylers:[{color:$.road}]},{featureType:"transit.station.airport",stylers:[{color:$.pavement}]}],mapOptions={center:mapCenter,zoom:14,disableDefaultUI:!0,styles:styles};let map;function initMap(){map=new google.maps.Map(document.getElementById("map"),mapOptions)}let markers=[];function generateMarkers(){markerData.forEach(e=>{const t=new google.maps.Marker(e);t.setMap(map),markers.push(t)})}const infowindow=new google.maps.InfoWindow,openInfo=e=>{infowindow.setContent(e.title),infowindow.open(map,e)},closeInfo=()=>{infowindow.close(),infowindow.setContent("")};function setContent(e){infowindow.getContent()!==e.title?openInfo(e):closeInfo()}function initInfoWindow(){markers.forEach(e=>{e.addListener("click",()=>setContent(e))})}function initMarkers(){generateMarkers(),initInfoWindow()}const img=document.createElement("img");img.setAttribute("src",busIcon),img.hidden=!0,img.style.width="100px",img.style.margin="15px",img.style.cursor="pointer",img.style.filter="drop-shadow(1.5px 1.5px 1.5px #000)";const handleClick=()=>map.setCenter(mapCenter);function createControl(){const e=document.createElement("div");e.appendChild(img),map.controls[google.maps.ControlPosition.LEFT_TOP].push(e)}img.addEventListener("click",handleClick);const centerLatLng=new google.maps.LatLng(mapCenter);function handleChange(){const e=map.getBounds();var t=e.contains(centerLatLng);img.hidden=t}function initRecenter(){createControl(),map.addListener("center_changed",handleChange)}let innerDiv,dayDiv,timeDiv,iconsDiv,weatherImg,seasonImg;function createElements(){innerDiv=document.createElement("div"),dayDiv=document.createElement("div"),iconsDiv=document.createElement("div"),timeDiv=document.createElement("div"),weatherImg=document.createElement("img"),seasonImg=document.createElement("img")}function setClasses(){innerDiv.className="clock",dayDiv.className="clock-day",timeDiv.className="clock-time",iconsDiv.className="clock-icons",weatherImg.className="clock-icons-weather",seasonImg.className="clock-icons-season"}const weatherImgSrc="../assets/png/clock/sun.png",seasonImgSrc="../assets/png/clock/spring.png";function setDefaultContent(){weatherImg.setAttribute("src",weatherImgSrc),seasonImg.setAttribute("src",seasonImgSrc),dayDiv.innerHTML="day",timeDiv.innerHTML="time"}function appendElements(){iconsDiv.appendChild(weatherImg),iconsDiv.appendChild(seasonImg),innerDiv.appendChild(dayDiv),innerDiv.appendChild(iconsDiv),innerDiv.appendChild(timeDiv)}function createClock(){createElements(),setDefaultContent(),setClasses(),appendElements()}function createOuterDiv(){const e=document.createElement("div");return e.appendChild(innerDiv),e}function initControl(){createClock();var e=createOuterDiv();map.controls[google.maps.ControlPosition.RIGHT_TOP].push(e)}function getWeekDay(){switch(data.getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat"}}let date;function setDay(){date=data.getDate();var e=getWeekDay();dayDiv.innerHTML=`${e}. ${date}`}function getMinutes(){var e=data.getMinutes();return e<10?`0${e}`:e}let hours,minutes;function getTime(){hours=data.getHours(),minutes=getMinutes()}function setTime(){getTime(),timeDiv.innerHTML=`${hours}:${minutes}`}function updateTime(){loadData(),setTime()}const interval=3e4;function updateClock(){setInterval(updateTime,interval)}let season;function getSeason(){switch(data.getMonth()){case 0:case 1:return season="winter";case 2:return season=date<21?"winter":"spring";case 3:case 4:return season="spring";case 5:return season=date<21?"spring":"summer";case 6:case 7:return season="summer";case 8:return season=date<21?"summer":"fall";case 9:case 10:return season="fall";case 11:return season=date<21?"fall":"winter"}}const dir="../assets/png/clock/";function setIcon(){var e=dir+season+".png";seasonImg.setAttribute("src",e)}function setSeason(){getSeason(),setIcon()}let types=["sun","rain","storm"];function getWinterTypes(){"winter"===season&&(types.pop(),types[1]="snow")}function getWeather(){var e=Math.floor(Math.random()*types.length);return types[e]}const dir$1="../assets/png/clock/";function setIcon$1(e){e=dir$1+e+".png";weatherImg.setAttribute("src",e)}function setWeather(){getWinterTypes(),setIcon$1(getWeather())}let data;function loadData(){data=new Date}function initClock(){initControl(),loadData(),setDay(),setTime(),updateClock(),setSeason(),setWeather()}initMap(),initMarkers(),initRecenter(),initClock();
//# sourceMappingURL=index.js.map
