import {Player} from './Player.js';
const {ccclass} = cc._decorator;

@ccclass
class NewClass extends Player{

    onLoad () {
        this.init();
        this.hp = 3;
        this.speed = 500;
        
        //set up collider manager
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        // //load prefabs
        cc.resources.load('Prelabs/pl_bullet', cc.Prefab, (err, prefab) => {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            // Lưu trữ prefab đã tải trong property
            this.bulletPrefab = cc.instantiate(prefab);
            cc.director.getScene().addChild(this.bulletPrefab);
            
        });

        //load sprite
        var self = this;
        var sprite = this.node.addComponent(cc.Sprite);
        
        cc.resources.load('Textures/player', cc.SpriteFrame, null, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame;
           });
        this.node.scale = 0.05;

        //add collider polygon
        this.polygonCollider = this.node.addComponent(cc.PolygonCollider);
        let polygonPoints = [
            cc.v2(-300,-450),
            cc.v2(300,-450),
            cc.v2(350,-190),
            cc.v2(220,-75),
            cc.v2(75,450),
            cc.v2(-220,-75),
            cc.v2(-350,-190)
        ]
        this.polygonCollider.points = polygonPoints;

        this.node.getComponent(cc.Collider);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    start () {
        
    }

    update (dt) {
       this.move(dt);
    }
}
