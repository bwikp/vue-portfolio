<template>
 <div class="pageContact">
    <div class="topContact">
    <h1>CONTACT</h1>
    <hr>
    </div>
    <h2>Email</h2>
    <h3 class="underline"><a href="mailto:zilpa.zichel@gmail.com">zilpa.michel@gmail.com</a></h3>
    <h2>Réseaux scoiaux</h2>
     <h3><a class="underline" href="https://github.com/bwikp">github</a></h3>
     <h3><a class="underline" href="https://www.linkedin.com/in/michel-zilpa-b66a64235/">linkedin</a></h3>
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
        justify-content: start;
        align-items:start;
        gap: 50px;
        width: 80%;
        font-family: 'lato',sans-serif;
    }
</style>