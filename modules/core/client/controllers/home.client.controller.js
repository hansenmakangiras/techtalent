/**
 * Created by hanse on 1/24/2016.
 */
'use strict';

angular.module('core').controller('HomeController', ['$window','$scope', 'Authentication',
  function ($window, $scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.pageTransition = 'wow fadeIn';

    $scope.users = [
      {
        img: '1.jpg',
        left: 'calc(400px - 40px)',
        top: 'calc(300px - 40px)'
      },

      {
        img: '2.jpg',
        left: 'calc(350px - 40px)',
        top: 'calc(100px - 40px)'
      },

      {
        img: '3.jpg',
        left: 'calc(220px - 40px)',
        top: 'calc(230px - 40px)'
      },

      {
        img: '4.jpg',
        left: 'calc(220px - 40px)',
        top: 'calc(390px - 40px)'
      },

      {
        img: '5.jpg',
        left: 'calc(520px - 40px)',
        top: 'calc(200px - 40px)'
      },

      {
        img: '6.jpg',
        left: 'calc(600px - 40px)',
        top: 'calc(320px - 40px)'
      },

      {
        img: '7.jpg',
        left: 'calc(550px - 40px)',
        top: 'calc(430px - 40px)'
      },

      {
        img: '8.jpg',
        left: 'calc(350px - 40px)',
        top: 'calc(450px - 40px)'
      },

      {
        img: '9.jpg',
        left: 'calc(120px - 40px)',
        top: 'calc(130px - 40px)'
      },

      {
        img: '10.jpg',
        left: 'calc(700px - 40px)',
        top: 'calc(140px - 40px)'
      },

      {
        img: '11.jpg',
        left: 'calc(30px - 40px)',
        top: 'calc(200px - 40px)'
      },

      {
        img: '12.jpg',
        left: 'calc(100px - 40px)',
        top: 'calc(300px - 40px)'
      },

      {
        img: '13.jpg',
        left: 'calc(0px - 40px)',
        top: 'calc(400px - 40px)'
      },

      {
        img: '14.jpg',
        left: 'calc(90px - 40px)',
        top: 'calc(500px - 40px)'
      },

      {
        img: '15.jpg',
        left: 'calc(800px - 40px)',
        top: 'calc(250px - 40px)'
      },

      {
        img: '16.jpg',
        left: 'calc(700px - 40px)',
        top: 'calc(500px - 40px)'
      },

      {
        img: '17.jpg',
        left: 'calc(750px - 40px)',
        top: 'calc(400px - 40px)'
      }
    ];

//    bgHome('home');
    $window.bgHome('home');
  }
]);
