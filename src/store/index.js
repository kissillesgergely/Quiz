import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { doc, setDoc, getDoc } from 'firebase/firestore/lite';
import { userDataTemplate } from '../models/userDataTemplate';
import { db, auth } from '../firebase';

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    userData: userDataTemplate,
    signedIn: false,
  },
  mutations: {
    increaseCorrect(state, { difficulty, category }) {
      state.userData.correct++;
      state.userData.difficulties[difficulty].correct++;
      state.userData.categories[category].correct++;
    },
    increaseWrong(state, { difficulty, category }) {
      state.userData.wrong++;
      state.userData.difficulties[difficulty].wrong++;
      state.userData.categories[category].wrong++;
    },
    updateWholeUserData(state, userData) {
      state.userData = userData;
    },
    eraseUserData(state) {
      state.userData = userDataTemplate;
    },
    signedIn(state) {
      state.signedIn = true;
    },
    signedOut(state) {
      state.signedIn = false;
    }
  },
  actions: {
    async increaseCorrect({ commit, state }, { difficulty, category }) {
      commit('increaseCorrect', { difficulty, category });
      if(auth.currentUser) {
        const userDataRef = doc(db, 'userData', `${auth.currentUser.uid}`);
        await setDoc(userDataRef, state.userData, {merge: true});
      }
    },
    async increaseWrong({ commit, state }, { difficulty, category }) {
      commit('increaseWrong', { difficulty, category });
      if(auth.currentUser) {
        const userDataRef = doc(db, 'userData', `${auth.currentUser.uid}`);
        await setDoc(userDataRef, state.userData, {merge: true});
      }
    },
    async createUserData() {
      const userDataRef = doc(db, `userData/${auth.currentUser.uid}`);
      await setDoc(userDataRef, userDataTemplate, {merge: true});

      commit('updateWholeUserData', userDataTemplate);
    },
    async updateDataWithFirebaseData({ commit }) {
      try {
        const userDataRef = doc(db, 'userData', `${auth.currentUser.uid}`);
        const userData = await getDoc(userDataRef);
        commit('updateWholeUserData', userData.data());
      } catch(e) {
        console.log('fetching user data was not successful');
        console.log(e);
      }
    }
  },
  modules: {},
});
