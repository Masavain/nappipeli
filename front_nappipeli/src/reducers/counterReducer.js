// winCategory 
// 100: small price
// 200: medium price
/// 500: big price

const counterReducer = (state={count: 0, winCategory: 100}, action) => {
  if (action.type === 'INCREMENT') {
    return {...state, count: state.count+10}
  }
  if (action.type === 'CHANGE_WIN'){
    return {...state, winCategory: action.data }
  }
  if (action.type === 'INIT') {
    return state
  }
  return state
}

export const increment = () => {
  return async (dispatch) => {
    dispatch({
      type: 'INCREMENT'
    })
  }
}

export const changeWinCategory = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'CHANGE_WIN',
      data
    })
  }
}



export const initCounter = () => {
    return{
      type: 'INIT',
    }
}


export default counterReducer