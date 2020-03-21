// archivo para definir / configurar el servidor

import express, { Application } from 'express';
import socketIo from "socket.io";
import sqlCompra from "./sql/compras.sql";
import morgan from 'morgan';

const cors = require('cors')



// rutas

import IndexRoutes from './routes/index.routes';
import UsersRoutes from './routes/users.routes';
import tareasRoutes from './routes/tareas.routes';
import ComprasRoutes from "./routes/compras.routes";
import ListaComprasRoutes from "./routes/listaCompras.routes";
import MovimientosRoutes from "./routes/movimientos.routes";

import { verifyToken } from "./middlewares/sigin.middlewares";
// import Colors = require('colors.ts');


export class App {

    private app: Application;
    private io : any;
    constructor(private port? : number){
        this.app = express();
        this.settings();
        this.listen();
        this.middlewares();
        this.routes();
        this.sockets();
    }

    sockets(){
        this.io.on('connection', (socket : any)=>{
            socket.on("modCompras", () => {
                const compras = sqlCompra.getCompras();
                compras.then( res => {
                    this.io.sockets.emit('modCompras', res);
                })
            });
        })
    }

    settings(){
        this.app.set('port', process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.all(/api/, verifyToken);

        // this.io.use((socket:any, next:any) => {
        //     console.log("en middleware de io");
        //     console.log(socket.request.headers)
        //     next()
        //         // if (socket.request.headers.cookie) return next();
        //         // next(new Error('Authentication error'));
        // });
    }

    routes() { 
        this.app.use(IndexRoutes);
        this.app.use('/log',UsersRoutes);
        this.app.use('/api',ComprasRoutes);
        this.app.use('/api',tareasRoutes);
        this.app.use('/api',ListaComprasRoutes);
        this.app.use('/api',MovimientosRoutes);   
    }

    listen(){
        const server = this.app.listen(this.app.get('port'));
        this.io = socketIo(server, {origins: '*:*'});
        console.log("Server on port: "+this.app.get('port'));
    }

}