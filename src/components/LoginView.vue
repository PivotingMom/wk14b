<template>
  <form>

    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

      
      <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      :counter="8"
      type="password"
      label="Password"
      required
      @input="$v.password.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>


    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      password: {
    required,
    // minLength: minLength(8)  // I assume you'd want something like this too
    containsUppercase: function(value) {
      return /[A-Z]/.test(value)
    },
    containsLowercase: function(value) {
      return /[a-z]/.test(value)
    },
    containsNumber: function(value) {
      return /[0-9]/.test(value)
    },
    containsSpecial: function(value) {
      return /[#?!@$%^&*-]/.test(value)
    }
      },
    
    },

    data: () => ({
      name: '',
      email: '',
      password: '',
    }),

    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.password && errors.push('Must be valid password')
        !this.$v.password.required && errors.push('Password is required')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.email = ''
        this.password = ''
      },
    },
  }
</script>