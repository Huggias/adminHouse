import { connect } from "../database";

class SqlIngredientes{

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
    public async createIngrediente(newIngrediente : any): Promise<void> {
        console.log("controlando ingrediente");
        console.log(newIngrediente);
        await this.conn.query("INSERT INTO `ingredientes`(`idMenu`, `nombre`, `cantidad`, `cuantificador`) VALUES (?,?,?,?)",[newIngrediente.idMenu,newIngrediente.nombre,newIngrediente.cantidad,newIngrediente.cuantificador]);
        // this.conn.destroy();
    }
    public async createIngredientse(ingredientes : any, idMenu:any): Promise<void> {
        var query = "INSERT INTO `ingredientes`(`idMenu`, `nombre`, `cantidad`, `cuantificador`) VALUES";
        ingredientes.forEach((ingrediente:any) => {
            query += "("+idMenu+","+ingrediente.nombre+","+ingrediente.cantidad+","+ingrediente.cuantificador+"),";
        });
        query = query.slice(0,(query.length-1));
        await this.conn.query(query);
    }

    public async getIngredientes(idMenu : any): Promise<void> {
        const compras = await this.conn.query("SELECT * FROM `ingredientes` WHERE `idMenu` = ?",[idMenu]);
        // this.conn.destroy();
        return compras[0];        
    }
    public async getAllIngredientes(): Promise<void> {
        const compras = await this.conn.query("SELECT * FROM `ingredientes`");
        // this.conn.destroy();
        return compras[0];        
    }
    public async deleteIngrediente(idIngrediente: any):Promise<void>{
        await this.conn.query("DELETE FROM `ingredientes` WHERE idIngrediente = ?", [idIngrediente]);
        // this.conn.destroy();
    }
    public async updateIngrediente(idIngrediente: any, ingrediente:any):Promise<void>{
        await this.conn.query("UPDATE `ingredientes` SET `nombre`=?,`cantidad`=?,`cuantificador`=? WHERE `idIngrediente` = ?", [ingrediente.nombre, ingrediente.cantidad, ingrediente.cuantificador, idIngrediente]);
        // this.conn.destroy();
    }
}

const sqlIngredientes = new SqlIngredientes();
export default sqlIngredientes;