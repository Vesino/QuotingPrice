export function getYearDifference(year){
    return new Date().getFullYear() - year;
};


// Compute the amount given the brand
export function computeBrand(marca){
    let increment;

    switch(marca){
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05
            break;
        default:
            break;
    };
    return increment
};