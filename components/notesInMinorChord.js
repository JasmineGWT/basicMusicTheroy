import React, { Component } from 'react'
import makeNaturalMinorScale from './makeNaturalMinorScale'

module.exports = (state, dispatch) => {
  var scale = makeNaturalMinorScale(state, dispatch)

  var note1 = scale[0]
  var note2 = scale[2]
  var note3 = scale[4]

  var notes = [note1, note2, note3]

  return notes

}
