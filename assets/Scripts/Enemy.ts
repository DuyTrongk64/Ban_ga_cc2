import { Character } from './Character';
import { Eggs } from './Eggs';

export class Enemy extends Character{

    protected spawnTimerMax: number = 0;
    protected spawnTimer: number = 0;
    protected count: number =0;
    
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
        //console.log(`Collided with ${other.node.group}!`);
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

    spaw_eggs(parent: cc.Node,pos: cc.Vec2): void {
        this.spawnTimer += 0.1;

        if(this.spawnTimer > this.spawnTimerMax){
            this.count++;
            let eggs = new Eggs();
            eggs.spaw(parent,'Prelabs/egg',pos);
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    randSpawEggs(parent: cc.Node,chickens: Array<cc.Node>){
        this.spawnTimer += 0.1;
        if(this.spawnTimer > this.spawnTimerMax){
            this.count++;
            let rand = this.getRandomInt(chickens.length);
            console.log(chickens[rand]);
            //console.log(chickens[rand].getPosition()!= null);
            //console.log(this.chicken[rand].isValid);
            //if(this.node.isValid){
                // let pos = chickens[rand].getPosition();
                // this.spaw_eggs(parent,pos);
                // this.spawnTimer =0;
            //}
        }
    }
}