/**
 * Created by hanse on 2/28/2016.
 */
'use strict';
angular.module('core').directive('people', ['$window', '$q', function ($window, $q) {
  function load_script() {
    var c = document.getElementById('connection');
    var ctx = c.getContext('2d');

    /*----------  Center  ----------*/

    ctx.moveTo(400, 300);
    ctx.lineTo(350, 100);

    ctx.moveTo(400, 300);
    ctx.lineTo(220, 230);

    ctx.moveTo(400, 300);
    ctx.lineTo(220, 390);

    ctx.moveTo(400, 300);
    ctx.lineTo(520, 200);

    ctx.moveTo(400, 300);
    ctx.lineTo(600, 320);

    ctx.moveTo(400, 300);
    ctx.lineTo(550, 430);

    ctx.moveTo(400, 300);
    ctx.lineTo(350, 450);

    /*----------  /Center  ----------*/

// 2

    ctx.moveTo(350, 100);
    ctx.lineTo(120, 130);

    ctx.moveTo(350, 100);
    ctx.lineTo(220, 230);

    ctx.moveTo(350, 100);
    ctx.lineTo(700, 140);

    ctx.moveTo(350, 100);
    ctx.lineTo(520, 200);

// 3

    ctx.moveTo(220, 230);
    ctx.lineTo(220, 390);

    ctx.moveTo(220, 230);
    ctx.lineTo(30, 200);

    ctx.moveTo(220, 230);
    ctx.lineTo(100, 300);

// 4

    ctx.moveTo(220, 390);
    ctx.lineTo(350, 450);

    ctx.moveTo(220, 390);
    ctx.lineTo(100, 300);

// 6

    ctx.moveTo(600, 320);
    ctx.lineTo(520, 200);

    ctx.moveTo(600, 320);
    ctx.lineTo(800, 250);

    ctx.moveTo(600, 320);
    ctx.lineTo(700, 500);

    ctx.moveTo(600, 320);
    ctx.lineTo(750, 400);

// 7

    ctx.moveTo(550, 430);
    ctx.lineTo(600, 320);

    ctx.moveTo(550, 430);
    ctx.lineTo(700, 500);

// 8

    ctx.moveTo(350, 450);
    ctx.lineTo(550, 430);

// 9

    ctx.moveTo(120, 130);
    ctx.lineTo(30, 200);

    ctx.moveTo(120, 130);
    ctx.lineTo(220, 230);

// 10

    ctx.moveTo(700, 140);
    ctx.lineTo(520, 200);

    ctx.moveTo(700, 140);
    ctx.lineTo(600, 320);

    ctx.moveTo(700, 140);
    ctx.lineTo(800, 250);

// 11

    ctx.moveTo(30, 200);
    ctx.lineTo(100, 300);

    ctx.moveTo(30, 200);
    ctx.lineTo(0, 400);

// 12

    ctx.moveTo(100, 300);
    ctx.lineTo(0, 400);

    ctx.moveTo(100, 300);
    ctx.lineTo(90, 500);

// 14

    ctx.moveTo(90, 500);
    ctx.lineTo(0, 400);

    ctx.moveTo(90, 500);
    ctx.lineTo(220, 390);

    ctx.moveTo(90, 500);
    ctx.lineTo(350, 450);

// 17

    ctx.moveTo(750, 400);
    ctx.lineTo(700, 500);

    ctx.moveTo(750, 400);
    ctx.lineTo(800, 250);

    ctx.strokeStyle = '#ccc';
    ctx.stroke();

  }

  return {
    restrict: 'A',
    templateUrl: '/module/core/client/views/people.client.view.html',
    link: function () {
      load_script();
    }
  };
}]);