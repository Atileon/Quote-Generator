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

const adjSuperlative =['coldest', 'driest', 'funniest', 'hottest', 'prettiest', 'sharpest'];

const nounAbstract = ['love', 'wealth', 'happiness', 'pride', 'fear', 'religion', 'belief', 'history', 'communication'];

const verb = ['clean', 'cut', 'drive', 'eat', 'fly','go', 'live', 'make', 'play', 'read', 'run', 'show', 'smile', 'throw', 'trip', 'walk', 'wash', 'write', 'swim'];

const nounCommon = ['man', 'mountain', 'state', 'ocean', 'country', 'building', 'cat', 'dog'];

const advToWhat = ['extremely', 'not', 'quite', 'rather', 'really', 'terribly', 'too', 'very','extremely', 'not', 'quite', 'rather', 'really', 'terribly', 'too', 'very'];

const advHow = ['beautifully', 'briskly', 'brutally', 'carefully', 'cheerfully', 'competitively', 'extravagantly', 'gracefully', 'grimly', 'happily', 'hungrily', 'lazily', 'loyally', 'quickly', 'quietly', 'savagely', 'stylishly', 'urgently', 'wishfully', 'worriedly'];
