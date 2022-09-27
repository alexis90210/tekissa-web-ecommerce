<template>
  <form @submit.prevent="createArticle">
    <b-loading
      :is-full-page="true"
      :can-cancel="false"
      v-model="isLoadingPage"
    ></b-loading>
    <div class="box m-2 my-3">
      <div class="columns is-multiligne">
        <div class="column">
          <b>Etape 1 : </b>
        </div>
      </div>

      <div class="columns is-multiligne">
        <div class="column">
          <b-field label="Nom de l'article" label-position="on-border">
            <b-input required v-model="article.nom"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-multiligne">
        <div class="column">
          <b-field label="prix de l'article" label-position="on-border">
            <b-input required v-model="article.prix"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns is-multiligne">
        <div class="column">
          <b-field label="Quantite" label-position="on-border">
            <b-input required v-model="article.quantite"></b-input>
          </b-field>
        </div>
      </div>
    </div>

    <div class="box m-2 my-3">
      <div class="columns is-multiligne">
        <div class="column">
          <b>Etape 2 : </b>
        </div>
      </div>

      <div class="columns is-multiligne">
        <div class="column">
          <b-field label="Etat de l'article" label-position="on-border">
            <b-select expanded v-model="article.etat">
              <option value="Neuf">Neuf</option>
              <option value="Neuf + carton">Neuf + carton</option>
              <option value="Pas Neuf">Pas Neuf</option>
              <option value="Pas Neuf + carton">Pas Neuf + carton</option>
            </b-select>
          </b-field>
        </div>

        <div class="column">
          <b-field label="En Promotion ?" label-position="on-border">
            <b-select expanded v-model="article.promotion">
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </b-select>
          </b-field>
        </div>
      </div>

      <div class="columns pb-6" v-if="article.promotion == 'Oui'">
        <div class="column">
          <b-field label="Duree de la promotion">
            <b-datetimepicker
              v-model="article.date"
              rounded
              placeholder="Click to select..."
              icon="calendar-today"
              :icon-right="selected ? 'close-circle' : ''"
              icon-right-clickable
              @icon-right-click="clearDateTime"
              :locale="locale"
              :first-day-of-week="firstDayOfWeek"
              :datepicker="{ showWeekNumber }"
              :timepicker="{ enableSeconds, hourFormat }"
              horizontal-time-picker
            >
              <template #left>
                <b-button
                  label="Maintenant"
                  type="is-primary"
                  icon-left="clock"
                  @click="datetime = new Date()"
                />
              </template>
            </b-datetimepicker>
          </b-field>
        </div>
      </div>
    </div>

    <div class="box m-2 my-3">
      <div class="columns is-multiligne">
        <div class="column">
          <b>Etape 3 : Dans quelle categorie se classe votre article ? </b>
        </div>
      </div>

      <div class="is-flex is-flex-direction-row is-flex-wrap-wrap">
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Machines"
          type="is-link"
        >
          <span>Machines</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Pièces et accessoires pour véhicules"
          type="is-link"
        >
          <span> Pièces et accessoires pour véhicules</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Véhicules et transport Électronique grand public"
          type="is-link"
        >
          <span> Véhicules et transport Électronique grand public</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Appareils électroménagers Vêtements"
          type="is-link"
        >
          <span> Appareils électroménagers Vêtements </span>
        </b-checkbox-button>

        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Accessoires de mode"
          type="is-link"
        >
          <span> Accessoires de mode </span> </b-checkbox-button
        ><b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Horlogerie, Bijouterie, Lunetterie"
          type="is-link"
        >
          <span> Horlogerie, Bijouterie, Lunetterie </span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value=" Construction et immobilier Maison et jardin"
          type="is-link"
        >
          <span> Construction et immobilier Maison et jardin</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Meubles"
          type="is-link"
        >
          <span> Meubles</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Matières premières pour tissus et textiles"
          type="is-link"
        >
          <span> Matières premières pour tissus et textiles</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Beauté et soins personnels"
          type="is-link"
        >
          <span>Beauté et soins personnels </span> </b-checkbox-button
        ><b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Santé et médecine"
          type="is-link"
        >
          <span> Santé et médecine</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Fournitures de bureau, et scolaires"
          type="is-link"
        >
          <span> Fournitures de bureau, et scolaires</span>
        </b-checkbox-button>

        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Lumières et éclairage"
          type="is-link"
        >
          <span> Lumières et éclairage</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Sécurité"
          type="is-link"
        >
          <span> Sécurité</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Services de fabrication Équipement électrique et
                fournitures"
          type="is-link"
        >
          <span>
            Services de fabrication Équipement électrique et fournitures</span
          >
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Composants électroniques, accessoires et télécommunications"
          type="is-link"
        >
          <span>
            Composants électroniques, accessoires et télécommunications
          </span> </b-checkbox-button
        ><b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Sports , jouets et loisirs"
          type="is-link"
        >
          <span> Sports , jouets et loisirs</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="objets artisanaux Bagages, sacs et étuis"
          type="is-link"
        >
          <span>Ojets artisanaux, Bagages, sacs et étuis</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Chaussures et accessoires"
          type="is-link"
        >
          <span> Chaussures et accessoires </span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Métaux , alliages et Produits chimiques"
          type="is-link"
        >
          <span> Métaux , alliages et Produits chimiques</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Agriculture"
          type="is-link"
        >
          <span> Agriculture</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Aliments et boissons"
          type="is-link"
        >
          <span> Aliments et boissons</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Équipement de service"
          type="is-link"
        >
          <span> Équipement de service</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Énergie"
          type="is-link"
        >
          <span> Énergie</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Environnement Transmission d'énergie"
          type="is-link"
        >
          <span> Environnement Transmission d'énergie</span>
        </b-checkbox-button>
        <b-checkbox-button
          class="m-1"
          v-model="article.categorie"
          native-value="Matériel de manutention"
          type="is-link"
        >
          <span> Matériel de manutention</span>
        </b-checkbox-button>
      </div>
    </div>

    <div class="box m-2 my-3">
      <div class="columns is-multiligne">
        <div class="column">
          <b-field label="Couleurs" label-position="on-border">
            <b-taginput
              v-model="article.couleurs"
              :maxlength="10"
              :maxtags="20"
            >
            </b-taginput>
          </b-field>
        </div>
      </div>
      <div class="columns is-multiligne">
        <div class="column">
          <b-field label="Description de l'article" label-position="on-border">
            <b-input
              required
              type="textarea"
              v-model="article.description"
            ></b-input>
          </b-field>
        </div>
      </div>
    </div>
    <section class="box m-2 my-3">
      <div class="columns is-multiligne">
        <div class="column">
          <b>Etape 4 : </b>
        </div>
      </div>
      <b-field>
        <b-upload
          v-model="dropFiles"
          :disabled="dropFiles.length > 3 ? true : false"
          multiple
          drag-drop
          expanded
        >
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="camera" size="is-large"></b-icon>
              </p>
              <p>Deposez vos image ou cliquez pour selectionner</p>
            </div>
          </section>
        </b-upload>
      </b-field>

      <div
        class="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap"
      >
        <img
          :src="loadFile(file)"
          width="300px"
          class="box p-0 m-2"
          alt=""
          @dblclick="deleteDropFile(index)"
          v-for="(file, index) in dropFiles"
          :key="index"
        />
      </div>

      <b-button
        label="POSTER MAINTENANT"
        native-type="submit"
        :loading="isLoadingCreation"
        type="is-link"
        class="my-2"
      ></b-button>
    </section>
  </form>
