<template>
    <RouterLink  class="linkP contactP" to="/contact">
        <div class="LinkPin"><img src="../assets/anime-signature.gif"><p>contact</p></div>
        </RouterLink>
        <RouterLink  class="linkP AboutLink" to="/about">
        <div class="LinkPin me"><img src="../assets/fzar.gif"><p> More About Me ! </p></div>
        </RouterLink>
        <RouterLink  class="linkP Skill" to="/contact">
        <div class="LinkPin me "><img src="../assets/1snt.gif"><p>Skill</p></div>
        </RouterLink>
</template>
<style scoped>
    img{
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    .LinkPin>p{
        position: absolute; 
        font-family: 'Playfair Display',sans-serif;
        font-style: italic;
    }
    .me>p{
      color: white;
    }
    .linkP{
      width: 90%;
      height: 25%;
      padding-top: 2.5%;
      border-radius: 20px;
      align-items: center;
      justify-content: center;
    }
    .LinkPin{
      font-size: xx-large;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
</style>