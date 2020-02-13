"use strict";
// archivo para definir / configurar el servidor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const compras_sql_1 = __importDefault(require("./sql/compras.sql"));
const morgan_1 = __importDefault(require("morgan"));
const cors = require('cors');
// rutas
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const compras_routes_1 = __importDefault(require("./routes/compras.routes"));
// import Colors = require('colors.ts');
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.listen();
        this.middlewares();
        this.routes();
        this.sockets();
    }
    sockets() {
        this.io.on('connection', (socket) => {
            console.log("usuario conectado: ", socket.id);
            socket.on("modCompras", () => {
                const compras = compras_sql_1.default.getCompras();
                compras.then(res => {
                    this.io.sockets.emit('modCompras', res);
                });
            });
        });
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(cors());
        // this.app.all(/api/, verifyToken);
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use('/log', users_routes_1.default);
        this.app.use('/api', compras_routes_1.default);
    }
    listen() {
        const server = this.app.listen(this.app.get('port'));
        this.io = socket_io_1.default(server);
        console.log("Server on port: " + this.app.get('port'));
    }
}
exports.App = App;
