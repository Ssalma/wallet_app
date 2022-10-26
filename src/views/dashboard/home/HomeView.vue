<template>
  <div class="home">
    <div class="nav">
      <div>
        <h3 class="amount">Hello {{ singleUser.firstName }} 👋🏿</h3>
      </div>
      <div class="active-button">
        <ButtonComponent
          variant="whiteBtn"
          buttonTxt="Transfer Funds"
          @click="openModal"
        />
        <ButtonComponent
          icon="true"
          variant="blueBtn"
          buttonTxt="Fund Wallet"
          @click="openFundmodal"
        />
      </div>
    </div>
    <div class="currency">
      <div class="naira">
        <div class="amount">₦{{ getBalance }}</div>
        <h4>Naira Balance</h4>
      </div>
      <div class="naira">
        <div class="amount">${{ getDollar }}</div>
        <div class="balance"><h4>Dollar Balance</h4></div>
      </div>
    </div>
    <div v-if="transactions.length > 0">
      <h2 class="table-headtext">Recent Transactions</h2>
      <TableSection :tableData="transactions.slice(0, 10)" />
    </div>
    <div v-else>
      <h2 class="table-headtext">Transaction History</h2>
      <img class="empty-image" src="@/assets/empty.svg" alt="" srcset="" />
    </div>
    <DashboardModal v-if="openTransfer" @close="closeModal">
      <template #content>
        <hr />
        <form>
          <p>Select Wallet Type to Transfer From</p>
          <div class="select">
            <div>
              <input
                class="html"
                type="radio"
                id="html"
                name="fav_language"
                :value="'naira'"
                v-model="radioValue"
              />
              <label>Naira</label>
            </div>
            <div>
              <input
                class="html"
                type="radio"
                id="css"
                name="fav_language"
                :value="'dollar'"
                v-model="radioValue"
              />
              <label>Dollar</label>
            </div>
          </div>
          <InputField
            type="number"
            label="Account Number"
            v-model="user.account"
          />
          <InputField type="number" label="Amount" v-model="user.number" />
          <InputField
            type="password"
            label="Pin"
            v-model="user.password"
            maxlength="4"
          />
          <button-component
            button-txt="Transfer"
            variant="blue"
            type="button"
            @click="makeTransfer"
          />
          <p id="wrongPin"></p>
        </form>
      </template>
    </DashboardModal>
    <DashboardModal v-if="openFund" @close="closeFundmodal">
      <template #content>
        <hr />
        <form>
          <p>Select Wallet Type</p>
          <div class="select">
            <div>
              <input
                class="html"
                type="radio"
                id="html"
                name="fav_language"
                :value="'naira'"
                v-model="radioValue"
              />
              <label>Naira</label>
            </div>
            <div>
              <input
                class="html"
                type="radio"
                id="css"
                name="fav_language"
                :value="'dollar'"
                v-model="radioValue"
              />
              <label>Dollar</label>
            </div>
          </div>
          <InputField type="number" label="Amount" v-model="user.number1" />
          <button-component
            button-txt="Fund Wallet"
            variant="blue"
            type="button"
            @click="makeDeposit"
          />
        </form>
      </template>
    </DashboardModal>
    <DashboardModal title="" v-if="openPin" @close="closePinmodal">
      <template #content>
        <p class="pin-p">Kindly create your transaction Pin</p>
        <div class="pincomponent"><PinComponent /></div>
        <div class="create-pin">
          <button-component button-txt="Create Pin" variant="blue" />
        </div>
      </template>
    </DashboardModal>
  </div>
</template>

<script>
import TableSection from "@/components/Tablecomponent/TableSection.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import DashboardModal from "@/components/modal/DashboardModal.vue";
import InputField from "@/components/Inputcomponent/InputField.vue";
import PinComponent from "@/components/pincomponent/PinComponent.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
// import { format } from "date-fns";

