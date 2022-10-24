<template>
  <auth-screen
    title="Reset Password"
    subtitle="
    Create a unique password to
    keep your account protected"
  >
    <template #content>
      <div class="reset-password">
        <InputField
          label="New Password"
          type="password"
          v-model="user.password"
          class="input-fields"
        />
        <InputField
          label="Confirm Password"
          type="password"
          v-model="user.password1"
          class="input-fields"
        />
        <ButtonComponent
          buttonTxt="Reset Password"
          class="btn--blue"
          type="button"
          @click="reset()"
        />
      </div>
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import { InputField, ButtonComponent } from "@/components";
import axios from "axios";
export default {
  components: {
    AuthScreen,
    InputField,
    ButtonComponent,
  },
  data() {
    return {
      user: {
        password: "",
        password1: "",
      },
    };
  },
  methods: {
    async reset() {
      if (this.user.password.length < 8) {
        console.warn("should be longer");
      } else if (this.user.password !== this.user.password1) {
        console.warn("This is not valid");
      } else {
        let email = localStorage.getItem("email");
        await axios
          .post("", {
            email,
            password: this.user.password,
            passwordConfirm: this.user.password1,
          })
          .then((response) => {
            console.log(response),
              this.$router.push({ path: "/auth/otpcreatepin" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/auth/resetPassword/resetPassword.scss";
</style>
