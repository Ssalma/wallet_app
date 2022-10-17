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
              <h1 class="title">{{title}}</h1>
              <p class="subtitle">{{subtitle}}</p>
          </div>
        </div>
          <div class="right" >
            <slot name="content"></slot>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/Union.svg";
export default {
  name: "authDashboard",
    props: {
        title: {
            type: String,
            default: "Create An Account"
        },
        subtitle:{
            type: String,
            default: "Let's get started"
        }

    },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.container {
  background: #f4f7fc;
  height: 100vh;
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

.subtitle{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #6d7a98;
  flex: none;
  order: 5;
  flex-grow: 0;
}

.left{
    margin-top: 155px;
}
</style>
