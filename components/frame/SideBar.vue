<template>
     <div class="column is-one-fifths p-0 ">
        <div
          class="box p-0 mt-2"
          data-aos="ease"
          data-aos-ease="ease"
          data-aos-duration="1500"
          data-aos-delay="500"
        >

         <div
            class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
          >
            <p class="is-size-6 has-text-dark"><b>Categorie</b></p>
            
              <b-button
              label="Tous"
              @click="$router.push({path:'/categorie'})"
                icon-left="menu"
                type="is-light"
              ></b-button>
        
          </div>
          <hr class="m-0" />

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Vêtements & Accessoires'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon
                class="p-3"
                icon="dresser-outline"
                size="is-small"
              ></b-icon>
              Vêtements & Accessoires
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Électronique grand public'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="laptop" size="is-small"></b-icon>
              Électronique grand public
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Machines'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="car" size="is-small"></b-icon>
              Machines
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Lumières et éclairage'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="lamp" size="is-small"></b-icon> Lumières et éclairage
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Construction et immobilier'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="home" size="is-small"></b-icon>
              Construction et immobilier
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Beauté et soins personnels'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="diamond-stone" size="is-small"></b-icon>
              Beauté et soins personnels
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Santé et médecine'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="needle" size="is-small"></b-icon> Santé et médecine
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Maison et jardin'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="home" size="is-small"></b-icon>
              Maison et jardin
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Fournitures de bureau et scolaires'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="pencil" size="is-small"></b-icon>
              Fournitures de bureau et scolaires
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Sports et loisirs'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="basketball" size="is-small"></b-icon>
              Sports et loisirs
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'objets artisanaux'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="microwave" size="is-small"></b-icon>
              objets artisanaux
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

           <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Chaussures et accessoires'
              }
            }"><div
            class="border-bottom px-2 py-3 side-categorie-item is-flex is-flex-direction-row is-justify-content-space-between"
          >
            <p class="is-size-6 has-text-dark">
              <b-icon class="p-3" icon="walk" size="is-small"></b-icon>
              Chaussures et accessoires
            </p>
            <p><b-icon icon="arrow-right" type="is-dark" size="is-small"></b-icon></p>
          </div></nuxt-link>

        </div>

        <Connexion/>
        
        <div
          class="box p-0  mt-5 is-centered"
          data-aos="ease"
          data-aos-ease="ease"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <div
            class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
          >
            <p class="is-size-6 has-text-dark"><b>APPLICATION ANDROID</b></p>
            <div class="nowrap">
              <b-button
                icon-left="download"
                type="is-light"
              ></b-button>
            </div>
          </div>
          <hr class="m-0" />
          <center class="mt-2">
            <img src="~/assets/images/app.png" alt="" class="p-0" />
          </center>
        </div>   

        <!-- <Annonce/> -->

        

        <NewLetter/>

      </div>
</template>

<script>
import Annonce from "./Annonce.vue";
import Connexion from "./Connexion.vue";
import NewLetter from "./NewLetter.vue";
export default{
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
    components: { Annonce, Connexion, NewLetter }
}
</script>

<style>

@import url('~assets/css/main.css');</style>