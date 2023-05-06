radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.pause(2)
    radio2 = receivedNumber
})
let radio2 = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(7)
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
basic.forever(function () {
    if (radio2 == 1) {
        RingbitCar.forward()
    } else if (radio2 == 2) {
        RingbitCar.turnleft()
    } else if (radio2 == 3) {
        RingbitCar.turnright()
    } else if (radio2 == 4) {
        RingbitCar.back()
        basic.pause(1000)
    } else {
        radio2 = 0
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
