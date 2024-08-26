<template>
    <div id="app">
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  </template>
  
  <script>
  import HomePage from './components/HomePage.vue';
  import AboutPage from './components/AboutPage.vue';

  
  export default {
    components: {
      HomePage,
      AboutPage,
     
    }
  };
  </script>
  
  <style>
  #app {
    scroll-behavior: smooth; /* Suaviza el scroll entre secciones */
  }
  
  section {
    height: 100vh; /* Cada sección ocupa toda la ventana */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  