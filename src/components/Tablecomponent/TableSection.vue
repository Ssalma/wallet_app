<template>
  <div class="main-wrapp">
    <div class="head">
      <img class="bell" src="@/assets/bell.svg" alt="" srcset="" />
      <h1 class="name">Kingsley Omin</h1>
      <div class="aka"><p>KO</p></div>
      <img class="arrow" src="@/assets/downarrow.svg" alt="" srcset="" />
    </div>
    <div class="nav">
      <div>
        <h3 class="amount">Hello Kingsley 👋🏿</h3>
      </div>
      <div>
        <button>Transfer Funds</button>
        <button>Transfer Funds</button>
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
    <h2 class="table-headtext">Recent Transactions</h2>
    <table>
      <tr class="table-heading">
        <th>Transaction Type</th>
        <th>Date</th>
        <th>Status</th>
        <th>Amount</th>
      </tr>
      <tr v-for="content in tableData" :key="content">
        <td>{{ content.tranType }}</td>
        <td>
          {{ content.date }}<span>{{ content.time }}</span>
        </td>
        <td da>
          <div :class="[`status--${content.status}`, 'status']">
            <div class="div1"><div class="div2"></div></div>
            <p>{{ content.status }}</p>
          </div>
          <!-- <div v-else class="failed">
            <img src="@/assets/failed.svg" alt="" srcset="" />
            Failed
          </div> -->
        </td>
        <td>{{ content.amount }}</td>
      </tr>
      <!-- <tr>
        <td>Wallet Deposit</td>
        <td>May 27, 2020 | 12:38 PM</td>
        <td da>
          <button class="failed">
            <img src="@/assets/failed.svg" alt="" srcset="" /> Failed
          </button>
        </td>
        <td>NGN 30,000</td>
      </tr> -->
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
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
};
</script>

<style lang="scss" scoped>
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
.main-wrapp {
  width: calc(100% - 64px);
  margin-left: auto;
  margin-right: auto;
}
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
}
.table-heading {
  width: 100%;
  color: #0b2253;
  height: 56px;
  background: #f1f4f8;
  text-align: start;
}
table {
  width: 100%;
  border-collapse: collapse;
}

.status {
  border-radius: 4px;
  padding: 6px 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 40px;
  width: max-content;
  max-width: 120px;

  .div1 {
    width: 12px;
    height: 12px;
    border: black;
    background: #ffffff;
    position: relative;
    justify-content: center;
    justify-items: center;
    align-items: center;
    display: flex;
    border-radius: 20px;
    padding: 4px;
  }
  .div2 {
    width: 6px;
    height: 6px;
    border: #0b2253;
    background: #3a434b;
    justify-content: center;
    justify-items: center;
    align-items: center;
    position: absolute;
    border-radius: 20px;
  }
  p {
    padding: 5px;
  }
  &--successful {
    background: #eafbf1;

    color: #166a37;
    border: 1px solid #c0f2d4;
    .div2 {
      background: #166a37;
    }
  }
  &--failure {
    background: #fce9e9;
    color: #700f0f;
    border: 1px solid #f6bcbc;
    .div2 {
      background: #700f0f;
    }
  }
}

span {
  color: #6d7a98;
  font-weight: 400;
  font-size: 16px;
}
/* tr {
  border-radius: 8px 0px 0px 8px;
} */

td {
  padding: 24px;
  text-align: start;
  border-bottom: 1px solid rgba(22, 42, 86, 0.1);
}
th {
  padding-left: 24px;
  text-align: start;
}
</style>
