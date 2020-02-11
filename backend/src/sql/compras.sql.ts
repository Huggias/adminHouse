import { connect } from "../database";
import { iCompra } from "../interface/compra.interface";

class SqlCompras{

    private conn : any
    constructor(){
            this.connecToMysql();
    }

    private async connecToMysql(){
        this.conn = await connect();
    }
    public async createCompra(newCompra : iCompra, idUsuario : number): Promise<void> {
        await this.conn.query("INSERT INTO `compras`(`idUsuario`, `precio`, `descripcion`) VALUES (?,?,?)",[idUsuario, newCompra.precio, newCompra.descripcion]);
    }
    public async getCompras(): Promise<void> {
        const query : string = "SELECT * FROM `compras`";
        const compras = await this.conn.query(query);
        return compras[0];        
    }
}

const sqlCompra = new SqlCompras();
export default sqlCompra;