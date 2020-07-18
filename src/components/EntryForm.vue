<template>
  <section>
    <h1>Add Entry</h1>
    <b-field label="Amount">
      <b-input
        v-model="entry.amount"
        placeholder="Numeral"
        v-cleave="masks.numeral">
      </b-input>
    </b-field>

    <b-field label="Description">
      <b-input type="textarea" v-model="entry.description"></b-input>
    </b-field>


    <b-button class="is-info is-pulled-right" @click="saveEntry" expanded>Save</b-button>
  
    
  </section>
</template>

<script>
import Cleave from "cleave.js";

const cleave = {
  name: 'cleave',
  bind(el, binding) {
    const input = el.querySelector('input');
    input._vCleave = new Cleave(input, binding.value);
  },
  unbind(el) {
    const input = el.querySelector('input');
    input._vCleave.destroy();
  }
}

export default {
  name: "EntryForm",
  directives: { cleave },
  
  data() {
    return {
      entry: {
        amount: "",
        description: ""
      },
  
      masks: {
        numeral: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
          prefix: '₱ '
        },
      },
    }
  },

  methods: {
    saveEntry() {
      console.log("saved entry!");
    },
  },
};
</script>

<style scoped></style>
