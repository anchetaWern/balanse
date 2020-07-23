<template>
  <section>
    <h1>Balanse</h1>

    <div class="form-container">
      <b-field label="Email">
        <b-input type="email" v-model="user.email"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" v-model="user.password"></b-input>
      </b-field>

      <b-button class="is-info" @click="login" expanded>
        Login
      </b-button>
    </div>
  </section>
</template>

<script>
import firebase from "@/firebaseConfig";

export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/entries");
        })
        .catch(() => {
          alert("Incorrect credentials. Please try again.");
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 28px;
}

.form-container {
  margin-top: 20px;
}
</style>
