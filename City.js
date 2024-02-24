function cityInfo(city) {
    let keys = Object.keys(city);
    for ( let key of keys){
        console.log(`${key} -> ${city[key]}`);
    }

    /*for ( let product in city){
        console.log(`${product} -> ${city[product]}`);
    } */  
}
    cityInfo ({
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    });



