# R/West Reception App (React)
#### By Ash Laidlaw

## About

This is a React web app that is meant for office reception areas. The app allows guests (deliveries, friends, etc.) to check in by choosing who they need to visit from the list. It will send a message to that person on Slack, but if that person is offline, it will send an email to that person's email address associated with Slack.. Its purpose is to simplify check-in for office visitors in an easy way.

## Technologies Used

* JavaScriot
* Superagent
* React
* HTML
* SASS
* Slack API
  * chat.postMessage
  * users.list

## Setup Instructions

To use this app, you will need to download the Superagent package from https://visionmedia.github.io/superagent/. In addition, you will need to create a Slack token and either add the token directly to the index.php file, or create a new file to which to add the token. For more information about the Slack token, please visit https://api.slack.com/.

Currently, the app has no styling applied.

## Copyright Information

MIT License, © Ash Laidlaw
