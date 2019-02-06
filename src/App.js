import React from 'react';
import { connect } from 'react-redux'
import { initCounter,increment, changeWinCategory } from './reducers/counterReducer'
import { initWin, press } from './reducers/winReducer'
import './App.css';

class App extends React.Component {
  componentWillMount = async () => {
    this.props.initCounter()
    this.props.initWin()
  }

  render() {
    const buttonPress = async () => {
      await this.props.increment()
      if ((this.props.counter.count % 100 !== 0) && this.props.win.pressed) {
        await this.props.changeWinCategory(100)
      }
      if ((this.props.counter.count % 200 === 0) && this.props.win.pressed) {
        await this.props.changeWinCategory(200)
      }
      if ((this.props.counter.count % 500 === 0) && this.props.win.pressed) {
        await this.props.changeWinCategory(500)
      }

      if (!this.props.win.pressed) this.props.press()
    }

    return (
      <div>
        <button 
          onClick={() => buttonPress()}>nappu
        </button>
        <div>{100 - (this.props.counter.count % 100)}</div>
        <div>{(100 - (this.props.counter.count % 100)===100 && this.props.win.pressed)? <h3>You WIN {this.props.counter.winCategory}</h3> :<div></div> }</div>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    win: state.win,
  }
}

export default connect(
  mapStateToProps, { initCounter, changeWinCategory, initWin, increment, press }
)(App)
