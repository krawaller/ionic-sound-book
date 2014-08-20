var game = new Phaser.Game(innerWidth, innerHeight, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update, render: render }, true);

function preload() {
  game.load.spritesheet('stars', 'img/stars.png', 50, 49);
}

var emitter;

function create() {

  game.stage.backgroundColor = '#ffffff';

  //  Enable p2 physics
  game.physics.startSystem(Phaser.Physics.P2JS);

  game.physics.p2.gravity.y = 982;
  game.physics.p2.defaultRestitution = 0.8;

  emitter = game.add.emitter(0, 0, 100);

  emitter.makeParticles('stars', [0, 1, 2]);
  emitter.gravity = 0;

  emitter.setYSpeed(-400, 400);
  emitter.setXSpeed(-400, 400);

  game.input.onDown.add(onDown, this);

  for (var i = 0; i < 4; i++) {
    game.input.addPointer();
  }

}

ionic.on('tap', function(event) {

  emitter.x = event.gesture.center.pageX;
  emitter.y = event.gesture.center.pageY;

  //  The first parameter sets the effect to "explode" which means all particles are emitted at once
  //  The second gives each particle a 2000ms lifespan
  //  The third is ignored when using burst/explode mode
  //  The final parameter (10) is how many particles will be emitted in this single burst
  emitter.start(true, 1000, null, 5);
}, document.body)

function onDown(pointer) {
  emitter.x = pointer.x;
  emitter.y = pointer.y

  //  The first parameter sets the effect to "explode" which means all particles are emitted at once
  //  The second gives each particle a 2000ms lifespan
  //  The third is ignored when using burst/explode mode
  //  The final parameter (10) is how many particles will be emitted in this single burst
  emitter.start(true, 1000, null, 5);
}

function update() {

}

function render() {

}
