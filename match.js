let currentDay = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a')
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

function checkMatch() {
    var randomNumber = generateRandomNumber()
    var messageElement = document.getElementById('message')

    if (randomNumber % 2 === 0) {
        messageElement.textContent = "Congratulations! They snifffed you back at" + currentDay + "!"
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
      console.log(json);
  })
  .catch(error => console.error(error));
}