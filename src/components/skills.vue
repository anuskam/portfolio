<template>
  <div class="skills" id="habilidades">
    <div class="cabecera">
      <img src="../assets/media/img/meow_business.png">
      <h1>Habilidades</h1>
    </div>
    <div class="lenguajes">
      <div class="lenguajes-content" v-for="lenguaje in lenguajes" :key="lenguaje.id">
        <img :src="lenguaje.img" :alt="lenguaje.nombre" width="50px">

      </div>
    </div>
    
    <div class="idiomas">
      <div class="idiomas-content" v-for="idioma in idiomas" :key="idioma.id">
        <img :src="idioma.img" :alt="idioma.nombre" width="50px">
        <span class="nombreIdioma">{{ idioma.nombre }}</span>
        -
        <span class="nivel font-italic">{{ idioma.nivel }}</span>
      </div>
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
      lenguajes: [
      {
        id: 1,
        nombre: "HTML",
        img: require('../assets/media/img/tech-html.svg'),
        info: "80%",   
      },
      {
        id: 2,
        nombre: "CSS, SASS",
        
        info: "80%",
      },
      {
        id: 3,
        nombre: "Javascript",
        img: require('../assets/media/img/tech-javascript.svg'),
        info: "80%", 
      },
      {
        id: 4,
        nombre: "Laravel, Postman (??)",
        img: require('../assets/media/img/tech-laravel.svg'),
        info: "80%",
      },
      {
        id: 5,
        nombre: "PHP",
        info: "80%",
      },
      {
        id: 6,
        nombre: "Git, github",
        info: "80%",
      },
      {
        id: 7,
        nombre: "Vue, Angular",
        info: "80%",
      },
      {
        id: 8,
        nombre: "Illustrator, Photoshop, InDesign",
        info: "Con estas herramientas de Adobe sé maquetar, vectorizar y editar imagenes de manera autodidacta",
      },
      {
        id: 9,
        nombre: "Adobe Premiere Pro",
        info: "Montaje de video y audio",
      },
      
    ]
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

/* h1{
  font-size: 50px;
  background-color: #372D3B;
  margin-top: 11vh;
  text-align: center;
  color: white;
  font-family: 'Yellowtail', cursive;
} */

.cabecera img {
  display: inline;
  width: 50px;
  margin-bottom: 30px;
}

.cabecera {
  white-space: nowrap;
  margin-top: 12vh;
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

.idiomas-content {
  margin-bottom: 2%;
}

.nombreIdioma {
  color: white;
  margin-left: 1%;
}

.nivel{
  color: white;
}

.idiomas {
  color: white;
}

</style>