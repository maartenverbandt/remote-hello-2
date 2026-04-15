function l({ React: e }) {
  return function() {
    return e.createElement(
      "div",
      null,
      "Hello from robOS plugin"
    );
  };
}
const o = {
  manifest: {
    id: "hello-world",
    name: "Hello World",
    version: "1.0.0"
  },
  create: l
};
export {
  o as default
};
