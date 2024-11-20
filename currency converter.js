function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const direction = document.getElementById("direction").value;
    const resultElement = document.getElementById("result");

    // Validate input amount
    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Please enter a valid amount.";
        return;
    }

    // Conversion rates
    const inrToUsdRate = 0.012; 
    const usdToInrRate = 83.0;  

    let convertedAmount;
    if (direction === "INRtoUSD") {
        convertedAmount = amount * inrToUsdRate;
        resultElement.textContent = `${amount} INR = ${convertedAmount.toFixed(2)} USD`;
    } else if (direction === "USDtoINR") {
        convertedAmount = amount * usdToInrRate;
        resultElement.textContent = `${amount} USD = ${convertedAmount.toFixed(2)} INR`;
    } else {
        resultElement.textContent = "Please select a valid conversion direction.";
    }
}
