<template>
  <div class="transactions">
    <dashboard-modal
      v-if="isOpen"
      @close="closeModal"
      title="Filter"
    ></dashboard-modal>
    <div class="header">
      <h3>Transactions</h3>
      <div class="search-filter">
        <InputField class="new-input" placeholder="Search by name" />
        <div class="filter" @click="openModal">
          <p>Filter</p>
          <img :src="filterIcon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InputField, DashboardModal } from "@/components";
import filterIcon from "@/assets/equalizer-line.svg";
export default {
  components: { InputField, DashboardModal },
  data() {
    return {
      filterIcon,
      isOpen: false,
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
