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
        <ButtonComponent buttonTxt="Reset Password" class="btn--blue" />
      </div>
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import { InputField, ButtonComponent } from "@/components";
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
};
</script>

<style lang="scss" scoped>
@import "@/views/auth/resetPassword/resetPassword.scss";
</style>
