var AngularJSApp = angular.module("AngularJSApp", ["ngRoute"]);

AngularJSApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'SearchController',
            templateUrl: 'views/home.html'
        })
        .when('/about/:platformName', {
            controller: 'SearchController',
            templateUrl: 'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});