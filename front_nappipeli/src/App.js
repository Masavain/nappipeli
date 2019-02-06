import React from 'react';
import { connect } from 'react-redux'
import { initCounter, increment, changeWinCategory } from './reducers/counterReducer'
import { notifyWin, initNotification, press, deleteMessage, hideMessage } from './reducers/notificationReducer'
import { initiateWinners, toggle } from './reducers/winnersReducer'
import Notification from './components/Notification'
import counterService from './services/counter'
import { Button } from 'react-bootstrap'
import './App.css'

class App extends React.Component {
  componentWillMount = async () => {
    this.props.initCounter()
    this.props.initNotification()
    this.props.initiateWinners()
  }

  render() {
    const buttonPress = async () => {
      await this.props.increment()
      console.log(this.props.counter.count)
      const counterObject = {
        id: '5c5aafed153cf16a0d76c6fc',
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
    const toggleLeaderboard = async () => {
      await this.props.initiateWinners()
      this.props.toggle(!this.props.winners.toggle)
    }
    const container = {
      padding: 10
    }
    return (
      <div style={container}>
        <h2 style={{ position: 'relative', padding: 10 }}>{'Nappipeli'}</h2>

        <h2 style={{ position: 'relative', padding: 50 }}>{100 - (this.props.counter.count % 100)+ '...'}</h2>
        <div style={{ position: 'relative', left: 30}}> clicks until next prize </div>
        <Button bsSize="sm" bsStyle="danger"
          onClick={() => buttonPress()}>nappu
        </Button>
        <Notification />

        <div><Button style={{ margin: 5 }} onClick={() => toggleLeaderboard()}>Leaderboard</Button>

        <div> {this.props.winners.toggle ?
          <ul style={{border: '1px black'}}>
            {this.props.winners.winners.map(w => <li>{w.name}</li>)}
          </ul>
          : <div></div>} </div>
          </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    notification: state.notification,
    winners: state.winners
  }
}

export default connect(
  mapStateToProps, { initiateWinners, toggle, notifyWin, initCounter, changeWinCategory, initNotification, increment, press, deleteMessage, hideMessage }
)(App)
