function convertTemp(temp, unit) {
    if(unit == "C") {
        return 1.8 * temp + 32;
    }
    else {
        return (temp - 32) / 1.8;
    }
}

function toggleUnit(unit) {
    return unit === "C" ? "F" : "C";
}

export {convertTemp, toggleUnit};