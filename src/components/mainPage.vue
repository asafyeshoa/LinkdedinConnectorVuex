<template>
  <div class="mainPage">


  <q-card id="tabs" >

    <q-tabs
      v-model="tab"
      indicator-color="transparent"
      active-color="white"
      class="bg-teal text-grey-5 shadow-2"
    >

      <q-tab name="connect" icon="mail" label="Connect"  class="conTab" />
      <q-tab name="withdraw" icon="alarm" label="Withdraw" class="withTab" />
      <q-tab name="search" icon="movie" label="By Search" class="searchTab" />

    </q-tabs>
    <h5 class="title" >Linkedin Connector</h5>
    <q-tab-panels  v-model="tab" animated  >
      <q-tab-panel name="connect" class="conPannel">
        <connect/>
      </q-tab-panel>

      <q-tab-panel name="withdraw" class="withPannel">
        <withdraw/>
      </q-tab-panel>

      <q-tab-panel name="search" class="searchPannel">
        <bySearch/>
      </q-tab-panel>
    </q-tab-panels>


  </q-card>
  </div>
</template>

<script>

import bySearch from "components/tabs/bySearch";
import connect from "components/tabs/connect";
import withdraw from "components/tabs/withdraw";
export default {
name: "mainPage",
  components:{
  bySearch,
    connect,
    withdraw
  },
  data() {
    return {
      tab: 'active',
    }
  },
}
</script>

<style scoped>
#tabs{
  width: 500px;
}
.conTab{
  padding: 0;
  background-color: #12232E;
}
.withTab{
  padding: 0;
  background-color: #007CC7;
}
.searchTab{
  padding: 0;
  background-color: #4DA8DA;
  color: #cdcbcb;

}
.conPannel{
  width: 500px;
  height: 490px;
  padding: 0;
  color: white;
  font-family: 'Sans Serif';

}

.withPannel{
  width: 500px;
  height: 490px;
  padding: 0;
}

.searchPannel{
  width: 500px;
  height: 490px;
  padding: 0;
}

.title{
  margin: 0;
  padding: 0;
  text-align: center;
background-color: #000000;
  color: white;
}


</style>
