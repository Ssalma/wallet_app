<template>
  <div class="main-wrapper">
    <label :class="['label__text']">{{ label }}</label>
    <div class="input-wrapper">
      <input
        v-bind="$attrs"
        placeholder=""
        :type="type === 'password' ? innerType : type"
        :value="modelValue"
        :class="['input__item']"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <div
        v-if="type === 'password'"
        :class="[`btn--${variantClass}`]"
        v-bind="$attrs"
        @click="toggleInputIcon"
      >
        <div v-if="visibility" class="eye-open">
          <img src="@/assets/eye-open.svg" alt="" srcset="" />
        </div>
        <div v-else class="eye-close">
          <img src="@/assets/eye-closed.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String,
      required: true,
    },
    variantClass: {
      type: String,
      default: "eye-toggle",
    },
  },
  data() {
    return {
      visibility: false,
      innerType: "",
    };
  },
  created() {
    this.innerType = this.type;
  },
  methods: {
    toggleInputIcon() {
      this.visibility = !this.visibility;
      if (this.visibility == true) {
        this.innerType = "text";
      } else {
        this.innerType = "password";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    width: 100%;
    max-width: 465px;
    .btn {
      &--eye-toggle {
        position: absolute;
        right: 0;
        top: 14px;
        cursor: pointer;
        padding-right: 10px;
      }
      &--hide {
        display: none;
      }
    }
  }

  .input__item {
    height: 48px;

    border-radius: 4px;
    padding: 10px;
    border: 1px solid #dee3eb;
  }
  .label__text {
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #6d7a98;
    text-align: left;
  }
}
</style>
