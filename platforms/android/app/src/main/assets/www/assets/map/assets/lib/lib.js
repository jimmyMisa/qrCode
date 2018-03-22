
var globs={};
function sameAs(v1,v2){
	v1=num(v1);
	v2=num(v2);
	var e=globs.config.epsilone;
	return (v1-e<v2 && v1+e>v2)
}
function num(v){
	return v-0;
}

globs.main=function(map){
	globs.map=map
	drawData();
	events();
	function drawData(){ 
		cleanMarkers()
		$.get(BASE_URL+"/app/zones",function(r){
			var datas=JSON.parse(r);
			for(var i in datas){
				drawContour(JSON.parse(datas[i].contour),map,"#AAFFFF");
			}
		});
		$.get(BASE_URL+"/app/reperes",function(r){
			var datas=JSON.parse(r);
			for(var i in datas){
				mark(datas[i],map,i,datas);
			}
		});
	}
}
function events(){
	window.infodiv=document.getElementById("infodiv");
	window.free=true;
	
	window.addEventListener("click",function(){
		cleanInformation();
	});
}
function loadJs(then){

}
function loadJs(url,then){
	var script=document.createElement("script");
	document.body.appendChild(script);
	script.src=url+"?ver="+Math.random();
	script.addEventListener("load",then);
}
function _wait(c,a,t){
	if(!t || t<0){
		t=100;
	}
	if(c()){
		a();
	}
	else{
		setTimeout(function(){
			_wait(c,a,t);
		},t);
	}
}


