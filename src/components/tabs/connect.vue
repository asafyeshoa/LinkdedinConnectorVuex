<template>
  <div id="inputSelect">

    <q-form class="form" >

      <div class="search">
        <q-select
          label="Choose Keyword to Avoid or Detect"
          hint="Filter Your Result By Keyword"
          transition-show="scale"
          transition-hide="scale"
          filled
          v-model="optionStatus"
          :options="options"
        />

        <q-input   @keyup.enter="setKeyword" v-model="checker" debounce="500" filled placeholder="Enter Keyword">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </div>
      <ul v-model="detected" class="q-px-sm">detected keyword:
        <strong v-for="(keyword,index) in detected" style="color: #21ba45">
          <div class="words">{{ keyword }}
            <q-icon @click="remove(index, 'detected')" size="20px" color="black" name="highlight_off"/>
          </div>
        </strong></ul>

      <ul v-model="avoid" class="q-px-sm">Avoid keyword:
        <strong v-for="(keyword,index) in avoid" style="color: #f11c1c">
          <div class="words">{{ keyword }}
            <q-icon @click="remove(index, 'avoid')" size="20px" color="black" name="highlight_off"/>
          </div>
        </strong></ul>

      <q-input
        filled type="number"
        v-model="people"
        label="How many people you wish to connect?"
        :rules="[ val => val.length <= 2 || 'Please connect maximum 99 user each time']"
        hint="We recommend no more than 80."
        mask="##"



      />
      <q-toggle  v-model="accept" label="I Confirm that i'm aware that the use of this bot is in my own responsibility"/>

      <div style="padding-top: 6px">
        <q-btn  label="Connect members now"  color="primary" @click="onSubmit"/>
        <q-btn label="Reset" color="primary" flat class="q-ml-sm" @click="onReset"/>
      </div>

    </q-form>

<!--    <q-btn label="test" @click="test" color="primary" flat class="q-ml-sm"/>-->


  </div>
</template>
<script>
export default {
  name: "connect",
  data() {
    return {
      people: null,
      search: null,
      accept: false,
      optionStatus: null,
      modeStatus: null,
      options: ['Avoid', 'Detect'],
      detected: [],
      avoid: [],
      checker: null

    }
  },

  methods: {
    onSubmit() {
      debugger

      if (this.accept !== true) {

        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Connecting in process'
        })
      }
    },
    setKeyword() {
      if (this.checker === null) return;
      if (this.optionStatus === 'Avoid') {
        this.avoid.push(this.checker)
        this.checker = null

      } else if (this.optionStatus === 'Detect') {
        this.detected.push(this.checker)
        this.checker = null
      }

    },
    test() {
      let params = {
        active: true,
        currentWindow: true,
        data: 'test'
      };
      debugger
      this.$q.bex.send('connect', params).then(success => {
        debugger
        alert('connect is back')
        console.log(success)
      })
    },
    remove(index, listStr) {
      if (listStr === 'detected') {
        this.detected.splice(index, 1)

      } else if (listStr === 'avoid') {
        this.avoid.splice(index, 1)

      }
    },
    onReset() {
      this.people = null
      this.accep = false
      this.optionStatus = null
      this.modeStatus = null
      this.options = ['Avoid', 'Detect']
      this.detected = []
      this.avoid = []
      this.checker = null
    }
  }
}
</script>


<style scoped>
#inputSelect {
  max-width: 500px;
  display: grid;
  grid-template-columns: auto;
  margin: 9px;
  padding: 0;
  color: black;
  max-height: 500px;

}


.words {
  display: inline;
}

.q-input {
 width: 75%;
}

.q-select {

  width: 75%;
}
</style>
