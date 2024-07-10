input.onButtonPressed(Button.A, function () {
    CutebotPro.distanceRunning(CutebotProOrientation.Advance, 100, CutebotProDistanceUnits.Cm)
})
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
basic.forever(function () {
    CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xff0000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0x0000ff)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
})
