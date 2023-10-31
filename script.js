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
$('goldie').toggleClass('click', showPic)
