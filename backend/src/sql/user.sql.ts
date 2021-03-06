import { connect } from "../database";
import { iUser, iNewUser } from "../interface/user.interface";

class SqlUser{

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
    public async getUsers(): Promise<any> {
        const users =  await this.conn.query("SELECT * FROM `usuarios` ");
        // this.conn.destroy();
        return users[0];
    }

    public async getUser(userId : string): Promise<iUser> {
        const query : string = "SELECT * FROM `usuarios` WHERE `id` = "+userId;
        const users = await this.conn.query(query);
        // this.conn.destroy();
        return users[0];
    }

    public async createUser(newUser : iUser): Promise<void> {
        await this.conn.query("INSERT INTO `usuarios`(`username`, `password`, `email`) VALUES (?,?,?)",[newUser.username, newUser.password, newUser.email]);
        // this.conn.destroy();
    }

    public async findUser(username : string, password : string): Promise<iUser[]> {
        const user = await this.conn.query("SELECT * FROM `usuarios` WHERE username = ? AND password = ?", [username, password]);
        // this.conn.destroy();
        return user[0];
    }

}

const sqlUser = new SqlUser();
export default sqlUser;