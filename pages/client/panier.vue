<template>
<div class="has-background-light">
  <b-loading is-full-page :can-cancel="false" v-model="isLoading"></b-loading>
    
    <Header />
    <Bread active="Wishlist" />
    <div class="columns mx-2 mx-2 mb-3">
      <div class="column is-one-fifths m-3 border-dotted">
        <div
          class="is-flex is-flex-direction-column is-justify-content-start is-flex-wrap-nowrap"
        >
        <Connexion/>

          <div class="px-5">
            <p class="mb-2"><b class="is-size-6">Voulez-vous vendre via Tekissa ? </b></p>
            <span>145 Vendeurs travaillent avec nous</span>
            
            
            <b-button
              class="mx-1 mt-4"
              type="is-link"
              size="is-small"
              rounded
              label="COMMENCER ?"
            ></b-button>
          </div>
        </div>
      </div>
      <div class="column is-four-fifths p-2 mb-3">
         <div class="box is-flex is-flex-direction-row is-justify-content-space-between"
         v-for="i in [1,8,7,8,9,0]" :key="i">
            <div class="is-flex is-flex-direction-row">
                 <img src="https://tekissa.net/_nuxt/img/chaussure.ee3a85e.jpg" width="100px" alt="">
             <div class="px-5">
                  <p>Produit nom</p> 
                  <b>Boutique</b> 
                  <b-rate :value="5" size="is-small" class="my-1" disabled></b-rate> 
                  <p class="is-size-6">
                    Couleur : <i><b class="is-size-6">Rouge</b></i>
                  </p>
                  <p class="is-size-6">
                    Prix : <i><b class="is-size-6">1500 F</b></i>
                  </p>
              </div>
            </div>
              <div class="pt-5">
                  <b-button icon-left="delete"  outlined rounded type="is-danger"></b-button>
                  <b-button icon-left="cart"  outlined rounded type="is-link" label="PANIER"></b-button>
              </div>
         </div>
      </div>
    </div>
   <div class="mx-4 mb-6 mt-3">
        <ProduitPopulaire/>
   </div>
    <Footer />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/frame/Header.vue";
import Bread from "../../components/frame/Bread.vue";
import Connexion from "../../components/frame/Connexion.vue";
import Footer from "../../components/frame/Footer.vue";
import ProduitPopulaire from "../../components/snipset/ProduitPopulaire.vue";

export default {
  data() {
    return {
      reservation:[],
      price:0,
      id_client:'',
      isLoading:false
    };
  },
  mounted(){

      this.id_client = this.$cookies.get("id");
  
  },
  async fetch(){
    this.isLoading = true;
    await this.$axios.$post('client/reservation/one',{
      id_client: this.id_client
    }).then(res =>{
        res.code == 'success' ? this.reservation = res.message: this.$buefy.dialog.alert({
          message: res.message,
          type: "is-danger",
          hasIcon:true
        })
    })
    this.isLoading = false;
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
