function l({ React: e }) {
  return e.createElement(
    "div",
    null,
    "Hello from robOS plugin"
  );
}
const n = {
  manifest: {
    id: "hello-world",
    name: "Hello World",
    version: "1.0.0"
  },
  create({ React: e }) {
    return l({ React: e });
  }
};
export {
  n as default
};
