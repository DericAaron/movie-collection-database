const app = angular.module('app', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
    }).when('/add_movie', {
        templateUrl: 'views/addmovie.html'
    }).when('/manage_genre', {
        templateUrl: 'views/managegenre.html'
    }).otherwise({
        template: '<h2>404 Page Not Found</h2>'
    });
});