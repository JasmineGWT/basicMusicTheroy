const clone = require('clone')

module.exports = (state, action) => {
  var newState = clone(state)
  const {payload, type} = action
  switch (type) {
    case "CHANGE_KEY":
      newState.key = payload.value
      return newState
    case 'CHANGE_ROUTE':
      newState.route = payload
      return newState
    case 'TOGGLE_SHOW_SCALE':
      newState.showScale = !newState.showScale
      return newState
    default:
      return newState
  }
}
