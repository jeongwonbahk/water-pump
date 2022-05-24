let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    if (value < 700) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
