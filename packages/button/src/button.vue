<template>
  <button
    class="fu-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
      type ? 'fu-button--' + type : '',
      size ? 'fu-button--' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled,
        'is-circle': circle
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "FuButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: Boolean,
    round: Boolean,
    disabled: Boolean,
    circle: Boolean,
    size: String,
    nativeType: {
      type: String,
      default: "button"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
