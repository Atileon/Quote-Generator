// The Aim on this project is to create a quote generator

/*
The arrays are structured as the English Grammar are structured, piece by piece. This arrays would be enhanced adding some other pieces of the English grammmar but for this project these would be ok :P

The project recall on this order the Js files
  -The Arrays (this file arrays.js)
  -The Quote Object (quoteObject.js)
  -The generator and xtra code (quotegen.js)

*/

// ARRAYS WITH QUOTE COMPONENTS

const adjArticle = ['a', 'the'];

const adjSuperlative =['coldest', 'driest', 'funniest', 'hottest', 'prettiest', 'sharpest','cheapest', 'closest', 'cutest', 'darkest', 'dustiest', 'fastest', 'finest', 'best', 'greatest', 'hardest', 'longest', 'nearest', 'newest', 'nicest', 'poorest', 'richest', 'saddest', 'safest', 'shiniest', 'shortest', 'smoothest', 'softest', 'strongest', 'ugliest', 'worthiest', 'youngest'];

const nounAbstract = ['love', 'wealth', 'happiness', 'pride', 'fear', 'religion', 'belief', 'history', 'communication','intelligence', 'trust', 'vacation', 'dream', 'loyal', 'pain', 'hunger', 'hate', 'beauty'];

const verb = ['clean', 'cuts', 'drives', 'eats', 'flies','goes', 'lives', 'makes', 'plays', 'runs', 'shows', 'throws', 'trips', 'walks', 'washes', 'writes', 'swims', 'awakes', 'bears', 'beats', 'bites', 'blows', 'breaks', 'breeds', 'brings', 'builds', 'burns', 'buys', 'catches', 'choose', 'comes', 'hides', 'hits', 'holds', 'hurts', 'lays', 'leaves', 'prove', 'put', 'sees', 'sends', 'shakes', 'shoots', 'smells', 'takes'];

const nounCommon = ['man', 'mountain', 'state', 'ocean', 'country', 'building', 'cat', 'dog', 'people', 'world', 'life', 'system', 'program', 'number', 'water', 'room', 'money', 'power', 'game', 'car', 'president', 'idea', 'parent', 'health', 'morning', 'moment', 'force'];

const advToWhat = ['extremely', 'not', 'quite', 'rather', 'really', 'terribly', 'too', 'very','extremely', 'not', 'quite', 'rather', 'really', 'terribly', 'too', 'very'];

const advHow = ['beautifully', 'briskly', 'brutally', 'carefully', 'cheerfully', 'competitively', 'extravagantly', 'gracefully', 'grimly', 'happily', 'hungrily', 'lazily', 'loyally', 'quickly', 'quietly', 'savagely', 'stylishly', 'urgently', 'wishfully', 'worriedly'];

//========================================

//The Followin Arrays to store the famous repeatQuotes
const quotes = [
  {
    author: 'Kevin Kruse',
    quote: 'Life is about making an impact, not making an income.'
  },
  {
    author : 'Napoleon Hill',
    quote : 'Whatever the mind of man can conceive and believe, it can achieve.'
  },
  {
    author: 'Albert Einstein',
    quote: 'Strive not to be a success, but rather to be of value.'
  },
  {
    author: 'Florence Nightingale',
    quote: 'I attribute my success to this: I never gave or took any excuse.'
  },
  {
    author: 'Wayne Gretzky',
    quote: 'You miss 100% of the shots you don’t take.'
  },
  {
    author: 'Amelia Earhart',
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.'
  },
  {
    author: 'Babe Ruth',
    quote: 'Every strike brings me closer to the next home run.'
  },
  {
    author: 'W. Clement Stone',
    quote: 'Definiteness of purpose is the starting point of all achievement.'
  },
  {
    author: 'Kevin Kruse',
    quote: 'Life isn\'t about getting and having, it\'s about giving and being.'
  },
  {
    author: 'John Lennon',
    quote: 'Life is what happens to you while you’re busy making other plans.'
  },
//
  {
    author: 'Earl Nightingale',
    quote: 'We become what we think about.'
  },{
    author: 'Charles Swindoll',
    quote: 'Life is 10% what happens to me and 90% of how I react to it.'
  },{
    author: 'Buddha',
    quote: 'The mind is everything. What you think you become.'
  },{
    author: 'Chinese Proverb',
    quote: 'The best time to plant a tree was 20 years ago. The second best time is now.'
  },{
    author: 'Socrates',
    quote: 'An unexamined life is not worth living.'
  },{
    author: 'Woody Allen',
    quote: 'Eighty percent of success is showing up.'
  },{
    author: 'Steve Jobs',
    quote: 'Your time is limited, so don’t waste it living someone else’s life.'
  },{
    author: 'Stephen Covey',
    quote: 'I am not a product of my circumstances. I am a product of my decisions.'
  },{
    author: 'Jim Rohn',
    quote: 'Either you run the day, or the day runs you.'
  },{
    author: 'Henry Ford',
    quote: 'Whether you think you can or you think you can’t, you’re right.'
  },
];
