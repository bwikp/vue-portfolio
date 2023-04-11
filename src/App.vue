
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
  let bouttonRouge = ref(true);
  const event = () => {
    bouttonRouge.value = !bouttonRouge.value
    console.log(bouttonRouge.value)
    }
</script>
<template>
  <!-- <div id="majorC"> -->
  <div class="nav">
        <div id="name">Zilpa Michel</div>
        <div><RouterLink to="/"><div @click="event" :v-model="bouttonRouge" class="menu"></div></RouterLink></div>
  </div>
  <div class="containerGif">
  <RouterLink class="linkP contactP" to="/contact">
    <div class="LinkPin"><img src="./assets/anime-signature.gif">
      <p>contact</p>
    </div>
  </RouterLink>
  <RouterLink class="linkP AboutLink" to="/about">
    <div class="LinkPin me"><img src="./assets/fzar.gif">
      <p> More About Me ! </p>
    </div>
  </RouterLink>
  <RouterLink class="linkP Skill" to="/contact">
    <div class="LinkPin me "><img src="./assets/1snt.gif">
      <p>Skill</p>
    </div>
  </RouterLink>
  <RouterLink class="linkP Skill" to="/contact">
    <div class="LinkPin me "><img src="./assets/znk.gif">
      <p>Projet</p>
    </div>
  </RouterLink>
    </div>
  <RouterView/>
  <!-- </div> -->
</template>

<style scoped>
    /* #majorC{
      height: 100%;
      width: 100%;
    } */
  .nav{
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content:space-between;
      width: 100%;
      height: 10%;
      margin-bottom: 50px;
      font-family: 'Playfair Display',sans-serif;
  }
  #name{
    padding-left: 10px;
  }
.menu{
    width: 50px;
    height: 50px;
    background: red;
    margin-right: 10px;
  }
  .containerGif{
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-bottom: 5%;
  }
  
  @media (min-width: 1250px) { 

    .containerGif{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 80%;
  }

  }


img {
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0.5%;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 2px 13px 5px;
}

.LinkPin>p {
  position: absolute;
  font-family: 'Playfair Display', sans-serif;
  font-style: italic;
}

.me>p {
  color: white;
}

.linkP {
  width: 90%;
  height: 80%;
  height: 25%;
  padding-top: 2.5%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
}

.LinkPin {
  font-size: xx-large;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
</style>
