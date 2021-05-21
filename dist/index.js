(()=>{"use strict";const e="#66797f";class t{constructor(e,t,n,r,s,o){this.title=e,this.position={lat:t,lng:n},this.icon={url:`../assets/png/locations/${r}.png`,scaledSize:{width:s,height:o}},this.optimized=!1}}const n=90,r=(e,t)=>e/t*n,s=new t("Welcome!",45.446387508733245,-73.7414325471116,"bus",512/6,42.5),o=s.position,a=s.icon.url,c=[s,new t("Montréal-Trudeau Airport",45.466151244756595,-73.7456076958713,"jojamart",r(384,312),n),new t("Cra-terre Garden",45.52658588605292,-73.6171524003503,"witchs_hut",r(336,279),n),new t("Montréal, arts interculturels",45.51153320551439,-73.5761720027772,"oasis",r(508,664),n),new t("Jean-Talon Market",45.536395052797445,-73.61421428613065,"pierres_shop",r(322,320),n),new t("Place Versailles",45.59255738667644,-73.54073498928062,"hat_shop",r(508,535),n),new t("Biodôme",45.5597821824346,-73.54994420832364,"leahs_cottage",r(447,378),n),new t("Botanical Garden",45.55999426718373,-73.56299817393943,"ranch",r(1152,632),n),new t("La Fontaine Park",45.524517998162835,-73.56850027237539,"coop",r(384,436),n),new t("Jarry Park",45.53425977877009,-73.6283952866005,"trailer_large",r(384,399),n),new t("Racines Bookstore",45.53630158476484,-73.60382224510487,"community_center",r(384,320),n),new t("L'Euguélionne Bookstore",45.51898338320269,-73.55640264135363,"saloon",r(396,435),n),new t("Grande Bibliothèque",45.51524100060111,-73.56165316127093,"mayors_manor",r(576,896),n),new t("Museum of Fine Arts",45.498528203258694,-73.57947864398147,"museum",r(576,512),n),new t("SPCA Montréal",45.496031389370245,-73.65200322848719,"1_river_road",r(568,640),n),new t("Mont Royal",45.506321671332806,-73.58794237518575,"tent",r(192,384),n),new t("Science Centre",45.50516360342,-73.55034073496597,"elliotts_cabin",r(320,448),n),new t("Old Port",45.51540682467202,-73.54669927023373,"fish_shop",r(444,459),n)],i={center:o,zoom:14,disableDefaultUI:!0,styles:[{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"transit.line",stylers:[{visibility:"off"}]},{featureType:"transit.station.rail",stylers:[{visibility:"off"}]},{featureType:"all",stylers:[{color:"#e5bb51"}]},{featureType:"landscape",stylers:[{color:"#40c51b"}]},{featureType:"water",stylers:[{color:"#3c82c3"}]},{featureType:"poi",stylers:[{color:e}]},{featureType:"poi.park",stylers:[{color:"#3ea031"}]},{featureType:"road.arterial",stylers:[{color:"#e9d65d"}]},{featureType:"road.highway",stylers:[{color:"#607966"}]},{featureType:"road.highway.controlled_access",stylers:[{color:"#485b4c"}]},{featureType:"transit.station.airport",stylers:[{color:e}]}]};let l,u=[];const d=new google.maps.InfoWindow;const p=document.createElement("img");p.setAttribute("src",a),p.className="map-ctrl recenter i",p.hidden=!0,p.addEventListener("click",(()=>l.setCenter(o)));const m=new google.maps.LatLng(o);let f,h,g,y,w,T,b,C,M,k;function v(){C=E.getHours(),M=function(){let e=E.getMinutes();return e<10?`0${e}`:e}(),g.innerHTML=`${C}:${M}`}let E,_=["sun","rain","storm"];function L(){E=new Date}l=new google.maps.Map(document.getElementById("map"),i),c.forEach((e=>{const t=new google.maps.Marker(e);t.setMap(l),u.push(t)})),u.forEach((e=>{e.addListener("click",(()=>{return t=e,void(d.getContent()!==t.title?(e=>{d.setContent(e.title),d.open(l,e)})(t):(d.close(),d.setContent("")));var t}))})),function(){const e=document.createElement("div");e.appendChild(p),l.controls[google.maps.ControlPosition.LEFT_TOP].push(e)}(),l.addListener("center_changed",(function(){const e=l.getBounds().contains(m);p.hidden=e})),function(){f=document.createElement("div"),h=document.createElement("div"),y=document.createElement("div"),g=document.createElement("div"),w=document.createElement("img"),T=document.createElement("img"),f.className="map-ctrl clock",h.className="clock-day",g.className="clock-time",y.className="clock-i",w.className="i-weather",T.className="i-season",y.appendChild(w),y.appendChild(T),f.appendChild(h),f.appendChild(y),f.appendChild(g);const e=function(){const e=document.createElement("div");return e.appendChild(f),e}();l.controls[google.maps.ControlPosition.RIGHT_TOP].push(e)}(),L(),function(){b=E.getDate();const e=function(){switch(E.getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat"}}();h.innerHTML=`${e}. ${b}`}(),v(),setInterval((function(){L(),v()}),3e4),function(){switch(E.getMonth()){case 0:case 1:return k="winter";case 2:return k=b<21?"winter":"spring";case 3:case 4:return k="spring";case 5:return k=b<21?"spring":"summer";case 6:case 7:return k="summer";case 8:return k=b<21?"summer":"fall";case 9:case 10:return k="fall";case 11:k=b<21?"fall":"winter"}}(),function(){const e=`../../assets/png/clock/${k}.png`;T.setAttribute("src",e)}(),"winter"===k&&(_.pop(),_[1]="snow"),function(e){const t=`../assets/png/clock/${e}`;w.setAttribute("src",t)}(function(){const e=Math.floor(Math.random()*_.length);return _[e]}())})();
//# sourceMappingURL=index.js.map