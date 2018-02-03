// The Aim on this project is to create a quote generator

// TODO: Create an object to generate Quotes     DONE

// TODO: Create an Array to get in the quotes and authors  DONE

// TODO: Initialize with a foreach      DONE

// Quote object block
function quote(quote, author){
  this.quote = quote;
  this.author = author;
}

  quote.prototype.generator = function(){
    var theQuote = '"' + this.quote + '"\n-'+ this.author + '-';
    return theQuote;
  }
//=========================================================

// New objects to get into the array
var quote1= new quote('A baby gotta do what a baby gotta do', 'Chuck');
var quote2 = new quote('Happines is a mindset','Someone');
var quote3 = new quote('Take my money','Some meme');


// The Array and the pushes
var quotes = [];
quotes.push(quote1);
quotes.push(quote2);
quotes.push(quote3);


//The forEach to print on console the generated quotes

quotes.forEach(function(quote){
  console.log(quote.generator());
});
