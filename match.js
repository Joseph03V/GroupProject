let currentDay = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a')
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

function checkMatch() {
    var randomNumber = generateRandomNumber()
    var messageElement = document.getElementById('message')

    if (randomNumber % 2 === 0) {
        messageElement.textContent = "Congratulations! They snifffed you back on " + currentDay + "!"
    } else {
        messageElement.textContent = "Sorry pal, they don't want to sniff you."
    }
}

var matchButton = document.getElementById('match')
matchButton.addEventListener("click", checkMatch)

