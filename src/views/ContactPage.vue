<script setup>
import { ref } from "vue";
import TheFooter from "../components/TheFooter.vue";


 const regexMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
 const notNullRegex = /^.{3,}$/

 let message = ref('')
 let mail = ref('')
 let titre = ref('')

 let payload = {
    titre: titre.value,
    mail: mail.value,
    message: message.value
 }

const senduntruc = () =>{
  fetch("https://bwikp.com/gomail/send",{
    method: "POST",
    mode: "cors",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(r =>console.log(r)).catch(error =>{
    console.error(error)
  })

 console.log(JSON.stringify(payload))

}
</script>

<template>
  <div class="pushingP">
    <div class="pageContact">
      <div class="contactForm front-end">
        <h1>Contacter Moi</h1>
        <input type="text" placeholder="Nom de l'Entreprise"   @change=" () =>{ titre = payload.titre }"  v-model="payload.titre">
        <input type="text" placeholder="Un Email pour vous recontactez" @change=" () =>{ mail = payload.mail }" v-model="payload.mail ">
        <p class="alertMail" v-if="!regexMail.test(mail) && mail != ''  ">Mail non valide</p>
        <textarea  class="txtmail"  placeholder="Votre Message"  @change=" () =>{ message = payload.message }"  v-model="payload.message" ></textarea>
        <div v-if="regexMail.test(mail) && notNullRegex.test(titre) && notNullRegex.test(message) " class="sendMail back-end" @click="senduntruc()">Envoyer</div>
        <div v-else class="buttonOff" >Incomplet</div>

      </div>

    </div>
    <TheFooter/>
    </div>
</template>
<style>

  .buttonOff {
    height: 50px;
    width: 125px;
    border-radius: 20.5px;
    border: 1px solid black;
    text-align: center;
    align-content: center;
    font-size: 20px;
    background: gray;
  }

.alertMail{
  color: red;
  font-size: medium;
  font-family: 'Courier New', Courier, monospace;
}

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
