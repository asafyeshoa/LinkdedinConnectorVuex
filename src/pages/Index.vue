<template>
  <div class="flex flex-center">
    <mainPage/>
    <welcomePost v-model="tab" v-show="!tab" />
  </div>
</template>

<script>

import mainPage from "../components/mainPage"
import welcomePost from "components/welcome/welcomePost";
import { mapState } from 'vuex'

export default {
  name: 'PageIndex',
  components: { mainPage, welcomePost},
  computed: {
    ...mapState('props', ['tab'])
  },

}
</script>

<style scoped>
.flex flex-center {
  padding: 0;
  width: 500px;
  height: 500px;

}
</style>
