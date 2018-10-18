function load(){
	var htmlEle = document.documentElement;
	var htmlWidth = window.innerWidth;
	htmlEle.style.fontSize = 100/750*htmlWidth+'px';
}
load();
window.onresize = function(){
    load()
};