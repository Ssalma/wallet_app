<template>
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
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import PinComponent from "@/components/pincomponent/PinComponent.vue";
import axios from "axios";
export default {
  components: {
    AuthScreen,
    PinComponent,
  },
  data() {
    return {
      Pin: null,
    };
  },
  methods: {
    async verifyOtp() {
      const newpin = this.Pin.toString();
      const newmail = localStorage.getItem("signEmail");
      await axios
        .post("http://192.168.100.69:3249/api/v1/user/otp/verify", {
          email: newmail,
          OTP: newpin,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/auth/login");
        })
        .catch((error) => {
          console.log(error.message);
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

@media (max-width: 375px) {
  .container-div {
    min-width: 300px;
    margin: 50px auto;
    width: 0px;
    margin: none;
    padding: 5px;
  }

  .container-text1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align:start;
    letter-spacing: 0.2px;
  }
}

@media (max-width: 414px) {
  .container-div {
    min-width: 350px;
    margin: 50px auto;
    width: 0px;
    margin: none;
    padding: 5px;
  }

  .container-text1 {
    font-size: 23px;
    text-align:start;
  }
}

@media (min-width: 360px) {
  .container-div {
    margin: 50px auto;
    width: 0px;
    margin: none;
    padding: 5px;
    min-width: 300px;
  }

  .container-text1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align:start;
    letter-spacing: 0.2px;
  }
}

@media (min-width: 1280px) {
  .container-div {
    width: 528px;
    padding: 32px 50px;
  }

  .container-text1 {
    font-size: 24px;
  }
}
</style>
