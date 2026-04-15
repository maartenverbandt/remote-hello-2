import { jsx as e } from "react/jsx-runtime";
function r() {
  return /* @__PURE__ */ e("div", { children: "Hello from robOS plugin" });
}
const n = {
  manifest: {
    id: "hello-world",
    name: "Hello World",
    version: "1.0.0"
  },
  create({ React: o }) {
    return r;
  }
};
export {
  n as default
};
