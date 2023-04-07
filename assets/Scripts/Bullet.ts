const {ccclass, property} = cc._decorator;

@ccclass
export class Bullet extends cc.Component {

    protected damage = 0;
    protected speed = 300;
    private direction: cc.Vec3;
    private pos: cc.Vec2;

    getPos(pos: cc.Vec2){
        this.pos = pos;
    }
 
    spaw(parent: cc.Node){
        //load prefabs
        cc.resources.load(window.GLOBAL_BULLET, cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            // Lưu trữ prefab đã tải trong property
            let block: cc.Node|null = null;
            block = cc.instantiate(prefab);
            parent.addChild(block);
            block.setPosition(this.pos);
            //console.log(block.name);
        });
    }

    collidingWithEdge(){
        let worldRect = this.node.getBoundingBoxToWorld();
        let screenSize = cc.view.getVisibleSize();
        if (worldRect.yMin < 0 || worldRect.yMax > screenSize.height) {
            // destroy nếu va chạm với viền màn hình
            this.node.destroy();
        }
    }

    onCollisionEnter(other: cc.PhysicsCollider, self: cc.PhysicsCollider){
        //console.log(`Collided with ${other.node.group}!`);
        if(other.node.group == 'chicken'){
            this.node.destroy();
        }
    }
    
    
    update (dt) {
        this.collidingWithEdge();
        let direction = new cc.Vec3(0, 1, 0);
        let newPosition = this.node.position.add(direction.multiplyScalar(this.speed * dt));
        this.node.setPosition(newPosition);
    }
}
