import Entity from "./Entity"
import System from "./System";
import {entities, systems} from "./Types";

export default class Game {
    private entities:entities;
    private systems: systems;
    constructor() {
        this.entities = new Map();
        this.systems = new Map();
    }
    public addEntity(entity:Entity){
        this.entities.set(entity.id,entity);
    }
    public getEntity(id: string){
        this.entities.get(id);
    }
    public removeEntity(id: string){
        this.entities.delete(id)
    }

    public addSystem(system: System){
        this.systems.set(system.id, system);
    }

    public update(){
        for (const [ id, system ] of this.systems){
            system.update(this.entities)
        }
    }
}
