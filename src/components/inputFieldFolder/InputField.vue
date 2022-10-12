<template>
  <div class="container">
    <label v-if="labelText">{{ labelText }}</label>
    <fieldset>
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      />
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: [String, Boolean],
      default: false
    },
    modelValue: {
        type: String,
        default: ""
    }
  },
  data() {
    return {
      text: "text",
    };
  },
};
</script>

<style scoped>
fieldset {
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 4px;
}

fieldset:hover {
  border: 2px solid #1f6aec;
}

input {
  width: 100%;
  border: none;
  padding: 16px;
}

input:focus {
  border: none;
}

label {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6d7a98;
  text-align: left;
}

</style>
