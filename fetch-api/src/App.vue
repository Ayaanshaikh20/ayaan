<template>
  <div>
    <h3 class="form-validation-heading">Fetch Data with api call</h3>
    <employee-list></employee-list>
  </div>
</template>

<script>
import EmployeeList from "./components/employeeList.vue"
export default {
    components: {
        EmployeeList
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
