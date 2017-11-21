function jsonp(json){
	json = json || {};
	if (!json.url) {
		alert('请输入正确的路径！');
		return;
	}
	json.data = json.data || {};
	json.cbName = json.cbName || 'cb';
	var fnName = 'show' + Math.random();
	fnName = fnName.replace('.','');
	window[fnName] = function(json1){
		json.success && json.success(json1.s);
		oHead.removeChild(oScript);
	}
	json.data[json.cbName] = fnName;
	var arr = [];
	for(var name in json.data){
		arr.push(name + '=' + json.data[name]);
	}
	var oScript = document.createElement('script');
	oScript.src = json.url + '?' + arr.join('&');
	var oHead = document.getElementsByTagName('head')[0];
	oHead.appendChild(oScript);
}