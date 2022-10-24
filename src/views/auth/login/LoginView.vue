<template>
  <auth-screen title="Log In" subtitle="Great to have you back">
    <template #content>
      <form>
        <input-field
          v-model="emailAddress"
          label="Email Address"
          type="email"
        />
        <input-field v-model="user.password" label="Password" type="password" />
        <div>
          <!-- router-link goes below the button without the div -->
          <router-link to="/auth/forgetpassword">Forget Password?</router-link>
        </div>
        <login-btn buttonTxt="Log In" variant="blue"></login-btn>
        <p class="para">
          Don't have an account? <router-link to="/auth/signup">Register now</router-link>
        </p>
      </form>
    </template>
  </auth-screen>
</template>

<script>
import LoginBtn from "@/components/button/ButtonComponent.vue";
import AuthScreen from "@/layout/AuthScreens.vue";
import InputField from "@/components/Inputcomponent/InputField.vue";
export default {
  components: {
    AuthScreen,
    InputField,
    LoginBtn,
  },
  data() {
    return {
      user: {},
    };
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
@media (max-width: 375px){
  form{
    min-width: 328px;
  }
}
</style>