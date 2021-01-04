import FuButton from "./src/button";

/* istanbul ignore next */
FuButton.install = function(Vue) {
  Vue.component(FuButton.name, FuButton);
};

export default FuButton;
