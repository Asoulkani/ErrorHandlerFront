export class Error{
    id:number;
    title:string;
    description:string;
    level:string;
    status:string;


    constructor(id:number,title:string,description:string,level:string,status:string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.level = level;
        this.status = status;
    }
}