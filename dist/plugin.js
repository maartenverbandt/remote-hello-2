function n({ React: e }) {
  return function() {
    return e.createElement(
      "div",
      null,
      "Hello from App.ts"
    );
  };
}
const o = {
  manifest: {
    id: "hello-world",
    name: "Hello World",
    version: "1.0.0"
  },
  create({ React: e }) {
    return n({ React: e });
  }
};
export {
  o as default
};
