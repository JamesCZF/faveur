<template>
  <div>
    <!-- <div>
    <fu-button>默认按钮</fu-button>
    <fu-button type="primary">主要按钮</fu-button>
    <fu-button type="success">成功按钮</fu-button>
  </div> -->
    <div>
      <fu-button type="text" plain round circle>默认按钮</fu-button>
      <fu-button type="primary" plain round disabled>主要按钮</fu-button>
      <fu-button type="success" plain round>成功按钮</fu-button>
    </div>
  </div>
</template>
<script>
import FuButton from "../packages/button";

export default {
  components: {
    FuButton
  }
};
</script>

<style lang="scss" scoped></style>
