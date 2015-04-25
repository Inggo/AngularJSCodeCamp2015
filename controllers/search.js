AngularJSApp.controller("SearchController", function($scope, $http, $routeParams) {

    $scope.platforms = [];
    $scope.platform = null;

    $scope.setPlatform = function() {
        if ($routeParams.platformName) {
            for (var i = 0; i < $scope.platforms.length; i++) {
                if ($scope.platforms[i].name.toLowerCase() === $routeParams.platformName)
                    return $scope.platforms[i];
            }
        }
    };

    $scope.onHttpRequestSuccess = function(data) {
        $scope.platforms = data;
        $scope.platform = $scope.setPlatform();
    };

    $http({
        url: 'json/platforms.json',
        method: 'GET'
    }).success($scope.onHttpRequestSuccess);

});