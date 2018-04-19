import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MessagesTable from './table'
import MessagePreview from './message-preview'

import { getMessages, setMessageToRead, setSkipValue } from '../../actions/message'

import './messages.scss'

class Messages extends Component {
    state = { selected : null }

    constructor(props) {
        super(props)

        this._onRowClick = this._onRowClick.bind(this)
        this._onPageChange = this._onPageChange.bind(this)
        this._onClosePreview = this._onClosePreview.bind(this)
    }

    _onRowClick(selected) {
        return this.setState({ selected })
    }

    _onClosePreview() {
        return this.setState({ selected : null })
    }

    _onPageChange(skip) {
        return this.props.onPageChange(skip)
    }

    componentDidMount() {
        return this.props.getMessages()
    }

    render(){
        const { messages, count, limit, skip } = this.props

        return (
            <div className="container">
                <br />
                <MessagesTable
                    extraClass={ "messages-board" }
                    messages={ messages }
                    count={ count }
                    limit={ limit }
                    skip={ skip }
                    selectedMessage={ this.state.selected }
                    onRowClick={ this._onRowClick }
                    onPageChange={ this._onPageChange }
                />
                <br />
                {
                    this.state.selected !== null
                    ?   <MessagePreview
                            msg={ this.state.selected }
                            onClosePreview={ this._onClosePreview }
                            onPreview={ this.props.setToRead }
                        />
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = ({ message, app }) => ({
    messages: message.messages,
    count : message.count,
    limit : message.limit,
    skip : message.skip,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getMessages,
    setToRead : (id, type) => setMessageToRead({id, type}),
    onPageChange : skip => setSkipValue(skip)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
