'use strict';

angular.module('jiaoRongApp')
  .controller('HomeCtrl', ['$scope', function ($scope) {
    //space 20

    $scope.width = 2880, $scope.height = 1920;

    $scope.tilts = [
      {
        format: {top:0, left:0, width:340, height:460}, n:'wait_date.png'
      },
      {
        format: {top:0, left:360, width:340, height:220}, n:'box1.png', ph:true
      },
      {
        format: {top:0, left:720, width:220, height:220, zIndex:1}, n:'life_savers.png'
      },
      {
        format: {top:0, left:960, width:340, height:460}, n:'paper.png', ph:true
      },
      {
        format: {top:0, left:1320, width:340, height:220}, n:'box1.png', ph:true
      },
      {
        format: {top:0, left:1680, width:220, height:220}, n:'f1.png'
      },
      {
        format: {top:0, left:1920, width:340, height:460}, n:'paper.png', ph:true
      },
      {
        format: {top:0, left:2280, width:340, height:220}, n:'fish.png'
      },
      {
        format: {top:0, left:2640, width:220, height:220}, n:'box3.png', ph:true
      },
      {
        format: {top:480, left:0, width:340, height:220}, n:'bizcard.png'
      },
      {
        format: {top:240, left:360, width:580, height:580}, n:'you_are_cure.png'
      },
      {
        format: {top:720, left:0, width:340, height:340}, n:'lipstick.png'  //slice∏
      },
      {
        format: {top:1080, left:0, width:340, height:460}, n:'paper.png', ph:true
      },
      {
        format: {top:1560, left:0, width:340, height:340}, n:'box4.png', ph:true
      },
      {
        format: {top:840, left:360, width:340, height:460}, n:'fisher_price.png'
      },
      {
        format: {top:840, left:720, width:220, height:220}, n:'box2.png', ph:true
      },
      {
        format: {top:1080, left:720, width:220, height:220}, n:'box3.png', ph:true
      },
      {
        format: {top:1320, left:360, width:580, height:580, marginTop:'-53px'}, n:'lorums.png'
      },
      {
        format: {top:240, left:1320, width:220, height:220}, n:'jellyfish.png'
      },
      {
        format: {top:240, left:1560, width:340, height:460}, n:'mtndew.png'
      },
      {
        format: {top:480, left:960, width:580, height:580, marginLeft:'-62px'}, n:'closet_fashion.png'
      },
      {
        format: {top:720, left:1560, width:340, height:340}, n:'box4.png', ph:true
      },
      {
        format: {top:1080, left:960, width:340, height:460}, n:'paper.png', ph:true
      },
      {
        format: {top:1560, left:960, width:340, height:340}, n:'shape_matters.png' //slice
      },
      {
        format: {top:1080, left:1320, width:340, height:220}, n:'box1.png', ph:true
      },
      {
        format: {top:1080, left:1680, width:220, height:220}, n:'instant.png'
      },
      {
        format: {top:1320, left:1320, width:580, height:580}, n:'f2.png'
      },
      {
        format: {top:480, left:1920, width:340, height:340, marginLeft:'35px', marginTop:'10px'}, n:'tree.png'
      },
      {
        format: {top:240, left:2280, width:580, height:580}, n:'em_cosmetics.png'
      },
      {
        format: {top:840, left:1920, width:220, height:220}, n:'box2.png', ph:true
      },
      {
        format: {top:840, left:2160, width:340, height:220}, n:'type.png'
      },
      {
        format: {top:840, left:2520, width:340, height:220}, n:'box1.png', ph:true
      },
      {
        format: {top:1080, left:1920, width:340, height:460}, n:'aflac.png'
      },
      {
        format: {top:1080, left:2280, width:580, height:580}, n:'skirt.png'
      },
      {
        format: {top:1560, left:1920, width:340, height:340, marginTop:'-221px', marginLeft:'-90px'}, n:'duck.png'
      },
      {
        format: {top:1680, left:2280, width:220, height:220}, n:'box2.png', ph:true
      },
      {
        format: {top:1680, left:2520, width:340, height:220}, n:'wrigley.png'
      }
    ];
  }]);
