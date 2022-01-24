<template>
  <form @submit.prevent>
    <label class="twc-label">Email:</label>
    <input v-model="email" type="email" class="twc-text-input"/>
    <label class="twc-label">Password:</label>
    <input v-model="password" type="password" class="twc-text-input"/>
    <br />
    <br />
    <span v-if="loginError" class="text-red-500 block">Couldn't log in, check your password and email</span>
    <button 
      @click="signIn"
      class="w-40 twc-button"
    >
      Sign In
    </button>
  </form>
  <br />
  Don't have an account yet?
  <br />
  <router-link to="/sign-up" class="text-blue-600 underline">Sign up here</router-link>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import store from '../store';

@Options({
  data() {
    return {
      email: '',
      password: '',
      loginError: false,
    }
  },
  created() {

  },
  methods: {    
    async signIn() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        await store.dispatch('updateDataWithFirebaseData');
        store.commit('signedIn');
        store.dispatch('updateDataWithFirebaseData');
        window.location = '/';
      } catch(e) {
        this.loginError = true;
      }
    }
  }
})
export default class SignIn extends Vue {}
</script>
