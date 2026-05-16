<template>
  <div class="container">
    <h1 class="about">Reset Password</h1>

    <div id="form" class="container-fluid">
      <form @submit.prevent="resetPassword">
        <div class="mb-3">
          <label class="form-label">New Password</label>

          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="New password"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Confirm Password</label>

          <input
            type="password"
            v-model="confirmPassword"
            class="form-control"
            placeholder="Confirm password"
            required
          />
        </div>

        <button type="submit" class="btn">Reset Password</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
    };
  },

  methods: {
    resetPassword() {
      if (!this.password || !this.confirmPassword) {
        return;
      }

      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const token = this.$route.params.token;

      this.$store.dispatch("resetPassword", {
        token,
        password: this.password,
      });
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
  height: 55vh;
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
