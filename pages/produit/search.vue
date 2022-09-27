<template>
    <div class="box p-0">
      <div
        class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
      >
        <p class="is-size-6"><b>PRODUITS CATEGORIE</b></p>
        <div class="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap">
            <b-button
            class="mx-1"
            type="is-white"
            :label="'R'+'ECENT'.toLocaleLowerCase()"
          ></b-button>
          <b-button
          class="mx-1"
            type="is-white"
            :label="'P'+'OPULAIRE'.toLocaleLowerCase()"
          ></b-button>
          <b-button
          class="mx-1"
            type="is-white"
            :label="'P'+'ROMOTION'.toLocaleLowerCase()"
          ></b-button>
        <b-button
          class="mx-1"
            type="is-white"
            :label="'B'+'ESTSELLER'.toLocaleLowerCase()"
          ></b-button>
        
          <b-input placeholder="Recherchez ici"></b-input>
        </div>
      </div>
      <hr class="m-0" />
      <div class="px-2 pb-4  is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap">
        <div
            v-for="i in [1, 2, 3, 4, 6, 8, 9, 12,1, 2, 3, 4, 6, 8, 9, 12]" :key="i"
              class="p-2 produit"
              data-aos="ease"
              data-aos-ease="ease"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <img src="~/assets/images/chaussure.jpg" width="200px" alt="" />
              <div>
                <p class="is-size-6">Floral Print Buttoned</p>
                <b-rate :value="4" size="is-small" class="m-0"></b-rate>
                <p class="is-size-6">
                  <b class="pr-3">450.9 F</b><strike>800 F</strike>
                </p>
              </div>
            </div>
      </div>
    </div>
</template>

<script>
export default{
    layout:'frame',
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