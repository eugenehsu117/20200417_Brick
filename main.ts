let 板子 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 2 . 
d 2 2 2 9 2 2 5 2 2 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 6 2 . 
d 2 2 2 9 2 2 5 2 2 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 6 2 . 
d 2 2 2 9 2 2 5 2 2 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 6 2 . 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
板子.setPosition(76, 103)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . c a a a c . . . . . . . 
. . . c c f a b b c . . . . . . 
. . . b f f b f a a . . . . . . 
. . . b b a b f f a . . . . . . 
. . . c b f b b a c . . . . . . 
. . . . b a f c c . . . . . . . 
. . . . . b b c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(70, 84)
mySprite.setVelocity(50, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, false)
