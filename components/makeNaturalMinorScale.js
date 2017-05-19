import React, { Component } from 'react'

module.exports = (state, dispatch) => {

  var scaleYouWant = state.key
  var notesArray = ['C', 'C#/D*', 'D', 'D#/E*', 'E', 'F', 'F#/G*', 'G', 'G#/A*', 'A', 'A#/B*', 'B']
  var firstHalf = notesArray.slice(0, notesArray.indexOf(scaleYouWant)+1)
  var secondHalf = notesArray.splice(notesArray.indexOf(scaleYouWant))
  var newArray = secondHalf.concat(firstHalf)
  var scale = [newArray[0], newArray[2], newArray[3], newArray[5], newArray[7], newArray[8], newArray[10], newArray[0]]

  return scale
}
