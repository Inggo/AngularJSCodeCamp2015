var AngularJSApp = angular.module("AngularJSApp", ["ngRoute"]);

AngularJSApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'SearchController',
            templateUrl: 'views/home.html'
        })
        .when('/checkout/:checkoutPrice/:checkoutEmail/:checkoutName/:checkoutList', {
            controller: 'SearchController',
            templateUrl: 'views/checkout.html'
        })
        .when('/about/:platformName', {
            controller: 'SearchController',
            templateUrl: 'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});