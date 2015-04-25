AngularJSApp.controller("SearchController", function($scope, $http, $routeParams) {

    $scope.platforms = [];
    $scope.platform = null;

    $scope.cart = {
        items: [],
        total: 0,
        getList: function() {
            var result = "";
            for(var i = 0; i < $scope.cart.items.length; i++) {
                result += $scope.cart.items[i].name + ":" + $scope.cart.items[i].price + "|";
            }
            return result;
        }
    };
    $scope.user = {
        email:  "",
        name: ""
    };

    $scope.addToCart = function(platform) {
        for (var i = 0; i < $scope.platforms.length; i++) {
                if ($scope.platforms[i].name === platform.name) {
                    $scope.cart.items.push(platform);
                    $scope.cart.total += platform.price;
                    $scope.platforms.splice(i, 1);
                }
            }
    };

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

    $scope.checkout = $routeParams;
    $scope.getCheckoutList = function() {
        var list = $scope.checkout.checkoutList.split('|');
        var output = "";
        for (var i = 0; i < list.length; i++) {
            var item = list[i].split(":");
            if (item[0] && item[1])
                output +=  item[0] + ' : ' + item[1] + " - ";
        }
        return output;
    };

});