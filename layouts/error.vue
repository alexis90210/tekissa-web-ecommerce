<template>
  <div class="columns is-centered mt-6 pt-6">
    <div
      class="column is-four-fifths box has-text-light p-0"
    >
      <center class="">
        <div class="has-background-danger p-3">
            <b-icon icon="sync-alert" class="my-3" size="is-large"></b-icon>
        <h1 class="is-size-6" v-if="error.statusCode === 404">
          {{error.message}}
        </h1>
        <h1 class="is-size-6" v-else>{{error.message}}</h1>
        </div>

        <b-button
          label="Revenir à l'acceuil"
          tag="router-link"
          to="/"
          class="my-4 mx-4"
          icon-left="home"
          type="is-success"
          rounded
        ></b-button>
        <b-button
          label="Revenir à la page précedante"
          class="my-4 mx-4"
          icon-right="close"
          type="is-danger"
          @click="$router.go(-1)"
          rounded
        ></b-button>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "frame",
  methods: {
    close() {
      this.$buefy.dialog.confirm({
          title:"Souhaitez-vous quitter ce site ?",
          type:'is-danger',
          hasIcon:true,
          message:'Ceci n\'est pas un bannissement , Vous pouvez revenir quand vous voulez !',
          onConfirm:() => window.close()

      })
    },
  },
};
</script>
