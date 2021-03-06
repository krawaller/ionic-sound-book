var game = new Phaser.Game(innerWidth, innerHeight, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update, render: render }, true);

function preload() {
  game.load.spritesheet('stars', 'img/stars.png', 50, 49);
}

var emitter;

function create() {

  game.stage.backgroundColor = '#ffffff';

  emitter = game.add.emitter(0, 0, 100);

  emitter.makeParticles('stars', [0, 2]);
  emitter.gravity = 0;

  emitter.setYSpeed(-400, 400);
  emitter.setXSpeed(-400, 400);

}

ionic.on('tap', function(event) {

  emitter.x = event.gesture.center.pageX;
  emitter.y = event.gesture.center.pageY;

  //  The first parameter sets the effect to "explode" which means all particles are emitted at once
  //  The second gives each particle a 2000ms lifespan
  //  The third is ignored when using burst/explode mode
  //  The final parameter (10) is how many particles will be emitted in this single burst
  emitter.start(true, 1000, null, 10);
}, document.body)

function update() {

}

function render() {

}
