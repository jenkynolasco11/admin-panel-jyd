import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MessagesTable from './table'
import MessagePreview from './message-preview'
import Editor from './message-reply'

import { getMessages, setMessageToRead, setSkipValue, replyToMessage } from '../../actions/message'

import './messages.scss'

class Messages extends Component {
    state = { selected : null, reply : false }

    constructor(props) {
        super(props)

        this._onRowClick = this._onRowClick.bind(this)
        this._onPageChange = this._onPageChange.bind(this)
        this._onClosePreview = this._onClosePreview.bind(this)
        this._onReplyMessage = this._onReplyMessage.bind(this)
        this._onReplyFromPreview = this._onReplyFromPreview.bind(this)
    }

    //#region private messages
    _onRowClick(selected) {
        return this.setState({ selected })
    }

    _onClosePreview() {
        return this.setState({ selected : null, reply : false })
    }

    _onPageChange(skip) {
        return this.props.onPageChange(skip)
    }

    _onReplyMessage(id, type, msg) {
        this.props.onReply(id, type, msg)

        return this.setState({ selected : null, reply : false })
    }

    _onReplyFromPreview(selected) {
        console.log('right here')

        return this.setState({ selected, reply : true })
    }
    //#endregion

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
                    onReplyClick={ () => this.setState({ reply : true }) }
                />
                {
                    this.state.selected !== null && !this.state.reply
                    ?   <MessagePreview
                            msg={ this.state.selected }
                            onClosePreview={ this._onClosePreview }
                            onPreview={ this.props.setToRead }
                            onReply={ this._onReplyFromPreview }
                        />
                    : null
                }
                {
                    this.state.selected !== null && this.state.reply
                    ?   <Editor
                            onSubmitMessage={ this._onReplyMessage }
                            onClose={ this._onClosePreview }
                            msg={ this.state.selected }
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
    setToRead : (id, type) => setMessageToRead({ id, type }),
    onReply : (id, type, reply) => replyToMessage({ id, type, reply }),
    onPageChange : skip => setSkipValue(skip)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
