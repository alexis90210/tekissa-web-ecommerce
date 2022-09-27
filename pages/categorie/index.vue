<template>
  <div class="box p-0">
    <div
      class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap"
    >
      <p class="is-size-6"><b>TOUTES LES CATEGORIES</b></p>
    </div>
    <hr class="m-0" />
    <div
      class="px-2 pb-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-wrap"
    >
      <ul class="categorie-list">
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Machines'
              }
            }"
            ><span class="categorie-item">Machines</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Pièces et accessoires pour véhicules'
              }
            }"
            ><span class="categorie-item"
              >Pièces et accessoires pour véhicules</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Vêtements'
              }
            }"
            ><span class="categorie-item"
              >Vêtements</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Électronique grand public'
              }
            }"
            ><span class="categorie-item"
              >Électronique grand public</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Appareils électroménagers'
              }
            }"
            ><span class="categorie-item"
              >Appareils électroménagers</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Vêtements'
              }
            }"
            ><span class="categorie-item">Vêtements</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Accessoires de mode'
              }
            }"
            ><span class="categorie-item">Accessoires de mode</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Horlogerie, Bijouterie, Lunetterie'
              }
            }"
            ><span class="categorie-item">
              Horlogerie, Bijouterie, Lunetterie</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Lumières et éclairage'
              }
            }"
            ><span class="categorie-item"
              >Lumières et éclairage</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Construction et immobilier'
              }
            }"
            ><span class="categorie-item"
              >Construction et immobilier</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Maison et jardin'
              }
            }"
            ><span class="categorie-item">Maison et jardin</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Meubles'
              }
            }"
            ><span class="categorie-item">Meubles</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Matières premières pour tissus et textile'
              }
            }"
            ><span class="categorie-item"
              >Matières premières pour tissus et textile</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:' Textiles de maison '
              }
            }"
            ><span class="categorie-item"> Textiles de maison </span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Beauté et soins personnels'
              }
            }"
            ><span class="categorie-item"
              >Beauté et soins personnels</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Santé et médecine'
              }
            }"
            ><span class="categorie-item">Santé et médecine</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Emballage et impression'
              }
            }"
            ><span class="categorie-item"
              >Emballage et impression</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Fournitures de bureau et scolaires'
              }
            }"
            ><span class="categorie-item"
              >Fournitures de bureau et scolaires</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Instruments et équipements de test'
              }
            }"
            ><span class="categorie-item"
              >Instruments et équipements de test</span
            ></nuxt-link
          >
        </li>

        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Outils et matériel'
              }
            }"
            ><span class="categorie-item">Outils et matériel</span></nuxt-link
          >
        </li>
      
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Sécurité'
              }
            }"
            ><span class="categorie-item">Sécurité</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Services de fabrication'
              }
            }"
            ><span class="categorie-item">
              Services de fabrication</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Équipement électrique et fournitures'
              }
            }"
            ><span class="categorie-item"
              >Équipement électrique et fournitures</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Composants électroniques, accessoires et télécommunications'
              }
            }"
            ><span class="categorie-item"
              >Composants électroniques, accessoires et télécommunications</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Sports et loisirs'
              }
            }"
            ><span class="categorie-item">Sports et loisirs</span></nuxt-link
          >
        </li>
        
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Jouets et loisirs'
              }
            }"
            ><span class="categorie-item">Jouets et loisirs</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Cadeaux et objets artisanaux<'
              }
            }"
            ><span class="categorie-item"
              >Cadeaux et objets artisanaux</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Bagages, sacs et étuis'
              }
            }"
            ><span class="categorie-item">
              Bagages, sacs et étuis</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Chaussures et accessoires'
              }
            }"
            ><span class="categorie-item"
              >Chaussures et accessoires</span
            ></nuxt-link
          >
        </li>

        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Métaux et alliages'
              }
            }"
            ><span class="categorie-item">Métaux et alliages</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Produits chimiques'
              }
            }"
            ><span class="categorie-item">Produits chimiques</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Caoutchouc et plastiques'
              }
            }"
            ><span class="categorie-item"
              >Caoutchouc et plastiques</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Agriculture'
              }
            }"
            ><span class="categorie-item">Agriculture</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Vêtements'
              }
            }"
            ><span class="categorie-item">Aliments et boissons</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Équipement de service'
              }
            }"
            ><span class="categorie-item"
              >Équipement de service</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Services commerciaux'
              }
            }"
            ><span class="categorie-item">Services commerciaux</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Énergies renouvelables'
              }
            }"
            ><span class="categorie-item"
              >Énergies renouvelables</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Énergie'
              }
            }"
            ><span class="categorie-item">Énergie</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Environnement'
              }
            }"
            ><span class="categorie-item">Environnement</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Transmission d\'énergie'
              }
            }"
            ><span class="categorie-item"
              >Transmission d'énergie</span
            ></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="{
              path:'/categorie/produit', 
              query:{
                query:'Matériel de manutention'
              }
            }"
            ><span class="categorie-item"
              >Matériel de manutention</span
            ></nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "frame",
  data() {
    return {};
  },
  methods: {
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
};
</script>

<style>
@import url("~assets/css/main.css");
</style>
