class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); // Return volume rounded to 4 decimal places
    }
}

let cylinder = new Cylinder(5, 10); 
let volume = cylinder.calculateVolume();
console.log("Volume of the cylinder:", volume);
