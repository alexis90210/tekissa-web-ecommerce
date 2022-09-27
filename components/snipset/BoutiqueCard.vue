<template >
    <nuxt-link :to="{path:'/client/boutique', query:{
nom:item.nom,
position:item.id_boutique
    }}">
             <div
              class="p-2 produit mx-5 pb-5 selected-img"
              data-aos="ease"
              data-aos-ease="ease"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <img
                :src="item.image"
                class="logo-butique"
                width="140px"
                :alt="item.nom"
              />
              <center>
                <p class="is-size-6 has-text-dark">
                  <b class="has-text-dark">{{item.nom}} </b>
                </p>
                <p class="fsmall  has-text-dark">{{item.adresse}},{{item.quartier}}</p>
                <p class="fsmall has-text-dark">{{item.ville}}, {{item.pays}}</p>
              </center>
            </div>
            </nuxt-link>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
      default: {},
    },
  },
  data() {
    return {};
  },
  mounted() {
  
  },
};
</script>

<style>
@import url("~assets/css/main.css");
</style>
