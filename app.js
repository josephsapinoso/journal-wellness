var app = angular.module('journalWellness',['ui.router'])

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
            })

            .state('confirm', {
                url: '/confirm',
                templateUrl: '/confirm.html',
                controller: 'MainCtrl'
            })
            
            .state('intro', {
                url: '/intro',
                templateUrl: '/intro.html',
                controller:'MainCtrl'
            })

            .state('anger', {
                url: '/anger',
                templateUrl: '/anger.html',
                controller:'MainCtrl'
            });

        $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', [
    '$scope', // scope allows controllers to interact and share data with angular templates.
    'issues',
    function($scope, issues){  
        $scope.test = 'Hello world!';

        $scope.issues = issues.issues;

        $scope.submitIssue = function(){
            if (!$scope.issue || $scope.issue === '') { return; }
            $scope.issues.push({
                issue: $scope.issue
            }); 
        };

        $scope.submitEntry = function(){
            if (!$scope.entry || $scope.entry === '') { return; }
            $scope.entries.push({
                entry: $scope.entry
            });
        };

}]);


