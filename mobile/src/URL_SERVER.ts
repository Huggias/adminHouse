let url : string;

if (process.env.NODE_ENV != 'production') {
    url = "http://localhost:3000";
}else{
    url = "https://adminhouse.herokuapp.com";
}
// export const URL_SERVER : string = "http://localhost:3000";
// export const URL_SERVER : string = "https://adminhouse.herokuapp.com";

export default url;