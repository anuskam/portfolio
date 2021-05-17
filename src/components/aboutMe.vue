<template>
  <div class="aboutMe pt-5" id="sobreMi">
    <div class="cabecera">
      <img src="../assets/media/img/meow_bread.png">
      <h1>Sobre mi</h1>
    </div>
    <!-- <h1>Sobre mi</h1> -->
    

  </div>
</template>

<script>
export default {
  data(){
    return {
      
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

/* h1{
  font-size: 50px;
  margin-top: 8vh;
  text-align: center;
  color: white;
  font-family: 'Yellowtail', cursive;
} */

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
</style>