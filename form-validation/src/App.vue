<template>
  <div>
    <h2 class="form-validation-heading">Form Validation</h2>
    <login-module></login-module>
  </div>
</template>

<script>
import loginModule from './components/loginModule.vue'
export default {
  components: {
    loginModule
  }
}
</script>

<style scoped>
.form-validation-heading {
  font-size: 25px;
  font-weight: bold;
  color: #008000; /* Green color for success message */
  text-align: center;
  margin-bottom: 20px;
}
</style>
