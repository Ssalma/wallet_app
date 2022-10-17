<template>
  <div class="container">
    <div>
      <h1>
        <span class="showing">Showing</span> Page {{ pageNumber }} of
        {{ numberOfPages.length }}
      </h1>
    </div>
    <div class="check">
      <button @click="previous()" v-if="currentPage != 1">Prev</button>
      <div class="page-btn-wrapper" v-for="number in numberOfPages" :key="number">
          <button @click="numberTarget(number)" :class="['number', { isActive: (number === pageNumber)  }]"  v-if="showNumber(number)">{{ number }}</button>
      </div>
      <button @click="next()" v-if="currentPage < numberOfPages.length">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
      totalNumberOfPages: 10,
      currentPage: 1,
      row: 8,
      numberexceed: 1,
      numberOfPages: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      everyNumberOfPages: "",
    };
  },
  watch: {
    pageNumber(){
      const {pageNumber} = this
      this.numberTarget(pageNumber)
    }
  },
  computed: {
		displayedPosts () {
			return this.paginate(this.numberOfPages);
		}
	},
  methods: {
    totalLengthOfPage(){
      this.totalNumberOfPages = this.numberOfPages.length
    },
    previous() {
      this.currentPage--
      this.pageNumber = this.currentPage
    },
    numberTarget(e) {
      this.currentPage = e;
      this.pageNumber = this.currentPage
    },
    next() {
      this.currentPage++
      this.pageNumber = this.currentPage
    },
    showNumber(number) {
    const {currentPage, pageNumber} = this;
      return (currentPage === number) || 
      (number === pageNumber + 1) || 
      (number === pageNumber + 2) || 
      (number === pageNumber - 1) || 
      (number === pageNumber - 2)
    }
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
