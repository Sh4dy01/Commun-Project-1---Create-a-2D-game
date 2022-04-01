//@ts-check
import Phaser from "phaser";
import SceneManager from "./sceneManager";


export default class CollisionManager{

    /**
     * @param {Phaser.Physics.Matter.World} world
    */

     CheckHitBoxes(canLoadNextScene, world, camera) {
        if (canLoadNextScene) {
        }

        world.on("collisionstart", (event, bodyA, bodyB) => {
            if((bodyA.label == "player" && bodyB.label == "field") || (bodyA.label == "field" && bodyB.label == "player")) {
                console.log("vue");
            }
        });
    }
    
    CheckButton(world){
        world.on("collisionstart", (event, bodyA, bodyB) => {
            if((bodyA.label == "player" && bodyB.label == "boutonHit") || (bodyA.label == "boutonHit" && bodyB.label == "player")) {
                console.log("on button area");
                bodyA.event = true;
            }
        })
        world.on("collisionend", (event, bodyA, bodyB) => {
            if((bodyA.label == "player" && bodyB.label == "boutonHit") || (bodyA.label == "boutonHit" && bodyB.label == "player")) {
                console.log("exit button area");
                bodyA.event = false;
            }
        });
    }
}