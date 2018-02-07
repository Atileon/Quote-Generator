// The Aim on this project is to create a quote generator



//This variables takes the name of the Arrays defined at the arrays.js file script with the components of a sentence

let w1 = adjArticle;
let w2 = adjSuperlative;
let w3 = nounAbstract;
let w4 = verb;
let w5 = nounCommon;
let w6 = advToWhat;
let w7 = advHow;


//This function to repeat sentences on (id) container at (n) times

function repeatQuotes(id,n){

  let genQuote = [];//here we store the quotes objects into an array
  for(let i = 0; i < n ; i++){
    let quoteArray = new quote(w1, w2, w3, w4, w5, w6, w7);
    genQuote.push(quoteArray);
  }

  genQuote.forEach(function(quote){
    return quote.generator(id);
  });
}
// so, this would call the function

/* Call repeatQuotes function directly on jQuery selector/s adding some variables to pass on repeatQuotes function */

$('.secondBtn, .firstBtn').click(function(){

  let quotes = 4; // It will set how many quotes would be displayed in a random range
  let parent = $(this).parent().attr('id');//It pass the container parameter from the button element
  let num = Math.floor((Math.random() * quotes) + 1);// te random value for the number of quotes on display

  $(this).nextUntil('.descr', 'p').remove();//This to remove the previous quotes created on click event.

  repeatQuotes(parent, num);
});
