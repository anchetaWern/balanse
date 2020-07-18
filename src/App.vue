<template>
  <div id="app">
    <div class="columns is-mobile">
      <div class="column">
        <h1>Balanse</h1>
      </div>
      <div class="column">
        <b-button class="is-pulled-right" type="is-light">Add Entry</b-button>
      </div>
    </div>

    <div class="text-centered">
      <h2 v-bind:class="amount_class">{{ balance | currency("₱", 0) }}</h2>
    </div>
    
    <ListItem :entries="entries" />
  </div>
</template>

<script>
import Vue from "vue";
import Vue2Filters from "vue2-filters";
import { Table, Field, Input, Button } from "buefy";
import "buefy/dist/buefy.css";
import ListItem from "@/components/ListItem";
// import EntryForm from "@/components/EntryForm";

Vue.use(Table);
Vue.use(Field);
Vue.use(Input);
Vue.use(Button);
Vue.use(Vue2Filters);


export default {
  name: "App",
  components: {
    ListItem
    // EntryForm,
  },
  data() {
    return {
      balance: 20500,

      entries: [
        {
          id: 1,
          amount: 20000,
          type: "credit",
          description: "For tuition",
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

  computed: {
    amount_class: function() {
      return this.balance > 5000 ? 'has-text-success' : 'has-text-danger';
    }
  }
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

h1 {
  font-size: 28px;
}

h2 {
  font-size: 25px;
}

.text-centered {
  text-align: center;
}
</style>
