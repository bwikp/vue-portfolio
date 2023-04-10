<template>
<div class="info">
    <div class="infoP">
         <h2>Zilpa Michel</h2>
         <h3>27/03/2001</h3>
    </div>
    <div class="stage">
        <p>Je suis actuellement dans une formation pour obtenir le titre professionnel de Développeur web, dans le cadre cette formation,
             nous avons un stage obligatoire du 01/06/2023 au 28/07/2023, soit 8 semaines et 2 jours.
        </p>
    </div>
    <div class="formation ">
        <h2>Qui suis je ?</h2>
        <p class="moi">
            Je suis un apprenti développeur basé sur Lyon, qui aujourd'hui est plus motivé que jamais.
            À rejoindre le monde du web. Je suis curieux et avide de savoir, je ne cherche rien d'autre
            que l'opportunité d'intégrer le monde du web et de l'informatique en général.

        </p>
    </div>
        <h2 class="titleFormation">formation</h2>
    <div class="formation">
        <ul>
            <li>Formation développeur web : 17/10/2022 - 15/09/2023 CCI formation Lyon 9e</li>
            <li>FreeCodeCamp :  Responsive Web certifications</li>
            <li>JavaScript Algorithmes & DataStructure certifications</li>
            <li>Licence mathématique/informatique Lyon 1 : 2 ans</li>
            <li>Licence Langue  étrangère appliquée Lyon 3 : anglais chinois 1 an</li>
            <li>Baccalauréat Scientifique, option science de l'ingénieur.</li>
        </ul>  
    </div>
</div>
</template>
<style scoped>
        ul{
           list-style: none; 
        }
        h2{
            color: red;
        }
        .moi{
            margin-top: 5%;
        }
        .infoP{
            display: flex;
            flex-direction: column;
            justify-content:start;
            align-items: start;
            padding-left: 5%;
            padding-top: 5%;
        }
        .titleFormation
        {
            padding-left: 5%;
            padding-top: 5%;
        }
        .stage,.formation{
            padding: 5%;
        }
        .info{
            display: flex;
            flex-direction:column;
            width: 100%;
            height: 100%;
        }
        *{
            font-family: 'lato',sans-serif;
         }
</style>