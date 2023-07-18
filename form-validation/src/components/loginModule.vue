<template>
    <form @submit.prevent = login class="login-form">
      <h2 class="form-heading">Login</h2>
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="type your email" class="form-input" v-model="userdetails.email">
      <br>
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="type your password" class="form-input" v-model="userdetails.password">
      <br>
      <p v-if="error">{{ error }}</p>
      <button class="form-button">Login</button>
      <!-- <h3>{{ userdetails.email }}</h3> -->
      <!-- <h3>{{ userdetails.password }}</h3> -->
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userdetails: {
          email:null,
          password:null
        },
        error: null
      }
    },
    methods: {
      login() {
        if(this.userdetails.email === null && this.userdetails.password === null) {
          this.error = 'both the values are empty'
          return
        }
        if(this.userdetails.email === null) {
          this.error = 'email is empty'
          return
        }
        if(this.userdetails.password === null) {
          this.error = 'password is empty'
          return
        }
        console.log('Yayy you are logged in')
        console.log('Email: ', this.userdetails.email)
        console.log("Password: ", this.userdetails.password)

      }
    }
  }
  </script>
  
  <style scoped>
  .login-form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-heading {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.form-input {
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0056b3;
}
  </style>