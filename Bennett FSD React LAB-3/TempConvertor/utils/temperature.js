function convertTemp(temperature, unit) {
    if(unit == "C") {
        return 1.8 * temperature + 32;
    } else if(unit == "F") {
        return (temperature - 32) / 1.8;
    }
}

export {convertTemp};