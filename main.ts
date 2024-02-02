serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeLine("Hello!")
    basic.pause(2000)
})
