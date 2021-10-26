const getName = require("../src/get-name");

describe("get name property from object", () => {
  it("returns the name `Walter White` when given an object with a spot name property", () => {
    const walterWhite = {
      name: "Walter White",
      age: "52",
      occupation: "chemistry teacher/meth kingpin",
    };

    const expectation = "Walter White";

    const actual = getName(walterWhite);

    console.log(getName(walterWhite));

    expect(actual).toEqual(expectation);
  });
});
