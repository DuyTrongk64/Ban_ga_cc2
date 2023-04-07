import { Enemy } from "./Enemy";
const {ccclass, property} = cc._decorator;

@ccclass
export class Chicken extends Enemy {

    onLoad () {
        this.hp = 3;
        this.speed = 10;
        
    }

    onCollisionEnter(other: cc.PhysicsCollider, self: cc.PhysicsCollider){
        console.log(`Collided with ${other.node.group}!`);
        if(other.node.group == 'bullet'){
            this.node.destroy();
        }
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

    update (dt) {
        this.move(dt);
    }
}
