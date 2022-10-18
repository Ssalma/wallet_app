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
  name: "AuthScreen",
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
  max-width: 1400px;
}
.sub-container {
  width: 100%;
  max-width: calc(100vw - 40px);
  margin: 0px auto;
  padding: 50px 0px 0px 0px;
}
.main {
  display: flex;
  justify-content: space-between;
}
.subtitle{
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  color: #B3BECF;
  max-width: 484px;
}
.left{
    margin-top: 155px;
}
.right{
  margin-top: 67px;
}
@media (max-width: 820px){
  .main{
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>