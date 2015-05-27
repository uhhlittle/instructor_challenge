(
  function searchSubmit (){

  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    var input = document.querySelector('input').value;
    var search_term = input.split().join("+")
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://omdbapi.com/?s=' + encodeURIComponent(search_term), true);
    xhr.addEventListener('load', function(response){
      var res =  JSON.parse(this.response).Search;
        document.querySelector('ul').innerHTML = "";
      for(var i = 0; i < res.length; i++){
        var node = document.createElement('li');
        var title = res[i].Title;
        node.id = res[i].imdbID;
        node.title = res[i].Title;
        node.year = res[i].Year;
        node.innerHTML = title;
        document.querySelector('ul').appendChild(node);
        // make nodes clickable
        node.addEventListener('click', function(event){
          document.querySelector('.movie-details').innerHTML = "";
            var movie = document.createElement('p');
            var movieYear = document.createElement('p');
            movie.innerHTML = this.title;
            movieYear.innerHTML = this.year;

            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("FAVORITE");
            btn.appendChild(t);
            //renders details onto page and favorites button
            document.querySelector('.movie-details').appendChild(movie);
            document.querySelector('.movie-details').appendChild(movieYear);
            document.querySelector('.movie-details').appendChild(btn);
                  //saves data
                  btn.addEventListener('click', function(event){
                    var title = movie.innerHTML;
                    var internalXml = new XMLHttpRequest();
                    internalXml.open('post', '/favorites', true);
                    internalXml.setRequestHeader('Content-Type', 'application/json');
                    internalXml.send( JSON.stringify({name: title}));
                        console.log(title);
              })
        })
      }

  });

    xhr.send();
  });
})();
