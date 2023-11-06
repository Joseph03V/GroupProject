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


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = {
        duration: 200,
        indicators: true,
        padding: 100,
    };
    var instances = M.Carousel.init(elems, options);
});

