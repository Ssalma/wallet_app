<template>
  <div class="main-wrapp">
    <table>
      <tr class="table-heading">
        <th>Transaction Type</th>
        <th>Date</th>
        <th>Status</th>
        <th>Amount</th>
      </tr>
      <tr v-for="content in tableData" :key="content">
        <td>Wallet {{ getTransferType(content.transactionType) }}</td>
        <td>
          {{ getDate(content.createdAt) }} |
          <span>{{ getTime(content.createdAt) }} </span>
        </td>
        <td da>
          <div :class="[`status--${getStatus(content.status)}`, 'status']">
            <div class="div1"><div class="div2"></div></div>
            <p>{{ getStatus(content.status) }}</p>
          </div>
          <!-- <div v-else class="failed">
            <img src="@/assets/failed.svg" alt="" srcset="" />
            Failed
          </div> -->
        </td>
        <td>NGN {{ content.amount }}</td>
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
// import { format } from "date-fns";
import moment from "moment";
export default {
  props: {
    tableData: { type: Array },
    transactionType: { type: String },
    status: { type: String },
  },
  methods: {
    getDate(date) {
      return moment(date).format("LL");
    },
    getTime(time) {
      return moment(time).format("LT");
    },
    getStatus(statusType) {
      if (statusType == "successful") {
        return "Successful";
      } else {
        return "Failed";
      }
    },
    getTransferType(type) {
      if (type == "transfer") {
        return "Transfer";
      } else {
        return "Deposit";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-image {
  display: flex;
  justify-content: center;
  margin-top: 100px;
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
.main-wrapp {
  // width: calc(100% - 64px);
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
  &--Successful {
    background: #eafbf1;

    color: #166a37;
    border: 1px solid #c0f2d4;
    .div2 {
      background: #166a37;
    }
  }
  &--Failed {
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
