
var boxes = $(".box");
var turns = 0;
var $button = $("button");
var tie = 0;
var array = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[1,4,7],[2,5,8],[0,3,6],[2,4,6]];



$(".box").on("click", function(){
	console.log(this);
if (!$(this).html()) 
	{
	if (turns ===1){
		$(this).html("X");
	}else {
	 	$(this).html("O");
	}
	checkWinner();
	tie++;
	if(tie > 8){
		console.log("Tie!");
		alert("Tie!");
	}

	turns = turns === 0 ? 1 : 0;
 };
 

});

$("#reset").on("click", function(){
 console.log(this);
 $(".box").empty()
});


function checkWinner(){
	$.each( array, function(i,value){
		if (boxes[value[0]].innerHTML === boxes[value[1]].innerHTML
		 	&& boxes[value[1]].innerHTML === boxes[value[2]].innerHTML
		  	&& boxes[value[0]].innerHTML !== "")
		{
			if (turns === 1){
				console.log("X Wins!");
				alert("X Wins!");
			}else {
				console.log("O Wins!");
				alert("O Wins!");
			}
				
		// }else{ function CheckforTie(){
  //           	for(var i=1;i<10;i++){
		// 				if(getBox(i)=="")
  //              			return false;
  //           }
  //           return true;

		} 
        
	}
		
 
)};


 
//else if($(boxes[value[i]]).val() === 9) {
		// 	 console.log(this);
		// 	 alert(this);
		// }












// document.querySelector("#reset").addEventListener("click", resetBoard);

// // Listening for clicks on board and setting player 

// for(var i = 0; i < boxes.length; i++) {
// 	boxes[i].addEventListener("click", getPlayer)

// }

// function getPlayer(){
	
// 		if(!this.innerHTML){

// 				if(turns % 2 === 0){

// 					this.innerHTML = "X";
// 					player = 1;

// 				} else {

// 					this.innerHTML = "O";
// 					player = 2;
// 				}
				
// 				turns++;
// 			isWinner(this.innerHTML)
// 		}

// }
	
// // Resets the board
// function resetBoard(){
// 	for(var i = 0; i < boxes.length; i++){
// 		boxes[i].innerHTML = "";
// 	}
// }



// // Determines winner
// function isWinner(player){
// 	for(var i = 0; i < array.length; i++){
// 		if(boxes[array[i][0]].innerHTML === player && boxes[array[i][1]].innerHTML === player && boxes[array[i][2]].innerHTML === player){
			
// 			console.log(player + " Wins!");

// 		}
// 	}		
			
// }
	