<template>
  <section id="contact">
    <h1 class="about">Contact Us</h1>
  </section>

  <section id="form">
    <div class="container">
      <form @submit.prevent="send">
        <!-- hidden spam trap: people never see or fill this, bots often do -->
        <input
          type="text"
          name="_gotcha"
          v-model="honeypot"
          class="hp-field"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="contact-name" class="form-label">Name</label>
              <input
                type="text"
                name="Name"
                v-model.trim="name"
                class="form-control"
                id="contact-name"
                placeholder="John Doe"
                autocomplete="name"
                maxlength="100"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="contact-email" class="form-label">Email Address</label>
              <input
                type="email"
                name="Email"
                v-model.trim="email"
                class="form-control"
                id="contact-email"
                placeholder="name@example.com"
                autocomplete="email"
                maxlength="150"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="contact-message" class="form-label">Message</label>
            <textarea
              name="Message"
              v-model.trim="message"
              class="form-control"
              id="contact-message"
              placeholder="Type your message..."
              maxlength="5000"
              required
              rows="3"
              style="height: 262px"
            ></textarea>
            <button type="submit" class="btn" :disabled="sending">
              {{ sending ? "Sending..." : "Submit" }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import swal from "sweetalert";

const FORM_URL = "https://formspree.io/f/mkneonwq";

export default {
  data() {
    return { name: "", email: "", message: "", honeypot: "", sending: false };
  },
  mounted() {
    window.scrollTo(0, 0);
    // Logged-in visitors don't have to retype their name and email.
    const account = this.$store.state.user?.user;
    if (account) {
      this.name = account.full_name || "";
      this.email = account.email || "";
    }
  },
  methods: {
    // Sends the message without leaving the site (Formspree's own "thank you"
    // page used to replace ours).
    async send() {
      if (this.sending) return;
      this.sending = true;
      try {
        const res = await fetch(FORM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            Name: this.name,
            Email: this.email,
            Message: this.message,
            _gotcha: this.honeypot,
          }),
        });
        if (res.ok) {
          swal(
            "Message sent!",
            "Thanks for getting in touch. We'll reply to your email soon.",
          );
          this.message = ""; // keep name and email for convenience
        } else {
          const data = await res.json().catch(() => ({}));
          swal(
            "Could not send",
            (data.errors && data.errors[0] && data.errors[0].message) ||
              "Please try again in a moment",
            "error"
          );
        }
      } catch (error) {
        console.error(error);
        swal("Could not send", "Check your connection and try again", "error");
      }
      this.sending = false;
    },
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
}
button:hover {
  box-shadow: 0 0 1rem red;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.hp-field {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}
</style>