export default {
  name: "HomeView",
  components: {
    TableSection,
    ButtonComponent,
    DashboardModal,
    InputField,
    PinComponent,
  },

  data: () => ({
    user: {
      password: null,
      account: null,
      number: null,
      number1: null,
    },
    openTransfer: false,
    openFund: false,
    openPin: false,
    radioValue: "naira",
  }),
  async created() {
    let userId = localStorage.getItem("userID");
    console.log(userId);
    await this.getSingleUser(userId);
    await this.getTransactions();
    await this.getRates();
    this.$store.commit("SET_FIRST_NAME", this.singleUser.firstName);
    this.$store.commit("SET_LAST_NAME", this.singleUser.lastName);
    console.log(this.singleUser);
    console.log(this.currencyRate);
  },
  computed: {
    ...mapGetters({
      singleUser: "getSingleUser",
      transactions: "getTransactions",
      currencyRate: "getRates",
    }),
    getBalance() {
      return this.singleUser.balance?.toFixed(2);
    },
    getDollar() {
      return this.singleUser.balance * this.currencyRate;
    },
    // getStatus() {
    //   if (!this.transactions.status == "successful") {
    //     return "Failed";
    //   } else {
    //     return "Successful";
    //   }
    // },
    // getDate() {
    //   return format(new Date(this.transactions.createdAt), "MMM dd ',' yyyy");
    // },
    // getTransferType() {
    //   if (!this.transactions.transactionType == "transfer") {
    //     return "Deposit";
    //   } else {
    //     return "Transfer";
    //   }
    // },
  },
  methods: {
    ...mapActions({
      getSingleUser: "getSingleUser",
      getTransactions: "getTransactions",
      getRates: "getRates",
    }),
    closeModal() {
      this.openTransfer = false;
    },
    openModal() {
      this.openTransfer = true;
    },
    closeFundmodal() {
      this.openFund = false;
    },
    openFundmodal() {
      this.openFund = true;
    },
    closePinmodal() {
      this.openPin = false;
    },
    openPinmodal() {
      this.openFund = false;
      this.openPin = true;
    },
    makeTransfer() {
      let token = localStorage.getItem("token");
      axios
        .post(
          "http://192.168.100.97:3249/api/v1/transaction/transfer",
          {
            pin: this.user.password,
            currency: this.radioValue,
            amount: this.user.number,
            accountNumber: this.user.account,
          },
          {
            headers: { token },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.user.password = "";
      this.user.account = "";
      this.user.number = "";
    },
    makeDeposit() {
      let token = localStorage.getItem("token");
      axios
        .post(
          "http://192.168.100.97:3249/api/v1/transaction/deposit",
          {
            currency: this.radioValue,
            amount: this.user.number1,
          },
          {
            headers: { token },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          let wrongPin = document.getElementById("wrongPin");
          console.log(wrongPin);
          wrongPin.innerHTML = "Enter correct Pin";
        });
      this.user.number1 = "";
    },
  },
  watch: {
    user: {
      handler() {
        console.log("a");
        let userId = localStorage.getItem("userID");
        this.getSingleUser(userId);
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.select {
  display: flex;
  gap: 85px;
}
p {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.002em;
  color: #0b2253;
}
.pin-p {
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #0b2253;
  margin-top: 69px;
  margin-bottom: 38px;
}

.html {
  margin-right: 8px;
}
.empty-image {
  display: block;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
.buttons {
  padding-left: 24px;
  padding-right: 24px;
}
.active-button {
  display: flex;
  gap: 20px;
}
.head {
  display: flex;
  justify-content: end;
  margin-top: 16px;
}
.bell {
  margin-right: 40px;
}
.name {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-right: 12px;
  color: #3a434b;
}
.aka {
  background: #d7dce0;
  border: 2px solid #f4f5f6;
  border-radius: 18px;
  margin-right: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #3a434b;
  flex-grow: 0;
}
.nav {
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
}
/* .main-wrapp {
  // width: calc(100% - 64px);
  margin-left: auto;
  margin-right: auto;
} */
.currency {
  display: flex;
  gap: 24px;
  margin-top: 24px;
}
.naira {
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 8px;
  border-radius: 8px;
  padding: 24px;
  width: 552px;
  max-width: 552px;
  text-align: start;
}
.amount {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: #0b2253;
}
h4 {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6d7a98;
}
.table-headtext {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #0b2253;
  text-align: start;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: start;
}
.create-pin {
  margin-top: 38px;
}

hr {
  border: 1px solid #d7dce0;

  width: calc(100% + 64px);
  margin-left: -32px;
  margin-bottom: 40px;
}
.pincomponent {
  padding-left: 14px;
}
</style>
