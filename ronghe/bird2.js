

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
	//bird2 fly
	birdfly: function () {
	  //change the Y coordinates by given speed
	  this.posY+=this.speed;
	  //accleration is 1
	  this.speed++;
	  //hit ground or top cellin, dead
	  if(this.posY >= 395){
		this.speed = 0;
		
		this.dead();
	  }
	  if(this.posY <= 0){
		this.speed = 0;
		this.dead();
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
	
	dead: function() {
	  this.alive = false;
	}
  }


















  