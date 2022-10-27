<template>
  <div class="profile">
    <div class="personal-information">
      <h1>Personal Information</h1>
      <form action="#">
        <div class="name-section">
          <div class="first-name">
            <label for="fname">First Name</label><br />
            <input
              type="text"
              name="fname"
              v-model="singleUser.firstName"
              readonly
            />
          </div>
          <div class="last-name">
            <label for="lname">Last Name</label><br />
            <input
              type="text"
              name="lname"
              v-model="singleUser.lastName"
              readonly
            />
          </div>
          <div class="email">
            <label for="email">Email</label><br />
            <input
              type="email"
              name="email"
              v-model="singleUser.email"
              readonly
            />
          </div>
          <div class="account-number">
            <label for="acc-num">Account Number</label><br />
            <input
              type="text"
              name="acc-num"
              v-model="singleUser.accountNumber"
              readonly
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async created() {
    let userId = localStorage.getItem("userID");
    await this.getSingleUser(userId);
    this.$store.commit("SET_FIRST_NAME", this.singleUser.firstName);
    this.$store.commit("SET_LAST_NAME", this.singleUser.lastName);
    console.log(this.singleUser);
  },
  computed: {
    ...mapGetters({
      singleUser: "getSingleUser",
      transactions: "getTransactions",
      currencyRate: "getRates",
    }),
  },
  methods: {
    ...mapActions({
      getSingleUser: "getSingleUser",
      getTransactions: "getTransactions",
      getRates: "getRates",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "./profile.scss";
</style>
