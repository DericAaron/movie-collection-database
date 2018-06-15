app.controller('GenreController', function(GenreService){
    let vm = this;

    vm.genre = [];

    vm.getAllGenre = function(){
        GenreService.getGenreCount().then(function(){
            vm.genre = GenreService.genre;
            console.log(vm.genre);
            
        });
    }//end getGenre

    vm.submitGenre = function(){
        let genreToSend = {
            genre_name: vm.genreNameIn
        };
        GenreService.postGenre(genreToSend).then(function(){
            vm.getAllGenre();
        });
        
    }//end submit genre

    vm.removeMe = function( id ){
        GenreService.delete(id).then(function(){
            vm.getAllGenre();
        });
    }//end removeMe

    vm.getAllGenre();


}); //end MovieController