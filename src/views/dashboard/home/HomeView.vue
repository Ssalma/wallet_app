<template>
  <div class="home">
    <div class="nav">
      <div>
        <h3 class="amount">Hello Kingsley 👋🏿</h3>
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
        <div class="amount">₦00.00</div>
        <h4>Naira Balance</h4>
      </div>
      <div class="naira">
        <div class="amount">$00.00</div>
        <div class="balance"><h4>Dollar Balance</h4></div>
      </div>
    </div>
    <div v-if="tableData.length > 0">
      <h2 class="table-headtext">Recent Transactions</h2>
      <TableSection :tableData="tableData" />
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
                value="HTML"
              />
              <label>Naira</label>
            </div>
            <div>
              <input
                class="html"
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
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
            variantClass="hide"
          />
          <button-component button-txt="Transfer" variant="blue" />
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
                value="HTML"
              />
              <label>Naira</label>
            </div>
            <div>
              <input
                class="html"
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
              />
              <label>Dollar</label>
            </div>
          </div>
          <InputField type="number" label="Amount" v-model="user.number" />
          <button-component
            button-txt="Fund Wallet"
            variant="blue"
            @click="openPinmodal"
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
    user: {},
    openTransfer: false,
    openFund: false,
    openPin: false,
    tableData: [
      {
        tranType: "Wallet Deposit",
        date: "May 27, 2020 | ",
        time: " 12:38 PM",
        status: "successful",
        amount: "NGN 30,000",
      },
      {
        tranType: "Wallet Deposit",
        date: "May 27, 2020 | ",
        time: " 12:38 PM",
        status: "failure",
        amount: "NGN 30,000",
      },
      {
        tranType: "Wallet Deposit",
        date: "May 27, 2020 | ",
        time: " 12:38 PM",
        status: "successful",
        amount: "NGN 30,000",
      },
    ],
  }),
  methods: {
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
