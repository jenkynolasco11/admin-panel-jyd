// import IO from 'socket.io-client'

import { getMessages } from './actions/message'
import {
    // sendMessage,
    // clientConnected,
    // clientDisconnected,
    // clientNewMessage,
    // clientTyping,
    // setListOfConnectedClients
} from './actions/chat'

export default (socket, dispatch) => {
    // Server events
    socket.on('server:new email', () => {
        dispatch(getMessages())
    })

    // Client events
    // socket.on('client:new message', ({ id, msg }) => {
    //     dispatch(clientNewMessage({ id, msg }))
    // })

    // socket.on('client:get-list', () => {
    //     // console.log()
    // })

    // socket.on('client:connected', ({ id }) => {
    //     dispatch(clientConnected(id))
    // })

    // socket.on('client:disconnect', ({ id }) => {
    //     dispatch(clientDisconnected(id))
    // })

    // socket.on('client:typing', ({ id }) => {
    //     dispatch(clientTyping(id, true))
    // })

    // socket.on('client:stopped-typing', ({ id }) => {
    //     dispatch(clientTyping(id, false))
    // })

    // Admin events
    // socket.on('admin:get list connected', list => {
    //     dispatch(setListOfConnectedClients(list))
    // })

    // socket.on('admin:')
}
