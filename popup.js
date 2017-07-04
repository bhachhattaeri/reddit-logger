var onReddit = false;
var notOnReddit = true;
var start;// = new Date().getTime() / 1000;
chrome.storage.local.set({'counter':0});

function saveData(data){
	chrome.storage.local.get('counter', function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    	console.log(items.counter);	
    	var ndata = data + items.counter;
    	chrome.storage.local.set({'counter': ndata}, function() {
       // Notify that we saved.
       		console.log(ndata);
       		alert(ndata);
       //message('Settings saved');
    	});
	});
	
}
function getURL(tab){
	if(tab.url.includes("reddit")==false){
		if(onReddit==true){
			onReddit = false;
			notOnReddit = true;
			// save the time
			var endTime = new Date().getTime() - start;
			alert("About to store "+ endTime);
			saveData(endTime);
			//alert("You have dis-continued your reddit use!");
		}
		else if(notOnReddit==true){
			//nothing to do
		//	alert("You have switched to notOnReddit from a different tab!")
		}
	}else{
		if(onReddit==true){
			// nothing to do
			//alert("You have continued your reddit use!");
		}else{
			notOnReddit = false;
			onReddit = true;
			// start the timer
			start = new Date().getTime();
			//alert("You have arrived at Reddit from a different tab!")
		}
	}
}
function handleActivated(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, getURL);
}
function tabUpdated(tabId, changeInfo,tab){
	if(changeInfo.url.includes("reddit")==false){
		if(onReddit==true){
			onReddit = false;
			notOnReddit = true;
			// save the timer
			alert("You changed the URL on this tab!");
		}else{
			alert("You have changed from notOnReddit to notOnReddit!");
		}
	}else{
		if(onReddit==true){
			// nothing to do
			alert("From onReddit to onReddit!")
		}else{
			notOnReddit = false;
			onReddit = true;
			// start the timer
			alert("From notOnReddit to onReddit!");
		}
	}
}
/* If the user switches to a new tab, we will check if it has reddit opened*/
chrome.tabs.onActivated.addListener(handleActivated);

/* If the user goes to a new webpage from the same tab, we will check
 if is under the reddit domain */
chrome.tabs.onUpdated.addListener(tabUpdated);
