// see https://github.com/microsoft/vscode-test/issues/37#issuecomment-700167820
const NodeEnvironment = require("jest-environment-node");
const vscode = require("vscode");

class VsCodeEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    this.global.vscode = vscode;
  }

  async teardown() {
    this.global.vscode = {};
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = VsCodeEnvironment;
