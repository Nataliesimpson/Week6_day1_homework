// Create an array of the existing quotes, each quote having text and author

// Add the quotes to the page dynamically with JavaScript

// Extend our quote application so that a user can add quotes. (Don't worry about these saving between refreshing page, we'll do this tomorrow)

window.onload = main;

var quotes = [{author: "Nat", text: "can't believe it's Monday"}, {author: "Frank", text: "let's go to the beach"}]

function main() {
  for(quote in quotes) {
  var li = document.createElement( 'li' );
  li.innerText = quotes[quote].text + " - " + quotes[quote].author;

  var ul = document.getElementById('quote-list');
  ul.appendChild( li );

  var form = document.getElementById('quote-form');
  form.onsubmit = function( event ) {
  event.preventDefault();
  handleClick();
  }
  }
}

function handleClick( event ) {
  var quoteInput = document.getElementById('quote-text-input');
  var authorInput = document.getElementById('author-text-input');
  var userInput = quoteInput.value + ' - ' + authorInput.value;
  appendQuote(userInput)
}

function appendQuote(quote) {
  var quotesList = document.getElementById('quote-list');
  var li = document.createElement( 'li' );
  li.innerText = quote;
  quotesList.appendChild( li )
}


  // var btn = document.getElementById('add-button');
  // btn.onclick = handleClick;






