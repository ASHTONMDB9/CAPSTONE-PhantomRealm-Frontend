<template>
    <div class="container">
<h1 class="about">Login</h1>
<div id="form" class="container-fluid">
    <form @submit.prevent="login()">
        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" v-model="email" class="form-control" id="email" placeholder="johndoe23@gmail.com" required>
                        </div>
                    <div class="mb-3">
                        <label for="pass" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="pass" placeholder="password" required>
                    </div>
                    <button id="login" type="submit" class="btn">Login</button>
                </form>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
    user() {
      console.log(this.$store.state.user)
      return this.$store.state.user;
    }
    },
    mounted(){
        window.scrollTo(0,0)
    },
    data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      
    },
    
},
}
</script>
<style scoped>
.container {
    padding-top: 165px;

}
.about {
    color: black;
    text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red, 10px 0px 10px rgb(36, 36, 36);
    font-family: phantom;
    font-size: 100px;
}
#form {
    background-color: red;
    background-image: url(../assets/Images/REDBLA_1.jpg);
    background-attachment: fixed;
    background-size: cover;    
    display: flex;
    justify-content: center;
    height: 55vh;
    align-items: center;
}
.form-label {
    filter: drop-shadow(0px 0px 0.2rem white);
    color: white;
}
button {
    width: 100%;
    margin-top: 10px;
    height: 50px;
    background-color: transparent;
    border: 3px solid red;
    color: white;
    border-radius: 5px;
    text-shadow: 0 0 4px white, 0 0 4px white, 0 0 4px white, 10px 0px 10px rgb(36, 36, 36);
}
</style>