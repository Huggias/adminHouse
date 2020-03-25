import { connect } from "../database";
import { iCompra } from "../interface/compra.interface";

class SqlCompras{

    private conn : any
    constructor(){
            // this.connecToMysql();
    }

    public async connecToMysql(){
        this.conn = await connect();
    }
    public async disConnecToMysql(){
        this.conn.destroy();
    }
    public async createCompra(newCompra : any): Promise<void> {
        await this.conn.query("INSERT INTO `listacompras`(`nombre`, `descripcion`, `cantidad`) VALUES (?,?,?)",[newCompra.nombre, newCompra.descripcion,newCompra.cantidad ]);
        // this.conn.destroy();
    }
    public async getCompras(): Promise<void> {
        // this.conn.destroy();
        const query : string = "SELECT * FROM `listacompras`";
        const compras = await this.conn.query(query);
        // this.conn.destroy();
        return compras[0];        
    }
    public async deleteCompra(idCompra: any):Promise<void>{
        await this.conn.query("DELETE FROM `listacompras` WHERE idCompra = ?", [idCompra]);
        // this.conn.destroy();
    }
}

const sqlCompra = new SqlCompras();
export default sqlCompra;