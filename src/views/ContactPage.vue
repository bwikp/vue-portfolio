<script setup>
 import { ref } from 'vue';

 let message = ref("")
 let mail = ref("")
 let titre = ref("")

 let payload = {
    titre: titre.value,
    mail: message.value
 }


const senduntruc = () =>{
  fetch("http://localhost:8080/gomail/"+ message.value +"/"+ titre.value,{
    method: "POST",
    mode: "cors",
  }).then(r =>console.log(r))
} 

</script>

<template>
  <div class="pushingP">
    <div class="pageContact">
      <div class="contactForm front-end">
        <h1>Contacter Moi</h1>
        <input type="text" placeholder="Nom de l'Entreprise" v-model="titre" >
        <input type="text" placeholder="Un Email pour vous recontactez" v-model="mail">
        <textarea  class="txtmail"  placeholder="Votre Message" v-model="message"></textarea>
        <div class="sendMail back-end" @click="senduntruc()">Envoyer</div>
      </div>

    </div>
    <div class="ContactList">
        <h3 class="underline">
        <img class=" contactIcon" src="/src/assets/email-icon.svg" />
          <a href="mailto:zilpa.zichel@gmail.com"></a>
        </h3>     
        <h3 class="underline"><a href="https://github.com/bwikp">
        <img class=" contactIcon" src="/src/assets/github-mark.svg" />
        </a></h3>
        <h3 class="underline">
          <a href="https://www.linkedin.com/in/michel-zilpa-b66a64235/" target="_blank">
        <img class="contactIcon" src="/src/assets/linkedin.svg" />
          </a>
        </h3>
      </div>
    </div>
</template>
<style>


.contactForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  height: 70%;
  width : 50%;
  text-align: left;
  border-radius: 20.5px;
  padding: 4%;
  border: 1px solid black;
}
.contactForm h1 {
  font-size: xx-large;
}
 .contactForm input {
  height: 50px;
  width: 100%;
  padding: 2%;
  border-radius: 12.5px;
  border: 1px solid;
  text-align: left;
  box-sizing: border-box;
 }

.txtmail {
  resize: none;
  width: 96%;
  height: 100px;
  border-radius: 12.5px;
  padding: 2%;
  border: 1px solid;
}

.sendMail{
    height: 50px;
    width: 125px;
    border-radius: 20.5px;
    border: 1px solid black;
    text-align: center;
    align-content: center;
    font-size: 20px;
}

.sendMail:hover{
    cursor: pointer;
    /* background: rgba(162, 223, 178, 0.6); */
}
.sendMail:active {
  background: rgba(219, 236, 223, 0.6);

}
.pushingP {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.ContactList {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  gap: 2%;
}

.underline img {
    height: 50px;
    width: 50px;
  box-shadow: none;
  padding: 0;
  border-radius: 0;
  object-fit: contain;
  width: 100px;
}

.contactIcon {
  height: 50px;
  height: 50px;
}

.pageContact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "lato", sans-serif;
  width: 80%;
  height: 85%;
  font-family: "lato", sans-serif;
}
</style>
