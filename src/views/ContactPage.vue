<template>
 <div class="pageContact">
    <div class="topContact">
    <h1>CONTACT</h1>
    <hr>
    </div>
    <h2>Email</h2>
    <h3 class="underline">Zilpa.Michel@gmail.com</h3>
    <h2>Réseaux scoiaux</h2>
     <h3><a class="underline" href="#">Twitter</a></h3>
     <h3><a class="underline" href="#">github</a></h3>
     <h3><a class="underline" href="#">linkedin</a></h3>
 </div>
</template>
<style scoped>

    hr{
        color: red;
        width:  100%;
    }
    
    .topContact{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .pageContact{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:start;
        gap: 50px;
        width: 80%;
        font-family: 'lato',sans-serif;
    }
</style>