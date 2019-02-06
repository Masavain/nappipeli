import winnerService from './../services/winners'

const winnersReducer = (state = {toggle: false, winners: []}, action) => {
    console.log('ACTION: ', action)
    switch (action.type) {
    case 'INIT_WINNERS':
      return { ...state, winners: action.winners }
    case 'TOGGLE':
      return { ...state, toggle: action.toggle }
    default:
      return state
    }
  }
  
  export const toggle = (toggle) => {
    return{
      type: 'TOGGLE',
      toggle
    }
  }

  export const initiateWinners = (toggle) => {
    return async (dispatch) => {
      const winners = await winnerService.getAll()
      winners.reverse()
      const sliced = winners.slice(0,11)
      dispatch({
        type: 'INIT_WINNERS',
        winners: sliced
      })
    }
  }
  
  
  
  export default winnersReducer