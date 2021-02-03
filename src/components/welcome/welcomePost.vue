<template>
<div class="q-pa-md">

  <div class="row" >

  <h6  > Welcome to Linkedin Connector!</h6>
  <p> Linkedin Connector is great tool to manage your Linkedin Account and save time!  </p>

  </div>

  <div class="q-mt-sm row justify-center">
    <q-fab
      v-model="fab2"
      label="Get Started"
      label-position="bottom"
      glossy
      color="black"
      icon="keyboard_arrow_down"
      direction="down"
      :hide-label="hideLabels"
    >
      <q-fab-action :hide-label="hideLabels" color="primary"  @click="tabRename('connect')"icon="supervisor_account" label="Connect" />

      <q-fab-action  :hide-label="hideLabels" color="accent" @click="tabRename('about')" icon="help" label="About Us" />
      <q-fab-action  :hide-label="hideLabels" color="secondary" @click="tabRename('createUser')" icon="account_circle" label="Create User" />

    </q-fab>
  </div>
</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
name: "welcomePost",
  props: ['tab'],
  data () {
    return {
      fab2: false,
      hideLabels: false
    }
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

.row {
justify-content: center
}

h6 {
  margin-top: 5px;
  margin-bottom: 15px;
}

p {
  width: 57%;
  text-align: center;

}
</style>
