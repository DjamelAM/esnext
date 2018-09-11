/* let */

let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

/* const */

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
citiesId.push("tokyo")
console.log(citiesId);

/* Création d'objet */

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    const temperature = 20;
    return { city, temperature }
}
const weather = getWeather(favoriteCityId);
console.log(weather)

/* Affectation destructurée */

const {
    city,
    temperature
} = weather;

console.log(city)
console.log(temperature)

/* Rest operator */

let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

/* Classe */

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
    toString() {
        return "Trip [" + this.id + "," + this.name + "," + this.imageUrl + "," + this._price + "]";;
    }
}

parisTrip = new Trip("paris", "Paris", "img / paris.jpg");

console.log(parisTrip);
console.log(parisTrip.name);
parisTrip._price = 100;
console.log(parisTrip.toString());
console.log(parisTrip);
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

/* héritage */

console.log("héritage");
class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl)
        this.price = 0
    }
    toString() {
        return "Free" + super.toString();
    }
}
freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());

/* Promise, Set, Map, Arrow Function */

class TripService {
    constructor() {
        // TODO Set of 3 trips
        //
        let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg')
        let trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

        this.trips = new Set();
        this.trips.add(trip1);
        this.trips.add(trip2);
        this.trips.add(trip3);

    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(function (err, retour) {

                let tripArray = Array.from(trips).filter(trip => {
                    if (trip == tripName) {
                        retour = trip;
                    }
                })

                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (err) {
                    reject(err); // en cas d'erreur
                } else {
                    resolve(retour); // en cas de succès
                }


            }, 2000)
        });
    }
}
class PriceService {
    constructor() {
        // TODO Map of 2 trips
        let prices = new Map();
        // 'paris' --> price = 100
        prices.set('paris', 100)
        // 'rio-de-janeiro' --> price = 800)
        prices.set('rio-de-janeiro', 800)
        // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}