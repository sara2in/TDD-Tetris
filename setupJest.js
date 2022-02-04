import { normalize } from "./__tests__/normalize.mjs";
import { printExpected, printReceived, matcherHint } from "jest-matcher-utils";

expect.extend({
  toEqualShape(actual, expected) {
    const failMessage = (received, expected, not) => () =>
      `${matcherHint(
        `${not ? ".not" : ""}.toEqualShape`,
        "received",
        "expected"
      )}
        
Expected board shape${not ? " not " : " "}to equal:
Expected: 
${printExpected(expected)}
Received: 
${printReceived(received)}`;
    // new Assertion(actual).to.be.a("string"); //

    if (typeof actual !== "string") {
      throw new Error(`expected actual to be a string`);
    }

    expected = normalize(expected);

    // this.assert(
    //   actual === expected,
    //   "expected #{this} to equal #{exp} but got #{act}",
    //   "expected #{this} to not equal #{act}",
    //   expected,
    //   actual
    // );
    const pass = expected === actual;

    return { pass, message: failMessage(actual, expected, pass) };
  },
});
