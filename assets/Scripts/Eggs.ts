const {ccclass, property} = cc._decorator;

@ccclass
export class Eggs extends cc.Component {

    protected damage = 0;
    protected speed = 300;

 
    spaw(parent: cc.Node,url: string,pos: cc.Vec2){
        let block: cc.Node|null = null;
        //load prefabs
        cc.resources.load(url, cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            // Lưu trữ prefab đã tải trong property
            
            block = cc.instantiate(prefab);
            parent.addChild(block);
            block.setPosition(pos);
            //console.log(block.name);
        });
        return block;
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
        //console.log(`Collided with ${other.node.name}!`);
        if(other.node.group == 'player'){
            this.node.destroy();
        }
    }

    update (dt) {
        this.collidingWithEdge();
        let direction = new cc.Vec3(0, -1, 0);
        let newPosition = this.node.position.add(direction.multiplyScalar(this.speed * dt));
        this.node.setPosition(newPosition);
    }
}
