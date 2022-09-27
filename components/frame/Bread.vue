<template>
     <div
      class="columns mx-4 my-5 is-flex is-flex-direction-row is-justify-content-space-between"
    >
      <div class="">
        <!-- Arrow -->
        <b-breadcrumb class="is-size-6" separator="has-arrow-separator">
          <b-breadcrumb-item>Tekissa</b-breadcrumb-item>
          <b-breadcrumb-item active>{{active}}</b-breadcrumb-item>
        </b-breadcrumb>
      </div>
     
    </div>
</template>

<script>
export default{
    props:['active'],
    data() {
        return {

        };
    },
}
</script>

<style>

@import url('~assets/css/main.css');</style>