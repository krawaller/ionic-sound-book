var items = [{
  image: 'banan.JPG',
  sound: 'banan.mp3'
  label: 'banan',
},
{
  image: 'bil.JPG',
  label: 'bil',
  sound: 'bil.m4a'
},
{
  image: 'flaska.JPG',
  label: 'flaska',
  sound: 'flaska.m4a'
},
{
  image: 'klocka.JPG',
  label: 'klocka',
  sound: 'klocka.m4a'
},
{
  image: 'kopp.JPG',
  label: 'kopp',
  sound: 'kopp.m4a'
},
{
  image: 'napp.JPG',
  label: 'napp',
  sound: 'napp.m4a'
},
{
  image: 'sked.JPG',
  label: 'sked',
  sound: 'sked.m4a'
},
{
  image: 'skor.JPG',
  label: 'skor',
  sound: 'skor.m4a'
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

  $scope.playSound = function(item) {
    createjs.Sound.play(item.label);
  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  //start at 0
  $scope.slideIndex = 0;
})
