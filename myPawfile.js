create = document.getElementById('create')
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