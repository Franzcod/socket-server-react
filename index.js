const Server = require('./models/server');
require('dotenv').config(); /* para que las variables de entorno (.env) esten de modo global */ 
const server = new Server();

server.execute();





