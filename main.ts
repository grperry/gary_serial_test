serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeString("Hello!")
    basic.pause(2000)
})
