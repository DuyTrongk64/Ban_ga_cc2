import { Player } from "./Player";
import {Enemy} from './Enemy'
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component  {

    @property(cc.Node)
    ship: cc.Node = null;

    
    private chicken: Array<cc.Node> = [];
    onLoad () {
        
        let player = new Player();
        player.selectShip(this.ship,window.GLOBAL_SHIP);

        this.drawChicken();

    }

    drawChicken(){
        //spaw chicken
        let enemy = new Enemy();
        let pos = new cc.Vec3(-150,250,0);
        for(let i=0;i<3;i++){
            for(let j=0;j<5;j++){
                pos.x+=75*j;
                pos.y-=75*i
                //this.chicken.push(enemy.spawEnenemy(pos));
                enemy.drawEnemy(this.node.parent,pos);
                pos = new cc.Vec3(-150,250,0);
            }
        }
    }
    start () {
    }

    // update (dt) {}
}
