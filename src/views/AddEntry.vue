<template>
	<EntryForm :entries="entries" />
</template>

<script>
import EntryForm from "@/components/EntryForm.vue";

export default {
	name: "AddEntry",
	props: {
		entries: Array,
	},
	components: {
		EntryForm,
	},
};
</script>
