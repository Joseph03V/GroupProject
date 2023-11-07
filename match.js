let currentDay = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a')
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}
var randomNumber = generateRandomNumber()
function checkMatch() {
    var messageElement = document.getElementById('message')

    if (randomNumber % 2 === 0) {
        messageElement.textContent = "Congratulations! They snifffed you back on " + currentDay + "!"
    } else {
        messageElement.textContent = "Sorry pal, they don't want to sniff you."
    }
}

var matchButton = document.getElementById('match')
matchButton.addEventListener("click", checkMatch)

let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', calculate)
function calculate() {
  let fname = 'martin';
  let sname = 'anissa';
  let apiKey = '4ac4ca9a4cmsh19bcbe5ca1ee2adp1860a4jsn4c908e1e77ab';
  

  let link = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`;

  fetch(link, {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
  })
  .then(response => response.json())
  .then(json => {
      let percentage = json.percentage
      document.getElementById('message').textContent = `Your compatibility is ${randomNumber}%`
  })
  .catch(error => console.error(error));
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

