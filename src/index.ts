import Game from "./Game";
import Resize from "./systems/Resize";
import Canvas from "./entities/canvas";
import set = Reflect.set;

console.log("hola");
const game = new Game();

game.addSystem(new Resize())

const canvas = new Canvas();
game.addEntity(canvas)

game.update()

