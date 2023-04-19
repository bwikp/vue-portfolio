<template>
    <div class="gallery">
        <div class="grids post1"><a class="gridA" href="/projet/horloge/" target="_blank">L'Horloge</a></div>
        <div class="grids post2"><a class="gridA" href="/projet/MiniProjetJs/" target="_blank">Shifumi</a></div>
        <div class="grids post3"><a class="gridA" href="/projet/TimeTracker/TimeTracker-Sujet/" target="_blank">TimeTracker</a></div>
        <div class="grids post4"><a class="gridA" href="assets/Location.png" target="_blank">Bdd Location de voiture </a></div>
        <div class="grids post5"><a class="gridA" href="/projet/loca-cars/" target="_blank">site location voiture</a></div>
        <div class="grids post6"><a class="gridA" href="#" target="_blank">PRO</a></div>
    </div>
</template>
<style scoped>
.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
    width: 90%;
    grid-gap: 10px;
}

a:hover{
    color:rgb(218, 14, 14);
}
 .grids{
    background: rgb(189, 192, 189);
    display:  flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    transition: 2.5s;
    height: 20%;
    width: 100%;
 }
.post1:hover{       
    background-size: 100%;
    transition: 1s;
    background:rgb(224, 179, 179);
}

.post2:hover{
    background: rgb(159, 156, 231);
    transition: 1s ease-in;
}

.post3:hover{
    background: rgb(160, 196, 170);
    transition: 1s ease-in-out;
}
.post4:hover{
    background: rgb(167, 177, 58);
    transition: 1s ease-in;
}


.post5:hover{
    background: rgb(122, 71, 138);
    transition: 1s ease-in;
}
.post6:hover{
    background: rgb(13, 194, 218);
    transition: 1s ease-in;
}

</style>