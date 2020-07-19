<template>
	<ListItem :entries="entries" />
</template>

<script>
import ListItem from "@/components/ListItem";

export default {
	name: "Entries",
	props: {
		entries: Array,
	},
	components: {
		ListItem,
	},
};
</script>
