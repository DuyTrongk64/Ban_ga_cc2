import { Player } from './Player';
import {Ship1} from './Ship1';
import {Ship2} from './Ship2';
const {ccclass, property} = cc._decorator;

@ccclass
export class ShipManager extends Player {

    selectShip(ship: cc.Node, name: string){
        ship.addComponent(name);
        ship.getComponent(name).createShip();
    }
}
