// The Aim on this project is to create a quote generator



//This variables takes the name of the Arrays defined at the arrays.js file script with the components of a sentence

let w1 = adjArticle;
let w2 = adjSuperlative;
let w3 = nounAbstract;
let w4 = verb;
let w5 = nounCommon;
let w6 = advToWhat;
let w7 = advHow;

let quoteArr = quotes;


//This function to repeat sentences on (id) container at (n) times
function repeatQuotes(id,type,n){

  let genQuote = [];//here we store the quotes objects into an array
  for(let i = 0; i < n ; i++){
    if (type == 'wise'){

      let quoteArray = new wiseOwl(quoteArr);
      genQuote.push(quoteArray);

    } else if (type == 'crazy') {

      let quoteArray = new quote(w1, w2, w3, w4, w5, w6, w7);
      genQuote.push(quoteArray);

    }

  }

  genQuote.forEach(function(quote){
    return quote.generator(id);
  });
}

//The followin to change the Owl :P

$('.crazyMode').click(function(){
  $(this).addClass('active').siblings().removeClass('active');

  $('body').removeClass('wiseOwl-style');
  $('.crazyOwl').removeClass('d-none');
  $('.wiseOwl').addClass('d-none');
});
$('.wiseMode').click(function(){
  $(this).addClass('active').siblings().removeClass('active');

  $('body').addClass('wiseOwl-style');
  $('.wiseOwl').removeClass('d-none');
  $('.crazyOwl').addClass('d-none');
});

//This for append the value of the slider
var slider = document.getElementById("myRange");
var output = document.getElementById("valueSlider");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}


/* Call repeatQuotes function directly on jQuery selector/s adding some variables to pass on repeatQuotes function */

$('.firstBtn, .secondBtn').click(function(){

  let type = $(this).attr('data-type'); //this to set the type of quote: wise or crazy

  let idContainer = $(this).parent().siblings().attr('id');//It pass the container parameter for repeatQuotes() in this case the parent of buttons.
  //
  // let quotes = 4; // It will set how many quotes would be displayed in a random range
  // let num = Math.floor((Math.random() * quotes) + 1);// te random value for the number(numeric parameter on repeatQuotes function) of quotes on display

  let num = $('#myRange').val();


  $('#'+idContainer).children().remove();//This to remove the previous quotes created on click event.

  let generatedQuote = repeatQuotes(idContainer,type, num);

  return generatedQuote;
});


//The next lines to set an Interval to the Famous quotes


function wiseOnTimer(){
  let theCont = 'wiseOnTimer';
  let theType = 'wise';
  $('#'+theCont).children('.wiseQuote').remove();

  repeatQuotes(theCont, theType,1);
}

wiseOnTimer();
setInterval(wiseOnTimer,7000);
