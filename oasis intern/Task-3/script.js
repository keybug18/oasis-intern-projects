function convertTemperature() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var temperature = parseFloat(document.getElementById("temperature").value);

    if (isNaN(temperature)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    var convertedvalue;
    var resultUnit;

    switch (fromUnit) {
        case "C":
            if (toUnit === "F") {
                convertedvalue = (temperature * 9/5) + 32;
                resultUnit = "F";
            } else if (toUnit === "K") {
                convertedvalue = temperature + 273.15;
                resultUnit = "K";
            } else {
                convertedvalue = temperature;
                resultUnit = "C";
            }
            break;

        case "F":
            if (toUnit === "C") {
                convertedvalue = (temperature - 32) * 5/9;
                resultUnit = "C";
            } else if (toUnit === "K") {
                convertedvalue = (temperature - 32) * 5/9 + 273.15;
                resultUnit = "K";
            } else {
                convertedvalue = temperature;
                resultUnit = "F";
            }
            break;

        case "K":
            if (toUnit === "C") {
                convertedvalue = temperature - 273.15;
                resultUnit = "C";
            } else if (toUnit === "F") {
                convertedvalue = (temperature - 273.15) * 9/5 + 32;
                resultUnit = "F";
            } else {
                convertedvalue = temperature;
                resultUnit = "K";
            }
            break;
    }

    document.getElementById('result').value = convertedvalue.toFixed(2) + ' ' + resultUnit;
}
