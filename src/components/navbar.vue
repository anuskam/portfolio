<template>
<div class="navContent fixed-top">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menú de navegación">
      <!-- <span class="navbar-toggler-icon"></span> -->
      <burguer></burguer>
    </button>

    <a href="#home" v-smooth-scroll class="navbar-brand"><img src="../assets/media/img/avatar.svg" class="avatar" alt="avatar"></a>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item" id="aboutMe">
          <a href="#sobreMi" v-smooth-scroll class="nav-link horizontalOverlay" aria-label="link-sobreMi">Sobre mi</a>
        </li>
        <li class="nav-item" id="skills">
          <a href="#habilidades" v-smooth-scroll class="nav-link horizontalOverlay" aria-label="link-habilidades">Habilidades</a>
        </li>
        <li class="nav-item" id="projects">
          <a href="#proyectos" v-smooth-scroll class="nav-link horizontalOverlay" aria-label="link-proyectos">Proyectos</a>
        </li>
        <li class="nav-item" id="contact">
          <a href="#contacto" v-smooth-scroll class="nav-link horizontalOverlay" aria-label="link-contacto">Contacto</a>
        </li>
      </ul>
      
    </div>
  </nav>

</div>


</template>

<script>
export default {
  data () {
    return {
      currentTab: 1,
    }
  }, 
  methods: {
  }, 
  created() {
    
  }, 
  
}
</script>

<style scoped>
.avatar{
  height: 50px;
}

nav {
  padding: 4px 16px;
}

.navContent{
  margin: 0;
  padding: 0;
}



.nav-link {
  color: black !important;
}

@media (min-width: 992px){
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
}

.horizontalOverlay {
  overflow: hidden;
  padding: 12px 30px;
  border-radius: 6px;
  background-color: #f8f9fa;
  color: #f8f9fa;
  position: relative;
  display: inline-block;
}

.horizontalOverlay::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #D9A129;
  opacity: 0.5;
  transform: scaleY(0);
  transform-origin: 0 0;
  transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
  will-change: transform;
}

.horizontalOverlay:hover::before  {
  transform-origin: 100% 100%;
  transform: scaleY(1);
}

.navbar-nav{
  margin-left: auto;
}

</style>