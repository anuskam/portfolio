<template>
  <div class="aboutMe pt-5" id="sobreMi">
    <div class="cabecera">
      <img src="../assets/media/img/meow_bread.png" alt="gatitoSobreMi">
      <h1>Sobre mi</h1>
    </div>

    <div class="gridParent">
      <div class="imagenes">
        <div v-show="creatividad" class="imagenesEditadas" id="creatividad">
          <img src="../assets/media/img/creatividad.png" alt="creatividad" height="600px">
        </div>

        <div v-show="team" class="imagenesEditadas" id="team">
          <img src="../assets/media/img/teamworking.png" alt="team" height="600px">
        </div>

        <div v-show="videogames" class="imagenesEditadas" id="videogames">
          <img src="../assets/media/img/videojuegos.png" alt="videogames" height="600px">
        </div>

        <div v-show="divertida" class="imagenesEditadas" id="divertida">
          <img src="../assets/media/img/divertida.png" alt="divertida" height="600px">
        </div>

        <div v-show="estudios" class="imagenesEditadas" id="estudios">
          <img src="../assets/media/img/estudios.png" alt="estudios" height="600px">
        </div>

        <div v-show="analitica" class="imagenesEditadas" id="analitica">
          <img src="../assets/media/img/videojuegos.png" alt="analitica" height="600px">
        </div>

        <div v-show="helpful" class="imagenesEditadas" id="helpful">
          <img src="../assets/media/img/helpful.png" alt="helpful" height="600px">
        </div>

        <div v-show="boardgames" class="imagenesEditadas" id="boardgames">
          <img src="../assets/media/img/boardgames.png" alt="boardgames" height="600px">
        </div>

        <div v-show="cats" class="imagenesEditadas" id="cats">
          <img src="../assets/media/img/cats.png" alt="cats" height="600px">
        </div>

        <div v-show="flexible" class="imagenesEditadas" id="flexible">
          <img src="../assets/media/img/videojuegos.png" alt="flexible" height="600px">
        </div>

        <div v-show="comunicacion" class="imagenesEditadas" id="comunicacion">
          <img src="../assets/media/img/comunicacion.png" alt="comunicacion" height="600px">
        </div>

        <div class="imagenPrincipal">
          <img src="../assets/media/img/yo.png" alt="imagenBase" height="600px">
        </div>
      </div>

      <div class="aboutContainer">
        <div class="explicacion">Interactúa con los elementos para conocerme</div>
        <div class="aboutBall">
          <p @mouseover="creatividad=true" @mouseleave="creatividad = false" class="btn bolita" id="creatividad">Creatividad</p> 
          <p @mouseover="team=true" @mouseleave="team = false" class="btn bolita" id="team">Trabajo en equipo</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Videojuegos</p>
          <p @mouseover="divertida=true" @mouseleave="divertida = false" class="btn bolita" id="divertida">Divertida</p>
          <p @mouseover="estudios=true" @mouseleave="estudios = false" class="btn bolita" id="estudios">Estudios</p>
          <!-- <p @mouseover="analitica=true" @mouseleave="analitica = false" class="btn bolita" id="analitica">Analítica</p> -->
          <p @mouseover="helpful=true" @mouseleave="helpful = false" class="btn bolita" id="helpful">Helpful</p>
          <p @mouseover="boardgames=true" @mouseleave="boardgames = false" class="btn bolita" id="boardgames">Juegos de mesa</p>
          <p @mouseover="cats=true" @mouseleave="cats = false" class="btn bolita" id="cats">Gatos</p>
          <!-- <p @mouseover="flexible=true" @mouseleave="flexible = false" class="btn bolita" id="flexible">Flexible</p> -->
          <p @mouseover="comunicacion=true" @mouseleave="comunicacion = false" class="btn bolita" id="comunicacion">Comunicación</p>
        </div>

        <div class="flecha">
          <img src="../assets/media/img/flecha3.png" alt="flecha" width="300px">
        </div>
    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      creatividad: false,
      team: false,
      videogames: false, 
      divertida: false,
      estudios: false,
      analitica: false,
      helpful: false,
      boardgames: false,
      cats: false,
      flexible: false,
      comunicacion: false,
    }
  },
  
}
</script>


<style scoped>
.aboutMe {
  min-height: 100vh;
  background-color: #372D3B;
  border: 1px solid #372D3B;
}

.cabecera img {
  display: inline;
  width: 40px;
  margin-bottom: 30px;
}

.cabecera {
  white-space: nowrap;
  margin-top: 6vh;
  /* align-items: center; */
  text-align: center;
}

h1{
  display: inline;
  font-size: 50px;
  margin-left: 1%;
  color: white;
  /* font-family: 'Raleway', sans-serif; */
  font-family: 'Yellowtail', cursive;
}

.gridParent {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.imagenPrincipal{
  width: 300px;
  /* height: 2000px; */
  margin-left: 10vw;
}

.aboutBall{
  position: absolute;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
}

.aboutBall > p {
  margin: 10px 3vw;
}

.imagenesEditadas{
  position: absolute;
  width: 300px;
  height: 2000px;
  margin-left: 10vw;
}

.btn {
  background-color: #D9A129;
  padding: 6px 12px;
}

.explicacion {
  padding-top: 5%;
  color: white;
  margin-left: 20%;
}

.flecha img {
  margin-top: 250px;
  margin-right: 50px;
}

@media only screen and (max-width: 880px) {
  .gridParent {
    display: grid;
    grid-template-columns: 1fr;
  }

  .aboutContainer {
    grid-row: 1;
  }

  .imagenPrincipal{
    margin-top: 20vh;
    margin-left:60px;
    margin-bottom: 5vh;
  }

  .imagenesEditadas{
    margin-top: 20vh;
    margin-left:60px;
    margin-bottom: 5vh;
  }

  .flecha img {
    margin-top: 0;
    visibility: hidden;
  }


}

@media only screen and (max-width: 441px) {

  .cabecera {
    margin-top: 14vh;
  }

  .imagenPrincipal img{
    /* margin-top: 2vh; */
    margin-left: -30px;
    height: 450px;
  }

  .imagenesEditadas img{
    /* margin-top: 2vh; */
    margin-left: -30px;
    height: 450px;
  }
}


@media only screen and (max-width: 376px) {
  .cabecera {
    margin-top: 12vh;
  }

  .imagenPrincipal img{
    margin-top: 5vh;
    margin-left: -15px;
    height: 400px;
  }

  .imagenesEditadas img{
    margin-top: 5vh;
    margin-left: -15px;
    height: 400px;
  }
}


@media only screen and (max-width: 361px) {
  .explicacion {
    margin-left: 12%;
  }

  .cabecera {
    margin-top: 15vh;
  }

  .imagenPrincipal img{
    margin-top: 5vh;
    margin-left: -30px;
    height: 400px;
  }

  .imagenesEditadas img{
    margin-top: 5vh;
    margin-left: -30px;
    height: 400px;
  }
}

/* @media only screen and (max-width: 321px) {
  .cabecera {
    margin-top: 8vh;
  }

  .imagenPrincipal img{
    margin-top: 5vh;
    margin-left: -25px;
    height: 350px;
  }

  .imagenesEditadas img{
    margin-top: 5vh;
    margin-left: -25px;
    height: 350px;
  }

} */





</style>