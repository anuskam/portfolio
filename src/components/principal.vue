<template>
<div class="principal" id="home">
  <navbar></navbar>
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
    /* overflow: hidden; */
  }
}

@media (max-width: 441px) {

  .forest {
    background-size: 1200px 420px;
    top: 57%;
    /* overflow: hidden; */
  }
}


@media (max-width: 320px) {

  .forest {
    background-size: 1200px 420px;
    top: 30%;
    /* overflow: hidden; */
  }
}



</style>