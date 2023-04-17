<template>
    <div class="WelcomeZone">
        <div class="wtext">Bonjour Je suis</div>
        <div class="bigText">Michel Zilpa</div>
        <div class="bigTitre">Développeur Web en formation</div>
        <div class="introMoi">Je suis actuellement en formation
et pour obtenir le titre professionnel de développeur web, j'ai besoin
de trouver un stage de 2 mois et 4 jours du 1er juin au 28 juillet 2023.
j'espère que l'on pourra travailler ensemble très bientôt.

        <div  class="bigTitre">Si vous êtes intéressé ou curieux d'en savoir plus :</div> 
            <div class="zoneCv">
                <h2>Voici Mon cv</h2>
                <a href="/assets/Michel_Zilpa.pdf"><button class="buttonCV">Mon CV</button></a>
            </div>
        </div>

    </div>
</template>
<style scoped>
        
    .introMoi>.bigTitre{
        margin-top: 20px;
    }
    .zoneCv{
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
.buttonCV {
    margin-top: 20px ;
    width: 200px;
    border-radius: 15px;
    height: 100px;
  box-shadow: rgb(179, 62, 29)  0px 0px 5px 5px;
}

.introMoi {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

}

.bigTitre {
    font-size: 26px;
    font-weight: bolder;
    color: rgb(226, 60, 60);
}

.wtext {
    font-size: 20px;
}

.wtext,.bigText,.bigTitre {
    padding-bottom: 10px;
}

.bigText {
    font-weight: 500;
    font-size: 40px;
    font-family: 'Open Sans';
    color: red;
}

.WelcomeZone {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-top: 75px;
    font-family: 'Playfair Display', sans-serif;
    width: 85%;
    height: 100%;
    color: black;
}

#internship {
    font-size: 30px;
}

p {
    font-size: 26px;
}

h1 {
    padding-bottom: 20px;
    padding-left: 25px;
    font-weight: 100;
    font-size: 52px;
    color: rgb(178, 60, 60);
}</style>