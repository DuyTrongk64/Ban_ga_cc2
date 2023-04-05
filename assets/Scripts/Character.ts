
const {property} = cc._decorator;
export abstract class Character extends cc.Component {

    protected name: string;

    protected hp: number;

    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    audio: cc.AudioClip = null;
    
    protected _name: string;
   
    protected _hp: number;
    
    abstract  init(): void

    abstract on_hit(): void

    abstract move(dt): void

    abstract fire(): void

    abstract collision(): void
}
