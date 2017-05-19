import React, { Component } from 'react'
import makeMajorScale from './makeMajorScale'

module.exports = (state, dispatch) => {
  var scale = makeMajorScale(state, dispatch)

  var note1 = scale[0]
  var note2 = scale[2]
  var note3 = scale[4]

  var notes = [note1, note2, note3]

  return notes

}
