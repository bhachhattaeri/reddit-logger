document.addEventListener('DOMContentLoaded', function () {
	
        var bg = chrome.extension.getBackgroundPage();
    	var myURL = bg.dat;
    	var s=document.getElementById('a');
		if(bg.onReddit==true){
			s.innerHTML="Currently on reddit...";
		}else
			s.innerHTML=myURL+" seconds spent.";
});