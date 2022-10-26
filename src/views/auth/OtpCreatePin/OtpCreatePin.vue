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
  <auth-screen title="Create Pin" subtitle="Create pin to enable transfer">
    <template #content>
      <div class="create-pin">
        <h2>Kindly create your transaction Pin</h2>
        <PinComponent
          type="password"
          placeholder="*"
          :inputValue="Pin"
          @update:inputValue="(newvalue) => (Pin = newvalue)"
          class="masked-pin-container"
          @keyup.enter="pushtopage"
        />
        Pin: {{ Pin }}
        <ButtonComponent
          buttonTxt="Create Pin"
          class="btn--blue"
          @click="createPin()"
          type="button"
        />
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

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import { PinComponent, ButtonComponent } from "@/components";
import axios from "axios";
import { mapState } from "vuex";
export default {
  components: {
    AuthScreen,
    PinComponent,
    ButtonComponent,
  },
  data() {
    return {
      Pin: null,
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
    createPin() {
      if (this.Pin) {
        const newPin = this.Pin.toString();
        const token = localStorage.getItem("token");
        this.$store.commit("SET_LOADING", true);
        axios
          .post(
            "http://192.168.100.97:3249/api/v1/user/pin/create",
            { pin: newPin },
            {
              headers: {
                token,
              },
            }
          )
          .then((response) => {
            this.$store.commit("SET_LOADING", false);
            console.log(response);
            this.responseMessage = "Pin Creation Successful";
            this.isSuccessful = true;
            setTimeout(() => {
              this.isSuccessful = false;
              this.$router.push("/dashboard");
            }, 2000);
          })
          .catch((error) => {
            this.$store.commit("SET_LOADING", false);
            console.log(error);
            this.responseMessage = "Pin Creation Failed";
            this.isFailed = true;
            setTimeout(() => {
              this.isFailed = false;
            }, 2000);
          });
        this.$store.commit("SET_LOADING", false);
      } else {
        this.responseMessage = "Pin Cannot Be Empty";
        this.isFailed = true;
        setTimeout(() => {
          this.isFailed = false;
        }, 2000);
      }
    },
    pushtopage() {
      console.log("push");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/auth/OtpCreatePin/otpcreatepin.scss";
</style>
