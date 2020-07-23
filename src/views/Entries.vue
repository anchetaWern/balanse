<template>
  <div>
    <Header :key="$route.fullPath" :balance="balance" />
    <ListItem :entries="entries" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default {
  name: "Entries",
  props: {
    entries: Array,
    balance: Number,
  },
  components: {
    Header,
    ListItem,
  },
};
</script>
