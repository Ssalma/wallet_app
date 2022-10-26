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
import { mapState } from "vuex";
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
  computed: {
    ...mapState({
      userEmail: (state) => state.userEmail,
    }),
  },
  methods: {
    async reset() {
      // let email = localStorage.getItem("email");
      // let email = this.$store.state.userEmail;
      console.log(this.userEmail);
      const token = this.$route.params.token;
      if (this.user.password.length < 8) {
        console.warn("should be longer");
      } else if (this.user.password !== this.user.password1) {
        console.warn("This is not valid");
      } else {
        await axios
          .post(
            "http://192.168.100.97:3249/api/v1/user/password/reset",
            {
              password: this.user.password,
              passwordConfirm: this.user.password1,
            },
            {
              headers: { token },
            }
          )
          .then((response) => {
            console.log(response), this.$router.push({ path: "/auth/login" });
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
