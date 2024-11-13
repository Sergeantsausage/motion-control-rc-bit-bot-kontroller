input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    radio.sendNumber(1)
    basic.pause(250)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    radio.sendNumber(2)
    basic.pause(250)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(3)
    basic.pause(250)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    radio.sendNumber(4)
    basic.pause(250)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    radio.sendNumber(0)
    basic.pause(250)
    basic.clearScreen()
})
radio.setGroup(12)
