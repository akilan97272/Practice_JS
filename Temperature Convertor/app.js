document.getElementById('submit').onclick = function () {
    let celsius = document.getElementById('forCelsius').value;
    let fahrenheit = document.getElementById('forFahrenheit').value;
    let result = document.getElementById('result');

    // Check for invalid inputs
    if (isNaN(celsius) || isNaN(fahrenheit)) {
        result.textContent = "Invalid input. Please enter a number!";
        return;
    }

    // Trim whitespace and handle empty inputs
    celsius = celsius.trim();
    fahrenheit = fahrenheit.trim();

    if (celsius === "" && fahrenheit === "") {
        result.textContent = "No input given. Please enter a value in either field.";
        result.classList.remove("result");
        return;
    }

    // Perform conversions
    if (celsius !== "" && fahrenheit === "") {
        let fahrenheitResult = (parseFloat(celsius) * (9 / 5)) + 32;
        result.textContent = `${celsius}°C = ${fahrenheitResult.toFixed(2)}°F`;
        result.classList.add("result");

    } else if (fahrenheit !== "" && celsius === "") {
        let celsiusResult = (parseFloat(fahrenheit) - 32) * (5 / 9);
        result.textContent = `${fahrenheit}°F = ${celsiusResult.toFixed(2)}°C`;
        result.classList.add("result");
    } else if (celsius !== "" && fahrenheit !== "") {
        let fahrenheitResult = (parseFloat(celsius) * (9 / 5)) + 32;
        let celsiusResult = (parseFloat(fahrenheit) - 32) * (5 / 9);
        result.textContent = `${celsius}°C = ${fahrenheitResult.toFixed(2)}°F || ${fahrenheit}°F = ${celsiusResult.toFixed(2)}°C`;
        result.classList.add("result");
    }
};
