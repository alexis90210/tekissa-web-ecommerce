<template>
  <div class="has-background-light">
    <Header />
    <Bread active="Boutique creation" />
    <div class="columns mx-2 mx-2 mb-3">
      <div class="column is-one-fifths m-3 border-dotted">
        <div
          class="is-flex is-flex-direction-column is-justify-content-start is-flex-wrap-nowrap"
        >
        <Compte/>

          <div class="px-5 pt-6">
            <p class="mb-2"><b class="is-size-6">Vous etes membre avec Tekissa depuis le {{user.createdAt}} </b></p>
            <span>Vous n'etes pas seul {{client}} autres membres y sont aussi</span>
            
            
            <b-button
              class="mx-1 mt-4"
              type="is-link"
              size="is-small"
              icon-right="arrow-left"
              rounded
              label="VOTRE COMPTE"
              @click="$router.go(-1)"
            ></b-button>
          </div>
        </div>
      </div>
      <div class="column is-three-fifths p-2 m-3 border-dotted">
        <div class="mx-2">
            <div class="my-2">
              <b>CREER VOTRE BOUTIQUE</b>
            </div>
             <CreationBoutique/>
          </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>

import Header from "../../components/frame/Header.vue";
import Bread from "../../components/frame/Bread.vue";
import Connexion from "../../components/frame/Connexion.vue";
import Footer from "../../components/frame/Footer.vue";
import CreationBoutique from "../../components/boutique/CreerBoutique.vue";
import Compte from "../../components/snipset/compte.vue";

export default {
  middleware:'client',
      data() {
      return {
        user:{},
        client:''
      };
        
    },
async fetch(){
  await this.$axios.$post('all/vendeur').then(res => {
    console.log(res);
    res.code == 'success'? this.client = res.message.client : null
  })
},

mounted(){
  this.user = this.$cookies.get('userData');
},

  components: { Header, Bread, Connexion, Footer, CreationBoutique, Compte },
};
</script>
<style>
@import url("~assets/css/main.css");
</style>
