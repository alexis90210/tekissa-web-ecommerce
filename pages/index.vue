<template>
  <div class="">
    <div class="mx-3 is-centered mb-5">
      <img
        src="~/assets/images/home.png"
        height="500px"
        class="banner"
        alt=""
      />
    </div>

    <NewProduct />
    <BoutiqueList />

    <div class="is-centered my-6 box p-1">
      <img src="~/assets/images/banner3.png" class="banner" alt="" />
    </div>

    <ProduitPopulaire />
    <BestSeller />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import BestSeller from "~/components/snipset/BestSeller.vue";
import BoutiqueList from "../components/snipset/BoutiqueList.vue";
import ProduitPopulaire from "../components/snipset/ProduitPopulaire.vue";
import NewProduct from "../components/snipset/NewProduct.vue";
export default {
  layout: "frame",
  data() {
    return {};
  },
  mounted(){
    this.$cookies.set('id','test' );
    this.$cookies.set('idBoutique','test');
    this.$cookies.set('userData',{});
    this.$cookies.set('auth', false);
    this.$cookies.set('status', 'test');
  },
  methods: {
    
  },
  components: {
    BestSeller,
    BoutiqueList,
    ProduitPopulaire,
    NewProduct,
  },
};
</script>
<style>
@import url("~assets/css/main.css");
</style>

