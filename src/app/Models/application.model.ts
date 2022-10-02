import { Error } from "./Error.model";

export class Application{
    error: Error[] = [];

    constructor(public id:number, public name:string)
    {
    }

}