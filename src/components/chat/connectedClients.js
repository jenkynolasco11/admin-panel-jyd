import React, { PureComponent as Component } from 'react'

// import socketFunctions from './socketFunctions'

class ConnectedClients extends Component {

    // TODO: Remove selected from here. Get it from props. This is
    // for removing the selected item when I close the chat.
    state = {
        clients  : {},
        // selected : ''
    }

    constructor(props) {
        super(props)

        this._onSelect = this._onSelect.bind(this)
        this._renderClients = this._renderClients.bind(this)
        this._socketFunctions = this._socketFunctions.bind(this)
        this._getNewMessagesCount = this._getNewMessagesCount.bind(this)
    }

    _getNewMessagesCount() {
        const { onNewMessages } = this.props
        const { clients } = this.state

        const msgsCount = Object.entries(clients).reduce((p, [ id, { newMessages } ]) => p + +(newMessages > 0), 0)

        console.log('Msgs Count => ' + msgsCount)
        onNewMessages(msgsCount)
    }

    _onSelect(id) {
        const { onSelect, onNewMessages } = this.props
        const { clients } = this.state

        const newState = {
            // selected : id,
            clients : {
                ...clients,
                [ id ] : {
                    ...clients[ id ],
                    newMessages : 0
                }
            }
        }

        return this.setState(newState, () => {
            const newMsgs = this._getNewMessagesCount()

            onSelect(id, (id ? clients[ id ] : {}))
            onNewMessages(newMsgs)
        })
    }

    _renderClients() {
        const { clients } = this.state
        const { selected } = this.props

        const items = Object.entries(clients)

        if (items.length <= 0) return <div className="empty">There is no one connected</div>

        return (
            <React.Fragment>
                {
                    items.map(([ id, { email, name, newMessages, isFocus, isTyping } ]) => {
                        const isSelected = id === selected ? 'selected' : ''
                        const onChat = isFocus ? 'on-chat' : ''
                        const hasNewMessages = newMessages ? 'new-message' : ''
                        const className = `client ${ onChat } ${ hasNewMessages } ${ isSelected }`
                        const onClick = () => this._onSelect(id)

                        return (
                            <div key={id} className={ `client ${ className }` } onClick={ onClick } >
                                <div className="text">
                                    <span>{ name }</span>
                                    <span className="small">{ email }</span>
                                </div>
                                {
                                    newMessages > 0 &&
                                    <div className="messages-badge">{ newMessages }</div>
                                }
                                <div className="message-typing">
                                    {
                                        isTyping
                                        ?
                                            <React.Fragment>
                                                <span />
                                                <span />
                                                <span />
                                            </React.Fragment>
                                        : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    _socketFunctions(socket) {
        socket.on('disconnect', () => {
            return this.setState({ clients : {} }, () => this.props.onSelect('', {}))
        })

        socket.on('server:list connected clients', clnts => {
            // const { clients : oldClients } = this.state
            const newObj = {
                // typing : false,
                messages : [],
                isFocus : false,
                newMessages : 0
            }

            const newClients = clnts.reduce((p, { id, name, email, isFocus = false, messages = [] }) => {
                // const oldClnt = oldClients[ id ]
                const obj = {
                    ...p,
                    [ id ] : {
                        ...newObj,
                        name,
                        email,
                        isFocus
                    }
                }

                return obj
            }, {})

            // const clients = { ...clnts.reduce((p, { id, name, email, isFocus }) => ({...p, [ id ] : { ...newObj, name, email, isFocus } }), {}) }

            const clients = { ...newClients }

            return this.setState({ clients })
        })

        socket.on('server:new connection', ({ id, email, name, isFocus }) => {
            const { clients } = this.state

            const newClientsList = { ...clients, [ id ] : { name, email, typing : false, messages : [], isFocus }}

            return this.setState({ clients : { ...newClientsList }})
        })

        socket.on('server:client disconnect', id => {
            const { clients } = this.state
            const { onSelect, selected, onNewMessages } = this.props

            delete clients[ id ]

            return this.setState({ clients : { ...clients }}, () => {
                if(id === selected) {
                    // If I don't want to remove the messages when people disconnects
                    onSelect('', {})

                    this._getNewMessagesCount()
                    this.setState({ selected : '' })
                }
            })
        })

        socket.on('server:new message', ({ id = '', message = [] }) => {
            const { onSelect, selected } = this.props
            const { clients } = this.state

            const client = clients[ id ]
            const { messages : msgs, newMessages : newMsgs = 0 } = client

            const messages = [ ...msgs, message ]
            const newMessages = selected === id ? 0 : newMsgs + 1

            const newState = { clients : { ...clients, [ id ] : { ...client, messages, newMessages, isTyping : false }}}

            this.setState(newState, () => {
                const { clients } = this.state
                // const { onNewMessages } = this.props

                // if(selected === '') {
                this._getNewMessagesCount()

                // }

                if(selected === id) return onSelect(id, clients[ id ])
            })
        })

        socket.on('server:chat stats', ({ id = '', ...stats }) => {
            const { clients } = this.state

            // console.log(this.state.clients)

            const client = clients[ id ]

            // if(client) {
                const newState = { clients : { ...clients, [ id ] : { messages : [], ...client, ...stats }}}

                return this.setState({ ...newState })
            // }
        })

        // socket.on('connect', () => {
        //     socket.emit('admin:get list connected')
        // })
    }

    componentDidMount() {
        const { socket } = this.props

        // socket.emit('admin:get list connected')

        return this._socketFunctions(socket)
    }

    render() {
        return (
            <div className="chat-clients" >
            {
                this._renderClients()
            }
            </div>
        )
    }
}

export default ConnectedClients
