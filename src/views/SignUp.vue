<template>
  <form @submit.prevent>
    <label class="twc-label">Email:</label>
    <span v-if="emailIncorrect" class="text-red-500 block">Enter a correct email address</span>
    <input v-model="email" type="email" class="twc-text-input"/>
    <label class="twc-label">Password:</label>
    <span v-if="passwordTooShort" class="text-red-500 block">Use at least 5 characters</span>
    <input v-model="password" type="password" class="twc-text-input"/>
    <label class="twc-label">Password again:</label>
    <span v-if="passwordsSame" class="text-red-500 block">Passwords are not matching</span>
    <input v-model="passwordRepeat" type="password" class="twc-text-input"/>
    <br />
    <br />
    <label v-if="signUpFail" class="twc-label">Couldn't sign up, the email might be in use already </label>
    <button 
      @click="signUp"
      class="w-40 twc-button"
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
      signUpFail: false,
    }
  },
  methods: {    
    async signUp() {
      this.emailIncorrect = false;
      this.passwordsSame = false;
      this.passwordTooShort = false;
      this.signUpFail = false;

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
        this.signUpFail = true;
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