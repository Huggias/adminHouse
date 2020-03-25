import { connect } from "../database";
// import { iUser, iNewUser } from "../interface/user.interface";

class SqlTareas{

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

    public async getTareas(): Promise<any> {
        const tareas =  await this.conn.query("SELECT * FROM `tareas` ");
        // this.conn.destroy();
        return tareas[0];
    }

    public async getMisTareas(userId : string): Promise<any> {
        const query : string = "SELECT * FROM `tareausuario` NATURAL JOIN tareas WHERE `idUsuario` = "+userId;
        // this.conn.destroy();
        const users = await this.conn.query(query);
        return users[0];
    }

    public async createTarea(newTarea : any): Promise<void> {
        await this.conn.query("INSERT INTO `tareas`(`idUsuario`, `nombre`, `descripcion`) VALUES (?,?,?)",[newTarea.idUsuario, newTarea.nombre, newTarea.descripcion]);
        // this.conn.destroy();
    }

    public async deleteTarea(idTarea : any): Promise<any> {
        const tarea = await this.conn.query("DELETE FROM `tareas` WHERE `idTarea` = ?", [idTarea]);
        // this.conn.destroy();
        return tarea[0];
    }
    public async deleteTareas(){
        await this.conn.query("DELETE FROM `tareausuario`");
    }
    public async insertTareaUsuario(tareas:any, usuarios:any){
        var query = "INSERT INTO `tareausuario`(`idTarea`, `idUsuario`) VALUES";
        // console.log(tareas)
        var i = 0;
        usuarios.forEach((idUsuario:any) => {
            tareas[i].forEach((tarea:any) => {
                query += "("+tarea.idTarea+","+idUsuario+"),";
            });
            i++;
        });
        query = query.slice(0,(query.length-1));
        console.log(query)
        await this.conn.query(query);

    }
    public async cargarTareas(idUsuario:any, tareas:any): Promise<any> {
        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
        }
        // this.conn.destroy();
        console.log("cargando tareas al usuario: ", idUsuario);
    }

}

const sqlTareas = new SqlTareas();
export default sqlTareas;