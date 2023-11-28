const headerText = document.getElementById('header-text');
const text = headerText.innerText;
headerText.innerText = '';

let index = 0;

function showText() {
  headerText.style.visibility = 'visible';
  headerText.textContent += text[index];
  index++;

  if (index === text.length) {
    clearInterval(timer);
  }
}

// Change the interval duration (in milliseconds) for the speed of letter reveal
const timer = setInterval(showText, 200); // Adjust the interval for speed

// You can trigger the appearance and disappearance of the header using different events or timings
// For example, to make it disappear after a certain time:
setTimeout(() => {
  headerText.style.visibility = 'hidden';
}, 100); // Change the duration (in milliseconds) for how long the header remains visible
// Function to display the custom alert
function displayAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'block';
  }
  
  // Function to close the custom alert
  function closeAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';
  }
  
  // Event listener for button click to show the custom alert
  document.getElementById('alertButton').addEventListener('click', displayAlert);
  