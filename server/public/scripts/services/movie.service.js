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
    }//end getGenre

    sv.postMovie = function( movie ){
        console.log('in post movie');
        
        return $http({
            method: 'POST',
            url: '/movie',
            data: movie
        }).then(function(response){
            console.log('Movie posted');
        }).catch(function(error){
            console.log('Error in POST movie');  
        });
    }//end post

    sv.delete = function(id){
        return $http({
            method: 'DELETE',
            url: `/movie/${id}`
        }).then(function(response){
            console.log('deleted', id);
            
        }).catch(function(error){
            console.log('Error in delete movie');
            
        });
    }//end delete
}); //end MovieService