import menu from "./menu";

export function setActive(item){
    menu.forEach(elem => {
        if(elem.title == item){
            elem.active = true;
        }else{
            elem.active = false;
        }
    })
}