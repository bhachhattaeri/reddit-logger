
alert("entering....\n")
console.log('Successdedwedwedewdewdwedw\nerfgerffede');
var start = new Date().getTime();
window.onbeforeunload = function(e){
  //alert("Leaving....\n")
 //alert("Leaving....\n")
 var elapsed = new Date().getTime() - start;
 console.log("You spent "+elapsed);

  return elapsed;
 // return 'Are you sure you want to leave?';
};
//});