import { connect } from "../database";

class Movimiento{

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
    public async createMovimiento(newMovimiento:any): Promise<void> {
        await this.conn.query("INSERT INTO `movimientos`(`tipo`, `monto`, `descripcion`) VALUES (?,?,?)",[newMovimiento.tipo, newMovimiento.monto, newMovimiento.descripcion]);
        // this.conn.destroy();
    }
    public async getMovimientos(): Promise<void> {
        const query : string = "SELECT * FROM `movimientos` ORDER BY (fecha) DESC ";
        const movimientos = await this.conn.query(query);
        // this.conn.destroy();
        return movimientos[0];        
    }
    public async getUltimosMovimientos(): Promise<void> {
        const query : string = "SELECT * FROM `movimientos` ORDER BY (fecha) DESC limit 2";
        const movimientos = await this.conn.query(query);
        // this.conn.destroy();
        return movimientos[0];        
    }
    public async deleteMovimiento(idMovimiento: any):Promise<void>{
        await this.conn.query("DELETE FROM `movimientos` WHERE `idMovimiento` = ?",[idMovimiento]);
        // this.conn.destroy();
    }
}

const sqlMovimiento = new Movimiento();
export default sqlMovimiento;