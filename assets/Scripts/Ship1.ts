import {Player} from './Player.js';
const {ccclass} = cc._decorator;

@ccclass
class NewClass extends Player{

    onLoad () {
        this.init();
        this.hp = 3;
        this.speed = 500;
        
        // //load prefabs
        // cc.resources.load('Prelabs/pl_bullet', cc.Prefab, (err, prefab) => {
        //     if (err) {
        //         cc.error(err.message || err);
        //         return;
        //     }
        //     // Lưu trữ prefab đã tải trong property
            
        // });

        //load sprite
        var self = this;
        cc.resources.load('Textures/player.png', cc.SpriteFrame, null, function (err, spriteFrame) {
            var node = new cc.Node("New Sprite");
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = spriteFrame;
            node.parent = self.node
           });
    }

    start () {

    }

    // update (dt) {}
}
