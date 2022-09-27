let current_temperature = 0
// In the forever block so that it is constantly running wqithout the need for human intervention
basic.forever(function () {
    // So that the variable is in celsius format
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
