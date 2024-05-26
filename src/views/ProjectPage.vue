<template>
  <div class="containerProject">
    <div class="gallery">
      <div class="grids post1">
        <a href="https://github.com/bwikp/BookReviewSite" target="_blank"
          >DLBook Front</a
        >
      </div>
      <div class="grids post2">
        <a href="https://github.com/bwikp/ApirestSymfony" target="_blank"
          >DLBook User Api</a
        >
      </div>
      <div class="grids post3"><a href="#">Working on it</a></div>
      <div class="grids post4"><a href="#">Working on it </a></div>
      <div class="grids post5"><a href="#">Working on it </a></div>
      <div class="grids post6"><a href="#">Working on it </a></div>
    </div>
  </div>
</template>
<style scoped>
    .containerProject {
        display: flex;
        flex-direction: column;
        justify-content:  center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 90%;
  grid-gap: 10px;
}
a {
  color: rgb(73, 61, 61);
  font-size: 50px;
  font-weight: 900;
}
a:hover {
  color: rgb(218, 14, 14);
}
.grids {
  background: rgb(189, 192, 189);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  height: 20%;
  width: 100%;
}

.post1:hover {
  background-size: 100%;
  background: rgb(224, 179, 179);
}

.post2:hover {
  background: rgb(159, 156, 231);
}

.post3:hover {
  background: rgb(160, 196, 170);
}
.post4:hover {
  background: rgb(167, 177, 58);
}

.post5:hover {
  background: rgb(122, 71, 138);
}
.post6:hover {
  background: rgb(13, 194, 218);
}
</style>
