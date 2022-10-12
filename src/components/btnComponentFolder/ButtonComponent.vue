<template>
  <div>
    <button :class="[whiteBtn ? 'whiteBtn' : 'blueBtn', 'baseBtn']" v-bind="$attrs">
      <img :src="iconAdd" :alt="add" class="position-Icon">{{ buttonTxt }}
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
    vectorImage: {
      type: String,
      default: "",
    },
    vectorText: {
      type: String,
      default: "",
    },
    whiteBtn: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      iconAdd,
      add: "Addition icon"
    }
  }

};
</script>

<style scoped>
button {
  cursor: pointer;
}

.baseBtn {
  background: #1f6aec;
  border-radius: 8px;
  color: #ffffff;
  border: none;
}
.blueBtn {
  background: #1f6aec;
  border-radius: 8px;
  padding: 17px 0;
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #ffffff;
  border: none;
}

.position-Icon{
  position: relative;
  top: 1px;
  margin-right: 8px;
}

.whiteBtn {
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
</style>
