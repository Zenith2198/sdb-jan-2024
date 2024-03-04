class Location {
	constructor(name) {
		this.name = name;
		this.connectedLocations = {};
	}
}

class World {
	constructor(locations, startLocation) {
		this.locations = locations;

		console.log("You are at", startLocation);
		this.currLocation = this.locations[startLocation];
	}

	connectLocations(loc, connections) {
		connections.forEach((conn) => {

			this.locations[loc].connectedLocations[conn] = this.locations[conn];
			this.locations[conn].connectedLocations[loc] = this.locations[loc];
		});
	}

	move(newLocation) {
		if (newLocation in this.currLocation.connectedLocations) {
			console.log("You move to", newLocation);
			this.currLocation = this.locations[newLocation];
		} else {
			console.log("You can't go from", this.currLocation.name, "to", newLocation);
		}
	}
}

let world = new World({
	home: new Location("home"),
	store: new Location("store"),
	friendHouse: new Location("friendHouse"),
	sidewalk: new Location("sidewalk")
}, "home");

world.connectLocations("sidewalk", ["home", "store", "friendHouse"]);
world.connectLocations("home", ["friendHouse"]);

world.move("sidewalk");
world.move("store");
world.move("home");
world.move("friendHouse");
world.move("sidewalk");
world.move("home");