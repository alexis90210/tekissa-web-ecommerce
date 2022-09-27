<template>
    <div class="box p-0">
      <div
        class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap"
      >
        <p class="is-size-6"><b>BOUTIQUE</b></p>
        <div class="nowrap">
          
          <b-input placeholder="Recherchez ici"></b-input>
        </div>
      </div>
      <hr class="m-0" />
      <div class="px-2 pb-4  is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap">
  
            <BoutiqueCard v-for="i in [1, 2, 3, 4, 6, 8, 9, 12,1, 2, 3, 4, 6, 8, 9, 12]" :key="i"/>
      </div>
    </div>
</template>

<script>
import BoutiqueCard from "../../components/snipset/BoutiqueCard.vue";
export default{
    layout: "frame",
    data() {
        return {};
    },
    methods: {
        pushgo(direction, index) {
            if (index == 0) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-new-product");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-new-product");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 1) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-populaire-product");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-populaire-product");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 3) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-boutique");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-boutique");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 4) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-bs");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-bs");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 5) {
                if (direction < 0) {
                    const carousel = document.querySelector(".annonce-box");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".annonce-box");
                    carousel.scrollLeft += 500;
                }
            } //
        }
    },
    components: { BoutiqueCard }
}
</script>

<style>

@import url('~assets/css/main.css');</style>