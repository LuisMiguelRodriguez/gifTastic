  var topics = ["Japan", "Technology", "Coding", "SpaceX", "Metallica", "Icecream"];

  appendButtons(topics);

  $('#buttons .button').on('click', ajaxCall);

  $('#submit').on('click', addButton);
  $('#search').on('keyup', function (e) {
    if (e.keyCode == 13) {
      addButton();
    }
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

  // creates buttons from an array with strings

  function appendButtons (array){
    for(var i = 0; i < array.length; i++){
      var el = $('<li>');
      var link = $('<a>');
      var p = $('<p>');
          p.text(array[i]);
          link.append(p);
        el.addClass('button');
        el.val(array[i]);
        el.append(link);

      $('#buttons').append(el);
    }
  }


  function ajaxCall (){
    var topic = $(this).text();
    console.log(topic);
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+ topic +"&api_key=c7fd486fe62d4cfdb33110a0b2750064&limit=10");
    xhr.done(function(data) {

      $('#thumbnails').html('');
      for( var i = 0; i < 10; i++){
        var gif = data.data[i].images.original.url;
        var still = data.data[i].images.original_still.url;
        // var img = $('<img>');
        //     img.attr('src', still);
        //     img.attr('class', 'gif');
        //     img.attr('style','width:150px;width:150px;')
        //     img.attr('data-gif', gif);
        //     $('#gifs').append(img);
        // console.log("success got data", data);
        // console.log(data.data[0].images.original.url);
        // console.log(data.data[0].images.original_still.url);
        gifContainer(still, gif);
      }

    });
  }

  function addButton(){
    var input = $('#search').val();

      var el = $('<li>');
      var link = $('<a>');

      var p = $('<p>');
          p.text(input);
          link.append(p);
        el.addClass('button');
        el.val(input);
        el.append(link);
    $('#buttons').append(el);

    $('#search').val('');
  }


  function gifContainer (still, gif){
    var container = $('<div>');
    container.addClass('col-sm-3');
    container.html(
      '<div class="thumbnail"><img src="' + still + '" data-gif="' + gif + '" ><div class="caption"><h4>Rating</h4></div></div></div>'
    );

    $('#thumbnails').append(container);
  }
