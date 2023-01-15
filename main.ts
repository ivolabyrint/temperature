radio.onReceivedNumber(function (receivedNumber) {
	
})
let temp = 0
radio.setGroup(1)
basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
})
