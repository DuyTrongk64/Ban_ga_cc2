import { Character } from './Character';
export class Player extends Character{

    private goLeft: boolean;
    private goRight: boolean;
    private goUp: boolean;
    private goDown: boolean;

    private screenSize: cc.Size = cc.view.getFrameSize();

    protected speed: number;

    onKeyDown(event) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.goLeft = true;
                break;
            case cc.macro.KEY.d:
                this.goRight = true;
                break;
            case cc.macro.KEY.w:
                this.goUp = true;
                break;
            case cc.macro.KEY.s:
                this.goDown = true;
                break;
        }
    }

    onKeyUp(event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.goLeft = false;
                break;
            case cc.macro.KEY.d:
                this.goRight = false;
                break;
            case cc.macro.KEY.w:
                this.goUp = false;
                break;
            case cc.macro.KEY.s:
                this.goDown = false;
                break;
        }
    }

    collidingWithEdge(){
        let worldRect = this.node.getBoundingBoxToWorld();
        let screenSize = cc.view.getVisibleSize();
        let curPos = this.node.getPosition();

        if (worldRect.xMin < 0){
            this.goLeft = false;
        }

        if (worldRect.xMax > screenSize.width){
            this.goRight = false;
        }

        if (worldRect.yMin < 0){
            this.goDown = false;
        }

        if (worldRect.yMax > screenSize.height){
            this.goUp = false;
        }
    }

    init(): void {
        this.goLeft = false;
        this.goRight = false;
        this.goUp = false;
        this.goDown = false;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp, this);
    }

    on_hit(): void {
        
    }

    move(dt): void {
        let direction = new cc.Vec3(0, 0, 0);
        this.collidingWithEdge();
        if (this.goLeft) {
            direction.x -= 1;
        } 
        if (this.goRight) {
            direction.x += 1;
        }
        if (this.goUp) {
            direction.y += 1;
        }
        if (this.goDown) {
            direction.y -= 1;
        }
        if (direction.magSqr() > 0) {
            direction.normalize();
            let newPosition = this.node.position.add(direction.multiplyScalar(this.speed * dt));
            this.node.setPosition(newPosition);
        }
    }

    stopMove () {
        this.node.stopAllActions();
    }

    fire(): void {
        
    }

    //set collision with eggs 
    onCollisionEnter(other: cc.PhysicsCollider, self: cc.PhysicsCollider){
        //console.log(`Collided with ${other.node.name}!`);
        if(other.node.name == 'egg'){
            this.hp--;
        }
    }

    collision(): void {
        
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    update(dt) {
        this.move(dt);
    }
    
}