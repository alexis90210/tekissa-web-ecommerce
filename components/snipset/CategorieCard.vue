<template >
    <nuxt-link to="/produit">
           <div
              class="p-2 produit mx-2 pb-5 catalogue mx-1  selected-img"
              data-aos="ease"
              data-aos-ease="ease"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <img
                src="~/assets/images/chaussure.jpg"
                class="logo-boutique"
                width="50px"
                alt=""
              />
              <center>
                <p class="is-size-6">
                  <b class="has-text-dark">Categorie </b>
                </p>
              </center>
            </div>
            </nuxt-link>
</template>

<style>
@import url("~assets/css/main.css");
</style>
