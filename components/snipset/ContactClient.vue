<template>
    <div>
         <div class="box">
            <div
              v-for="i in [1, 2]"
              :key="i"
              class="selected-img p-2 is-flex is-flex-direction-row is-justify-content-start is-flex-wrap-nowrap"
            >
              <img
                src="~/assets/images/chaussure.jpg"
                width="50px"
                alt=""
                class="rounded"
              />
              <div class="px-4">
                <p class="is-size-6">Nom - telephone</p>
                <p class="is-size-7">Message Dernier</p>
                <small class="is-size-7">date envoye</small>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    data() {
         return {};
    },
}
</script>