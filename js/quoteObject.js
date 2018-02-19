// The Aim on this project is to create a quote generator


//This Create an quote Object
function quote(w1, w2, w3, w4, w5, w6, w7,quote){

  function rand(array){//This function return a random array value from the array on the parameter
    let rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }
  // The next rows to pass the arrays through the rand function to set a random value for any parameter
  this.w1 = rand(w1);
  this.w2 = rand(w2);
  this.w3 = rand(w3);
  this.w4 = rand(w4);
  this.w5 = rand(w5);
  this.w6 = rand(w6);
  this.w7 = rand(w7);
}

quote.prototype.generator = function(id,type){

  //Now we must to create an element to insert the quote
  let newEl = document.createElement('p');

    let crazyQuote =
    '-'
    +this.w1+' '
    +this.w2+' '
    +this.w3+', '
    +this.w4+' '
    +this.w5+', '
    +this.w6+' '
    +this.w7
    +'-';

    console.log(crazyQuote);

    newEl.className = 'crazyQuote text-capitalize';
    newEl.innerHTML = crazyQuote;


    //Now we need to obtain the Id of the element where we got to insert the element with the quote inside
    let container = document.getElementById(id);

    return container.appendChild(newEl);//It will return theQuote into a 'p' element.

}

//This create the Wise Owl Quote generator Object

function wiseOwl(theQuote){

  function rand(array){
    let rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }

  let quoteResult = rand(theQuote);

  this.author = quoteResult.author;
  this.quote = quoteResult.quote;
}
wiseOwl.prototype.generator = function(id){

  let newEl = document.createElement('p');
  let wiseQuote =
  '" '+
  this.quote+ '"<br>'+
  '<span class="author">- '+
  this.author+
  ' -</span>';

  console.log(wiseQuote);

  newEl.className = 'wiseQuote text-capitalize';
  newEl.innerHTML = wiseQuote;

  let container = document.getElementById(id);

  return container.appendChild(newEl);
}
