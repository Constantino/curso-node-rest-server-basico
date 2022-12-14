const express = require('express')
const cors = require("cors");
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        // middlewares
        this.middlewares();

        // rutas de la app
        this.routes();
    }

    middlewares() {
        // directorio publico
        this.app.use( express.static('public') );
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        });
    }

}

module.exports = Server;