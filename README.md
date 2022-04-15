# Quiz

Available at: https://quiz.kiss-illes.com

I created a private fork of this public repo and it serves optometry questions.
The optometry version is under development, while this public version is not currently developed.
For the optometry version I created an own API which serves the questions, provided by the
Cardiff University optometry student Anna Phanjakidze.
The optometry version is available at: https://optom.kiss-illes.com

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

(The optometry version has further features)

## Implementation Details

This quiz app was built with Vue.js, Vuex and Firebase, and deployed
on AWS S3 and Firebase.

Firebase base is used for authentication and also to store the
stats of the users. Meanwhile, with the help of Vuex it's
possible to keep track of the scores in a simple browser session
without the need to sign in or sign up.

The app utilises the Open Trivia Database API (https://opentdb.com/),
which provides the questions and answers for the Open Trivia version.

To run the project you have to create a `.env` file
according to the `.env.example` file with your Firebase
credentials.\
These credentials are safe to be included in the .env file,
as long as your Firebase project is configured correctly.

In the app, there's no distinction between production and development
configurations, as the application serves only demo purposes.

Other than that you have to run the project as you would run a 
Vue.js app: \
`npm i` \
`npm run serve`
