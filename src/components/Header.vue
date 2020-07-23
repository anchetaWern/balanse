<template>
  <section>
    <div class="columns is-mobile">
      <div class="column">
        <h1>Balanse</h1>
      </div>
      <div class="column">
        <template v-if="isEntries()">
          <b-button
            class="is-pulled-right"
            type="is-light"
            @click="goToNewEntry"
          >
            Add Entry
          </b-button>
        </template>

        <template v-else>
          <b-button
            class="is-pulled-right"
            type="is-light"
            @click="goToEntries"
          >
            Entries
          </b-button>
        </template>
      </div>
    </div>

    <div class="text-centered">
      <h2 v-bind:class="amount_class">
        {{ this.$props.balance | currency("₱", 0) }}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  props: {
    balance: Number,
  },
  computed: {
    amount_class: function() {
      return this.balance > 5000 ? "has-text-success" : "has-text-danger";
    },
  },
  methods: {
    isEntries() {
      console.log("name: ", this.$router.currentRoute.name);
      return this.$router.currentRoute.name == "Entries";
    },
    goToNewEntry() {
      this.$router.push("/entry/new");
    },
    goToEntries() {
      this.$router.push("/entries");
    },
  },
};
</script>

<style scoped>
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
