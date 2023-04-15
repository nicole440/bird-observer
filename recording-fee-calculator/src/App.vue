<template>
  <div id="app">
      <div class="container">
        <InputForm />
      </div>
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue'

export default {
  name: 'App',
  components: {
    InputForm,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Red+Hat+Mono:wght@600&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  background: #eee;
  background-image: url(https://scontent.fwbw1-1.fna.fbcdn.net/v/t1.6435-9/89690658_10157175219921680_3024916127651201024_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=MgTQdfH_teIAX-tXofz&_nc_ht=scontent.fwbw1-1.fna&oh=00_AfC_dNoTA01myjff1ZqAAOKWxXJNcHNJ58ixxFsvdWXHHw&oe=646166F7);
  /* background-image: url(https://images.unsplash.com/photo-1593018875302-1867d4de942c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
}
* {
  box-sizing: border-box;
}
</style>
