import React, { Component } from 'react'
import renderMajorScale from './majorScale'

module.exports = ({state, dispatch}) => {

  const showScale = () => {
    console.log("CLICKED ON")
    dispatch({type: 'TOGGLE_SHOW_SCALE'})
  }

  return (
    <div>
      <input onChange={(e) => dispatch({type: 'CHANGE_KEY', payload: {change: 'key', value: e.target.value}})} type="text" placeholder="Select Key" />
      <button onClick={showScale}>Major Scale</button>
      {state.showScale
        ? renderMajorScale(state, dispatch)
        : ""
      }
    </div>
  )

}
