<template>
    <div class="box p-0  mt-5 is-centered">
          <div
            class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
          >
            <p class="is-size-6"><b>NEWSLETTER</b></p>
            
          </div>
          <hr class="m-0" />

          <div class="mx-4 my-2 mt-5">
              <b-field label="Nom" label-position="inside"  type="is-success">
                  <b-input rounded size="is-small" icon="account" required expanded></b-input>
              </b-field>
          </div>

          <div class="mx-4 my-2">
              <b-field label="Email" label-position="inside" type="is-success">
                  <b-input rounded  size="is-small" icon="email" required expanded></b-input>
              </b-field>
          </div>

           <div class="mx-4 my-2 pb-4 mt-4">
              <b-button label="ACTIVER" icon-right="email" rounded type="is-success"></b-button>
          </div>

          
        </div>
</template>

<script>
export default{
    data() {
        return {

        };
    },

}
</script>

<style>

@import url('~assets/css/main.css');</style>