<template>
  <div class="contacto" id="contacto">
    <div class="cabecera">
      <img src="../assets/media/img/meow_contact.png">
      <h1>Contacto</h1>
    </div>
    
    <div class="parentGrid">
      <div class="contact-text">
        <p>Si quieres contactar conmigo para saber más de mis trabajos, hacer alguna sugerencia
        o hablar, puedes encontrarme en las siguientes redes sociales.</p>
        <br>
        <p>También puedes descargarte mi curriculum en el siguiente enlace:</p>
        <!-- LÍNEA PARA DESCARGAR EL CURRICULUM EN CASO DE QUE ALGÚN DÍA LO HAGA -->
        <p><a class="btn btnContact cv" download href="cv/Curriculum_Anna_Moreta.pdf">Curriculum</a></p>
      </div>

      <div class="socialmedia">
        <div class="social-link" v-for="red in redes" :key="red.id">
          <a :href="red.link" target="_blank">
            <img :src="red.img" :alt="red.name">
          </a>
          <strong class="tituloRRSS">{{ red.name }}</strong>
          <a class="links" :href="red.link" target="_blank">
            <p class="linkRRSS">{{ red.linkOk }}</p>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      redes: [
        {
          id: 1,
          name: 'Github',
          img: require('../assets/media/img/icon-github.svg'),
          linkOk: 'https://github.com/anuskam',
          link: 'https://github.com/anuskam'
        },
        {
          id: 2,
          name: 'LinkedIn',
          img: require('../assets/media/img/icon-linkedin.svg'),
          linkOk: 'https://www.linkedin.com/in/annamoreta/',
          link: 'https://www.linkedin.com/in/annamoreta/'
        },
        {
          id: 3,
          name: 'Correo electrónico',
          img: require('../assets/media/img/icon-mail.svg'),
          linkOk: 'amoretaa77@cepnet.net',
          link: 'mailto:amoretaa77@cepnet.net'
        },
        {
          id: 4,
          name: 'Twitter',
          img: require('../assets/media/img/icon-twitter.svg'),
          linkOk: 'https://twitter.com/anuskam15',
          link: 'https://twitter.com/anuskam15'
        },
      ]
    }
  }
  
}
</script>


<style scoped>
.contacto {
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
  margin-top: 11vh;
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

.parentGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5%;
}

.contact-text {
  color: white;
  margin: 0 15%;
}

.socialmedia {
  margin: 0 15%;
}

.social-link {
  margin-bottom: 5%;
  color: white;
}

.social-link img {
  cursor: pointer;
}

.tituloRRSS {
  margin-left: 10px;
}

.linkRRSS {
  margin-left: 5px;
  cursor: pointer;
}

.links {
  text-decoration: none;
  color: white;
}

.cv {
  /* padding: 5px 25px; */
  display: flex;
  align-content: center;
  justify-content: space-around;
}

@media (max-width: 1024px){
  .parentGrid {
  display: grid;
  grid-template-columns: 1fr;
  padding: 5%;
  }

  .contact-text {
    margin-bottom: 8%;
  }
}

@media (max-width: 680px) {
  .cabecera {
    padding-top: 20px;
  }

  .contact-text {
    display: grid;
    width: 100%;
    margin: 0 auto;
  }

  .socialmedia {
    margin: 10% auto;
  }

  .social-link {
    margin-bottom: 10%;
  }

}

.btnContact {
  background-color: #D9A129;
  color: white;
}


</style>