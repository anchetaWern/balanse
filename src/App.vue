<template>
  <div id="app">
    <Header :key="$route.fullPath" />
    <router-view :entries="entries" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import { EventBus } from "./event-bus.js";

export default {
  mounted() {
    EventBus.$on("entry:add", (entry) => {
      console.log("entry add: ", entry);
      this.entries = [...this.entries, entry];
    });
  },
  components: {
    Header,
  },
  data() {
    return {
      entries: [
        {
          id: 1,
          amount: 20000,
          type: "credit",
          description: "For tuitions",
          new_balance: 20000,
          date: "2020-06-30",
        },

        {
          id: 2,
          amount: 10000,
          type: "debit",
          description: "Siomai king",
          new_balance: 10000,
          date: "2020-07-09",
        },

        {
          id: 3,
          amount: 50000,
          type: "credit",
          description: "For pagibig",
          new_balance: 60000,
          date: "2020-07-10",
        },

        {
          id: 4,
          amount: 5000,
          type: "debit",
          description: "Groceries",
          new_balance: 55000,
          date: "2020-07-15",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}
</style>
