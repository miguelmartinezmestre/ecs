import Component from "../Component";
import {uuid} from "uuidv4";

export class Size extends Component{
    private height: number;
    private width: number;
    private static readonly id: string = uuid();

    constructor( width?:number,height?:number) {
        super("Size");
        this.height = 10;
        this.width = 10;
    }
    static getId():string{
        return this.id;
    }
}
