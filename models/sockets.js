

// ///////////////////////////
// 
//   UNA CLASE CON TOLO LO RELACIONADO AL SOCKET
// 
// (((((((((((((())))))))))))))

class Sockets{

    constructor(io){
        this.io = io;
        this.socketEvents();
    }


    socketEvents(){
            //  ON conection
        this.io.on('connection', ( socket ) => { 
            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {        
                this.io.emit('mensaje-from-server', data);
                console.log(data);
            });


        });
    }

}

module.exports = Sockets;