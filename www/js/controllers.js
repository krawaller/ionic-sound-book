var items = [{
  image: 'banan.JPG',
  label: 'banan',
  sound: 'banan.m4a',
  background: '#DFA954'
},
{
  image: 'bil.JPG',
  label: 'bil',
  sound: 'bil.m4a',
  background: '#0083EA'
},
{
  image: 'flaska.JPG',
  label: 'flaska',
  sound: 'flaska.m4a',
  background: '#DDEBF3'
},
{
  image: 'klocka.JPG',
  label: 'klocka',
  sound: 'klocka.m4a',
  background: '#BF9D7C'
},
{
  image: 'kopp.JPG',
  label: 'kopp',
  sound: 'kopp.m4a',
  background: '#E00931'
},
{
  image: 'napp.JPG',
  label: 'napp',
  sound: 'napp.m4a',
  background: '#FE0D45'
},
{
  image: 'sked.JPG',
  label: 'sked',
  sound: 'sked.m4a',
  background: '#FF4433'
},
{
  image: 'skor.JPG',
  label: 'skor',
  sound: 'skor.m4a',
  background: '#A40F29'
}]

angular.module('IlonPlayer.controllers', [])

.controller('SlideBox', function($scope, $state, $ionicNavBarDelegate) {

  items.forEach(function(item) {
    if (item.sound) {
      createjs.Sound.registerSound('items/' + item.sound, item.label);
    }
  });

  var slides = [];
  for (var i = 0; i < items.length; i += 2) {
    slides.push({ items: [items[i], items[i + 1]], index: i / 2 })
  };
  $scope.slides = slides;

  $scope.playSound = function(item, $event) {
    createjs.Sound.play(item.label);

    $event.target.classList.add('tapped');
    setTimeout(function() {
      $event.target.classList.remove('tapped');
    }, 300)

  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  //start at 0
  $scope.slideIndex = 0;


  var timeout = setTimeout(animateIdle, 5000);;
  ionic.on('tap', function(event) {
    clearTimeout(timeout)
    timeout = setTimeout(animateIdle, 5000);
  }, document.body);

  function animateIdle() {
    var labels = document.querySelectorAll('.listz.active .label');
    var label = labels[Math.floor(Math.random() * labels.length)];
    var animations = ['swing', 'wobble', 'tada', 'shake', 'rubberBand']
    var animation = animations[Math.floor(Math.random() * animations.length)];
    label.style.animationName = label.style.webkitAnimationName = animation;

    timeout = setTimeout(animateIdle, 5000);
  }
})
