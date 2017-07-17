  var topics = ["Japan", "Technology", "Coding", "SpaceX", "Metallica", "Icecream"];

  appendButtons(topics);

  $('#buttons .button').on('click', ajaxCall);

  $('#submit').on('click', function(){

    var input = $('#search').val();

      var el = $('<li>');
      var link = $('<a>');
          link.text(input);
      var h2 = $('<h2>');
          link.append(link);
        el.addClass('button');
        el.val(input);
        el.append(link);
    $('#buttons').append(el);

    // $('#buttons .button').on('click', ajaxCall);

  });

  $(document).on('click','.button', ajaxCall);
  $(document).on('click','.gif',  function(){
    console.log($(this));
    console.log('----------Original values --------------');
    var still = $(this)[0].src;
    var gif = $(this)[0].dataset.gif;
    console.log(still);
    console.log(gif);
    console.log('----------swapping values --------------');
    $(this)[0].src = gif;
    $(this)[0].dataset.gif = still;

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
      var el = $('<li>');
      var link = $('<a>');
          link.text(array[i]);
      var h2 = $('<h2>');
          link.append(link);
        el.addClass('button');
        el.val(array[i]);
        el.append(link);

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
            img.attr('class', 'gif');
            img.attr('style','width:150px;width:150px;')
            img.attr('data-gif', gif);
            $('#gifs').append(img);
        console.log("success got data", data);
        console.log(data.data[0].images.original.url);
        console.log(data.data[0].images.original_still.url);
      }



    });
  }
