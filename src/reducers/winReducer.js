const winReducer = (state = { pressed: false, message: '', visible: false }, action) => {
    switch (action.type) {
    case'PRESSED':
        return {...state , pressed:true}
    case'INIT_WIN':
        return state
    case 'NEW_NOTIF':
        return {...state, message: action.notif, visible: true }
    case 'DELETE_MESSAGE':
        return {...state, message: '', visible: state.visible }
    case 'HIDE_VISIBLE':
        return {...state, message: state.message, visible: false }
    default:
        return state
    }
    
  }
  
  export const press = () => {
    return {
      type: 'PRESSED'
    }
  }

  export const notifyWin = (notif, seconds) => {
    return async (dispatch) => {
      dispatch({
        type: 'NEW_NOTIF',
        notif
      })
      await setTimeout(() => {
        dispatch({
          type: 'HIDE_VISIBLE',
        })
      }, 1000*seconds)
      setTimeout(() => {
        dispatch({
          type: 'DELETE_MESSAGE',
        })
      }, 2000*seconds)
    }
  }

  export const initWin = () => {
    return{
      type: 'INIT_WIN'
    }
  }

  
  export default winReducer