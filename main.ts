radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
    led.toggle(1, 1)
})
radio.onReceivedString(function (receivedString) {
    serial.writeString(receivedString)
    led.toggle(1, 1)
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    led.toggle(1, 1)
})
radio.setGroup(99)
basic.showLeds(`
    # # # . #
    # . # . #
    # # # . .
    . . . # .
    # # . . #
    `)
