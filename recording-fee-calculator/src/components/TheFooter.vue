<template>
  <footer>
    <section class="contact">
      <p><span>Contact</span></p>
      <a href="mailto:name@email.com">name@email.com</a>
      <p>(XXX) XXX-XXXX</p>
    </section>
  </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
footer {
    color: white;
    background-color: black;
    opacity: 0.9;
    min-height: 200px;
    margin: 30px 0 0;
    display: none; /* TODO work on the footer positioning */
}
.contact {
    float: left;
    padding: 35px;
}
.mailing-list {
    float: right;
    padding: 35px;
}

</style>