var screen = window.screen;
/**
 * Returns the pixel ratio of the current device, as a value from 0 to 1.
 */
export function getDevicePixelRatio() {
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (screen.systemXDPI &&
        screen.logicalXDPI &&
        screen.systemXDPI > screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = screen.systemXDPI / screen.logicalXDPI;
    }
    else if (window.devicePixelRatio) {
        ratio = window.devicePixelRatio;
    }
    return ratio;
}
//# sourceMappingURL=getDevicePixelRatio.js.map