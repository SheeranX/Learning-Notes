var EventUtil = {
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type] = handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type] = null;
		}
	},
	getEvent:function(event){
		return event?event:window.event;
	},
	getTarget:function(event){
		return event.target||event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
};

// EventUtil.addHandler(document,"mouseover",function(event){
// 	var myDiv = document.getElementById("box");
// 	myDiv.style.left = event.clientX+"px";
// 	myDiv.style.top = event.clientY+"px";
// 	//alert("==");
// });

var DragDrop = function(eleClass){

	var dragging = null;
		diffX = 0;//attach to the mouse
		diffY = 0;

	function handleEvent(){
		event = EventUtil.getEvent(event);
		var target = EventUtil.getTarget(event);
		switch(event.type){
			case "mousedown":
				if(target.className.indexOf("draggable")>-1){
					dragging = target;
					diffX = event.clientX - target.offsetLeft;
					diffY = event.clientY - target.offsetTop;
				}
				break;
			case "mousemove":
				if(dragging!==null){
					dragging.style.left = (event.clientX-diffX)+"px";
					dragging.style.top  = (event.clientY-diffY)+"px";
				}
				break;
			case "mouseup":
				dragging = null;
				break;
		}
	};
	return {
		enable:function(){
			EventUtil.addHandler(document,'mousedown',handleEvent);
			EventUtil.addHandler(document,'mousemove',handleEvent);
			EventUtil.addHandler(document,'mouseup',handleEvent);
		},
		disable:function(){
			EventUtil.removeHandler(document,"mousedown",handleEvent);
			EventUtil.removeHandler(document,"mousemove",handleEvent);
			EventUtil.removeHandler(document,"mouseup",handleEvent);
		}
	}
}();

DragDrop.enable();