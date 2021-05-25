<template>
  <div class="proyectos" id="proyectos">
    <div class="cabecera">
      <img src="../assets/media/img/meow_code.gif">
      <h1>Proyectos</h1>
    </div>
    <!-- <h1>Proyectos</h1> -->
    <div class="cards">
      <div class="card-list">
        <div class="card" v-for="project in projects" :key="project.id">
          <img :src="project.img" class="card-img-top" alt="" height="250px" @click="abrirModalInfo(project)">
          <div class="card-footer">
            <p class="text-white">{{ project.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL INFO PROYECTOS -->
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="Modal con información complementaria" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-bold" id="exampleModalLabel">{{ project.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <video width="700" controls :src="project.video"></video>
          

            <div class="tecnologias">
              <div class="explicacionTecnologias">Tecnologías utilizadas</div>
              <div class="imagenesTecnologias">
                <img v-if="project.technologies.includes('html')" src="../assets/media/img/tech-html.svg" width="50px">
                <img v-if="project.technologies.includes('css')" src="../assets/media/img/tech-css.svg" width="50px">
                <img v-if="project.technologies.includes('javascript')" src="../assets/media/img/tech-javascript.svg" width="50px">
                <img v-if="project.technologies.includes('bootstrap')" src="../assets/media/img/tech-bootstrap.svg" width="50px">
                <img v-if="project.technologies.includes('php')" src="../assets/media/img/tech-php.svg" width="50px">
                <img v-if="project.technologies.includes('angular')" src="../assets/media/img/tech-angular.svg" width="50px">
                <img v-if="project.technologies.includes('vue')" src="../assets/media/img/tech-vue.svg" width="50px">
                <img v-if="project.technologies.includes('laravel')" src="../assets/media/img/tech-laravel.svg" width="50px">
                <img v-if="project.technologies.includes('mysql')" src="../assets/media/img/tech-mysql.svg" width="50px">
              </div>
              
            </div>


            <p class="descripcion">{{ project.desc }}</p>
            <br>
            <div class="redireccion">
              <a class="btn" :href="project.codelink" role="button" target="_blank">Ver código</a>
              <a class="btn" :href="project.pagelink" role="button" target="_blank">Ver página</a>
            </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery';


export default {
  data(){
    return {
      titulo: "", 
      descripcion: "",
      num: 0,
      project: {
        technologies: [],
      },
      video: require('../assets/media/video/project1.mp4'),
      projects: [
      {
        id: 1,
        title: "Recomerçem",
        desc: "‘Recomerçem’ es un proyecto que pretende potenciar las compras en comercios locales en Barcelona. Para ello hemos creado cuatro juegos, mediante los que se pueden acumular puntos para acceder a promociones y descuentos en diferentes tiendas. ¿Te apuntas? ¡Descubre a Teresa y su historia!",
        technologies: ["html", "css", "javascript", "bootstrap", "php", "mysql"],
        img: require('../assets/media/img/proyecto1.png'),    
        video: require('../assets/media/video/project1.mp4'),
        codelink: 'https://github.com/anuskam/Project1.git',
        pagelink: '',
      },
      {
        id: 2,
        title: "Mi pequeña biblioteca",
        desc: "Primera aplicación con el framework Angular. Pequeña biblioteca con registro de comics y libros con la sinópsis al entrar en cada uno.",
        technologies: ["html", "css", "angular", "bootstrap"],
        img: require('../assets/media/img/miniBiblioAngular.png'), 
        video: require('../assets/media/video/mipequenabiblio.mp4'),
        codelink: 'https://github.com/anuskam/spa3.git',
        pagelink: 'https://angularbiblioteca.netlify.app/',
      },
      {
        id: 3,
        title: "Broggi",
        desc: "Simulador formativo para gestionar las demandas de asistencia de urgencia y emergencia sanitaria extrahospitalaria en Cataluña para el instituto Moisès Broggi",
        technologies: ["html", "css", "javascript", "vue", "laravel", "bootstrap", "mysql"],
        img: require('../assets/media/img/proyecto2.png'), 
        video: require('../assets/media/video/project1.mp4'),
        codelink: 'https://github.com/anuskam/SGTA-Broggi.git',
        pagelink: 'http://daw.abp-politecnics.com/daw2a02/SGTA-Broggi/public',
      },
      {
        id: 4,
        title: "Game",
        desc: "Description of my card component2",
        technologies: ["html", "css", "javascript"],
        img: require('../assets/media/img/proyecto2.png'),
        video: require('../assets/media/video/project1.mp4'),
        codelink: '',
        pagelink: '',
      },      
      ]
    }
  }, 
  methods: {
    abrirModalInfo(project) {
      this.project = project;    

      $('#infoModal').modal('show');
    }, 


  }, 

  
}
</script>


<style scoped>
.proyectos {
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
  margin-top: 11vh;
  text-align: center;
}

h1{
  display: inline;
  font-size: 50px;
  margin-left: 1%;
  color: white;
  font-family: 'Yellowtail', cursive;
}


.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-list {
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}



.card {
  width: 440px;
  height: 270px;
  border-radius: 10px;
  overflow: hidden;
  margin: 35px 35px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2), 0 0 5px rgba(0,0,0,0.15);
  background: rgba(0,0,0,0.2);
  filter: grayscale(0.1) saturate(95%) brightness(95%) contrast(90%);
}

.card:hover {
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 15px rgba(0,0,0,0.3);
  filter: grayscale(0) saturate(105%) brightness(100%) contrast(100%);
}

.card > img {
  width: 100%;
  height: 85%;
  transition: all 0.2s ease-out, transform 0.2s ease-out, filter 0.75s ease-out;
  filter: blur(0px);
}

.card.blur > img {
  filter: blur(1px) grayscale(0.1) saturate(95%);
}

.card > .shineLayer {
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%);
  transition: all 0.2s ease-out;
}

.card-footer{
  padding: 8px 15px;
}

video {
  margin-left: 15px;
  margin-top: 10px;
}


.descripcion{
  padding: 15px;
  margin-right: 80px;
  margin-top: 20px;
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
}


.explicacionTecnologias {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}

.imagenesTecnologias {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-evenly;
}

.imagenesTecnologias img {
  margin-top: 20px;
}

.redireccion {
  text-align: end;
  margin-right: 40px;
}

.redireccion .btn {
  background-color: #D9A129;
  margin-left: 40px;
}



@media only screen and (max-width: 1200px) {
  .modal-body {
    display: grid;
    grid-template-columns: 1fr;
  }
}



/*No se abre bien el modal si no lo modifico */
@media only screen and (max-width: 993px) {
  video {
    width: 450px;
    margin-left: 10px;
  }

  .descripcion{
    padding: 15px;
    margin-right: 10px;
    margin-top: 20px;
  }

  .modal-body {
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .card {
    width: 320px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    margin: 15px 20px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2), 0 0 5px rgba(0,0,0,0.15);
    transform: scale3d(1, 1, 1);
    transition: all 0.2s ease-out, filter 0.75s ease-out;
    background: rgba(0,0,0,0.2);
    filter: grayscale(0.1) saturate(95%) brightness(95%) contrast(90%);
  } 

  .card > img {
    width: 100%;
    height: 80%;
    transition: all 0.2s ease-out, transform 0.2s ease-out, filter 0.75s ease-out;
    filter: blur(0px);
  }

  .card-footer {
    padding: 5px 15px;
  }

  video {
    width: 305px;
    margin-left: 0;
  }
  
}



</style>