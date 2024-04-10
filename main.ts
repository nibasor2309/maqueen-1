control.onEvent(EventBusSource.MES_BROADCAST_GENERAL_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    }
    control.raiseEvent(
    EventBusSource.MES_BROADCAST_GENERAL_ID,
    EventBusValue.MICROBIT_EVT_ANY
    )
})
