// import Store from '../store'

// export const NEW_CHAT_MESSAGE = 'NEW_CHAT_MESSAGE'
// export const GET_MESSAGE_LIST = 'GET_MESSAGE_LIST'
// export const NEW_CIENT_CONNECTED = 'NEW_CLIENT_CONNECTED'
// export const CLIENT_TYPING = 'CLIENT_TYPING'
// export const SET_LIST_CONNECTED = 'SET_LIST_CONNECTED'

// function getSocket() {
//     const { app } = Store.getState()

//     const { socket } = app

//     return socket
// }

// // export const sendMessage = ({ id, msg }) => dispatch => {
// //     const socket = getSocket()

// //     socket.emit('admin:new-message', { id , msg })
// // }

// // export const getListOfConnectedClients = () => dispatch => {
// //     const socket = getSocket()

// //     socket.emit('admin:retrieve-connected-list')
// // }

// // export const setListOfConnectedClients = list => dispatch => {
// //     dispatch({ type : SET_LIST_CONNECTED, payload : list })
// // }

// // export const clientConnected = ({ id }) => dispatch => {
// //     dispatch({ type : NEW_CIENT_CONNECTED, payload : id })
// // }

// // export const clientDisconnected = ({ id }) => dispatch => {
// //     dispatch({ type : NEW_CIENT_CONNECTED, payload : id })
// // }

// // export const clientNewMessage = ({ id, msg }) => dispatch => {
// //     dispatch({ type : NEW_CHAT_MESSAGE, payload : { id, msg } })
// // }

// // export const clientTyping = ({ id, isTyping }) => dispatch => {
// //     dispatch({ type : NEW_CHAT_MESSAGE, payload : { id, isTyping } })
// // }
