<template>
    <div class="box p-0  mt-5 is-centered">
          <div
            class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
          >
            <p class="is-size-6"><b>ANNONCE</b></p>
            <div class="nowrap">
              <b-button
                icon-left="arrow-left"
                type="is-light"
                @click="pushgo(-1, 5)"
              ></b-button>
              <b-button
                icon-left="arrow-right"
                type="is-light"
                @click="pushgo(2, 5)"
              ></b-button>
            </div>
          </div>
          <hr class="m-0" />

          <div class="mt-2 annonce-box">
            <ul class="annonce py-4">
              <li v-for="i in [1, 2, 3, 4, 6, 8, 9, 12]" :key="i">
                <div
                  class="p-2 produit is-flex is-flex-direction-row is-justify-content-start has-background-light m-2"
                  data-aos="ease"
                  data-aos-ease="ease"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  <img
                    src="~/assets/images/chaussure.jpg"
                    width="50px"
                    alt=""
                  />
                  <div class="pl-2">
                    <p class="is-size-6">Annonce 1</p>
                    <small class="is-size-7">Date jour</small>
                  </div>
                </div>

                <div
                  class="p-2 produit is-flex is-flex-direction-row is-justify-content-start has-background-light m-2"
                  data-aos="ease"
                  data-aos-ease="ease"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  <img
                    src="~/assets/images/chaussure.jpg"
                    width="50px"
                    alt=""
                  />
                  <div class="pl-2">
                    <p class="is-size-6">Annnonce 2</p>
                    <small class="is-size-7">Date jour</small>
                  </div>
                </div>

                <div
                  class="p-2 produit is-flex is-flex-direction-row is-justify-content-start has-background-light m-2"
                  data-aos="ease"
                  data-aos-ease="ease"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  <img
                    src="~/assets/images/chaussure.jpg"
                    width="50px"
                    alt=""
                  />
                  <div class="pl-2">
                    <p class="is-size-6">Annnonce 2</p>
                    <small class="is-size-7">Date jour</small>
                  </div>
                </div>

                
              </li>
              <li v-for="i in [1, 2, 3, 4, 6, 8, 9, 12]" :key="i">
                <div
                  class="p-2 produit is-flex is-flex-direction-row is-justify-content-space-between m-2"
                  data-aos="ease"
                  data-aos-ease="ease"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  <img
                    src="~/assets/images/chaussure.jpg"
                    width="50px"
                    alt=""
                  />
                  <div class="p-2">
                    <p class="is-size-6">Annonce 1</p>
                    <small class="is-size-7">Date jour</small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
export default{
    data() {
        return {

        };
    },
  methods: {
    pushgo(direction, index) {
    if (index == 0) {
      if (direction < 0) {
        const carousel = document.querySelector(".carousel-new-product");
        carousel.scrollLeft -= 500;
      } else {
        const carousel = document.querySelector(".carousel-new-product");
        carousel.scrollLeft += 500;
      }
    } else if (index == 1) {
      if (direction < 0) {
        const carousel = document.querySelector(
          ".carousel-populaire-product"
        );
        carousel.scrollLeft -= 500;
      } else {
        const carousel = document.querySelector(
          ".carousel-populaire-product"
        );
        carousel.scrollLeft += 500;
      }
    } else if (index == 3) {
      if (direction < 0) {
        const carousel = document.querySelector(".carousel-boutique");
        carousel.scrollLeft -= 500;
      } else {
        const carousel = document.querySelector(".carousel-boutique");
        carousel.scrollLeft += 500;
      }
    } else if (index == 4) {
      if (direction < 0) {
        const carousel = document.querySelector(".carousel-bs");
        carousel.scrollLeft -= 500;
      } else {
        const carousel = document.querySelector(".carousel-bs");
        carousel.scrollLeft += 500;
      }
    } else if (index == 5) {
      if (direction < 0) {
        const carousel = document.querySelector(".annonce-box");
        carousel.scrollLeft -= 500;
      } else {
        const carousel = document.querySelector(".annonce-box");
        carousel.scrollLeft += 500;
      }
    } //
  }
  },
}
</script>

<style>

@import url('~assets/css/main.css');</style>