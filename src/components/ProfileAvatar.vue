<template>
  <div class="avatar-wrap">
    <div class="profile-avatar">
      <img v-if="image" :src="image" alt="Profile picture" />
      <span v-else>{{ initial }}</span>
    </div>

    <div class="avatar-actions">
      <button
        type="button"
        class="avatar-btn"
        :disabled="busy"
        @click="$refs.file.click()"
      >
        {{ image ? "Change photo" : "Add photo" }}
      </button>
      <button
        v-if="image"
        type="button"
        class="avatar-btn"
        :disabled="busy"
        @click="remove"
      >
        Remove
      </button>
    </div>

    <input
      ref="file"
      type="file"
      accept="image/png,image/jpeg,image/webp"
      hidden
      @change="onFile"
    />
  </div>
</template>

<script>
import swal from "sweetalert";

// Same API address the store uses. Set VUE_APP_API_URL in a .env file to use a local backend.
const API =
  process.env.VUE_APP_API_URL ||
  "https://capstone-phantomrealm-backend.onrender.com";

const SIZE = 256; // the saved picture is a SIZE x SIZE square
const MAX_INPUT_BYTES = 10 * 1024 * 1024;
const MAX_OUTPUT_CHARS = 70000; // the server accepts up to 90000

export default {
  props: ["name"],
  data() {
    return { image: null, busy: false };
  },
  computed: {
    // Shown whenever there is no picture (same as before this feature)
    initial() {
      return (this.name || "").charAt(0);
    },
    headers() {
      return {
        "Content-Type": "application/json",
        "x-auth-token": this.$store.state.Token,
      };
    },
  },
  async mounted() {
    try {
      const res = await fetch(`${API}/profile-image`, {
        headers: this.headers,
      });
      if (res.ok) this.image = (await res.json()).image;
    } catch (error) {
      console.error("Could not load profile picture:", error);
    }
  },
  methods: {
    // Centre-crop to a square and shrink, so uploads stay small and fast.
    toSquareJpeg(file) {
      return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
          URL.revokeObjectURL(url);
          const side = Math.min(img.width, img.height);
          const canvas = document.createElement("canvas");
          canvas.width = canvas.height = SIZE;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#111"; // fills transparent PNG areas
          ctx.fillRect(0, 0, SIZE, SIZE);
          ctx.drawImage(
            img,
            (img.width - side) / 2,
            (img.height - side) / 2,
            side,
            side,
            0,
            0,
            SIZE,
            SIZE,
          );
          let quality = 0.85;
          let data = canvas.toDataURL("image/jpeg", quality);
          while (data.length > MAX_OUTPUT_CHARS && quality > 0.4) {
            quality -= 0.1;
            data = canvas.toDataURL("image/jpeg", quality);
          }
          data.length > MAX_OUTPUT_CHARS
            ? reject(new Error("too large"))
            : resolve(data);
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          reject(new Error("not an image"));
        };
        img.src = url;
      });
    },

    async onFile(event) {
      const file = event.target.files[0];
      event.target.value = ""; // lets the same file be picked again later
      if (!file) return;

      if (!file.type.startsWith("image/") || file.size > MAX_INPUT_BYTES) {
        swal(
          "Invalid image",
          "Please choose a JPEG, PNG or WebP under 10MB",
          "error",
        );
        return;
      }

      this.busy = true;
      try {
        const image = await this.toSquareJpeg(file);
        const res = await fetch(`${API}/profile-image`, {
          method: "PUT",
          headers: this.headers,
          body: JSON.stringify({ image }),
        });
        if (res.ok) {
          this.image = image;
        } else {
          const data = await res.json().catch(() => ({}));
          swal("Could not save photo", data.msg || "Please try again", "error");
        }
      } catch (error) {
        console.error(error);
        swal(
          "Could not use that image",
          "Please try a different picture",
          "error",
        );
      }
      this.busy = false;
    },

    async remove() {
      const ok = await swal({
        title: "Remove your profile photo?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (!ok) return;

      this.busy = true;
      try {
        const res = await fetch(`${API}/profile-image`, {
          method: "DELETE",
          headers: this.headers,
        });
        if (res.ok) {
          this.image = null; // back to the initial
        } else {
          swal("Error", "Could not remove your photo", "error");
        }
      } catch (error) {
        console.error(error);
        swal("Error", "Could not remove your photo", "error");
      }
      this.busy = false;
    },
  },
};
</script>

<style scoped>
.avatar-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
  overflow: hidden;
}
.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
.avatar-btn {
  background-color: transparent;
  border: 2px solid red;
  width: 150px;
  font-size: 20px;
  font-family: detail;
  color: white;
  border-radius: 6px;
}
.avatar-btn:hover:not(:disabled) {
  background-color: red;
}
.avatar-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .profile-avatar {
    width: 80px;
    height: 80px;
    font-size: 35px;
  }
}
</style>
