var player = 0;
var boxes = document.querySelectorAll("li");
var turns = 0;
var button = document.querySelector("button");
var array = [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6];

document.button.querySelector("reset").addEventListener.("click", resetBoard);

// Listening for clicks on board and setting player 

for(var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", getPlayer);

}

function getPlayer() {
	
		if (this.innerHTML !== "X" && this.innerHTML !== "O"){
			
			if(turns % 2 === 0){
		
				this.innerHTML="X";

			}else {
	    
	    		this.innerHTML="O";

			}
			isWinner();
			turns ++;
			
		}

}
	
// Resets the board
function resetBoard(){
	for(var i = 0; i < boxes.length; i++){
		boxes[i].innerHTML="";
	}
}
// determines winner
function isWinner(){
	for (j = 0; j < array.length; j++){
		
		if(boxes[array][j][0].innerHTML === player && 
			boxes[array][j][1].innerHTML === player && 
			boxes[array][j][2].innerHTML === player){
			
			return player + "X's Win";
		}

		
			
	}
	