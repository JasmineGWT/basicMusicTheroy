import React, { Component } from 'react'
import makeMajorScale from './makeMajorScale'
import chordsInScale from './chordsInScale'

module.exports = ({state, dispatch}) => {

  const toggleMajorScale = () => {
    dispatch({type: 'TOGGLE', payload: 'showMajorScale'})
  }

  const renderMajorScale = () => {
    var e = state.showMajorScale ? <h1>{makeMajorScale(state, dispatch).toString()}</h1> : ""
    return e
  }

  const toggleChordsInScale = () => {
    dispatch({type: 'TOGGLE', payload: 'showChordsInScale'})
  }

  const renderChordsInScale = () => {
    var e = state.showChordsInScale ? <h1>{chordsInScale(state, dispatch).toString()}</h1> : ""
    return e
  }

  return (
    <div>
      <div className="inputKey">
        <input onChange={(e) => dispatch({type: 'CHANGE_KEY', payload: {change: 'key', value: e.target.value}})} type="text" placeholder="Select Key" />
      </div>
      <div className="optionButtons">
        <button onClick={toggleMajorScale}>Major Scale</button>
        <button onClick={toggleChordsInScale}>Chords</button>
      </div>
      {renderMajorScale()}
      {renderChordsInScale()}
    </div>
  )

}
