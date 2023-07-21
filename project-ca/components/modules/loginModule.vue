<template>
  <div class="login-page">
    <h2>Login page</h2>
    <label for="Email">Email</label>
    <input type="email" id="email" placeholder="Enter Email" v-model="email">
    <label for="Password">Password</label>
    <input type="password" id="password" placeholder="Enter Password" v-model="password">
    <div v-if="error.length">
      {{ error }}
    </div>
    <button :disabled="!email && !password" class="login-btn" @click="login()">Login</button>

  </div>
</template>
  
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      allowedUserEmail: "ayaan123@yahoo.com",
      allowedUserPassword: "1234",
      allowedAdminEmail: "ayaan.s@codearray.tech",
      allowedAdminPassword: "12345",
      error: ""
    }
  },
  methods: {
    login() {
      if (this.email === this.allowedUserEmail && this.password === this.allowedUserPassword) {
        localStorage.setItem("isLoggedinAsUser", true)
        localStorage.removeItem("isLoggedinAsAdmin")
        this.$router.push("/todolist");
        console.log(this.$router.options.routes)
      } else if (this.email === this.allowedAdminEmail && this.password === this.allowedAdminPassword) {
        localStorage.setItem("isLoggedinAsAdmin", true)
        localStorage.removeItem("isLoggedinAsUser")
        this.$router.push("/home")
      } else {
        this.error = "Invalid Credentials";
        setTimeout(() => {
          this.error = "";
        }, 3000);
      }
    }
  }
}
</script>
  
<style scoped>
.login-page {
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  margin-top: 150px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #66afe9;
  box-shadow: 0 0 5px #66afe9;
}

.error-message {
  margin-top: 10px;
  color: red;
}

.login-btn {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #0056b3;
}
</style>