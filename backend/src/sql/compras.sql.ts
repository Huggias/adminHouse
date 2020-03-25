import { connect } from "../database";
import { iCompra } from "../interface/compra.interface";

class SqlCompras{

    private conn : any
    constructor(){
            // this.connecToMysql();
    }
    public async disConnecToMysql(){
        this.conn.destroy();
    }

    public async connecToMysql(){
        this.conn = await connect();
    }
    public async createCompra(newCompra : iCompra, idUsuario : number): Promise<void> {
        await this.conn.query("INSERT INTO `compras`(`idUsuario`, `precio`, `descripcion`) VALUES (?,?,?)",[idUsuario, newCompra.precio, newCompra.descripcion]);
        // this.conn.destroy();

    }
    public async getCompras(): Promise<void> {
        const query : string = "SELECT c.*, u.username FROM compras c INNER JOIN usuarios u ON (c.idUsuario = u.id) ORDER BY `idCompra` DESC";
        const compras = await this.conn.query(query);
        // this.conn.destroy();
        return compras[0];        
    }
    public async deleteCompra(idCompra: {id : number}):Promise<void>{
        await this.conn.query("DELETE FROM `compras` WHERE idCompra = ?", [idCompra]);
        // this.conn.destroy();

    }
    public async resetCompras():Promise<void>{
        await this.conn.query("DELETE FROM `compras`");
        // this.conn.destroy();

    }
}

const sqlCompra = new SqlCompras();
export default sqlCompra;