import Entity, {IEntity} from "./Entity";
import {uuid as v4} from "uuidv4";
import {entities, id} from "./Types";

export default abstract class System {
    public id:id;
    protected constructor() {
        this.id = v4();
    }

    public update(entities: entities){}

    public execute(entity:IEntity){

    }
}
