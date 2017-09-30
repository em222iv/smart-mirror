const Sonus = require('sonus')
const path = require('path')
const speech = require('@google-cloud/speech')({
  projectId: 'smart-mirror',
  keyFilename: path.resolve('./keyfile.json')
})
var player = require('play-sound')({})

import { store } from './app/store'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//APPLICATION
import App from './app'

//DOM INJECT
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('content')
);


//SPEECH TO TEXT SECTION
const hotwords = [
  // { file: path.resolve('assets/NavI.pmdl'), hotword: 'NaVi' },
  // { file: path.resolve('assets/Hey_Navi.pmdl'), hotword: 'Hey Navi' },
  { file: path.resolve('assets/Navi.pmdl'), hotword: 'Navi' }
]
const language = "sv-SE"

const sonus = Sonus.init({ hotwords, language, recordProgram: "rec" }, speech)
Sonus.start(sonus)
// console.log('Say "' + hotwords[0].hotword + '"...')

sonus.on('hotword', (index, keyword) => {
  if(store.getState().speech.listening)
    return;

  store.dispatch({type:'LISTENING', payload:true})

  player.play(getSonusQuotes(), function(err){
    if (err) console.log('SOUND ERROR', err)
  })

  console.log("Activated with: " + keyword)
})

sonus.on('partial-result', result => {
   store.dispatch({type:'UPDATE', payload:result})
   console.log("processing: ", result)
 })

sonus.on('final-result', result => {
  console.log("You said: ", result)
  store.dispatch({type:'UPDATE', payload:result})
  setTimeout(() => {
    store.dispatch({type:'EMPTY'})
  },1000)
  if (result.includes("nothing")) {
    store.dispatch({type:'EMPTY'})
    // Sonus.stop() // Will shut down the Sonus program entirely
  }
})

function getSonusQuotes() {
  let answers = ['./assets/Navi_Hello1.wav']
  // let answers = ['./assets/Navi_Hello1.wav','./assets/Navi_Hey2.wav']
  return answers[Math.floor(Math.random()*answers.length)]
};
