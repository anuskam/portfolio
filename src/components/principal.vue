<template>
<div class="principal" id="home">
  <navbar></navbar>
  <div class="flecha">
    <a href="#sobreMi" v-smooth-scroll>
      <img src="../assets/media/img/flecha.svg" width="25%" alt="flecha" aria-label="flecha para ir al contenido">
    </a>
    
  </div>
  <div class="background"></div>
  <div class="forest"></div>
  
  <about-me></about-me>
  <skills></skills>
  <!-- <img src="../assets/raiz.svg" width="100%"> -->
  <projects></projects>
  <contact></contact>
</div>

  
</template>

<style lang="sass">

</style>
<style scoped>
*{
  padding: 0;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
}

.flecha {
  position: absolute;
  margin-left: 47%;
  margin-top: 650px;
  z-index: 2;
  animation-name: flecha;
  animation: flecha 3s infinite;
}

@keyframes flecha {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
  
}

.background {
  background-color: #372D3B;
  background-image: url('../assets/media/img/stars.svg');
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  z-index: -1;
}

.forest {
  background-image: url('../assets/media/img/forestGreen.svg');
  position: absolute;
  height: 100%;
  width: 100%;
  top: 37%;
  left: 0;
  background-repeat: no-repeat;
  overflow: hidden;
}


@media (min-width: 800px) and (max-width: 1280px) {
  .forest {
    background-size: 1400px 600px;
    /* overflow: hidden; */
  }
  
}

@media (max-width: 800px) {

  .forest {
    background-size: 1200px 420px;
    top: 50%;
  }

  .flecha {
    margin-left: 45%;
    margin-top: 160%;
  }
}


@media (max-width: 412px) {

  .flecha {
    margin-left: 44%;
    margin-top: 160%;
  }
}

@media (max-width: 361px) {

  .flecha {
    margin-left: 42%;
    margin-top: 150%;
  }
}



</style>