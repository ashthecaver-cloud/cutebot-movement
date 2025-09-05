basic.showString("\"IoT4Ag!\"")
basic.forever(function () {
    cuteBot.motors(53, 53)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 2)
    cuteBot.stopcar()
})
