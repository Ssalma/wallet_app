<template>
  <auth-screen title="Create Your Account" subtitle="Let’s get you started">
    <template #content>
      <div class="main-div">
        <form>
          <div class="names">
            <InputField type="text" label="First Name" v-model="user.First" />
            <InputField type="text" label="Last Name" v-model="user.Last" />
          </div>
          <InputField type="email" label="email" v-model="user.email" />
          <InputField
            type="number"
            label="Phone Number"
            v-model="user.number"
          />
          <InputField
            type="password"
            label="Password"
            v-model="user.password"
          />
          <button-component button-txt="Create Account" class="btn--blue" />
          <h2>
            Already have an account?
            <span> <router-link to="/auth/login">Sign In</router-link></span>
          </h2>
        </form>
      </div>
    </template>
  </auth-screen>
</template>

<script scoped>
import AuthScreen from "@/layout/AuthScreens.vue";
import InputField from "@/components/Inputcomponent/InputField.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
export default {
  components: {
    AuthScreen,
    InputField,
    ButtonComponent,
  },
  data() {
    return {
      user: {},
    };
  },
  updated() {
    console.log(this.newemail);
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
width:528px;
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
</style>
