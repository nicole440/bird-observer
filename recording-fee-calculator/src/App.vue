<template>
  <div class="app">
    <head>
      <title>Lancaster County Recording Fee Calculator</title>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Recording Fee Calculator</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Aboreto&family=Amatic+SC&family=Merriweather:wght@900&family=Quicksand&family=Reenie+Beanie&display=swap"
        rel="stylesheet"
      />
    </head>
    <the-header />
    <input-form />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import InputForm from "./components/InputForm.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    InputForm,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Raleway:wght@300&family=Red+Hat+Mono:wght@600&display=swap");

body {
  background-image: url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: grid;
  margin: 0 auto;
}
* {
  box-sizing: border-box;
  text-align: center;
}
a {
  text-decoration: none;
  color: #00addf;
}
a:hover {
  color: #000;
}
h2,
h3,
h4,
p,
a,
label {
  font-family: "Raleway", sans-serif;
}
h2 {
  font-weight: bold;
  font-size: 2em;
}
span {
  font-family: "Indie Flower", cursive;
  font-size: 1.5em;
  font-weight: bold;
}

@media only screen and (max-width: 480px) {
  .header-container,
  footer {
    width: 100%;
    min-height: 200px;
    overflow: visible;
  }
  .header-img {
    max-height: 100%;
  }
  .header-text {
    min-width: 450px;
  }
  h1 {
    font-size: 2em;
  }
  h2,
  h3,
  h4,
  p,
  a {
    font-size: 1.5em;
  }
  .about-text {
    min-width: 85%;
  }
}
</style>
