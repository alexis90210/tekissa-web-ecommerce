<template>
    <div>
      <div class="box">
            <p class="mb-2 is-size-6"><b>MON COMPTE</b></p>
            <hr class="my-4" />
            <p class="mb-2"><b class="pr-4">Nom :</b> {{user.nom}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Prenom :</b> {{user.prenom}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Mobile :</b> {{user.mobile}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Email :</b> {{user.email}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Adresse :</b> {{user.adresse}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Pays :</b> {{user.ville}},
             {{user.pays}}</p>
            <hr class="m-0" />
            <p class="mb-2"><b class="pr-4">Dernier connexion :</b> {{user.lastSeen}}</p>


            <b-button
              class="mt-5"
              label="EDITER"
              icon-right="pencil"
              type="is-success"
            ></b-button>
          </div> 
    </div>
</template>

<script>
export default {
    data() {
      return {
        user:{}
      };
        
    },


mounted(){
  this.user = this.$cookies.get('userData');
}
}
</script>