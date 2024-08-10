// stopwatch.js

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let timeElapsed = 0;

// Function to format time into MM:SS:MS
function formatTime(ms) {
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    const milliseconds = Math.floor(ms % 1000 / 10); // Get milliseconds as two digits
    return `${pad(minutes)}:${pad(seconds)}:${padMilliseconds(milliseconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function padMilliseconds(ms) {
    return ms < 10 ? '0' + ms : ms; // Ensure milliseconds are two digits
}

// Start the stopwatch
function startTimer() {
    if (running) return;
    running = true;
    startTime = new Date().getTime();
    tInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
}

// Stop the stopwatch
function stopTimer() {
    if (!running) return;
    running = false;
    clearInterval(tInterval);
}

// Reset the stopwatch
function resetTimer() {
    stopTimer();
    timeElapsed = 0;
    document.getElementById('time').innerText = formatTime(timeElapsed);
}

// Update the time display
function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime + timeElapsed;
    document.getElementById('time').innerText = formatTime(difference);
}

// Event listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
