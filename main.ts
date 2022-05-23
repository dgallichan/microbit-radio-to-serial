radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    serial.writeString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
radio.setGroup(99)
basic.showLeds(`
    # # # . #
    # . # . #
    # # # . .
    . . . # .
    # # . . #
    `)
