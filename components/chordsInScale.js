import React, { Component } from 'react'
import makeMajorScale from './makeMajorScale'

module.exports = (state, dispatch) => {
  var scale = makeMajorScale(state, dispatch)

  var chordI = scale[0]
  var chordii = scale[1].concat('m')
  var chordiii = scale[2].concat('m')
  var chordIV = scale[3]
  var chordV = scale[4]
  var chordvi = scale[5].concat('m')
  var chordvii = scale[6].concat('dim')

  var chords = [chordI, chordii, chordiii, chordIV, chordV, chordvi, chordvii]

  return chords

}
