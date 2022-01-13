import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage,
  })],
  state: {
    correct: 0,
    wrong: 0,
    difficulties: {
      easy: {correct: 0, wrong: 0},
      medium: {correct: 0, wrong: 0},
      hard: {correct: 0, wrong: 0}
    },
    categories: {
      'General Knowledge': {correct: 0, wrong: 0},
      'Entertainment: Books': {correct: 0, wrong: 0},
      'Entertainment: Film': {correct: 0, wrong: 0},
      'Entertainment: Music': {correct: 0, wrong: 0},
      'Entertainment: Musicals & Theatres': {correct: 0, wrong: 0},
      'Entertainment: Television': {correct: 0, wrong: 0},
      'Entertainment: Video Games': {correct: 0, wrong: 0},
      'Entertainment: Board Games': {correct: 0, wrong: 0},
      'Science & Nature': {correct: 0, wrong: 0},
      'Science: Computers': {correct: 0, wrong: 0},
      'Science: Mathematics': {correct: 0, wrong: 0},
      'Mythology': {correct: 0, wrong: 0},
      'Sports': {correct: 0, wrong: 0},
      'Geography' : {correct: 0, wrong: 0},
      'History': {correct: 0, wrong: 0},
      'Politics': {correct: 0, wrong: 0},
      'Art': {correct: 0, wrong: 0},
      'Celebrities': {correct: 0, wrong: 0},
      'Animals': {correct: 0, wrong: 0},
      'Vehicles': {correct: 0, wrong: 0},
      'Entertainment: Comics': {correct: 0, wrong: 0},
      'Science: Gadgets': {correct: 0, wrong: 0},
      'Entertainment: Japanese Anime & Manga': {correct: 0, wrong: 0},
      'Entertainment: Cartoon & Animations': {correct: 0, wrong: 0},
    },
  },
  mutations: {
    increaseCorrect(state, {difficulty, category}) {
      console.log(difficulty);
      console.log(state.difficulties[difficulty]);
      console.log(category);
      console.log(state.categories[category]);
      state.correct++;
      state.difficulties[difficulty].correct++;
      state.categories[category].correct++;
    },
    increaseWrong(state, {difficulty, category}) {
      console.log(difficulty);
      console.log(state.difficulties[difficulty]);
      console.log(category);
      console.log(state.categories[category]);
      state.wrong++;
      state.difficulties[difficulty].wrong++;
      state.categories[category].wrong++;
    }
  },
  actions: {},
  modules: {},
});
