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
    public async createCompra(newCompra : any): Promise<void> {
        await this.conn.query("INSERT INTO `listaCompras`(`nombre`, `descripcion`, `cantidad`) VALUES (?,?,?)",[newCompra.nombre, newCompra.descripcion,newCompra.cantidad ]);
    }
    public async getCompras(): Promise<void> {
        const query : string = "SELECT * FROM `listaCompras`";
        const compras = await this.conn.query(query);
        return compras[0];        
    }
    public async deleteCompra(idCompra: any):Promise<void>{
        await this.conn.query("DELETE FROM `listaCompras` WHERE idCompra = ?", [idCompra]);
    }
}

const sqlCompra = new SqlCompras();
export default sqlCompra;