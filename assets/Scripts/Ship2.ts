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
            cc.v2(-130,674),
            cc.v2(-356,543),
            cc.v2(-628,4),
            cc.v2(-279,24),
            cc.v2(-11,-608),
            cc.v2(179,24),
            cc.v2(517,-674),
            cc.v2(629,-4),
            cc.v2(350,559),
            cc.v2(107,676)
        ]
        this.addPolygonCollider(polygonPoints);
    }

    update (dt) {
        this.move(dt);
     }
}
