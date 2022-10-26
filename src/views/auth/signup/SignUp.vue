<template>
  <auth-screen title="Create Your Account" subtitle="Let's get you started">
    <template #content>
      <div class="main-div">
        <form>
          <div class="names">
            <InputField type="text" label="First Name" v-model="First" />
            <InputField type="text" label="Last Name" v-model="Last" />
          </div>
          <InputField type="email" label="email" v-model="email" />
          <InputField type="number" label="Phone Number" v-model="number" />
          <InputField type="password" label="Password" v-model="password" />
          <button-component
            type="button"
            @click="signUp()"
            button-txt="Create Account"
            variant="blue"
          />
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
import axios from "axios";
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
      First: "",
      Last: "",
      email: "",
      number: "",
      password: "",
    };
  },
  updated() {
    console.log(this.newemail);
  },
  methods: {
    async signUp() {
      console.log(this.First);
      await axios
        .post("http://192.168.100.94:3249/api/v1/user/signup", {
          firstName: this.First,
          lastName: this.Last,
          email: this.email,
          phoneNumber: this.number,
          userPassword: this.password,
        })
        .then((response) => {
          localStorage.setItem("signEmail", this.email);
          localStorage.setItem("signPassword", this.password);
          console.log(response);
          this.$router.push("/auth/otpverification");
        })
        .catch((err) => {
          console.log(err.message);
        });
      (this.First = ""),
        (this.Last = ""),
        (this.email = ""),
        (this.number = ""),
        (this.password = "");
    },
  },
};
</script>

<style scoped>
.main-div {
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 8px;
  padding: 32px 40px;
  width: 528px;
  max-width: 528px;
}
.names {
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;
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

a {
  text-decoration: none;
}

@media (max-width: 831px) {
  .main-div {
    max-width: 490px;
  }
}

form {
  gap: 14px;
}

@media (max-width: 562px) {
  .main-div {
    max-width: 390px;
    padding: 12px 20px;
  }

  .names {
    display: grid;
    grid-template-columns: auto;
    gap: 16px;
  }
}

@media (max-width: 423px) {
  .main-div {
    max-width: 340px;
    padding: 20px 20px;
  }

  .names {
    display: grid;
    grid-template-columns: auto;
    gap: 16px;
  }
}

@media (max-width: 360px) {
  .main-div {
    max-width: 300px;
    padding: 20px 20px;
  }

  .names {
    display: grid;
    grid-template-columns: auto;
    gap: 16px;
  }
}

@media (max-width: 280px) {
  .main-div {
    max-width: 245px;
    padding: 10px;
  }

  .names {
    display: grid;
    grid-template-columns: auto;
    gap: 10px;
  }
}
</style>
