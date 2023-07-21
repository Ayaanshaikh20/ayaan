<template>
  <body>
    <div class="container">
      <nav class="navbar">
        <router-link to="/login" class="link logout">
            <button class="logout-btn" @click="logoutUser()">Logout</button>
        </router-link>
      </nav>
      <div class="input_container">
        <h1>My To Do List</h1>
        <input id="inputBox" type="text" placeholder="Add a new task.." v-model="task" @keyup.enter="addtask($event)"
          ref="inputbox" />
        <button id="addButton" @click="addtask()">{{ currentbtn }}</button>
      </div>
      <ul class="todolist" id="todoList">
        <li class="todostask" v-for="(todo, taskindex) in todos" :key="taskindex">
          <p class="para" :id="taskindex" :class="{ active: todo.iscompleted }">{{ todo.taskname }}</p>
          <button class="edit" @click="editTask(todo.taskname, taskindex)">Edit</button>
          <button class="delete" @click="removeTask(taskindex)">Remove</button>
          <button class="completed" @click="completedTask(todo.taskname)" ref="clickvalue">{{ todo.iscompleted ?
            'Incompleted' : 'Completed' }}</button>
        </li>
      </ul>
    </div>
  </body>
</template>
    
<script>
export default {

  data() {
    return {
      task: '',
      todos: [],
      isempty: false,
      currentbtn: 'Add',
      apicalled: false

    }
  },
  methods: {
    logoutUser() {
      localStorage.removeItem('isLoggedinAsAdmin')
      localStorage.removeItem('isLoggedinAsUser')
    },
    addtask() {
      if (this.task === '') {
        this.isempty = true;
        alert('Please add some task')
        return
      }
      else {
        this.isempty = false;
        const details = {
          taskid: this.task,
          taskname: this.task,
          iscompleted: false
        }
        console.log('before if condition', details)
        if (localStorage.getItem("tasks") !== null) {
          this.todos = JSON.parse(localStorage.getItem("tasks"));
          console.log(this.todos)
          let repeated = this.todos.filter((e) => {
            return this.task === e.taskname;
          });
          if (repeated.length > 0) {
            alert("repeated");
            return;
          }
        }
        this.todos.push(details)
        localStorage.setItem('tasks', JSON.stringify(this.todos))
        this.currentbtn = 'Add'
        this.task = ''
      }
    },
    editTask(edittask, index) {
      if (this.todos.length != 0) {
        this.task = edittask
        this.todos.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify(this.todos))
        this.$refs.inputbox.focus()
        this.currentbtn = 'edit'
      } else {
        alert('Please add some tasks')
      }
    },
    removeTask(index) {
      console.log("------remove")
      if (this.todos.length != 0) {
        this.todos.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify(this.todos))
      }
      if (this.todos.length == 0) {
        localStorage.removeItem('tasks')
        localStorage.removeItem('apicalled')
      }
    },
    completedTask(todo) {
      const completedtask = this.todos.find((Todo) => Todo.taskname === todo)
      completedtask.iscompleted = !completedtask.iscompleted
      localStorage.setItem('tasks', JSON.stringify(this.todos))
    },
    callingApi() {
    if (JSON.parse(localStorage.getItem('tasks')) == null) {
      localStorage.setItem('tasks', JSON.stringify(this.todos))
      console.log('called api')
      const apicall = async () => {
        const response = await this.$http.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        const result = await response.data
        console.log(result)
        const removeItem = result.findIndex(item => item.name == 'Rosa Park')
        console.log(result.length)
        result.splice(removeItem, 1)  
        for (let i in result) {
          const details = {
            taskid: result[i].name,
            taskname: result[i].name,
            iscompleted: false
          }
          this.todos.push(details)
          
        }
        localStorage.setItem('tasks', JSON.stringify(this.todos))
      }

      apicall()
    } else {
      this.todos = JSON.parse(localStorage.getItem('tasks')) 
    }
    }
  },
  mounted() {
      this.callingApi()
  }
}
</script>
    
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.navbar {
  background-color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  margin: 0;
  width: 200%;
}

.logout-btn {
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 1200px;
}

body {
  background: rgb(138, 255, 246);
  background: linear-gradient(90deg,
      rgba(138, 255, 246, 1) 2%,
      rgba(165, 242, 244, 1) 47%,
      rgba(232, 232, 232, 1) 100%);
  height: 710px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.input_container {
  width: 100%;
  max-width: 500px;
  text-align: center;
  padding: 20px;
}

.input_container input {
  border: none;
  outline: none;
  padding: 12px;
  margin-block: 12px;
  border-radius: 4px;
  font-size: 16px;
}

.input_container input[type="text"] {
  width: 70%;
}

.input_container input[type="button"] {
  background-color: #ff9100;
  font-weight: 700;
  margin-left: 15px;
  padding: 12px 25px;
}

#addButton:hover {
  background-color: #ac6200;
}

#addButton {
  background-color: #ff9100;
  font-weight: 700;
  margin-left: 15px;
  padding: 12px 25px;
}

.todolist {
  width: 100%;
  max-width: 450px;
  /* display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center; */
}

.todostask {
  list-style-type: none;
  cursor: pointer;
  border-radius: 8px;
  border: 0.125px solid #a19f9f;
  margin-block-end: 12px;
  padding: 6px 12px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 10px 8px 5px 0px black;
  border: none;
}

.para {
  flex-grow: 1;
  padding: 2px;
}

.active {
  text-decoration: line-through;
}

.completed {
  margin-left: 15px;
  padding: 2px;
  background-color: orange;
  color: white;
  border-color: white;
  cursor: pointer;
}

.edit {
  margin-right: 2px;
  padding: 2px;
  width: 40px;
  background-color: green;
  color: white;
  border-color: white;
  cursor: pointer;
}

.delete {
  margin-right: 15px;
  padding: 2px;
  background-color: red;
  color: white;
  border-color: white;
  cursor: pointer;
}
</style>
    