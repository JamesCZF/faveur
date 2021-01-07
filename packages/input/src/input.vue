<template>
  <input @input="handleInput" class="fu-input__inner" v-bind="$attrs"/>
</template>

<script>
export default {
  name: "FuInput",
  props: {
    value: [String, Number],
  },
  data() {
    return {};
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    }
  }
};
</script>
