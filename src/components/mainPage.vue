<template>
  <div class="mainPage">


    <q-card id="tabs">
      <tabsBar :tab="tab" />
      <tabContainer :tab="tab" />


    </q-card>
  </div>
</template>

<script>


import tabContainer from "components/mainPageComps/tabContainer";
import tabsBar from "components/mainPageComps/tabsBar";
import { mapState, mapActions } from "vuex";


export default {
  name: "mainPage",
  components: {
    tabContainer,
    tabsBar
  },
  computed: {
    ...mapState('props',['tab'])
  }

}
</script>

<style scoped>
#tabs {
  width: 500px;
}


</style>
