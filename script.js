// Elements
const loginBtn = document.getElementById('login-btn');
const profileName = document.querySelector('#profile-box p:nth-of-type(1)'); // Name paragraph
const profileEmail = document.querySelector('#profile-box p:nth-of-type(2)'); // Email paragraph

// Handle Login
loginBtn?.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    if (username && email) {
        // Save user info to localStorage (or send to backend for persistence)
        localStorage.setItem('user', JSON.stringify({ username, email }));

        // Display updated profile
        updateProfileSection();

        alert('Login successful!');
    } else {
        alert('Please enter both name and email.');
    }
});

// Function to Update Profile Section
function updateProfileSection() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        profileName.innerHTML = `<strong>Name:</strong> ${user.username}`;
        profileEmail.innerHTML = `<strong>Email:</strong> ${user.email}`;
    }
}

// Call on page load to populate profile if user data exists
document.addEventListener('DOMContentLoaded', updateProfileSection);
