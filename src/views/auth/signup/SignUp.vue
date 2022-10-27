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
  <auth-screen title="Create Your Account" subtitle="Let’s get you started">
    <template #content>
      <div class="main-div">
        <form>
          <div class="names">
            <InputField type="text" label="First Name" v-model="First" />
            <InputField type="text" label="Last Name" v-model="Last" />
          </div>
          <InputField type="email" label="email" v-model="email" />
          <InputField type="number" label="Phone Number" v-model="number" />
          <InputField type="password" label="Password" v-model="password" />
          <button-component
            type="button"
            @click="signUp()"
            button-txt="Create Account"
            variant="blue"
          />
          <h2>
            Already have an account?
            <span> <router-link to="/auth/login">Sign In</router-link></span>
          </h2>
        </form>
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

<script scoped>
import AuthScreen from "@/layout/AuthScreens.vue";
import axios from "axios";
import InputField from "@/components/Inputcomponent/InputField.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import { mapState } from "vuex";
export default {
  components: {
    AuthScreen,
    InputField,
    ButtonComponent,
  },
  data() {
    return {
      First: "",
      Last: "",
      email: "",
      number: "",
      password: "",
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
  // updated() {
  //   console.log(this.newemail);
  // },
  methods: {
    async signUp() {
      this.$store.commit("SET_LOADING", true);
      await axios
        .post("http://192.168.100.97:3249/api/v1/user/signup", {
          firstName: this.First,
          lastName: this.Last,
          email: this.email,
          phoneNumber: this.number,
          userPassword: this.password,
        })
        .then((response) => {
          localStorage.setItem("signEmail", this.email);
          localStorage.setItem("signPassword", this.password);
          this.$store.commit("SET_LOADING", false);
          this.responseMessage = response.data.message;
          this.isSuccessful = true;
          setTimeout(() => {
            this.isSuccessful = false;

            this.$router.push("/auth/otpverification");
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          this.$store.commit("SET_LOADING", false);
          this.responseMessage = err.response.data.message;
          this.$store.commit("SET_LOADING", false);
          this.isFailed = true;
          setTimeout(() => {
            this.isFailed = false;
          }, 1500);
        });
      (this.First = ""),
        (this.Last = ""),
        (this.email = ""),
        (this.number = ""),
        (this.password = "");
    },
  },
};
</script>

<style>
.main-div {
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 8px;
  padding: 32px 40px;
  width: 528px;
  max-width: 528px;
}
.names {
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  /* justify-content: space-between; */
}
form {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
h2 {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #6d7a98;
}
.btn--blue {
}
a {
  text-decoration: none;
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
</style>
