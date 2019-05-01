let imgs = {
  //preload the imges 
  
  bd:new Image(),
 
  
 
  loadImg: function (fn) {
    if(mushbool==false)
    {
    this.bd.src = './img/bird2.png';
    }
    if(mushbool==true)
    {
      this.bd.src = './img/Jayhawk2.png';
    }
   
  
   
    let that = this;
    // to check loading imga complete or not
    let timer = setInterval(function() {
      if (that.bd.complete) {
       
        clearInterval(timer);
       
        
      }
    }, 50)
  }
}