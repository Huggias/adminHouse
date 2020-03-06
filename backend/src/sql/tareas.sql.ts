import { connect } from "../database";
// import { iUser, iNewUser } from "../interface/user.interface";

class SqlTareas{

    private conn : any
    constructor(){
            this.connecToMysql();
    }

    private async connecToMysql(){
        this.conn = await connect();
    }

    public async getTareas(): Promise<any> {
        const tareas =  await this.conn.query("SELECT * FROM `tareas` ");
        return tareas[0];
    }

    public async getMisTareas(userId : string): Promise<any> {
        const query : string = "SELECT * FROM `tareausuario` NATURAL JOIN tareas WHERE `idUsuario` = "+userId;
        const users = await this.conn.query(query);
        return users[0];
    }

    public async createTarea(newTarea : any): Promise<void> {
        await this.conn.query("INSERT INTO `tareas`(`idUsuario`, `nombre`, `descripcion`) VALUES (?,?,?)",[newTarea.idUsuario, newTarea.nombre, newTarea.descripcion]);
    }

    public async deleteTarea(idTarea : any): Promise<any> {
        const tarea = await this.conn.query("DELETE FROM `tareas` WHERE `idTarea` = ?", [idTarea]);
        return tarea[0];
    }
    public async cargarTareas(idUsuario:any, tareas:any): Promise<any> {
        await this.conn.query("DELETE FROM `tareausuario`");
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            await this.conn.query("INSERT INTO `tareausuario`(`idTarea`, `idUsuario`) VALUES (?,?)", [tarea.idTarea, idUsuario]);
        }
        console.log("cargando tareas al usuario: ", idUsuario);
    }

}

const sqlTareas = new SqlTareas();
export default sqlTareas;