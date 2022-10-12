<template>
  <div>
    <label>{{ label }}</label>

    <input v-bind="$attrs" placeholder="" :value="modalValue" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modalValue: {
      type: [String, Number],
    },
  },
};
</script>

<style>
input {
  height: 48px;
  width: 384px;
  left: 0px;
  top: 24px;
  border-radius: 4px;
  padding: 10px;
}

label {
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.4px;
  color: #6d7a98;
}
</style>
