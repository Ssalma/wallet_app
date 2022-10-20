<template>
  <div class="transactions">
    <dashboard-modal v-if="isOpen" @close="closeModal" title="Filter">
      <template #content>
        <div class="transaction-type">
          <hr />
          <p>Transaction Type</p>
          <div class="select">
            <select name="transaction-type" id="transaction-type">
              <!-- <option value="default">--Select--</option> -->
              <option value="transfer">Wallet Transfer</option>
              <option value="deposit">Wallet Deposit</option>
            </select>
          </div>
        </div>
        <div class="period">
          <div class="start-date-section">
            <p>Start Date</p>
            <div class="start-date">
              {{ dateDate }}
              <span class="datepicker-toggle">
                <span class="datepicker-toggle-button"></span>
                <input
                  type="date"
                  class="datepicker-input"
                  v-model="dateDate"
                />
              </span>
            </div>
          </div>
          <div class="end-date-section">
            <p>End Date</p>
            <div class="end-date">
              {{ endDate }}
              <span class="datepicker-toggle">
                <span class="datepicker-toggle-button"></span>
                <input type="date" class="datepicker-input" v-model="endDate" />
              </span>
            </div>
          </div>
        </div>
        <div class="radio-input">
          <p>Transaction Status</p>
          <div class="radio-buttons">
            <input type="radio" name="status" id="successful" />
            <label for="successful">Successful</label>
            <input type="radio" name="status" id="failed" />
            <label for="failed">Failed</label>
          </div>
        </div>
        <ButtonComponent variant="blue" buttonTxt="Apply Search" />
      </template>
    </dashboard-modal>
    <div class="header">
      <h3>Transactions</h3>
      <div class="search-filter">
        <div class="search">
          <input type="text" placeholder="Search by name" />
          <img :src="searchIcon" alt="" />
        </div>
        <div class="filter" @click="openModal">
          <p>Filter</p>
          <img :src="filterIcon" alt="" />
        </div>
      </div>
    </div>
    <TableSection :tableData="tableData" v-if="tableData.length > 0" />
  </div>
</template>

<script>
import { DashboardModal, ButtonComponent, TableSection } from "@/components";
import filterIcon from "@/assets/equalizer-line.svg";
import searchIcon from "@/assets/search-icon.svg";
export default {
  components: { DashboardModal, ButtonComponent, TableSection },
  data() {
    return {
      filterIcon,
      searchIcon,
      isOpen: false,
      dateDate: "yyyy-mm-dd",
      endDate: "yyyy-mm-dd",
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
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../transactions/transactions.scss";
</style>
