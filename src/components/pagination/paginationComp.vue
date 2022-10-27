<template>
  <div class="container">
    <div>
      <h1>
        <span class="showing">Showing</span> Page {{ pageNumber }} of
        {{ totalNumberOfPages }}
      </h1>
    </div>
    <div class="check">
      <button @click="previous()" v-if="currentPage != 1">Prev</button>
      <div
        class="page-btn-wrapper"
        v-for="number in numberOfPages"
        :key="number"
      >
        <button
          @click="numberTarget(number)"
          :class="['number', { isActive: number === pageNumber }]"
          v-if="showNumber(number)"
        >
          {{ number }}
        </button>
      </div>
      <button @click="next()" v-if="currentPage < totalNumberOfPages">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      pageNumber: 1,
      totalNumberOfPages: null,
      currentPage: null,
      row: 8,
      numberexceed: 1,
      numberOfPages: null,
      everyNumberOfPages: "",
    };
  },
  async created() {
    // await this.getPaginationInfo();
    await this.paginationInfo;
    this.totalNumberOfPages = this.paginationInfo.totalPages;
    this.currentPage = this.paginationInfo.currentPage;
    this.numberOfPages = this.paginationInfo.totalPages;
    // console.log(this.paginationInfo);
  },
  watch: {
    pageNumber() {
      const { pageNumber } = this;
      this.numberTarget(pageNumber);
      this.paginationInfo;
    },
  },
  computed: {
    // ...mapGetters({
    //   paginationInfo: "getPaginationInfo",
    // }),
    ...mapState({
      paginationInfo: (state) => state.paginationInfo,
    }),
    displayedPosts() {
      return this.paginate(this.numberOfPages);
    },
  },
  methods: {
    // ...mapActions({
    //   getPaginationInfo: "getPaginationInfo",
    // }),
    totalLengthOfPage() {
      this.totalNumberOfPages = this.numberOfPages.length;
    },
    previous() {
      this.currentPage--;
      this.pageNumber = this.currentPage;
    },
    numberTarget(e) {
      this.currentPage = e;
      this.pageNumber = this.currentPage;
    },
    next() {
      this.currentPage++;
      this.pageNumber = this.currentPage;
    },
    showNumber(number) {
      const { currentPage, pageNumber } = this;
      return (
        currentPage === number ||
        number === pageNumber + 1 ||
        number === pageNumber + 2 ||
        number === pageNumber - 1 ||
        number === pageNumber - 2
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
}

h1 {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #0d0f11;
}

.showing {
  color: #3a434b;
}

button {
  border: none;
  background: none;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #3a434b;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.check {
  display: flex;
  gap: 20px;
}

.isActive {
  width: 23px;
  height: 24px;
  background: rgba(47, 46, 128, 0.1);
  border-radius: 2px;
}
.page-btn-wrapper {
  &:empty {
    display: none;
  }
}
</style>
