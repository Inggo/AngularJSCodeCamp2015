AngularJSApp.controller("SearchController", function($scope, $http) {
    
    $scope.onHttpRequestSuccess = function(data) {
        $scope.platforms = data;
    };

    $http({
        url: 'json/platforms.json',
        method: 'GET'
    }).success($scope.onHttpRequestSuccess);

});