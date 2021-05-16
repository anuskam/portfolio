<template>
  <div class="skills" id="habilidades">
    <h1>Habilidades</h1>
    
  </div>

</template>

<script>
export default {
  data(){
    return {
      projects: [
      {
        id: 1,
        language: "HTML",
        level: "80%",   
      },
      {
        id: 2,
        language: "CSS, SASS",
        level: "80%",
      },
      {
        id: 3,
        language: "Javascript",
        level: "80%", 
      },
      {
        id: 4,
        language: "Laravel, Postman (??)",
        level: "80%",
      },
      {
        id: 5,
        language: "PHP",
        level: "80%",
      },
      {
        id: 6,
        language: "Git, github",
        level: "80%",
      },
      {
        id: 7,
        language: "Vue, Angular",
        level: "80%",
      },
      {
        id: 8,
        language: "Illustrator, Photoshop, InDesign",
        level: "80%",
      },
      {
        id: 9,
        language: "Adobe Premiere Pro",
        level: "80%",
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

h1{
  font-size: 50px;
  background-color: #372D3B;
  margin-top: 11vh;
  text-align: center;
  color: white;
  /* font-family: 'Raleway', sans-serif; */
  font-family: 'Yellowtail', cursive;
}
</style>