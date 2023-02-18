const colors = ["red", "green", "rgba(133,122,200)", "#F15025"]
const btn = document.getElementById('botao')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    //cria número aleaatório entre 0 e 3
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}