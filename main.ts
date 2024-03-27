scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.bubbles)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (man.vy == 0) {
        man.vy = -175
    }
})
let man: Sprite = null
scene.setBackgroundColor(6)
man = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f 1 f f 1 f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . f f 2 2 2 2 2 2 f f . . . . 
    . . f f f f 1 1 f f f f . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(man, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
man.ay = 350
scene.cameraFollowSprite(man)
