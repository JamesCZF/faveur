import FuInput from "./src/input";

/* istanbul ignore next */
FuInput.install = function(Vue) {
  Vue.component(FuInput.name, FuInput);
};

export default FuInput;