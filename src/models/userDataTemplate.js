const userDataOptom = {
  correct: 0,
  wrong: 0,
  difficulties: {
    easy: {correct: 0, wrong: 0},
    medium: {correct: 0, wrong: 0},
    hard: {correct: 0, wrong: 0}
  },
  categories: {
    'Ocular Abnormalities': {correct: 0, wrong: 0},
    'Children and Special Needs': {correct: 0, wrong: 0}
  },
}

const userDataGeneral = {
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
}

export const userDataTemplate = process.env.VUE_APP_VERSION === 'Optom' ? userDataOptom : userDataGeneral;