<template>
  <div id="app">
    <router-view :entries="entries" :balance="balance" />
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";

import firebase from "@/firebaseConfig";
const db = firebase.firestore();

export default {
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (this.$router.currentRoute.name != "Entries") {
          this.$router.push("/entries");
        }

        db.collection("entries").onSnapshot(
          (docSnapshot) => {
            const documents = docSnapshot.docs.map((doc) => doc.data());

            this.entries = documents.sort((a, b) => (a.date > b.date ? 1 : -1));
            this.balance = parseInt(
              this.entries[this.entries.length - 1].new_balance
            );
          },
          (err) => {
            console.log("err: ", err);
          }
        );
      }
    });

    EventBus.$on("entry:add", (entry) => {
      const new_balance =
        entry.type == "credit"
          ? this.balance + entry.amount
          : this.balance - entry.amount;

      db.collection("entries")
        .add({
          amount: entry.amount,
          type: entry.type,
          description: entry.description,
          new_balance: new_balance,
          date: entry.date.getTime(),
        })
        .then(() => {
          console.log("document successfully written...");
        })
        .catch((error) => {
          console.log("error writing document: ", error);
        });
    });
  },

  data() {
    return {
      balance: 0,
      entries: [],
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
