const {property} = cc._decorator;
export abstract class Character extends cc.Component {

    protected name: string;

    protected hp: number;

    protected speed: number;

    protected polygonCollider = null;

    protected bulletPrefab = null;

    protected audio = null;
    
    abstract  init(): void

    abstract on_hit(): void

    abstract move(dt): void

    abstract spaw_bulet(): void

    abstract onCollisionEnter(other: cc.PhysicsCollider, self: cc.PhysicsCollider): void

    abstract collidingWithEdge(): void;
}
