<template>
  <form @submit.prevent>
    <label class="block text-gray-700 text-sm font-bold m-3">Email:</label>
    <span v-if="emailIncorrect" class="text-red-500 block">Enter a correct email address</span>
    <input v-model="email" type="email" class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    <label class="block text-gray-700 text-sm font-bold m-3">Password:</label>
    <span v-if="passwordTooShort" class="text-red-500 block">Use at least 5 characters</span>
    <input v-model="password" type="password" class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    <label class="block text-gray-700 text-sm font-bold m-3">Password again:</label>
    <span v-if="passwordsSame" class="text-red-500 block">Passwords are not matching</span>
    <input v-model="passwordRepeat" type="password" class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    <br />
    <button 
      @click="signUp"
      class="w-40 font-semibold py-2 px-4 m-2 border border-gray-400 rounded shadow"
    >
      Sign Up
    </button>
  </form>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import store from '../store';

@Options({
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      emailIncorrect: false,
      passwordsSame: false,
      passwordTooShort: false,
    }
  },
  methods: {    
    async signUp() {
      if (!this.validateEmail(this.email)) {
        this.emailIncorrect = true;
        return
      } else {
        this.emailIncorrect = false;
      }
      
      if(this.password.length < 5) {
        this.passwordTooShort = true;
        return;
      } else {
        this.passwordTooShort = false;
      }

      if(this.password !== this.passwordRepeat) {
        this.passwordsSame = true;
        return;
      } else {
        this.passwordsSame = false;
      }

      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        store.dispatch('createUserData');
        store.commit('signedIn');
        window.location = '/';
      } catch (e) {
        console.log('user registration was not successful');
        console.log(e);
      }
    },
    validateEmail(email) {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    },
  }
})
export default class SignUp extends Vue {}
</script>