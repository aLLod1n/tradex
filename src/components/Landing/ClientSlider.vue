<template>
  <VueSlickCarousel
    v-bind="settings"
    class="client-slide owl-carousel owl-theme"
  >
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/1.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/2.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/3.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/4.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/5.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/1.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/2.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/3.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/1.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/2.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/3.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/4.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/5.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/1.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/2.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
    <div class="client-logo text-center">
      <a href="#!"
        ><img
          class="img-fluid"
          src="../../assets/images/brand/3.webp"
          loading="lazy"
          alt="…"
      /></a>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "ClientSlider",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
