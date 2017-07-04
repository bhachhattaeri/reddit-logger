
// alert("entering....\n")
// console.log('Successdedwedwedewdewdwedw\nerfgerffede');
// var start = new Date().getTime();
// window.onbeforeunload = function(e){
// 	console.log(e);
//   //alert("Leaving....\n")
//  //alert("Leaving....\n")
//  var elapsed = new Date().getTime() - start;
//  console.log("You spent "+(elapsed/1000));

//   return elapsed;
//  // return 'Are you sure you want to leave?';
// };
// //});
// chrome.tabs.onActivated.addListener(function (o){
// 	console.log("hello");
// });
console.log("hello");
// chrome.tabs.getAllInWindow(null, function(tabs){
// 	for (var i = 0; i < tabs.length; i++) {
// 		 console.log(tabs[i]);
// 		//chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });                         
// 	}
// });
// chrome.tabs.onCreated.addListener(function(tab) {         
//    alert(tab.url);
//    //insertDictionaryScript();
// });
var start = new Date().getTime() / 1000;
function getURL(t){
	if(t.url.includes("reddit")==false){
		alert("You changed to something that isn't reddit!")
	}
}
function handleActivated(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, getURL);
}
function tabUpdated(tabId, changeInfo,tab){
	if(changeInfo.url.includes("reddit")==false){
		alert("You changed the URL!");
	}
}
chrome.tabs.onActivated.addListener(handleActivated);
chrome.tabs.onUpdated.addListener(tabUpdated);

	//aler
// chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
//     tabURL = tabs;
//     console.log( tabURL);
// });