<template>
  <div>
    <!-- <div>
    <fu-button>默认按钮</fu-button>
    <fu-button type="primary">主要按钮</fu-button>
    <fu-button type="success">成功按钮</fu-button>
  </div> -->
    <div>
      <fu-button type="text" plain round circle>默认按钮99</fu-button>
      <fu-button type="primary" plain round disabled>主要按钮</fu-button>
      <fu-button type="success" plain round>成功按钮</fu-button>
    </div>
    <div>
      <div>{{value1}}</div>
      <fu-input v-model="value1" placeholder="请输入内容"/>
    </div>
  </div>
</template>
<script>
import FuButton from "../packages/button";
import FuInput from "../packages/input";

export default {
  components: {
    FuButton,
    FuInput
  },
  data() {
    return {
      value1: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../packages/theme-chalk/src/index.scss";
</style>
