// //@ts-check
import Phaser from 'phaser'

/** 
 * @param {Phaser.Animations.AnimationManager} anims 
 * @param {String} phantom 
*/

    // Création de du paterne de déplacemenent du fantôme violet
export function  CreatePurplePhantomAnims(anims, phantom) {
    anims.create({
        key: phantom+'Back',
        frames: anims.generateFrameNames(phantom+'-anim',{
            start: 0,
            end: 1,
            prefix: phantom+'-back_',
            suffix: '.png'
        }),
        repeat: -1,
        frameRate: 2
    }),
    anims.create({
        key: phantom+'Front',
        frames: anims.generateFrameNames(phantom+'-anim',{
            start: 0,
            end: 1,
            prefix: phantom+'-face_',
            suffix: '.png'
        }),
        repeat: -1,
        frameRate: 2
    })
}

/** 
 * @param {Phaser.Animations.AnimationManager} anims 
 * @param {String} phantom 
*/

    // Création de du paterne de déplacemenent du fantôme vert
export function  CreateGreenPhantomAnims(anims, phantom) {
    anims.create({
        key: phantom+'Back',
        frames: anims.generateFrameNames(phantom+'-anim',{
            start: 0,
            end: 1,
            prefix: phantom+'-back_',
            suffix: '.png'
        }),
        repeat: -1,
        frameRate: 2
    }),
    anims.create({
        key: phantom+'Front',
        frames: anims.generateFrameNames(phantom+'-anim',{
            start: 0,
            end: 1,
            prefix: phantom+'-face_',
            suffix: '.png'
        }),
        repeat: -1,
        frameRate: 2
    })
}

/** 
 * @param {Phaser.Animations.AnimationManager} anims 
 * @param {String} phantom 
*/

    // Création de du paterne de déplacemenent du fantôme rouge
export function  CreateRedPhantomAnims(anims, phantom) {
    anims.create({
        key: phantom+'Back',
        frames: anims.generateFrameNames(phantom+'-anim',{
            start: 0,
            end: 1,
            prefix: phantom+'-back_',
            suffix: '.png'
        }),
        repeat: -1,
        frameRate: 2
    }),
    anims.create({
        key: phantom+'Front',
        frames: anims.generateFrameNames(phantom+'-anim',{
            start: 0,
            end: 1,
            prefix: phantom+'-face_',
            suffix: '.png'
        }),
        repeat: -1,
        frameRate: 2
    })
}