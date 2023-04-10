import { Player } from "./Player";
import {Enemy} from './Enemy'
import { Chicken } from "./Chicken1";
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component  {

    @property(cc.Node)
    ship: cc.Node = null;
    player : Player;
    chicken : Chicken;
    private chickens: Array<cc.Node> = [];
    onLoad () {
        this.player = new Player()
        this.chicken = new Chicken();
        this.player.selectShip(this.ship,window.GLOBAL_SHIP);

        this.drawChicken();

    }

    drawChicken(){
        //spaw chicken
        let pos = new cc.Vec3(-150,250,0);
        for(let i=0;i<3;i++){
            for(let j=0;j<5;j++){
                pos.x+=75*j;
                pos.y-=75*i
                this.chickens.push(this.chicken.spawEnenemy(pos));
                //enemy.drawEnemy(this.node.parent,pos);
                pos = new cc.Vec3(-150,250,0);
            }
        }
    }
    start () {
    }

    update (dt) {
        
    }
}
