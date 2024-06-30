"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "red";
    TrafficLight["Yellow"] = "yellow";
    TrafficLight["Green"] = "green";
})(TrafficLight || (TrafficLight = {}));
;
class Robot {
    constructor() {
        this.activeColour = TrafficLight.Red;
        setInterval(() => {
            if (this.activeColour == TrafficLight.Red) {
                this.activeColour = TrafficLight.Yellow;
            }
            else if (this.activeColour == TrafficLight.Yellow) {
                this.activeColour = TrafficLight.Green;
            }
            else {
                this.activeColour = TrafficLight.Red;
            }
            console.log(this.activeColour);
        }, 10000);
    }
}
new Robot();
