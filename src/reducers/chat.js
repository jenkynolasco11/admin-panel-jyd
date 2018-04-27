// import { GET_MESSAGE_LIST, NEW_CIENT_CONNECTED, NEW_CHAT_MESSAGE, CLIENT_TYPING, SET_LIST_CONNECTED } from '../actions/chat'

// // const defaultState = {
// //     clients : {}
// //     // { id : { typing : Boolean, messages : [{ text : String, timestamp : Date}]}
// // }

// export default (state = defaultState, { type, payload }) => {
//     switch(type) {
//         case SET_LIST_CONNECTED :
//             const newState = { ...state, clients : { ...payload.reduce((m, n) => ({ ...m, [ n ] : { typing : false, messages : [] }}), {})}}

//             return newState
//         case NEW_CHAT_MESSAGE :
//             const clientToReceiveMessage = state.clients[ payload.id ]

//             return { ...state, [ payload.id ] : { ...clientToReceiveMessage, messags : [].concat(clientToReceiveMessage.messages, payload.msg) }}
//         case NEW_CIENT_CONNECTED :
//             const newClient = { typing : false, messages : [] }

//             return { ...state, [ payload ] : newClient }
//         case GET_MESSAGE_LIST:
//             const clientToReceiveMessagesList = state.clients[ payload.id ]

//             return { ...state, [ payload.id ] : { ...clientToReceiveMessagesList, messages : [ ...payload.msg ] } }
//         case CLIENT_TYPING :
//             const clientThatIsTyping = state.clients[ payload.id ]

//             return { ...state, [ payload.id ] : { ...clientThatIsTyping, typing : payload.isTyping }}
//         default:
//             break
//     }

//     return { ...state }
// }
