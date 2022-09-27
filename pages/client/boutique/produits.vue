<template>
  <div class="has-background-light">
    <Header />
    <Bread active="Boutique mom" />
    <div class="columns mx-2 mx-2 mb-3">
      <div class="column is-one-fifths m-3 border-dotted">
        <div
          class="is-flex is-flex-direction-column is-justify-content-start is-flex-wrap-nowrap"
        >
        <div class="box">
            <p class="mb-2 is-size-6"><b>NOM BOUTIQUE</b></p>
            <hr class="my-4">
            <p class="mb-2">Nom Boutique</p>
            <hr class="m-0">
            <p class="mb-2">+242 06950 0886</p>
            <hr class="m-0">
            <p class="mb-2">alexis.ngoyi@tekissa.net</p>
            <hr class="m-0">
            <p class="mb-2">40 rue Niari</p>
            <p class="mb-2">Ouvert Lundi au Dimanche</p>
            <p class="mb-2">08h00 -18h30</p>
            <hr class="m-0">
            <p class="mb-2">Brazzaville, Congo</p>

            <b-button class="mt-5" label="EDITER" 
              icon-right="pencil" type="is-success"></b-button>
        </div>

          <div class="px-5">
            <p class="mb-2"><b class="is-size-6">Vous travaillez avec Tekissa depuis 12-04-2022 </b></p>
            <span>145 Vendeurs travaillent avec nous</span>
            
            
            <b-button
              class="mx-1 mt-4"
              type="is-danger"
              size="is-small"
              icon-right="lock"
              rounded
              label="FERMER"
            ></b-button>
          </div>
        </div>
      </div>
      <div class="column is-four-fifths p-2 m-3 border-dotted">
        <div class="mx-2">
           <div class="box p-0">
      <div
        class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
      >
        <p class="is-size-6"><b>PRODUITS</b></p>
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
            
          </div>
      </div>
    </div>
    <ProduitPopulaire class="mx-3"/>
    <Footer />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../components/frame/Header.vue";
import Bread from "../../../components/frame/Bread.vue";
import Connexion from "../../../components/frame/Connexion.vue";
import Footer from "../../../components/frame/Footer.vue";
import ProduitPopulaire from "../../../components/snipset/ProduitPopulaire.vue";

export default {
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
      }
    },
  },
  components: { Header, Bread, Connexion, Footer, ProduitPopulaire },
};
</script>
<style>
@import url("~assets/css/main.css");
</style>
