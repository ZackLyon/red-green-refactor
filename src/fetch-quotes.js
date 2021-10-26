const fetch = require("cross-fetch");

async function fetchQuotes() {
  const res = await fetch("https://futuramaapi.herokuapp.com/api/quotes/1");

  const body = await res.json();

  const quoteObj = {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image,
  };

  return quoteObj;
}

module.exports = fetchQuotes;
