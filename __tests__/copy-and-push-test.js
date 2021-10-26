const copyAndPush = require("../src/copy-and-push");

describe("returns an array with a given item added on the end", () => {
  it("returns the array['here', 'are', 'some', 'things']", () => {
    const testArray = ["here", "are", "some"];

    const expectation = ["here", "are", "some", "things"];

    const actual = copyAndPush(testArray);

    expect(actual).toEqual(expectation);
  });
});
