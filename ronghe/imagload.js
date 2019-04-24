let imgs = {
  //preload the imges 
  
  bd:new Image(),
  
 
  loadImg: function (fn) {
    this.bd.src = './img/bird2.png';
  
   
    let that = this;
    // to check loading imga complete or not
    let timer = setInterval(function() {
      if (that.bd.complete) {
       
        clearInterval(timer);
       
        fn();
      }
    }, 50)
  }
}
