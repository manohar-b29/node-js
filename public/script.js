document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stop form submission
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    alert(`Welcome, ${username}! Your travel dashboard will open soon.`);
  } else {
    alert('Please enter both username and password.');
  }
});

