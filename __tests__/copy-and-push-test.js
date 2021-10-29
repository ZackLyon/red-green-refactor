const copyAndPush = require("../src/copy-and-push");

describe("returns an array with a given item added on the end", () => {
  it("returns the array['here', 'are', 'some', 'things']", () => {
    const testArray = ["here", "are", "some"];

    const expectation = ["here", "are", "some", "things"];

    const actual = copyAndPush(testArray, "things");

    expect(actual).toEqual(expectation);
  });

  it("verify that original array didn't mutate", () => {
    const actual = ["here", "are", "some"];

    const expectation = ["here", "are", "some"];

    copyAndPush(actual, "things");

    expect(actual).toEqual(expectation);
  });
});
