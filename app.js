  var topics = ["Japan", "Technology", "Coding", "SpaceX", "Metallica", "Icecream"];

  appendButtons(topics);


  $('#buttons .button').on('click', ajaxCall);



// Response returns an object back with an object with a property that is an arrray

  $('#submit').on('click', function(){

    var input = $('#search').val();
    console.log($(this));
    var el = $('<div>');
      el.addClass('btn btn-primary btn-lg button');
      el.text(input);

    $('#buttons').append(el);

    $('#buttons .button').on('click', ajaxCall);

  });

  function createButtons(array){
    for(var i = 0; i < array.length; i++){

      var gif = data.data[i].images.original.url;
      var still = data.data[i].images.orinal_still.url;

      var el = $('img');
      el.attr('src', still);
      el.attr('data-gif', gif);
      }

  }

  // creates buttons from an array with strings

  function appendButtons (array){
    for(var i = 0; i < array.length; i++){
      var el = $('<div>');
        el.addClass('btn btn-primary btn-lg button');
        el.text(array[i]);

      $('#buttons').append(el);
    }
  }


  function ajaxCall (){
    var topic = $(this).text();
    console.log(topic);
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+ topic+"&api_key=c7fd486fe62d4cfdb33110a0b2750064&limit=5");
    xhr.done(function(data) {

      $('#gifs').html('');
      for( var i = 0; i < 5; i++){
        var gif = data.data[i].images.original.url;
        var still = data.data[i].images.original_still.url;
        var img = $('<img>');
            img.attr('src', still);
            img.attr('style','width:150px;width:150px;')
            $('#gifs').append(img);
        console.log("success got data", data);
        console.log(data.data[0].images.original.url);
        console.log(data.data[0].images.original_still.url);
      }
    });
  }
