<template>
  <div>
    <h1 class="form-validation-heading">Employee List</h1>
    <table>
      <tr>
        <td>userId</td>
        <td>title</td>
        <td>body</td>
      </tr>
      <tr v-for="item in userData[0]" :key="item.id">
        <td>{{ item.userId }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userData: []
    }
  },

  mounted() {
    const apicall = async () => {
      const response = await this.$http.get("https://jsonplaceholder.typicode.com/posts")
      const result = await response.data
      this.userData.push(result)
      console.log(this.userData)   //sunt aut facere repellat provident occaecati excepturi optio reprehenderit
    }

    apicall()
  }
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Styles for the container div */
  div {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  /* Styles for the heading */
  .form-validation-heading {
    color: #4285f4; /* Google Blue */
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  /* Styles for the table */
  table {
    width: 100%;
    border-collapse: collapse;
  }

  /* Styles for table cells (td) */
  td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  /* Styles for table header cells (th) */
  th {
    padding: 10px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    font-weight: bold;
  }

  /* Alternating row colors for better readability */
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  /* Hover effect on table rows */
  tr:hover {
    background-color: #e0e0e0;
  }
</style>