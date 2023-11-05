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
locationButton.addEventListener("change", getCoordinates);

let input = document.getElementById('input-file')
let WIDTH = .5
input.addEventListener('click', (event) => {
    let imageFile = event.target.files[0]
    let reader = new FileReader
    reader.readAsDataURL(imageFile)
    
    reader.onload = (event) => {
        let imageURL = event.target.result 
        let image = document.createElement('img')
        image.src = imageURL
        image.onload = (e) => {
            let canvas = document.createElement('canvas')
            let ratio = WIDTH / e.target.width 
            canvas.width = WIDTH 
            canvas.height = e.target.height * ratio 
            const context = canvas.getContext('2d')
            context.drawImage(image, 0, 0, canvas.width, canvas.height)
            let newImageURL = context.canvas.toDataURL('image/jpeg', 90)
            let newImage = document.createElement('img')
            newImage.src = newImageURL
            document.getElementById('profileForm').appendChild(newImage)
            console.log(newImage)
        }
    }
})