<template>
  <div class="proyectos" id="proyectos">
    <h1>Proyectos</h1>
    <div class="cards">
      <div class="card-list">
        <div class="card" v-for="project in projects" :key="project.id">
          <img :src="project.img" class="card-img-top" alt="" height="250px">
      
          <div class="card-footer">
            <small class="text-muted">{{ project.title }}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="card" v-for="project in projects" :key="project.id">
          <a role="button" data-bs-toggle="modal" data-bs-target="#modalInfo">
          <a role="button" @click="itemClicked(project)">
            <img :src="project.img"/>
          </a>
          <div class="card-footer">
            <p>Last updated 3 mins ago</p>
          </div>
        </div> -->

    <!-- MODAL INFO PROYECTOS -->
    <div class="modal fade" id="modalInfo" tabindex="-1" aria-labelledby="modalInfo" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ titulo }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ descripcion }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      titulo: "", 
      descripcion: "",
      num: 0,
      
      projects: [
      {
        id: 1,
        title: "Recomerçem",
        desc: "‘Recomerçem’ es un proyecto que pretende potenciar las compras en comercios locales en Barcelona. Para ello hemos creado cuatro juegos, mediante los que se pueden acumular puntos para acceder a promociones y descuentos en diferentes tiendas. ¿Te apuntas? ¡Sigue hacia abajo para conocer a Teresa y descubrir su historia!",
        technologies: "HTML, CSS, Javascript, Bootstrap, PHP",
        img: require('../assets/media/img/proyecto1.png'),    
      },
      {
        id: 2,
        title: "Mi pequeña librería",
        desc: "Description of my card component2",
        technologies: "Angular, Bootstrap",
        img: require('../assets/media/img/miniBiblioAngular.png'), 
      },
      {
        id: 3,
        title: "Broggi",
        desc: "Description of my card component2",
        technologies: "HTML, CSS, Vue, Laravel, Bootstrap",
        img: require('../assets/media/img/proyecto2.png'), 
      },
      {
        id: 4,
        title: "Game",
        desc: "Description of my card component2",
        technologies: "HTML, CSS, Javascript",
        img: require('../assets/media/img/game.png'), 
      },
      {
        id: 5,
        title: "Card title with script component2",
        desc: "Description of my card component2",
        technologies: "HTML, CSS, Javascript",
        img: require('../assets/media/img/game.png'), 
      },
      {
        id: 6,
        title: "Card title with script component2",
        desc: "Description of my card component2",
        technologies: "HTML, CSS, Javascript",
        img: require('../assets/media/img/game.png'), 
      },
      {
        id: 7,
        title: "Card title with script component2",
        desc: "Description of my card component2",
        technologies: "HTML, CSS, Javascript",
        img: require('../assets/media/img/game.png'), 
      },
      {
        id: 8,
        title: "Card title with script component2",
        desc: "Description of my card component2",
        technologies: "HTML, CSS, Javascript",
        img: require('../assets/media/img/game.png'), 
      },
      


      
      
    ]
    }
  }, 
  methods: {
    itemClicked: function(item){
      this.titulo = item.title;
      this.descripcion = item.desc;
      this.num = item.id;
      // $("#modalInfo").modal('show');
    }
  }
  
}
</script>


<style scoped>
.proyectos {
  min-height: 100vh;
  background-color: #372D3B;
  border: 1px solid black;
}

h1{
  font-size: 50px;
  margin-top: 11vh;
  text-align: center;
  color: white;
  /* font-family: 'Raleway', sans-serif; */
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
  height: 300px;
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

.card > a > img {
  position: absolute;
  width: 100%;
  height: 85%;
  /* z-index: -10; */
  /* transform: scale(1.05); */
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
}

.card-footer{
  z-index: -20;
}
</style>