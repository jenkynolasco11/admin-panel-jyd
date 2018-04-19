import IO from 'socket.io-client'

import { getMessages } from './actions/message'

export default (socket, dispatch) => {
    let id = null

    socket.on('connect', () => {
        console.log('Socket connected...')
    })

    socket.on('new message', () => {
        console.log('new message')

        dispatch(getMessages())
    })

    socket.on('id', data => id = data)

    socket.on('msg', data => {
        console.log(data)
    })
}

// export const connectSocket = () => {
//     // let id = null
//     socket = IO()

//     socket.on('connect', () => {
//         console.log('Socket connected...')
//     })

//     socket.on('new message', () => {
//         console.log('there is a new message')
//     })

//     socket.on('id', data => id = data)

//     socket.on('msg', data => {
//         console.log(data)
//     })

//     return socket
// }
