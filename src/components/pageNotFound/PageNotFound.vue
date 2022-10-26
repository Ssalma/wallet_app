<template>
  <div class="container">
    <h1>Oh no! Page not found</h1>
    <img :src="image404" alt="" />
    <h1>return <router-link to="/">Home</router-link></h1> 
  </div>
</template>

<script>
import image404 from "@/assets/404.png";
export default {
  data() {
    return {
      image404,
    };
  },
};
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    h1{
        font-size: 40px;
        text-align: center;
    }
}
</style>
