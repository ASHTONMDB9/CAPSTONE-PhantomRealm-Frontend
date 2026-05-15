<template>
  <div class="container">
    <h1 class="about">Forgot Password</h1>

    <div id="form" class="container-fluid">
      <form @submit.prevent="submitEmail">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>

          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
            placeholder="johndoe23@gmail.com"
            required
          />
        </div>

        <button type="submit" class="btn">Send Reset Link</button>
      </form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      email: "",
    };
  },

  methods: {
    async submitEmail() {
      try {
        // Vuex action
        const response = await this.$store.dispatch("forgotPassword", {
          email: this.email,
        });

        this.email = "";
      } catch (error) {
        console.log(error);
        swal("Error", "Something went wrong");
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 165px;
}

.about {
  color: black;
  text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red,
    10px 0px 10px rgb(36, 36, 36);
  font-family: phantom;
  font-size: 80px;
}

#form {
  background-image: url(../assets/Images/REDBLA_1.jpg);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 45vh;
  align-items: center;
}

.form-label {
  color: white;
}

button {
  width: 100%;
  margin-top: 10px;
  height: 50px;
  background-color: transparent;
  border: 3px solid red;
  color: white;
}
</style>
