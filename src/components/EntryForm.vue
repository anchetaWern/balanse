<template>
  <section>
    <div class="block">
      <b-field label="Type" />
      <b-radio v-model="entry.type" native-value="debit">
        Debit
      </b-radio>
      <b-radio v-model="entry.type" native-value="credit">
        Credit
      </b-radio>
    </div>

    <b-field label="Amount">
      <b-input
        v-model="entry.amount"
        placeholder="Numeral"
        v-cleave="masks.numeral"
        required
      >
      </b-input>
    </b-field>

    <b-field label="Description">
      <b-input type="textarea" v-model="entry.description" required></b-input>
    </b-field>

    <b-button class="is-info" @click="saveEntry" expanded>
      Save
    </b-button>
  </section>
</template>

<script>
import Cleave from "cleave.js";
import { EventBus } from "../event-bus.js";

const cleave = {
  name: "cleave",
  bind(el, binding) {
    const input = el.querySelector("input");
    input._vCleave = new Cleave(input, binding.value);
  },
  unbind(el) {
    const input = el.querySelector("input");
    input._vCleave.destroy();
  },
};

export default {
  name: "EntryForm",
  directives: { cleave },
  data() {
    return {
      entry: {
        type: "debit",
        amount: "",
        description: "",
      },

      masks: {
        numeral: {
          numeral: true,
          numeralThousandsGroupStyle: "thousand",
          prefix: "₱ ",
        },
      },
    };
  },

  methods: {
    saveEntry() {
      EventBus.$emit("entry:add", {
        ...this.entry,
        amount: parseInt(this.entry.amount.substr(2).replace(",", "")),
      });

      this.entry = {
        type: "debit",
        amount: "",
        description: "",
      };

      this.$router.push("/entries");
    },
  },
};
</script>
