import { Error } from "./Error.model";

export class Application{
    id:number;
    name:string;
    error: Error[] = [];

    constructor(id:number, name:string)
    {
        this.id = id;
        this.name = name;
    }

}