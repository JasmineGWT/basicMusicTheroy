import React, { Component } from 'react'
import makeMajorScale from './makeMajorScale'
import chordsInScale from './chordsInScale'

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
    var e = state.showChordsInScale ? <h1>{chordsInScale(state, dispatch).toString()}</h1> : <h1>Chords</h1>
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
    </div>
  )

}
