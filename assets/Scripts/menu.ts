
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    btn1: cc.Button = null;

    @property(cc.Button)
    btn2: cc.Button = null;

    onLoad () {
        window.GLOBAL_SHIP = '';
        window.GLOBAL_BULLET = '';
        cc.director.preloadScene('test');
    }

    loadScenne(){
        cc.director.loadScene('test');
    }

    selectShip1(){
        window.GLOBAL_SHIP = 'Ship1';
        window.GLOBAL_BULLET = 'Prelabs/bullet1';
        this.loadScenne();
    }

    selectShip2(){
        window.GLOBAL_SHIP = 'Ship2';
        window.GLOBAL_BULLET = 'Prelabs/bullet2';
        this.loadScenne();
    }
    start () {

    }

    // update (dt) {}
}
