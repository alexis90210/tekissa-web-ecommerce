<template>
  <div class="mx-2 has-background-white" >
            <div
              class="has-background-white p-2 is-flex is-flex-direction-row is-justify-content-start is-flex-wrap-nowrap"
            >
              <img
                src="~/assets/images/chaussure.jpg"
                width="40px"
                alt=""
                class="rounded"
              />
              <div class="px-4">
                <p class="is-size-6 has-text-link">Nom - telephone</p>
                <small class="is-size-7 has-text-success">En ligne</small>
              </div>
            </div>
            <hr class="m-0" />
            <div class="p-3 message-box">
              <Inbox/>
              <Outbox/>
              <Inbox/>
              <Outbox/>
              <Inbox/>
              <Outbox/>         
            </div>
            <hr class="m-0">
            <div class="my-3 message-reply-box p-2 columns">
               <div class="column">
                  <b-button icon-left="camera"  type="is-link" expanded>
                  </b-button>
               </div>
               <div class="column">
                <b-button icon-left="sticker-emoji" type="is-warning" expanded></b-button>
               </div>
                <div class="column is-three-fifths">
                  <b-input expanded placeholder="Ecrire un sms..."></b-input>
                  
                </div>
                <div class="column"><b-button icon-left="arrow-right" type="is-success" expanded></b-button></div>
            </div>
          </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Inbox from "../../components/message/inbox.vue";
import Outbox from "../../components/message/outbox.vue";

export default {
  layout:'messagerie',
  data() {
    return {};
  },
  methods: {
 
  },
  components: { Inbox, Outbox },
};
</script>
<style>
@import url("~assets/css/main.css");
</style>
