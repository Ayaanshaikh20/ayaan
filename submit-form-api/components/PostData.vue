<template>
    <div>
      <h1 class="form-validation-heading">PostData of User</h1>
      <form @submit.prevent="" class="custom-form">
        <label for="city">City</label>
        <input type="text" name="city" id="city" placeholder="Please enter the city" v-model="city">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Please enter the name" v-model="name">
        <button type="submit">Submit</button>
      </form>
      <data-list :city="city" :name="name"></data-list>
    </div>
  </template>

<script>
import DataList from './DataList.vue'
export default {
  components: { DataList },
    data() {
        return {
            posts: {
                city: null,
                name: null
            }
        }
    },
    methods: {
        submitForm() {
      // Emit an event with the city and name data
      this.$emit('data-submitted', this.posts);
    }
    }
}
</script>

<style scoped>
.form-validation-heading {
  font-size: 25px;
  font-weight: bold;
  color: grey; /* Green color for success message */
  text-align: center;
  margin-bottom: 20px;
}
.custom-form {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }

  .form-validation-heading {
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="text"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }
</style>