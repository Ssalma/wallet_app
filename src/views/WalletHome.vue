<template>
  <main>
    <img src="../assets/logo-lg.svg" alt="main logo" />
    <p @click="loadNext">Wallet</p>
    <div class="lds-dual-ring"></div>
  </main>
</template>

<script>
export default {
  created() {
    this.loadNextPage();
  },
  methods: {
    loadNextPage() {
      setTimeout(() => {
        this.$router.push("/auth/signup");
      }, 5000);
    },
    loadNext() {
      this.$router.push("/auth/signup");
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background: #1f6aec;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 153px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-top: 22px;
    cursor: pointer;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
