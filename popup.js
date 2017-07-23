var onReddit = false;
var notOnReddit = true;
var start;// = new Date().getTime() / 1000;
chrome.storage.local.set({'counter':0});
var dat = 0;
function saveData(data){
	chrome.storage.local.get('counter', function(items){
    	console.log(items.counter);	
    	var ndata = data + items.counter;
    	chrome.storage.local.set({'counter': ndata}, function() {
      	});
	});
	
}
function getURL(tab){
	if(tab.url.includes("reddit")==false){
		if(onReddit==true){
			onReddit = false;
			notOnReddit = true;
			var endTime = new Date().getTime() - start;
			saveData(endTime/(1000));
		}
		else if(notOnReddit==true){
		}
	}else{
		if(onReddit==true){
		}else{
			notOnReddit = false;
			onReddit = true;
			start = new Date().getTime();
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
			var endTime = new Date().getTime() - start;
			//alert("About to store "+ endTime);
			saveData(endTime/(1000));
			//alert("You changed the URL on this tab!");
		}else{
		//	alert("You have changed from notOnReddit to notOnReddit!");
		}
	}else{
		if(onReddit==true){
			// nothing to do
		//	alert("From onReddit to onReddit!")
		}else{
			notOnReddit = false;
			onReddit = true;
			// start the timer
			start = new Date().getTime();
		//	alert("From notOnReddit to onReddit!");
		}
	}
}
;
/* If the user switches to a new tab, we will check if it has reddit opened*/
chrome.tabs.onActivated.addListener(handleActivated);
      chrome.storage.onChanged.addListener(function (changes,areaName) {
        	chrome.storage.local.get('counter', function(items){
    	// 	chrome.runtime.sendMessage({msg: 'hello there'});
    		dat = items.counter;
     	});
     });
/* If the user goes to a new webpage from the same tab, we will check
 if is under the reddit domain */
chrome.tabs.onUpdated.addListener(tabUpdated);
