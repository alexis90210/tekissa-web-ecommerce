<template>
  <div class="has-background-light">
    <Header />
    <Bread active="Login" />
    <div class="columns mx-2 mx-2 mb-3">
      <div class="column is-one-fifths m-3 border-dotted">
        <div
          class="is-flex is-flex-direction-column is-justify-content-start is-flex-wrap-nowrap"
        >
          <div class="box">
            <p class="mb-2 is-size-6">SE CONNECTER AVEC</p>
            <hr class="my-4" />

            <b-button
              expanded
              rounded
              class="my-3"
              label="Facebook"
              icon-left="facebook"
              type="is-link"
            ></b-button>
            <b-button
              expanded
              rounded
              class="my-3"
              label="Gmail"
              outlined
              icon-left="gmail"
              type="is-danger"
            ></b-button>
            <b-button
              expanded
              rounded
              class="my-3"
              label="Twitter"
              icon-left="twitter"
              outlined
              type="is-success"
            ></b-button>
          </div>

          <Connexion />

          <div class="px-5">
            <p class="mb-2">
              <b class="is-size-6">Voulez-vous vendre via Tekissa ? </b>
            </p>
            <span>145 Vendeurs travaillent avec nous</span>
            <br />
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

      <div class="column is-three-fifths p-2 mb-3">
        <form @submit.prevent="newClient">
          <div
            class="box is-flex is-flex-direction-column is-justify-content-space-between"
          >
            <section class="pr-5">
              <b>CREATION DU COMPTE</b>
              <hr />

              <b-field
                label="login"
                horizontal
              >
                <b-input
                  required
                  size="is-medium"
                  v-model="auth.login"
                ></b-input>
              </b-field>

              <b-field label="Password" horizontal>
                <b-input
                  required
                  size="is-medium"
                  type="password"
                  value=""
                  v-model="auth.password"
                  password-reveal
                >
                </b-input>
              </b-field>

              <hr class="my-5" />
              <b-field
                label="Nom"
                horizontal
              >
                <b-input required size="is-medium" v-model="auth.nom"></b-input>
              </b-field>

              <b-field
                label="Prénom"
                horizontal
              >
                <b-input
                  required
                  size="is-medium"
                  v-model="auth.prenom"
                ></b-input>
              </b-field>

              <b-field label="civilité" horizontal>
                <b-select
                  required
                  size="is-medium"
                  expanded
                  v-model="auth.civilite"
                >
                  <option value="1">Homme</option>
                  <option value="2">Femme</option>
                </b-select>
              </b-field>

              <b-field
                label="Email"
                horizontal
              >
                <b-input size="is-medium" type="email" v-model="auth.email">
                </b-input>
              </b-field>

              <b-field label="Mobile" horizontal>
                <b-input required size="is-medium" v-model="auth.mobile">
                </b-input>
              </b-field>

              <hr class="my-5" />

              <b-field label="Ville" horizontal>
                <b-input required size="is-medium" v-model="auth.ville">
                </b-input>
              </b-field>

              <b-field label="Adresse" horizontal>
                <b-input required size="is-medium" v-model="auth.adresse">
                </b-input>
              </b-field>

              <div
                class="pt-5 is-flex is-flex-direction-row is-justify-content-end"
              >
                <b-button
                  label="CREER MAINTENANT"
                  :loading="newclientLoad"
                  native-type="submit"
                  icon-right="arrow-right"
                  rounded
                  type="is-link"
                ></b-button>
              </div>
            </section>
          </div>
        </form>
      </div>
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
      auth: {
        nom: "",
        prenom: "",
        email: "",
        login: "",
        password: "",
        mobile: "",
        civilite: "",
      },
      newclientLoad: false,
    };
  },
  methods: {
    async newClient() {
      this.newclientLoad = true;
      await this.$axios
        .$post("client/new", {
          ...this.auth,
        })
        .then((res) => {
          console.error(res);
          this.auth = {};

          if (res.code == "success") {
            this.$buefy.dialog.alert({
              title: "Success",
              message: `description : la creation de compte s'est effectuée avec succès `,
              hasIcon: true,
              type: "is-success",
            });
          } else {
            this.$buefy.dialog.alert({
              title: "Erreur",
              message: `description : ${res.message.reduce}`,
              hasIcon: true,
              type: "is-danger",
            });
          }
        })
        .catch((err) => {
          this.$buefy.dialog.alert({
            title: "Erreur",
            message: `description : ${err.message.reduce}`,
            hasIcon: true,
            type: "is-danger",
          });
        });
      this.newclientLoad = false;
    },
  },
  components: { Header, Bread, Connexion, Footer, ProduitPopulaire },
};
</script>
<style>
@import url("~assets/css/main.css");
</style>
