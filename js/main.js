
$(document).ready(function() {
$("button").on("click", function () {
    const randonNumber = Math.ceil(Math.random() * 88 )
   $.get(`https://akabab.github.io/starwars-api/api/id/${randonNumber}.json`, function(data) {
       
       $("h1.name").text(data['name'])
       $(".character-img").attr("src", data['image'])
   })  
 
})



})
 
// https://akabab.github.io/starwars-api/api/id/1.json

// https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api