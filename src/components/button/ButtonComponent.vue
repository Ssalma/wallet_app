<template>
  <div>
    <button :class="[ `btn--${variant}` ]" v-bind="$attrs">
      <img :src="iconAdd" :alt="add" class="position-Icon" v-if="icon">{{ buttonTxt }}
    </button>
  </div>
</template>

<script>

import iconAdd from "../../assets/Vector.svg"
export default {
  props: {
    buttonTxt: {
      type: String,
      default: "label",
    },
    variant: {
      type: String,
      default: "base"
    },
    icon:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      iconAdd,
      add: "Addition icon"
    }
  }

};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
}

.btn {
  &--white {
    border: 1px solid #1f6aec;
    background: #fff;
    border-radius: 8px;
    padding: 17px 0;
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.2px;
    color: #1f6aec;
  }
  &--base{
    background: #1f6aec;
    border-radius: 8px;
    color: #ffffff;
    border: none;
  }
  &--blue{
    background: #1f6aec;
    border-radius: 8px;
    padding: 12px 0;
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #ffffff;
    border: none;
  }
}

.position-Icon{
  position: relative;
  top: 1px;
  margin-right: 8px;
}
</style>
