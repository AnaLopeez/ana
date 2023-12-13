input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
})
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
let contador = 0
basic.forever(function () {
    basic.showNumber(contador)
    contador = 0
})
