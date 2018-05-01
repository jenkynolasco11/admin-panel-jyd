import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import IO from 'socket.io-client'

// import { getListOfConnectedClients } from '../../actions/chat'

import ConnectedClients from './connectedClients'

import { ChatBubble, ChatSend, Close }from './svg-icons'

import './style.scss'

class Chat extends Component {
    state = { open : false, messagesToPreview : [], selected : '', text : '', newMessages : 0 }

    constructor(props) {
        super(props)

        this._onEnter = this._onEnter.bind(this)
        this._onChange = this._onChange.bind(this)
        this._onToggleChat = this._onToggleChat.bind(this)
        this._onSendMessage = this._onSendMessage.bind(this)
        this._onSocketMessage = this._onSocketMessage.bind(this)
        this._setNewMessagesCount = this._setNewMessagesCount.bind(this)
    }

    _onEnter({ key, target }) {
        if(key === 'Enter') return this._onSendMessage()
    }

    _onChange({ target }) {
        const { value : text } = target

        return this.setState({ text })
    }

    _onToggleChat() {
        const { open : opn, selected, messagesToPreview } = this.state

        const open = !opn

        const chatState = {
            messagesToPreview : open ? [].concat(messagesToPreview) : [],
            selected : open ? selected : ''
        }

        return this.setState({ open, ...chatState  }, () => console.log(this.state))
    }

    _onSendMessage() {
        const { socket } = this.props
        const { text, selected : id } = this.state

        if(text) {
            socket.emit('admin:new message', { text, id })

            return this.setState({ text : '' })
        }
    }

    _onSocketMessage(selected = '', { messages = [] }) {
        return this.setState({ selected, messagesToPreview : [ ...messages ] })
    }

    _setNewMessagesCount(newMessages) {
        return this.setState({ newMessages })
    }

    componentDidUpdate() {
        this.messageBox.scrollTop = this.messageBox.scrollHeight
    }

    render() {
        const {
            open = false,
            messagesToPreview = [],
            text = '',
            selected = '',
            newMessages = 0
        } = this.state

        const { socket } = this.props

        const chatClass = `chat ${ open ? 'open' : '' }`

        return (
            <div className={ chatClass }>
                <div className="toggle-chat" onClick={ this._onToggleChat }>
                { newMessages > 0 && <span className="messages-badge">{ newMessages }</span> }
                {
                    open
                    ? <Close />
                    : <ChatBubble />
                }
                </div>
                <div id="chat-room">
                    {
                        socket &&
                        <ConnectedClients
                            socket={ socket }
                            onSelect={ this._onSocketMessage }
                            onNewMessages={ this._setNewMessagesCount }
                            selected={ selected }
                        />
                    }
                    <div className="chat-box">
                        <div className="messages" ref={ c => this.messageBox = c }>
                            {
                                messagesToPreview.map(({ type, timestamp, text }) => (
                                    <div key={ timestamp } className={ `message ${ type }` }>
                                        <p className="timestamp">{ new Date(timestamp).toLocaleDateString() + ' ' + new Date(timestamp).toLocaleTimeString() }</p>
                                        <p className="text">{ text }</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="message-box">
                            <input
                                type="text"
                                placeholder="Text To Send"
                                disabled={ !selected }
                                value={ text }
                                onChange={ this._onChange }
                                onKeyUp={ this._onEnter }
                            />
                            <div className="send-button" onClick={ this._onSendMessage }>
                                <ChatSend />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ app, chat }) => ({ socket : app.socket })

const mapDispatchToProps = dispatch => bindActionCreators({
    // getListOfConnectedClients
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
