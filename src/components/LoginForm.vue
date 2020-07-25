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

      <b-loading
        :is-full-page="true"
        :active.sync="isLoading"
        :can-cancel="false"
      ></b-loading>
    </div>
  </section>
</template>

<script>
import firebase from "@/firebaseConfig";

export default {
  name: "LoginForm",
  data() {
    return {
      isLoading: false,
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.user = {
            email: "",
            password: "",
          };
          this.isLoading = false;
          this.$router.push("/entries");
        })
        .catch(() => {
          alert("Incorrect credentials. Please try again.");
          this.user.password = "";
          this.isLoading = false;
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
