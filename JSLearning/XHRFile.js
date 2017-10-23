var droptarget = document.getElementById('droptarget');

function handleEvent(event){
	var info = '',
		output = document.getElementById('output'),
		data,xhr,files,i,len;
		// EventUtil in handle.js
	EventUtil.preventDefault(event);

	if(event.type=='drop'){
		data = new FormData();
		files = event.dataTransfer.files;
		i = 0;
		len = files.length;

		while(i<len){
			data.append('files'+i,files[i]);
			i++;
		}

		xhr = new XMLHttpRequest();
		xhr.open('post','FileAPIExample06Upload.php',true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4)
				alert(xhr.responseText);
		};
		xhr.send(data);
	}
}

EventUtil.addHandler(droptarget,'dragenter',handleEvent);
EventUtil.addHandler(droptarget,'dragover',handleEvent);
EventUtil.addHandler(droptarget,'drop',handleEvent);