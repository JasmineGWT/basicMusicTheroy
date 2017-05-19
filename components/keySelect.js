import React, { Component } from 'react'
import makeMajorScale from './makeMajorScale'
import chordsInScale from './chordsInScale'
import notesInMajorChord from './notesInMajorChord'
import notesInMinorChord from './notesInMinorChord'
import makeNaturalMinorScale from './makeNaturalMinorScale'


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

  const toggleNotesInMajorChord = () => {
    dispatch({type: 'TOGGLE', payload: 'shownotesInMajorChord'})
  }

  const renderNotesInMajorChord = () => {
    var e = state.shownotesInMajorChord ? <h1>{notesInMajorChord(state, dispatch).toString()}</h1> : <h1>Notes in this major chord</h1>
    return e
  }

  const toggleNotesInMinorChord = () => {
    dispatch({type: 'TOGGLE', payload: 'shownotesInMinorChord'})
  }

  const renderNotesInMinorChord = () => {
    var e = state.shownotesInMinorChord ? <h1>{notesInMinorChord(state, dispatch).toString()}</h1> : <h1>Notes in this minor chord</h1>
    return e
  }

  const toggleNaturalMinorScale = () => {
    dispatch({type: 'TOGGLE', payload: 'showNaturalMinorScale'})
  }

  const renderNaturalMinorScale = () => {
    var e = state.showNaturalMinorScale ? <h1>{makeNaturalMinorScale(state, dispatch).toString()}</h1> : <h1>Natural Minor Scale</h1>
    return e
  }

  return (
    <div>
      <div>
        <input className="inputKey" onChange={(e) => dispatch({type: 'CHANGE_KEY', payload: {change: 'key', value: e.target.value.toUpperCase()}})} type="text" placeholder="Enter Key" />
      </div>
      <div onClick={toggleMajorScale} className="infoDiv">
        {renderMajorScale()}
      </div>
      <div onClick={toggleChordsInScale} className="infoDiv">
        {renderChordsInScale()}
      </div>
      <div onClick={toggleNotesInMajorChord} className="infoDiv">
        {renderNotesInMajorChord()}
      </div>
      <div onClick={toggleNotesInMinorChord} className="infoDiv">
        {renderNotesInMinorChord()}
      </div>
      <div onClick={toggleNaturalMinorScale} className="infoDiv">
        {renderNaturalMinorScale()}
      </div>
    </div>
  )

}
