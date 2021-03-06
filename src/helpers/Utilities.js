import Phaser from "phaser"
import { OFFSET_DEPTH } from "./Constants"

/** 
 * @param {Phaser.Physics.Matter.Sprite | Phaser.Physics.Matter.Image | Phaser.GameObjects.Image} object
 * */
export function ChangeDepth(object) {
    object.setDepth(object.y - OFFSET_DEPTH)
}

/** 
 * @param {Phaser.Physics.Matter.Sprite} enemy
 * @param {any} colliders
 * @param {string} direction
 * @param {string} type
 */
export function ChangeEnemyHitBox(enemy, colliders, direction, type) {
    enemy.setBody(colliders[type+'_'+direction])
}

export function UpdateLeverTexture(lever) {
    lever.setTexture('levers', 'green-lever.png')
}