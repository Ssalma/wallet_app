<template>
  <div>
    <div class="background" @click="closeModal()"></div>
    <main class="modal">
      <div class="main">
        <div>
          <h3 class="title">{{ title }}</h3>
        </div>
        <figure>
          <img :src="closeIcon" alt="" @click="closeModal" />
        </figure>
      </div>
      <div class="main-content">
        <slot name="content"></slot>
      </div>
    </main>
  </div>
</template>

<script>
import closeIcon from "@/assets/Closebtn.svg";
export default {
  props: {
    title: {
      type: String,
      default: "Transfer",
    },
    paragraph: {
      type: String,
      default: "Select Wallet Type To Transfer From",
    },
  },
  data() {
    return {
      closeIcon,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  opacity: 0.3;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background: #0d0f11;
  backdrop-filter: blur(50px);
  position: absolute;
  top: 0;
  left: 0;
}
.modal {
  position: fixed;
  right: 0;
  top: 0;
  background: #ffffff;
  height: 100vh;
  width: 34vw;
  z-index: 3;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #0b2253;
  }

  .main {
    display: flex;
    justify-content: space-between;
    max-width: calc(100% - 64px);
    margin: 24px auto;
  }
  .para {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.002em;
    color: #0b2253;
  }

  .main-content {
    max-width: calc(100% - 64px);
    margin: 0 auto;
  }
}



</style>
