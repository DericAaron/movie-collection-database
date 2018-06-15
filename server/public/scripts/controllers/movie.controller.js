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

    vm.submitMovie = function(){
        const movieToSend = {
            title: vm.titleIn,
            genre_id: vm.genreIn,
            release_date: vm.dateIn,
            run_time: vm.runTimeIn
        };
        console.log(movieToSend);
        
        MovieService.postMovie(movieToSend).then(function(){
            vm.getAllMovie();
        });
        
    }//end submit movie

    vm.getAllGenre();
    vm.getAllMovie();

}); //end MovieController