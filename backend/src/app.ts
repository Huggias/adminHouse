// archivo para definir / configurar el servidor

import express, { Application } from 'express';
import morgan from 'morgan';
const cors = require('cors')

// rutas

import IndexRoutes from './routes/index.routes';
import UsersRoutes from './routes/users.routes';
import CompRoutes from "./routes/compradores.routes";
import { verifyToken } from "./middlewares/sigin.middlewares";
// import Colors = require('colors.ts');


export class App {

    private app: Application;

    constructor(private port? : number){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.all(/api/, verifyToken);
    }

    routes() { 
        this.app.use(IndexRoutes);
        this.app.use('/log',UsersRoutes);
        this.app.use('/api', CompRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log("Server on port: "+this.app.get('port'));
    }

}