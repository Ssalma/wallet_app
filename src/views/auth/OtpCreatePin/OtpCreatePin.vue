<template>
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
        />
        Pin: {{ Pin }}
        <ButtonComponent buttonTxt="Create Pin" class="btn--blue" />
      </div>
    </template>
  </auth-screen>
</template>

<script>
import AuthScreen from "@/layout/AuthScreens.vue";
import { PinComponent, ButtonComponent } from "@/components";
export default {
  components: {
    AuthScreen,
    PinComponent,
    ButtonComponent,
  },
  data() {
    return {
      Pin: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/views/auth/OtpCreatePin/otpcreatepin.scss";
</style>
