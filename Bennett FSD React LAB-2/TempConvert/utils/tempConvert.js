function convert(temp, unit) {
    if(unit === "C") {
        return 1.8 * temp + 32;
    } else {
        return (temp - 32) / 1.8;
    }
}

export default convert;