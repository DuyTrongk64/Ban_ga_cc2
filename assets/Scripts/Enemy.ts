import { Character } from './Character';
import { Chicken } from './Chicken-1';
export class Enemy extends Character{

    init(): void {
        
    }

    on_hit(): void {
        
    }

    move(dt) {
        this.collidingWithEdge();
        let direction = new cc.Vec3(0, -1, 0);
        let newPosition = this.node.position.add(direction.multiplyScalar(this.speed * dt));
        this.node.setPosition(newPosition);
    }

    spaw_bulet() {
        
    }

    onCollisionEnter(other: cc.PhysicsCollider, self: cc.PhysicsCollider){
        console.log(`Collided with ${other.node.group}!`);
        if(other.node.group == 'bullet'){
            this.node.destroy();
        }
    }

    collidingWithEdge(){
        let worldRect = this.node.getBoundingBoxToWorld();
        let screenSize = cc.view.getVisibleSize();
        if (worldRect.yMin < 0 || worldRect.yMax > screenSize.height) {
            // destroy nếu va chạm với viền màn hình
            this.node.destroy();
        }
    }

    drawEnemy(parent: cc.Node,pos: cc.Vec3){
        let chicken = new Chicken();
        chicken.spawEnenemy(parent,pos)
    }

}