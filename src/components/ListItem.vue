<template>
  <div class="entries">
    <div v-for="entry in reverse_entries" :key="entry.id">
      <div class="is-clearfix">
        <div class="is-pulled-left">
          <div class="is-size-5" v-bind:class="amountTypeClass(entry.type)">
            {{ amountTypePrefix(entry.type)
            }}{{ entry.amount | currency("₱", 0) }}
          </div>

          <div class="is-size-7">
            {{ entry.description }}
          </div>
        </div>

        <div class="is-pulled-right">
          <div class="is-pulled-right is-size-7">
            {{ new Date(entry.date) | dateFormat("MMM D") }}
          </div>
          <div class="is-clearfix"></div>
          <div class="is-size-7 pt-1 has-text-info mt-6 balance">
            Balance: {{ entry.new_balance | currency("₱", 0) }}
          </div>
        </div>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";
Vue.use(VueFilterDateFormat);

export default {
  name: "ListItem",
  props: {
    entries: Array,
  },

  computed: {
    reverse_entries() {
      return this.$props.entries.slice().reverse();
    },
  },

  methods: {
    amountTypeClass: function(type) {
      return type == "credit" ? "has-text-success" : "has-text-danger";
    },

    amountTypePrefix: function(type) {
      return type == "credit" ? "+" : "-";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entries {
  margin-top: 30px;
}

.balance {
  margin-top: 12px;
}
</style>
