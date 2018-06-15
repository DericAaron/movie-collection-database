app.service('GenreService', function($http){
    const sv = this;

    sv.genre = [];

    sv.getGenreCount = function(){
        return $http({
            method: 'GET',
            url: '/genre'
        }).then(function(response){
            sv.genre = response.data;
        }).catch(function(error){
            console.log('Error in GETGENRE');    
        });
    } // end getGenreCount

    sv.postGenre = function( genre ){
        console.log('in post genre');
        
        return $http({
            method: 'POST',
            url: '/genre',
            data: genre
        }).then(function(response){
            console.log('Genre posted');
        }).catch(function(error){
            console.log('Error in POST genre');  
        });
    }//end post

    sv.delete = function(id){
        return $http({
            method: 'DELETE',
            url: `/genre/${id}`
        }).then(function(response){
            console.log('deleted', id);
        }).catch(function(error){
            console.log('Error in delete genre');    
        });
    }//end delete
}); //end GenreService