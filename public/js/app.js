(function searchSubmit (){

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
        node.id = res[i].imdbID
        node.innerHTML = title;
        document.querySelector('ul').appendChild(node);
        node.addEventListener('click', function(event){
          console.log("you clicked a node");
          console.log(this.id);
          // var ID = res[i].imdbID;
          // var idRequest = new XMLHttpRequest();
          // idRequest.open('get', 'http://omdbapi.com/?s' + encodeURIComponent(ID), true);
          //   idRequest.addEventListener('load', function(response){
          //     // var individualRes = JSON.parse(this.reponse).Search
          //     var movieAttributes = [];
          //     var title = this.Title;
          //     var rating = this.Rated;
          //     var year = this.Year;
          //     movieAttributes << title;
          //     movieAttributes << rating;
          //     movieAttributes << year;
          //
          //     for(var i=0; i < movieAttribues.length; i++)
          //   })
        })
      }

  });
    xhr.send();
  });
})();
