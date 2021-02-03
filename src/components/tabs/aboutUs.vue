<template>
  <div class="q-pa-md q-gutter-sm">

    <q-banner rounded class="bg-grey-3 " style="height: 300px">

      <template v-slot:default>
        <h6 class="title-content"> Welcome to Linkedin Connector!</h6>
        <p class="content">
          We create a Tool to help you time<br>
          And management your Linkedin better!<br>
          By validate users industry and Browser automation!<br>
          Linkedin Connector is free and available for Non-Users
        </p>


      </template>

      <template v-slot:action class="buttons">
        <q-btn @click="tabRename('createUser')" flat color="black" label="Open Account" />
        <q-btn @click="tabRename('connect')" flat color="black" label="Try Connect Mode" />
      </template>

      <template v-slot:avatar>
        <img
          src="https://cdn.quasar.dev/img/mountains.jpg"
          style="width: 100px; height: 64px"
        >
      </template>


    </q-banner>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "aboutUs",
  computed: {
    ...mapState('props', ['tab'])
  },
  methods: {
    ...mapActions('props', ['switchTabRename']),
    tabRename(tabName) {
      this.switchTabRename(tabName)
    }
  },

}
</script>
<style scoped>

.content {
  text-align: center;

}

.title-content {
  text-align: center;
  margin: 10px;
}

.buttons {

  text-align: center

}
</style>


