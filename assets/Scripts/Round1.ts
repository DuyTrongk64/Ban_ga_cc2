import { Player } from "./Player";
import {ShipManager} from './ShipManager';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends Player {

    @property(cc.Node)
    ship: cc.Node = null;
    
    @property(cc.Button)
    btn1: cc.Button = null;

    @property(cc.Button)
    btn2: cc.Button = null;

    onLoad () {
        let shipMg = new ShipManager();

        this.btn1.node.on(cc.Node.EventType.TOUCH_START, function (event){
            shipMg.selectShip(this.ship,'Ship1');
        });
        
        this.btn2.node.on(cc.Node.EventType.TOUCH_START, function (event){
            shipMg.selectShip(this.ship,'Ship2');
        });
    }

    start () {

    }

    // update (dt) {}
}
