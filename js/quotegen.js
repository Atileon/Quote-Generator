// The Aim on this project is to create a quote generator



//This variables takes the Arrays defined at the arrays.js file script with the components of a sentence

let w1 = adjArticle;
let w2 = adjSuperlative;
let w3 = nounAbstract;
let w4 = verb;
let w5 = nounCommon;
let w6 = advTowhat;
let w7 = advHow;


//This function to repeat sentences at (n) times

function repeatQuotes(container,n){

  let genQuote = [];
  for(let i = 0; i < n ; i++){
    let arr = new quote(w1, w2, w3, w4, w5, w6, w7);
    genQuote.push(arr);
  }
  genQuote.forEach(function(quote){
    return quote.generator(container);

  });
}

// Repeat call to (any) times do you want
// repeatQuotes(6);
repeatQuotes('qgencontainer',4);
