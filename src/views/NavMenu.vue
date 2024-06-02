<script setup>
import { ref } from "vue";
import { computed } from "@vue/reactivity";

let bouttonRouge = ref(false);

function evalClick() {
  bouttonRouge.value = !bouttonRouge.value;
  flexNone();
}
const flexNone = () => {
  console.log(bouttonRouge.value);
  if (bouttonRouge == true) {
    return "display:flex";
  }
  if (bouttonRouge.value == false) {
    return "display:none";
  }
};
let resdisplay = computed(flexNone);
</script>
<template>
  <div class="nav">
    <RouterLink to="/"><div id="name">Z</div></RouterLink>
    <div class="menu" @click="evalClick"></div>
  </div>

  <div :style="resdisplay" class="containerGif">
    <RouterLink class="linkP AboutLink" to="/about">
      <div @click="evalClick" class="LinkPin me">
        <img src="../assets/fzar.gif" />
        <p>More Info !</p>
      </div>
    </RouterLink>

    <RouterLink class="linkP Skill" to="/skill">
      <div @click="evalClick" class="LinkPin me">
        <img src="../assets/1snt.gif" />
        <p>Skill</p>
      </div>
    </RouterLink>

    <RouterLink class="linkP Skill" to="/project">
      <div @click="evalClick" class="LinkPin me">
        <img src="../assets/steve-minecraft.gif" />
        <p>Project</p>
      </div>
    </RouterLink>
    <RouterLink class="linkP contactP" to="/contact">
      <div @click="evalClick" class="LinkPin">
        <img src="../assets/anime-signature.gif" />
        <p>contact</p>
      </div>
    </RouterLink>
  </div>
</template>
