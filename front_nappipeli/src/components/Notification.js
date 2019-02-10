import React from 'react'
import { connect } from 'react-redux'
import { deleteMessage, hideMessage } from './../reducers/notificationReducer'
import { initiateWinners } from './../reducers/winnersReducer'
import winnerService from './../services/winners'
import { Alert, Button, Form, FormGroup } from 'react-bootstrap'


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
            position: 'relative',
            border: 'solid',
            margin: 10,
            padding: 10,
            borderWidth: 1,
            left: 10,
            width: '300px'
        }
        return (
            <Alert style={style}>
                <h3>{this.props.notification.message}</h3>
                <Form class="col s12" style={{margin:4 }} onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group controlId="name">
                        <Form.Control type="text" placeholder="enter name">
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ position: 'relative' }}>Submit</Button>
                </Form>
                <a style={{margin: 4}} class="btn-floating btn-small waves-effect waves-light red" onClick={() => this.props.deleteMessage()}><i class="material-icons">cancel</i></a>
                {/* <Button style={{ margin: 5, position: 'relative' }} onClick={() => this.props.deleteMessage()}>X</Button> */}
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
