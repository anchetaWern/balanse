<template>
  <div>
    <Header :key="$route.fullPath" :balance="balance" />
    <EntryForm :entries="entries" />
  </div>
</template>

<script>
import EntryForm from "@/components/EntryForm.vue";
import Header from "@/components/Header.vue";

export default {
  name: "AddEntry",
  props: {
    entries: Array,
    balance: Number,
  },
  components: {
    EntryForm,
    Header,
  },
};
</script>
