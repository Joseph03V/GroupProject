create = document.getElementById('create')
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
create.addEventListener('click', createPro)
inputFile.onchange = function() {
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}


// L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

//   function icon(){
//     let link = 'https://assets.mapquestapi.com/icon/v2/marker@2x.png'
//     L.mapquest.key = 'wDqE9BnvH5OgxagEI2OQqf5lI1s4yZ12';

//     fetch(link)
//     .then(function(response){
//         return response.json()
//     })
//   }
  
//   icon();

