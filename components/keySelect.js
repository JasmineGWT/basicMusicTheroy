import React, { Component } from 'react'
import makeMajorScale from './makeMajorScale'
import chordsInScale from './chordsInScale'
import notesInChord from './notesInChord'

module.exports = ({state, dispatch}) => {

  const toggleMajorScale = () => {
    dispatch({type: 'TOGGLE', payload: 'showMajorScale'})
  }

  const renderMajorScale = () => {
    var e = state.showMajorScale ? <div><h1>{makeMajorScale(state, dispatch).toString()}</h1></div> : <h1>Major Scale</h1>
    return e
  }

  const toggleChordsInScale = () => {
    dispatch({type: 'TOGGLE', payload: 'showChordsInScale'})
  }

  const renderChordsInScale = () => {
    var e = state.showChordsInScale ? <h1>{chordsInScale(state, dispatch).toString()}</h1> : <h1>Chords in this key</h1>
    return e
  }

  const toggleNotesInChord = () => {
    dispatch({type: 'TOGGLE', payload: 'showNotesInChord'})
  }

  const renderNotesInChord = () => {
    var e = state.showNotesInChord ? <h1>{notesInChord(state, dispatch).toString()}</h1> : <h1>Notes in this chord</h1>
    return e
  }

  return (
    <div>
      <div>
        <input className="inputKey" onChange={(e) => dispatch({type: 'CHANGE_KEY', payload: {change: 'key', value: e.target.value}})} type="text" placeholder="Enter Key" />
      </div>
      <div onClick={toggleMajorScale} className="infoDiv">
        {renderMajorScale()}
      </div>
      <div onClick={toggleChordsInScale} className="infoDiv">
        {renderChordsInScale()}
      </div>
      <div onClick={toggleNotesInChord} className="infoDiv">
        {renderNotesInChord()}
      </div>
    </div>
  )

}
