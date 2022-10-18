<template>
  <auth-screen
    title="Reset Password"
    subtitle="we have sent a reset link to your
registered email address."
  >
    <template #content>
      <div class="right-container">
        <img :src="InboxImage" alt="" />
        <h2>Check Your Inbox</h2>
        <p>Password reset link has been sent to your inbox</p>
        <ButtonComponent
          buttonTxt="Reset Password"
          class="btn--blue"
          @click="this.$router.push({ name: 'resetpassword' })"
        />
      </div>
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import InboxImage from "@/assets/inbox.svg";
import { ButtonComponent } from "@/components";
export default {
  components: {
    AuthScreen,
    ButtonComponent,
  },
  data() {
    return {
      InboxImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/auth/checkInbox/checkinbox.scss";
</style>
