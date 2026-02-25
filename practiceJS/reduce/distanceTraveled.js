let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let totalDistance = trips.reduce(function(accumulator, trip) {
    return accumulator + trip.distance;
}, 0);  

console.log(totalDistance);