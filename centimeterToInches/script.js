// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const cmInput = document.getElementById('cmInput');
    const convertBtn = document.getElementById('convertBtn');
    const resultElement = document.getElementById('result');
    
    // Add event listener to the convert button
    convertBtn.addEventListener('click', convert);
    
    // Allow conversion by pressing Enter key
    cmInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            convert();
        }
    });
    
    // Conversion function
    function convert() {
        // Get input value
        const cmVal = parseFloat(cmInput.value);
        
        // Validate input
        if (isNaN(cmVal) || cmVal < 0) {
            resultElement.style.display = "block";
            resultElement.innerHTML = "Please enter a valid positive number";
            resultElement.style.color = "#e74c3c";
            return;
        }
        
        // Perform conversion
        const incnVal = cmVal / 2.54;
        
        // Display result
        resultElement.style.display = "block";
        resultElement.style.color = "#333";
        resultElement.innerHTML = `${cmVal} cm = ${incnVal.toFixed(3)} inches`;
    }
});