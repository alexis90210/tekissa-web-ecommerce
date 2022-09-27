<template>
  <div class="has-background-light">
    <b-loading is-full-page :can-cancel="false" v-model="isLoading"></b-loading>
    <Header />
    <Bread :active="details.nom" />
    <div class="columns mx-2 mx-2 mb-3">
      <div class="column is-one-fifths m-3 border-dotted">
        <div
          class="is-flex is-flex-direction-column is-justify-content-start is-flex-wrap-nowrap"
        >
          <div>
            <img :src="boutique.image" width="130px" alt="" />
          </div>
          <div class="px-5">
            <p class="mb-2">
              <b class="is-size-4">{{ boutique.nom }}</b>
            </p>
            <div
              class="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
            >
              <b-rate
                size="is-small"
                :value="boutique.pop"
              ></b-rate>
              <span> {{ boutique.pop }} Abonné(es)</span>
            </div>
            <p class="is-size-6 py-2"><b class="is-size-6">Ouvert</b> :</p>
            <p class="is-size-6 py-2">
              <b class="is-size-6">Adresse</b> : {{ boutique.adresse }}
            </p>
            <p class="is-size-6 py-2">
              <b class="is-size-6">Ville</b> : {{ boutique.ville }}
            </p>
            <p class="is-size-6 py-2">
              <b class="is-size-6">Pays</b> : {{ boutique.pays }}
            </p>
            <p class="is-size-6 py-2">
              <b class="is-size-6">Mobile</b> : {{ boutique.mobile }}
            </p>
            
            <div
              class="py-2 is-flex is-flex-direction-row
               is-justify-content-space-between 
              is-flex-wrap-wrap"
            >
            <div class="tag has-text-light has-background-link m-1 is-size-7" v-for="(i,j) in boutique.tags" :key="j">{{i}}</div>
            </div>
            <b-button
              class="mx-1 mt-6"
              type="is-warning"
              style="float: right"
              icon-right="arrow-right"
              label="CONSULTER"
              @click="
                $router.push({
                  path: '/client/boutique',
                  query: {
                    nom: boutique.nom,
                    id: boutique.id_boutique,
                  },
                })
              "
            ></b-button>
          </div>
        </div>
      </div>
      <div class="column is-four-fifths p-2 mb-3">
        <div
          class="box mr-6 px-4 py-6 is-flex is-flex-direction-row is-justify-content-start is-flex-wrap-nowrap"
        >
          <div>
            <img :src="visible" width="400px" alt="" />
            <hr class="m-0" />
            <div
              class="mt-2 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
            >
              <img
                v-for="(i, j) in details.images"
                :key="j"
                class="mx-1 selected-img"
                :src="i"
                @click="visible = i"
                width="100px"
                alt=""
              />
            </div>
          </div>
          <div class="px-5">
            <p class="mb-2">
              <b class="is-size-3">{{ details.nom }}</b>
            </p>
            <div
              class="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
            >
              <b-rate
                size="is-small"
                :value="
                  parseInt(details.pop) ||
                  parseInt(details.best) ||
                  parseInt(details.star)
                "
              ></b-rate>
              <span>{{ parseInt(details.pop) }} vue (s)</span>
            </div>
            <p class="is-size-6">
              <b class="is-size-6">Disponibilité</b> :
              <i class="has-text-danger">{{
                parseInt(details.quantite) > 3
                  ? "En Stock"
                  : `${parseInt(details.quantite)} Restant`
              }}</i>
            </p>
            <p class="is-size-6">
              {{ details.description }}
            </p>
            <hr />
            <div
              class="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
            >
              <p>
                <b class="is-size-4">{{ details.prix }} F</b>
                <!-- <strike class="is-size-6 px-3 opacity-7">20.000F</strike> -->
              </p>
              <div>
                <b-button
                  class="mx-1"
                  type="is-success"
                  icon-left="hand-heart"
                  @click="addWishlist"
                  :loading="isLoadingBtn"
                  label=""
                  outlined
                ></b-button>
                <b-button
                  class="mx-1"
                  type="is-danger"
                  icon-left="email"
                  label="DEBATTRE"
                ></b-button>
              </div>
            </div>

            <hr />
            <div class="my-2">
              <b-field label="Couleur" group-multiline grouped>
                <b-radio-button
                  v-model="color"
                  v-for="(item, i) in details.couleurs"
                  :key="i"
                  :native-value="item"
                  type="is-link"
                >
                  <b-icon :icon="color == item ? 'check' : 'close'"></b-icon>
                  <span>{{ item }}</span>
                </b-radio-button>
              </b-field>
            </div>

            <div class="mt-4">
              <b-field label="Quantité" :type="quantite < 1 ? 'is-danger' : ''">
                <p class="control">
                  <b-button
                  @click="addToReservation"
                    type="is-success"
                    icon-left="cart-outline"
                    label="RESERVATION"
                  />
                </p>
                <b-numberinput
                  v-model="quantite"
                  expanded
                  controls-position="compact"
                  controls-alignment="right"
                />
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-4 mb-6 mt-3">
      <ProduitPopulaire />
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
      quantite: 1,
      visible: "",
      image: [],
      color: "",
      isLoading: false,
      details: {},
      boutique: {},
      isLoadingBtn: false,
    };
  },
  async fetch() {
    this.isLoading = true;
    await this.$axios
      .$post("boutique/one", { id_boutique: this.$route.query.id_boutique })
      .then((res) => {
        console.log(res);
        res.code == "success" ? (this.boutique = res.message) : null;
      });
    this.isLoading = false;
  },

  async mounted() {
    this.details = this.$route.query;
    this.color = this.details.couleurs;
    this.visible = this.details.images[0];
    this.details.id_client = this.$cookies.get("id");

    this.addToPopulaire();
  },
  methods: {
   async addToReservation() {
       if(this.$cookies.get('id') != null){
         if(typeof this.color == 'string'){
         var item = {
          ...this.details,
          quantite: this.quantite,
          color: this.color,
        };

        await this.$axios.$post('reservation/new',{
          panier:item,
          id_client: this.details.id_client
        }).then(res => {
          res.code == 'success' ? this.$buefy.dialog.alert({
          message: res.message,
          type: "is-success",
        }):this.$buefy.dialog.alert({
          message: res.message,
          type: "is-danger",
        });
        })
       } else {
         this.$buefy.notification.open({
          message: "Alerte, vous devez choisir une couleur",
          type: "is-danger",
          duration: 5000,
        });
       }
       } else {
         this.$buefy.notification.open({
          message: "Alerte, vous devez etre connecté",
          type: "is-danger",
          duration: 5000,
        });
       }
    },

    async addWishlist() {
      if (this.$cookies.get("id") == null) {
        this.$buefy.notification.open({
          message: "Alerte, vous devez etre connecté",
          type: "is-danger",
          duration: 5000,
        });
      } else {
        this.isLoadingBtn = true;
        await this.$axios
          .$post("client/wishlist", {
            id_article: this.details.id_article,
            id_client: this.details.id_client,
          })
          .then((res) => {
            res.code == "success"
              ? this.$buefy.notification.open({
                  message: res.message,
                  type: "is-success",
                  duration: 5000,
                })
              : this.$buefy.notification.open({
                  message: res.message,
                  type: "is-danger",
                  duration: 5000,
                });
          });
        this.isLoadingBtn = false;
      }
    },

    async addToPopulaire() {
      await this.$axios
        .$post("add/populaire", {
          id_element: this.details.id_article,
          statut: "2",
        })
        .catch((err) => {
          console.log(err);
        });
      this.isLoadingBtn = false;
    },

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
