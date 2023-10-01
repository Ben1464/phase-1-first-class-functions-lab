const drivers=['James','Alex','Jane','Benson'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
function createFareMultiplier(x){
    return (y) => x * y;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function fareDoubler(x){
    return x * 2;
}

function fareTripler(x){
    return x *3;
}

function selectDifferentDrivers(arrayOfDrivers, functionX){
    return functionX(arrayOfDrivers)
}
