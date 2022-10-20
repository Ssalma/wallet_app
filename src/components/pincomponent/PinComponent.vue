<template>
  <div class="pin-container">
    <input
      type="text"
      maxlength="1"
      v-model="inputs[0]"
      @input="focusNext"
      @keypress="checkIfNumber"
      @keyup.delete="focusPrevious"
      placeholder="_"
      onfocus="this.select()"
      v-bind="$attrs"
    />
    <input
      type="text"
      maxlength="1"
      v-model="inputs[1]"
      @input="focusNext"
      @keypress="checkIfNumber"
      @keyup.delete="focusPrevious"
      placeholder="_"
      onfocus="this.select()"
      v-bind="$attrs"
    />
    <input
      type="text"
      maxlength="1"
      v-model="inputs[2]"
      @input="focusNext"
      @keypress="checkIfNumber"
      @keyup.delete="focusPrevious"
      placeholder="_"
      onfocus="this.select()"
      v-bind="$attrs"
    />
    <input
      type="text"
      maxlength="1"
      v-model="inputs[3]"
      @input="focusNext"
      @keypress="checkIfNumber"
      @keyup.delete="focusPrevious"
      placeholder="_"
      onfocus="this.select()"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: "PinComponent",
  data() {
    return {
      inputs: ["", "", "", ""],
    };
  },
  props: ["inputValue"],
  methods: {
    focusNext(e) {
      if (e.target.value !== "" && e.target.value.length === 1) {
        if (e.target.nextSibling) {
          e.target.nextSibling.focus();
        } else {
          console.log("eurekaaaaa");
        }
      }
    },
    focusPrevious(e) {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    },
    checkIfNumber(e) {
      let key = e.key;
      if (!/^[0-9]/g.test(key)) {
        e.preventDefault();
      }
    },
  },
  watch: {
    inputs: {
      handler() {
        this.$emit("update:inputValue", this.inputs.join(""));
        console.log(this.inputs);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@mixin inputTypography() {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #0b2253;
}
.pin-container {
  max-width: 264px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 20px;
  input {
    @include inputTypography();
    background: #ffffff;
    border: 1px solid #dee3eb;
    border-radius: 4px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    letter-spacing: -0.05px;
    padding: 35%;
    border-radius: 4px;

    &::placeholder {
      @include inputTypography();
    }

    &:focus {
      border: 1px solid #1f6aec;
      border-radius: 4px;
    }
  }
}
</style>
