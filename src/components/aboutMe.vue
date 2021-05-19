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

        <div class="imageContainer">
          <img alt="avatar logo" src="../assets/media/img/yo.png" height="600px">
        </div>
      </div>

      <div class="aboutContainer">
        <div class="explicacion">Interactúa con los elementos para conocerme</div>
        <div class="aboutBall">
          <p @mouseover="creatividad=true" @mouseleave="creatividad = false" class="btn bolita" id="creatividad">Creatividad</p> 
          <p @mouseover="team=true" @mouseleave="team = false" class="btn bolita" id="team">Trabajo en equipo</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Videojuegos</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Curiosa</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Estudios</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Analítica</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Helpful</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Juegos de mesa</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Gatos</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Flexible</p>
          <p @mouseover="videogames=true" @mouseleave="videogames = false" class="btn bolita" id="videogames">Comunicación</p>
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
      videogames: false
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

.imageContainer{
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

  .imageContainer{
    margin-top: 20vh;
    margin-bottom: 5vh;
  }

  .imagenesEditadas{
    margin-top: 20vh;
    margin-bottom: 5vh;
  }
}

@media only screen and (max-width: 441px) {
  .imageContainer img{
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

  .imageContainer img{
    margin-top: 25vh;
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

}





</style>