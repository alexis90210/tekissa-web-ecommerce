<template>
  <div class="has-background-link box p-0">
    <div
      class="has-background-link m-0 pt-2 is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between"
    >
      <div class="feature">
        <span class="is-size-6 px-2 has-text-light"
          ><small>Votre adresse </small>:
          <b-icon
            class="px-2"
            type="is-warning"
            icon="map-marker"
            size="is-small"
          ></b-icon>
          <b v-if="location.ip == '' || location.ip == undefined">
            {{ location.city }}, {{ location.country }}</b
          >
          <b v-else> {{ location.ip }}</b></span
        >
      </div>
      <div class="feature">
        <nuxt-link to="/client/boutique" v-if="auth.idBoutique != 'test' && auth.idBoutique != null">
          <span class="is-size-6 px-2 has-text-light"
            ><b-icon class="pr-2" icon="cart" size="is-small"></b-icon>Ma
            Boutique</span
          ></nuxt-link
        >

        <nuxt-link to="/client" v-if="auth.id != 'test' && auth.id != null">
          <span class="is-size-6 px-2 has-text-light"
            ><b-icon class="pr-2" icon="account" size="is-small"></b-icon>Mon
            Compte</span
          ></nuxt-link
        >

        <nuxt-link to="/client/panier"  v-if="auth.id != 'test' && auth.id != null">
          <span class="is-size-6 px-2 has-text-light"
            ><b-icon class="pr-2" icon="shopping" size="is-small"></b-icon>Mes
            reservations</span
          >
        </nuxt-link>

        <nuxt-link to="/auth/login" v-if="auth.id == 'test' || auth.id == null">
          <span class="is-size-6 px-2 has-text-light"
            ><b-icon class="pr-2" icon="lock" size="is-small"></b-icon
            >Se connecter</span
          >
        </nuxt-link>
      </div>
    </div>

    <div
      class="pt-5 pb-5 is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between has-background-link padx py-2 m-0"
    >
      <nuxt-link to="/">
        <div>
          <img
            src="~/assets/images/tekissa.png"
            alt="logo tekissa"
            width="150px"
            class="img-size"
          /></div
      ></nuxt-link>
      <div class="hide-search-bar-content">
        <div
          class="is-flex is-flex-direction-row is-flex-wrap-nowrap search-bar"
        >
          <div class="content-dropdown">
            <p class="categorie text-align-center">
              Filtrez ici
              <b-icon class="" icon="chevron-down" size="is-small"></b-icon>
            </p>
            <div class="dropdown box ml-4 drop-cat">
              <div class="columns">
                <div class="column">
                  <div class="">
                    <small><b>-- Localité -- </b></small>
                  </div>
                  <div class="py-3 px-4">
                    <ul class="list">
                      <li>
                        <b-checkbox size="is-small"
                          ><small>Brazzaville</small></b-checkbox
                        >
                      </li>
                      <li>
                        <b-checkbox size="is-small"
                          ><small>Pointe - Noire</small></b-checkbox
                        >
                      </li>
                      <li>
                        <b-checkbox size="is-small"
                          ><small>Partout</small></b-checkbox
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input class="search" type="text" placeholder="Recherchez ici ..." />
          <button class="boutton"><b-icon icon="magnify"></b-icon></button>
        </div>
      </div>

      <div class="panier grid-center p-0">
        <nuxt-link to="/client/panier">
          <div class="px-3 m-0">
            <span class="shopping-icon px-2">
              <b-icon icon="shopping" type="is-light" size="is-small"></b-icon>
              <span class="panier-size has-text-light">reservations</span>
            </span>
            <span class="shopping-prix has-text-light"></span>
            <span class="shopping-item has-text-dark">
              {{ reservation.total }}</span
            >
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="full-width p-4 grid-center bg-transparent hide-navbar-content">
      <div
        class="menu-custom width-80 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
      >
        <div class=" ">
          <nuxt-link to="/">
            <div>
              <a class="p-2 px-4 border-left-gainsboro" href="#"
                ><span class="nav-item">ACCEUIL</span></a
              >
            </div></nuxt-link
          >
        </div>
        <nuxt-link to="/">
          <div>
            <a class="p-2 px-4 border-left-gainsboro"  :to="{
              path:'/categorie/produit', 
              query:{
                query:'Vêtements'
              }
            }"
              ><span class="nav-item nowrap">{{
                "Vêtements".toLocaleUpperCase()
              }}</span></a
            >
          </div>
       </nuxt-link
          >
        <nuxt-link
        :to="{
              path:'/categorie/produit', 
              query:{
                query:'Électronique'
              }
            }"
              >
          <div>
            <a class="p-2 px-4 border-left-gainsboro" href="#"
              ><span class="nav-item nowrap">{{
                "Électronique".toLocaleUpperCase()
              }}</span></a
            >
          </div>
        </nuxt-link>
        <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Santé et médecine'
              }
            }"
             >
          <div class="">
            <a class="p-2 px-4 border-left-gainsboro"
              ><span class="nav-item" style="white-space: nowrap">{{
                "Santé et médecine".toLocaleUpperCase()
              }}</span></a
            >
          </div></nuxt-link
        ><nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Chaussures et accessoires'
              }
            }"
             >
          <div class="">
            <a class="p-2 px-4 border-left-gainsboro" href="#"
              ><span class="nav-item" style="white-space: nowrap">{{
                "Chaussures et accessoires".toLocaleUpperCase()
              }}</span></a
            >
          </div></nuxt-link
        >
        <nuxt-link  :to="{
              path:'/categorie'
            }">
          <a class="p-2 px-4 border-left-gainsboro-" href="#"
            ><span class="nav-item" style="white-space: nowrap"
              >TOUTES LES CATEGORIES</span
            ></a
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      price: 0,
      location: {},
      reservation:{},
      auth: {
        id: "",
        idBoutique: "",
      },
    };
  },

  mounted() {
    this.auth.idBoutique = this.$cookies.get("idBoutique");
    this.auth.id = this.$cookies.get("id");
  },
  
  async fetch() {
    this.isLoading = true;
    await this.$axios
      .$post("client/ip")
      .then((res) => {
        console.log(res);
        res.code == "success"
          ? (this.location = res.message)
          : (this.location = {});
      })
      .catch((err) => {
        console.error(err);
      });
if(this.auth.id != 'test' && auth.id != null){
    await this.$axios
      .$post("client/reservation/one",{
        id_client:this.auth.id
      }).then((res) => {
        console.log(res);
        res.code == "success"
          ? (this.reservation = res.message)
          : null;
      })
      .catch((err) => {
        console.error(err);
      });
    }
    this.isLoading = false;
  },
  methods: {
  
  },
};
</script>

<style>
@import url("~assets/css/main.css");
</style>
