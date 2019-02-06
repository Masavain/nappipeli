import React from 'react'
import { connect } from 'react-redux'
import { deleteMessage, hideMessage } from './../reducers/notificationReducer'
import { initiateWinners} from './../reducers/winnersReducer'
import winnerService from './../services/winners'
import { Alert, Button } from 'react-bootstrap'


class Notification extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault()
        const winnerObject = {
            name: event.target.name.value,
            date: new Date(),
          }
        winnerService.create(winnerObject)
        this.props.initiateWinners()
        this.props.deleteMessage()
    }


    render() {
        if (this.props.notification.message === '') {
            return null
        }
        const style = {
            position: 'absolute',
            border: 'solid',
            margin: 10,
            padding: 10,
            borderWidth: 1,
            left:10,
            width: '300px'
        }
        return (
            <Alert style={style}>
                <h3>{this.props.notification.message}</h3>
                <form class="col s12" onSubmit={this.handleSubmit}>
                    <div class="row"><input type="text" name="name" /></div>
                    <Button style={{ position: 'relative'}}>input name</Button>
                </form>
                <Button style={{margin: 5, position: 'relative'}} onClick={() => this.props.deleteMessage()}>X</Button>
            </Alert>
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
    mapStateToProps, { deleteMessage, initiateWinners }
)(Notification)
