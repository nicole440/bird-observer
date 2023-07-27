<template>
  <div id="app">
    <header>
      <h1>Recording Fee Calculator</h1>
    </header>
    <div class="container">
      <InputForm />
      <!-- <DocumentList /> -->
    </div>

    <!-- <div>
      <router-link v-bind:to="{ name: 'login' }" v-if="$store.state.token == ''">Login</router-link>
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
    </div> -->
    
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue'
// import DocumentList from './components/DocumentList.vue'

export default {
  name: 'App',
  documents: [],
  components: {
    InputForm,
    // DocumentList
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Red+Hat+Mono:wght@600&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  background-image: url(https://images.unsplash.com/photo-1593018875302-1867d4de942c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  margin: 0 auto;
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

.form {
  position: relative;
  margin-top: 25px;
}

* {
  box-sizing: border-box;
  margin: 0 auto;
}

header {
  position: absolute;
  margin: 0 auto;
  width: 100vw;
}

 header > h1 {
  font-family: Raleway, sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 3em;
  color: #edf4f8;
  background-color: rgba(224, 77, 84, 0.329);
  padding: 10px;
}

@media (max-width: 600px) {
  header > h1 {
    font-size: 2em;
  }
}

@media (max-width: 390px) {
  header > h1 {
    font-size: 1.5em;
  }
}


</style>
