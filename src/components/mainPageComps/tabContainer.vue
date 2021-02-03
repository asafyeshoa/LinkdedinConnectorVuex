<template>
  <q-tab-panels :value="tab" animated>
    <q-tab-panel name="connect" class="conPannel">
      <connect/>
    </q-tab-panel>

    <q-tab-panel name="withdraw" class="withPannel">
      <withdraw/>
    </q-tab-panel>

    <q-tab-panel name="search" class="searchPannel">
      <bySearch/>
    </q-tab-panel>

    <q-tab-panel name="about" class="aboutPannel">
      <about/>
    </q-tab-panel>

    <q-tab-panel name="createUser" class="createUserPannel">
      <createUser/>
    </q-tab-panel>


  </q-tab-panels>

</template>

<script>
import bySearch from "components/tabs/bySearch";
import connect from "components/tabs/connect";
import withdraw from "components/tabs/withdraw";
import about from "components/tabs/aboutUs";
import createUser from "components/tabs/createUser";

import {mapState} from "vuex";

export default {
  name: "tabContainer",
  components: {
    bySearch,
    connect,
    withdraw,
    about,
    createUser
  },
  computed: {
    ...mapState('props', ['tab'])
  }

}
</script>

<style scoped>


.conPannel {
  width: 500px;
  height: 490px;
  padding: 0;
  color: white;
  font-family: 'Sans Serif';

}

.withPannel {
  width: 500px;
  height: 490px;
  padding: 0;
}

.searchPannel {
  width: 500px;
  height: 490px;
  padding: 0;
}

.aboutPannel {
  width: 500px;
  height: 490px;
  padding: 0;
}

.createUserPannel {
  width: 500px;
  height: 490px;
  padding: 0;
}


</style>
