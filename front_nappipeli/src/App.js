import React from 'react';
import { connect } from 'react-redux'
import { initCounter, increment, changeWinCategory } from './reducers/counterReducer'
import { notifyWin, initNotification, press, deleteMessage, hideMessage } from './reducers/notificationReducer'
import Notification from './components/Notification'
import counterService from './services/counter'


import './App.css';

class App extends React.Component {
  componentWillMount = async () => {
    this.props.initCounter()
    this.props.initNotification()
  }
  
  render() {
    const buttonPress = async () => {
      await this.props.increment()
      console.log(this.props.counter.count)
      const counterObject = {
        id:'5c5aafed153cf16a0d76c6fc',
        state: this.props.counter.count
      }
      await counterService.update(counterObject)
      if ((this.props.counter.count % 100 !== 0) && this.props.notification.pressed) {
        await this.props.changeWinCategory(100)
      }
      if ((this.props.counter.count % 200 === 0) && this.props.notification.pressed) {
        await this.props.changeWinCategory(200)
      }
      if ((this.props.counter.count % 500 === 0) && this.props.notification.pressed) {
        await this.props.changeWinCategory(500)
      }

      if (!this.props.notification.pressed) this.props.press()

      if ((this.props.counter.count % this.props.counter.winCategory) === 0 && this.props.notification.pressed) {
        this.props.notifyWin(`You WIN ${this.props.counter.winCategory}`)
      }
    }

    return (
      <div>
        <button
          onClick={() => buttonPress()}>nappu
        </button>
        <div>{100 - (this.props.counter.count % 100)}</div>
        <Notification/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    notification: state.notification,
  }
}

export default connect(
  mapStateToProps, { notifyWin, initCounter, changeWinCategory, initNotification, increment, press, deleteMessage, hideMessage }
)(App)
