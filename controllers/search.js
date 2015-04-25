AngularJSApp.controller("SearchController", function($scope, $location, $routeParams) {
    $scope.message = "Hello World!";

    console.log($location.url());
    console.log($routeParams)

    $scope.callMessage = function() {
        alert($scope.message);
    };
});