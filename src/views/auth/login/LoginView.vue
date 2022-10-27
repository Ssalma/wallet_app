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
  <auth-screen title="Log In" subtitle="Great to have you back">
    <template #content>
      <form>
        <input-field v-model="email" label="Email Address" type="email" />
        <input-field v-model="password" label="Password" type="password" />
        <div>
          <!-- router-link goes below the button without the div -->
          <router-link to="/auth/forgetpassword">Forget Password?</router-link>
        </div>
        <login-btn
          type="button"
          @click="logIn()"
          buttonTxt="Log In"
          class="btn--blue"
        ></login-btn>
        <p class="para">
          Don't have an account?
          <router-link to="/auth/signup">Register now</router-link>
        </p>
      </form>
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
import LoginBtn from "@/components/button/ButtonComponent.vue";
import AuthScreen from "@/layout/AuthScreens.vue";
import InputField from "@/components/Inputcomponent/InputField.vue";
import axios from "axios";
import { mapState } from "vuex";
export default {
  components: {
    AuthScreen,
    InputField,
    LoginBtn,
  },
  data() {
    return {
      email: "",
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
  methods: {
    async logIn() {
      this.$store.commit("SET_LOADING", true);
      await axios
        .post("http://192.168.100.97:3249/api/v1/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("userID", response.data.data.id);
          this.$store.commit("SET_ID", response.data.data.id);
          this.$store.commit("SET_LOADING", false);
          let token = response.data.data.token;
          localStorage.setItem("token", token);
          this.responseMessage = response.data.message;
          this.isSuccessful = true;
          setTimeout(() => {
            this.isSuccessful = false;
            if (!response.data.data.pin) {
              this.$router.push("/auth/otpcreatepin");
            } else {
              this.$router.push("/dashboard");
            }
          }, 1500);
        })
        .catch((err) => {
          this.responseMessage = err.response.data.message;
          this.$store.commit("SET_LOADING", false);
          this.isFailed = true;
          setTimeout(() => {
            this.isFailed = false;
          }, 1500);
        });
      (this.email = ""), (this.password = "");
    },
  },
};
</script>

<style scoped>
form {
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 8px;
  padding: 40px 32px;
  min-width: 528px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
a {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #1f6aec;
  flex: none;
  order: 2;
  flex-grow: 0;
  text-decoration: none;
}
.para {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6d7a98;
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
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

@media (max-width: 619px) {
  form {
    min-width: 100px;
  }
}
</style>
