<template>
  <auth-screen
    title="OTP Verification"
    subtitle="A code has been sent to your email"
  >
    <template #content>
      <div class="container-div">
        <h5 class="container-text1">Kindly enter your OTP to</h5>
        <h5 class="container-text1">verify account</h5>
        <PinComponent/>

        <h5 class="container-text2">
          Didn't get the code?
          <router-link to="/">Resend</router-link>
        </h5>
        <h5 class="container-text2">00:59</h5>
      </div>
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import PinComponent from "@/components/pincomponent/PinComponent.vue";

export default {
  components: {
    AuthScreen,
    PinComponent,
  },
  
};
</script>

<style scoped>
.container-text1 {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0b2253;
}
.container-text2 {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #0b2253;
}
.container-div {
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 8px;
  width: 528px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 32px 50px;
  max-width: 528px;
}

</style>
