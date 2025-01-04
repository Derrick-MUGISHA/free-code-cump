const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const validateUSNumber = (input) => {
    const validPatterns = [
        /^1?\s?\d{3}-\d{3}-\d{4}$/, // 555-555-5555 or 1 555-555-5555
        /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/, // (555)555-5555 or 1 (555) 555-5555
        /^1?\s?\d{10}$/, // 5555555555 or 15555555555
        /^1?\s?\d{3}\s\d{3}\s\d{4}$/, // 555 555 5555 or 1 555 555 5555
    ];
    return validPatterns.some((pattern) => pattern.test(input));
};

checkBtn.addEventListener('click', () => {
    const input = userInput.value.trim();
    if (!input) {
        alert('Please provide a phone number');
        return;
    }

    if (validateUSNumber(input)) {
        resultsDiv.textContent = `Valid US number: ${input}`;
        resultsDiv.style.color = 'green';
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
        resultsDiv.style.color = 'red';
    }
});

clearBtn.addEventListener('click', () => {
    userInput.value = '';
    resultsDiv.textContent = '';
});
