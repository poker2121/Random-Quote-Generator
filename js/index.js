//^ Quotes Generator
//?=================
var quoteAuthor = ["― Robert Frost", "― Mahatma Gandhi", "― Albert Einstein", "― Oscar Wilde", "― Mark Twain"];
var text = [
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“Be the change that you wish to see in the world.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“Be yourself; everyone else is already taken.”",
  "“If you tell the truth, you don't have to remember anything.”"
];

var remainingQuotes = text.slice();
var remainingAuthors = quoteAuthor.slice();

function randomQuote() {

  if (remainingQuotes.length === 0) {
    remainingQuotes = text.slice();
    remainingAuthors = quoteAuthor.slice();

  }

  var quoteIndex = Math.floor(Math.random() * remainingQuotes.length);

  document.getElementById("Quote").innerHTML = remainingQuotes[quoteIndex];
  document.getElementById("author").innerHTML = remainingAuthors[quoteIndex];

  remainingQuotes.splice(quoteIndex, 1);
  remainingAuthors.splice(quoteIndex, 1);

}
