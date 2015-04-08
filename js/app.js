// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


.controller('CircleCTRL', function($scope) {

    init();

    $scope.addMore = function() {
        var data = $scope.number + 1;
        $scope.number = data;
        console.log('message: ', data);

        clearObject();

        createObject();
    }

    $scope.doRefresh = function() {
        clearObject();

        $scope.number = 0;

        $scope.$broadcast('scroll.refreshComplete');
    };


    function init() {

        $scope.circle = 360;
        $scope.number = 0;

        createObject();
    }

    function createObject() {

        var div = $scope.circle / $scope.number;
        var radius = 150;
        var parentdiv = document.getElementById('parentdiv');
        var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
        var offsetToChildCenter = 20;
        var totalOffset = offsetToParentCenter - offsetToChildCenter;
        for (var i = 1; i <= $scope.number; ++i) {
            var childdiv = document.createElement('div');
            childdiv.className = 'div2';
            childdiv.style.position = 'absolute';
            var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
            var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
            childdiv.style.top = (y + totalOffset).toString() + "px";
            childdiv.style.left = (x + totalOffset).toString() + "px";
            if ($scope.number <= 10) {
                childdiv.style.width = '60px';
                childdiv.style.height = '60px';
            } else if ($scope.number <= 15) {
                childdiv.style.width = '50px';
                childdiv.style.height = '50px';
            } else if ($scope.number <= 20) {
                childdiv.style.width = '40px';
                childdiv.style.height = '40px';
            } else if ($scope.number <= 25) {
                childdiv.style.width = '30px';
                childdiv.style.height = '30px';
            }else{
                childdiv.style.width = '20px';
                childdiv.style.height = '20px';
            }
            parentdiv.appendChild(childdiv);
        }
    }

    function clearObject() {
        var elements = document.getElementsByClassName('div2');
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
});
