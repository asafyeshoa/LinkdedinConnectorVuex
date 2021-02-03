<template>
  <div>
    <q-tabs
      :value="tab"
      indicator-color="transparent"
      active-color="white"
      class="bg-teal text-grey-5 shadow-2"
    >

      <q-tab @click="tabRename('connect')" name="connect" icon="supervisor_account" label="Connect" class="conTab">

        <q-tooltip transition-show="slide-down" content-style="background-color: #12232E">
          Connect and Grow your Network
        </q-tooltip>

      </q-tab>
      <q-tab @click="tabRename('withdraw')" name="withdraw" icon="transfer_within_a_station" label="Withdraw" disable
             class="withTab">
        <q-tooltip transition-show="slide-down" content-style="background-color: #007CC7">
          Coming soon
        </q-tooltip>

      </q-tab>
      <q-tab @click="tabRename('search')" name="search" icon="search" label="By Search" class="searchTab" disable>

        <q-tooltip transition-show="slide-down" content-style="background-color: #4DA8DA">
          Coming soon
        </q-tooltip>
      </q-tab>

    </q-tabs>

    <h5 class="title">Linkedin Connector</h5>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "tabsBar",
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

.title {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #000000;
  color: white;
}

.conTab {
  padding: 0;
  background-color: #12232E;
}

.withTab {
  padding: 0;
  background-color: #007CC7;
}

.searchTab {
  padding: 0;
  background-color: #4DA8DA;
  color: #cdcbcb;

}


</style>
