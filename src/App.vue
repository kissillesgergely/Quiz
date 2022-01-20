<template>
  <div>
    <div id="nav">
      <router-link to="/">Game</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link v-if="!$store.state.signedIn" to="/sign-in">Sign In</router-link>
      <router-link v-else to="/sign-in" @click.prevent="signOut()">Sign Out</router-link>
    </div>
    <router-view />
    <acknowledgement></acknowledgement>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import acknowledgement from "./components/Acknowledgement.vue";
import { auth } from './firebase';
import store from './store';

@Options({
  components: {
    acknowledgement: acknowledgement,
  },
  methods: {
    async signOut() {
      await auth.signOut();
      store.commit('eraseUserData');
      store.commit('signedOut');
    }
  },
}) export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
