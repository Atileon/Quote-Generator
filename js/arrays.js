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

const verb = ['clean', 'cut', 'drives', 'eat', 'fly','go', 'live', 'makes', 'plays', 'run', 'show', 'throw', 'trip', 'walk', 'wash', 'write', 'swim', 'awake', 'bears', 'beats', 'bites', 'blows', 'break', 'breed', 'bring', 'build', 'burn', 'buy', 'catch', 'choose', 'come', 'hide', 'hit', 'hold', 'hurt', 'lay', 'leave', 'prove', 'put', 'saw', 'see', 'send', 'shake', 'shoot', 'smells', 'takes'];

const nounCommon = ['man', 'mountain', 'state', 'ocean', 'country', 'building', 'cat', 'dog', 'people', 'world', 'life', 'system', 'program', 'number', 'water', 'room', 'money', 'power', 'game', 'car', 'president', 'idea', 'parent', 'health', 'morning', 'moment', 'force'];

const advToWhat = ['extremely', 'not', 'quite', 'rather', 'really', 'terribly', 'too', 'very','extremely', 'not', 'quite', 'rather', 'really', 'terribly', 'too', 'very'];

const advHow = ['beautifully', 'briskly', 'brutally', 'carefully', 'cheerfully', 'competitively', 'extravagantly', 'gracefully', 'grimly', 'happily', 'hungrily', 'lazily', 'loyally', 'quickly', 'quietly', 'savagely', 'stylishly', 'urgently', 'wishfully', 'worriedly'];
