<template>
  <div class="skills" id="habilidades">
    <div class="cabecera">
      <img src="../assets/media/img/meow_business.png">
      <h1>Habilidades</h1>
    </div>
    <div class="apartados">

      <div class="card">
        <div class="card-header">Front-end</div>
        <div class="card-body front-content">
          <div class="front" v-for="front in fronts" :key="front.id">
            <img :src="front.img" :alt="front.nombre" width="60px">
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">Back-end</div>
        <div class="card-body back-content">
          <div class="back" v-for="back in backs" :key="back.id">
            <img :src="back.img" :alt="back.nombre" width="60px">
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">Otros</div>
        <div class="card-body otros-content">
          <div class="otros" v-for="otro in otros" :key="otro.id">
            <img :src="otro.img" :alt="otro.nombre" width="60px">
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">Idiomas</div>
        <div class="card-body idiomas-content">
          <div class="idiomas" v-for="idioma in idiomas" :key="idioma.id">
            <img :src="idioma.img" :alt="idioma.nombre" width="60px">
            <p class="nivel">{{ idioma.nivel }}</p>
          </div>
        </div>
      </div>
        
      <!-- <div class="front-content">
        <div class="front" v-for="front in fronts" :key="front.id">
          <img :src="front.img" :alt="front.nombre" width="60px">
        </div>
      </div> -->
      
      
      
      <!-- <div class="back-content">
        <div class="titulito">Back-end</div>
        <div class="back" v-for="back in backs" :key="back.id">
          <img :src="back.img" :alt="back.nombre" width="70px">
        </div>
      </div>


      <div class="otros-content">
        <div class="titulito">Otros</div>
        <div class="otros" v-for="otro in otros" :key="otro.id">
          <img :src="otro.img" :alt="otro.nombre" width="60px">
        </div>
      </div>

      <div class="idiomas-content">
        <div class="titulito">Idiomas</div>
        <div class="idiomas" v-for="idioma in idiomas" :key="idioma.id">
          <div class="flex-col">
            <img :src="idioma.img" :alt="idioma.nombre" width="50px">
          <p class="nivel">{{ idioma.nivel }}</p>
          </div>
          
        </div>
      </div> -->
    </div> 
    
    
    
  </div>

</template>

<script>
export default {
  data(){
    return {
      idiomas: [
        {
          id: 1,
          nombre: "Castellano",
          nivel: "Nativo", 
          img: require('../assets/media/img/lang-spain.svg')
        },
        {
          id: 2,
          nombre: "Catalán", 
          nivel: "Nativo", 
          img: require('../assets/media/img/lang-catalonia.svg')
        },
        {
          id: 3,
          nombre: "Inglés",
          nivel: "B2.2", 
          img: require('../assets/media/img/lang-united-kingdom.svg')
        },
        {
          id: 4, 
          nombre: "Francés", 
          nivel: "B2.1", 
          img: require('../assets/media/img/lang-france.svg')
        },
      ],
      fronts: [
        {
        id: 1,
        nombre: "HTML",
        img: require('../assets/media/img/tech-html.svg'),
        },
        {
          id: 2,
          nombre: "CSS",
          img: require('../assets/media/img/tech-css.svg'),
        },
        {
          id: 3,
          nombre: "Javascript",
          img: require('../assets/media/img/tech-javascript.svg'),
        },
        {
          id: 4,
          nombre: "Vue",
          img: require('../assets/media/img/tech-vue.svg'),
        },
        {
          id: 5,
          nombre: "Angular",
          img: require('../assets/media/img/tech-angular.svg'),
        },
        {
          id: 6,
          nombre: "Bootstrap",
          img: require('../assets/media/img/tech-bootstrap.svg'),
        },
      ],
      backs: [
        {
          id: 1,
          nombre: "Laravel",
          img: require('../assets/media/img/tech-laravel.svg'),
        },
        {
          id: 2,
          nombre: "PHP",
          img: require('../assets/media/img/tech-php.svg'),
        },
        {
          id: 3,
          nombre: "Java",
          img: require('../assets/media/img/tech-java.svg'),
        },
        {
          id: 4,
          nombre: "MySQL",
          img: require('../assets/media/img/tech-mysql.svg'),
        },
        {
          id: 5,
          nombre: "C++",
          img: require('../assets/media/img/tech-c++.svg'),
        },
      ],
      otros: [
        {
          id: 1,
          nombre: "Illustrator",
          img: require('../assets/media/img/tech-illustrator.svg'),
        },
        {
          id: 2,
          nombre: "Photoshop",
          img: require('../assets/media/img/tech-photoshop.svg'),
        },
        {
          id: 3,
          nombre: "InDesign",
          img: require('../assets/media/img/tech-indesign.svg'),
        },
        {
          id: 4,
          nombre: "Adobe Premiere Pro",
          img: require('../assets/media/img/tech-premiere.svg'),
        },
        {
          id: 5,
          nombre: "Git",
          img: require('../assets/media/img/tech-git.svg'),
        },
        {
          id: 6,
          nombre: "Github",
          img: require('../assets/media/img/tech-github.svg'),
        },
      ],
    }
  }
  
}
</script>


<style scoped>
.skills {
  min-height: 100vh;
  background-color: #372D3B;
  border: 1px solid black;
}


.cabecera img {
  display: inline;
  width: 50px;
  margin-bottom: 30px;
}

.cabecera {
  white-space: nowrap;
  margin-top: 12vh;
  text-align: center;
}

.card {
  margin-left: 17%;
  margin-right: 17%;
  margin-top: 4vh;
  margin-bottom: 5vh;
}

/* .card {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 50px;
  margin-top: 8vh;
  margin-left: 15%;
  margin-right: 15%;
} */

.card-header {
  text-align: center;
  background-color: #D9A129;
  border-bottom: none;
  padding: 6px 20px;
  margin-top: 10px;
  color: white;
  
}

h1{
  display: inline;
  font-size: 50px;
  margin-left: 1%;
  color: white;
  font-family: 'Yellowtail', cursive;
}

.idiomas-content {
  margin-bottom: 2%;
}


.front-content, .back-content, .otros-content, .idiomas-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 8px;
}



.front-content img, .back-content img, .otros-content img {
  margin: 10px 10px;
}

.apartados {
  display: grid;
  grid-template-columns: 1fr 1fr;
}


.idiomas p {
  text-align: center;
  margin-top: 10px;
}

@media only screen and (max-width: 700px) {
  .apartados {
    display: grid;
    grid-template-columns: 1fr;
  }
}

</style>