import { Enemy } from "./Enemy";
import { Eggs } from './Eggs';
const {ccclass, property} = cc._decorator;

@ccclass
export class Chicken extends Enemy {

    onLoad () {
        this.hp = 3;
        this.speed = 10;
        this.spawnTimerMax = 50;
    }

    spawEnenemy(parent: cc.Node,pos: cc.Vec3,callback: (block: cc.Node) => cc.Node){
        //load prefabs
        cc.resources.load('Prelabs/chicken', cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            // Lưu trữ prefab đã tải trong property
            let block: cc.Node|null = null;
            block = cc.instantiate(prefab);
            parent.addChild(block);
            block.setPosition(pos);
            callback(block);
        });
    }    
    
    update (dt) {
        this.move(dt);
    }
}
