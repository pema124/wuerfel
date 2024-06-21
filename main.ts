input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showNumber(randint(1, 6))
})
