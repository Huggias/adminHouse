import { connect } from "../database";

class SqlMenuDia{

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
    public async getMenuDia(): Promise<void> {
        const menudia = await this.conn.query('SELECT m.dia, m.horario, me.nombre, u1.username AS "cocina", u2.username AS "preparacion", u3.username AS "verificacion" FROM `menuDia` m INNER JOIN usuarios u1 ON (m.`idCocina` = u1.id) INNER JOIN usuarios u2 ON (m.`idPreparacion` = u2.id) INNER JOIN usuarios u3 ON (m.`idVerificacion` = u3.id) INNER JOIN menus me ON (m.`idMenu` = me.idMenu)');
        return menudia[0];        
    }
    public async getOneMenuDia(dia:any, horario:any): Promise<void> {
        const menudia = await this.conn.query('SELECT me.nombre, u1.username AS "cocina", u2.username AS "preparacion", u3.username AS "verificacion", i.nombre AS "nombreIngrediente", i.cantidad, i.cuantificador FROM `menuDia` m INNER JOIN usuarios u1 ON (m.`idCocina` = u1.id) INNER JOIN usuarios u2 ON (m.`idPreparacion` = u2.id) INNER JOIN usuarios u3 ON (m.`idVerificacion` = u3.id) INNER JOIN menus me ON (m.`idMenu` = me.idMenu) LEFT JOIN ingredientes i ON (i.idMenu = m.idMenu) WHERE `dia` = ? AND `horario` = ?', [dia, horario]);
        return menudia[0];        
    }
    public async getMenuDiaOf(dia : string, horario : string): Promise<void> {
        const menudia = await this.conn.query("SELECT * FROM `menuDia` WHERE `dia` = ? AND `horario` = ?",[dia , horario]);
        return menudia[0]; 
    }
    public async setearMenu(set : any): Promise<void> {
        await this.conn.query("UPDATE `menuDia` SET `idMenu`=? WHERE `dia` = ? AND `horario`=?",[set.idVar, set.dia, set.horario]);
    }
    public async setearCocina(set : any): Promise<void> {
        await this.conn.query("UPDATE `menuDia` SET `idCocina`=? WHERE `dia` = ? AND `horario`=?",[set.idVar, set.dia, set.horario]);
    }
    public async setearPreparacion(set : any): Promise<void> {
        await this.conn.query("UPDATE `menuDia` SET `idPreparacion`=? WHERE `dia` = ? AND `horario`=?",[set.idVar, set.dia, set.horario]);
        // this.conn.destroy();
    }
    public async setearVerificacion(set : any): Promise<void> {
        await this.conn.query("UPDATE `menuDia` SET `idVerificacion`=? WHERE `dia` = ? AND `horario`=?",[set.idVar, set.dia, set.horario]);
        // this.conn.destroy();
    }
    public async setAll(set : any): Promise<void>{
        await this.conn.query("UPDATE `menuDia` SET `idMenu`=?,`idCocina`=?,`idPreparacion`=?,`idVerificacion`=? WHERE `dia` = ? AND `horario` = ?", [set.idMenu, set.cocina, set.preparacion, set.verificacion, set.dia, set.horario]);
    }
}

const sqlMenuDia = new SqlMenuDia();
export default sqlMenuDia;