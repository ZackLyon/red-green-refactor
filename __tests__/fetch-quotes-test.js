const fetchQuotes = require("../src/fetch-quotes");

describe("fetch a random futurama quote and return it as an object with name, text, image properties", () => {
  it("returns random futurama quote in an object with name, text, image properties", () => {
    const expectation = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    };

    const actual = fetchQuotes();

    expect(actual).toEqual(expectation);
  });
});
