var app = angular.module("app",[]);
app.controller('ctrl',function($scope){
	var ul = document.getElementById("ltTools");
	//var txtarea = document.getElementsByTagName("textarea");
	var txt = document.getElementById('txtbox');
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

	function getTxt(){

		var userSelection;
        if (window.getSelection) { //现代浏览器
            userSelection = window.getSelection();
        } else if (document.selection) { //IE浏览器 考虑到Opera，应该放在后面
            userSelection = document.selection.createRange();
        }

        var getRangeIndex = function(selectionObject) {
            if (window.getSelection)
                return [txt.selectionStart, txt.selectionEnd];
            else { // 较老版本Safari!
                var range               = document.selection.createRange();             //对选择的文字create Range
                // var selectText          = range.text;                                //选中的文字
                var selectTextLength    = range.text.length;                            //选中文字长度
                txt.select();                                                      //textarea全选
                //StartToStart、StartToEnd、EndToStart、EndToEnd
                range.setEndPoint("StartToStart", document.selection.createRange());    //指针移动到选中文字开始

                var selectTextPosition  = range.text.length;                            //选中文字的结束位置
                range.collapse(false);                                                  //将插入点移动到当前范围的开始
                range.moveEnd("character", -selectTextLength);   //更改范围的结束位置，减去长度，字符开始位置，character不能改
                range.moveEnd("character", selectTextLength);   //再更改范围的结束位置，到字符结束位置
                range.select();                                                         //然后选中字符

                //返回字符的开始和结束位置
                return [selectTextPosition - selectTextLength, selectTextPosition];
            }
        }

        var rangeIndex = getRangeIndex(userSelection);
        selectionStart = rangeIndex[0];
        selectionEnd   = rangeIndex[1];
	}


	//console.log(ul);
});