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
            error: "",
            isloggedin: false
        }
    },
    methods: {
        login() {
      if (this.email === this.allowedUserEmail && this.password === this.allowedUserPassword) {
                localStorage.setItem("usertoken", 123456)
                this.$router.replace("/home");
                this.isloggedin = true
                console.log(this.$router.options.routes)
      }else if (this.email === this.allowedAdminEmail && this.password === this.allowedAdminPassword) {
                localStorage.setItem("usertoken", 123456)
                this.$router.push("/admin")
            }else {
              this.error = "Invalid Credentials";
              setTimeout(() => {
                  this.error = "";
              }, 3000);
      }
    }
    }
  }
  </script>
  
  <style>
  .login-page {
    
    width: 350px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="email"],
  input[type="password"] {
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  #email {
    width: 73%;
    margin-left: 33px;
    margin-right: 5px;
    
  }
  
  input[type="email"]:focus,
  input[type="password"]:focus {
    outline: none;
    border-color: #66afe9;
    box-shadow: 0 0 5px #66afe9;
  }
  
  input[type="submit"] {
    padding: 10px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049;
  }
  
  .login-btn {
  margin-top: 10px;
  width: 120px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
  </style>