</template>

<script>
export default {
  data() {
    return {
      file: {},
      showWeekNumber: false,
      enableSeconds: false,
      hourFormat: undefined, // Browser locale
      locale: undefined, // Browser locale
      firstDayOfWeek: undefined, // 0 - Sunday,
      article: {
        couleurs: ["Rouge", "Vert", "Bleu"],
        nom: "",
        prix: "",
        quantite: "",
        date: new Date(),
        etat: "",
        promotion: "",
        categorie: [],
        images: [],
        description: "",
      },
      dropFiles: [],
      isLoading: false,
      isLoadingPage: false,
      isLoadingCreation: false,
      idBoutique: "",
      selected: null,
    };
  },
  mounted() {
    this.idBoutique = this.$cookies.get("idBoutique");
    this.article.id_boutique = this.idBoutique;
  },
  methods: {
    clearDateTime() {
      this.article.date = null;
    },
    loadFile(file) {
      return URL.createObjectURL(file);
    },
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },

    async createArticle() {
      var len = this.dropFiles.length;
      var lastItem = 0;
      var urls = [];
      this.isLoadingPage = true;

      this.dropFiles.map(async (item) => {
        lastItem += 1;
        const form = new FormData();
        form.append("asset", item);

        await this.$axios.$post("photo/article/truncated", form).then((res) => {
          res.code == "success"
            ? urls.push(res.message)
            : this.$buefy.dialog.alert({
                title: "Erreur",
                message: "Nous n'avons pas pu uploader les images",
                type: "is-danger",
                hasIcon: true,
              });

          lastItem == this.dropFiles.length ? this.storeData(urls) : null;
        });
      });

      this.isLoadingPage = false;
    },

    async storeData(url) {
      await this.$axios
        .$post("article/new", {
          ...this.article,
          images: url,
        })
        .then((res) => {
          console.log(res);
          (this.article.couleurs = ["Rouge", "Vert", "Bleu"]),
            (this.article.nom = ""),
            (this.article.prix = ""),
            (this.article.quantite = ""),
            (this.article.date = new Date()),
            (this.article.etat = ""),
            (this.article.promotion = ""),
            (this.article.categorie = []),
            (this.article.images = []),
            (this.article.description = ""),
            res.code == "success"
              ? this.$buefy.dialog.alert({
                  title: "Succes",
                  message:
                    "Votre article a ete poste avec succes,et en attente de validation",
                  type: "is-success",
                  hasIcon: true,
                })
              : this.$buefy.dialog.alert({
                  title: "Erreur",
                  message: "Nous n'avons pas pu publier votre article",
                  type: "is-danger",
                  hasIcon: true,
                });
        });
    },
  },
};
</script>
