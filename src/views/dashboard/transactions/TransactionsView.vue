<template>
  <div class="transactions">
    <dashboard-modal v-if="isOpen" @close="closeModal" title="Filter">
      <template #content>
        <div class="transaction-type">
          <hr />
          <p>Transaction Type</p>
          <div class="select">
            <select
              name="transaction-type"
              id="transaction-type"
              v-model="selectValue"
            >
              <!-- <option value="default">--Select--</option> -->
              <option :value="'transfer'">Wallet Transfer</option>
              <option :value="'deposit'">Wallet Deposit</option>
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
        <ButtonComponent
          variant="blue"
          buttonTxt="Apply Search"
          type="button"
          @click="filterTransaction()"
        />
      </template>
    </dashboard-modal>
    <div class="header">
      <h3>Transactions</h3>
      <div class="search-filter">
        <div class="search">
          <input
            type="text"
            placeholder="Search by name"
            v-model="searchTerm"
          />
          <img :src="searchIcon" alt="" />
        </div>
        <div class="filter" @click="openModal">
          <p>Filter</p>
          <img :src="filterIcon" alt="" />
        </div>
      </div>
    </div>
    <TableSection :tableData="filteredData" />
  </div>
</template>

<script>
import { DashboardModal, ButtonComponent, TableSection } from "@/components";
import filterIcon from "@/assets/equalizer-line.svg";
import searchIcon from "@/assets/search-icon.svg";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  components: { DashboardModal, ButtonComponent, TableSection },
  data() {
    return {
      filterIcon,
      searchIcon,
      isOpen: false,
      dateDate: "yyyy-mm-dd",
      endDate: "yyyy-mm-dd",
      selectValue: "transfer",
      searchTerm: "",
    };
  },
  async created() {
    let userId = localStorage.getItem("userID");
    await this.getSingleUser(userId);
    await this.getTransactions();
    await this.filteredData;
  },
  computed: {
    ...mapGetters({
      singleUser: "getSingleUser",
      transactions: "getTransactions",
      filteredByDateData: "getFilteredData",
    }),
    filteredData() {
      if (this.searchTerm) {
        return this.transactions.filter((name) => {
          name.transactionType
            .toLowerCase().includes(this.searchTerm)
            
        });
      } else {
        return this.transactions;
      }
    },
    // newFilteredData() {
    //   return this.filteredByDateData.map((item) => {
    //     return {
    //       transactionType: item.name,
    //       status: item.status,
    //       amount: item.amount,
    //     };
    //   });
    // },
    // filteredData() {
    //   const filterD = this.filteredByDateData?.map((item) => {
    //     return {
    //       transactionType: item.name,
    //       status: item.status,
    //       amount: item.amount,
    //     };
    //   });
    //   const dataToSet = filterD !== [] ? filterD : this.transactions;
    //   console.log(dataToSet);
    //   return dataToSet;
    // },
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    ...mapActions({
      getSingleUser: "getSingleUser",
      getTransactions: "getTransactions",
      getFilteredData: "getFilteredData",
    }),
    filterTransaction() {
      let token = localStorage.getItem("token");
      axios
        .get(
          `http://192.168.100.97:3249/api/v1/transaction/filtered?name=${this.selectValue}&from=${this.dateDate}&to=${this.endDate}`,
          {
            headers: { token },
          }
        )
        .then((response) => {
          console.log(response);
          const newresponse = response.data.data.data[0].map((item) => {
            return {
              transactionType: item.name,
              status: item.status,
              amount: item.amount,
            };
          });
          this.$store.commit("SET_TRANSACTIONS", newresponse);
        })
        .catch((error) => {
          console.log(error);
        });
      this.dateDate = "yyyy-mm-dd";
      this.endDate = "yyyy-mm-dd";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../transactions/transactions.scss";
</style>
