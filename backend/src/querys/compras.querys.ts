import db from "../database";

class QueryCompras {
    public datoToArray(data : any){
        var aux : any[] = [];
        data.forEach((doc : any) => {
            var info = doc.data();
            info.idCompra = doc.id;
            aux.push(info);
        });
        return aux;
    }
    public getComrpas() : Promise<any>{
        var compras : any[] = [];
        var query = db.collection('compras').orderBy("", "asc")
        return query.get();
    }

    public createCompra(newCompra : any){
        newCompra.date = Math.floor(Date.now() / 1000);
        db.collection('compras').add(newCompra);
    }

}
var queryCompras = new QueryCompras();
export default queryCompras;