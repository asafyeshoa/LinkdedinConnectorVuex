<template>
  <div  id="inputSelect" >

    <q-form @submit="onSubmit" @reset="onReset" class="form" >
      <q-select
        label="Choose Mode"
        hint="Trial or Real Mode"
        transition-show="scale"
        transition-hide="scale"
        filled
        v-model="modeStatus"
        :options="mode"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div class="search">
        <q-select
          label="Choose Keyword to Avoid or Detect"
          hint="Filter Your Result By Keyword"
          transition-show="scale"
          transition-hide="scale"
          filled
          v-model="optionStatus"
          :options="options"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input @keyup.enter="setKeyword" v-model="checker" debounce="500" filled placeholder="Search"
                 lazy-rules
                 :rules="[
          val => val !== null && val !== '' || 'Please type Number',
          val => val > 0 && val < 100 || 'We recommend max 100'
        ]"
        >
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
            <q-icon @click="remove(index, 'avoid')" size="20px" color="black" name="highlight_off"/></div>
        </strong></ul>

      <q-input
        filled type="number"
        v-model="people"
        label="How many people you wish to connect?"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type Number',
          val => val > 0 && val < 100 || 'Please dont enter more than 100. We Recommend 80'
        ]"
      />
      <q-toggle v-model="accept" label="I Confirm that i'm aware that the use of this bot is in my own responsibility"/>

      <div style="padding-top: 6px">
        <q-btn @keyup.enter.prevent="onSubmit" label="Connect members now" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>

    </q-form>

    <q-btn label="test" @click="test"  color="primary" flat class="q-ml-sm"/>


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
      mode: ['Trial', 'Real mode'],
      detected: [],
      avoid: [],
      checker: null

    }
  },

  methods: {
    onSubmit() {
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
    test(){
      let params = {
        active: true,
        currentWindow: true,
        data: 'test'
      };
      debugger
      this.$q.bex.send('connect', params).then( success => {
        debugger
        alert('connect is back')
        console.log(success)
      })
    },
    remove(index, listStr) {
      if(listStr === 'detected'){
        this.detected.splice(index, 1)

      }
      else if (listStr === 'avoid'){
        this.avoid.splice(index, 1)

      }
    },
    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>


<style scoped>
#inputSelect {
  max-width: 500px;
  display: grid;
  grid-template-columns: auto;
  margin: 0;
  padding: 0;
  color: black;
  max-height: 500px;

}
.form {
  margin-left: 100px;
  margin-top: 20px;
}

*{
  margin: 0;
}

.words{
  display: inline;
}
</style>
