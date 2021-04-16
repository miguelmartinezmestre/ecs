export default class Component {
    private name: String;
    private ownerEntityId: number;
    constructor(name:String) {
        this.name = name;
        this.ownerEntityId = -1;
    }
}
