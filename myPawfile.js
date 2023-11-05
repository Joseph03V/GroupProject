let create = document.getElementById('create')
let profilePic = document.getElementById('profile-pic')
let inputFile = document.getElementById('input-file')
profileInfo = document.getElementById("profileForm")

profileInfo.addEventListener("submit", function(event){
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
document.addEventListener('DOMContentLoaded', function(){
    let input = document.getElementById('input-file')
    let profilePic = document.getElementById('profile-pic')

    function handleImageUpload(event) {
        let imageFile = event.target.files[0]
        let reader = new FileReader()

        reader.onload = function (e) {
            profilePic.src = e.target.result
        }
        reader.readAsDataURL(imageFile)
    }
    input.addEventListener('change', handleImageUpload)
})
function createPro() {
    create.style.display = 'none'
}
create.addEventListener("click", createPro)
inputFile.onchange = function() {
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}

function initMap(latitude, longitude) {
    L.mapquest.key = 'wDqE9BnvH5OgxagEI2OQqf5lI1s4yZ12';
    var map = L.mapquest.map('map', {
        center: [latitude, longitude],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });



    var myIcon = L.icon({
        iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker@2x.png',
        iconSize: [38, 48],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    L.marker([latitude, longitude], { icon: myIcon }).addTo(map);
    map.addControl(L.mapquest.control());
}

function getCoordinates() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            initMap(latitude, longitude);
        },
        function(error) {
            console.log(error);
            alert("Failed to retrieve your location!");
        }
    );
}


var locationButton = document.getElementById("location");
locationButton.addEventListener("click", getCoordinates);
