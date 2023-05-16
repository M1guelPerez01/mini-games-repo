//selecting all squares
const squares = document.querySelectorAll('.square')
//selecting target
const target = document.querySelector('.target')
//searching time left
const timeleft = document.querySelector('#time-left')
//searching for score
const score = document.querySelector('#score')

//starting
let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('target')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('target')
    hitPosition = randomSquare.id
    console.log(randomSquare)
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

//creates new target every 1000 milliseconds
function moveTarget() {
    timerId = setInterval(randomSquare, 1000)
}


moveTarget()

//displays time
function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! SCORE: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)