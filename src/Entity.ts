import Component from "./Component";
import {components, id} from "./Types";

export interface IEntity {
    id:id,
    data:Array<any>,
    getData?: Function,
    getComponent?: Function,
    components: components,
    hasComponent?: Function,
    addComponent?: Function,
    removeComponent?: Function;
    updateComponent?: Function;
}
export default abstract class Entity implements IEntity{
    components: components = new Map;
    data: Array<any> = [];
    id: id = "";


}
