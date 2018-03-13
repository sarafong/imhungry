# I'm Hungry

I'm Hungry is an Amazon Alexa skill that prompts the user to tell Alexa about their day and then provides restaurant recommendations based on the user's mood using mood analysis. Start off with "Hey Alexa, I'm hungry..." and then tell her about your day to begin.

## How does it work?

I'm Hungry receives speech input from the user using the Amazon Echo, then parses this speech input and passes it into IBM Watson's Sentiment Analysis API. Then, based on the sentient score generated from the API, a certain type of restaurant is selected with a custom distance. For example, if it is detected that you are feeling sad, Alexa might suggest an ice cream parlour close by. 

Then, using Yelp's Business Search API, the highest rated restaurant with the relevant search criteria is selected. The location of the restaurant is then displayed on a web app, integrated using Google Maps' API.

## Tools/Frameworks Used

- AWS Lambda (for programming Alexa)
- Node.js
- Firebase (to connect Alexa to the web server, as well as the APIs)
