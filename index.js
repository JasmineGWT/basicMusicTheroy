import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

import Router from 'sheet-router'
import { createStore } from 'redux'

import MajorScale from './components/makeMajorScale'
import KeySelect from './components/keySelect'

var reducer = require('./reducer')

var app = document.createElement('div')
document.querySelector('main').appendChild(app)

const initialState = {
  key: 'A',
  route: '/',
  showMajorScale: false,
  showChordsInScale: false
}

var store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store


const route = Router({ default: '/404' }, [
  ['/', (params) => KeySelect]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, app)
})

render(<App name="musicTheroy"/>, app)

dispatch({type: 'INIT'})
