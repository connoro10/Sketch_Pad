$(document).ready(function(){
	createBoard(16);
$("#clear").click(function(){
	clear();
	var d = prompt("Enter Dimensions");
	createBoard(d);
});
function createBoard(d){
	for(var i = 0; i<d; i++){
		for(var j = 0; j<d; j++){
			$( "#container" ).append("<div class='squares'></div>");
		}
	}
	var divs = document.querySelectorAll(".squares");
	var size = 700+(3*d);
	document.querySelector("#container").style.width=size+"px";
	document.querySelector("#container").style.height=size+"px";
	for(var x = 0; x<divs.length; x++){
		divs[x].style.width = (size-d)/d+"px";
		divs[x].style.height = (size-d)/d+"px";
	}
	$(".squares").mouseenter(function(){
	$(this).removeClass( "squares" ).addClass( "colored" );

	});
}
function clear(){
	var divs = document.querySelectorAll("div>div");
	for(var i = 0; i<divs.length; i++){
		divs[i].remove();
	}
}
});


