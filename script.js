let check = document.getElementById('golden')
let goldie = document.getElementById('goldie')
goldie.style.display = 'none'

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
// $('goldie').toggleClass('click', showPic)

    // let auto = document.getElementById('searchbar')
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

 

document.getElementById("profileForm").addEventListener("submit", function(event){
event.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var gender= document.getElementById("gender").value
    var interests = document.getElementById("interests").value

    var formData = {
        name: name,
        age: age,
        gender: gender,
        interests: interests
    }

    localStorage.setItem("profileData", JSON.stringify(formData))
})