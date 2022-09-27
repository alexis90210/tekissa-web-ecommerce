<template>
  <div class="has-background-light">
    <Header />
    <Bread active="Boutique Administration" />
    <ProduitPopulaire class="mx-3" />
    <div class="columns mx-2 mx-2 mb-3">
      <div class="column is-one-fifths m-3 border-dotted">
        <div
          class="is-flex is-flex-direction-column is-justify-content-start is-flex-wrap-nowrap"
        >
        <center v-if="isLoading" class="mb-3">
           
              <b-skeleton width="100%" height="300px" active></b-skeleton>
            
          </center>

          <center v-else>
            <div class="box p-1 mb-4" style="width:100%; ">
            <img style="width:100%; height:300px;" :src="boutique.image" :alt="'logo : ' + boutique.nom ">
          </div>
          </center>

          <div class="box" v-if="isLoading">
            <p class="mb-2 is-size-6">
              <b-skeleton active height="5px"></b-skeleton>
            </p>
            <hr class="my-4" />
            <p class="mb-2"><b-skeleton active height="5px"></b-skeleton></p>
            <hr class="m-0" />
            <p class="mb-2"><b-skeleton active height="5px"></b-skeleton></p>
            <hr class="m-0" />
            <p class="mb-2"><b-skeleton active height="5px"></b-skeleton></p>
            <hr class="m-0" />
            <p class="mb-2"><b-skeleton active height="5px"></b-skeleton></p>
            <hr class="m-0" />
            <p class="mb-2"><b-skeleton active height="5px"></b-skeleton></p>
            <hr class="m-0" />
            <p class="mb-2"><b-skeleton active height="5px"></b-skeleton></p>
            <hr class="m-0" />
            <p class="mb-2"><b-skeleton active height="5px"></b-skeleton></p>

            <b-skeleton active height="40px" width="100px"></b-skeleton>
          </div>

          <div class="box" v-else>
            <p class="mb-2 is-size-6"><b>MA BOUTIQUE</b></p>
            <hr class="my-4" />
            <p class="mb-2"><b class="pr-4">Nom :</b> {{boutique.nom}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Mobile :</b> {{boutique.mobile}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Email :</b> {{boutique.email}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Adresse :</b> {{boutique.adresse}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Qtier :</b> {{boutique.quartier}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Horaire :</b> </p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Ville :</b> {{boutique.ville}}, {{boutique.pays}}</p>

            <b-button
              class="mt-5"
              label="EDITER"
              icon-right="pencil"
              type="is-success"
            ></b-button>
          </div>

          <div class="px-5">
            <p class="mb-2">
              <b class="is-size-6"
                >Vous travaillez avec Tekissa depuis {{boutique.createdAt}}
              </b>
              <br />
              vous et {{ total }} Vendeurs travaillent avec nous
            </p>

            <b-button
              class="mx-1 mt-4"
              type="is-danger"
              size="is-small"
              icon-right="lock"
              rounded
              label="FERMER MA BOUTIQUE"
            ></b-button>
          </div>
        </div>
      </div>
      <div class="column is-three-fifths p-2 m-3 border-dotted">
        <div class="mx-2">
          <div class="my-2">
            <b>PUBLIER UN ARTICLE</b>
          </div>
          <AddArticle />
        </div>
      </div>
    </div>

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
import AddArticle from "../../../components/boutique/AddArticle.vue";

export default {
  middleware: "client",
  data() {
    return {
      boutique: {},
      article: {},
      total: "",
      idBoutique:'',
      isLoading:false,
    };
  },
  async fetch() {
    this.isLoading = true;
    await this.$axios.$post("all/vendeur").then((res) => {
      console.log(res);
      res.code == "success" ? (this.total = res.message.total) : null;
    });

    await this.$axios
      .$post("boutique/one", { id_boutique: this.idBoutique})
      .then((res) => {
        console.log(res);
        res.code == "success"
          ? ((this.boutique = res.message),
            this.$cookies.set("boutique", res.message))
          : this.$buefy.dialog.alert({
              title: "Erreur",
              message: "Veuillez actualiser la page",
              type: "is-danger",
              hasIcon: true,
            });
      });

      this.isLoading = false;
  },
  async mounted(){
    this.idBoutique = await this.$cookies.get("idBoutique") 

    if(this.idBoutique == undefined ) {
      this.$cookies.set('auth', false);
      this.$buefy.notification.open({
        message:'Veuillez vous reconnecter pour gerer votre compte',
        type:'is-danger',
        duration:20000
      })
      location.href = '/auth/login'
    }
  },
  methods: {},
  components: {
    Header,
    Bread,
    Connexion,
    Footer,
    ProduitPopulaire,
    AddArticle,
  },
};
</script>
<style>
@import url("~assets/css/main.css");
</style>
