function go_forward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -115,
    robotbit.Motors.M2A,
    115
    )
}
function go_backward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    130,
    robotbit.Motors.M2A,
    -130
    )
}
function stop () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    0
    )
}
function turn_left () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    130
    )
}
function left_round () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    130,
    robotbit.Motors.M2A,
    130
    )
}
function right_round () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -130,
    robotbit.Motors.M2A,
    -130
    )
}
function turn_right () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -130,
    robotbit.Motors.M2A,
    0
    )
}
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
	
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        go_forward()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        turn_left()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        turn_right()
    } else {
        stop()
    }
})
