// 1. Copy and paste your prototype in here and refactor into class syntax.

// Parent Class:

class CuboidMaker {
    constructor(obj) {
        this.length = obj.length;
        this.width = obj.width;
        this.height = obj.height;
    }

    volume() {
        const v = this.length * this.width * this.height;
        return v;
    }

    surfaceArea() {
        const sa = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return sa;
    }

}

// Stretch Goal(Subclasses):

class CubeMaker extends CuboidMaker {
    constructor(obj) {
        super(obj);
        this.dimensions = obj.dimensions;
    }

    cube_vol() {
        const cubeVol = this.dimensions ** 3;
        return cubeVol;
    }

    cube_surfaceArea() {
        const cubeSa = 6 * (this.dimensions ** 2)
        return cubeSa;
    }

}

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

const cuboid = new CubeMaker({  
    length: 4,
    width: 5,
    height: 5,
    dimensions: 5,
});

console.log(cuboid.volume()); 
console.log(cuboid.surfaceArea()); 
console.log(cuboid.cube_vol()) 
console.log(cuboid.cube_surfaceArea()) 


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
