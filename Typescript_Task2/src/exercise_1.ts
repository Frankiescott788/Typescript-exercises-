enum TrafficLight {
    Red = "red",
    Yellow = "yellow",
    Green = "green"
};

class Robot {
    private activeColour : TrafficLight = TrafficLight.Red;

    constructor() {
        setInterval(() => {
            if(this.activeColour == TrafficLight.Red) {
                this.activeColour = TrafficLight.Yellow;
            } else if(this.activeColour == TrafficLight.Yellow) {
                this.activeColour = TrafficLight.Green
            } else {
                this.activeColour = TrafficLight.Red;
            }
            console.log(this.activeColour)
        }, 10000)
    }
}

new Robot();

