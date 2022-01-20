# Quiz

## About the Game

When you open the app, you land on the Game page.
Here you can see a question and answer options. Once
you answer a question you can either reveal the correct
answer or go to the next question.

All the questions have a category and difficulty level.
You can keep track of your performance by looking at the
Stats page of the application.

Your results are stored per session, or you can
create an account, and this way your scores are saved
and can be reached from different devices.


## Implementation Details

This quiz app was built with Vue.js, Vuex and Firebase, and deployed
on AWS S3 and Firebase.

Firebase base is used for authentication and also to store the
stats of the users. Meanwhile, with the help of Vuex it's
possible to keep track of the scores in a simple browser session
without the need to sign in or sign up.

The app utilises the Open Trivia Database API (https://opentdb.com/),
which provides the questions and answers.

To run the project you have to change the Firebase
credentials to your own ones in `firebase.js` to your own ones. \
These credentails are safe to be included in version control,
as long as your Firebase project is configured correctly.

In the app, there's no distinction between production and development
configurations, as the application serves only demo purposes.

Other than that you have to run the project as you would run a 
Vue.js app: \
`npm i` \
`npm run serve`
