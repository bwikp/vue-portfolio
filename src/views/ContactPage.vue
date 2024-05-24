<template>
  <div class="pushingP">
    <div class="pageContact">
      <h1>Contact</h1>
      <div>
        <textarea name="" id=""></textarea>
      </div>
      <div class="sendMail front-end">Envoyer</div>

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
    background: rgba(162, 223, 178, 0.6);
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
