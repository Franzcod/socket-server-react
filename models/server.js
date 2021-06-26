const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');
const colors    = require('colors');
const path      = require('path');
const Sockets   = require('./sockets');

// ///////////////////////////
// 
//   UNA CLASE CON TOLO LO RELACIONADO AL SERVER
// 
// (((((((((((((())))))))))))))


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Http Server
        this.server = http.createServer(this.app);

        // Config Sockets
        this.io = socketio(this.server, {/*  config  */});
    }


    middlewares(){
        // Desplegar directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
    }

    configurarSocket(){
        // 
        new Sockets(this.io);
    }



    execute(){
        // Inicializar middlewares
        this.middlewares();

        // Inicializar Sockets
        this.configurarSocket();

        // Iniciarlizar Server
        this.server.listen(this.port, ()=>{
            console.log(colors.bgYellow(' Server run in port: '.black), colors.bgGreen(` ${this.port} `.black));
        });
    }
}

module.exports = Server;