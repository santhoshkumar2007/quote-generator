const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "If life were predictable it would cease to be life.", author: "Eleanor Roosevelt" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Do what you feel in your heart to be right.", author: "Eleanor Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { text: "Well done is better than well said.", author: "Benjamin Franklin" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" }
];

let lastIndex = -1;

function generateRandomQuote() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  const randomQuote = quotes[randomIndex];

  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = "- " + randomQuote.author;
}

newQuoteBtn.addEventListener("click", generateRandomQuote);

// Show quote on page load
generateRandomQuote();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
