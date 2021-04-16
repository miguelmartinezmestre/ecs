import Entity from "../Entity";
import {Size} from "../components/size";
import {uuid as v4} from "uuidv4";
import Component from "../Component";
import {components, id} from "../Types"

export default class Canvas implements Entity{
    private ref: HTMLCanvasElement;
    public components: components;
    public id:id;
    public data:Array<any>
    constructor() {
        this.components = new Map();
        this.ref = document.createElement("canvas")
        this.components.set(v4(), new Size())
        this.data = []
        this.id = v4()
    }

}
