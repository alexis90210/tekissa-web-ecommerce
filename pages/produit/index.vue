<template>
  <div class="box p-0">
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>
    <div
      class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
    >
      <p class="is-size-6"><b>PRODUITS</b></p>
      <div
        class="is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
      >
        <b-button
          class="mx-1"
          type="is-white"
          :label="'R' + 'ECENT'.toLocaleLowerCase()"
          @click="reloadRecent"
        ></b-button>
        <b-button
          class="mx-1"
          type="is-white"
          :label="'P' + 'OPULAIRE'.toLocaleLowerCase()"
          @click="reloadPopulaire"
        ></b-button>
        <b-button
          class="mx-1"
          type="is-white"
          :label="'P' + 'ROMOTION'.toLocaleLowerCase()"
          @click="reloadPromotion"
        ></b-button>
        <b-button
          class="mx-1"
          type="is-white"
          :label="'B' + 'ESTSELLER'.toLocaleLowerCase()"
          @click="reloadBest"
        ></b-button>

        <b-input placeholder="Recherchez ici" v-model="search"></b-input>
      </div>
    </div>
    <hr class="m-0" />
    <div
      v-if="isLoading"
      class="px-2 pb-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap"
    >
      <div
        v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13, 14, 15]"
        :key="i"
        class="p-2 produit"
        data-aos="ease"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="mx-4 py-2">
          <b-skeleton height="130px" width="200px" active></b-skeleton><br />
          <b-skeleton active width="150px"></b-skeleton> <br />
          <b-skeleton active width="60px"></b-skeleton>
        </div>
      </div>
    </div>
    <div
      v-else
      v-for="(item, i) in filteredItem"
      :key="i"
      class="px-2 pb-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap"
    >
      <ArticleCard :item="item" />
    </div>
  </div>
</template>

<script>
import ArticleCard from "../../components/snipset/ArticleCard.vue";
export default {
  layout: "frame",
  data() {
    return {
      isLoading: false,
      search: "",
      produit: [],
    };
  },
  async fetch() {
    this.isLoading = true;
    await this.$axios.$post("article/all").then((res) => {
      console.log(res);
      res.code == "success"
        ? ((this.produit = res.message), (this.isLoading = false))
        : null;
    });
  },
  methods: {
    async reloadRecent() {
      this.isLoading = true;
      await this.$axios.$post("article/all").then((res) => {
        console.log(res);
        res.code == "success"
          ? ((this.produit = res.message), (this.isLoading = false))
          : null;
      });
    },

    async reloadPromotion() {
      this.isLoading = true;
      await this.$axios
        .$post("article/all", {
          promoton: true,
        })
        .then((res) => {
          console.log(res);
          res.code == "success"
            ? ((this.produit = res.message), (this.isLoading = false))
            : null;
        });
    },

    async reloadPopulaire() {
      this.isLoading = true;
      await this.$axios
        .$post("article/all", {
          populaire: true,
        })
        .then((res) => {
          console.log(res);
          res.code == "success"
            ? ((this.produit = res.message), (this.isLoading = false))
            : null;
        });
    },

    async reloadBest() {
      this.isLoading = true;
      await this.$axios
        .$post("article/all", {
          bestseller: true,
        })
        .then((res) => {
          console.log(res);
          res.code == "success"
            ? ((this.produit = res.message), (this.isLoading = false))
            : null;
        });
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
      } else if (index == 5) {
        if (direction < 0) {
          const carousel = document.querySelector(".annonce-box");
          carousel.scrollLeft -= 500;
        } else {
          const carousel = document.querySelector(".annonce-box");
          carousel.scrollLeft += 500;
        }
      } //
    },
  },
  computed: {
    filteredItem() {
      if (this.search == "") {
        return this.produit;
      } else {
        this.produit.filter((row) => {
          return (
            row.nom.includes(this.search)
          );
        });
      }
    },
  },
  components: { ArticleCard },
};
</script>

<style>
@import url("~assets/css/main.css");
</style>
