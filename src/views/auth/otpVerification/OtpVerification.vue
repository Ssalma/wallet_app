<template>
  <div
    class="response-message"
    v-if="isSuccessful || isFailed"
    :class="{ error: isFailed, success: isSuccessful }"
  >
    <p>{{ responseMessage }}</p>
    <i class="uil uil-exclamation-triangle" v-if="isFailed"></i>
    <i class="uil uil-check-circle" v-if="isSuccessful"></i>
  </div>
  <auth-screen
    title="OTP Verification"
    subtitle="A code has been sent to your email"
  >
    <template #content>
      <div class="container-div">
        <h5 class="container-text1">Kindly enter your OTP to</h5>
        <h5 class="container-text1">verify account</h5>
        <PinComponent
          :inputValue="Pin"
          @update:inputValue="(newvalue) => (Pin = newvalue)"
          @keyup.enter="verifyOtp"
        />
        <p>{{ Pin }}</p>

        <h5 class="container-text2">
          Didn't get the code?
          <router-link to="/">Resend</router-link>
        </h5>
        <h5 class="container-text2">00:59</h5>
      </div>
      <div class="lds-spinner" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import PinComponent from "@/components/pincomponent/PinComponent.vue";
import axios from "axios";
import { mapState } from "vuex";
export default {
  components: {
    AuthScreen,
    PinComponent,
  },
  data() {
    return {
      Pin: null,
      isSuccessful: false,
      isFailed: false,
      responseMessage: "",
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
  },
  methods: {
    async verifyOtp() {
      this.$store.commit("SET_LOADING", true);
      const newpin = this.Pin.toString();
      const newmail = localStorage.getItem("signEmail");
      await axios
        .post("http://192.168.100.97:3249/api/v1/user/otp/verify", {
          email: newmail,
          OTP: newpin,
        })
        .then((response) => {
          this.$store.commit("SET_LOADING", false);
          this.responseMessage = response.data.message;
          this.isSuccessful = true;
          setTimeout(() => {
            this.isSuccessful = false;

            this.$router.push("/auth/login");
          }, 1500);
        })
        .catch((error) => {
          this.$store.commit("SET_LOADING", false);
          this.responseMessage = error.response.data.message;
          this.$store.commit("SET_LOADING", false);
          this.isFailed = true;
          setTimeout(() => {
            this.isFailed = false;
          }, 1500);
        });
    },
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
  align-items: center;
  flex-direction: column;
  padding: 32px 50px;
  max-width: 528px;
}

.success,
.error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: green;
  background: rgb(171, 228, 171);
  border: none;
  /* border-radius: 10px; */
  margin-bottom: 20px;
  text-align: center;
}
.error {
  color: black;
  background: rgb(235, 146, 146);
}

.response-message {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #1f6aec;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
/* .abeeku {
  max-width: 100%;
}

.abeeku input {
  padding: 30%;
} */
</style>
