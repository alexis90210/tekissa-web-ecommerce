<template>
  <div class="has-background-light">
    <Header />

    <Bread active='Acceuil'/>

    <div class="columns mx-2 mb-3">
      <SideBar />
      <Main />
    </div>

    <Footer />
    <div class="columns px-4" style="background-color: black">
      <div class="column">
        <img src="~/assets/images/fb.png" width="30px" alt="" />
        <img src="~/assets/images/in.png" width="35px" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/frame/Header.vue";
import SideBar from "../components/frame/SideBar.vue";
import Main from "../components/frame/Main.vue";
import Footer from "../components/frame/Footer.vue";
import Bread from "../components/frame/Bread.vue";
export default {
  loadingIndicator: {
    name: 'circle',
    color: '#FFD970',
    background: 'white'
  },
  loading: {
    continuous: true,
     color: 'blue',
    height: '5px'
  },
  data() {
    return {
      show: false,
    };
  },

  components: { Header, SideBar, Main, Footer, Bread },
};
</script>

<style>
@import url("~assets/css/main.css");
</style>
