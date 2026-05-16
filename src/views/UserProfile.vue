<template>
  <div class="profile-page" v-if="currentUser">
    <!-- HEADER -->
    <h1 class="about d-flex justify-content-center">My Account</h1>

    <!-- PROFILE CONTENT -->
    <div class="container-fluid profile-container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="bg-dark text-light rounded p-4 profile-card">
            <!-- TOP PROFILE SECTION -->
            <div
              class="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5"
            >
              <div class="d-flex align-items-center flex-column flex-md-row">
                <!-- PROFILE ICON -->
                <div class="profile-avatar">
                  {{ currentUser.full_name.charAt(0) }}
                </div>

                <!-- USER DETAILS -->
                <div class="ms-md-4 mt-3 mt-md-0 text-center text-md-start">
                  <h2 class="mb-1">
                    {{ currentUser.full_name }}
                  </h2>

                  <p class="text-secondary mb-2">
                    {{ currentUser.email }}
                  </p>

                  <span class="badge bg-danger">
                    {{ currentUser.user_type }}
                  </span>
                </div>
              </div>

              <!-- LOGOUT BUTTON -->
              <button
                @click="Logout"
                class="btn btn-outline-danger mt-4 mt-md-0"
              >
                Logout
              </button>
            </div>

            <!-- ADDED BUTTONS (BOTTOM OF CARD) -->
            <!-- EDIT FORM -->
            <div v-if="isEditing" class="mt-4">
              <input
                v-model="editForm.email"
                class="form-control mb-2"
                placeholder="Email" required
              />
              <input
                v-model="editForm.full_name"
                class="form-control mb-2"
                placeholder="Full Name" required
              />

              <input
                v-model="editForm.phone_number"
                class="form-control mb-2"
                placeholder="Phone Number" required
              />

              <input
                v-model="editForm.password"
                type="password"
                class="form-control mb-2"
                placeholder="Password (required)" required
              />

              <div class="d-flex gap-3">
                <button class="btn btn-outline-danger" @click="saveProfile">
                  Save
                </button>

                <button
                  class="btn btn-outline-danger"
                  @click="isEditing = false"
                >
                  Cancel
                </button>
              </div>
            </div>

            <!-- ACTION BUTTONS (BOTTOM OF CARD) -->
            <div class="d-flex justify-content-center gap-3 mt-4">
              <button class="btn btn-outline-danger" @click="editProfile">
                Edit Profile
              </button>

              <button class="btn btn-outline-danger" @click="deleteAccount">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- LOADING -->
  <div v-else class="loading">
    <h2>Loading Profile...</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      editForm: {
        email: "",
        full_name: "",
        phone_number: "",
      },
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.user?.user;
    },
  },

  methods: {
    Logout() {
      this.$store.commit("Logout");
      localStorage.removeItem("vuex");
      this.$router.push("/Login");
    },

    // OPEN EDIT MODE
    editProfile() {
      this.isEditing = true;

      this.editForm.email = this.currentUser.email;
      this.editForm.full_name = this.currentUser.full_name;
      this.editForm.phone_number = this.currentUser.phone_number || "";
      this.editForm.user_type = this.currentUser.user_type;
      this.editForm.password = ""; // important
    },

    // SAVE UPDATED PROFILE
    saveProfile() {
      this.$store.dispatch("updateUser", {
        id: this.currentUser.id,
        token: this.$store.state.Token,
        email: this.editForm.email,
        password: this.editForm.password,
        full_name: this.editForm.full_name,
        phone_number: this.editForm.phone_number,
        user_type: this.currentUser.user_type,
      });

      this.isEditing = false;
    },

    // DELETE ACCOUNT
    deleteAccount() {
      this.$store.dispatch("deleteUser", {
        id: this.currentUser.id,
        token: this.$store.state.Token,
      });
    },
  },
};
</script>

<style scoped>
.profile-page {
  background-color: black;
  min-height: 100vh;
  padding-bottom: 60px;
}

/* TITLE */
.about {
  color: black;
  text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red,
    10px 0px 10px rgb(36, 36, 36);
  font-family: phantom;
  font-size: 90px;
  padding-top: 130px;
  margin-bottom: 60px;
}

/* CONTAINER */
.profile-container {
  margin-top: 20px;
}

/* MAIN CARD */
.profile-card {
  border: 1px solid red;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.2);
}

/* AVATAR */
.profile-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-family: phantom;
  color: white;
  border: 3px solid white;
}

/* BUTTON */
.btn-outline-danger {
  border: 2px solid red;
  color: white;
  width: 150px;
  font-family: detail;
}

.btn-outline-danger:hover {
  background-color: red;
  color: white;
}

/* LOADING */
.loading {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  font-family: phantom;
}

/* MOBILE */
@media (max-width: 768px) {
  .about {
    font-size: 55px;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    font-size: 35px;
  }

  .profile-card {
    padding: 20px !important;
  }
}
</style>
