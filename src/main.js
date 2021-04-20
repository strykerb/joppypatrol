// Rocket Patrol Modification: Joppy Patrol
//
// Author: Stryker Buffington
//
// Time Taken to complete project: ~6 hours
//
// They say mistakes never die... I say that Joppy Script was no mistake. Nathan, I'm sorry for bringing this attrocity into existence.
//
// Modification List:
// 	- Total Aesthetic Overhaul: Redesigned Artwork, UI, and Sound             (60)
// 	- Added looping background music                                          (5)
// 	- Implemented a Time Remaining UI element                                 (10)
// 	- Adds time upon every successful hit (of the farthest ship)              (20)
// 	- Player can still control rocket after firing                            (5)
//                                                                            (Total: 100)


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// Set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starSpeed = 1;

let keyF, keyR, keyLEFT, keyRIGHT;
