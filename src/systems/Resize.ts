import System from "../System";
import {uuid as v4} from "uuidv4";
import Entity, {IEntity} from "../Entity";
import {entities} from "../Types";
import {Size} from "../components/size";

export default class Resize implements System{
    public id:string;
    constructor() {
        this.id = v4();
    }

    execute(entity: IEntity): void {
        console.log(entity)
    }

    update(entities: entities) {
        for (const [id,entity] of entities){
            if (entity.components.has(Size.getId())){ //tiene el component relacionado con este sistema creo
                this.execute(entity)
            }
        }
    }

}
