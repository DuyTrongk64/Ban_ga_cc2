import {Player} from './Player.js';

const {ccclass, property} = cc._decorator;

@ccclass
export class Ship1 extends Player{

    createShip () {
        this.init();
        this.hp = 3;
        this.speed = 500;
        
    

        // // //load prefabs
        // cc.resources.load('Prelabs/pl_bullet', cc.Prefab, (err, prefab) => {
        //     if (err) {
        //         cc.error(err.message || err);
        //         return;
        //     }
        //     // Lưu trữ prefab đã tải trong property
        //     this.bulletPrefab = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(this.bulletPrefab);
            
        // });

        this.loadSprite('Textures/ship1');

        let polygonPoints = [
            cc.v2(-300,-450),
            cc.v2(300,-450),
            cc.v2(350,-190),
            cc.v2(220,-75),
            cc.v2(75,450),
            cc.v2(-220,-75),
            cc.v2(-350,-190)
        ]
        this.addPolygonCollider(polygonPoints);
    }

    
    start () {
        
    }

    update (dt) {
       this.move(dt);
    }
}
