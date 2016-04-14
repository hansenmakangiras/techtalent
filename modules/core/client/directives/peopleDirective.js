/**
 * Created by hanse on 2/28/2016.
 */
(function () {
  'use strict';
  angular.module('core')
    .directive('people', people);
  people.$inject = [];

  function people() {
    return {
      restrict: 'E',
      replace: true,
      controller: 'HomeController',
      templateUrl: './modules/core/client/views/people.client.view.html',
      link: function(scope, element){
        scope.canvas = element.find('canvas')[0];
        scope.context = scope.canvas.getContext('2d');
        scope.$watch(function () {
          /*----------  Center  ----------*/
          scope.context.moveTo(400, 300);
          scope.context.lineTo(350, 100);

          scope.context.moveTo(400, 300);
          scope.context.lineTo(220, 230);

          scope.context.moveTo(400, 300);
          scope.context.lineTo(220, 390);

          scope.context.moveTo(400, 300);
          scope.context.lineTo(520, 200);

          scope.context.moveTo(400, 300);
          scope.context.lineTo(600, 320);

          scope.context.moveTo(400, 300);
          scope.context.lineTo(550, 430);

          scope.context.moveTo(400, 300);
          scope.context.lineTo(350, 450);

          /*----------  /Center  ----------*/

// 2

          scope.context.moveTo(350, 100);
          scope.context.lineTo(120, 130);

          scope.context.moveTo(350, 100);
          scope.context.lineTo(220, 230);

          scope.context.moveTo(350, 100);
          scope.context.lineTo(700, 140);

          scope.context.moveTo(350, 100);
          scope.context.lineTo(520, 200);

// 3

          scope.context.moveTo(220, 230);
          scope.context.lineTo(220, 390);

          scope.context.moveTo(220, 230);
          scope.context.lineTo(30, 200);

          scope.context.moveTo(220, 230);
          scope.context.lineTo(100, 300);

// 4

          scope.context.moveTo(220, 390);
          scope.context.lineTo(350, 450);

          scope.context.moveTo(220, 390);
          scope.context.lineTo(100, 300);

// 6

          scope.context.moveTo(600, 320);
          scope.context.lineTo(520, 200);

          scope.context.moveTo(600, 320);
          scope.context.lineTo(800, 250);

          scope.context.moveTo(600, 320);
          scope.context.lineTo(700, 500);

          scope.context.moveTo(600, 320);
          scope.context.lineTo(750, 400);

// 7

          scope.context.moveTo(550, 430);
          scope.context.lineTo(600, 320);

          scope.context.moveTo(550, 430);
          scope.context.lineTo(700, 500);

// 8

          scope.context.moveTo(350, 450);
          scope.context.lineTo(550, 430);

// 9

          scope.context.moveTo(120, 130);
          scope.context.lineTo(30, 200);

          scope.context.moveTo(120, 130);
          scope.context.lineTo(220, 230);

// 10

          scope.context.moveTo(700, 140);
          scope.context.lineTo(520, 200);

          scope.context.moveTo(700, 140);
          scope.context.lineTo(600, 320);

          scope.context.moveTo(700, 140);
          scope.context.lineTo(800, 250);

// 11

          scope.context.moveTo(30, 200);
          scope.context.lineTo(100, 300);

          scope.context.moveTo(30, 200);
          scope.context.lineTo(0, 400);

// 12

          scope.context.moveTo(100, 300);
          scope.context.lineTo(0, 400);

          scope.context.moveTo(100, 300);
          scope.context.lineTo(90, 500);

// 14

          scope.context.moveTo(90, 500);
          scope.context.lineTo(0, 400);

          scope.context.moveTo(90, 500);
          scope.context.lineTo(220, 390);

          scope.context.moveTo(90, 500);
          scope.context.lineTo(350, 450);

// 17

          scope.context.moveTo(750, 400);
          scope.context.lineTo(700, 500);

          scope.context.moveTo(750, 400);
          scope.context.lineTo(800, 250);

          scope.context.strokeStyle = '#ccc';
          scope.context.stroke();
        });
      }
    };
  }
})();




