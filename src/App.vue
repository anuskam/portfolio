<template>
  <div id="app">
    <principal></principal>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  cursor:url('../src/assets/media/img/meow_witch.png'), auto;
}
/* width */
::-webkit-scrollbar {
  max-width: 10px;
  background-color: #372D3B;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #D9A129; 
  border-radius: 10px;
}


/* Cambia de color al estar encima */
/* ::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
} */



/*COLOR DENTRO DE LA TRÍADA #D9A129*/
/*COLOR DE LA PÁGINA #d94362*/
</style>
