<template>
  <div class="box p-0 mt-5 is-centered">
    <div
      class="px-4 py-2 pt-4 is-flex is-flex-direction-row is-justify-content-space-between is-flex-wrap-nowrap"
    >
      <p class="is-size-6"><b>CONNEXION</b></p>
    </div>
    <hr class="m-0" />


    <div v-if="$cookies.get('auth') == true" class="mx-3 mt-2 p-4">
        <p class="py-4">cliquez pour se deconnecter</p>
        <b-button label="Deconnexion" :loading="isLoading" type="is-danger" rounded icon-left="logout" @click="logout"></b-button>

    </div>
    <form @submit.prevent="setAuthed" v-else>
      <div class="mx-4 my-2 mt-5">
        <b-field label="Login" label-position="inside">
          <b-input
            required
            v-model="connexion.login"
            rounded
            size="is-small"
            icon="account"
            expanded
          ></b-input>
        </b-field>
      </div>

      <div class="mx-4 my-2">
        <b-field label="Password" label-position="inside">
          <b-input
            v-model="connexion.password"
            rounded
            type="password"
            password-reveal
            size="is-small"
            icon="lock"
            required
            expanded
          ></b-input>
        </b-field>
      </div>

      <div class="mx-4 my-2 pb-4 mt-4">
        <b-button
          label="CONNEXION"
          :loading="isLoading"
          native-type="submit"
          type="is-success"
          icon-right="arrow-right"
          rounded
        ></b-button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      connexion: {},
      isLoading: false,
    };
  },
  async fetch() {},
  methods: {
      async logout(){
            this.$cookies.set('id','' );
            this.$cookies.set('idBoutique','');
            this.$cookies.set('userData',{});
            this.$cookies.set('auth', false);
            this.$cookies.set('status', '');
            window.location.href = '/';
      },

    async setAuthed() {
      this.isLoading = true;
      await this.$axios
        .$post("client/auth", {
          ...this.connexion,
        })
        .then((res) => {
          console.log(res);
          this.connexion = {};

          if (res.code == "success") {

            this.$cookies.set('id',res.message.id_client ,{maxAge: 60 * 60 * 24 * 1});
            this.$cookies.set('idBoutique',res.message.id_boutique,{maxAge: 60 * 60 * 24 * 1});
            this.$cookies.set('userData',res.message,{maxAge: 60 * 60 * 24 * 1});
            this.$cookies.set('auth', true,{maxAge: 60 * 60 * 24 * 1});
            this.$cookies.set('status', 'Connected visitor',{maxAge: 60 * 60 * 24 * 1});
            
            this.$router.push({path:'/client'});

          } else {
            this.$buefy.dialog.alert({
              title: "Erreur",
              message: `Connexion a echouee, Login / Password incorrect`,
              hasIcon: true,
              type: "is-danger",
            });
          }
        });
 
      this.isLoading = false;
    },
  },
};
</script>

<style>
@import url("~assets/css/main.css");
</style>
