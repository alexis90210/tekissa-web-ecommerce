<template>
  <nuxt-link
    :to="{
      path: '/produit/detail',
      query: {
        ...item
      },
    }"
  >
    <div
      class="p-2 produit pb-5 selected-img"
      data-aos="ease"
      data-aos-ease="ease"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <img :src="item.images[0]" width="200px" alt="" />
      <div>
        <p class="is-size-6 has-text-dark">{{ item.nom }}</p>
        <b-rate :value="brate" size="is-small" class="m-0"></b-rate>
        <p class="is-size-6">
          <b class="pr-3 has-text-dark">{{ item.prix }} F</b>
          <!-- <strike class="has-text-dark">800 F</strike> -->
        </p>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
      default: {},
    },
  },
  data() {
    return {
      brate:0
    };
  },
  mounted() {
    this.brate = parseInt(this.item.pop)

    if (this.item.images.length > 0) {
      this.item.images[0] = this.item.images[0];
    } else {
      this.item.images = [
        "https://tekissa.net/_nuxt/img/chaussure.ee3a85e.jpg",
      ];
    }
  },
};
</script>

<style>
@import url("~assets/css/main.css");
</style>
