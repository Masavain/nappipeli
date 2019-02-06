import React from 'react'
import { connect } from 'react-redux'
import { deleteMessage, hideMessage } from './../reducers/notificationReducer'
import winnerService from './../services/winners'


class Notification extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault()
        const winnerObject = {
            name: event.target.name.value,
            date: new Date(),
          }
        winnerService.create(winnerObject)
        this.props.deleteMessage()
    }


    render() {
        if (this.props.notification.message === '') {
            return null
        }
        const style = {
            border: 'solid',
            padding: 10,
            borderWidth: 1
        }
        return (
            <div style={style}>
                {this.props.notification.message}
                <form onSubmit={this.handleSubmit}>
                    <div><input type="text" name="name" /></div>
                    <button>input name</button>
                </form>
                <button onClick={() => this.props.deleteMessage()}>X</button>
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
    mapStateToProps, { deleteMessage }
)(Notification)
