const Sonus = require('sonus')
const path = require('path')
const speech = require('@google-cloud/speech')({
  projectId: 'smart-mirror',
  keyFilename: path.resolve('./keyfile.json')
})

import { store } from './store'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SpeechText from './text.js'

//DOM INJECT
ReactDOM.render(
    <Provider store={store}>
      <SpeechText />
    </Provider>,
    document.getElementById('content')
);

//SPEECH TO TEXT SECTION
const hotwords = [{ file: path.resolve('node_modules/sonus/resources/sonus.pmdl'), hotword: 'sonus' }]
const language = "en-US"

const sonus = Sonus.init({ hotwords, language, recordProgram: "rec" }, speech)

Sonus.start(sonus)
console.log('Say "' + hotwords[0].hotword + '"...')

sonus.on('hotword', (index, keyword) => console.log("Activated with: " + keyword))

sonus.on('partial-result', result => console.log("Partial", result))

sonus.on('final-result', result => {
  console.log("Final", result)
  store.dispatch({type:'UPDATE', payload:result})
  if (result.includes("stop")) {
    Sonus.stop()
  }
})
