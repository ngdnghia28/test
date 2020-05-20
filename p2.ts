// Vehicle
abstract class Vehicle {
    static minimumWidth: number
    space: number
}

class Bike extends Vehicle {
    static minimumWidth = 0.8
}

class Car extends Vehicle {
    static minimumWidth = 2
}

// PackingLot
abstract class PackingSlot {
    static priceUnit: number;
    // index of slot in packing slot
    locationIndex: number;
    vehicle: Vehicle;
    timeIn: Date;
    timeOut: Date;
    space: number;
    calculateFee(): number { return 0; }
    isServing():boolean {return true;}
}

class BikeSlot extends PackingSlot {
    static priceUnit = 2;
}

class CarSlot extends PackingSlot {
    static priceUnit = 10;
}


// Packing space
class PackingSpace {
    name: string;
    description: string;
    // Total space of packing space
    space: number;
    slots: PackingSlot[]

    // Return number of vehicles are serving
    count() { }

    /**
     * To check if it have empty packing lot or not
     *  for simple only check if remaining space can serve new vehicle
     */
    canServe(): boolean { return true; }

    // Packing vehicle
    serve(vehicle: Vehicle): PackingSlot | null { return null; }
    
    // if 2 or more slots are not serving we can merge them to make an larger empty slot
    private mergeSlot(){}
    // if vehicle is small so make a slot for vehicle and an empty slot
    private splitSlot(){}

    constructor(name: string, description: string) { }
}

// Packing
class PackingLot {
    static spaceA = new PackingSpace('Parking Lot Space A', 'Minimum width ≥ 2 metres')
    static spaceB = new PackingSpace('Parking Lot Space B', 'Minimum width > 0.5 metres & < 2 metres')
    static capacity = 79;

    // Return number of vehicles are serving
    count(): number { return 0; }

    // To check if it can serve any more or not
    canServe(): boolean { return true; }

    // Packing vehicle
    serve(vehicle: Vehicle): PackingSlot | null { return null; }
}

