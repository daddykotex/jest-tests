import * as vscode from "vscode";

test(
  "Sample test",
  () => {
    const popup = asPromise(vscode.window.showInformationMessage("hello"));
    const timeOut = new Promise((resolve) => {
      setTimeout(resolve, 5 * 1000);
    });

    return Promise.race([popup, timeOut]).then(() => expect(1).toBe(1));
  },
  // this promise takes a while to resolve. documentation of
  // showInformationMessage says that it resolves when an item is selected...
  10 * 1000
);

function asPromise<A>(t: Thenable<A>): Promise<A> {
  return new Promise((res, rej) => {
    return t.then(res, rej);
  });
}
