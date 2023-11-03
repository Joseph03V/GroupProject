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

// const userCardTemplate = document.querySelector("[data-user-template]")
// const userCardContainer = document.querySelector("[data-user-cards-container]")
// const searchInput = document.querySelector("[data-search]")
// const userArr = [names.idx]




// let users = [ ]
// searchButton = document.getElementById('searchbutton')
// searchButton.addEventListener('click', (e) => {
//     event.preventDefault()
//     let value = e.target.value.toLowerCase()
//     users.forEach(user => {
//         console.log('user', user)
//         let view = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
//         user.element.classList.toggle('hide', !view)
//     })
// })
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//    users = data.map((user, idx) => {
//     const names = ['scooby', 'chichi', 'firulais', 'milo', 'loki', 'april', 'spot', 'kane', 'dick', 'jane']
//     const email = ['scooby@scoobysnacks.com', 'chichi@aychihuahua.com', 'firulais@dogsinmexicoarebuiltdifferent.com',
//      'milo@miloslilmamas.com', 'loki@catsarehotteranyways.com', 'april@aprilshowersbringmayflowers.com', 'spot@seespotrun.com',
//       'kane@abeldeservedtodie.com', 'dick@funwithdick.com', 'jane@funwithjane.com']
//     console.log(names[idx])
//         const card = userCardTemplate.content.cloneNode(true).children[0]
//         const header = card.querySelector("[data-header]")
//         const body = card.querySelector("[data-body]")
//         header.textContent = names[idx]
//         body.textContent = email[idx]
//         userCardContainer.append(card)
//         card.classList.add('hide')
//         return {name: names[idx], email: email[idx], element:card }

       
//     })


// })
    
let breeds = ["pitbull", "golden retriever", "chiuahua", "border collie",
 "yellow lab", "armenian gamper", "scooby", "husky", "poodle","german shepherd", 'chichi', 'firulais', 'milo',
  'loki', 'delilah', 'spot', 'kane', 'dick', 'jane'];
document.getElementById("searchbutton").addEventListener("click", codySearch)

function codySearch(){
    event.preventDefault()
    let element = document.getElementById("search").value;
    var newArray = breeds.filter(function (el) {
        if (element.toLowerCase() == el.toLowerCase())
        return el;
})
    let url = newArray + ".html";
    if(newArray == "yellow lab"){
        url = "yellow.html";
    }
    if(newArray == "jane"){
        url = "yellow.html";
    }
    if(newArray == "golden retriever"){
        url = "golden.html";
    }
    if(newArray == "milo"){
        url = "golden.html";
    }
    if(newArray == "armenian gamper"){
        url = "gamper.html";
    }
    if(newArray == "scooby"){
        url="gamper.html"
    } 
    if(newArray == "border collie"){
        url = "border.html";
    }
    if(newArray == "spot"){
        url = "border.html";
    }
    if(newArray == "poodle"){
        url = "poodle.html";
    }
    if(newArray == "firulais"){
        url = "poodle.html";
    }
    if(newArray == "chihuahua"){
        url = "chihuahua.html";
    }
    if(newArray == "chichi"){
        url = "chihuahua.html";
    }
    if(newArray == "german shephard"){
        url = "gshephard.html";
    }
    if(newArray == "kane"){
        url = "gshephard.html";
    }
    if(newArray == "pitbull"){
        url = "pitbull.html";
    }
    if(newArray == "dick"){
        url = "pitbull.html";
    }
    if(newArray == "husky"){
        url = "husky.html";
    }
    if(newArray == "loki"){
        url = "husky.html";
    }
    if(newArray == "dalmation"){
        url = "husky.html";
    }
    if(newArray == "delilah"){
        url = "husky.html";
    }
    else if (element != newArray) {
        alert('Sorry! Not a valid search')
    }
    profiletab(url);
}
function profiletab(url){
    window.open(url, '_blank');
}