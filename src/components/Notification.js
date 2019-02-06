import React from 'react'
import { connect } from 'react-redux'
import { deleteMessage, hideMessage } from './../reducers/notificationReducer'


class Notification extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault()
        const content = event.target.name.value
        console.log(content)
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
                    <div><input name='name' /></div>
                    <button>input name</button>
                </form>
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
