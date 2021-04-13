const socket = require('socket.io')
const debug = require('debug')('nihuawocao:server');

const say = require('say')

const ioInstance = {
    initialize(server) {
        this.io = socket(server);
        this.io.on('connection', (socket)=> {
            debug("one user connected")
            say.speak("one user connected")
            socket.on('disconnect', (a)=> {
                say.speak("one user disconnected")
                debug("user disconnected")
            })

            socket.on('msg', (msg)=> {
                debug(msg)
                say.speak(msg);
            })
        });
    }
}

module.exports = ioInstance