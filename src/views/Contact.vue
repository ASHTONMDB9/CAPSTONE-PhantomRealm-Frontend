<template>
  <section id="contact">
    <h1 class="about">Contact Us</h1>
  </section>

  <section id="form">
    <div class="container">
      <form action="https://formspree.io/f/mkneonwq" method="POST">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                type="name"
                name="Name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email Address</label
              >
              <input
                type="email"
                name="Email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Message</label
            >
            <textarea
              type="text"
              name="Message"
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Type your message..."
              required
              rows="3"
              style="height: 262px"
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
#contact {
  height: 75vh;
  background-image: url(../assets/Images/reaper.png);
  background-size: stretch;
  background-attachment: fixed;
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about {
  color: black;
  text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red,
    10px 0px 10px rgb(36, 36, 36);
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
  align-items: center;
}
.container {
  padding-top: 53px;
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
  text-shadow: 0 0 4px white, 0 0 4px white, 0 0 4px white,
    10px 0px 10px rgb(36, 36, 36);
}
button:hover {
  width: 100%;
  margin-top: 10px;
  height: 50px;
  background-color: black;
  border: 3px solid red;
  color: white;
  border-radius: 5px;
  text-shadow: 0 0 4px white, 0 0 4px white, 0 0 4px white,
    10px 0px 10px rgb(36, 36, 36);
}
</style>
