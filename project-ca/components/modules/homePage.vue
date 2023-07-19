<template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="home/todolist" class="link" :is="isDisabled ? 'span' : 'router-link'">TodoList</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="link">Admin</router-link>
        </li>
        <li>
            <router-link to="/login" class="link"><button class="login-btn">Logout</button></router-link>
        </li>
      </ul>
    </div>
  </div>

</nav>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        checkRoute() {
            console.log(this.$router.path)
        }
    },
    mounted() {
    console.log(this.$router.path)
    }
}
</script>

<style scoped>
.link {
  margin: 0 10px;
  font-weight: bold;
}

.login-btn {
    margin-top: 5px;
    width: 100px;
    height: 40px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin-left: 1080px;
}

a {
    color: #0060B6;
    text-decoration: none;
    font-size: 21px;
}

a:hover {
    color:#00A0C6; 
    text-decoration:none; 
    cursor:pointer;  
}

</style>
