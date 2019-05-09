let bird2 = {
	bird2: imgs.bd,
	
	
	posX: 100,
	posY: 200,
	speed: 0,
	index: 0,
	alive: true,//check bird2 hit ground or pipe
  
	draw: function (bird2) {
	
			c.drawImage(bird2,this.posX,this.posY);
		
	},

	/**
	 * bird2 fly function.
	 */
	birdfly: function () {
	  //change the Y coordinates by given speed
	  this.posY+=this.speed;
	  //accleration is 1
	  this.speed++;
	  //hit ground or top cellin, dead
	  if(this.posY > 453-56){
		this.speed = 0;
		
		game.gameOver=true;
	  }
	  if(this.posY <=0){
		this.speed = 0;
		game.gameOver=true;
	  }
		
		//if speed positionve, down, if speed negative,  birdup
	  if(this.speed>0){
		this.draw(this.bird2);
	  }else if(this.speed<0){  
		this.draw(this.bird2);
	  }else{
		this.draw(this.bird2);
	  }
	  //make sure the down speed wont greater than 6
	  if(bird2.speed >5){
		bird2.speed = 4;
	  }
	},
	

	}




/**
 * Checks the bird2 crash with obstacles.
 * @param {Object} newPipe - Pipe Object. 
 */

function CheckHiting(newPipe){
		
		let myleft = newPipe.x;
		let myright = newPipe.x + (newPipe.width);
		let mytop = newPipe.y;
		let mybottom = newPipe.y + (newPipe.height);
		let otherleft = bird2.posX;
		let otherright = bird2.posX + (bird2.bird2.width);
		let othertop = bird2.posY;
		let otherbottom = bird2.posY; //+ (bird2.height);
		var crash = true;

		if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
			crash = false;
		}
		return crash;

	}

	/**
	 * Checks if bird2 hits the mushrooms.
	 * @param {Object} m - Mushroom Object.
	 */
	function CheckHitingM(m){
		
		let myleft = m.x;
		let myright = m.x + (m.width);
		let mytop = m.y;
		let mybottom = m.y + (m.height);
		let otherleft = bird2.posX;
		let otherright = bird2.posX + (bird2.bird2.width);
		let othertop = bird2.posY;
		let otherbottom = bird2.posY; //+ (bird2.height);
		var crash = true;
		if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
			crash = false;
		}
		return crash;


	}

/**
 * Initializes the 2p-mode.
 */
function twoplayer()
{

multi=true;

}










  
