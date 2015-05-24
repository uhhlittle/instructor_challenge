(function searchSubmit (){

  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    var input = document.querySelector('input').value;
    var search_term = input.split().join("+")
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://omdbapi.com/?s=' + encodeURIComponent(search_term), true);
    xhr.addEventListener('load', function(response){
      console.log(response);
      var res =  JSON.parse(this.response).Search;
      console.log(res);
        document.querySelector('ul').innerHTML = "";
      for(var i = 0; i < res.length; i++){
        var node = document.createElement('li');
        var title = res[i].Title;
        node.id = res[i].imdbID;
        node.title = res[i].Title;
        node.year = res[i].Year;
        node.genre = res[i].Genre;
        node.director = res[i].Director;
        node.actors = res[i].Actors;
        node.innerHTML = title;
        document.querySelector('ul').appendChild(node);
        // make nodes clickable
        node.addEventListener('click', function(event){
          var movie = document.createElement('p');
          movie.innerHTML = this.title;
          var movieYear = document.createElement('p');
          movieYear.innerHTML = this.year;
            var btn = document.createElement("BUTTON");        // Create a <button> element
            var t = document.createTextNode("FAVORITE");       // Create a text node
            btn.appendChild(t);

            document.querySelector('ul').appendChild(movie);
            document.querySelector('ul').appendChild(movieYear);
            document.querySelector('ul').appendChild(btn);


            // var id = this.id
          // var idRequest = new XMLHttpRequest();
          // idRequest.open('get', 'http://omdbapi.com/?s' + encodeURIComponent(id), true);
          // idRequest.addEventListener('load', function(response){
          //     var individualRes = JSON.parse(this.reponse).Search;
          //     console.log(individualRes);
          //     var movieAttributes = [];
          //     var title = individualRes.Title;
          //     var rating = individualRes.Rated;
          //     var year = individualRes.Year;
          //     movieAttributes << title;
          //     movieAttributes << rating;
          //     movieAttributes << year;
          //
          //     for(var i=0; i < movieAttribues.length; i++){
          //       listing = document.createElement('p');
          //       listing.innerHTML = movieAttributes[i];
          //       document.querySelector('li').appendChild(listing);
          //     }
          //   })
        })
      }

  });
    xhr.send();
  });
})();
