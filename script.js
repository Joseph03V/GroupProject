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

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const userArr = [names.idx]

function showPro() {

}

let users = [ ]
searchButton = document.getElementById('searchbutton')
searchButton.addEventListener('click', (e) => {
    event.preventDefault()
    let value = e.target.value.toLowerCase()
    users.forEach(user => {
        console.log('user', user)
        let view = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle('hide', !view)
    })
})
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
   users = data.map((user, idx) => {
    const names = ['scooby', 'chichi', 'firulais', 'milo', 'loki', 'april', 'spot', 'kane', 'dick', 'jane']
const email = ['scooby@scoobysnacks.com', 'chichi@aychihuahua.com', 'firulais@dogsinmexicoarebuiltdifferent.com',
     'milo@miloslilmamas.com', 'loki@catsarehotteranyways.com', 'april@aprilshowersbringmayflowers.com', 'spot@seespotrun.com',
      'kane@abeldeservedtodie.com', 'dick@funwithdick.com', 'jane@funwithjane.com']
    console.log(names[idx])
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = names[idx]
        body.textContent = email[idx]
        userCardContainer.append(card)
        card.classList.add('hide')
        return {name: names[idx], email: email[idx], element:card }
       
    })


})
    
 

