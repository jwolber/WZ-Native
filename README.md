# Description
A small application to get familiar with React Native. The application uses the Call of Duty api to pull in match summary/stats.

## Getting Started

It's assumed you have your environment setup before starting this. If not please check out the [documentation](https://reactnative.dev/docs/environment-setup)

Create a `.env` file in the root of the project. .env.sample for reference. See Env variable section below for details.

```
$ npm i
```
$ cd ios && pod install
```
$ npm start

//In another terminal
$ npm run android //or npm run ios

## TO-DO
* Add testing
* Add additional call for match specific data
* Get running in beta mode on Android/iOS

## Env Variables
* ACT_SSO_COOKIE - Login to https://my.callofduty.com/home and pull the ACT_SSO_COOKIE value
* GAMER_TAG - Your Activison Game Tag ex. blackhawk#2577877
