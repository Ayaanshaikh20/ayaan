<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/todolist" class="link todolist">TodoList</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home/admin" class="link admin" v-if="isAdmin">Admin</router-link>
        </li>
        <li>
          <router-link to="/login" class="link logout">
            <button class="logout-btn" @click="logoutUser()">Logout</button>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      isAdmin: false
    }
  },
  created() {
    this.isAdmin = false
    if (localStorage.getItem('isLoggedinAsAdmin')) {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }
  },
  methods: {
    logoutUser() {
      localStorage.removeItem('isLoggedinAsAdmin')
      localStorage.removeItem('isLoggedinAsUser')
    }
  }
}
</script>



<style scoped>
.navbar {
  background-color: #f8f9fa;
  font-size: 18px;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  margin: 0;
}

.navbar-nav {
  display: flex;
  flex-direction: row;

}

.link {
  margin: 0 10px;
  font-weight: bold;
  color: #0060B6;
  text-decoration: none;
}

.link:hover {
  color: #00A0C6;
}

.logout-btn {
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 1000px;
}
</style>