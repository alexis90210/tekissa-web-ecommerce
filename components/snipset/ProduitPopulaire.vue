<template>
    <div class="box p-0">
      <div
        class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
      >
        <p class="is-size-6"><b>PRODUITS POPULAIRES</b></p>
        <div class="nowrap">
          <b-button
            icon-left="menu"
            type="is-light"
            label="Tous"
            @click="$router.push({
              path:'/produit'
            })"
          ></b-button>
          <b-button
            icon-left="arrow-left"
            type="is-light"
            @click="pushgo(-1, 1)"
          ></b-button>
          <b-button
            icon-left="arrow-right"
            type="is-light"
            @click="pushgo(2, 1)"
          ></b-button>
        </div>
      </div>
      <hr class="m-0" />
      <div class="px-2 pb-4">
        <ul class="scrollit pt-5 carousel-new-product" v-if="isLoading">
        
          <li v-for="i in [1, 2, 3, 4, 6, 8, 9, 12]" :key="i">
            <div class="mx-4 py-2">
               <b-skeleton height="130px"  width="200px" active></b-skeleton><br>
            <b-skeleton active width="150px"></b-skeleton> <br>
            <b-skeleton active width="60px"></b-skeleton>
            </div>
          </li>
        </ul>
        <ul class="scrollit pt-5 carousel-populaire-product" v-else>
          <li  v-for="(item, i) in populaire" :key="i">
            <ArticleCard :item='item'/>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";
export default{
   data() {
    return {
      isLoading: false,
      populaire: [],
    };
  },
  async fetch() {
    this.isLoading = true;
    await this.$axios.$post("article/all",{
      populaire:true
    }).then((res) => {
      console.log(res);
      res.code == "success"
        ? ((this.populaire = res.message), (this.isLoading = false))
        : null;
    });
  },
    methods: {
        pushgo(direction, index) {
            if (index == 0) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-new-product");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-new-product");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 1) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-populaire-product");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-populaire-product");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 3) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-boutique");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-boutique");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 4) {
                if (direction < 0) {
                    const carousel = document.querySelector(".carousel-bs");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".carousel-bs");
                    carousel.scrollLeft += 500;
                }
            }
            else if (index == 5) {
                if (direction < 0) {
                    const carousel = document.querySelector(".annonce-box");
                    carousel.scrollLeft -= 500;
                }
                else {
                    const carousel = document.querySelector(".annonce-box");
                    carousel.scrollLeft += 500;
                }
            } //
        }
    },
    components: { ArticleCard }
}
</script>

<style>

@import url('~assets/css/main.css');</style>