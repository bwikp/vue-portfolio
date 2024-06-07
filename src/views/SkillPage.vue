<script setup>
import TheFooter from "../components/TheFooter.vue";

</script>
<template>
  <div class="SKcontainer">
    <div class="SkillC">
      <div class="skLegend">
        <h1 class="legend red">Skills</h1>
        <div class="legendSk">
          <div class="front-end">
            <p>Front-End</p>
          </div>
          <div class="back-end"><p>Back-End</p></div>
          <div class="tandf"><p>FS Framework & Tools</p></div>
        </div>
      </div>
      <div class="grid-container">
        <div class="item front-end"><p>HTML/CSS</p></div>
        <div class="item front-end"><p>JavaScript</p></div>
        <div class="item front-end"><p>VueJS</p></div>
        <div class="item front-end"><p>React*</p></div>
        <div class="item back-end"><p>PHP</p></div>
        <div class="item back-end"><p>SQL</p></div>
        <div class="item back-end"><p>Golang+</p></div>
        <div class="item back-end"><p>ExpressJS*</p></div>
        <div class="item tandf"><p>NestJS*</p></div>
        <div class="item tandf"><p>Github</p></div>
        <div class="item tandf"><p>Docker+</p></div>
        <div class="item tandf"><p>Symfony</p></div>
        <div class="item tandf"><p>NextJS*</p></div>
        <div class="item tandf"><p>ApiPlateform*</p></div>
      </div>
      <div class="legendSkF">
        <p>* : sera vu en formation</p>
        <p>+ :  initiative personne</p>
    </div>
    </div>
  </div>
  <TheFooter/>
</template>
<style>

.SkillC {
    height: 100%;
}
.skLegend {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.SKcontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.legend {
  padding: 1%;
  font-family: "Playfair Display";
  font-style: italic;
}
.legendSk {
  padding: 1%;
  gap: 10px;
}
.legendSkF {
  display: flex;
  flex-direction: row-reverse;
  padding: 1%;
  gap: 2%;
}
.skLegend h1 {
  color: red;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.front-end {
  background: rgba(160, 196, 170, 0.6);
}
.back-end {
  background: rgba(30, 207, 80, 0.6);
}
.tandf {
  background: rgba(72, 162, 192, 0.6);
}
.item {
  align-content: center;
  text-align: center;
  height: 100px;
  width: 250px;
  border-radius: 10px;
  color: black;
  font-size: larger;
  border: 2px solid rgb(68, 53, 18);
  font-family: "Dongle";
}
</style>
