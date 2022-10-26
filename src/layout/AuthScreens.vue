<template>
  <div class="container">
    <div class="sub-container">
      <figure>
        <slot name="image">
          <img :src="logo" alt="logo" />
        </slot>
      </figure>
      <div class="main">
        <div class="left">
          <div>
            <h1 class="title">{{ title }}</h1>
            <p class="subtitle">{{ subtitle }}</p>
          </div>
        </div>
        <div class="right">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/Union.svg";
export default {
  name: "AuthScreen",
  props: {
    title: {
      type: String,
      default: "Create An Account",
    },
    subtitle: {
      type: String,
      default: "Let's get started",
    },
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #f4f7fc;
  height: 100vh;
  max-width: 1440px;
}
.sub-container {
  width: 100%;
  max-width: calc(100vw - 284px);
  margin: 0px auto;
  padding: 50px 0px 0px 0px;
}
.main {
  display: flex;
  justify-content: space-between;
}
.subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  color: #b3becf;
  max-width: 484px;
}
.left {
  margin-top: 155px;
}
.right {
  margin-top: 67px;
}

@media (max-width: 1190px) {
  .sub-container {
    width: 100%;
    max-width: calc(100vw - 104px);
  }
}

@media (max-width: 983px) {
  .container {
    height: auto;
  }
  .main {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .left {
    margin-top: 90px;
  }
  .right {
    margin-top: auto;
  }

  .sub-container {
    width: 100%;
    max-width: calc(100vw - 100px);
    margin: 0px auto;
    padding: 50px 0px 0px 0px;
  }

  .subtitle {
    font-size: 20px;
    text-align: center;
  }

  .title {
    font-size: 25px;
    text-align: center;
  }
}

@media (max-width: 475px) {
  .sub-container {
    max-width: calc(100vw - 40px);
  }
}

@media (max-width: 375px) {

  .title {
    font-size: 20px;
  }
  .subtitle {
    font-size: 18px;
  }
  .sub-container {
    padding: 10px 0px 0px 0px;
  }

  .left {
    margin-top: 40px;
  }
  .right {
    margin-top: auto;
  }
}

@media (max-width: 983px) {
  .container {
    height: 100vh;
  }
}
</style>
