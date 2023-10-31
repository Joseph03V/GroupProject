
let check = document.getElementById('golden')
let goldie = document.getElementById('golden')
goldie.style.display = 'none'
$(document).ready(function(){
    $( function() {
        let availableTags = [
          "Pitbull",
          "Golden Retriever",
          "Chihuahua",
          "Yellow Lab",
          "Border Collie",
          "Armenian Gamper",
        ];
        $( "#searchbar" ).autocomplete({
          source: availableTags
        });
      } );
  });





function getApi() {
    let dogApi = 'https://www.mapquestapi.com/geocoding/v1/address?key=baOsBcecBVf88PhrMAJAWa7jQppd2hIV&location=Washington,DC'
    
    
    fetch(dogApi)
    .then(function (response){
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        
        
    })
}
function showPic() {
    goldie.style.display = 'block'
}
$('golden').toggleClass('click', showPic)

    // let auto = document.getElementById('searchbar')
    
 

