(function(){
    "use strict";
    console.log("sheeramn");
    window.onload = function(){
        var box = document.getElementById('clickMe');

        box.onclick = function(ev){
            console.log("get click");
            var ev = ev || window.event;//判断浏览器支持情况
            var target = ev.target || ev.srcElement;

            if(target.nodeName.toLowerCase()=='li')
            {
                switch (target.id) {
                    case "add":
                        alert('Add');
                        break;
                    case "remove":
                        alert("remove");
                        break;
                    case "move":
                        alert("move");
                        break;
                    case "select":
                        alert("select");
                        break;
                }
                console.log(target.id);
            }
        }
    }
})();
