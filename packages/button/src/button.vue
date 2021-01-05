<template>
  <button
    class="fu-button"
    :class="[
      type ? 'fu-button--' + type : '',
      size ? 'fu-button--' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled,
        'is-circle': circle,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FuButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
    },
    round: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
    },
    size: {
      type: String
    }
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped scoped>
.fu-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.fu-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.fu-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.fu-button + .fu-button {
  margin-left: 10px;
}
.fu-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.fu-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.fu-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.fu-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.fu-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.fu-button--text {
  border-color: transparent;
  color: #3071ea;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
}
.fu-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.fu-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
.fu-button--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}
</style>
