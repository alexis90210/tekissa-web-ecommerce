<template>
  <div class="has-background-light">
    <Header />
    <Bread active="Compte d'utilisateur" />
    <div class="columns mx-2 mx-2 mb-3">
      <div class="column is-one-fifths m-3 border-dotted">
        <div
          class="is-flex is-flex-direction-column is-justify-content-start is-flex-wrap-nowrap"
        >
          <Compte/>
          <Connexion/>
          <ContactClient/>

          <div class="px-5 py-4" v-if="$cookies.get('idBoutique') == ''">
            <p class="mb-2">
              <b class="is-size-6">Voulez-vous vendre via Tekissa ? </b>
            </p>
            <p class="my-3" v-if="total != ''">{{total}} Vendeurs travaillent avec nous</p>
             <p class="my-3" v-if="total == ''">Soyez le premier Vendeur à travailler avec nous</p>

            <b-button
              class="mx-1 mt-4"
              type="is-link"
              size="is-small"
              rounded
              label="COMMENCER ?"
              @click="$router.push({path:'/client/creer-votre-boutique'})"
            ></b-button>
          </div>

          <div class="px-5 py-4" v-else>
            <p class="mb-2">
              <b class="is-size-6">Aller a l'administration de votre boutique </b>
            </p>
            <p class="my-3" v-if="total != ''">vous et {{total}} Vendeurs travaillent avec nous</p>
             
            <b-button
              class="mx-1 mt-4"
              type="is-link"
              size="is-small"
              rounded
              label="GESTION DE MA BOUTIQUE"
              @click="$router.push({path:'/client/boutique'})"
            ></b-button>
          </div>

        </div>
      </div>
      <div class="column is-three-fifths p-2 m-3 border-dotted">
         <Nuxt/>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>

import Header from "../components/frame/Header.vue";
import Bread from "../components/frame/Bread.vue";
import Connexion from "../components/frame/Connexion.vue";
import Footer from "../components/frame/Footer.vue";
import ProduitPopulaire from "../components/snipset/ProduitPopulaire.vue";
import Compte from "../components/snipset/compte.vue";
import ContactClient from "../components/snipset/ContactClient.vue";


export default {
   middleware:'client',
  data() {
    return {
      total:''
    };
  },
async fetch(){
  await this.$axios.$post('all/vendeur').then(res => {
    console.log(res);
    res.code == 'success'? this.total = res.message.total : null
  })
},
  components: { Header, Bread, Connexion, Footer, ProduitPopulaire, Compte, ContactClient },
};
</script>
<style>
@import url("~assets/css/main.css");
</style>
