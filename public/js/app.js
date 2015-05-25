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
            var movie = document.createElement('p');
            var movieYear = document.createElement('p');
            var movieActors = document.createElement('p');
            movie.innerHTML = this.title;
            movieYear.innerHTML = this.year;
            movieActors = this.actors;
            var btn = document.createElement("BUTTON");        // Create a <button> element
            var t = document.createTextNode("FAVORITE");       // Create a text node
            btn.appendChild(t);

            document.querySelector('ul').appendChild(movie);
            document.querySelector('ul').appendChild(movieYear);
            document.querySelector('ul').appendChild(btn);

                  btn.addEventListener('click', function(event){
                    var title = node.title;
                    var id = node.id;
                    var internalXml = new XMLHttpRequest();
                    internalXml.open('post', '/favorites', true);
                    internalXml.send("name: title, oid: id");
                        console.log(node.id);
              })
        })
      }

  });

    xhr.send();
  });
})();
