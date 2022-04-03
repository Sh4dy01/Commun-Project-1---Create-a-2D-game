//@ts-check
import Phaser from "phaser";
import PlayerManager from "./player";
import { SceneManager } from "./sceneManager";
    
    /**
 * @param {Phaser.Physics.Matter.World} world
 * @param {PlayerManager} playerManager
 * @param {SceneManager} sceneManager
 * @param {Phaser.Physics.Matter.Sprite} playerPhysics
 */
export function CheckHitBoxes(world, playerManager, sceneManager, playerPhysics) {
    world.on("collisionstart", (event, bodyA, bodyB) => {
        if((bodyA.label == "player" && bodyB.label == "field") || (bodyA.label == "field" && bodyB.label == "player")) {
            if(playerManager.isSafe == true){
                console.log("hide");
            }
            else{
                console.log("vue");
                if (playerManager.canLoseLife) {
                    playerManager.DetectedPlayer(playerPhysics)
                    sceneManager.RestartScene(playerManager.currentLives);
                }
            }
        }
        if((bodyA.label == "player" && bodyB.label == "safezone") || (bodyA.label == "safezone" && bodyB.label == "player")) {
            console.log("safe");
            playerManager.isSafe = true
        }
    });

    world.on("collisionend", (event, bodyA, bodyB) => {
        if((bodyA.label == "player" && bodyB.label == "safezone") || (bodyA.label == "safezone" && bodyB.label == "player")) {
            console.log("not safe");
            playerManager.isSafe = false;
        }
    });
}

export function CheckButton(world, button){
    world.on("collisionstart", (event, bodyA, bodyB) => {
        if((bodyA.label == "player" && bodyB.label == "bouton") || (bodyA.label == "bouton" && bodyB.label == "player")) {
            console.log("on button area");
            if(bodyA.label == "bouton"){
                button.data.list[0].value = true
            }
            if(bodyB.label == "bouton"){
                button.data.list[0].value = true
            }
        }
    })
    world.on("collisionend", (event, bodyA, bodyB) => {
        if((bodyA.label == "player" && bodyB.label == "bouton") || (bodyA.label == "bouton" && bodyB.label == "player")) {
            console.log("exit button area");
            if(bodyA.label == "bouton"){
                bodyA.gameObject.data.list[0].value = true
            }
            if(bodyB.label == "bouton"){
                bodyB.gameObject.data.list[0].value = true
            }
        }
    });
}

/**
 * @param {Phaser.Physics.Matter.World} world
 * @param {PlayerManager} playerManager
 * @param {SceneManager} sceneManager
 * @param {Phaser.Physics.Matter.Sprite} playerPhysics
 * @param {Number} currentLives
 */
export function CheckNextLevel(world, playerManager, sceneManager, playerPhysics, currentLives) {
    world.on("collisionstart", (event, bodyA, bodyB) => {
        if((bodyA.label == "player" && bodyB.label == "NextLevel") || (bodyA.label == "NextLevel" && bodyB.label == "player")) {
            sceneManager.LoadNextScene(currentLives);
            playerManager.StopPlayerMovement(playerPhysics)
        }
    })
}