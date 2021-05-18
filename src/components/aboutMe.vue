<template>
  <div class="aboutMe pt-5" id="sobreMi">
    <div class="cabecera">
      <img src="../assets/media/img/meow_bread.png">
      <h1>Sobre mi</h1>
    </div>

    <div class="gridParent">
      <div class="imagenes">
        <div v-show="hover" class="imagenesEditadas" id="creatividad">
          <img src="../assets/media/img/creatividad.png" height="500px">
        </div>

        <div v-show="hover3" class="imagenesEditadas" id="team">
          <img src="../assets/media/img/teamworking.png" height="500px">
        </div>

        <div v-show="hover4" class="imagenesEditadas" id="videogames">
          <img src="../assets/media/img/videojuegos.png" height="500px">
        </div>

        <div class="imageContainer">
          <img alt="avatar logo" src="../assets/media/img/yo.png" height="500px">
        </div>
      </div>

      <div class="aboutContainer">
        <div class="aboutBall">
          <p @mouseover="hover=true" @mouseleave="hover = false" class="btn bolita" id="creatividad">Creatividad</p> 
          <p @mouseover="hover2=true" @mouseleave="hover2 = false" class="btn bolita" >2</p>
          <p @mouseover="hover3=true" @mouseleave="hover3 = false" class="btn bolita" id="team">Trabajo en equipo</p>
          <p @mouseover="hover4=true" @mouseleave="hover4 = false" class="btn bolita" id="videogames">Videojuegos</p>
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
      hover: false,
      hover2: false,
      hover3: false,
      hover4: false
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
  padding: 5%;
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
  max-width: 700px;
  /* align-items: center;
  justify-content: center;
  margin-left: 150px; */
}

.aboutBall > p {
  margin: 10px 3vw;
}

.imagenesEditadas{
  position: absolute;
  width: 300px;
  height: 2000px;
  margin-left: 10vw;
  /* bottom: 80%; */
}

.btn {
  background-color: #D9A129;
  padding: 6px 12px;
}

/* .bolita{
  background: #4758fc;
  width: 30px;
  height: 30px;
  border-radius: 50%;
} */

#bolita2{
  width: 49.5%;
}


</style>