'use strict';

angular.module('jiaoRongApp')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    //space 20

    $scope.width = 2880, $scope.height = 1920;
    $scope.repeat = 100;

    $scope.tilts = [
      {
        format: {top:0, left:0, width:360, height:480}, n:'wait_date.png'
      },
      {
        format: {top:0, left:360, width:360, height:240}, n:'box1.png', ph:true
      },
      {
        format: {top:0, left:720, width:240, height:240, zIndex:1}, n:'life_savers.png'
      },
      {
        format: {top:0, left:960, width:360, height:480}, n:'paper.png', ph:true
      },
      {
        format: {top:0, left:1320, width:360, height:240}, n:'box1.png', ph:true
      },
      {
        format: {top:0, left:1680, width:240, height:240}, n:'f1.png'
      },
      {
        format: {top:0, left:1920, width:360, height:480}, n:'paper.png', ph:true
      },
      {
        format: {top:0, left:2280, width:360, height:240}, n:'fish.png'
      },
      {
        format: {top:0, left:2640, width:240, height:240}, n:'box3.png', ph:true
      },
      {
        format: {top:480, left:0, width:360, height:240}, n:'bizcard.png'
      },
      {
        format: {top:240, left:360, width:600, height:600}, n:'you_are_cure.png'
      },
      {
        format: {top:720, left:0, width:360, height:360}, n:'lipstick.png'  //slice∏
      },
      {
        format: {top:1080, left:0, width:360, height:480}, n:'paper.png', ph:true
      },
      {
        format: {top:1560, left:0, width:360, height:360}, n:'box4.png', ph:true
      },
      {
        format: {top:840, left:360, width:360, height:480}, n:'fisher_price.png'
      },
      {
        format: {top:840, left:720, width:240, height:240}, n:'box2.png', ph:true
      },
      {
        format: {top:1080, left:720, width:240, height:240}, n:'box3.png', ph:true
      },
      {
        format: {top:1320, left:360, width:600, height:600, marginTop:'-53px'}, n:'lorums.png'
      },
      {
        format: {top:240, left:1320, width:240, height:240}, n:'jellyfish.png'
      },
      {
        format: {top:240, left:1560, width:360, height:480}, n:'mtndew.png'
      },
      {
        format: {top:480, left:960, width:600, height:600, marginLeft:'-62px'}, n:'closet_fashion.png'
      },
      {
        format: {top:720, left:1560, width:360, height:360}, n:'box4.png', ph:true
      },
      {
        format: {top:1080, left:960, width:360, height:480}, n:'paper.png', ph:true
      },
      {
        format: {top:1560, left:960, width:360, height:360}, n:'shape_matters.png' //slice
      },
      {
        format: {top:1080, left:1320, width:360, height:240}, n:'box1.png', ph:true
      },
      {
        format: {top:1080, left:1680, width:240, height:240}, n:'instant.png'
      },
      {
        format: {top:1320, left:1320, width:600, height:600}, n:'f2.png'
      },
      {
        format: {top:480, left:1920, width:360, height:360, marginLeft:'35px', marginTop:'10px'}, n:'tree.png'
      },
      {
        format: {top:240, left:2280, width:600, height:600}, n:'em_cosmetics.png'
      },
      {
        format: {top:840, left:1920, width:240, height:240}, n:'box2.png', ph:true
      },
      {
        format: {top:840, left:2160, width:360, height:240}, n:'type.png'
      },
      {
        format: {top:840, left:2520, width:360, height:240}, n:'box1.png', ph:true
      },
      {
        format: {top:1080, left:1920, width:360, height:480}, n:'aflac.png'
      },
      {
        format: {top:1080, left:2280, width:600, height:600}, n:'skirt.png'
      },
      {
        format: {top:1560, left:1920, width:360, height:360, marginTop:'-221px', marginLeft:'-90px'}, n:'duck.png'
      },
      {
        format: {top:1680, left:2280, width:240, height:240}, n:'box2.png', ph:true
      },
      {
        format: {top:1680, left:2520, width:360, height:240}, n:'wrigley.png'
      }
    ];
  }]);
