import { Player } from "./Player";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component  {

    @property(cc.Node)
    ship: cc.Node = null;

    onLoad () {
        
        let player = new Player();
        player.selectShip(this.ship,window.GLOBAL_SHIP);
    }

    start () {
    }

    // update (dt) {}
}
