document.addEventListener('DOMContentLoaded', function () {
	
        var bg = chrome.extension.getBackgroundPage();
    	var myURL = bg.dat;
    	var s=document.getElementById('a');
		s.innerHTML=myURL;
});