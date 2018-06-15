app.controller('MovieController', function(MovieService){
    let vm = this;

    vm.movie = [];
    vm.genre = [];

    vm.getAllMovie = function(){
        MovieService.getMovie().then(function(){
            vm.movie = MovieService.movie;
        });
    }// end getAllMovie

    vm.getAllGenre = function(){
        MovieService.getGenre().then(function(){
            vm.genre = MovieService.genre;
        });
    }//end getGenre

    vm.getAllGenre();
    vm.getAllMovie();

}); //end MovieController