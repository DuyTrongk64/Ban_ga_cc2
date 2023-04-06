import {Player} from './Player.js';
const {ccclass, property} = cc._decorator;

@ccclass
export class Ship2 extends Player {

    createShip () {
        this.init();
        this.hp = 3;
        this.speed = 500;

        this.loadSprite('Textures/ship2');

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

}
