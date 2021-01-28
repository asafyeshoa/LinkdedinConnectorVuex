<template>
  <div style="display: grid; grid-template-rows: 20% 20% 20% 20% 20%; height: 100%; background-color: #007CC7;" >
    <div class="partOne">
      <p>Check connection request times</p>
      <q-btn label="Check" color="light-blue-1" text-color="black" />
    </div>

<div class="partTwo">
  <p>Choose requests times to Withdraw</p>
  <q-input label="Enter Number" bg-color="light-blue-1" />
</div>

    <div class="partThird" >
      <p>Withdraw from the invitation requests</p>
      <q-select filled  label="????" bg-color="light-blue-1" />
    </div>


    <div class="partFour" >
      <p>Are you interested in running the bot in trial or real mode?</p>
      <q-select filled v-model="modeStatus" :options="mode" label="Select" bg-color="light-blue-1" />
    </div>

    <div class="partFive" >
      <q-checkbox v-model="right" label="I Confirm that i'm aware that the use of this bot is in my own responsibility" />
      <q-btn label="Connect members now" color="light-blue-1" text-color="black" />
    </div>
  </div>
</template>

<script>
export default {
  name: "withdraw",
  data(){
    return{
      right: false,
      mode: [
        'Trial', 'Real mode'
      ],
      modeStatus: null,

    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.partOne{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0 5px
}

.partTwo{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0 5px
}

.partThird{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0 5px

}
.partFour{
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0 5px
}

.partFive{
  display: grid;
  grid-auto-rows: auto auto;
  padding: 0 5px 5px 5px;
}


</style>
