// The Aim on this project is to create a quote generator


//This Create an quote Object
function quote(w1, w2, w3, w4, w5, w6, w7){

  function rand(array){
    let rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }
  this.w1 = rand(w1);
  this.w2 = rand(w2);
  this.w3 = rand(w3);
  this.w4 = rand(w4);
  this.w5 = rand(w5);
  this.w6 = rand(w6);
  this.w7 = rand(w7);
}

quote.prototype.generator = function(){

    let theQuote =
    '"'
    +this.w1+' '
    +this.w2+' '
    +this.w3+' '
    +this.w4+' '
    +this.w5+' '
    +this.w6+' '
    +this.w7
    +'"';
    return theQuote;

}
