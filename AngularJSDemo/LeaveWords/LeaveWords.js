var app = angular.module("app",[]);
app.controller('ctrl',function($scope){
	var ul = document.getElementById("ltTools");
	//var li = document.getElementsByTagName('li');
	var arrli = ul.children;
	var flag  = true;
	//console.log(ul.children);
	
	
	
	var EventUtil={
			addHandler:function(element,type,handler){
				if(element.addListener)
					element.addListener(type,handler,false);
				else if(element.attachEvent)
					element.attachEvent("on"+type,handler);
				else 
					element["on"+type] = handler;
			},
			getEvent:function(event){
				return event?event:window.event;
			}
		};

	Remider(arrli);
	clickEvent(arrli);
	function clickEvent(arr){
		for(var i = 0;i<arr.length;i++){
			var a = arr[i];
			a.index = i;

			EventUtil.addHandler(a,'click',function(){
				removeEle(this);
				toggle(this);
				//alert("--");
			});
		}
	}

	function Remider(arr){
		for(var i =0;i<arr.length;i++){
			var a = arr[i];
			a.index = i;

			EventUtil.addHandler(a,'mouseover',function(){
				switch(this.index){
					case 0 :
						createEle(this,"bold");
						break;
					case 1 :
						createEle(this,"italic");
						break;
					case 2:
						createEle(this,'underline');
						break;
					case 3:
						createEle(this,'fontsize');
						break;
					case 4:
						createEle(this,'fontcolor');
						break;
					case 5:
						createEle(this,'Add-img');
						break;
					case 6:
						createEle(this,'link');
						break;
					case 7 :
						createEle(this,'left');
						break;
					case 8:
						createEle(this,'right');
						break;
					case 9:
						createEle(this,'center');
						break;
					case 10:
						createEle(this,'qoute');
						break;
					case 11:
						createEle(this,'code');
						break;
					case 12:
						createEle(this,'emoji');
						break;
				}
			});

			EventUtil.addHandler(a,'mouseout',function(){
				removeEle(this,this.index);
			});

			// a.onmouseover = function(){
			// 	alert(this.index);
			// }
		}
	}

	function createEle(ele,str){
		var div = document.createElement("div");
		div.setAttribute('class','reminder');
		var txt = document.createTextNode(str);
		div.appendChild(txt);
		ele.appendChild(div); 
	}	

	function removeEle(ele){
		var e = document.getElementsByClassName("reminder")[0];
		ele.removeChild(e);
	}

	function toggle(ele){
		console.log(ele.childNodes[3]);
		if(ele.childNodes[3].style.display=='block')
			ele.childNodes[3].style.display ='none';
		else
			ele.childNodes[3].style.display ='block';


	}
	//console.log(ul);
});