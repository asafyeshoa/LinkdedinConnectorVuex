<template>
  <div style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-pa-md col form"

    >
      <div class="fullNameCon">

        <q-input
          filled
          v-model="user.firstName"
          label="Your name *"
          hint="First name"
          lazy-rules
          :rules="[ val => val && val.length > 1 || 'Please type your name']"
          clearable
          class="name"
        />
        <q-input
          class="last"
          clearable
          filled
          v-model="user.lastName"
          label="Your last name *"
          hint="Last name"
          lazy-rules
          :rules="[ val => val && val.length > 1 || 'Please type your last']"
        />

      </div>

      <q-input
        class="age"
        clearable
        filled
        type="number"
        v-model="user.age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please enter age',
          val => val > 0 && val < 100 || 'Please enter age'
        ]"
      />

      <q-input
        class="industry"
        clearable
        filled
        v-model="user.industry"
        label="Your Industry/Job Position *"
        hint="Industry/Job Position"
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Please type your Industry']"
      />

      <q-input
        class="linkAcc"
        clearable
        filled
        v-model="user.linkAcc"
        label="Linkedin Account *"
        hint="Enter link to your Linkedin account"
        lazy-rules
        :rules="[ val => val && val.length > 20 || 'Please type URL to your Linkedin account']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms"/>

      <div>
        <q-btn label="Register" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>

  </div>
</template>
<script>
export default {
  name: "createUser",
  data() {
    return {
      user: {
        firstName: null,
        age: null,
        lastName: null,
        industry: null,
        linkAcc: 'https://www.linkedin.com/in/'

      },

      accept: false
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
          message: 'Submitted'
        })
      }
    },

    onReset() {
      this.user = {
        firstName: null,
          age: null,
          lastName: null,
          industry: null,
          linkAcc: null

      }
    }
  }
}
</script>
<style scoped>

.name {
  width: 35%;
}

.last {
  width: 40%;
}

.age {
  width: 30%;
}

.industry {
  width: 63%;
}
.linkAcc {
  width: 90%;
}
.form {
  padding-right: 10px;
}

</style>


