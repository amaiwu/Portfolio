<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        
      ></li>
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="1"
        class="active"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(image, i) in images"
        :key="i"
        :class="{ active: i == 1 }"
      >
        <img
          class="d-block w-100"
          :src="image.src"
          :alt="image.alt"
          height="580px"
          style="object-fit: cover"
        />
        <div class="carousel-caption text-center d-none d-md-block">
          <span>{{ image.caption }}</span>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <div class="control-wrapper">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </div>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <div class="control-wrapper">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["images"]
};
</script>

<style scoped>
.carousel-inner {
  background: radial-gradient(#f6f7f9, #2b2d33);
  border-radius: 4px;
}

.control-wrapper {
  height: 70px;
  width: 70px;
  border-radius: 100%;
   background: #2b2d3385;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-caption span{
      background: #2b2d3385;
      font-size: 16px;
      padding: 5px 10px;
      border-radius: 4px;
}
</style>
