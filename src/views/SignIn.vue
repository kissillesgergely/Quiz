<template>
  <form @submit.prevent>
    <label class="block text-gray-700 text-sm font-bold m-3">Email:</label>
    <input v-model="email" type="email" class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    <label class="block text-gray-700 text-sm font-bold m-3">Password:</label>
    <input v-model="password" type="password" class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    <br />
    <button 
      @click="signIn"
      class="w-40 font-semibold py-2 px-4 m-2 border border-gray-400 rounded shadow"
    >
      Sign In
    </button>
  </form>
  <br />
  Don't have an account yet?
  <br />
  <router-link to="/sign-up">Sign up here</router-link>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

@Options({
  data() {
    return {
      email: '',
      password: '',
    }
  },
  created() {

  },
  methods: {    
    async signIn() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
      } catch(e) {
        console.log('login was not successful');
        console.log(e);
      }
    }
  }
})
export default class SignIn extends Vue {}
</script>
