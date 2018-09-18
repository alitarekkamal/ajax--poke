$(".mainPage").ready(function(){

  $(".get").click(function(){
    var pokeURL = "https://pokeapi.co/api/v2/pokemon/";
    $.getJSON(pokeURL, function(data){

        var results = data.results;
        for(var i=0; i < results.length; i++){
          var nameObj = results[i];
          var appendEl = '<h3 style="margin:0;"><a href="choice.html?name='+nameObj.name+'" class="choice" onclick="clickit()" value="'+nameObj.name+ '">' + nameObj.name + '</a></h3><br/>';
          $(appendEl).appendTo('.poke');

                }
              });
        //  console.log($(".choice").html());

          });
      });
