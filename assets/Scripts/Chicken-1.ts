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

    spawEnenemy(parent: cc.Node,pos: cc.Vec3){
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
            //console.log(block.name);
        });
    }    

    spaw_eggs(parent: cc.Node): void {
        this.spawnTimer += 0.1;

        if(this.spawnTimer > this.spawnTimerMax){
            this.count++;
            let eggs = new Eggs();
            eggs.getPos(this.node.getPosition()); 
            eggs.spaw(parent,'Prelabs/egg');
        }
    }
    
    update (dt) {
        this.move(dt);
    }
}
