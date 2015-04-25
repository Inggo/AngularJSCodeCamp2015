AngularJSApp.directive("thumbnail", function(){
    return {
        restrict: 'E',
        scope: {
            platform : '='
        },
        templateUrl: 'directives/templates/thumbnail.html',
        link: function($scope, $element, $attribute) {
            
        }
    };
});