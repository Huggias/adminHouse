import { connect } from "../database";
import sqlIngrediente from "./ingredientes.sql";
class SqlMenus{

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
    public async createMenu(newMenu : any): Promise<void> {
        await this.conn.query("INSERT INTO `menus`(`nombre`,`descripcion`) VALUES (?,?)",[newMenu.nombre,newMenu.descripcion]);
        var idMenu = await this.conn.query("SELECT `idMenu` FROM `menus` ORDER BY idMenu DESC LIMIT 1");
        idMenu = idMenu[0];
        idMenu = idMenu[0];
        var query = "INSERT INTO `ingredientes`(`idMenu`, `nombre`, `cantidad`, `cuantificador`) VALUES";
        newMenu.ingredientes.forEach((ingrediente:any) => {
            query += "("+idMenu.idMenu+",'"+ingrediente.nombre+"',"+ingrediente.cantidad+",'"+ingrediente.cuantificador+"'),";
        });
        query = query.slice(0,(query.length-1));
        console.log(query);
        await this.conn.query(query);
    }
    public async updateImg(link:any,idMenu:any){
        var query = "UPDATE `menus` SET `img`='"+link+"' WHERE idMenu ="+idMenu;
        console.log(query);
        await this.conn.query(query);
    }
    public async getMenus(): Promise<void> {
        const menus = await this.conn.query("SELECT * FROM `menus`");
        return menus[0];        
    }
    public async getMenusConIngredientes(): Promise<void> {
        const menus = await this.conn.query("SELECT m.*, i.idIngrediente, i.idMenu AS 'idMenuIngrediente', i.nombre AS 'nombreIngrediente', i.cantidad, i.cuantificador FROM `menus` m LEFT JOIN ingredientes i ON (m.idMenu = i.idMenu)");
        return menus[0];        
    }
    public async getMenuConIngredientes(idMenu:any): Promise<void> {
        const menus = await this.conn.query("SELECT m.`nombre`, m.`descripcion`, m.`img`, i.`idIngrediente`, i.nombre AS 'nombreIngrediente', i.cantidad, i.cuantificador FROM `menus` m LEFT JOIN ingredientes i ON (m.idMenu = i.idMenu) WHERE m.`idMenu` = ?", [idMenu]);
        return menus[0];        
    }
    public async getMenu(idMenu : any): Promise<void> {
        const menus = await this.conn.query("SELECT * FROM `menus` WHERE `idMenu` = ?", [idMenu]);
        return menus[0];        
    }
    public async deleteMenu(idMenu: any):Promise<void>{
        await this.conn.query("DELETE FROM `menus` WHERE `idMenu` = ?", [idMenu]);
    }
}

const sqlMenus = new SqlMenus();
export default sqlMenus;