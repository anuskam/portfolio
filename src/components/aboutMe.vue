<template>
  <div class="aboutMe pt-5" id="sobreMi">
    <div class="cabecera">
      <img src="../assets/media/img/meow_bread.png">
      <h1>Sobre mi</h1>
    </div>

    <div class="gridParent">
      <div class="imagenes">
        <div v-show="creatividad" class="imagenesEditadas" id="creatividad">
          <img src="../assets/media/img/creatividad.png" height="600px">
        </div>

        <div v-show="team" class="imagenesEditadas" id="team">
          <img src="../assets/media/img/teamworking.png" height="600px">
        </div>

        <div v-show="videogames" class="imagenesEditadas" id="videogames">
          <img src="../assets/media/img/videojuegos.png" height="600px">
        </div>

        <div v-show="curiosidad" class="imagenesEditadas" id="curiosidad">
          <img src="../assets/media/img/videojuegos.png" height="600px">
        </div>

        <div v-show="estudios" class="imagenesEditadas" id="estudios">
          <img src="../assets/media/img/estudios.png" height="600px">
        </div>

        <div v-show="analitica" class="imagenesEditadas" id="analitica">
          <img src="../assets/media/img/videojuegos.png" height="600px">
        </div>

        <div v-show="helpful" class="imagenesEditadas" id="helpful">
          <img src="../assets/media/img/videojuegos.png" height="600px">
        </div>

        <div v-show="boardgames" class="imagenesEditadas" id="boardgames">
          <img src="../assets/media/img/boardgames.png" height="600px">
        </div>

        <div v-show="cats" class="imagenesEditadas" id="cats">
          <img src="../assets/media/img/cats.png" height="600px">
        </div>

        <div v-show="flexible" class="imagenesEditadas" id="flexible">
          <img src="../assets/media/img/videojuegos.png" height="600px">
        </div>

        <div v-show="videogames" class="imagenesEditadas" id="comunicacion">
          <img src="../assets/media/img/videojuegos.png" height="600px">
        </div>

        <div class="imagenPrincipal">
          <img alt="avatar logo" src="../assets/media/img/yo.png" height="600px">
        </div>
      </div>

      <div class="aboutContainer">
        <div class="explicacion">Interactúa con los elementos para conocerme</div>
        <div class="aboutBall">
          <p @mouseover="creatividad=true" @mouseleave="creatividad = false" class="btn bolita" id="creatividad">Creatividad</p> 
          <p @mouseover="team=true" @mouseleave="team = false" class="btn bolita" id="team">Trabajo en equipo</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Videojuegos</p>
          <p @mouseover="curiosidad=true" @mouseleave="curiosidad = false" class="btn bolita" id="curiosidad">Curiosa</p>
          <p @mouseover="estudios=true" @mouseleave="estudios = false" class="btn bolita" id="estudios">Estudios</p>
          <p @mouseover="analitica=true" @mouseleave="analitica = false" class="btn bolita" id="analitica">Analítica</p>
          <p @mouseover="helpful=true" @mouseleave="helpful = false" class="btn bolita" id="helpful">Helpful</p>
          <p @mouseover="boardgames=true" @mouseleave="boardgames = false" class="btn bolita" id="boardgames">Juegos de mesa</p>
          <p @mouseover="cats=true" @mouseleave="cats = false" class="btn bolita" id="cats">Gatos</p>
          <p @mouseover="flexible=true" @mouseleave="flexible = false" class="btn bolita" id="flexible">Flexible</p>
          <p @mouseover="comunicacion=true" @mouseleave="comunicacion = false" class="btn bolita" id="comunicacion">Comunicación</p>
        </div>
    </div>

    

    </div>
    
    
     
    <!-- <div v-show="hover2" class="subirTexto" id="bolita2">
      <img src="../assets/corona.png">
    </div>
       
    <div v-show="hover3" class="subirTexto" id="bolita3">
      <img src="../assets/angelitas.png">
    </div> -->

  </div>
</template>

<script>
export default {
  data(){
    return {
      creatividad: false,
      team: false,
      videogames: false, 
      curiosidad: false,
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
  border: 1px solid black;
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
    margin-bottom: 5vh;
  }

  .imagenesEditadas{
    margin-top: 20vh;
    margin-bottom: 5vh;
  }
}

@media only screen and (max-width: 441px) {

  .cabecera {
    margin-top: 14vh;
  }

  .imagenPrincipal img{
    margin-top: 15vh;
    height: 450px;
  }

  .imagenesEditadas img{
    margin-top: 15vh;
    height: 450px;
  }
}


@media only screen and (max-width: 375px) {
  .cabecera {
    margin-top: 12vh;
  }

  .imagenPrincipal img{
    margin-top: 25vh;
    margin-left: 10px;
    height: 400px;
  }

  .imagenesEditadas img{
    margin-top: 25vh;
    height: 400px;
  }
}


@media only screen and (max-width: 360px) {
  .cabecera {
    margin-top: 15vh;
  }

  .imagenPrincipal img{
    margin-top: 25vh;
    margin-left: -15px;
    height: 400px;
  }

  .imagenesEditadas img{
    margin-top: 25vh;
    margin-left: -15px;
    height: 400px;
  }
}

@media only screen and (max-width: 320px) {
  .cabecera {
    margin-top: 8vh;
  }

  .imagenPrincipal img{
    margin-top: 25vh;
    margin-left: 0px;
    height: 350px;
  }

  .imagenesEditadas img{
    margin-top: 25vh;
    margin-left: 0px;
    height: 350px;
  }

}





</style>