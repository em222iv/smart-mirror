const Sonus = require('sonus')
const path = require('path')
const speech = require('@google-cloud/speech')({
  projectId: 'smart-mirror',
  keyFilename: path.resolve('./keyfile.json')
})

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
const hotwords = [{ file: path.resolve('node_modules/sonus/resources/sonus.pmdl'), hotword: 'sonus' }]
const language = "sv-SE"

const sonus = Sonus.init({ hotwords, language, recordProgram: "rec" }, speech)

Sonus.start(sonus)
console.log('Say "' + hotwords[0].hotword + '"...')

sonus.on('hotword', (index, keyword) => {
  store.dispatch({type:'LISTENING', payload:true})
  console.log("Activated with: " + keyword)
})

sonus.on('partial-result', result =>{
   console.log("processing: ", result)
   store.dispatch({type:'UPDATE', payload:result})
 })

sonus.on('final-result', result => {
  console.log("You said: ", result)
  store.dispatch({type:'UPDATE', payload:result})
  setTimeout(() => {
    store.dispatch({type:'LISTENING', payload:false})
    store.dispatch({type:'UPDATE', payload:''})
  },3000)
  // if (result.includes("stop")) {
  //   Sonus.stop() // Will shut down the Sonus program entirely
  // }
})
