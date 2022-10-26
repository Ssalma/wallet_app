import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    loading: false,
    userEmail: "",
    userId: "",
    singleUser: [],
    transactions: [],
    firstName: "",
    lastName: "",
    currencyRate: [],
    filteredByDateData: [],
  },
  getters: {
    getSingleUser: (state) => state.singleUser,
    getTransactions: (state) => state.transactions,
    getRates: (state) => state.currencyRate,
    getFilteredData: (state) => state.filteredByDateData,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_EMAIL(state, payload) {
      state.userEmail = payload;
    },
    SET_FIRST_NAME(state, payload) {
      state.firstName = payload;
    },
    SET_LAST_NAME(state, payload) {
      state.lastName = payload;
    },
    SET_ID(state, payload) {
      state.userId = payload;
    },
    SET_SINGLE_USER(state, payload) {
      state.singleUser = payload;
    },
    SET_TRANSACTIONS(state, payload) {
      state.transactions = payload;
    },
    SET_RATE(state, payload) {
      state.currencyRate = payload;
    },
    SET_FILTERED_DATA(state, payload) {
      state.filteredByDateData = payload;
    },
  },
  actions: {
    async getSingleUser({ commit }, userId) {
      // const userId = this.state.userId;
      // const userId = localStorage.getItem("userID");
      console.log(userId);
      try {
        let response = await axios.get(
          `http://192.168.100.97:3249/api/v1/user/${userId}`
        );
        // console.log(response);
        commit("SET_SINGLE_USER", response.data.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getTransactions({ commit }) {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://192.168.100.97:3249/api/v1/transaction/transaction",
          {
            headers: { token },
          }
        );
        commit("SET_TRANSACTIONS", response.data.data.data[0]);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async getRates({ commit }) {
      const access_key = "gaAgBEz0r2VrzQz8sU2GXjMXC3JqlMww";
      const base = "NGN";
      const symbols = "USD";

      await axios
        .get("https://api.apilayer.com/fixer/latest", {
          params: {
            access_key: access_key,
            base: base,
            symbols: symbols,
          },
          headers: { apikey: "gaAgBEz0r2VrzQz8sU2GXjMXC3JqlMww" },
        })
        .then((response) => {
          console.log(response.data.rates.USD);
          commit("SET_RATE", response.data.rates.USD);
          return response;
        })
        .catch((error) => console.log("error", error));
    },

    // async filterTransaction({ selectValue}) {
    //   let token = localStorage.getItem("token");
    //   axios
    //     .get(
    //       `http://192.168.100.97:3249/api/v1/transaction/filtered?name=${this.selectValue}&from=${this.dateDate}&to=${this.endDate}`,
    //       {
    //         headers: { token },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       this.$store.commit("SET_FILTERED_DATA", response.data.data.data[0]);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   this.dateDate = "yyyy-mm-dd";
    //   this.endDate = "yyyy-mm-dd";
    // },
  },
  modules: {},
});
