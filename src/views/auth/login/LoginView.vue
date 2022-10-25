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
    </template>
  </auth-screen>
</template>

<script>
import LoginBtn from "@/components/button/ButtonComponent.vue";
import AuthScreen from "@/layout/AuthScreens.vue";
import InputField from "@/components/Inputcomponent/InputField.vue";
import axios from "axios";
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
  methods: {
    async logIn() {
      await axios
        .post("http://192.168.100.69:3249/api/v1/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          let token = response.data.data.token;
          localStorage.setItem("token", token);
          this.responseMessage = "Login Successful";
          this.isSuccessful = true;
          setTimeout(() => {
            this.isSuccessful = false;
            if (!response.data.data.pin) {
              this.$router.push("/auth/otpcreatepin");
            } else {
              this.$router.push("/dashboard");
            }
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          this.responseMessage = "Login Failed";
          this.isFailed = true;
          setTimeout(() => {
            this.isFailed = false;
          }, 2000);
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

@media (max-width: 619px) {
  form{
    min-width: 100px;
  }
}

</style>
