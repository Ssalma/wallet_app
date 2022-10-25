<template>
  <auth-screen
    title="Forgot Password"
    subtitle="Kindly enter your registered email
to reset your passsword"
  >
    <template #content>
      <form>
        <input-field
          v-model="emailAddress"
          label="Email Address"
          type="email"
        />
        <login-btn
          buttonTxt="Recover Password"
          variant="blue"
          type="button"
          @click="send()"
        ></login-btn>
        <router-link to="/auth/login">Return to Log In</router-link>
      </form>
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import LoginBtn from "@/components/button/ButtonComponent.vue";
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
      user: {},
      emailAddress: "",
      isSuccessful: false,
      isFailed: false,
      responseMessage: "",
    };
  },
  methods: {
    async send() {
      await axios
        .post("http://192.168.100.69:3249/api/v1/user/reset/send", {
          email: this.emailAddress,
          link: "http://192.168.100.93:8080/auth/resetpassword",
        })
        .then((response) => {
          localStorage.setItem("email", this.emailAddress);
          this.$store.commit("SET_EMAIL", this.emailAddress);
          console.log(response);
          this.responseMessage = "Email Sent";
          this.isSuccessful = true;
          setTimeout(() => {
            this.isSuccessful = false;
            this.$router.push("/auth/checkinbox");
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          this.responseMessage = "Please Retry";
          this.isFailed = true;
          setTimeout(() => {
            this.isFailed = false;
          }, 2000);
        });
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
  text-align: center;
  order: 2;
  flex-grow: 0;
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

@media (min-width: 768px) {
  /* form{
    width: 528px;
  } */
}
</style>
