app.service('MovieService', function($http){
    const sv = this;

    sv.movie = [];
    sv.genre = [];

    sv.getMovie = function(){
        return $http({
            method: 'GET',
            url: 'movie'
        }).then(function(response){
            sv.movie = response.data;
        }).catch(function(error){
            console.log('Error in GETMOVIE');    
        });
    } // end getMovie

    sv.getGenre = function(){
        return $http({
            method: 'GET',
            url: '/genre'
        }).then(function(response){
            sv.genre = response.data;
        }).catch(function(err){
            console.log('Error in Movie_getGenre');
        });
    }
}); //end MovieService