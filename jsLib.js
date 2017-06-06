//获取元素
function $(name,id) {
if(name.charAt(0)==="#"){
		name = name.substr(1);
		return document.getElementById(name);
	}else{
		if(!id){
			id = document;
		}
		return id.getElementsByTagName(name);
	}
}

//获取样式
function getStyle(obj,attr) {
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}

//运动函数
function domove(obj,attr,dir,target,endFn) {
	//获取初始值
	var begin = parseInt(getStyle(obj,attr));
	obj.timer1 = setInterval(function () {
		//修复步数与目标值正负
		if(target>begin&&dir<0 || target<begin&&dir>0){
			dir = -dir
		}
		
		var now = parseInt(getStyle(obj,attr)) + dir;
		//步数与目标值不符
		if(now>=target&&dir>0 ||now<=target&&dir<0 ){
			now=target;
			clearInterval(obj.timer1);
			endFn &&endFn();
		};
		obj.style[attr] = now + "px";
	},30)
}
     //斗函数
     function shake(obj,attr,start,endFn){
		//获取一组抖动数
		var arr = [];
		for(var i = 50; i > 0 ;i -=2 ){
			arr.push(i,-i);
		};
		arr.push(0);
		//获取初始位置
		obj.onclick = function () {
			var n = 0;
			clearInterval(obj.timer2)
			obj.timer2 = setInterval(function () {
				obj.style[attr] = begin + arr[n] + "px";
				n++;
				if(n===52){
					clearInterval(obj.timer2);
					endFn && endFn();
			}
		},30)
	}
}
   //渐变函数
   function opacity(obj,dir,target,endFn) {
	//获取初始值
	var begin = parseInt(getStyle(obj,"opacity"));
	obj.timer3 = setInterval(function () {
		//修复步数与目标值正负
		if(target>begin&&dir<0 || target<begin&&dir>0){
			dir = -dir
		}
		
		var now = parseFloat(getStyle(obj,"opacity")) + dir;
		//步数与目标值不符
		if(now>=target&&dir>0 ||now<=target&&dir<0 ){
			now=target;
			clearInterval(obj.timer3);
			endFn &&endFn();
		};
		obj.style.opacity = now;
		obj.style.filter =now*100;
	},30)
}
   