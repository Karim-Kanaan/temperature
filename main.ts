let current_temperature = 0
// Created by: Karim Kanaan
// Created on: Sept 27 2022
// 
// This program tells the microbit to display the value of the temperature variable
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
