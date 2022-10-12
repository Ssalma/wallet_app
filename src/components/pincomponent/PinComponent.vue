<template>
  <div class="pin-container">
    <input
      type="text"
      maxlength="1"
      :value="inputValue1"
      @input="
        focusNext($event);
        $emit('update:inputValue1', $event.target.value);
      "
      @keypress="checkIfNumber"
      @keyup.delete="focusPrevious"
      placeholder="_"
      onfocus="this.select()"
      v-bind="$attrs"
    />
    <input
      type="text"
      maxlength="1"
      :value="inputValue2"
      @input="
        focusNext($event);
        $emit('update:inputValue2', $event.target.value);
      "
      @keypress="checkIfNumber"
      @keyup.delete="focusPrevious"
      placeholder="_"
      onfocus="this.select()"
      v-bind="$attrs"
    />
    <input
      type="text"
      maxlength="1"
      :value="inputValue3"
      @input="
        focusNext($event);
        $emit('update:inputValue3', $event.target.value);
      "
      @keypress="checkIfNumber"
      @keyup.delete="focusPrevious"
      placeholder="_"
      onfocus="this.select()"
      v-bind="$attrs"
    />
    <input
      type="text"
      maxlength="1"
      :value="inputValue4"
      @input="
        focusNext($event);
        $emit('update:inputValue4', $event.target.value);
      "
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
  props: {
    inputValue1: {
      type: Number,
    },
    inputValue2: {
      type: Number,
    },
    inputValue3: {
      type: Number,
    },
    inputValue4: {
      type: Number,
    },
  },
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
