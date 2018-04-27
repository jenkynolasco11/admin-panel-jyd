export default socket => {
    socket.on('connect', () => {
        console.log('hola!')
    })

    // socket.on('id', console.log)
}
