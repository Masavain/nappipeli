const notificationReducer = (state = { pressed: false, message: '', visible: false }, action) => {
  switch (action.type) {
    case 'PRESSED':
      return { ...state, pressed: true }
    case 'INIT_WIN':
      return state
    case 'NEW_NOTIF':
      return { ...state, message: action.notif, visible: true }
    case 'DELETE_MESSAGE':
      return { ...state, message: '', visible: state.visible }
    case 'HIDE_VISIBLE':
      return { ...state, message: state.message, visible: false }
    default:
      return state
  }

}

export const press = () => {
  return {
    type: 'PRESSED'
  }
}

export const notifyWin = (notif) => {
  return async (dispatch) => {
    dispatch({
      type: 'NEW_NOTIF',
      notif
    })
  }
}

export const hideMessage = () => {
  return async (dispatch) => {
    dispatch({
      type: 'HIDE_VISIBLE',
    })
  }
}
export const deleteMessage = () => {
  return async (dispatch) => {
    dispatch({
      type: 'DELETE_MESSAGE',
    })
  }
}

export const initNotification = () => {
  return {
    type: 'INIT_WIN'
  }
}


export default notificationReducer